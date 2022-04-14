console.log("main loaded");

const server = require("koa2");
const axios = require("axios");

const app = server
console.log(app);


const hub = axios.create({
  baseURL: 'http://hub.ittps.ru:8888'
})

const is = axios.create({
  baseURL: 'http://is.ittps.ru:8888'
})

const tp = axios.create({
  baseURL: 'http://tp.ittps.ru:8888'
})

const data = axios.create({
  baseURL: 'http://tp.ittps.ru:8888'
})

console.log( data.get('/') )

// module.exports = {};
