
// Aplicación para agregar tipos de préstamos.-
// Importamos de otro archivo js. para mantener orden.-  

import { prestamos } from './productos.js';

// Aplicación de JSON.-

//Convertimos una cadena de objetos en un texto plano con JSON.-

const enJSON = JSON.stringify(prestamos);
localStorage.setItem("prestamos", enJSON);

//Creación de la Card dinámica.-

const mostrarPrestamos = (prestamos) => {
  const contenedorPrestamos = document.getElementById('prestamo-contenedor');
  prestamos.forEach((prestamo) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${prestamo.img}>
                        <span class="card-title">${prestamo.nombre}</span>
                      </div>
                      <div class="card-content">
                        <p>${prestamo.descripción}</p>
                        <p>Hasta $ ${prestamo.precio}</p>
                        <p>Hasta ${prestamo.cantidad} Cuotas</p>
                      </div>

    `;
    contenedorPrestamos.appendChild(div);
  });
};

mostrarPrestamos(prestamos);