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
   
   
    

    bodyDarkMode.classList.toggle('black-body');
    switchBotton.classList.toggle('purple-switch-botton');
    inputSeachBar.classList.toggle('input-search-bar');
    inputPlaceHolder.classList.toggle('inputPlaceHolder');
   
    searchTitle.classList.toggle('search-title-dark-mode');
   
    parragraph.forEach( (parra) =>{
        parra.classList.toggle('parragraph-dark-mode');
    })
    

    listOfMeaning.forEach( (list) =>{
        list.classList.toggle('list-dark-mode')
    });

}

// Get the Fonts //


const selectFonts = document.getElementById('fontFamily');

selectFonts.addEventListener('change', event => {
    const font = event.target.value

    if (font) {
        const bodyFamily = document.querySelector('body');
        console.log(font)

        bodyFamily.style.setProperty('--currentFamily', font)
    }
});


