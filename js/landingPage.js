let peso = document.querySelector('#peso');
let estaturaCm = document.querySelector('#estatura');
let estaturaMts = document.querySelector('#estaturaMetros');
let estaturaMtsValue;
let estaturaMtsLabel = document.querySelector('#estaturaMetrosLabel');
let edad = document.querySelector('#edad');
let actividadFisica = document.querySelector('#actividadFisica');
let sexo = document.querySelector('#sexo');
let grasaCorporal = document.querySelector('#grasaCorporal');
let circunferenciaMunneca = document.querySelector('#circunferenciaMunneca');
let masaGrasa = document.querySelector('#masaGrasa');
let masaLibreGrasa = document.querySelector('#masaLibreGrasa');
let composicionCorporal = document.querySelector('#composicionCorporal');
let composicionTamanno = document.querySelector('#composicionTamanno');
let valorIMC = document.querySelector('#valorIMC');
let estadoIMC = document.querySelector('#estadoIMC');

estaturaCm.addEventListener("keyup", (event) => {
    calculoEstatura = calcularCmsAMts(estaturaCm.value);

    if (isNaN(calculoEstatura)) {

        estaturaMts.innerHTML = "Ingrese una talla valida"

        estaturaMtsLabel.innerHTML = " "
    } else {
        estaturaMts.innerHTML = calculoEstatura;
        estaturaMtsLabel.innerHTML = " metros"
        estaturaMtsValue = calculoEstatura;
    }

});


const calcularCmsAMts = (pEstaturaCm) => {
    let resultadoMts = (pEstaturaCm / 100);
    return resultadoMts;
};

grasaCorporal.addEventListener("keyup",(event) => {
    let existeValorGrasa = esVacio(grasaCorporal.value);
    let existeValorPeso = esVacio(peso.value);

    if(existeValorGrasa == true && existeValorPeso == true){

        let valorMasaGrasa = calcularMasaGrasa(peso.value,grasaCorporal.value);
        masaGrasa.innerHTML = valorMasaGrasa;
        
        let valorMasaLibreGrasa = calcularMasaLibreGrasa(peso.value, valorMasaGrasa);
        masaLibreGrasa.innerHTML = valorMasaLibreGrasa;


    }else{
        masaGrasa.innerHTML = "Llene el campo 'Peso actual' y el campo 'Porcentaje de grasa corporal'"
    }

})

const esVacio = (campo)=>{
    if(campo=== ""){
        return false
    }else{
        return true
    }
}


const calcularMasaGrasa = (pPeso, pGrasaCorporal) =>{
    let calculoMasaGrasa = (pPeso * (pGrasaCorporal/100));
    return calculoMasaGrasa;
};
const calcularMasaLibreGrasa = (pPeso, pValorMasaGrasa) =>{
    let calculoMasaLibreGrasa = (pPeso - pValorMasaGrasa);
    return calculoMasaLibreGrasa;
};


circunferenciaMunneca.addEventListener("keyup", (composicion) =>{
    let existeValorEstatura = esVacio(estaturaCm.value);
    let existeValorCircunferencia = esVacio(circunferenciaMunneca.value);
    if(existeValorEstatura == true && existeValorCircunferencia == true){
        let calculoComposicion = calcularComposicionCorporal(estaturaCm.value,circunferenciaMunneca.value );
        composicionCorporal.innerHTML = calculoComposicion.toFixed(2);
        composicionTamanno.innerHTML = compararComposicionSexo(calculoComposicion, sexo.value);
        
    }else{
        composicionCorporal.innerHTML = "Llene el campo 'Talla en cms' y el campo 'Circunferencia de la muñeca'"
    }



})
const calcularComposicionCorporal = (pEstaturaCm, pCircunferenciaMunneca) =>{
    let calculoComposicionCorporal = (pEstaturaCm / pCircunferenciaMunneca);

    return calculoComposicionCorporal;
};


