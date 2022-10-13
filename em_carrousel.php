<?php 
/**
* package Carrousel
* Version 1.0.0 
*/

/**
 * plugin Name:EM_carrousel
 * Version:1.0.0
 */

 function genere_boite(){
    $contenu = "<div class='carrousel' >carrusel</div>";
    return $contenu;
 };
 add_shortcode('rl_carrousel','genere_boite'); // para que el plugin funcione, el cual esta en la funcion genere_boite

