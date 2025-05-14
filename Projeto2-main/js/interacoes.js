//menu hamburguer
function mudoutamanho(){
    let menumobile = document.querySelector('.nav-list-segunda') 
    if(window.innerWidth >= 700){
        menumobile.style.display = 'none'
    }
    }
function menushow() {
    let menumobile = document.querySelector('.nav-list-segunda') 
    if(menumobile.style.display =='block'){
        menumobile.style.display = 'none'
    }else{
        menumobile.style.display = 'block';
    }
}