const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function(){
   let hexaColor = '#' 
 for(let i = 0; i < 6; i++) {
   const randomNumber = Math.floor(Math.random() * hexa.length)
   hexaColor += hexa[randomNumber] // hexaColor = hexaColor + hexa[0]  #000000
 }  

const mainColor = document.querySelector('#main-color')
mainColor.style.backgroundColor = hexaColor
color.textContent = hexaColor // Exibe a cor hexadecimal gerada

})