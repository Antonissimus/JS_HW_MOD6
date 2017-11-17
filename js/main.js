'use strict'

// Task 1



const block = document.querySelector('.task1 .block');
block.addEventListener('mousemove', function (e) {
  const answer = document.querySelector('.coordinates');
  let mouse_x = e.clientX - block.getBoundingClientRect().x;
  let mouse_y = e.clientY - block.getBoundingClientRect().y;
  answer.innerHTML = 'X: ' + mouse_x + ', Y: ' + mouse_y;

});

// Task 2

function chgBackground() {
  folder.classList.toggle('opened');
}

let folder = document.querySelector('.folder');
folder.addEventListener('dblclick', chgBackground);

// Task 3

function makeBlock(nOfBlock) {
  let container = document.querySelector('.task3 .container');
  for (let i = 0; i < nOfBlock; i++) {
    let block = document.createElement("div");
    block.className = 'box';
    container.appendChild(block);
  }
}

makeBlock(300);

let box = document.querySelectorAll('.box');
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('mouseenter', function () {
    box[i].style = "border-radius: 15px;"

  })
  box[i].addEventListener('mouseleave', function () {
    box[i].style = "border-radius: 0px;"

  })
}

// task 4

let imgBox = document.querySelector('.task4 .imgBox');
let imgs = document.querySelectorAll('.task4 img');
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function () {
    let url = imgs[i].getAttribute('src')
    imgBox.style.backgroundImage = 'url(' + url + ')';
  })
}

// task 5
let pos = 0;
let step = 100;
let jumpinBox = document.querySelector('.task5 .block');
jumpinBox.addEventListener('click', function () {
  pos = pos + step;
  jumpinBox.style.marginTop = pos + 'px';

});

// task 6
let switchCounter = 0;
let switchBox = document.querySelector('.task6 .switch');
switchBox.addEventListener('click', function () {
  switchCounter++
  switch (switchCounter) {
    case 1:
      switchBox.style.left = '42px';
      break;
    case 2:
      switchBox.style.left = '82px';
      break;
    default:
      switchBox.style.left = '2px';
      switchCounter = 0;
      break;
  }
  console.log(switchCounter);

  // alert(position);
})