window.addEventListener("scroll",function(){
    if(window.scrollY > 700){
        document.body.classList.add("scrolled");
    } else{
        document.body.classList.remove("scrolled");
    }

});

let array=["imgC1-carrousel.jpg", "imgC2-carrousel.jpg","imgC3-carrousel.jpg", "imgC4-carrousel.jpg"];
let i = 0;
let img = document.getElementById("carrousel-img");
img.style.backgroundImage = `url('./Carrousel/${array[i]}')`;
function previous(){
    if(i==0){
        i = array.length-1;
        img.style.backgroundImage = `url('./Carrousel/${array[i]}')`;
    }else{
        i--;
        img.style.backgroundImage = `url('./Carrousel/${array[i]}')`;
    }
}

function next(){
    if(i == array.length-1){
        i = 0;
        img.style.backgroundImage = `url('./Carrousel/${array[i]}')`;
    }else{
        i++
        img.style.backgroundImage = `url('./Carrousel/${array[i]}')`;
    }
}