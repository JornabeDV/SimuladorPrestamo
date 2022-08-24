//Aplicación de la Libreria Sweetalert

Swal.fire({
    title: "Hay variedad de créditos disponibles!",
    text: "Ingresa ya!",
    icon: "success",
    button: "Aww yiss!",
  });

// Variedad de préstamos comercializados.
const prestamos = [
    {
        id: 1,
        nombre: 'HIPOTECARIO',
        descripción: 'Comprá la casa de tus sueños',
        precio: 4000000,
        img: '../images/hipotecario.jpg',
        cantidad: 240,
    },
  
    {
        id: 2,
        nombre: 'PRENDARIO',
        descripción: 'Adquirí el vehículo que prefieras',
        precio: 2500000,
        img: '../images/prendario.jpg',
        cantidad: 60,
    },
      
    {
        id: 3,
        nombre: 'PERSONAL',
        descripción: 'Comprá lo que quieras',
        precio: 500000,
        img: '../images/personal.jpg',
        cantidad: 24,
    },

    {
        id: 4,
        nombre: 'INDUSTRIAL',
        descripción: 'Invertí en tus ideas',
        precio: 10000000,
        img: '../images/industrial.jpg',
        cantidad: 120,
    },
    {
        id: 5,
        nombre: 'COMERCIAL',
        descripción: 'Organizá tu negocio',
        precio: 1000000,
        img: '../images/comercial.jpg',
        cantidad: 48,
    }
]
export { prestamos };


// // declaramos y asignamos condicionalmente
// const limitePrestamos = (prestamos.cantidad = 5) ? true : false

// // mostramos el mensaje
// limitePrestamos ? alert("Hay disponibilidad de créditos") : alert("Quedan pocos créditos para otorgar")

//Declaración de la clase
class Prestamos1 {
    constructor(id, nombre, descripción, precio, cantidad){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.nombre = nombre,
        this.descripción = descripción,
        this.precio = precio,
        this.cantidad = cantidad

    }
    //Métodos de nuestra clase
    mostrarDatos(){
        console.log(`El préstamo ${this.nombre} tiene como slogan "${this.titulo}" y tiene un precio máximo de ${this.precio}. La cantidad de préstamos ${this.nombre} que se pueden otorgar es ${this.cantidad}`)
    }
    
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const prestamo1 = new Prestamos1(1,"HIPOTECARIO","Comprá la casa de tu sueños", 4000000, "../images/hipotecario.jpg")

const prestamo2 = new Prestamos1(2,"PRENDARIO", "Adquirí el vehículo que prefieras", 2500000, "../images/prendario.jpg")

const prestamo3 = new Prestamos1(3,"PERSONAL", "Comprá lo que quieras", 500000, "../images/personal.jpg")

const prestamo4 = new Prestamos1(4,"INDUSTRIAL", "Invertí en tus ideas", 10000000, "../images/industrial.jpg")

const prestamo5 = new Prestamos1(5,"COMERCIAL", "Organizá tu negocio", 1000000, "../images/comercial.jpg")

//Desestructurar traeme a variables los atributos/propiedades de un objeto.

const {id, precio, cantidad} = prestamo1

console.log(id);
console.log(precio);    

const {nombre, descripción} = prestamo3

console.log(nombre);
console.log(descripción);

//Desestructurar con Alias.

const {id:number, nombre:name} = prestamo5

console.log(number);
console.log(name);

//Spread 

console.log(...prestamos)

