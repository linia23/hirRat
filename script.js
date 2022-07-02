// Selection for all the CSS
const score = document.querySelector('.score span')
const holes = document.querySelectorAll('.hole')
const start_btn = document.querySelector('.buttons .start')
const stop_btn = document.querySelector('.buttons .stop')
const cursor = document.querySelector('.hammer img')

// Here we changing our default cursor to hammer
window.addEventListener('mousemove', (e) => {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
})

// Giving animation for hammer
window.addEventListener('click', () => {
  cursor.style.animation = 'none'
  setTimeout(() => {
    cursor.style.animation = ''
  }, 101)
})

// When we click button game starting
start_btn.addEventListener('click', () => {
  start_btn.style.display = 'none'
  stop_btn.style.display = 'inline-block'

  let holee
  let points = 0
  // Random hole from come out mouse
  const game = setInterval(() => {
    let ran = Math.floor(Math.random() * 5)
    holee = holes[ran]

    // This part is used for taking the mouse up to the desired hole
    let set_img = document.createElement('img')
    set_img.setAttribute('src', 'https://media.geeksforgeeks.org/wp-content/uploads/20210303135621/rat.png')
    set_img.setAttribute('class', 'rat')
    holee.appendChild(set_img)
    
    setTimeout(() => {
      holee.removeChild(set_img)
    }, 1000);
  }, 1200) 
  // Need to change

  // Adding points to 0 when we hit to the mouse
  window.addEventListener('click', (e) => {
    if (e.target === holee)
    score.innerText = ++points;
  })

  // Change our points to 0 and change button stop again to the start button
  stop_btn.addEventListener('click', () => {
    clearInterval(game)
    stop_btn.style.display = 'none'
    start_btn.style.display = 'inline-block'
    score.innerHTML = '0'
  })
})