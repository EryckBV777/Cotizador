let total = 0;
const radio = document.querySelector('input[type="radio"]');


class carpint {
    constructor(madera, tamaño, mantenimiento, tipo, muebleria, canti, entrega, garantia) {
        this.madera = madera;
        this.tamaño = tamaño;
        this.mantenimiento = mantenimiento;
        this.tipo = radio.labels[0].textContent;
        this.muebleria = muebleria;
        this.canti = canti;
        this.entrega = entrega;
        this.garantia = garantia;
    }


    //cotizarSeguro
    cotizarCarpinteria() {
        /*
            1 = americano 1.15
            2 = asiatico 1.05
            3 = europeo 1.35
        */
        let cantidad;
        let base = 0;

        switch (this.madera) {
            case '1':
                cantidad = base + 2000;
                break;
            case '2':
                cantidad = base + 1000;
                break;
            case '3':
                cantidad = base + 500;
                break;
            case '4':
                cantidad = base + 4000;
                break;
        }

        switch (this.tamaño) {
            case '1':
                cantidad = cantidad + 250;
                break;
            case '2':
                cantidad = cantidad + 500;
                break;
            case '3':
                cantidad = cantidad + 750;
                break;
        }

        switch (this.mantenimiento) {
            case '1':
                cantidad = cantidad + 1000;
                break;
            case '2':
                cantidad = cantidad + 5000;
                break;
            case '3':
                cantidad = cantidad + 1500;
                break;
        }

        switch (this.tipo) {
            case '1':
                cantidad = cantidad + 300;
                break;
            case '2':
                cantidad = cantidad + 600;
                break;
            case '3':
                cantidad = cantidad + 900;
                break;
        }

        switch (this.muebleria) {
            case '1':
                cantidad = cantidad + 1000;
                break;
            case '2':
                cantidad = cantidad + 800;
                break;
            case '3':
                cantidad = cantidad + 700;
                break;
            case '4':
                cantidad = cantidad + 1000;
                break;
        }

        switch (this.canti) {
            case '1':
                cantidad = cantidad + 500;
                break;
            case '2':
                cantidad = cantidad + 700;
                break;
            case '3':
                cantidad = cantidad + 1000;
                break;
        }

        switch (this.entrega) {
            case '1':
                cantidad = cantidad + 0;
                break;
            case '2':
                cantidad = cantidad + 500;
                break;
        }

        switch (this.garantia) {
            case '1':
                cantidad = cantidad + 600;
                break;
            case '2':
                cantidad = cantidad + 800;
                break;
            case '3':
                cantidad = cantidad + 1000;
                break;
        }
        console.log(cantidad)
        cantidad = cantidad + total;
        return cantidad;
    }
}

//parte visual HTML
function Interfaz() { }

//Mensaje en HTml
Interfaz.prototype.mostarMensaje = function (mensaje, tipo) {
    const div = document.createElement("div");

    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add("mensaje", "correcto");
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector(".form-group"));

    setTimeout(function () {
        document.querySelector('.mensaje').remove();
    }, 2000);
};

