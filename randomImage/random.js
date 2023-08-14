const imageContainerE2 = document.querySelector(".image-container");
const btnE2= document.querySelector(".btn");

btnE2.addEventListener("click", ()=>{
    imageNum2=100000;
    addNewImages2();
})
function addNewImages2(){
    for(let i =0; i<imageNum2;i++){
        const newImageE2= document.createElement("img");
        newImageE2.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        imageContainerE2.appendChild(newImageE2);
    }
}