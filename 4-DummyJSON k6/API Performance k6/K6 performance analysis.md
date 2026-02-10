# k6 Test Analysis 

## Test Objective
Validate and check API responsiveness and the performance of DummyJSON endpoints during smoke test and load test and stress test conditions using k6.

## Test Environment
- Tool: k6
- Target: DummyJSON (public demo)
- Date/Time: 10/2/2026
- Machine/OS: windows 11


## Test Scenarios
1) Smoke: 1 VU for 30s
2) Load: ramp to 15 VUs, hold, ramp down
3) stress: ramp up to 80 VUs, then ramp down

## Thresholds (Pass/Fail)
- http_req_failed rate < 0.1% for smoke and load test
- http_req_duration p(95) < 800–1200ms for smoke and load test
- stress test p(95) <= 200ms

## Results Summary
### Smoke
- Requests: 30
- Errors: 0%
- p(95): 9.69ms

### Load
- Requests: 3062
- Errors: 0%
- p(95): 280.20ms
- Max VUs reached: 15 (because of my machine)

### Stress
- Requests: 19614
- Errors: 0%
- p(95): 200.0ms
- Max VUs reached: 80


## Endpoint Insights
- /products: stable response time and same results each run 
- /products/search: also stable under load test and stress test


## Risks
 Because DummyJSON is public demo the performance car vary based on:
- server variability
- Network jitter
- shared public usage


## Recommendations
- Caching for product list
- Pagination defaults and limits
- Monitoring p(95) and error rate in CI
- Run smoke test and load tests regularly to detect any failures or     regressions early