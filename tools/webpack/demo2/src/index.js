import _ from 'lodash';
import './style.css'; //当该模块运行时，含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中
import jsLogoImg from './6bc5d8cf78d442a984e70195db059b69.svg';
import data from './data.xml'

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', 'test1'], ' ');

  //add Class Style
  element.classList.add('hello');

  //add Img File
  var myIcon = new Image();
  myIcon.src = jsLogoImg;
  element.appendChild(myIcon);

  //xml数据
  console.log(data);


  return element;
}

document.body.appendChild(component());