import '../scss/app.scss';
import axios from 'axios';

axios.get('./features.json')
  .then(({data}) => renderSection(data))

function renderSection(array) {
  const nodeList = document.querySelectorAll('.feature-item')
  if (array.length != nodeList.length) {
    console.log('sorry, something goes wrong 😞')
    return
  }

  nodeList.forEach((nodeItem, index) => {
    const data = array[index]
    const [img, title, desc] = nodeItem.querySelectorAll('.feature-item__img img, .feature-item__title, .feature-item__desc')
    img.src = data.img
    title.textContent = data.title
    desc.textContent = data.description
  })
}



// // // // BURGER CODE // // // //

const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav-wrapper')
burger.onclick = () => {
  burger.classList.toggle('header__burger_opened')
  nav.classList.toggle('header__nav-wrapper_opened')
}

// // // // DISABLE TRANSITION DURING RESIZE // // // // (for burger)

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
})