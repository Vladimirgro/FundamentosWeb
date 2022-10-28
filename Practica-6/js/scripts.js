//alert('Hola JS')

//console.log('Hola JS')

var nombre ='Juan'
var telefono = '7713568665'
var email = 'juan@gmail.com'
var edad = 29
var sexo = 'Masculino'
var casado = true
//auto = 'nissan'

let empleo = 'Programadoe'
let colores = ['azul', 'verde', 'rojo', 'cafe', 'morado']
let numeros = [8,9,4,6,7,5]

let auto={
    colores: ['verde', 'rojo', 'azul'],
    tipo: ['manual', 'automatico'],
    cilindros: [4, 6, 8],
    puertas: [3,5,7,9],
    modelos: [
        {
            A1:'sedan',
            descripcion:'auto sedan etc.',
            tipoPiel: true
        },
        {
            A2:'hashback',
            descripcion:'auto hashback etc.',
            tipoPiel: true
        },
        {
            A3:'hashback2',
            descripcion:'auto hashback2 etc.',
            tipoPiel: false
        },
        {
            A4:'sedan2',
            descripcion:'auto sedan2 etc.',
            tipoPiel: true
        }
    ]
}
//console.log(auto.modelos[2].A3)


//Condiciones
let numeroUno = 2
let numeroDos = '2'

if(numeroUno === numeroDos){
    //console.log('El número es igual')
}else{
    //console.log('EL numero no es igual')
}

//cilcos

for(let i=0; i<4; i++){
    //console.log(colores[i])
}

colores.forEach(Element => {
    //console.log(Element)
})



//funciones

function sumar(){
    let ingresoUno = 50
    let ingresoDos = 127
    let resultadoSuma = ingresoUno + ingresoDos
    console.log(resultadoSuma)
}
//sumar()




let factura = {
    nombreEmisor:'Juan',
    rfcEmisor:'SDFGHJKIUYTRUH132',
    nombreReceptor:'Pedro',
    rfcReceptor:'5678Y8IYIU',
    concepto:[
        {nombre:'Pala', 
        costoUnitario:79, 
        sku:'8978SD'},
        {nombre:'Metro', costoUnitario:90, sku:'fghU89UIjytuf'},
        {nombre:'Pico', costoUnitario:200, sku:'SDFHUI'},
        {nombre:'Desarmador', costoUnitario:40, sku:'UISDHFIUYSD'}
    ],
    iva:16
};




factura.concepto.forEach(Element => {
    console.log(Element.nombre)
})

for(let i=0; i<4; i++){
    console.log(factura.concepto[i].nombre)
}