const compararComposicionSexo = (pCalculoComposicion,pSexo) =>{
    if(pSexo == "m"){
        composicionMujer = interpretarComposicionMujer(pCalculoComposicion);
        return composicionMujer;
    }else if (pSexo == "h"){
        composicionHombre = interpretarComposicionHombre(pCalculoComposicion);
        return composicionHombre;
    }else{
        return "Por favor llene el campo 'Sexo'";
    }
};


const interpretarComposicionMujer = (pCalculoComposicion) =>{
    if(pCalculoComposicion > 11){
        return "Pequeña"
    }else if(pCalculoComposicion > 10 && pCalculoComposicion <= 11){
        return "Mediana"
    }else if ( pCalculoComposicion <= 10){
        return "Grande"
    }
};

const interpretarComposicionHombre = (pCalculoComposicion) =>{
    if(pCalculoComposicion > 10.4){
        return "Pequeña"
    }else if(pCalculoComposicion > 9.6 && pCalculoComposicion <= 10.4){
        return "Mediana"
    }else if ( pCalculoComposicion <= 9.6){
        return "Grande"
    }
};


edad.addEventListener("keyup",(imc)=>{
    let existeValorPeso = esVacio(peso.value);
    let existeValorEstatura = esVacio(estaturaCm.value);
    let valorEstaturaMetros = calcularCmsAMts(estaturaCm.value)
    let resultadoComparacion;
    let calculoIMC;
    console.log(valorEstaturaMetros);
    
    console.log(estaturaMtsValue)
    console.log(typeof estaturaMtsValue)

    if(existeValorEstatura == true && existeValorPeso == true){
        calculoIMC = calcularIMC(peso.value,estaturaMtsValue);
        valorIMC.innerHTML = calculoIMC.toFixed(2);
    }else{
        estadoIMC.innerHTML = "Llene el campo 'Peso en kg' y el campo 'Talla en centimetros'";
    }

    if(edad.value >= 20 && edad.value < 65) {
        alert
        resultadoComparacion = comparacionIMCAdulto(calculoIMC);
        estadoIMC.innerHTML = resultadoComparacion;
    }else if(edad.value >= 65){
        resultadoComparacion = comparacionIMCAdultoMayor(calculoIMC);
        estadoIMC.innerHTML = resultadoComparacion;
    }else{
        estadoIMC.innerHTML = "Por favor haga la comparacion con la hoja de curvas de la CCSS"
    }
})

const calcularIMC = (pPeso,pEstaturaMts ) =>{
    let potencia = Math.pow(pEstaturaMts,2)
    let calculoIMC = pPeso/potencia;

    return calculoIMC
};
//preguntar como se aregla esto
const comparacionIMCAdulto = (pIMC) =>{
    switch (true) {
        case pIMC >= 40:
            return "Obesidad 3"
            break;
        case pIMC >= 35:
            return "Obesidad 2"
            break;
        case pIMC >= 30:
            return "Obesidad 1"
            break;
        case pIMC >= 25:
            return "Sobrepeso"
            break;
        case pIMC >= 18.5:
            return "Normal"
            break;
        case pIMC >= 17:
            return "Peso bajo 1"
            break;
        case pIMC >= 16:
            return "Peso bajo 2"
            break;
        case pIMC < 16:
            return "Peso bajo 3"
            break;    
        }

};

const comparacionIMCAdultoMayor = (pIMC) =>{
    switch (true) {
        case pIMC >= 40:
            return "Obesidad 3"
            break;
        case pIMC >= 35:
            return "Obesidad 2"
            break;
        case pIMC >= 30:
            return "Obesidad 1"
            break;
        case pIMC >= 27:
            return "Sobrepeso"
            break;
        case pIMC >= 22:
            return "Normal"
            break;
        case pIMC >= 18.5:
            return "Peso insuficiente"
            break;
        case pIMC >= 18.4:
            return "Desnutricion leve"
            break;
        case pIMC < 16.9:
            return "Desnutricion moderada"
            break;    
        case pIMC < 16:
            return "Desnutricion severa"
            break; 
        }
        

}