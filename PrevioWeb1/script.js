document.addEventListener('DOMContentLoaded', function() {
    // Arreglo para almacenar los gustos ingresados
    var gustos = [];
  
    // Función para agregar un gusto
    function agregarGusto(gusto) {
      gustos.push({ nombre: gusto, porcentaje: '0%' });
      mostrarGustos();
    }
  
    // Función para mostrar los gustos en la tabla
    function mostrarGustos() {
      var tabla = document.getElementById('tabla-gustos');
      var tbody = tabla.querySelector('tbody');
      tbody.innerHTML = ''; // Limpiar la tabla antes de agregar los gustos
  
      gustos.forEach(function(gusto, index) {
        var fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${gusto.nombre}</td>
          <td>${gusto.porcentaje}</td>
          <td><a href="#" class="editar-gusto" data-index="${index}">Editar</a></td>
        `;
        tbody.appendChild(fila);
      });
    }
  
    // Manejador de evento para agregar un gusto
    document.getElementById('agregar-gusto').addEventListener('click', function() {
      var inputGusto = document.getElementById('gusto');
      var nuevoGusto = inputGusto.value.trim();
      if (nuevoGusto !== '') {
        agregarGusto(nuevoGusto);
        inputGusto.value = ''; // Limpiar el campo de entrada después de agregar
      }
    });
  
    // Manejador de evento para editar un gusto
    document.getElementById('tabla-gustos').addEventListener('click', function(event) {
      if (event.target.classList.contains('editar-gusto')) {
        event.preventDefault();
        var index = event.target.getAttribute('data-index');
        var nuevoNombre = prompt('Ingrese el nuevo nombre del gusto:', gustos[index].nombre);
        if (nuevoNombre !== null && nuevoNombre.trim() !== '') {
          gustos[index].nombre = nuevoNombre.trim();
          mostrarGustos();
        }
      }
    });
  
    // Evitar el envío del formulario por defecto
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Obtener los valores de los campos del formulario
      var nombre = document.getElementById('nombre').value;
      var email = document.getElementById('email').value;
      var telefono = document.getElementById('telefono').value;
  
      // Aquí podrías realizar alguna acción con los datos, como enviarlos a un servidor
      console.log('Nombre:', nombre);
      console.log('Email:', email);
      console.log('Teléfono:', telefono);
      console.log('Gustos:', gustos);
  
      // Limpiar los campos después de enviar el formulario (opcional)
      document.getElementById('nombre').value = '';
      document.getElementById('email').value = '';
      document.getElementById('telefono').value = '';
  
      // Limpiar la lista de gustos
      gustos = [];
      mostrarGustos();
    });
  });
  