//validacion de formato de datos
emailmsg="no es un correo electronico";
alert(emailmsg);
//ejemplo copilot
function validarCampos() {
    //traer las constantes desde el formato del html
    const id_usr = document.getElementById('id_usr').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const correo = document.getElementById('correo').value;
    const cpwd = document.getElementById('cpwd').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
  
    // Validar id_usr
    if (!Number.isInteger(parseInt(id_usr))) {
      alert("Por favor, introduce un ID de usuario válido.");
      return false;
    }
  
    // Validar nombre
    if (!/^[a-zA-Z]+$/.test(nombre)) {
      alert("Por favor, introduce un nombre válido.");
      return false;
    }
  
    // Validar apellido
    if (!/^[a-zA-Z]+$/.test(apellido)) {
      alert("Por favor, introduce un apellido válido.");
      return false;
    }
  
    // Validar dirección
    if (direccion === "") {
      alert("Por favor, introduce una dirección.");
      return false;
    }
  
    // Validar correo
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo)) {
      alert("Por favor, introduce un correo válido.");
      return false;
    }
  
    // Validar cpwd
    if (cpwd.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return false;
    }
  
    // Validar email
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      alert("Por favor, introduce un email válido.");
      return false;
    }
  
    // Validar teléfono
    if (!/^\d{10}$/.test(telefono)) {
      alert("Por favor, introduce un número de teléfono válido.");
      return false;
    }
  
    return true;
  }
  