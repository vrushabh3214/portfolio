(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


// form - email
function sendEmail() {
    console.log(document.getElementById("e-add").value);
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "in.vrushabh@gmail.com",
        Password: "AB9B3D1FFEFD22EC000CF4096F2AD1ABAC45",
        To: 'in.vrushabh@gmail.com',
        From: 'in.vrushabh@gmail.com',
        Subject: "This is the subject",
        Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("e-add").value
        + "<br> subject: " + document.getElementById("subject").value
        + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message Sent Succesfully")
    ).catch(error => alert(error));
  }

