function suma() {
    return(x+y)
}
function resta() {
    return(x-y)
}
function multi() {
    return(x*y)
}
function divi() {
    if(y==0)
    return "NO SE PUEDE";
    return(x/y);
}


var x , y ,op;
var res = document.getElementById("result");
function calcular() {
    x = parseInt(document.getElementById("n1").value);
     y = parseInt(document.getElementById("n2").value);
     op = parseInt(document.getElementById("oper").value);
    switch (op) {
        case 1:
            res.value = suma();
            break;
         case 2:
            res.value = resta();
            break;
        case 3:
            res.value= multi();
            break;
        case 4:
            res.value=divi();
            break;
        default:
            break;
    }

}