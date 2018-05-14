import React, {Component} from 'react'
import {render} from 'react-dom'
import CarouselSlider from 'react-carousel-slider'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import jsonData from './slidesExample.json'

import Example from '../../src'

class Demo extends Component {
  render() {

    let exampleOne = <Example>
      {(context) => (
        <React.Fragment>
          <Example.ShowResult context={context}>
          </Example.ShowResult>
          <Example.ShowCodeBlock context={context}>
          </Example.ShowCodeBlock>
          <Example.CodeBlock context={context}>
            {() => {
              let sliderBoxStyle = {
                width: "60%",
                background: "transparent",
                border: "1px solid #e1e4e8"
              };

              let itemsStyle = {
                height: "60%",
                padding: "20px",
                background: "transparent",
                border: "1px solid #e1e4e8",
                borderRadius: "2px"
              };

              let textBoxStyle = {
                width: "60%",
                background: "rgba(155, 108, 27, 0.5)",
                top: "80%",
                textAlign: "right",
                color: "#ffffff"
              };

              let textBoxStyle2 = {
                width: "30%",
                top: "30%",
                color: "#ffffff",
                marginRight: "0%"
              };
              
              let buttonSetting = {
                placeOn: "bottom-beneath",
                style: {
                  left: {
                      color: "#929393",
                      background: "transparent",
                      border: "1px solid #e1e4e8",
                      borderRadius: "50%"
                  },
                  right: {
                      color: "#929393",
                      background: "transparent",
                      border: "1px solid #e1e4e8",
                      borderRadius: "50%"
                  }
                }
              }

              let dotsSetting = {
                placeOn: 'top',
                style: {
                    dotSize: "5px",
                    currDotColor: "rgba(155, 108, 27, 0.5)",
                    marginTop: "2px"
                }
              }
          
              let customSlideCpnts = jsonData.customSlideCpnt.items.map((item, index) => 
                <Link to = {'/page' + index} key = {index} >
                    <img src = {item.imgSrc} ></img>
                    <p style = {textBoxStyle} >{item.des1}</p>
                    <p style = {textBoxStyle2} >{item.des2}</p>
                </Link>
              );

              let customSlideCpnt = (<Router>
                <CarouselSlider dotsSetting = {dotsSetting} 
                  slideCpnts = {customSlideCpnts} 
                  manner = {{circular: false}} 
                  sliderBoxStyle = {sliderBoxStyle} 
                  buttonSetting = {buttonSetting}  
                  itemsStyle = {itemsStyle}/>
              </Router>);

            return customSlideCpnt;
          }}</Example.CodeBlock>
        </React.Fragment>
      )}
    </Example>

    return exampleOne;
  }
}

render(<Demo/>, document.querySelector('#demo'))
