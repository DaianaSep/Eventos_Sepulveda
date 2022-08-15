//Variables
let calculoTmbH, calculoTmbM, edad
const resTMB = document.getElementById("resTMB")
const contTMB = document.getElementById("containerResultadosTMB")
const tit = document.getElementById("titleResultadosTMB")
const buttonTmb = document.getElementById("tmb")
const inputEdad = document.getElementById("inputEdad2")
const inputPesoTmb= document.getElementById("inputPeso2")
const inputAlturaTmb = document.getElementById("inputAltura2")
const formTmb = document.getElementById("formCalculadoraTMB")
const contFormTMB = document.getElementById("containerFormTMB")
const radios = document.getElementsByName("genero2")

//Función para capturar los datos y devolver resultado de TMB
buttonTmb.addEventListener('click', () => {
    document.getElementById("formCalculadoraTMB").reset()
    contFormIMC.style.display = "none"
    contIMC.style.display = "none"
    contFormTMB.style.display = "block"
    contAlimentos.style.display = "none"
})

inputPesoTmb.addEventListener('input', () => {
    peso = inputPesoTmb.value
});

inputAlturaTmb.addEventListener('input', () => {
    altura = inputAlturaTmb.value
});

inputEdad.addEventListener('input', () => {
    edad = inputEdad.value
});

formTmb.addEventListener('submit', (e) => {
    e.preventDefault()

    for (let radio of radios){
        if (radio.checked) {
            genero = radio.value
        }
    }

    resultadoTmb(genero, peso, altura, edad)
    document.getElementById("formCalculadoraTMB").reset()
})

//Función que calcula y devuelve el resultado de la TMB
function resultadoTmb(genero = "", peso = 0, altura = 0, edad = 0) {
    tit.style.display = "block"
    contIMC.style.display = "none"
    contTMB.style.display = "block"
    titulo.style.display = "block"
    contReg.style.display = "none"

    if (genero == "Hombre") {
        calculoTmbH = ((10 * peso) + (6.25 * altura) + (5 * edad) + 5)
        resTMB.innerHTML = ` <div> <p> El número de calorías que necesitas por día para estar saludable es: <b>${calculoTmbH.toFixed(0)}</b> </p> </div> `
    }
    else if (genero == "Mujer") {
        calculoTmbM = ((10 * peso) + (6.25 * altura) + (5 * edad) - 161)
        resTMB.innerHTML = ` <div> <p> El número de calorías que necesitas por día para estar saludable es: <b>${calculoTmbM.toFixed(0)}</b> </p> </div> `
    }
}

