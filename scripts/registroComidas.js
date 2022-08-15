//Variables
let seguirCarga, res, totalCalorias, caloriasDia = 0, mje
const alimentos = []
let alimfilt2 = []

const regCom = document.getElementById("resComida")
const contReg = document.getElementById("containerAlimentos")
const titReg = document.getElementById("titleComidas")
const buttonRegistro = document.getElementById("alimentos")
const inputNombre = document.getElementById("inputNombre")
const inputCalorias = document.getElementById("inputCalorias")
const inputPorcion = document.getElementById("inputPorcion")
const selectGrupo = document.getElementById("selectGrupo")
const formAlimentos = document.getElementById("formAlimentos")
const contAlimentos = document.getElementById("containerFormAlimentos")

//clases
class Alimentos {
    constructor(nombre, tipo, calorias, porcion) {
        this._nombre = nombre
        this._tipo = tipo
        this._calorias = calorias
        this._porcion = porcion
    }
}

//Función para cargar alimentos consumidos en el día 
buttonRegistro.addEventListener('click', () => {
    document.getElementById("formAlimentos").reset()
    contIMC.style.display = "none"
    contTMB.style.display = "none"
    contFormTMB.style.display = "none"
    contFormIMC.style.display = "none"
    contAlimentos.style.display = "block"

})

inputNombre.addEventListener('input', () => {
    _nombre = inputNombre.value
});

inputCalorias.addEventListener('input', () => {
    _calorias = inputCalorias.value

});

inputPorcion.addEventListener('input', () => {
    _porcion = inputPorcion.value
});

selectGrupo.addEventListener('change', () => {
    let value = document.getElementById("selectGrupo").selectedOptions[0].text;
    _grupo = value
})

formAlimentos.addEventListener('submit', (e) => {
    e.preventDefault()
    titReg.style.display = "block"
    contReg.style.display = "block"
    contFormTMB.style.display = "none"
    contFormIMC.style.display = "none"

    regCom.innerHTML = ""

    const alimento = new Alimentos(_nombre, _grupo, _calorias, _porcion)
    alimentos.push(alimento)
   
    let alimfilt = alimentos.filter(alim => !isNaN(alim._calorias))
    alimfilt2 = alimfilt.filter(alim => !isNaN(alim._porcion))
    
    alimfilt2.forEach(alim => {
        totalCalorias = sumaCalorias(alim._porcion, alim._calorias)
        regCom.innerHTML += `   <div class="card" style="width: 16rem; margin:14px">
                                    <div class="card-body">
                                        <h5 class="card-title">${alim._nombre}</h5>
                                        <p class="card-text-al">Grupo: ${alim._tipo}</p>
                                        <p class="card-text-al">Calorías cada 100g: ${alim._calorias}</p>
                                        <p class="card-text-al">Porción en gramos: ${alim._porcion}</p>
                                    </div>
                                </div>`
        caloriasDia += totalCalorias
    })

    regCom.innerHTML += `<div>
                            <h5 id="titleTotalCal"> Total de calorías ingeridas en el día: <b> ${caloriasDia} </b> </h5> 
                        </div>`
                        
    filtrarGrupo()
    document.getElementById("formAlimentos").reset()
})

//funcion para determinar porcentaje del total de alimentos de cada grupo
function filtrarGrupo() {
    const cantElementos = alimfilt2.length

    const grupo1 = alimfilt2.filter(alim => alim._tipo == "Frutas y verduras")
    const grupo2 = alimfilt2.filter(alim => alim._tipo == "Proteínas y legumbres")
    const grupo3 = alimfilt2.filter(alim => alim._tipo == "Lácteos")
    const grupo4 = alimfilt2.filter(alim => alim._tipo == "Hidratos y cereales")
    const grupo5 = alimfilt2.filter(alim => alim._tipo == "Grasas y aceites")
    const grupo6 = alimfilt2.filter(alim => alim._tipo == "Dulces")

    const cantGrupo1 = acumularTipos(grupo1)
    const cantGrupo2 = acumularTipos(grupo2)
    const cantGrupo3 = acumularTipos(grupo3)
    const cantGrupo4 = acumularTipos(grupo4)
    const cantGrupo5 = acumularTipos(grupo5)
    const cantGrupo6 = acumularTipos(grupo6)

    const porcGrupo1 = calcularPorcentaje(cantGrupo1, cantElementos)
    const porcGrupo2 = calcularPorcentaje(cantGrupo2, cantElementos)
    const porcGrupo3 = calcularPorcentaje(cantGrupo3, cantElementos)
    const porcGrupo4 = calcularPorcentaje(cantGrupo4, cantElementos)
    const porcGrupo5 = calcularPorcentaje(cantGrupo5, cantElementos)
    const porcGrupo6 = calcularPorcentaje(cantGrupo6, cantElementos)


    regCom.innerHTML += `   <div id="divPorcentajes">
                                 <h5 id="titlePorc"> Porcentaje ingerido según cada grupo de alimentos: </h5> 
                                 <p> Frutas y verduras: ${porcGrupo1.toFixed(2)}% <br> Proteínas y legumbres: ${porcGrupo2.toFixed(2)}% <br> Lácteos: ${porcGrupo3.toFixed(2)}% <br>
                                 Hidratos y cereales: ${porcGrupo4.toFixed(2)}% <br> Grasas y aceites: ${porcGrupo5.toFixed(2)}% <br> Dulces: ${porcGrupo6.toFixed(2)}% </p>
                            </div>`
}

//función para acumular cuantos alimentos de cada grupo hay
function acumularTipos(grupo) {
    let acumulador = 0
    for (i = 0; i < grupo.length; i++) {
        acumulador += 1
    }
    return acumulador
}

// función para calcular porcentaje según grupo de alimentos del día
function calcularPorcentaje(cantGrupo, totalAlimentos) {
    let porcentaje = (cantGrupo / totalAlimentos) * 100
    return porcentaje
}

// función para sumar las calorías totales por alimento según calorías cada 100g y porción en gramos
function sumaCalorias(porcion, calorias) {
    let cantCaloriasPorcion = 100 / porcion
    let cals = calorias / cantCaloriasPorcion
    return cals
}
