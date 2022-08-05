// var num1, num2;

// num1=parseInt(prompt('ingrese el numero1'));
// num2=parseInt(prompt('ingrese el numero2'));

// if (num1>num2) {
//     document.write(num1+' es mayor que '+num2)
// } else {
//     if (num2>num1) {
//         document.write(num2+' es mayor que '+num1)
//     }else{
//         document.write(' son iguales ')
//         document.write(num1+' es igual '+num2)
//     }
// }

// var sueldo, antiguedad, aumento;
// var mensaje="";

// sueldo=parseFloat(prompt('ingrese el sueldo actual'));
// document.write('sueldo=' +sueldo+ "<br>");
// antiguedad=parseInt(prompt('ingrese los 2 anos de antiguedad'));
// document.write('antigueda= '+antiguedad+ "<br>")
// aumento=0;

// if (sueldo<500 && antiguedad>=10) {
//     aumento=sueldo*0.2;
//     sueldo=sueldo+aumento;
//     mensaje= "usted tiene un aumento del 20%, su sueldo nuevo es: " +sueldo;

// }else{
// if (sueldo<500 && antiguedad<10) {
//     aumento=sueldo*0.5;
//     sueldo=sueldo+aumento;
//     mensaje= "usted tiene un aumento del 5%, su sueldo nuevo es: " +sueldo;
// } else {
//     if (sueldo>=500) {
//         mensaje= "usted no tiene ningun aumento, su sueldo nuevo es: " +sueldo
//     }
// }
// }
// document.write(mensaje);


// var codigo;
// codigo=parseInt(prompt("ingrese el codigo"));

// if (codigo==1) {
//     document.write('invierno');
// } else {
//     if (codigo==2) {
//         document.write('verano');
//     } else {
//         if (codigo==3) {
//             document.write('otono') ;
//         } else {
//             if (codigo==4) {
//                 document.write('primavera');
//             } else {
//                 document.write('codigo no existe');
//             }
//         }
//     }
// }


// var codigo, menu;

// menu= "menu\n\n";
// menu+="1. invierno\n";
// menu+="2. verano\n";
// menu+="3. otono\n";
// menu+="4. primavera\n\n";
// menu+=" ingrese el codigo\n";

// codigo=parseInt(prompt(menu));

// switch (codigo) {
//     case 1:  document.write('invierno');
        
//         break;
//         case 2: document.write('verano');
        
//             break;
//             case 3: document.write('otono');
        
//                 break;
//                 case 4: document.write('primavera');
        
//                     break;
//     default:  document.write('codigo no existe');
//         break;
// }



// var codigo, num1, num2, suma, resta, mult, div;
// var resp, menu;

// num1=parseInt(prompt('ingrese el numero 1'));
// num2=parseInt(prompt('ingrese el numero 2'));


// menu= "menu\n\n";
// menu+="1. suma\n";
// menu+="2. resta\n";
// menu+="3. multiplicacion\n";
// menu+="4. division\n\n";
// menu+=" ingrese el codigo\n";


// codigo=parseInt(prompt(menu));


// switch (codigo) {
//     case 1:
//         suma=num1+num2;
//         resp="la suma es: "+ suma;
//         break;
//         case 2:
//             resta=num1-num2;
//             resp="la resta es: "+ resta;

//             break;
//             case 3:
//                 mult=num1*num2;
//                 resp="la multiplicacion  es: "+ mult; 
        
//         break;
//         case 4:
//             if(num2>0){
//             div=num1/num2;
//             resp="la division es: "+ div;
//             }else {
//                 resp="el segundo numero debe ser mayor a 0"
//             }
//         break;
        
//     default: document.write('codigo no existe');
      
// }
// document.write(resp);




// var num=0, valor=0;
// do {

//    valor=2*num;
//     document.write("2* "+num+"="+valor+ '<br>');
//     num++;

// } while (num<=100);





// var codigo, num1, num2, suma, resta, mult, div;
// var resp, menu, preg;


// do {

//     //////////////
//     num1=parseInt(prompt('ingrese el numero 1'));
//     num2=parseInt(prompt('ingrese el numero 2'));
     
//     menu= "menu\n\n";
// menu+="1. suma\n";
// menu+="2. resta\n";
// menu+="3. multiplicacion\n";
// menu+="4. division\n\n";
// menu+=" ingrese el codigo\n";


// codigo=parseInt(prompt(menu));


// switch (codigo) {
//     case 1:
//         suma=num1+num2;
//         resp="la suma es: "+ suma+"<br>";
//         break;
//         case 2:
//             resta=num1-num2;
//             resp="la resta es: "+ resta+"<br>";

//             break;
//             case 3:
//                 mult=num1*num2;
//                 resp="la multiplicacion  es: "+ mult+"<br>"; 
        
//         break;
//         case 4:
//             if(num2>0){
//             div=num1/num2;
//             resp="la division es: "+ div+"<br>";
//             }else {
//                 resp="el segundo numero debe ser mayor a 0"+"<br>"
//             }
//         break;
        
//     default: resp= "codigo no existe";
      
// }
// document.write(resp);

// //////////////////
//   preg=prompt('desea continuar? ongrese si, o de lo contrario el sistema finalizara');
// } while (preg=="si");


// var i, j, valor, max;

// max = parseInt(prompt("ingrese la cantidad de numeros a multiplicar"));

// for(i=0; i<=max; i++)
// {
//     for(j=0; j<=10; j++)
//     {
//         valor=i*j;
//         document.write(i+"*"+j+"="+valor+"<br>");


//     }
// }



