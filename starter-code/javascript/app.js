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
const optionSelected = document.getElementById('select');
const getOptions = document.querySelector('.get-options');

selectOption.addEventListener('click', () =>{
 
  const optionIcon = document.querySelector('.fa-angle-down');

  optionIcon.classList.toggle('fa-angle-up')
  getOptions.classList.toggle('get-options-toggle');

});

options.forEach(option => {
option.addEventListener('click' , () =>{
    let selectingOptions = option.querySelector('.option-text').innerText;
     optionSelected.innerText = selectingOptions;

    getOptions.classList.remove('get-options-toggle');

    // Changing the font //
    
       

    const root = document.querySelector(':root');


    if(optionSelected.innerHTML === 'Sans Serif'){
        root.style.setProperty('--currentFamily', 'sans-serif');
    }

    if(optionSelected.innerHTML === 'Serif'){
        root.style.setProperty('--currentFamily', 'serif');
    }

    if(optionSelected.innerHTML === 'Mono'){
        root.style.setProperty('--currentFamily', 'monospace');
    }
});

})



// Get the input value and show on the Dictionary // 

const searchIcon =  document.getElementById('search');


searchIcon.addEventListener('click', () =>{
   
    let inputValue = document.getElementById('value').value;
    const TitleSearch = document.querySelector('.search-word');
    const searchWord = document.createElement('h2');


    searchWord.innerText = inputValue


    TitleSearch.append(searchWord);




    
async function TestingFetching () {


    let meaning = document.querySelector('.list-of-meaning');
    let meaning2 = document.querySelector('.meaning2');
    const showResult = document.querySelector('.main-container');
    const api =  `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`

    
 await fetch(api) 
    .then(result => {

        return result.json();
       
    })
    .then(datos => {

        console.log(datos);
        const resultado =  datos[0].meanings[0].definitions[1].definition;
        const resultado2 =  datos[0].meanings[0].definitions[2].definition;
     

        showResult.style.display = 'block';
          
            meaning.innerText = resultado;
            meaning2.innerText = resultado2;
          


        console.log(resultado)
        console.log(resultado2)
        
       

    
    })
} 
 


    TestingFetching()






});





