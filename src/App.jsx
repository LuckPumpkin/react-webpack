/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-09 16:25:48
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-22 17:08:24
 */
import React, { Component } from "react";
import { TabBar } from 'antd-mobile'
import First from './routes/Products.jsx'
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    }
  }
  renderContent(pageText) {
    return (
      <div style={{backgroundColor: 'white', height: '100%', width: '100%', textAlign: 'center'}}>
        
      </div>
    )
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0}}>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#33A3F4'
          barTintColor='white'
          tabBarPosition='bottom'
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title='首页'
            key='first'
            icon = {
                < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                  }}></div>}
            selectedIcon={
              < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                  }}></div>
            }
          >
            <First />
          </TabBar.Item>
          <TabBar.Item
            title='菜单'
            key='menu'
            icon = {
                < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                  }}></div>}
            selectedIcon={
              < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                  }}></div>
            }
          ></TabBar.Item>
          <TabBar.Item
            title='订单'
            key='order'
            icon = {
                < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                  }}></div>}
            selectedIcon={
              < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                  }}></div>
            }
          ></TabBar.Item>
          <TabBar.Item
            title='购物车'
            key='car'
            icon = {
                < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                  }}></div>}
            selectedIcon={
              < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                  }}></div>
            }
          ></TabBar.Item>
          <TabBar.Item
            title='我的'
            key='mine'
            icon = {
                < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                  }}></div>}
            selectedIcon={
              < div style = {
                  {
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                  }}></div>
            }
          ></TabBar.Item>
        </TabBar>
      </div>
      
    )
  }
}

export default App;