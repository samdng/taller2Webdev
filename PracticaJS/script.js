//validacion de formato de datos
const emailmsg ="no es un correo electronico";
alert(emailmsg);
//ejemplo copilot para email
function validarEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (email.match(regex)) {
      return true;
    } else {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
      return false;
    }
  }
  