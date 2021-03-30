/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-09 14:15:04
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-22 17:42:02
 */
import dva from 'dva'
import { createBrowserHistory } from 'history'
import 'antd-mobile/dist/antd-mobile.css';
import './assets/template.less'

const app = dva({
  history: createBrowserHistory(),
})




app.router(require(`./route.js`).default)


app.start('#root')