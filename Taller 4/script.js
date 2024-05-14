//validacion de formato de datos

function validar() {
    const id_usr = document.getElementById('id_usr').value;
    const id_pais = document.getElementById('id_pais').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const ccpaswd = document.getElementById('ccpaswd').value;
    const confirmar_paswd = document.getElementById('confirmar_paswd').value;
    const ccusuario = document.getElementById('ccusuario').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const registroGustosSi = document.getElementById('registroGustosSi').checked;
    const colorFavorito = document.getElementById('colorFavorito').value;
    const marcaFavorita = document.getElementById('marcaFavorita').value;
    const estiloFavorito = document.getElementById('estiloFavorito').value;
    const rangoPrecio = document.getElementById('rangoPrecio').value;

  
    // Validar id_usr
    if (id_usr.length>11 || !Number.isInteger(parseInt(id_usr))) {
      alert("Por favor, introduce un ID de usuario válido.");
      return false;
    }

    // Validar id_pais
    if (id_pais.length>3  || !Number.isInteger(parseInt(id_pais))) {
      alert("Por favor, introduce un ID de pais válido.");
      return false;
    }
      
    // Validar nombre
    if (!/^[a-zA-Z\s'-]+$/.test(nombre) || nombre.length>25) {
      alert("Por favor, introduce un nombre válido.");
      return false;
    }

    // Validar apellido
    if (!/^[a-zA-Z\s'-]+$/.test(apellido) || apellido.length>25) {
      alert("Por favor, introduce un apellido válido.");
      return false;
    }

    // Validar dirección
    if (!/^(cll|cra|av|anv|trans)[a-zA-Z0-9\s,.-]*$/i.test(direccion) || direccion.length>45) {
      alert("Por favor, introduce una dirección válida.");
      return false;
    }

  
    // Validar ccusuario
    if (!/^[a-z0-9]+$/i.test(ccusuario) || ccusuario.length < 10 || ccusuario.length > 20) {
      alert("Por favor, introduzca un usuario válido.");
      return false;
    }


    // Validar ccpaswd
    if (!/^[a-zA-Z0-9#%\/&]{15,20}$/.test(ccpaswd)) {
      alert("Por favor, introduzca una contraseña válida.");
      return false;
    }

    // Validar confirmar_paswd
    if (ccpaswd !== confirmar_paswd) {
      alert("La contraseña y la confirmación de la contraseña no coinciden.");
      return false;
    }

  
    // Validar email
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)|| email.length>120) {
      alert("Por favor, introduce un email válido.");
      return false;
    }
  
    // Validar teléfono
    if (!/^\d{10}$/.test(telefono)) {
      alert("Por favor, introduce un número de teléfono válido.");
      return false;
    }

    if (registroGustosSi) {
      if (!colorFavorito || !marcaFavorita || !estiloFavorito || !rangoPrecio) {
        alert("Por favor, completa todos los campos de la sección de registro de gustos.");
        return false;
      }
    }
  
    return true;
  }
  
  document.getElementById('registroGustosSi').addEventListener('change', function() {
    document.getElementById('seccionGustos').style.display = 'block';
  });
  
  document.getElementById('registroGustosNo').addEventListener('change', function() {
    document.getElementById('seccionGustos').style.display = 'none';
  });
  