// Función para simular una llamada ficticia
function dummyCall() {
  // Simulamos una respuesta exitosa después de un breve retraso
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Datos ficticios
      const dummyData = { 
        gpsId: 1,
        gpsSerial: 'Dummy Data',
        unitAssignedTo: 'This is a dummy response from the server.',
	    simCardId: '123456',
	    simCardUid: '457849'
      };
      // Resolvemos la promesa con los datos ficticios
      resolve(dummyData);
    }, 1000); // Simulamos un retraso de 1 segundo
  });
}

// Llamamos a la función dummyCall y manejamos la respuesta
dummyCall()
  .then(data => {
    console.log('Respuesta ficticia recibida:', data);
    // Aquí puedes manipular los datos recibidos
  })
  .catch(error => {
    console.error('Hubo un error al procesar la llamada ficticia:', error);
  });