//imprime resultado de cotización
Interfaz.prototype.mostrarResultado = function (carpin, total) {
    const resultado = document.getElementById('resultado');
    let madera;
    let tamaño;
    let mantenimiento;
    let tipo;
    let muebleria;
    let canti;
    let entrega;
    let garantia;

    switch (carpin.madera) {
        case '1':
            madera = 'Roble';
            break;
        case '2':
            madera = 'Encino';
            break;
        case '3':
            madera = 'Nogal';
            break;
        case '4':
            madera = 'Olivo';
            break;
    }
    
        switch (carpin.tamaño) {
            case '1':
                tamaño = 'Cada 6 meses';
                break;
            case '2':
                tamaño = 'Cada año';
                break;
            case '3':
                tamaño = 'Emergencias';
                break;
        }

    switch (carpin.mantenimiento) {
        case '1':
            mantenimiento = 'Cada 6 meses';
            break;
        case '2':
            mantenimiento = 'Cada año';
            break;
        case '3':
            mantenimiento = 'Emergencias';
            break;
    }
const radiotxt = document.querySelector('input[type="radio"]:checked');


   tipo = radiotxt.labels[0].textContent;

    switch (carpin.muebleria) {
        case '1':
            muebleria = 'Mesas';
            break;
        case '2':
            muebleria = 'Sillas';
            break;
        case '3':
            muebleria ='Estantes';
            break;
        case '4':
            muebleria = 'Armarios';
            break;
    }

    switch (carpin.canti) {
        case '1':
            canti = 'De 1 - 3';
            break;
        case '2':
            canti = 'De 5 - 10';
            break;
        case '3':
            canti = 'De 15 - 20';
            break;
    }

    switch (carpin.entrega) {
        case '1':
            entrega = 'En tienda';
            break;
        case '2':
            entrega = 'A domicilio';
            break;
    }

    switch (carpin.garantia) {
        case '1':
            garantia = 'De 1 - 3 meses';
            break;
        case '2':
            garantia = 'De 4 - 6 meses';
            break;
        case '3':
            garantia = 'A 1 año';
            break;
    }
    //crear un div
    const div = document.createElement('div');
    //insertar la información
    div.innerHTML = `
    <p class="header">Tu total es de:</p>
    <p>La madera elegida fue: ${madera} </p>
    <p>El tamaño elegido fue: ${tamaño}</p>
    <p>El mantenimiento elegido fue: ${mantenimiento}</p>
    <p>El tipo elegido fue: ${tipo}</p>
    <p>El mueble elegido fue: ${muebleria}</p>
    <p>La cantidad elegida fue: ${canti}</p>
    <p>La tela elegida fue: ${entrega}</p>
    <p>La garantia elegida fue: ${garantia}</p>
    <p>Total: $ ${total}</p>    
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';

    setTimeout(function () {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 500);

}

//capturar datops del formulario
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //leer la marca seleccionada
    const madera = document.getElementById('madera');
    const maderaSeleccionado = madera.options[madera.selectedIndex].value;

    //leer año seleccionado
    /* const tamañoSeleccionado = radio.checked.value; */

    const mantenimiento = document.getElementById("mantenimiento");
    const mantenimientoSeleccionado = mantenimiento.options[mantenimiento.selectedIndex].value;

   /*  const tipo = document.getElementById("tipo");
    const tipoSeleccionado = tipo.options[tipo.selectedIndex].value;
 */
    const muebleria = document.getElementById("muebleria");
    const muebleriaSeleccionado = muebleria.options[muebleria.selectedIndex].value;

    const canti = document.getElementById("canti");
    const cantiSeleccionado = canti.options[canti.selectedIndex].value;

    const entrega = document.getElementById("entrega");
    const entregaSeleccionado = entrega.options[entrega.selectedIndex].value;

    const garantia = document.getElementById("garantia");
    const garantiaSeleccionado = garantia.options[garantia.selectedIndex].value

    const tipoSeleccionado = radio.checked.value;

    const tamaño = document.getElementById("tamaño");
    const tamañoSeleccionado = tamaño.options[tamaño.selectedIndex].value;



    //crear instancia de interfaz
    const interfaz = new Interfaz();
    //revisamos que los campos no estén vacíos

if (maderaSeleccionado === '' || tamañoSeleccionado === '' || mantenimientoSeleccionado === '' || tipoSeleccionado === '' || muebleriaSeleccionado === '' || cantiSeleccionado === '' || entregaSeleccionado === '' || garantiaSeleccionado === '') {
        //interfaz imprimiendo error
        interfaz.mostarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
    } else {
        //limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const car = new carpint(maderaSeleccionado, tamañoSeleccionado, mantenimientoSeleccionado, tipoSeleccionado, muebleriaSeleccionado, cantiSeleccionado, entregaSeleccionado, garantiaSeleccionado);
        //Cotizar el lucha
        const cantidad = car.cotizarCarpinteria(car);
        //mostrar resultado
        interfaz.mostrarResultado(car, cantidad);
        interfaz.mostarMensaje('Cotizando', 'correcto');

    }

});