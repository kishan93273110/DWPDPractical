function viewcode(filename) {

}

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    var myEmail = "techno931644@gmail.com"
    window.open('mailto:' + myEmail + '?subject=' + subject + '&body=' + body);
}