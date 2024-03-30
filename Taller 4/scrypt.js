function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    
    if (nombre.length === 0 || nombre.length > 25) {
      alert('El campo nombre debe tener entre 1 y 25 caracteres.');
      return false;
    }
  
    // Si la validación pasa, enviar el formulario
    document.getElementById('myForm').submit();
  }
  