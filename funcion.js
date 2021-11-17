





        var indiceImagenesSP = 0 ;
        var arrayImagenesSP = [] ;
        
        var indiceImagenesSI = 0 ;
        var arrayImagenesSI = [] ; 
                      
        window.addEventListener('load',function(){


            var time = 5000;  /* 5000 son milisengundos */ 

            
            
            arrayImagenesSI[0] = 'imagenes/SoloImagenes/0.jpg';
            arrayImagenesSI[1] = 'imagenes/SoloImagenes/1.jpg';
            arrayImagenesSI[2] = 'imagenes/SoloImagenes/2.jpg';
            arrayImagenesSI[3] = 'imagenes/SoloImagenes/3.jpg';
            arrayImagenesSI[4] = 'imagenes/SoloImagenes/4.jpg';
            arrayImagenesSI[5] = 'imagenes/SoloImagenes/5.jpg';

            
            arrayImagenesSP[0] = 'imagenes/SoloPeliculas/0.jpg';
            arrayImagenesSP[1] = 'imagenes/SoloPeliculas/1.jpg';
            arrayImagenesSP[2] = 'imagenes/SoloPeliculas/2.jpg';
            arrayImagenesSP[3] = 'imagenes/SoloPeliculas/3.jpg';
            arrayImagenesSP[4] = 'imagenes/SoloPeliculas/4.jpg';
            arrayImagenesSP[5] = 'imagenes/SoloPeliculas/5.jpg';
            
            document.carruselSI.src = arrayImagenesSI[0];
            
            document.carruselSP.src = arrayImagenesSP[0];
            
            var intervalo = setInterval(siguienteImagenAut,time);

        });
            

        
        function siguienteImagenAut(){

                
            if (indiceImagenesSI < 5 ){ /* cuando llegue a la ultima, que empiece desde el principo y asi*/
                indiceImagenesSI++;
            }else{
                indiceImagenesSI = 0;
            }

            document.carruselSI.src = arrayImagenesSI[indiceImagenesSI];

        }


        function siguienteImagen(){

    
            if (indiceImagenesSP < 5 ){ /* cuando llegue a la ultima, que empiece desde el principo y asi*/
                indiceImagenesSP++;
            }else{
                indiceImagenesSP = 0;
            }
        
            document.carruselSP.src = arrayImagenesSP[indiceImagenesSP];
        
        }
        
        
        function anteriorImagen(){
        
          if (indiceImagenesSP > 0 ){ 
        
            indiceImagenesSP--;
        
          }else{
            
            indiceImagenesSP = 5;
          }  
        
          document.carruselSP.src = arrayImagenesSP[indiceImagenesSP];
        
        }









