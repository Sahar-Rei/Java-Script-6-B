const btns = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper')

// Делегация
wrap.addEventListener('click', (event) => {
    // console.dir(event.target);
    
    if(event.target && event.target.tagName == 'BUTTON'){
        console.log('Click me');
        
    }
})

btns.forEach((item) => {
    item.addEventListener('click', () => {
        console.log('Click');
        
    })
})


const button = document.createElement('button')
button.classList.add('green')
button.textContent = 6
wrap.append(button)

// console.log(btns[0].classList.value);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('green', 'blue', 'red'));
// console.log(btns[1].classList.remove('blue'));
// console.log(btns[1].classList.toggle('hello'));
// console.log(btns[1].classList.toggle('red'));


// Contains

// if(btns[0].classList.contains('red')){
//     console.log("nADQJDj");
    
// }


// btns[0].addEventListener('click', () => {
//     if(btns[0].classList.contains('red')){
//         btns[0].classList.remove('red')
// } else{
//     btns[0].classList.add('red')
// }
// })

// btns[1].addEventListener('click', () => {
//     if(btns[1].classList.contains('blue')) {
//         btns[1].classList.remove('blue')
//     } else {
//         btns[1].classList.add('blue')
//     }
// })

// btns[2].addEventListener('click', () => {
//     if(btns[2].classList.contains('green')) {
//         btns[2].classList.remove('green')
//     } else {
//         btns[2].classList.add('green')
//     }
// })

// btns[4].addEventListener('click', () => {
//     if(btns[3]){
//         btns[3].remove()
//     } else{
//         wrap.add(btns[3])
//     }
// })

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('green'))
        btn.classList.add('green')
    })
})