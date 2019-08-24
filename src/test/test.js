import './test.css'
let css = document.createElement('div');
css.innerText = 'css test';
css.className = 'css';
document.body.appendChild(css);

import './test.scss'
let scss = document.createElement('div');
scss.innerText = 'scss test';
scss.className = 'scss';
document.body.appendChild(scss);

import './test.less'
let less = document.createElement('div');
less.innerText = 'less test';
less.className = 'less';
document.body.appendChild(less);

import './test.styl'
let styl = document.createElement('div');
styl.innerText = 'styl test';
styl.className = 'styl';
document.body.appendChild(styl);

import imgUrl from './test.jpg'
let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);
