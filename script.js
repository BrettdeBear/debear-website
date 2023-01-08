const h2 = document.createElement("h2");
h2.textContent = "Random JavaScript Content";

document.querySelector("body").appendChild(h2);

const input = document.getElementById('button');
function clickAlert() {
    alert('OMG HIIII');
}
input.addEventListener('click', clickAlert);