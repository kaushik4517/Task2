const square = document.querySelector('.square')

const redb = document.querySelector('.red')
const greenb = document.querySelector('.green')
const blackb = document.querySelector('.black')
const clrb = document.querySelector('.clear')

redb.addEventListener('click', () => {
    square.style.backgroundColor = 'red'

})

greenb.addEventListener('click', () => {
    square.style.backgroundColor = 'green'

})

clrb.addEventListener('click', () => {
    square.style.backgroundColor = '#bbb'

})


blackb. addEventListener('click', () => {
    square.style.backgroundColor = 'black'

})


//An event listener is a function that waits for a specific event to occur and then performs an action.//

//The querySelector method is used to find the first element in the document that matches a specified CSS selector.//



function changeColor(color) {
    document.getElementById('colorBox').style.backgroundColor = color;
}

//Fetch the location of the field by colorbox id name and the set the value of name color with in individual 
//value which is in the html code by using these.value properties// 



function changesColor(color) {
    document.getElementById('selectcolorBox').style.backgroundColor = color;
}

//same logic as above