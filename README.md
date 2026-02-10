# QA final project

This repository contains my full Quality Assurance testing work for the assigned project.

## The work includes:

-Manual testing (test cases + execution)
-Bug reporting (documented defects)
-UI automation testing (Selenium + TestNG)
-API testing (Postman + Newman)
-Performance testing (k6)

Application Under Test (AUT)
Website: SauceDemo
URL: https://www.saucedemo.com/
URL: https://dummyjson.com

Work Completed Summary
## 1) Manual Testing

Created and executed 23 manual test cases
Identified 11 bugs

Documented all bugs in a structured bug report with:

Steps to reproduce
Expected vs actual results
Severity and priority
Screenshots / evidence

## 2) Bug Reporting

Total bugs reported: 11

Severity distribution:
High: 4
Medium: 3
Low: 4

## 3) UI Automation Testing

Implemented UI automation using:

Selenium WebDriver
TestNG

Test execution results:

Total automated tests executed: 11
Passed: 11
Failed: 0

## 4) API Testing (Postman + Newman)

API testing was performed using Postman, covering:

Authentication
Products
Carts
Users
Negative test cases
Data-driven execution

Newman execution results:

Total requests executed: 135
Total assertions: 145
Failed tests: 0
Skipped tests: 0
Total run duration: 29.5s
Average response time: 143ms

## 5) Performance Testing (k6)

Performance testing was executed using k6 to validate API responsiveness under:

Smoke Test: 1 VU for 30s
Load Test: ramp up to 15 VUs, hold, ramp down
Stress Test: ramp up to 80 VUs, ramp down

Results summary:
Smoke: 30 requests, 0% errors, p95 ≈ 13ms
Load: 3062 requests, 0% errors, p95 ≈ 280ms
Stress: 19614 requests, 0% errors, p95 ≈ 200ms

## Repository Contents / Files
 Manual Testing & Bug Reporting

bug report.pdf
Contains all discovered defects with full details and screenshots.

 UI Automation

AutomationTask1.zip
Includes the Selenium + TestNG automation project.

 API Testing

DummyJSON API tests.postman_collection.json
Postman collection containing API requests and test scripts.

DummyJSON-Env.postman_environment.json
Postman environment file containing variables such as base URL, tokens, IDs, and search terms.

newman-report.html
Newman execution report showing full run summary and results.

Performance Testing (k6)

smoke-summary.json
Smoke test summary output.

load-summary.json
Load test summary output.

stress-summary.json
Stress test summary output.

K6 performance analysis.md
Contains the test objective, scenarios, thresholds, analysis, risks, and recommendations.

## This submission represents a complete QA package including functional validation, defect reporting, automation, API testing, and performance testing evidence.

## each file contains another README file showing the clear instructions on how to run..etc