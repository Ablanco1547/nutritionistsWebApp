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


estaturaCm.addEventListener("change",(imc)=>{
    let existeValorPeso = esVacio(peso.value);
    let existeValorEstatura = esVacio(estaturaCm.value);
    
    console.log(estaturaMtsValue)
    console.log(typeof estaturaMtsValue)

    if(existeValorEstatura == true && existeValorPeso == true){
        let calculoIMC = calcularIMC(peso.value,estaturaMts.value);
        valorIMC.innerHTML = calculoIMC;


    }else{
        estadoIMC.innerHTML = "Llene el campo 'Peso en kg' y el campo 'Talla en centimetros'";
    }

})

const calcularIMC = (pPeso,pEstaturaMts ) =>{
    let potencia = Math.pow(pEstaturaMts,2)
    let calculoIMC = pPeso/potencia;

    console.log(pEstaturaMts)
    console.log(typeof pEstaturaMts)

    return calculoIMC
};
