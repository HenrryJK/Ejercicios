alert("Pedir número por teclado y preguntar si quiere poner más.");
alert("Mostrar la suma de los positivos y negativos, suma de los pares e impares, cantidad de positivos y negativos, cantidad de pares e impares y media de todos los números.");
var arreglo=[],i=0,numero,respuesta,sumapositivos=0,sumanegativos=0,sumapares=0,sumaimpares=0,contadorpositivos=0,contadornegativos=0,contadorpares=0,contadorimpares=0,sumatotal=0;
do {
    arreglo[i]=Number(prompt("Numero: "));
    i++;
    respuesta=prompt("¿Deseas ingresar otro número?: ");
} while (respuesta=="s"||respuesta=="S");
for (var i=0;i<arreglo.length;i++){
    sumatotal+=arreglo[i];
    if (arreglo[i]>=0) {
        sumapositivos+=arreglo[i];
        contadorpositivos++;
    }else{
        sumanegativos+=arreglo[i];
        contadornegativos++;
    }
    if (arreglo[i]%2==0) {
        sumapares+=arreglo[i];
        contadorpares++;
    }else{
        sumaimpares+=arreglo[i];
        contadorimpares++;
    }
}
document.write("Suma de numeros positivos: "+sumapositivos);
document.write("cantidad de numeros positivos: "+contadorpositivos);
document.write("Suma de numeros negativos: "+sumanegativos);
document.write("cantidad de numeros negativos: "+contadornegativos);
document.write("Suma de numeros pares: "+sumapares);
document.write("cantidad de numeros pares: "+contadorpares);
document.write("Suma de numeros impares: "+sumaimpares);
document.write("cantidad de numeros impares: "+contadorimpares);
document.write("Media: "+sumatotal/arreglo.length);