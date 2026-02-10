# 3-API testing in Postman 

## the included:
- Postman collection: DummyJSON_API_QA_Portfolio.postman_collection.json
- Postman environment: DummyJSON_Env.postman_environment.json
- Data-driven CSV: data/productIds.csv 

## Import into Postman:
1. Import the collection JSON.
2. Import the environment JSON.
3. Select environment: **DummyJSON-Env**
4. go to **0 - Login and store tokens** and run first to save accessToken and refreshToken

## Run with Newman:
Prerequisites: Node.js installed.

Install:

npm install -g newman
npm install -g newman-reporter-htmlextra


Run collection:

newman run "DummyJSON API tests.postman_collection.json" ^
-e "DummyJSON-Env.postman_environment.json" ^
-d "productIds.csv" ^
-r htmlextra ^
--reporter-htmlextra-export "newman-report.html"



Run **data driven** request set:

newman run "DummyJSON API tests.postman_collection.json" -e "DummyJSON-Env.postman_environment.json" -d "productIds.csv" -r htmlextra --reporter-htmlextra-export "newman-report.html"



## Notes:
- DummyJSON simulates POST/PUT/PATCH/DELETE
- Auth /auth/login returns accessToken and refreshToken; /auth/me accepts Bearer token.

## the envirnoment and collection are exported and ready to be imported 
the files are exported as .JSON files and ready to import and they are in the same folder 