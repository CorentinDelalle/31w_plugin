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
    $contenu = "
    <style>
    .carrousel {
        border:2px solid #124DB0;
        background-color:#124DB0;
        color : white;
        width : 200px;
        height :200px;
        text-align: center;
        margin: auto;
    } 
    </style>
    <div class='carrousel' >carrusel</div>";
    return $contenu;
 };
 add_shortcode('rl_carrousel','genere_boite'); // para que el plugin funcione, el cual esta en la funcion genere_boite

