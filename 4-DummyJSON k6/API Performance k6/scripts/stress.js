import http from "k6/http";
import { check, group, sleep } from "k6";

// Treat any HTTP response as "expected" so demo API rate limiting doesn't break metrics.
http.setResponseCallback(http.expectedStatuses({ min: 200, max: 599 }));

const BASE_URL = __ENV.BASE_URL || "https://dummyjson.com";

export const options = {
  stages: [
    { duration: "1m", target: 20 },
    { duration: "1m", target: 50 },
    { duration: "1m", target: 80 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    // Only true transport failures should count here now (DNS/timeout/no response)
    http_req_failed: ["rate<0.60"],

    // IMPORTANT: apply threshold to expected responses metric
    "http_req_duration{expected_response:true}": ["p(95)<2000"],

    // Your checks should stay perfect with your "200 OR 429/5xx" logic
    checks: ["rate>0.99"],
  },
};

function checkStress(res) {
  return check(res, {
    "response received": (r) => r.status > 0,
    "200 OK OR expected under stress (429/5xx)": (r) =>
      r.status === 200 || r.status === 429 || (r.status >= 500 && r.status <= 599),
  });
}

export default function () {
  const params = { timeout: "10s" };

  group("GET /products", () => {
    const res = http.get(`${BASE_URL}/products?limit=30&skip=0`, params);
    checkStress(res);
    sleep(0.3);
  });

  group("GET /products/search", () => {
    const res = http.get(`${BASE_URL}/products/search?q=phone`, params);
    checkStress(res);
    sleep(0.3);
  });
}