 npx create-react-app react-redux-demo
 npm install redux react-redux     
 https://www.youtube.com/watch?v=0bVP5cYhMuU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=14

 npm i redux-logger   
 google redux devtools
 https://github.com/zalmoxisus/redux-devtools-extension
 npm install --save redux-devtools-extension
 npm install axios redux-thunk


 npm install gh-pages --save-dev
"homepage": "http://uysalf.github.io/react-redux-demo",
 scripts:
   "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

npm run deploy   
git save changes



npm i json-server
db.json dosyası oluştur, package.json içinde :  "serve-json": "json-server --watch db.json --port 3004"
npm run serve-json  
http://localhost:3004/products


npm install -g json-server
json-server --watch db.json

