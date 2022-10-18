(function(){
    console.log("carrousel");
    const emlBtnModal = document.querySelector('.btn_modal');
    const elmCarrousel = document.querySelector('.carrousel');
    const elmBtnModalFermer = document.querySelector('.btn_fermer')
    const elCarrousel__figure = document.querySelector('.carrousel__figure');
    const elCarrousel__form = document.querySelector('.carrousel__form');
    const elGalerie = document.querySelector('.galerie');
    const elGalerie__img = document.querySelectorAll('.galerie figure img')

    for (const elImg of elGalerie__img){
        ajouter_img_carrousel(elImg);
        ajouter_radio_carrousel();
    }

    function ajouter_img_carrousel(elImg){
        let elCarrousel__figure__img = document.createElement('img');
        elCarrousel__figure__img.setAttribute('src',elImg.getAttribute('src'));
        elCarrousel__figure__img.classList.add('elCarrousel__figure_img');
        elCarrousel__figure__img.appendChild(elCarrousel__figure__img);
    }

    emlBtnModal.addEventListener('mousedown', function(){

        elmCarrousel.classList.add('carrousel--ouvrir');
    });

    elmBtnModalFermer.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir');
    })

})();