import { toggleAnimations } from './component/toggleAnimations.js';
import { interactiveDOMs } from './data/interactiveDOMsData.js';
import { renderGrid } from './component/renderGrid.js';


//states
let isPlaying = false;

// Buttons
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const lengthMinusButton = document.querySelector('.length.minus');
const lengthPlusButton = document.querySelector('.length.plus');
const heightMinusButton = document.querySelector('.height.minus');
const heightPlusButton = document.querySelector('.height.plus');
const lengthScreen = document.querySelector('.amount.length .lengthNr');
const heightScreen = document.querySelector('.amount.height .heightNr');

//Screen
const screenDOM = document.querySelector('#screen');
let length = 16;
let height = 9;

let DOMlist = renderGrid(screenDOM, length, height);
// renderGrid "return DOMlist"
let gridDOM = DOMlist.grid;
let spotsDOMs = DOMlist.spots;

startButton.onclick = () => {
    if (isPlaying) return;
    isPlaying = true;
    toggleAnimations(interactiveDOMs, true);
}


stopButton.onclick = () => {
    if (!isPlaying) return;
    isPlaying = false;
    toggleAnimations(interactiveDOMs, false);
}

lengthMinusButton.onclick = () => {
    if (isPlaying || length <= 2) return;
    length--;
    DOMlist = renderGrid(screenDOM, length, height);
    gridDOM = DOMlist.grid;
    spotsDOMs = DOMlist.spots;
    lengthMinusButton.classList.add('on');
    setTimeout(() => {
        lengthMinusButton.classList.remove('on')
    }, 200);
    const tempText = length > 9 ? `${length}` : `0${length}`;
    lengthScreen.innerText = tempText;
}

lengthPlusButton.onclick = () => {
    if (isPlaying || length >= 99) return;
    length++;
    DOMlist = renderGrid(screenDOM, length, height);
    gridDOM = DOMlist.grid;
    spotsDOMs = DOMlist.spots;
    lengthPlusButton.classList.add('on');
    setTimeout(() => {
        lengthPlusButton.classList.remove('on')
    }, 200);
    const tempText = length > 9 ? `${length}` : `0${length}`;
    lengthScreen.innerText = tempText;
}

heightMinusButton.onclick = () => {
    if (isPlaying || height <= 2) return;
    height--;
    DOMlist = renderGrid(screenDOM, length, height);
    gridDOM = DOMlist.grid;
    spotsDOMs = DOMlist.spots;
    heightMinusButton.classList.add('on');
    setTimeout(() => {
        heightMinusButton.classList.remove('on')
    }, 200);
    const tempText = height > 9 ? `${height}` : `0${height}`;
    heightScreen.innerText = tempText;
}

heightPlusButton.onclick = () => {
    if (isPlaying || height >= 99) return;
    height++;
    DOMlist = renderGrid(screenDOM, length, height);
    gridDOM = DOMlist.grid;
    spotsDOMs = DOMlist.spots;
    heightPlusButton.classList.add('on');
    setTimeout(() => {
        heightPlusButton.classList.remove('on')
    }, 200);
    const tempText = height > 9 ? `${height}` : `0${height}`;
    heightScreen.innerText = tempText;
}

const arr = [1, 2, 3, 4, 'o'];

console.log(arr);


const orr = arr.filter(item => typeof item === 'number');


console.log(orr);


