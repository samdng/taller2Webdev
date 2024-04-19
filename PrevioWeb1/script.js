document.addEventListener('DOMContentLoaded', function() {
    // Arreglo para almacenar los gustos ingresados
    var gustos = [];
    // Variable para almacenar el índice de la fila en edición
    var filaEnEdicion = null;
  
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
          <td><span class="gusto" data-index="${index}">${gusto.nombre}</span><input type="text" class="gusto-input" data-index="${index}" style="display: none;"></td>
          <td><span class="porcentaje" data-index="${index}">${gusto.porcentaje}</span><input type="text" class="porcentaje-input" data-index="${index}" style="display: none;"></td>
          <td><a href="#" class="editar-gusto" style="color: blue; text-decoration: underline;">Editar</a></td>
        `;
        tbody.appendChild(fila);
      });
    }
  
    // Función para activar la edición
    function activarEdicion(index) {
      var gustoSpan = document.querySelector(`.gusto[data-index="${index}"]`);
      var gustoInput = document.querySelector(`.gusto-input[data-index="${index}"]`);
      var porcentajeSpan = document.querySelector(`.porcentaje[data-index="${index}"]`);
      var porcentajeInput = document.querySelector(`.porcentaje-input[data-index="${index}"]`);
  
      if (gustoSpan && gustoInput && porcentajeSpan && porcentajeInput) {
        gustoSpan.style.display = 'none';
        gustoInput.style.display = 'inline';
        gustoInput.value = gustoSpan.textContent;
  
        porcentajeSpan.style.display = 'none';
        porcentajeInput.style.display = 'inline';
        porcentajeInput.value = porcentajeSpan.textContent;
      }
    }
  
    // Función para desactivar la edición
    function desactivarEdicion(index) {
      var gustoSpan = document.querySelector(`.gusto[data-index="${index}"]`);
      var gustoInput = document.querySelector(`.gusto-input[data-index="${index}"]`);
      var porcentajeSpan = document.querySelector(`.porcentaje[data-index="${index}"]`);
      var porcentajeInput = document.querySelector(`.porcentaje-input[data-index="${index}"]`);
  
      if (gustoSpan && gustoInput && porcentajeSpan && porcentajeInput) {
        gustoSpan.style.display = 'inline';
        gustoInput.style.display = 'none';
        gustoSpan.textContent = gustoInput.value.trim();
  
        porcentajeSpan.style.display = 'inline';
        porcentajeInput.style.display = 'none';
        porcentajeSpan.textContent = porcentajeInput.value.trim();
      }
    }
  
    // Función para mostrar una alerta de error
    function mostrarAlertaError(mensaje) {
      alert(mensaje);
    }
  
    // Función para mostrar la confirmación
    function mostrarConfirmacion() {
      var confirmacionDiv = document.getElementById('confirmacion');
      confirmacionDiv.style.display = 'block';
    }
  
    // Función para ocultar la confirmación
    function ocultarConfirmacion() {
      var confirmacionDiv = document.getElementById('confirmacion');
      confirmacionDiv.style.display = 'none';
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
  
    // Manejador de evento para editar un gusto directamente en la tabla
    document.getElementById('tabla-gustos').addEventListener('click', function(event) {
      if (event.target.classList.contains('editar-gusto')) {
        // Verificar si ya hay una fila en edición
        if (filaEnEdicion !== null) {
          mostrarAlertaError('Solo se puede editar una línea. Recargue la página para poder editar otra.');
          return;
        }
  
        // Obtener el índice de la fila que se está editando
        var index = event.target.parentNode.parentNode.rowIndex - 1;
        // Activar la edición en la fila seleccionada
        activarEdicion(index);
        // Almacenar el índice de la fila en edición
        filaEnEdicion = index;
  
        // Cambiar el texto de "Editar" a "En edición" y cambiar el estilo
        event.target.textContent = 'En edición';
        event.target.style.color = 'gray';
        event.target.style.textDecoration = 'none';
  
        mostrarConfirmacion();
      }
    });
  
    // Manejador de evento para aceptar los cambios
    document.getElementById('aceptar-cambios').addEventListener('click', function() {
      // Construir la URL de destino con los datos del formulario y de la fila en edición
      var nombre = encodeURIComponent(document.getElementById('nombre').value);
      var email = encodeURIComponent(document.getElementById('email').value);
      var telefono = encodeURIComponent(document.getElementById('telefono').value);
      var gusto = encodeURIComponent(gustos[filaEnEdicion].nombre);
      var porcentaje = encodeURIComponent(gustos[filaEnEdicion].porcentaje);
  
      var urlDestino = `/resultado.html?nombre=${nombre}&email=${email}&telefono=${telefono}&gusto=${gusto}&porc=${porcentaje}`;
  
      // Redirigir al usuario a la URL de destino
      window.location.href = urlDestino;
  
      // Ocultar la confirmación después de redirigir
      ocultarConfirmacion();
    });
  
    // Función para cancelar los cambios
    function cancelarCambios() {
      // Desactivar la edición en la fila
      desactivarEdicion(filaEnEdicion);
      // Reiniciar el índice de la fila en edición
      filaEnEdicion = null;
      // Ocultar el mensaje de confirmación
      ocultarConfirmacion();
    }
  
    // Manejador de evento para cancelar los cambios
    document.getElementById('cancelar-cambios').addEventListener('click', cancelarCambios);
  
    // Evitar el envío del formulario por defecto
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
    });
  });
  