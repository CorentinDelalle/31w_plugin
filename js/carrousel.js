(function(){
    console.log("carrousel");
    let index = 0;
    const emlBtnModal = document.querySelector('.btn_modal');
    const elmCarrousel = document.querySelector('.carrousel');
    const elmBtnModalFermer = document.querySelector('.btn_fermer')
    const elCarrousel__figure = document.querySelector('.carrousel__figure');
    const elCarrousel__form = document.querySelector('.carrousel__form');
    const elGalerie = document.querySelector('.galerie');
    const elGalerie__img = document.querySelectorAll('.galerie figure img')

    for (const elImg of elGalerie__img){
        ajouter_img_carrousel(elImg);
        ajouter_radio_carrousel()
    }


    function ajouter_img_carrousel(elImg){
        let elCarrousel__figure__img = document.createElement('img');
        elCarrousel__figure__img.setAttribute('src',elImg.getAttribute('src'));
        elCarrousel__figure__img.classList.add('carrousel__figure__img');
        elCarrousel__figure.appendChild(elCarrousel__figure__img);
    }

    function ajouter_radio_carrousel(){
        let elCarrousel__form__radio = document.createElement('input');
        elCarrousel__form__radio.setAttribute('name','carrousel__form__radio');
        elCarrousel__form__radio.setAttribute('class','carrousel__form__radio');
        elCarrousel__form__radio.setAttribute('type','radio');
        elCarrousel__form__radio.dataset.index = index;
        index++;
        elCarrousel__form.appendChild(elCarrousel__form__radio);

    }

    emlBtnModal.addEventListener('mousedown', function(){

        elmCarrousel.classList.add('carrousel--ouvrir');
    });

    elmBtnModalFermer.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir');
    })

})();