
$('body').ready(function(){
    //alert('Hola desde JS')

    //Estructura de Ajax
    $.ajax({
        //url dela API web service
        url:'https://jsonplaceholder.typicode.com/users',
        //MEtodo de la peticion -GET, POST, PUT, DELETE, ETC
        method:'GET',
        //formato en la que se recibe los datos
        dataType:'JSON',
        //Datos a enviar al backend o al servicio web
        data:'',
        beforeSend: function(){
            //Realizar una acción mientras se obtienen los datos
        },
        success: function(data){    
            //console.log(data[4].name)
            //console.log(data[4].company.name)            

            data.forEach(Element => {
                let registro = '<tr>' + 
                        '<td>' + Element.id + '</td>' +                    
                        '<td>' + Element.name + '</td>' +
                        '<td>' + Element.username + '</td>' +
                        '<td>' + Element.email + '</td>' +
                        '<td>' + Element.address.street + '</td>' +
                        '<td>' + Element.phone + '</td>' +
                        '<td>' + Element.website + '</td>' +
                        '<td>' + Element.company.name + '</td>' +
                    '</tr>'
                    $('#contentUsuarios').append(registro)
                
            })

           
        
            
            // cuando se obtienen los datos de manera corecta
        },
        error: function(){
            // hay error
            alert('Error al obtener la información')

        }
    })
})