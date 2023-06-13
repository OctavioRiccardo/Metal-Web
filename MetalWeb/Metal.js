/*----------------------------------------Funcion de Paginacion------------------------------------------------------- */


/*----------------------------------------Funcion de Validacion Pagina de formulario------------------------------------------------------- */
const precio = 1000;
var formularios = document.querySelectorAll(".needs-validation");
var cant = document.getElementById('validCant');
var opcionesPago = document.getElementById('validaOpcionesDePago');
var preci = document.getElementById('precio');
cant.addEventListener('input', actualizarPrecioTotal);
opcionesPago.addEventListener('change', actualizarPrecioTotal);

function actualizarPrecioTotal() {
    var cantidad = parseInt(cant.value, 10);
    var opcionPago = opcionesPago.value;
    var total = precio * cantidad;

    if (opcionPago === "1") {
        total *= 0.9; // Aplicar descuento del 10%
    }

    preci.textContent = "El precio a pagar es: " + total + " pesos";
}



function validacion() {
    var btn = document.getElementById("boton");
    btn.addEventListener('click', versionPropia());
}

function versionPropia() {
    let forms = document.querySelectorAll('.needs-validation');
    var aux = false;
    forms.forEach(function (form) {
        var wasValidated = form.classList.contains('was-validated');
        if (form.checkValidity()) {
            form.classList.add('was-validated');
            aux=true;
        } else {
            form.classList.add('was-validated');
        }
        if (aux==true) {
            
            form.innerHTML = "";
            manejoForm.innerHTML = `
            <form class="row g-3 needs-validation" novalidate>
            <div class="row g-3" id="f">
                <div class="col-md-12">
                    <label for="validaTarjeta" class="form-label">Numero de Tarjeta</label>
                    <input pattern=".{19,19}" type="text" class="form-control" id="validaTarjeta" minlength="19" maxlength="19" maxSize autocomplete="off"
                        required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validaDia" class="form-label">Expiracion:</label>
                    <select class="form-select" id="validaDia" required>
                        <option selected disabled value="">mes...</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid state.
                    </div>
                    <select class="form-select" id="validaAño" required>
                        <option selected disabled value="">Año...</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validaCodigoSeguridad" class="form-label">Cod Seguridad</label>
                    <input type="text" class="form-control" maxlength="3" id="validaCodigoSeguridad"
                        required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validaCodigoPostal" class="form-label">Codigo Postal</label>
                    <input type="text" class="form-control" id="validaCodigoPostal"  maxlength="5"
                        required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validaNombreTar" class="form-label">Nombre Exacto de Tarjeta</label>
                    <input pattern="[a-zA-ZÀ-ÿ-' ]+" type="text" class="form-control" id="validaNombreTar" minlength="5" maxlength="19" autocomplete="off" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validaCompIdentidad" class="form-label">Identidad:</label>
                    <select class="form-select" id="validaCompIdentidad" required>
                        <option selected disabled value="">Identidad...</option>
                        <option value="1">Documento</option>
                        <option value="2">CI</option>
                        <option value="3">LC</option>
                        <option value="4">LE</option>
                        <option value="5">otro</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validaNumeroIdent" class="form-label">Numero de identidad</label>
                    <input type="text" class="form-control" maxlength="8"  id="validaNumeroIdent"
                        required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div class="col-md-6">
                    <button class="btn" type="button" id="boton" onclick="validacionFinal();">Finalizar Compra</button>
                </div>
                <div class="col-md-6">
                    <input class="btn" type="button" onclick="location.reload();" name="Cancelar Compra" value="Cancelar compra">
                </div>
            </div>     
            </form>
            `;
            // carga select de manera dinamica
            for (let i = 1; i <= 12; i++) {
                let opcion = document.createElement('option');
                opcion.value = i;
                opcion.innerText = i;
                validaDia.appendChild(opcion);
            }
            for (let i = 1; i <= 8; i++) {
                let opcion = document.createElement('option');
                opcion.value = i;
                opcion.innerText = 2022 + i;
                validaAño.appendChild(opcion);
            }
            // control numero tarjeta
            validaTarjeta.addEventListener('keyup', function (e) {
                var valorInput = e.target.value;
                // elimina espacios en blanco// elimina todas las letras // cada 4 numeros coloca espacio// quita espacio final
                validaTarjeta.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
            });
            // control numero documento
            validaNumeroIdent.addEventListener('keyup', function (e) {
                var valorInput = e.target.value;
                // elimina espacios en blanco// elimina todas las letras //  quita espacio final
                validaNumeroIdent.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').trim();
            });
            // control codigo tarjeta
            validaCodigoSeguridad.addEventListener('keyup', function (e) {
                var valorInput = e.target.value;
                // elimina espacios en blanco// elimina todas las letras //  quita espacio final
                validaCodigoSeguridad.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').trim();
            });
            // control codigo postal
            validaCodigoPostal.addEventListener('keyup', function (e) {
                var valorInput = e.target.value;
                // elimina espacios en blanco// elimina todas las letras //  quita espacio final
                validaCodigoPostal.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').trim();
            });   
        }
        
    });
}



function validacionFinal() {
    var btnF = document.getElementById("boton");
    btnF.addEventListener('click', validarCompra());
}


function validarCompra() {
    let forms = document.querySelectorAll('.needs-validation');
    forms.forEach(function (form) {
            
        if (form.checkValidity()) {
        
            form.classList.add('was-validated');
            form.submit();
        } else {
            form.classList.add('was-validated');
        }
    });
}

/*---------------------------------------------------------------------------------------------------------------------------------------- */

/*-----------------------------------------------Peticiones HTTP-------------------------------------------------------*/

function DatosGenero1() {
    fetch('./JSON/power.json')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('No se pudo obtener la informacion.');
        })
        .then(function (data) {
            // Hacer algo con los datos
            console.log("Datos Genero 1", data);
        })
        .catch(function (error) {
            // Manejar errores
            console.log(error);
        });
}

function DatosGenero2() {
    fetch('./JSON/heavy.json')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('No se pudo obtener la informacion.');
        })
        .then(function (data) {
            // Hacer algo con los datos
            console.log("Datos Genero 2", data);
        })
        .catch(function (error) {
            // Manejar errores
            console.log(error);
        });
}

function DatosGenero3() {
    fetch('./JSON/doom.json')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('No se pudo obtener la informacion.');
        })
        .then(function (data) {
            // Hacer algo con los datos
            console.log("Datos Genero 3", data);
        })
        .catch(function (error) {
            // Manejar errores
            console.log(error);
        });
}

function CargaDatos() {
    DatosGenero1();
    DatosGenero2();
    DatosGenero3();
}
/*----------------------------------------------------------------------------------------------------------------------------*/
