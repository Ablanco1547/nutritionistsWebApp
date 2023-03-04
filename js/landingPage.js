let peso = document.querySelector('#peso');
let estaturaCm = document.querySelector('#estatura');
let estaturaMts = document.querySelector('#estaturaMetros');
let estaturaMtsLabel = document.querySelector('#estaturaMetrosLabel');
let edad = document.querySelector('#edad');
let actividadFisica = document.querySelector('#actividadFisica');
let sexo = document.querySelector('#sexo');
let grasaCorporal = document.querySelector('#grasaCorporal');
let circunferenciaMunneca = document.querySelector('#circunferenciaMunneca');
let masaGrasa = document.querySelector('#masaGrasa');
let masaLibreGrasa = document.querySelector('#masaLibreGrasa');
let composicionCorporal = document.querySelector('#composicionCorporal');


estaturaCm.addEventListener("keyup", (event) => {
    calculoEstatura = calcularCmsAMts(estaturaCm.value);

    if (isNaN(calculoEstatura)) {

        estaturaMts.innerHTML = "Ingrese una talla valida"

        estaturaMtsLabel.innerHTML = " "
    } else {
        estaturaMts.innerHTML = calculoEstatura;
        estaturaMtsLabel.innerHTML = " metros"
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