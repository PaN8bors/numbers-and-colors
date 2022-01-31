const message = document.getElementById('message');
const colors = [
    '#606C38', 
    '#283618', 
    '#FEFAE0', 
    '#DDA15E', 
    '#BC6C25',
];

let i = 4;

function changeColor() {
    const color = colors[i];
    message.style.color = color;
    i -= 1;
    if (i == -1) {
        i = 4;
    }


}

message.addEventListener('click', changeColor);





