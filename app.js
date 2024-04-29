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
