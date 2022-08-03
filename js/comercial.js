
//Declaración de la class

class Prestamos{
    constructor(id, tipoPrestamo, tasaAnual, periodoMaximo, importeMaximo){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.tipoPrestamo = tipoPrestamo,
        this.tasaAnual = tasaAnual,
        this.periodo = periodoMaximo,
        this.importe = importeMaximo
    }
    //Métodos de nuestra class
    mostrarDatos(){
        console.log(`El tipo de Préstamo es ${this.tipoPrestamo} y su tasa Anual es ${this.tasaAnual} y su periodo máximo es ${this.periodo}. La id del prestamo es ${this.id}`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

let opcionesPrestamo = []
const prestamo1 = new Prestamos(1, "Personal", "60%", "24 meses", 50000)
opcionesPrestamo.push(prestamo1)
const prestamo2 = new Prestamos(2, "Prendario", "45%", "48 meses", 1000000)
opcionesPrestamo.push(prestamo2)
const prestamo3 = new Prestamos(3, "Hipotecario", "30%", "80 meses", 5000000)
opcionesPrestamo.push(prestamo3)
const prestamo4 = new Prestamos(4,"Comercial", "35%", "48 meses", 2500000)
opcionesPrestamo.push(prestamo4)

//Cargar array forma directa

//FINANCIACION es nuestro array de objetos

const financiacion = [prestamo1,prestamo2,prestamo3,prestamo4,]

//DECLARACIÓN DE FUNCIONES:

//Crear una function que permita al usuario agregar un Préstamo. FUNCTION 1

function nuevoPrestamo(){
    let prestamoIngresado = prompt("Ingrese el tipo de préstamo")
    let tasaIngresada = parseInt(prompt("Ingrese la tasa anual"))
    let periodoIngresado = prompt("Ingrese el período Máximo")
    let importeIngresado = parseInt(prompt("Ingrese el importe Máximo"))
    //Utilizamos método length para id dinámica
    let prestamoCreado = new Prestamos(financiacion.length+1, prestamoIngresado, tasaIngresada, periodoIngresado, importeIngresado)
    console.log(prestamoCreado)
    //Push de prestamoCreado al array
    financiacion.push(prestamoCreado)
}

//Mostrar Préstamos. FUNCTION 2

function mostrarPrestamos(){
    alert(`Podrá ver nuestros préstamos en la consola:`)
    //For of array de objetos
    for(let prestamos of financiacion){
        //Accedo a atributos de mi array de objetos
        prestamos.mostrarDatos()
    }
}

//Eliminar Préstamo. FUNCTION 3

function eliminarPrestamo(){
    //pregunte id a usuario
    //busque por id 
    //elimine por id seleccionada
    let idEliminar = prompt("Ingrese la id del préstamo a eliminar")
    for(let prestamoBuscado of financiacion){
        if (prestamoBuscado.id == idEliminar){
            console.log("Este es el prestamo " + prestamoBuscado.tipoPrestamo)
            financiacion.splice(idEliminar-1, 1)
            console.log(financiacion)
        }
    }
}

//Function que consulte al usuario opción deseada

function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver opciones de préstamos.
                        2 - Agregar un préstamo a nuestro catálogo.
                        3 - Eliminar un préstamo de nuestro catálogo. 
                        0 - Para salir.
                        `))
    menu(opcion)
}

//Function que ofrezca un menú

function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por usar la consola de trabajo `)
        break    
        case 1:
            mostrarPrestamos()
      	break 
   	    case 2: 
            nuevoPrestamo()
      	break 
   	    case 3: 
            eliminarPrestamo()
      	break 
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}

//CÓDIGO:
let salir 
while(salir != true){
    preguntarOpcion()
    
}

let nombreCliente = prompt("Ingresar Nombre:")

alert("Hola "+ nombreCliente + "!"+" Gracias por elegir Préstamos BEJA.")

// Function Préstamo Comercial

function calcularPrestamoComercial() {
    document.getElementById("tab").innerHTML="";
    let n= Number(document.getElementById("capital").value);
    let n2= Number(document.getElementById("cuota").value);
    let n3= Number(document.getElementById("interes").value);
    if( n,n2,n3 >0 & n2<=48) {   //Condiciones
        for(i=1 ; i<=n2; i++) { // ([Expresión Inicial]; [Condicion]; [expresion Final]) {sentencia}
            cuotas1=n/n2;  // Valor cuota por periodo. = Capital/Cuota.
            d1=cuotas1.toFixed(2); // d1 = cuotas1 // obtenido de la tabla dinámica. 
            i2=((n*n3)/100)/n2; // (([Capital dividido] * [Tasa de interes])/100)/ Cantidad de Cuotas) = valor interes
            d2=i2.toFixed(2); // d2 = i2 // Valor interes por periodo de la tabla dinámica.
            r=cuotas1+i2; // r es el valor a pagar por periodo.
            d3=r.toFixed(2);//d3 = r obtenido de la tabla dinámica. d3 es periodico.
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+ 
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td> 
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=n.toFixed(2); // toFixed = es una function que deja los décimales que uno le establece en su parámetro. con punto para los decimales.
        totalInteres=i2*n2;
        d4=totalInteres.toFixed(2);
        totalPeriodo=r*n2;
        d5=totalPeriodo.toFixed(2);
        document.getElementById("Total_Cuotas_Capital").innerHTML=n1;
        document.getElementById("Total_Interes").innerHTML=d4;
        document.getElementById("Total_a_Pagar").innerHTML=d5;        
    }else{
        alert("El máximo disponible de cuotas para Préstamos Comerciales es de 48 periodos");
    }
   
}

function solicitarContacto() {
  
    alert ("llamanos al 299-5249409");

}