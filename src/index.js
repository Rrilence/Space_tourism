    const btnOpen = document.querySelector('.dropbtn-open');
    const btnClose = document.querySelector('.dropbtn-close');
    const navBar = document.querySelector('.navBar');
    const menuBtns = document.querySelectorAll('.navbtn'); //hz
    
    setTimeout(function(){
        document.body.classList.add('body_visible');
    }, 100); //Плавное открытие HTML страниц
    
    btnOpen.addEventListener('click', navOpen);
    navBar.addEventListener('click', navClose);
    
    function navOpen(e) {
        e.preventDefault();
        btnClose.addEventListener('click', navClose);
        navBar.classList.add('show');
    }
    
    function navClose() {
        navBar.classList.remove('show');
     
        removeListener();
    }
    
    function removeListener() {
        btnClose.removeEventListener('click', navClose);
    }

    menuBtns.forEach(menuBtn => {
        menuBtn.addEventListener('click', (event) => { navMenu(event.target.value)})
    });
    

        function navMenu(value) {
           let content = document.getElementsByClassName('content__item');
           for (let i = 0; i < content.length; i++) {
               content[i].classList.add('hidden');
            }
           document.getElementById(value).classList.remove('hidden');
       }






