(function(){
    document.getElementById("Tar_Fel_Caja").style.display="block";
    document.getElementById("Vista_Previa_Img1").innerHTML=localStorage.getItem('img_trj');
    document.getElementById('VistaPrevia1').style.backgroundColor=localStorage.getItem('bcg_color');
    document.getElementById("nombre_envia_texto1").innerHTML=localStorage.getItem('nom_e');
    document.getElementById("nombre_envia_texto1").style.color=localStorage.getItem('nom_e_color');
    document.getElementById('nombre_envia_texto1').style.fontSize="50px";
    document.getElementById('nombre_envia_texto1').style.fontFamily= "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    document.getElementById("saludo_texto1").innerHTML=localStorage.getItem('sal_tex');
    document.getElementById("saludo_texto1").style.color=localStorage.getItem('sal_tex_color');
    document.getElementById('saludo_texto1').style.fontSize="30px";
    document.getElementById('saludo_texto1').style.fontStyle="cursive";
    document.getElementById("cuerpo_texto1").innerHTML=localStorage.getItem('cuerpo_tex');
    document.getElementById("cuerpo_texto1").style.color=localStorage.getItem('clr_cuerpo_tex');
    document.getElementById('cuerpo_texto1').style.fontSize="23px";
    document.getElementById('cuerpo_texto1').style.fontStyle="Franklin Gothic Medium";
    //document.getElementById("Tar_Fel_Caja").innerHTML=localStorage.getItem('tarjeta');
})();