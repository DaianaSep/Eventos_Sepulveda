//Variables
let genero, peso, altura, calculoImc, mensaje
const resIMC = document.getElementById("p1")
const contIMC = document.getElementById("containerResultadosIMC")
const titulo = document.getElementById("titleResultados")
const buttonImc = document.getElementById("imc")
const formImc = document.getElementById("formCalculadoraIMC")
const select = document.getElementById("generos")
const inputPeso = document.getElementById("inputPeso")
const inputAltura = document.getElementById("inputAltura")
const contFormIMC = document.getElementById("containerFormIMC")
const radiosImc = document.getElementsByName("genero")


buttonImc.addEventListener('click', () => {
    document.getElementById("formCalculadoraIMC").reset()
    contFormIMC.style.display = "block"
    contTMB.style.display = "none"
    contFormTMB.style.display = "none"
    contAlimentos.style.display = "none"
    contReg.style.display = "none"
})

inputPeso.addEventListener('input', () => {
    peso = inputPeso.value
});

inputAltura.addEventListener('input', () => {
    altura = inputAltura.value
});

formImc.addEventListener('submit', (e) => {
    e.preventDefault()

    for (let radio of radiosImc){
        if (radio.checked) {
            genero = radio.value
        }
    }
    resultadoImc(genero, peso, altura)
    document.getElementById("formCalculadoraIMC").reset()
})

// función que calcula el valor del IMC
const calcularIMC = (peso, altura) => (peso / Math.pow(altura / 100, 2))

//Función que devuelve la interpretación de IMC
function resultadoImc(genero, peso, altura) {
    contIMC.style.display = "block"
    titulo.style.display = "block"
    contReg.style.display = "none"

    switch (genero) {
        case "Hombre":
            calculoImc = calcularIMC(peso, altura)
            interpretacionImcH(calculoImc)
            break

        case "Mujer":
            calculoImc = calcularIMC(peso, altura)
            interpretacionImcM(calculoImc)
            break
    }
}

//Función de interpretación de IMC para hombres
function interpretacionImcH(calculoImc) {

    if (calculoImc <= 20) {
        resIMC.innerHTML  = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="low"> 
                                        <i class="fa-solid fa-face-grimace"></i><br>
                                        <b> Bajo peso </b> 
                                    </p>
                            </div>`
    }
    else if (20 < calculoImc && calculoImc <= 25) {
        resIMC.innerHTML  = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="normal"> 
                                        <i class="fa-solid fa-face-laugh-wink"></i><br>
                                        <b> Peso normal </b> 
                                    </p>
                            </div>`    }
    else if (25 < calculoImc && calculoImc <= 30) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="low-alert"> 
                                        <i class="fa-solid fa-face-grimace"></i><br>
                                        <b> Obesidad leve </b> 
                                    </p>
                            </div>`
    }
    else if (30 < calculoImc && calculoImc <= 40) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="mid-alert"> 
                                        <i class="fa-solid fa-face-frown"></i><br>
                                        <b> Obesidad severa </b> 
                                    </p>
                            </div>`
    }
    else if (40 < calculoImc) {
         resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="alert"> 
                                        <i class="fa-solid fa-face-sad-tear"></i><br>
                                        <b> Obesidad muy severa </b> 
                                    </p>
                            </div>`
    }
}

//Función de interpretación de IMC para mujeres
function interpretacionImcM(calculoImc) {
    if (calculoImc <= 20) {
        resIMC.innerHTML  = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="low"> 
                                        <i class="fa-solid fa-face-grimace"></i><br>
                                        <b> Bajo peso </b> 
                                    </p>
                            </div>`
    }
    else if (20 < calculoImc && calculoImc <= 24) {
        resIMC.innerHTML  = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="normal"> 
                                        <i class="fa-solid fa-face-laugh-wink"></i><br>
                                        <b> Peso normal </b> 
                                    </p>
                            </div>`
    }
    else if (24 < calculoImc && calculoImc <= 29) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="low-alert"> 
                                        <i class="fa-solid fa-face-grimace"></i><br>
                                        <b> Obesidad leve </b> 
                                    </p>
                            </div>`
    }
    else if (29 < calculoImc && calculoImc <= 37) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="mid-alert"> 
                                        <i class="fa-solid fa-face-frown"></i><br>
                                        <b> Obesidad severa </b> 
                                    </p>
                            </div>`
    }
    else if (37 < calculoImc) {
        resIMC.innerHTML = `<div> 
                                <p> Tu IMC es: <b> ${calculoImc.toFixed(2)} </b> </p>
                                <p> Interpretación:  </p>
                                    <p id="alert"> 
                                        <i class="fa-solid fa-face-sad-tear"></i><br>
                                        <b> Obesidad muy severa </b> 
                                    </p>
                            </div>`
    }
}
