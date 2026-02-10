import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<800'],
  },
};

export default function () {

  group('GET /products', () => {
    const res = http.get('https://dummyjson.com/products');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
  });

}
