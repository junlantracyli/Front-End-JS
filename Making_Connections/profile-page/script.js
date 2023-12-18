console.log("page loaded...");
var request = document.querySelector("#requests");
var connection = document.querySelector("#connections");
var username = document.querySelector("#username")

function decline(id){
    var element = document.querySelector(id);
    element.remove();
    request.innerText--;
}

function accept(id){
    var element = document.querySelector(id);
    element.remove();
    request.innerText--;
    connection.innerText++;
}

function edit(){
    username.innerText = "Erin B."
}
