require('normalize.css/normalize.css');
require('styles/App.css');



import React from 'react';

// 获取图片相关数据
import imageDatas from  'json!../data/imageDatas.json'

// 利用自执行函数 将图片名信息转图片UR路径信息
var imageDatasa = (function genImageURL(imageDatasArr) {
  let imageArr = []
  imageDatasArr.map(function (val,index) {
    let singleImageData = val;
    singleImageData.ImageURL = require('../images/' + singleImageData.fileName)
    imageArr[index] = singleImageData
  })
  return imageArr
})(imageDatas)

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="image-sec">

        </section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
