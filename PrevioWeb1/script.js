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
          <td><span class="gusto" data-index="${index}">${gusto.nombre}</span><input type="text" class="gusto-input" data-index="${index}" style="display: none;"></td>
          <td><span class="porcentaje" data-index="${index}">${gusto.porcentaje}</span><input type="text" class="porcentaje-input" data-index="${index}" style="display: none;"></td>
          <td><a href="#" class="editar-gusto" style="color: blue; text-decoration: underline;">Editar</a></td>
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
  
    // Manejador de evento para editar un gusto directamente en la tabla
    document.getElementById('tabla-gustos').addEventListener('click', function(event) {
      if (event.target.classList.contains('editar-gusto')) {
        var index = event.target.parentNode.parentNode.rowIndex - 1;
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
  
          var aceptarButton = document.createElement('button');
          aceptarButton.textContent = 'Aceptar';
          aceptarButton.classList.add('aceptar-gusto');
  
          var cancelarButton = document.createElement('button');
          cancelarButton.textContent = 'Cancelar';
          cancelarButton.classList.add('cancelar-gusto');
  
          var buttonCell = event.target.parentNode;
          buttonCell.appendChild(aceptarButton);
          buttonCell.appendChild(cancelarButton);
  
          event.target.style.display = 'none';
        }
      } else if (event.target.classList.contains('aceptar-gusto')) {
        var index = event.target.parentNode.parentNode.rowIndex - 1;
        var gustoSpan = document.querySelector(`.gusto[data-index="${index}"]`);
        var gustoInput = document.querySelector(`.gusto-input[data-index="${index}"]`);
        var porcentajeSpan = document.querySelector(`.porcentaje[data-index="${index}"]`);
        var porcentajeInput = document.querySelector(`.porcentaje-input[data-index="${index}"]`);
  
        if (gustoSpan && gustoInput && porcentajeSpan && porcentajeInput) {
          gustos[index].nombre = gustoInput.value.trim();
          gustos[index].porcentaje = porcentajeInput.value.trim();
  
          gustoSpan.textContent = gustoInput.value.trim();
          gustoSpan.style.display = 'inline';
          gustoInput.style.display = 'none';
  
          porcentajeSpan.textContent = porcentajeInput.value.trim();
          porcentajeSpan.style.display = 'inline';
          porcentajeInput.style.display = 'none';
  
          var buttonCell = event.target.parentNode;
          buttonCell.querySelector('.editar-gusto').style.display = 'inline';
          buttonCell.removeChild(event.target);
          buttonCell.removeChild(buttonCell.querySelector('.cancelar-gusto'));
        }
      }
    });
  
    // Manejador de evento para cancelar la edición
    document.getElementById('tabla-gustos').addEventListener('click', function(event) {
      if (event.target.classList.contains('cancelar-gusto')) {
        var index = event.target.parentNode.parentNode.rowIndex - 1;
        var gustoSpan = document.querySelector(`.gusto[data-index="${index}"]`);
        var gustoInput = document.querySelector(`.gusto-input[data-index="${index}"]`);
        var porcentajeSpan = document.querySelector(`.porcentaje[data-index="${index}"]`);
        var porcentajeInput = document.querySelector(`.porcentaje-input[data-index="${index}"]`);
  
        if (gustoSpan && gustoInput && porcentajeSpan && porcentajeInput) {
          gustoSpan.style.display = 'inline';
          gustoInput.style.display = 'none';
  
          porcentajeSpan.style.display = 'inline';
          porcentajeInput.style.display = 'none';
  
          var buttonCell = event.target.parentNode;
          buttonCell.querySelector('.editar-gusto').style.display = 'inline';
          buttonCell.removeChild(event.target.parentNode.lastChild);
          buttonCell.removeChild(event.target);
        }
      }
    });
  
    // Manejador de evento para el envío del formulario
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
  