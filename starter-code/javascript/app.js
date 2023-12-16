const darkMode = document.getElementById('switch');

darkMode.addEventListener('click', changeDarkMode);



function changeDarkMode () {

    const bodyDarkMode = document.querySelector('.body');
    const switchBotton = document.querySelector('.slider');
    const inputSeachBar = document.querySelector('.input-content');
    const inputPlaceHolder = document.querySelector('.input');
    const searchTitle = document.querySelector('.search-title');
    const parragraph = document.querySelectorAll('.parragraph');
    const listOfMeaning = document.querySelectorAll('.list-of-meaning');
    const optionFont = document.getElementById('select');
    const optionIcon = document.querySelector('.icon');
    const getOptions = document.querySelector('.get-options');
   
   
    

    bodyDarkMode.classList.toggle('black-body');
    switchBotton.classList.toggle('purple-switch-botton');
    inputSeachBar.classList.toggle('input-search-bar');
    inputPlaceHolder.classList.toggle('inputPlaceHolder');
    optionFont.classList.toggle('select-font');
    optionIcon.classList.toggle('select-icon');
    getOptions.classList.toggle('get-ontions-dark');
   
    searchTitle.classList.toggle('search-title-dark-mode');
   
    parragraph.forEach( (parra) =>{
        parra.classList.toggle('parragraph-dark-mode');
    })
    

    listOfMeaning.forEach( (list) =>{
        list.classList.toggle('list-dark-mode')
    });

}

// Get the Fonts //

const selectOption = document.querySelector('.select-option');
const  options = document.querySelectorAll('.options');

selectOption.addEventListener('click', () =>{
  const getOptions = document.querySelector('.get-options');
  const optionIcon = document.querySelector('.fa-angle-down');

  optionIcon.classList.toggle('fa-angle-up')
  getOptions.classList.toggle('get-options-toggle');

});

options.forEach(option => {
option.addEventListener('click' , () =>{
    options.forEach( (option) => {option.classList.remove('seleted')});

  


})

});