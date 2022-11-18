$('#btnCompararEdades').click(function(){
    
    let edadJuan = parseInt($('#edadJuan').val())
    let edadPedro = parseInt($('#edadPedro').val())

    if(edadJuan > edadPedro){
        console.log("La edad de Juan es mayor", edadJuan)        
    } else if (edadPedro > edadJuan) {
        console.log("La edad de Pedro es mayor", edadPedro)
    }
   
    
    
})