let peso = document.querySelector('#peso');
let estaturaCm = document.querySelector('#estatura');

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



const calculoMetros = () => {
    calculoEstatura = calcularCmsAMts(estaturaCm.value);

    if (isNaN(calculoEstatura)) {

        estaturaMts.innerHTML = "Ingrese una talla valida"

    } else {

        estaturaMtsValue = calculoEstatura;
        return calculoEstatura;
    }

};


const calcularCmsAMts = (pEstaturaCm) => {
    let resultadoMts = (pEstaturaCm / 100);
    return resultadoMts;
};

/*grasaCorporal.addEventListener("keyup",(event) => {
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

})*/

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


let composicionCorporalValor;

circunferenciaMunneca.addEventListener("keyup", (composicion) =>{
    let existeValorEstatura = esVacio(estaturaCm.value);
    let existeValorCircunferencia = esVacio(circunferenciaMunneca.value);
    if(existeValorEstatura == true && existeValorCircunferencia == true){
        let calculoComposicion = calcularComposicionCorporal(estaturaCm.value,circunferenciaMunneca.value );
        //composicionCorporal.innerHTML = calculoComposicion.toFixed(2);

        composicionCorporalValor = compararComposicionSexo(calculoComposicion, sexo.value);
        composicionTamanno.value = composicionCorporalValor;
    }else{
        composicionCorporal.innerHTML = "!Llene el campo 'Talla en cms' y el campo 'Circunferencia de la muñeca'"
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
const calculandoIMC = () =>{
    let existeValorPeso = esVacio(peso.value);
    let existeValorEstatura = esVacio(estaturaCm.value);
    let resultadoComparacion;
    let calculoIMC;

    if(existeValorEstatura == true && existeValorPeso == true){
        calculoIMC = calcularIMC(peso.value,estaturaMtsValue);
        return calculoIMC.toFixed(2);
    }else{
        estadoIMC.innerHTML = "Llene el campo 'Peso en kg' y el campo 'Talla en centimetros'";
    }
}

const comparadorIMC = (imc) =>{
    if(edad.value >= 20 && edad.value < 65) {
        alert
        resultadoComparacion = comparacionIMCAdulto(imc);
        return resultadoComparacion;
    }else if(edad.value >= 65){
        resultadoComparacion = comparacionIMCAdultoMayor(imc);
        return resultadoComparacion;
    }else{
        estadoIMC.innerHTML = "Por favor haga la comparacion con la hoja de curvas de la CCSS"
    }
}
/*edad.addEventListener("keyup",(imc)=>{
    
})*/

const valorPAjustadoAda = document.querySelector('#valorPAjustadoAda');
const idealAdaMas10 = document.querySelector('#idealAdaMas10');
const idealAdaMenos10 = document.querySelector('#idealAdaMenos10');
const ajustadoAdaMas10 = document.querySelector('#ajustadoAdaMas10');
const ajustadoAdaMenos10 = document.querySelector('#ajustadoAdaMenos10');
const valorPIdealIMC = document.querySelector('#valorPIdealIMC');
const valorPAjustadoIMC = document.querySelector('#valorPAjustadoIMC');

let objetoCliente = {};

/*const construccionObjeto = () =>{
    //construccion del objeto
    let objetoCliente = {
        nombre: nombreCliente.value,
        edad: edad.value,
        peso: peso.value,
        estatura: calculoMetros(),
        imc: calculandoIMC(),
        imcEstado: comparadorIMC(calculandoIMC()),
        composicionCorporal: composicionCorporalValor,
        grasaCorporal: grasaCorporal.value,
        masaGrasa: masaGrasa.value,
        imc

    };

    console.log(objetoCliente)

}*/



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

const calcularIMCIdeal = (pComposicion, pEstaturaMts) =>{
    let calculo
    switch(pComposicion){
        case "Grande":
            calculo = Math.pow(pEstaturaMts, 2)
            return 25*calculo;
            break;
        case "Mediana":
            calculo = Math.pow(pEstaturaMts, 2)
            return 22.5*calculo;
            break;
        case "Pequeña":
            calculo = Math.pow(pEstaturaMts, 2)
            return 20*calculo;
            break;
    }
}

const ADAAjustado = (pResultadoADAIdeal, pPeso) =>{

    let calculo1 = (pPeso-pResultadoADAIdeal)/4
    console.log(calculo1)
    let calculo2 = calculo1 + pResultadoADAIdeal
    console.log(calculo2)
    return (((pPeso-pResultadoADAIdeal)/4)+pResultadoADAIdeal);

}

const compararSexoADA = (pSexo, error, parametro, casoMujer, casoHombre)=>{
    if(pSexo == "m"){
        let resultadoMujer = casoMujer(parametro);
        return resultadoMujer;
    }else if (pSexo == "h"){
        let resultadoHombre = casoHombre(parametro);
        return resultadoHombre;
    }else{
        return "error";
    }
}

const calcularADAMujer = (pEstaturaCms) =>{
    return ((((pEstaturaCms-152)*2.3)/2.5)+45.5); 
}

const calcularADAHombre = (pEstaturaCms) =>{
    return ((((pEstaturaCms-152)*2.7)/2.5)+48.2);
}

const calcularTMBMifflin = (pPeso, pTallaCm, pEdad, pValorSexoMif) =>{
    return (10*pPeso)+(6.25*pTallaCm)-(5*pEdad)+pValorSexoMif;
}

botonPesoIdeal.addEventListener('click',(pIdeal)=>{

    const nombreCliente = document.querySelector("#nombreCompletoInput");

    let existeValorEstatura = esVacio(estaturaCm.value);
    let existeValorPeso = esVacio(peso.value);

    if(existeValorEstatura == true && existeValorPeso == true){

       
       
       /* objetoCliente.IdealAdaMas10 = calcularAjustadoAdaMas10(resultadoADAIdeal);
        objetoCliente.IdealAdaMenos10 =

        idealAdaMas10.innerHTML = resultadoAdaMas10.toFixed(2);
        idealAdaMenos10.innerHTML = resultadoAdaMenos10.toFixed(2);

        let resultadoAdaAjustadoMas10 =  calcularADAAjustadoDiez(peso.value, resultadoAdaMas10);
        let resultadoAjustadoMenos10 = calcularADAAjustadoDiez(peso.value, resultadoAdaMenos10);
                ajustadoAdaMas10.innerHTML = resultadoAdaAjustadoMas10.toFixed(2);
        ajustadoAdaMenos10.innerHTML = resultadoAjustadoMenos10.toFixed(2);
*/




        objetoCliente.nombre = nombreCliente.value;
        objetoCliente.edad = parseInt(edad.value);
        objetoCliente.peso = parseInt(peso.value);
        objetoCliente.sexo = sexo.value;
        objetoCliente.estaturaCm = parseInt(estaturaCm.value);
        objetoCliente.estaturaMts = calculoMetros();
        objetoCliente.circMunneca = parseInt(circunferenciaMunneca.value);
        objetoCliente.compCorporal = composicionTamanno.value;
        objetoCliente.grasaCorporal = parseInt(grasaCorporal.value);
        objetoCliente.actividadFisica = actividadFisica[actividadFisica.value].innerHTML;

        /*Resultados*/
        objetoCliente.masaGrasa = calcularMasaGrasa(peso.value,grasaCorporal.value)
        objetoCliente.IMC = parseInt(calcularIMC(peso.value,calculoMetros()).toFixed(2))
        objetoCliente.masaLibreGrasa = calcularMasaLibreGrasa(peso.value, objetoCliente.masaGrasa)

        if(objetoCliente.sexo == "m"){
            objetoCliente.AdaIdeal =  parseInt(calcularADAMujer(objetoCliente.estaturaCm).toFixed(2));
        }else if (objetoCliente.sexo == "h"){
            objetoCliente.AdaIdeal = parseInt(calcularADAHombre(objetoCliente.estaturaCm).toFixed(2));
        }

        /*objetoCliente.AdaIdeal = compararSexoADA(objetoCliente.sexo, objetoCliente.estaturaCm, , )*/

        objetoCliente.AdaMas10 = calcularAjustadoAdaMas10(objetoCliente.AdaIdeal);
        objetoCliente.AdaMenos10 = calcularAjustadoAdaMenos10(objetoCliente.AdaIdeal);
        objetoCliente.AdaAjustado = ADAAjustado(objetoCliente.AdaIdeal, objetoCliente.peso);
        objetoCliente.ADAAjustadoMas10 = calcularAjustadoAdaMas10(objetoCliente.AdaAjustado);
        objetoCliente.ADAAjustadoMenos10 = calcularAjustadoAdaMenos10(objetoCliente.AdaAjustado);
        objetoCliente.pesoIdealImc = parseInt(calcularIMCIdeal(objetoCliente.compCorporal,objetoCliente.estaturaMts).toFixed(1))
        objetoCliente.pesoIdealImcAjust = calcularIMCAjustado(objetoCliente.peso,objetoCliente.pesoIdealImc)
        
        if(objetoCliente.edad >= 20 && objetoCliente.edad < 65) {
            objetoCliente.estadoIMC = comparacionIMCAdulto(objetoCliente.IMC);
        }else if(objetoCliente.edad >= 65){
            objetoCliente.estadoIMC =  comparacionIMCAdultoMayor(objetoCliente.IMC);
        }else{
            objetoCliente.estadoIMC = "Compare con la hoja de curvas de la CCSS"
        }
        

        /*Calculo de requerimientos */

        if(objetoCliente.sexo == "h"){
            objetoCliente.ValorSexoMif = parseInt(5);
        }else if(objetoCliente.sexo == "m"){
            objetoCliente.ValorSexoMif = parseInt(-161);
        }else{
            objetoCliente.ValorSexoMif = parseInt(0);
        }

        objetoCliente.tmbMifflin = calcularTMBMifflin(objetoCliente.peso,objetoCliente.estaturaCm,objetoCliente.edad,objetoCliente.ValorSexoMif)




    
        imprimirObjeto();

        
    }else{
        valorPIdealAda.innerHTML = "Llene el campo 'Talla en centimetros', el campo 'Sexo' y el campo 'Peso'";
    }

})



const imprimirObjeto = () =>{
    let nombreClienteimp = document.querySelector("#nombreClienteimp");
    let edadClienteimp = document.querySelector("#edadClienteimp");
    let pesoClienteimp = document.querySelector("#pesoClienteimp");
    let estaturaImp = document.querySelector('#estaturaImp');
    let  composicionImp = document.querySelector('#composicionImp');
    let grasaImp = document.querySelector('#grasaImp');
    let masaGrasaImp = document.querySelector('#masaGrasaImp');
    let IMCImp = document.querySelector('#IMCImp');
    let estadoIMCImp = document.querySelector('#estadoIMCImp');
    let masaLibreGrasaImp = document.querySelector('#masaLibreGrasaImp');
    let pesoIdealAdaImp = document.querySelector('#pesoIdealAdaImp');
    let idealAdaMas10Imp = document.querySelector('#idealAdaMas10Imp');
    let idealAdaMenos10Imp = document.querySelector('#idealAdaMenos10Imp');
    let pesoAjustadoAdaImp = document.querySelector('#pesoAjustadoAdaImp');
    let ajustadoAdaMas10Imp = document.querySelector('#ajustadoAdaMas10Imp');
    let ajustadoAdaMenos10Imp = document.querySelector('#ajustadoAdaMenos10Imp');
    let pesoIdealIMCImp = document.querySelector('#pesoIdealIMCImp');
    let pesoAjustadoIMCImp = document.querySelector('#pesoAjustadoIMCImp');
    let tmbMifImp = document.querySelector('#tmbMifImp');
    /*let  = document.querySelector('#');*/



    nombreClienteimp.innerHTML = objetoCliente.nombre
    edadClienteimp.innerHTML = objetoCliente.edad
    pesoClienteimp.innerHTML = objetoCliente.peso
    estaturaImp.innerHTML = objetoCliente.estaturaMts
    composicionImp.innerHTML = objetoCliente.compCorporal
    grasaImp.innerHTML = objetoCliente.grasaCorporal
    masaGrasaImp.innerHTML = objetoCliente.masaGrasa
    IMCImp.innerHTML = objetoCliente.IMC
    estadoIMCImp.innerHTML = objetoCliente.estadoIMC
    masaLibreGrasaImp.innerHTML = objetoCliente.masaLibreGrasa
    pesoIdealAdaImp.innerHTML = objetoCliente.AdaIdeal
    idealAdaMas10Imp.innerHTML = objetoCliente.AdaMas10
    idealAdaMenos10Imp.innerHTML = objetoCliente.AdaMenos10
    pesoAjustadoAdaImp.innerHTML = objetoCliente.AdaAjustado
    ajustadoAdaMas10Imp.innerHTML = objetoCliente.ADAAjustadoMas10
    ajustadoAdaMenos10Imp.innerHTML = objetoCliente.ADAAjustadoMenos10
    pesoIdealIMCImp.innerHTML = objetoCliente.pesoIdealImc
    pesoAjustadoIMCImp.innerHTML = objetoCliente.pesoIdealImcAjust
    tmbMifImp.innerHTML = objetoCliente.tmbMifflin;


    console.log(objetoCliente);

}

