//Obtener Sedes//
var obtenerSedes = function (dataObj) {

    var dataKeys = Object.keys(data); //CREAR ELEMENTOS
    console.log(dataKeys, dataKeys.length); //Regresa las llaves en un array, revisar por index.
    for (var i=0; i<dataKeys.length; i++){
        var option =document.createElement("option");
        option.setAttribute("value",dataKeys[i]);
        option.innerHTML = dataKeys[i];
        select.appendChild(option);//Asignar hijo a padre. APPENDCHILD
        console.log(dataKeys[i]); //Aqui obtiene las sedes.
     }
}

//Obtener generacion//
var obtenerGeneracion = function (e) {
    var sede = e.target.value; //Es el nuevo valor data
    console.log(data[sede],sede); //Elige unicamente la sede
    var generations = document.getElementById("generaciones");

    var genKeys = Object.keys(data[sede]); //Obtiene las generaciones.
    console.log(genKeys);
    for (var i=0; i<genKeys.length;i++){
        var chooseGen = document.createElement("option");
        chooseGen.setAttribute("value",genKeys[i]);
        chooseGen.setAttribute("data-sede",sede);
        chooseGen.innerHTML = genKeys[i];
        generations.appendChild(chooseGen);
    }
}
//Elegir generacion//
var elegirGeneracion = function (e) {
    var generacionSelect = e.target.value;//2017-1 o 2018-1 o 2016-2
    var sede = e.target.selectedOptions[0].dataset.sede;
    var arregloStudents= data[sede][generacionSelect].students;
    var template = document.getElementById("alumnasTemplate");
    template.innerHTML=""; //no se repite
    // console.log(arregloStudents);
    for (var i=0; i<arregloStudents.length; i++){
        var currentIteration = arregloStudents[i];
        console.log(currentIteration);
        var studentName = currentIteration.name;
        console.log(studentName);
        var studentPhoto = currentIteration.photo;
        console.log(studentPhoto);
        var cartaAlumna = document.createElement("div");
        cartaAlumna.setAttribute("id", "alumnas");
        cartaAlumna.innerHTML= '<div>'+ '<img src="'+studentPhoto+'" alt="">' +
        '<p>' + studentName + '</p>' +
      '</div>';
        template.appendChild(cartaAlumna);
    }

    console.log(sede);
    console.log("hola");
    console.log(generacionSelect);
    console.log(arregloStudents)
}

//Alumnas//
var obtenerAlumnas = function (e) {
    console.log(data[sede][generations]);
 }

var select = document.getElementById("sedes"); //Declarar desde aqui donde imprimir en HTML SELECCIONAR
var selectGen = document.getElementById("generaciones");

sedes.addEventListener("change", obtenerGeneracion);//Callback
selectGen.addEventListener("change", elegirGeneracion);//Callback*/
obtenerSedes (data);
