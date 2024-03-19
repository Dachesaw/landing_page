var modal = document.getElementById('my-modal');
var btn = document.getElementById('btn');
var span = document.getElementsByClassName("close")[0];
var body = document.getElementsByTagName('body')[0];

btn.onclick = function () {
    modal.style.display = "flex";
    body.style.overflow = "hidden";

}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}