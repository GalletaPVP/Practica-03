function calculo(){
    var tipo_prestamo = document.getElementById('tipo_prestamo');
    var valor = tipo_prestamo.options[tipo_prestamo.selectedIndex].text;
    if(valor === 'Hipotecario'){
        document.getElementById('porcentaje').value = 0.13;
        document.getElementById('porcentaje').innerText = '13%';
    }else if(valor === 'Vivienda'){
        document.getElementById('porcentaje').value = 0.12;
        document.getElementById('porcentaje').innerText = '12%';
    }else if(valor === 'Sueldo'){
        document.getElementById('porcentaje').value = 0.8;
        document.getElementById('porcentaje').innerText = '8%';
    }else if(valor === 'Negocio'){
        document.getElementById('porcentaje').value = 0.10;
        document.getElementById('porcentaje').innerText = '10%';
    }
}

function procesar(){
    var importe = document.getElementById('importe').value;
    var porcentaje = document.getElementById('porcentaje').value;
    var nombre = document.getElementById('nombre').value;
    var cuotas = document.getElementById('cuotas').value;
    if(porcentaje === "" || importe === ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ingrese los valores faltantes',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
    }else if(nombre === "" || cuotas === ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ingrese los valores faltantes',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
    }else{
        total_interes = importe * porcentaje;
        total_pagar = Number(importe) + Number(total_interes);
        document.getElementById('total_interes').value = total_interes;
        document.getElementById('total_pagar').value = Math.round(total_pagar);
    }
}

function borrar(){
    document.getElementById('nombre').value = '';
    document.getElementById('importe').value = '';
    document.getElementById('cuotas').value = '';
    document.getElementById('total_interes').value = '';
    document.getElementById('total_pagar').value = '';
}

document.getElementById('tipo_prestamo').addEventListener('select', calculo)
document.getElementById('procesar').addEventListener('click', procesar)
document.getElementById('borrar').addEventListener('click', borrar)
