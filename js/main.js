document.addEventListener('DOMContentLoaded', function(){

    /*POPUP*/
    //Проверка наличие куки
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }


    let modal = document.querySelector('.popup'),
        modalClose = document.querySelector('.popup-content__close'),
        date = new Date();

    closePopup();
    function showPopup(){
        date = new Date(date.setDate(date.getDate() + 1));
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        document.cookie = `${decodeURI('popup')} = ${decodeURI(true)}; expires = ${date}; path = /`;
        closePopup();
    }

    function closePopup(){
        modalClose.addEventListener('click', function(){
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    if(getCookie('popup') === undefined){
        setTimeout(showPopup, 5000);
    }

    /*END POPUP*/

    /*Scroll to Top*/
    let btnTop = document.querySelector('.button_up');

    btnTop.addEventListener('click', function(){
       window.scroll(0, 0);
    });

    window.addEventListener('scroll', showBtnTop);

    function showBtnTop(){

        if(pageYOffset > document.documentElement.clientHeight){
            btnTop.style.display = 'block';
        }else{
            btnTop.style.display = 'none';
        }
    }
    /*End Scroll to Top*/


    //Navigation

    let navBtn = document.querySelector('.navigation-btn'),
        navBlock = document.querySelector('.navigation-block'),
        navSection = document.querySelector('.navigation');

    navBtn.addEventListener('click', function(){
       this.classList.toggle('navigation-btn__active');
       navBlock.classList.toggle('navigation-block__active');
       navSection.classList.toggle('navigation__active');
    });

    navSection.addEventListener('click', function(event){
        let target = event.target;
        if(target.classList.contains('navigation-block__link') || target.classList.contains('navigation__active')){
            navBlock.classList.remove('navigation-block__active');
            navSection.classList.remove('navigation__active');
            navBtn.classList.remove('navigation-btn__active');
        }

    });
    //End Navigation

    //Отправка формы на сервер

    let messageBox = document.createElement('div');
    messageBox.classList.add('message');


    let form = document.forms.clients,
        formOffer = document.forms.offerForm,
        formPopup = document.forms.popupForm;



    let phone = form.elements.phones,
        phoneOffer = formOffer.elements.phones,
        phonePopup = formPopup.elements.phones;

    form.nextElementSibling.prepend(messageBox);

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        error: 'Что-то пошло не так',
        phone: 'Введите телефон!'
    };


    phone.addEventListener('blur', validatePhone);
    phoneOffer.addEventListener('blur', validatePhone);
    phonePopup.addEventListener('blur', validatePhone);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        sendPhone(phone);
    });

    formOffer.addEventListener('submit', function(e) {
        e.preventDefault();
        sendPhone(phoneOffer);
    });

    formPopup.addEventListener('submit', function(e) {
        e.preventDefault();
        sendPhone(phonePopup);
    });


    function sendPhone(elem){

        //ajax
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://cardboard-bootstrap-nodejs.herokuapp.com/clients');
        xhr.setRequestHeader('Content-type', 'application/json; charset = utf-8');

        //Проверка на пустоту
        if(elem.value === ''){
            elem.addEventListener('blur', function(){
                this.style.background = 'red';
                messageBox.classList.add('message-error');
            });
            messageBox.textContent = message.phone;
            messageBox.classList.add('message-error');
            elem.value = '';

            return false;
        }else{

            let data = {
                phones: elem.value
            };

            //console.log(data);
            xhr.send(JSON.stringify(data));

            xhr.addEventListener('readystatechange', function () {
                if (xhr.readyState < 4) {
                    messageBox.textContent = message.loading;
                } else if (xhr.readyState === 4 && xhr.status === 200) {
                    elem.style.background = '#fff';
                    messageBox.textContent = message.success;
                } else {
                    messageBox.textContent = message.error;
                }
            });
        }

        clearInputs();
    }

    function clearInputs(){
        for(let i = 0; i < document.forms.length; i++){
            for(let j = 0; j < document.forms[i].elements.length; j++){
                document.forms[i].elements[j].value = '';
            }
        }
    }

    function validatePhone(){

        let massCode = [67,96,97,98,50,66,95,99,63,73,93,91,92,94];

        let resCode = massCode.map(function(i){
            return '0' + i;
        });

        let str = resCode.join('|');

        let reg = new RegExp("/\\+38\\(" + str + "\\)\\-(\d{3})\\-(\d{2})\\-(\d{2})/");

        if(reg.test(this.value)){
            this.style.background = 'green';
            messageBox.classList.remove('message-error');
            messageBox.textContent = '';
        }else{
            this.value = '';
            this.style.background = 'red';
            messageBox.textContent = message.phone;
            messageBox.classList.add('message-error');
            throw new Error('Проверьте правильность ввода!');
        }
    }

    //END Отправка формы на сервер

    /*
    Обработка вызов модального окна по клику
     */

   document.querySelectorAll('.button__cta').forEach(function(elem){
        elem.addEventListener('click', getPopup);
    });

    function getPopup(){
        document.querySelector('.popup').style.display = 'block';
    }
});
