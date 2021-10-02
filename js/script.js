
window.onload = function() {


/////////////////////////////////////////////////////////////поиск по сайту в шапке с скурытием//////////////////////////////////////////////////////////////

    
          const search_form = document.querySelector('.search_form')
          const search_form_btn_for_mobile = document.querySelector('.search_form_btn_for_mobile')

          search_form_btn_for_mobile.addEventListener('click', (event) => {
            search_form.classList.toggle("active");
          })




//////////////////////////////////////////////////////////////////////бургер////////////////////////////////////////////////////////////////////
	let a  = true;
    const burger_button = document.querySelector('.burger_button');
    const header__burger = document.querySelector('.header__burger');
    const burger_button_word = document.querySelector('.burger_button_word');
    const menu__nav = document.querySelector('.menu__nav');
    const menu__link = document.querySelectorAll('.menu__link');
    burger_button.addEventListener('click', (event) => { 
      header__burger.classList.toggle('active');
      menu__nav.classList.toggle('active');
      if(a){
      	burger_button_word.textContent = 'Закрыть';
      	a = false;
      }else{
      	burger_button_word.textContent = 'Меню';
      		a = true;
      }
    })
    for (i = 0; i < menu__link.length; i++) {
      menu__link[i].addEventListener('click', (event) => { 
      header__burger.classList.toggle('active');
      menu__nav.classList.toggle('active');
    })
    }



    //////////////////////////////////////////////////////////////////////плавный скрол////////////////////////////////////////////////////////////////////
    document.querySelectorAll('._slow_scroll').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let arr= this.getAttribute('href').split('#');//достаем ссылку делим ее по #  
            let href = arr[arr.length - 1];//достаем последний элимент массива это и будет название нужного нам блока
            const scrollTarget = document.getElementById(href);
             const topOffset = document.querySelector('.menu').offsetHeight;//тут мы узнаем какой высоты у нас меню и пропишем ее в падинге у первого блока
           // const topOffset = 0; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;//возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

/////////////////////////////////////////////////////////////мобильные телефоны появляються при нажатии//////////////////////////////////////////////////////////////

 const button_for_tel_mobl = document.querySelector('.button_for_tel_mobl')
const mob_wen_mob = document.querySelector('.mob_wen_mob')

button_for_tel_mobl.addEventListener('click', (event) => {
  mob_wen_mob.classList.toggle("active");
})

////////////////////////////////////////////////////////////////////accordion////////////////////////////////////////////////////////////////////


    let acc = document.getElementsByClassName("accordion hummer");
    let acc_arrow = document.getElementsByClassName("accordion_arrow_mob");

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
       
        this.classList.toggle("active");//добовляем выбранной кнопке background-color: #ccc;
        this.lastElementChild.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;//nextElementSibling возвращает элемент следующий сразу за указанным в списке дочерних элементов родительского элемента
         if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";//Свойство scrollHeight содержит высоту элемента с учетом вертикальной прокрутки. Если у элемента нет вертикальной полосы прокрутки, то значение scrollHeight равно clientHeight. Свойство clientHeight содержит высоту элемента внутри границ вместе с padding
        }
      });
    }

////////////////////////////////////////////////////////////////////каталог товаров кнопка////////////////////////////////////////////////////////////////////


 const product_button = document.querySelector('.product_button')
const product_catalog = document.querySelector('.product_catalog')

product_button.addEventListener('click', (event) => {
  product_catalog.classList.toggle("active");
})

////////////////////////////////////////////////////////////////////clients Swiper////////////////////////////////////////////////////////////////////



 let clients_swiper = new Swiper(".clients_swiper", {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".clients_swiper_button_next",
          prevEl: ".clients_swiper_button_prev",
        },
        mousewheel: false,
        keyboard: true,
         breakpoints: {
           // when window width is <= 499px
          370: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
        550: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        850: {
            slidesPerView: 3,
            spaceBetweenSlides: 10
        },
        // when window width is <= 499px
        1200: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        // when window width is <= 999px
        1400: {
            slidesPerView: 3,
        }
        ,
        // when window width is <= 999px
        1670: {
            slidesPerView: 4,
            spaceBetweenSlides: 10
        }
    }
      });

////////////////////////////////////////////////////////////////////review Swiper////////////////////////////////////////////////////////////////////



 let review_swiper = new Swiper(".review_swiper", {
        slidesPerView: 1.5,
    spaceBetween: 80,
    initialSlide: 3,
    watchOverflow: true,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".review_swiper_button_next",
      prevEl: ".review_swiper_button_prev"
    },
    breakpoints: {
           
          320: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
        768: {
            slidesPerView: 1.5,
            spaceBetweenSlides: 80
        }
    }
      });


////////////////////////////////////////////////////////////////////review кнопка для того что бы прочитать полный текст////////////////////////////////////////////////////////////////////

   //let review_slide_text = document.getElementsByClassName("review_slide_text");
    let review_slide_text_btn = document.getElementsByClassName("review_slide_text_btn");


for (i = 0; i < review_slide_text_btn.length; i++) {
      review_slide_text_btn[i].addEventListener("click", function() {
       ///console.log(this.previousElementSibling.lastChild.previousElementSibling)
     
    let panel = this.previousElementSibling.lastChild.previousElementSibling;///тут пришлось добираться до последнего элемента предыдущего блока, не доконца понимаю как но сработало
     if (panel.style.maxHeight) {// если есть в стиле maxHeight то мы его убераем и блок расползаеться на ширену контента

          panel.style.maxHeight = null;
          panel.classList.toggle("active");
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.classList.toggle("active");
         }

      });
    }


////////////////////////////////////////////////////////////////////review Swiper////////////////////////////////////////////////////////////////////



 let certificates_swiper = new Swiper(".certificates_swiper", {
    slidesPerView: 6,
     spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".certificates_swiper_button_next",
      prevEl: ".certificatesswiper_button_prev"
    },
    breakpoints: {
           
          310: {
            slidesPerView: 1,
        },
         540: {
            slidesPerView: 2,
        },
          992: {
            slidesPerView: 3,
        },
          1200: {
            slidesPerView: 4,
        },
          1400: {
            slidesPerView: 5,
        },
         1800: {
            slidesPerView: 6,
        }
      }
      });

}