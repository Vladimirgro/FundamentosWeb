$('#btnGuardar').click(function(){
    let nombre = $('#nombre').val();
    let app = $('#app').val();
    let apm = $('#apm').val();
    let email = $('#email').val();
    let tel = $('#tel').val();
    let edad = $('#edad').val();
    let dep = $('#dep').val();   

    if($.trim(nombre) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert">Favor de ingresar su nombre.</div>')        
        return
    }

    if($.trim(app) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert">Favor de ingresar su apellido paterno.</div>')        
        return
    }

    if($.trim(apm) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert">Favor de ingresar su apellido materno.</div>')        
        return
    }

    if($.trim(email) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert">Favor de ingresar su email.</div>')        
        return
    }
    
    if($.trim(tel) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert">Favor de ingresar su telefóno.</div>')        
        return
    }

    if($.trim(edad) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert">Favor de ingresar su edad.</div>')        
        return
    }

    if($.trim(dep) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert">Favor de ingresar su departamento.</div>')        
        return
    }
    
    $('#nom').val(nombre)
    //let sumEdad = parseInt(edad) + parseInt(edad)
    //$('#edad').val(sumEdad)

    //alert(nombre)
    //alert(app)
    //alert(apm)
    //alert(email)
    //alert(tel)
    //alert(edad)
    //alert(dep)

    let registro = '<tr>' + 
        '<td>' + nombre + '</td>' +
        '<td>' + app + '</td>' +
        '<td>' + apm + '</td>' +
        '<td>' + email + '</td>' +
        '<td>' + tel + '</td>' +
        '<td>' + edad + '</td>' +
        '<td>' + dep + '</td>' +        
        '</tr>'
    
    $('#contentEmpleados').append(registro)
    $('#formEmpleados')[0].reset()

})