const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const select = document.querySelector("#operaciones");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

h1.addEventListener("mouseover", h1OnMouseOver);
h1.addEventListener("mouseout", h1OnMouseOut);
h2.addEventListener("mouseover", h2OnMouseOver);
h2.addEventListener("mouseout", h2OnMouseOut);
input1.addEventListener("change", input1onlyNumbers);
input2.addEventListener("change", input2onlyNumbers);
btn.addEventListener("click", btnOnClick);

let valInput1 = 0;
let valInput2 = 0;


//form.addEventListener("click", sumarInputValues);

function h1OnMouseOver(){
        h1.style.color = "DarkCyan";
}

function h1OnMouseOut(){
        h1.style.color = "black";
}

function h2OnMouseOver(){
        h2.style.color = "DarkCyan";
}

function h2OnMouseOut(){
        h2.style.color = "black";
}

function input1onlyNumbers(){
        let valTexto = /[A-Za-z]/;
        if(valTexto.test(input1.value)){
                pResult.innerText = "No se permiten letras. SOLO NÚMEROS.";
                valInput1 = 1;
        }else{
                valInput1 = 0;
        }

        if(valInput1 == 0 && valInput2 == 0){
                pResult.innerText = "";
        }
}

function input2onlyNumbers(){
        let valTexto = /[A-Za-z]/;
        if(valTexto.test(input2.value)){
                pResult.innerText = "No se permiten letras. SOLO NÚMEROS.";
                valInput2 = 1;
        }else{
                valInput2 = 0;
        }

        if(valInput1 == 0 && valInput2 == 0){
                pResult.innerText = "";
        }
        
}

function btnOnClick(event){
        event.preventDefault();

        btn.style.backgroundColor = "DarkCyan";
        setTimeout(function() {
                btn.style.backgroundColor = "PowderBlue";
              }, 100);
        
        let valTexto = /[A-Za-z]/;
        if(valTexto.test(input1.value) || valTexto.test(input2.value)){
                pResult.innerText = "No se permiten letras. SOLO NÚMEROS.";
                return;
        }

        if(select.value == "suma"){
                const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
                pResult.innerText = "Resultado: " + sumaInputs;
        }else if(select.value == "resta"){
                const restaInputs = parseInt(input1.value) - parseInt(input2.value);
                pResult.innerText = "Resultado: " + restaInputs;
        }else if(select.value == "multiplicacion"){
                const multiInputs = parseInt(input1.value) * parseInt(input2.value);
                pResult.innerText = "Resultado: " + multiInputs;
        }else if(select.value == "division"){
                const divisionInputs = parseInt(input1.value) / parseInt(input2.value);
                pResult.innerText = "Resultado: " + divisionInputs;
        } 
}
// function sumarInputValues(event){
//         event.preventDefault();
//         const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//         pResult.innerText = "Resultado: " + sumaInputs;
// }