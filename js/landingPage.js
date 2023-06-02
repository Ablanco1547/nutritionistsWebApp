let peso = document.querySelector('#peso');
let estaturaCm = document.querySelector('#estatura');
let estaturaMts = document.querySelector('#estaturaMetros');
let estaturaMtsValue;
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
const botonPesoIdeal = document.querySelector("#botonPesoIdeal");
const valorPIdealAda = document.querySelector('#valorPIdealAda');
let calculoEstatura;

estaturaCm.addEventListener("keyup", (event) => {
    calculoEstatura = calcularCmsAMts(estaturaCm.value);

    if (isNaN(calculoEstatura)) {

        estaturaMts.innerHTML = "Ingrese una talla valida"

        estaturaMtsLabel.innerHTML = " "
    } else {
        estaturaMts.innerHTML = calculoEstatura;
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
        masaGrasa.innerHTML = valorMasaGrasa.toFixed(2);
        
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
        //composicionCorporal.innerHTML = calculoComposicion.toFixed(2);
        composicionTamanno.value = compararComposicionSexo(calculoComposicion, sexo.value);
        
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
    let resultadoComparacion;
    let calculoIMC;

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

const valorPAjustadoAda = document.querySelector('#valorPAjustadoAda');
const idealAdaMas10 = document.querySelector('#idealAdaMas10');
const idealAdaMenos10 = document.querySelector('#idealAdaMenos10');
const ajustadoAdaMas10 = document.querySelector('#ajustadoAdaMas10');
const ajustadoAdaMenos10 = document.querySelector('#ajustadoAdaMenos10');
const valorPIdealIMC = document.querySelector('#valorPIdealIMC');
const valorPAjustadoIMC = document.querySelector('#valorPAjustadoIMC');

botonPesoIdeal.addEventListener('click',(pIdeal)=>{
    let existeValorEstatura = esVacio(estaturaCm.value);
    let existeValorPeso = esVacio(peso.value);

    let errorADA = "Seleccione el Sexo del paciente"
    let resultadoADAIdeal;
    if(existeValorEstatura == true && existeValorPeso == true){
        resultadoADAIdeal = compararSexo(sexo.value, errorADA, estaturaCm.value, calcularADAMujer, calcularADAHombre)
        valorPIdealAda.innerHTML = resultadoADAIdeal.toFixed(2)+ " kgs";

        let resultadoADAajustado = ADAAjustado(resultadoADAIdeal, peso.value);
        valorPAjustadoAda.innerHTML = resultadoADAajustado.toFixed(2) + " kgs";


        let resultadoAdaMas10 =  calcularAjustadoAdaMas10(resultadoADAIdeal);
        let resultadoAdaMenos10 = calcularAjustadoAdaMenos10(resultadoADAIdeal);
        idealAdaMas10.innerHTML = resultadoAdaMas10.toFixed(2);
        idealAdaMenos10.innerHTML = resultadoAdaMenos10.toFixed(2);

        let resultadoAdaAjustadoMas10 =  calcularADAAjustadoDiez(peso.value, resultadoAdaMas10);
        let resultadoAjustadoMenos10 = calcularADAAjustadoDiez(peso.value, resultadoAdaMenos10);
        ajustadoAdaMas10.innerHTML = resultadoAdaAjustadoMas10.toFixed(2);
        ajustadoAdaMenos10.innerHTML = resultadoAjustadoMenos10.toFixed(2);
        let composicion = composicionTamanno.innerHTML;
        let resultadoIMCIdeal = calcularIMCIdeal(composicion);


        valorPIdealIMC.innerHTML = resultadoIMCIdeal;

        let resultadoIMCAjustado = calcularIMCAjustado(peso.value, resultadoIMCIdeal);

        valorPAjustadoIMC.innerHTML = resultadoIMCAjustado.toFixed(2);

        
    }else{
        valorPIdealAda.innerHTML = "Llene el campo 'Talla en centimetros', el campo 'Sexo' y el campo 'Peso'";
    }

})



const calcularAjustadoAdaMas10 = (pResultadoADAIdeal) =>{
    return (pResultadoADAIdeal-(pResultadoADAIdeal*0.1));
}

const calcularAjustadoAdaMenos10 = (pResultadoADAIdeal) =>{
    return (pResultadoADAIdeal+(pResultadoADAIdeal*0.1));
}
const calcularADAAjustadoDiez = (pPeso, pResultado) =>{
    return (((pPeso-pResultado)/4)+pResultado);
}

const calcularIMCAjustado = (pPeso, pResultadoIMCIdeal) =>{

    return (((pPeso - pResultadoIMCIdeal)/4)+pResultadoIMCIdeal);

}

const calcularIMCIdeal = (pComposicion) =>{
    let calculo
    switch(pComposicion){
        case "Grande":
            calculo = Math.pow(calculoEstatura, 2)
            return 25*calculo;
            break;
        case "Mediana":
            calculo = Math.pow(calculoEstatura, 2)
            return 22.5*calculo;
            break;
        case "Pequeña":
            calculo = Math.pow(calculoEstatura, 2)
            return 20*calculo;
            break;
    }
}

const ADAAjustado = (pResultadoADAIdeal, pPeso) =>{
    return (((pPeso-pResultadoADAIdeal)/4)+pResultadoADAIdeal);
}

const compararSexo = (pSexo, error, parametro, casoMujer, casoHombre)=>{
    if(pSexo == "m"){
        let resultadoMujer = casoMujer(parametro);
        return resultadoMujer;
    }else if (pSexo == "h"){
        let resultadoHombre = casoHombre(parametro);
        return resultadoHombre;
    }else{
        return error;
    }
}

const calcularADAMujer = (pEstaturaCms) =>{
    return ((((pEstaturaCms-152)*2.3)/2.5)+45.5); 
}

const calcularADAHombre = (pEstaturaCms) =>{
    return ((((pEstaturaCms-152)*2.7)/2.5)+48.2);
}
