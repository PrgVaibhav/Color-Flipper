const colors = ["Green", "Red", "rgba(133, 122, 110)", "Black", "Silver", "Gray", "Maroon", "Red", "Purple", "Fuchsia", "Green","Lime", "Olive", "Yellow"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}