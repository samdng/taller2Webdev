//validacion de formato de datos
//emailmsg="no es un correo electronico";
//alert(emailmsg);
//ejemplo copilot

function validar() {
    //traer las constantes desde el formato del html
    const id_usr = document.getElementById('id_usr').value;
    const id_pais = document.getElementById('id_pais').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const ccpaswd = document.getElementById('ccpaswd').value;
    const ccusuario = document.getElementById('ccusuario').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
  
    // Validar id_usr
    if (id_usr.length>11 || !Number.isInteger(parseInt(id_usr))) {
      alert("Por favor, introduce un ID de usuario válido.");
      return false;
    }

    // Validar id_pais
    if (id_pais.length>3  || !Number.isInteger(parseInt(id_usr))) {
      alert("Por favor, introduce un ID de pais válido.");
      return false;
    }
  
    // Validar nombre
    if (!/^[a-zA-Z]+$/.test(nombre) || nombre.length>25) {
      alert("Por favor, introduce un nombre válido.");
      return false;
    }
  
    // Validar apellido
    if (!/^[a-zA-Z]+$/.test(apellido) || apellido.length>25) {
      alert("Por favor, introduce un apellido válido.");
      return false;
    }
  
    // Validar dirección
    if (!/^[a-zA-Z0-9\s,.-]+$/.test(direccion)|| direccion.length>45) {
      alert("Por favor, introduce una dirección válida.");
      return false;
    }
  
    if (ccusuario.length>20) {
      alert("Por favor, introduzca un usuario válido.");
      return false;
    }

    // Validar cpwd
    if (ccpaswd.length < 8 ||) {
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
  