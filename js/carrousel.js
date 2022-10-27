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
    let dernierIndex = -1;
    

    for (const elImg of elGalerie__img){
        ajouter_img_carrousel(elImg);
        ajouter_radio_carrousel();
        
       
        

        elImg.addEventListener('mousedown', function(){
            elmCarrousel.classList.add('carrousel--ouvrir');
            elCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer');

        })
    }

    indexActif = document.querySelector('input[type=radio]:checked');
    console.log(indexActif);
    nombreImage = document.querySelectorAll('.carrousel__figure__img').length;
    ajouter_bouton_fleche_carrousel(nombreImage, indexActif);
    
    console.log(nombreImage);

    function ajouter_img_carrousel(elImg){
        elImg.dataset.index = index;
        let elCarrousel__figure__img = document.createElement('img');
        elCarrousel__figure__img.setAttribute('src',elImg.getAttribute('src'));
        elCarrousel__figure__img.classList.add('carrousel__figure__img');
        elCarrousel__figure__img.dataset.index = index;
        elCarrousel__figure.appendChild(elCarrousel__figure__img);
    }

    function ajouter_radio_carrousel(){

        let elCarrousel__form__radio = document.createElement('input');
        elCarrousel__form__radio.setAttribute('name','carrousel__form__radio')
        elCarrousel__form__radio.setAttribute('class','carrousel__form__radio')
        elCarrousel__form__radio.setAttribute('type','radio')
        elCarrousel__form__radio.dataset.index = index;
        index++
        elCarrousel__form.appendChild(elCarrousel__form__radio);
        /** écouteur sur radio pour afficher une nouvelle image */
        elCarrousel__form__radio.addEventListener('mousedown',function(){
            console.log(this.dataset.index);

            if(dernierIndex != -1){
                elCarrousel__figure.children[dernierIndex].classList.remove('carrousel__figure__img--activer')
            }

            elCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer');
            dernierIndex = this.dataset.index

        })
    }

    function ajouter_bouton_fleche_carrousel(nombreImage, indexActif){
        let elCarrousel__form__btn__prev = document.createElement('button'),
            elCarrousel__form__btn__next = document.createElement('button');

            elCarrousel__form__btn__prev.setAttribute('class', 'slide-arrow');
            elCarrousel__form__btn__prev.setAttribute('id', 'slide-arrow-prev');
            elCarrousel__form__btn__next.setAttribute('class', 'slide-arrow');
            elCarrousel__form__btn__next.setAttribute('id', 'slide-arrow-next');
            
            index = 0;
            elCarrousel__form__btn__next.dataset.index = index;
            
            

            elCarrousel__figure.appendChild(elCarrousel__form__btn__prev);
            elCarrousel__figure.appendChild(elCarrousel__form__btn__next);

            elCarrousel__form__btn__next.addEventListener('mousedown',function(){
                console.log(this.dataset.index);
                this.dataset.index++;
                console.log(this.dataset.index);

                if(this.dataset.index > nombreImage){
                    this.dataset.index = 0;
                }else if(dernierIndex != -1){
                    elCarrousel__figure.children[dernierIndex].classList.remove('carrousel__figure__img--activer')
                }
    
                elCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer');
                dernierIndex = this.dataset.index

            })

            elCarrousel__form__btn__prev.addEventListener('mousedown',function(){
                console.log(this.dataset.index);
                this.dataset.index++;
                console.log(this.dataset.index);



            })
    }

    emlBtnModal.addEventListener('mousedown', function(){

        elmCarrousel.classList.add('carrousel--ouvrir');
    });

    elmBtnModalFermer.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir');
        if(dernierIndex != -1){
            elCarrousel__figure.children[dernierIndex].classList.remove('carrousel__figure__img--activer')
        }
    })

})();