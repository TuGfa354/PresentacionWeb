function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function descargarArchivo() {
  var archivo1URL = 'assets/JuegoTFG.exe';
  var archivo2URL = 'assets/JuegoTFG.pck';
  
  // Crear un enlace de descarga para el primer archivo
  var enlaceArchivo1 = document.createElement('a');
  enlaceArchivo1.href = archivo1URL;
  enlaceArchivo1.download = 'JuegoTFG.exe';
  enlaceArchivo1.style.display = 'none';
  document.body.appendChild(enlaceArchivo1);
  
  // Crear un enlace de descarga para el segundo archivo
  var enlaceArchivo2 = document.createElement('a');
  enlaceArchivo2.href = archivo2URL;
  enlaceArchivo2.download = 'JuegoTFG.pck';
  enlaceArchivo2.style.display = 'none';
  document.body.appendChild(enlaceArchivo2);
  
  // Simular el clic en ambos enlaces para iniciar la descarga
  enlaceArchivo1.click();
  enlaceArchivo2.click();
  
  // Eliminar los enlaces del documento
  document.body.removeChild(enlaceArchivo1);
  document.body.removeChild(enlaceArchivo2);
}