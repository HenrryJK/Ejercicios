
var x, y;
x = parseInt(prompt("Ingrese Numero:"))
y = 1;

while (x>1) {
    y= x*y;
    x= x-1;
}
document.write("El factorial es: " + y )