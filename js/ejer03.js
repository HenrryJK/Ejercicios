var a, b, c = 1;
var res = document.getElementById("result");

function calcular(){
a = parseInt(document.getElementById("n1").value);
b = parseInt(document.getElementById("n2").value);

if (a < 16) {
    res.value = "Usted no puede trabajar"
} else {
    if (15 < a & a < 19) {
        a = 1;
    } else {
        if (18 < a & a < 51) {
            a = 1.05;
        }
        else {
            if (50 < a & a < 61) {
                a = 1.1;
            }
            else {
                if (60 < a) {
                    a = 1.15
                }
            }

        }

        a = a * b;
        res.value = b;
    }

}
}
