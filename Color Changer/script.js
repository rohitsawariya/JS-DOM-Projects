const body = document.querySelector("body");
const button = document.querySelectorAll(".boxes");
button.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === "Grey") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "Purple") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "Yellow") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "Blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "Red") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "Green") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "Pink") {
            body.style.backgroundColor = e.target.id;
        }
    })
})