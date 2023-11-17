function calcular(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = parseFloat(a);
    b = parseFloat(b);
    let operacao = document.getElementById("operacao").value;
    let res = 0;
    let resultado = document.getElementById("resultado");
        switch(operacao){
            case '1':
                res = a + b; resultado.innerHTML = `<p>${res}</p>`;
                break;
            case '2':
                res = a - b; resultado.innerHTML = `<p>${res}</p>`;
                break;
            case '3':
                res = a * b; resultado.innerHTML = `<p>${res}</p>`;
                break;
            case '4':
                res = a / b; resultado.innerHTML = `<p>${res}</p>`;
                break;
            
        }
}

