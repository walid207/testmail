
function sendMail(){
    var parmas= {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

     const serviceID ="service_0mp6odw";
     const templateID="template_vch9mf8";
     
      emailjs
      .send(serviceID,templateID,parmas)
      .then(
        res =>  {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent successfuly");
        })
        .catch((err) => console.log(err));
  
}