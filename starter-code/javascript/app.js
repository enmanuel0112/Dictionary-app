const darkMode = document.getElementById('switch');

darkMode.addEventListener('click', changeDarkMode);



function changeDarkMode () {

    const bodyDarkMode = document.querySelector('.body');
    const switchBotton = document.querySelector('.slider');
    const inputSeachBar = document.querySelector('.input-content');
    const inputPlaceHolder = document.querySelector('.input');
    const searchTitle = document.querySelector('.search-title');
    const parragraph = document.querySelectorAll('.parragraph');
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
   
    parragraph.forEach( (parra) => parra.classList.toggle('parragraph-dark-mode'));

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
   
    const loading = document.querySelector('.spinner-background');

    function LoadingSpinner () {
     
        loading.classList.add('loading-spinner-active');
    }
    
    LoadingSpinner();

    let inputValue = document.getElementById('value').value;
    
    const inputEmpty = document.querySelector('.input-empty');
    const inputBorderRed = document.querySelector('.input-content');
    
    const showResult = document.querySelector('.main-container');
    const showError = document.querySelector('.show-error');

   


// When the input is empty
    if(inputValue === ''){  
        inputEmpty.style.display = 'block';
        inputBorderRed.style.border = '1px solid var(--red)';
        showResult.style.display = 'none';
        showError.style.display = 'none';
        loading.classList.remove('loading-spinner-active');
    }else{
        inputEmpty.style.display = 'none'
        inputBorderRed.style.border = 'none'
        showResult.style.display = 'block';
        showError.style.display = 'none';
    }

// Loading spinner






// If the word is found on the API show this
setTimeout( () => {
    const mainContainer = document.querySelector('.main-content');

    async function TestingFetching () {
        mainContainer.classList.remove('show-main');

       
 
        const api =  `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
         
        const datos = await fetch(api) .then(result =>  result.json());
        console.log('este es el console de la api', datos)
    
    
        if(Array.isArray(datos)){
            loading.classList.remove('loading-spinner-active');
            mainContainer.classList.add('show-main');
           

            
      
            //Showing Meaning Definitions noun
            const showDefinitionMeaningNoun = document.querySelector('.list-of-definitions');//show meaning noun
            let phonetics = document.querySelector('.parr-first-section');
            let synonyms = document.querySelector('.synonyms');
            const showWord = document.querySelector('.search-word');
            const getWord = datos[0].word;

            showWord.innerText = getWord




        //Showing Meaning Definitions Noun
            function showMeaningNoun (MeaningDefinitionsResult) {
    
    
                MeaningDefinitionsResult = datos[0].meanings[0].definitions;
    
                  MeaningDefinitionsResult.map(meaning => {
                   let listDefinitions = document.createElement('li'); 
                   listDefinitions.innerHTML =  meaning.definition;
                   showDefinitionMeaningNoun.appendChild(listDefinitions);
      
                
                  });
    
                  const showPhonetics = datos[0].phonetics[0].text;
                  let showSinonyms = datos[0].meanings[0].synonyms[0];
                
                  
                
                       phonetics.innerText = showPhonetics;
                   
                      synonyms.innerText = showSinonyms;
                      try {
                            if(showSinonyms == undefined) {
                       showSinonyms = datos[0].meanings[1].synonyms[0]
                     synonyms.innerText = showSinonyms
                      }
                  
                      } catch (error) {
                        console.log(error)
                      }
                 
              }
    
       
    
            if(showMeaningNoun == showMeaningNoun) {
    
                while (showDefinitionMeaningNoun.firstChild) {
                    showDefinitionMeaningNoun.removeChild(showDefinitionMeaningNoun.firstChild)
                 }
    
            }
    
            showMeaningNoun();
    
    
         
       
    
                //Showing Meaning Definitions verb
                const showDefinitionMeaningVerb = document.querySelector('.list-of-meaning');//show meaning verb
    
             
                try {
                    function showMeaningVerb (showDefinitionResultVerb) {
              
    
                            showDefinitionResultVerb  = datos[0].meanings[1].definitions;
                            showDefinitionResultVerb.map(meaningVerb => {
                            let listDefinitions = document.createElement('li'); 
                            listDefinitions.innerHTML =  meaningVerb.definition;
                            showDefinitionMeaningVerb.appendChild(listDefinitions);
        
        
                        });
    
    
                }
    
                if(showMeaningVerb == showMeaningVerb) {
    
                    while (showDefinitionMeaningVerb.firstChild) {
                        showDefinitionMeaningVerb.removeChild(showDefinitionMeaningVerb.firstChild)
                     }
        
                }
    
                showMeaningVerb();
           
            
        
            
    
                    
                } catch (error) {
                    console.log(error)
                }
                  
                //change definitions color 
              
            const getListDefinition = document.querySelectorAll('li');
            getListDefinition.forEach( list => {
                if(!changeDarkMode){
                    list.style.color = 'var(--white3)'
                    console.log(list);
                
                }else{
                    
                    list.style.color = 'var(--lightMidGray)'
                   
                }
            
                console.log(list);
            })
            
            console.log(changeDarkMode);
                // sourch links
                const sourceLinks = document.querySelector('.push-resource-links');
                function showSourceLinks () {
    
                 
                    let showSourceLinks = document.createElement('a');
                   const sourceInforLink = datos[0].sourceUrls[0];
       
                    showSourceLinks.innerHTML = `
       
                    <a  href=${sourceInforLink} target="_blank" class="link" > ${sourceInforLink} <span><img src="./assets/images/icon-new-window.svg" alt="">
                    </span> </a>
                   
                    `
       
                  sourceLinks.appendChild(showSourceLinks);
                 
                }
               
                if(showSourceLinks == showSourceLinks) {
    
                    while (sourceLinks.firstChild) {
                        sourceLinks.removeChild(sourceLinks.firstChild)
                     }
        
                }
                showSourceLinks();
          
             
    
                    showResult.style.display = 'block';
    
       
         showError.style.display = 'none';
            
        }else{
            mainContainer.classList.remove('show-main');
            loading.classList.remove('loading-spinner-active');
        
            let notfound = document.querySelector('.not-found');
            let messageNotFound = document.querySelector('.message-not-found');
            let resolutionNotFound = document.querySelector('.resolution-not-found');
    
            showError.style.display = 'block';
            showResult.style.display = 'none';
           
           
    
            const datoTIttle = datos.title;
            const datoMessage = datos.message;
            const datoresolution = datos.resolution;
    
    
            notfound.innerText = datoTIttle;
            messageNotFound.innerText = datoMessage;
            resolutionNotFound.innerText = datoresolution ; 
    
    
        }
        
        
    } 
     
    window.onload =  TestingFetching()



}, 2000)

 
   

});





