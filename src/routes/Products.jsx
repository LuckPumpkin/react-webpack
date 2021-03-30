/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-09 17:06:14
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-22 18:19:23
 */
import React, { Component } from 'react';
import { Carousel, WingBlank, Flex } from 'antd-mobile'
import './product.less'

class first extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      imgHeight: 200,
    }
  }
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
  render() {
    return (
      <div style={{
        width: '100%', height: '100%'
      }} >
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a key={val} href='' style={{ display: 'inline-block', width: '100%', height: 'this.state.imgHeight'}}>
              <img 
                src = {
                  `https://zos.alipayobjects.com/rmsportal/${val}.png`
                }
                alt=''
                style={{width: '100%', verticalAlign: 'top'}}
                onload={()=>{
                  window.dispatchEvent(new Event('resize'))
                  this.setState({ imgHeight: 'auto'})
                }}
              />
            </a>
          ))}
        </Carousel>
        <div
        className = 'wbBlock' >
          <WingBlank style = {
            {
              border: '1px solid red'
            }
          } >
            <Flex>
              <Flex.Item>左</Flex.Item>
              <Flex.Item>
                <Flex direction={'column'} >
                  <Flex.Item>右上 </Flex.Item>
                  <Flex.Item>右下 </Flex.Item>
                </Flex>
              </Flex.Item>
            </Flex>
          </WingBlank>
        </div>
      </div>
    )
  }
}


export default first;