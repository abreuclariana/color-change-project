const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function(){
                                                            // ou mult po colors.lenght
    const randomNumber = Math.floor(Math.random(['green','red','rgba(133,122,200)','#f15025'])*5)  //const randomNumber = 2 // esse número corresponde ao índice
    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

//const colors=['green','red','rgba(123,122,200)','#f15025']
//const btn=document.getElementById("btn")

//const color=document.querySelector(".span-color")
//console.log(btn, color)

   /**adicione um evento de click e uma função para mudar o texto do 
   * span
   */
//btn.addEventListener('click', function(){
    //const randomNumber=Math.floor(Math.random(['green','red','rgba(123,122,200)','#f15025'])*5)

    /**selecionando o body o style backgroundcolor selecionar a tag colors 
     * e criar um random dentro dela**/

 // document.body.style.backgroundColor=colors[randomNumber]
// color.textContent=colors[randomNumber]
//})
