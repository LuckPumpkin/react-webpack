/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-09 14:15:04
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-09 17:22:53
 */
import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, Link } from "react-router"
import { createBrowserHistory } from 'history'
import App from './App.jsx'
import product from './routes/Products.js'

ReactDom.render(
  <Router history={ createBrowserHistory() }>
    <Route path='/' component={App}/>
    <Route path="/products" component={product} />
  </Router>,
  document.getElementById('root')
)