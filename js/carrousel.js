(function(){
    console.log("carrousel");
    const emlBtnModal = document.querySelector('.btn_modal');
    const elmCarrousel = document.querySelector('.carrousel');
    const elmBtnModalFermer = document.querySelector('.btn_fermer')

    emlBtnModal.addEventListener('mousedown', function(){

        elmCarrousel.classList.add('carrousel--ouvrir');
    });

    elmBtnModalFermer.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir');
    })

})();