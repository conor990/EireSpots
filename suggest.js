function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var error = document.getElementById("error_message");
    var text;
    error.style.padding = "10px";

    if(name.length < 1){
        text = "Please enter your name";
        error.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1){
        text = "Please enter a valid email";
        error.innerHTML = text;
        return false;
    }

    if(message.length > 140){
        text = "Please enter a shorter message (140 characters max)";
        error.innerHTML = text;
        return false;
    }
    if(message.length < 1){
        text = "Please enter a message";
        error.innerHTML = text;
        return false;
    }
    alert("Suggestion submitted successfully");
    name.value = "";
    return false;
}