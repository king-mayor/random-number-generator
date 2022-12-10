const count = document.querySelector('.counter');
const generate = document.querySelector('.generate');
const resetNumber = document.querySelector('.reset');

let randomGenerate = () => {
    let randomGood = Math.floor(Math.random() * 30);
    count.innerHTML = randomGood;
    count.style.color = "blue";
}
generate.addEventListener("click", randomGenerate);


resetNumber.addEventListener("click", function (){
    count.innerHTML = 0;
})