function validar(){

    document.getElementById("divErrores").innerHTML = "";

        // Esto lo hago para probar la funcion
 /*       document.getElementById("nombre").value = "Jorge";
        document.getElementById("apellido").value = "Perez";
        document.getElementById("telefono").value = "2664521367";
        document.getElementById("email").value = "jorgeperez@gmail.com";
        document.getElementById("mensaje").value = "Este es el mensaje que quiero enviar...";
 */

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var desplegable = document.getElementById("desplegable").value;
    var mensaje = document.getElementById("mensaje").value;


    var exprRegularEmail = /\w+@\w+\.+[a-z]/;
    var exprRegularNumero = /^[0-9]*$/;

    var erroresAcumulados = [];

 


    /*-------------------------------------------------*/
  
    /*---------------------------------*/  
    if(nombre === ""){
        erroresAcumulados.push("El campo Nombre no puede quedar vacio");
        document.getElementById("nombre").classList.add('claseError');
        document.getElementById("nombre").focus();
    

    }else if(nombre.length > 20){

        erroresAcumulados.push("El campo Nombre debe contener maximo 20 cararcteres");
        document.getElementById("nombre").classList.add('claseError');
        document.getElementById("nombre").focus();

        }else{
            document.getElementById("nombre").classList.remove('claseError');
        }
    
    /*---------------------------------*/ 

    if(apellido === ""){
        erroresAcumulados.push("El campo Apellido no puede quedar vacio");
        document.getElementById("apellido").classList.add('claseError');
        document.getElementById("apellido").focus();


    }else if(apellido.length > 20){

        erroresAcumulados.push("El campo Apellido debe contener maximo 20 cararcteres");
        document.getElementById("apellido").classList.add('claseError');
        document.getElementById("apellido").focus();

        }else{
            document.getElementById("apellido").classList.remove('claseError');
        }

    /*---------------------------------*/ 

    
    if(telefono === ""){
        erroresAcumulados.push("El campo telefono no puede quedar vacio");
        document.getElementById("telefono").classList.add('claseError');
        document.getElementById("telefono").focus();

    }else if(!exprRegularNumero.test(telefono)){
        erroresAcumulados.push("El campo Telefono solo recibe numeros");
            document.getElementById("telefono").classList.add('claseError');
            document.getElementById("telefono").focus();

            }else if( telefono.length < 10 || telefono.length > 12 ){
                erroresAcumulados.push("La telefono debe contenerentre 10 y 12 numero para ser valido");
                document.getElementById("telefono").classList.add('claseError');
                document.getElementById("telefono").focus();

                }else{ 
                    document.getElementById("telefono").classList.remove('claseError');
                }

        /*---------------------------------*/ 


    if(email === ""){
        erroresAcumulados.push("El campo E-mail no puede quedar vacio");
        document.getElementById("email").classList.add('claseError');
        document.getElementById("email").focus();

    }else if(!exprRegularEmail.test(email)){
        erroresAcumulados.push("El E-mail esta mal escrito");
            document.getElementById("email").classList.add('claseError');
            document.getElementById("email").focus();
            
        }else if( email.length > 20){

            erroresAcumulados.push("El campo E-mail debe contener maximo 20 cararcteres");
            document.getElementById("email").classList.add('claseError');
            document.getElementById("email").focus();

            }else{
                document.getElementById("email").classList.remove('claseError');

            }
    /*---------------------------------*/ 
       


        if( desplegable.selectedIndex == 0){ 
            erroresAcumulados.push("Debe seleccionar un motivo de su contacto");
            document.getElementById("desplegable").classList.add('claseError');
            document.getElementById("desplegable").focus();

        }else{
            document.getElementById("desplegable").classList.remove('claseError');

        }


     /*---------------------------------*/ 
    if(mensaje === ""){
        erroresAcumulados.push("El campo mesaje no debe quedar vacio");
            document.getElementById("mensaje").classList.add('claseError');
            document.getElementById("mensaje").focus();

    }else if(mensaje.length > 140){
        erroresAcumulados.push("El mesaje debe contener un de maximo 140 caracteres");
            document.getElementById("mensaje").classList.add('claseError');
            document.getElementById("mensaje").focus();

        }else{
            document.getElementById("mensaje").classList.remove('claseError'); 
        }
    /*---------------------------------*/ 

    /*-------------------------------------------------*/

        if(erroresAcumulados.length > 0){

            var ulErrores = "<ul>";

                for (var i = 0; i < erroresAcumulados.length ; i++){

                    ulErrores += "<li>" + erroresAcumulados[i] + "</li>"; 

                }     

                ulErrores += "</ul>";
        
            document.getElementById("divErrores").innerHTML = ulErrores;
            
            return false;    //--- me salgo de la ejecucion porque se encontraron errores de validacion

        }

    /*-------------------------------------------------*/

    let liElm = document.createElement('li');

    liElm.innerHTML = "<li> Nombre: " + nombre + " Apellido: " + apellido + " Tel: "+ telefono+" E-mail: " + email + " Motivo: " + desplegable + " Mensaje: " + mensaje + "</li>";

    let envioForm = document.getElementById('listaEnvios');
    envioForm.appendChild(liElm);


    document.getElementById("nombre").value="";    
    document.getElementById("apellido").value="";    
    document.getElementById("email").value="";
    document.getElementById("telefono").value="";
    document.getElementById("mensaje").value="";    

    return false;

}

