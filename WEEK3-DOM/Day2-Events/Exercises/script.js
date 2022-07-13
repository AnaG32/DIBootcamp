function sendData(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.forms.form1.elements.password.value;


    console.log(username, password, text);

    if(username.trim().length === 0) {
        alert("Please input a valid user name");
    } 
    else {
        document.forms.form1.submit();
    }
}