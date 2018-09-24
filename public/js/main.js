let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("modal_close")[0];

var search = document.getElementById('modal-search');
var serchbtn = document.getElementById("search");
var closers = document.getElementsByClassName("search_close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


serchbtn.onclick = function() {
	search.style.display = "block";
}

closers.onclick = function() {
    search.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == search) {
        search.style.display = "none";
    }
}