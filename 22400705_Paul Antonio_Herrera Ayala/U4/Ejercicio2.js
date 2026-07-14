function programa1(){
/*PROGRAMA-1*/
let n1= Math.floor(Math.random() * 100) +1;
let n2= Math.floor(Math.random() * 100) +1;

console.log(n1, n2);
if(n1 == n2){
    console.log("Los numeros son iguales")
}else if(n1 > n2){
    console.log("El mayor es:",n1);
}else{
    console.log("El mayor es:",n2);
}
}

function programa2(){
/*PROGRAMA-2*/
let numero = -1;

while(numero != 0){
    numero = Math.floor(Math.random() * 6);

    console.log(numero);
}

console.log("Salio el 0");
}


function programa3(){
/*PROGRAMA-3*/
let numero = Math.floor(Math.random()*9)+ 2;

console.log("Se dio el número: ",numero);

for(let i=1; i<=10; i++){
    console.log(numero + " x " + i + " = " + (numero *i));
}
}



function programa4(){
/*PROGRAMA-4*/
let numero = Math.floor(Math.random() * 99)+1;

if(numero % 2){
    console.log("El numero", numero,"es par.");
}else{
    console.log("El numero", numero, "es impar.");
}

}



function programa5(){
/*PROGRAMA-5*/
let numero = parseInt(prompt("Ingresa el monto que se vendio:"));
let comision=0;

if(numero > 10000){
    comision = numero *0.10;
}else if(numero >= 5000){
    comision = numero *0.15;
}else{
    comision = 0;
}

    console.log("Vendio:",numero,".Comision recibida:",comision);

}

/*llamar a los programas
programa1();
programa2();
programa3();
programa4();
programa5();
*/