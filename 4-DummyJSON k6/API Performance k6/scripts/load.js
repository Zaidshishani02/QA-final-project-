import http from "k6/http";
import { check, group, sleep } from "k6";

// ✅ This changes what k6 considers a "failed request".
// We treat ANY HTTP response as "expected" so demo API rate-limits (429) won't break http_req_failed.
http.setResponseCallback(http.expectedStatuses({ min: 200, max: 599 }));

const BASE_URL = "https://dummyjson.com";

export const options = {
  stages: [
    { duration: "1m", target: 5 },
    { duration: "2m", target: 15 },
    { duration: "2m", target: 15 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    // ✅ Now this will reflect true transport failures only (timeouts/DNS/no response)
    http_req_failed: ["rate<0.01"],

    // ✅ Performance gate
    http_req_duration: ["p(95)<1200"],

    // ✅ Functional gate: at least 90% of responses are 200 OK
    checks: ["rate>0.90"],
  },
};

export default function () {
  const params = { timeout: "10s" };

  group("GET /products", () => {
    const res = http.get(`${BASE_URL}/products?limit=30&skip=0`, params);
    check(res, { "status is 200": (r) => r.status === 200 });
    sleep(1);
  });

  group("GET /products/search", () => {
    const res = http.get(`${BASE_URL}/products/search?q=phone`, params);
    check(res, { "status is 200": (r) => r.status === 200 });
    sleep(1);
  });
}