const menu_responsive = document.getElementById("menu_oculto")
const icono_menu_responsive = document.getElementById("menu_responsive")


icono_menu_responsive.addEventListener("click",gestionar_menu_responsive)


function gestionar_menu_responsive(){
    var estilo_menu_responsive = window.getComputedStyle(menu_responsive)
    var propiedad_display = estilo_menu_responsive.getPropertyValue("display")
    if(propiedad_display == "flex"){
        menu_responsive.style.display = "none"
    }
    else{
        menu_responsive.style.display = "flex"
    }
}