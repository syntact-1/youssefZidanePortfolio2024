///variables
const bg  = document.getElementById("bg-cursor");
const openLable = document.getElementById("openLable");
const closeLable = document.getElementById("closeLable");
const divOpen = document.getElementById("divOpen");
const divclose = document.getElementById("divClose");
//bg cursor function 
const bgCursor = ()=>{
    document.addEventListener("pointermove",(e)=>{
        bg.style.display = "block";
        bg.animate({
            top : e.pageY + 'px',  
            left : e.pageX + 'px'
        },{
            duration:200,
            fill : "forwards"
        })
    })
}
bgCursor()
//open and close nav bar function
function openCloseNavBar(){
    openLable.onclick = ()=>{
        divOpen.style.display= "none";
        divclose.style.display = "flex"
        divclose.style.transition = ".6"
    }
    closeLable.onclick = ()=>{
        divOpen.style.display= "flex";
        divclose.style.display = "none"
    }
}
openCloseNavBar()
