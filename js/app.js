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

//Elegir generacion e imprimir alumnas//
var elegirGeneracion = function (e) {
    var generacionSelect = e.target.value;//2017-1 o 2018-1 o 2016-2
    var sede = e.target.selectedOptions[0].dataset.sede;
    var arregloStudents= data[sede][generacionSelect].students;

    //Templates//
    var template = document.getElementById("alumnasTemplate");
    template.innerHTML="";//no se repite
    var quantity = document.getElementById("cantidad");
    quantity.innerHTML="";//no se repite
    var activeStudents = document.getElementById("activasAhora");
    activeStudents.innerHTML="";//no se repite
    var percent = document.getElementById("percent");
    percent.innerHTML="";//no se repite

    //**Estudiantes activas**//
    var activas = [];
    console.log(activas);
    
    //**Cantidad alumnas**//
    var cantidadAlumnas = arregloStudents.length;
    console.log(cantidadAlumnas);
    var showQty = document.createElement("div");
    showQty.setAttribute("id","cantidad");
    showQty.innerHTML='<div>' + 
    '<p>'+ "Alumnas:" +cantidadAlumnas+'</p>'+'</div>';
    quantity.appendChild(showQty);

    //Iteracion//
    for (var i=0; i<arregloStudents.length; i++){
        var currentIteration = arregloStudents[i];
        console.log(currentIteration);
        //Alumnas activas e inactivas//
        var studentStatus = currentIteration.active;
        console.log(studentStatus);
        if (studentStatus == true){
            activas.push(studentStatus);
        }
        //**Alumnas**//
        var studentName = currentIteration.name;
        console.log(studentName);
        var studentPhoto = currentIteration.photo;
        console.log(studentPhoto);
        var cartaAlumna = document.createElement("div");
        cartaAlumna.setAttribute("id", "alumnas");
        cartaAlumna.innerHTML= '<div>'+ '<img src="'+studentPhoto+'">' + '' +
        '<p>' + studentName + '</p>' +
        '</div>';
        template.appendChild(cartaAlumna);
          };
        //**Estudiantes activas**//
        var estudiantesActivas = activas.length;
        console.log(estudiantesActivas);
        var showActivas = document.createElement("div");
        showActivas.setAttribute("id","activas");
        showActivas.innerHTML='<div>' +
        '<p>' + 'Activas: ' +estudiantesActivas+ '</p>' +
        '</div>';
        activeStudents.appendChild(showActivas);
        //**Porcentaje de estudiantes activas**//
        var porcentaje=(estudiantesActivas * 100) / cantidadAlumnas;
        var redondeo = Math.round(porcentaje);
        console.log(redondeo);
        var showPorcentaje = document.createElement('div');
        showPorcentaje.setAttribute("id","porcentaje");
        showPorcentaje.innerHTML='<div>' + 
        '<p>' + "Porcentaje de alumnas activas: " +redondeo+ "%" + '</p>' +
        '</div>';
        percent.appendChild(showPorcentaje);
    }


var select = document.getElementById("sedes"); //Declarar desde aqui donde imprimir en HTML SELECCIONAR
var selectGen = document.getElementById("generaciones");

sedes.addEventListener("change", obtenerGeneracion);//Callback
selectGen.addEventListener("change", elegirGeneracion);//Callback*/
obtenerSedes (data);
