function notas() {
    //PEDIR DATOS
    let seccion = prompt("Ingrese la seccion: ").toLocaleUpperCase();

    if (seccion == "A" || seccion == "B" || seccion == "C" || seccion == "D" || seccion == "E") {
        alert("SECCION ENCONTRADA..");
    } else {
        alert("SECCION INEXISTENTE");
        return;
    }


    let C1 = Number(prompt("Ingrese nota 1: "));
    let C2 = Number(prompt("Ingrese nota 2: "));
    let C3 = Number(prompt("Ingrese nota 3: "));
    let C4 = Number(prompt("Ingrese nota 4: "));

    if(C1 >= 0 && C1 <= 100 &&
       C2 >= 0 && C2 <= 100 &&
       C3 >= 0 && C3 <= 100 &&
       C4 >= 0 && C4 <= 100 
    ){
        alert("Continuando...")
    }else{
        alert("Nota invalida")
        return;
    }

    let promedio;

    switch (seccion) {
        case "A":
            promedio = ((C1 * 3) + (C2 * 2) + C3 + C4) / 7;
            break;
        case "B":
            promedio = (C1 + C2 + C3 + C4) / 4;
            break;
        case "C":
            promedio = (C1 + C2 + ((C3 + C4) * 2)) / 6;
            break;
        case "D":
            promedio = (C1 + (C2 * 2) + (C3 * 2) + (C4 * 2)) / 7;
            break;
        case "E":
            promedio = (C1 + (C2 * 4) + (C3 * 4) + C4) / 10;
            break;
        default:
            alert("SECCION INVALIDA");
            return;
    }

    let respuesta = confirm(
            `Los datos son:

         NOTA 1:  ${C1},
         NOTA 2:  ${C2},
         NOTA 3:  ${C3},
         NOTA 4:  ${C4}
         
         ¿DESEA CONTINUAR?`
        );
    if(respuesta == false){
        return;
    }

    if (promedio >= 0 && promedio < 21) {
        alert("Necesita mejorar, siga practicando 😒");
    } else if (promedio >= 21 && promedio < 41) {
        alert("Rendimiento irregular. Practique mas 😟");
    } else if (promedio >= 41 && promedio < 61) {
        alert("Aprobó satisfactoriamente, siga adelante 😊");
    } else if (promedio >= 61) {
        alert("Felicidades, obtuvo un puntaje alto 😱🥳");
    }

    alert(`TU PROMEDIO FUE... ${promedio.toFixed(2)}`) //numero de decimales 2
}