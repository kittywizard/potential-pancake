const btn = document.getElementById('btn');
btn.addEventListener('click', changeColor);

function changeColor() {
    console.log("clicked")
    document.body.classList.remove('default')
    document.body.classList.add('dark')
}