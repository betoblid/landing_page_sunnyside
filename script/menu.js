let btn = document.getElementById("btn_menu")

function menu(){
    let menu = document.getElementById("nav_menu")

    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
    }else{
        menu.classList.add("hidden")
    }
}

btn.addEventListener("click", menu)