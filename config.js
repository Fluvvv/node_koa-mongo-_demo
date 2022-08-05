'use strict'

const path = require('path')

module.exports = {
  port: '3333',
  secret: 'secret',
  publicDir: path.resolve(__dirname, './public'),
  logPath: path.resolve(__dirname, './logs/koa-template.log'),
  mongoDB: {
    database: 'test',
    username: 'test',
    password: '123456',
    host: 'localhost',
    port: 27017
  }
}
