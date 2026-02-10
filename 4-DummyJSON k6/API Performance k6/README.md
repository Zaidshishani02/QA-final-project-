# 4-API Performance k6 

Ready-to-run k6 scripts for DummyJSON:
- **Smoke** test (quick validation)
- **Load** test (ramp up and hold)
- **Stress** test 

## Covered endpoints
- GET /products
- GET /products/search?q=phone
- GET /auth/me (Bearer token from /auth/login)

## Install k6
Follow Grafana k6 install docs.

## Run commands

### Smoke
bash
k6 run scripts/smoke.js --summary-export=results/smoke-summary.json


### Load
bash
k6 run scripts/load.js --summary-export=results/load-summary.json


### Stress
bash
k6 run scripts/stress.js --summary-export=results/stress-summary.json


## What to capture for submission
- CLI output screenshot (showing p(95), http_req_failed)
- The exported JSON summaries in results/
- A short written analysis (use the provided template)