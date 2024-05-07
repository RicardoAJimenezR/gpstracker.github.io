// Función para simular una llamada ficticia
function dummyCall() {
  // Simulamos una respuesta exitosa después de un breve retraso
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Datos ficticios
      const dummyData = [
        { gpsId: 1, gpsSerial: '123', unitAssignedTo: 'Unidad 1', simCardId: '456', simCardUid: '789' },
        { gpsId: 2, gpsSerial: '456', unitAssignedTo: 'Unidad 2', simCardId: '789', simCardUid: '012' },
        { gpsId: 3, gpsSerial: '789', unitAssignedTo: 'Unidad 3', simCardId: '012', simCardUid: '345' }
      ];
      // Resolvemos la promesa con los datos ficticios
      resolve(dummyData);
    }, 1000); // Simulamos un retraso de 1 segundo
  });
}

// Función para crear una celda
function crearCelda(valor) {
  const celda = document.createElement('td');
  celda.textContent = valor;
  return celda;
}

// Función para crear una fila
function crearFila(item) {
  const fila = document.createElement('tr');
  Object.values(item).forEach(val => {
    const celda = crearCelda(val);
    fila.appendChild(celda);
  });
  return fila;
}

// Función para llenar la tabla
async function llenarTabla() {
  try {
    // Haciendo la llamada ficticia
    const data = await dummyCall();

    // Obtener el cuerpo de la tabla donde se agregarán los datos
    const tabla = document.querySelector('#tablaDatos table tbody');

    // Vaciar el cuerpo de la tabla antes de agregar nuevos datos
    tabla.innerHTML = '';

    // Generar las filas de la tabla con los datos ficticios
    data.forEach(item => {
      const fila = crearFila(item);
      tabla.appendChild(fila);
    });
  } catch (error) {
    console.error('Hubo un problema con la llamada ficticia:', error);
  }
}

// Llamar a la función para llenar la tabla al cargar la página
document.addEventListener('DOMContentLoaded', llenarTabla);


// Obtener el año actual y actualizar el pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Obtener el modal
var modal = document.getElementById('modalAgregar');

// Obtener el botón que abre el modal
var btn = document.getElementById('btnAgregar');

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName('close')[0];

// Cuando el usuario hace clic en el botón, abrir el modal 
btn.onclick = function () {
  modal.style.display = 'block';
}

// Cuando el usuario hace clic en <span> (x), cerrar el modal
span.onclick = function () {
  modal.style.display = 'none';
}

// Cuando el usuario hace clic en cualquier lugar fuera del modal, cerrarlo
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}


function agregarDatos() {
  // Obtener los valores de los inputs y eliminar espacios en blanco
  var gpsId = document.getElementById('gpsId') ? document.getElementById('gpsId').value.trim() : '';
  var gpsSerial = document.getElementById('gpsSerial') ? document.getElementById('gpsSerial').value.trim() : '';
  var unitAssigned = document.getElementById('unitAssigned') ? document.getElementById('unitAssigned').value.trim() : '';
  var simCardId = document.getElementById('simCardId') ? document.getElementById('simCardId').value.trim() : '';
  var simCardUid = document.getElementById('simCardUid') ? document.getElementById('simCardUid').value.trim() : '';

  // Validar que los campos no estén vacíos
  if (!gpsId || !gpsSerial || !unitAssigned || !simCardId || !simCardUid) {
    alert('Todos los campos deben estar llenos.');
    return; // Detener la función si algún campo está vacío
  }

  // Crear una nueva fila y celdas para la tabla
  var tabla = document.getElementById('tablaDatos').getElementsByTagName('tbody')[0];
  var nuevaFila = tabla.insertRow();
  nuevaFila.insertCell(0).innerHTML = gpsId;
  nuevaFila.insertCell(1).innerHTML = gpsSerial;
  nuevaFila.insertCell(2).innerHTML = unitAssigned;
  nuevaFila.insertCell(3).innerHTML = simCardId;
  nuevaFila.insertCell(4).innerHTML = simCardUid;

  // Limpiar los campos del formulario y cerrar el modal
  document.getElementById('formAgregar').reset();
  document.getElementById('modalAgregar').style.display = 'none';
}

