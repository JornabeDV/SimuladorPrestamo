//Cálculos del simulador de Préstamos

//Declaro la function miPrestamo y la asigno para mi HTML.

let miPrestamo = document.getElementById("calcularPrestamo")
miPrestamo.addEventListener("click", calcularPrestamoPersonal);


//Establezco el diseño de la function que calcula los préstamos Personales.

function calcularPrestamoPersonal() {
    document.getElementById("tab").innerHTML="";
    let n= Number(document.getElementById("capital").value);
    let n2= Number(document.getElementById("cuota").value);
    let n3= Number(document.getElementById("interes").value);
    if( n,n2,n3 >0 & n2<24) {   //Condiciones
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
        localStorage.setItem("capitalSimulado", n)  
        localStorage.setItem("interesSimulado", n2)         
    }else{
        alert("El máximo disponible de cuotas para Préstamos Personales es de 24 periodos");
    }
   
}
