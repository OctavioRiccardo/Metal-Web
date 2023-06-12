/*----------------------------------------Funcion de Paginacion------------------------------------------------------- */


/*----------------------------------------Funcion de Validacion Pagina de formulario------------------------------------------------------- */
const precio = 1000;
function validacion() {
    var btn = document.getElementById("boton");
    btn.addEventListener('click', versionPropia());
}

function versionPropia() {
    var forms = document.querySelectorAll('.needs-validation');
    forms.forEach(function (form) {
        var wasValidated = form.classList.contains('was-validated');
        if (form.checkValidity()) {
            form.innerHTML = "";
            form.innerHTML = `
                <form class="row g-3 needs-validation" novalidate>
                    <div class="row g-3">
                        <div class="col-md-8" style="border: 1px solid black;">
                        <label for="validaNombre" class="form-label">Nombre:</label>
                        </div>
                        <div class="col-md-4">
                        <input pattern="[A-Za-z]+" type="text" class="form-control" id="validaNombre" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        </div>
                        <div class="col-md-8" style="border: 1px solid black;">
                        <label for="validaApellido" class="form-label">Apellido:</label>
                        </div>
                        <div class="col-md-4">
                        <input pattern="[A-Za-z]+" type="text" class="form-control" id="validaApellido" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        </div>
                        <div class="col-md-6">
                        <label for="validaCorreo" class="form-label">Correo Electronico:</label>
                            <input  type="email" class="form-control" id="validaCorreo" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validaCorreo" class="form-label">Confirmar Correo:</label>
                            <input  type="email" class="form-control" id="confirmCorreo" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-6">
                            <button class="btn" type="button" id="siguenteD" onclick="validacionDeDatos();">Siguiente</button>
                        </div>
                        <div class="col-md-6">
                            <input class="btn" type="button" onclick="location.reload();" name="volver atrás" value="Volver Atrás">
                        </div>
                    </div>
                </form>
            `;
        } else {
            form.classList.add('was-validated');
        }
        if (wasValidated) {
            form.classList.add('was-validated');
        }
    });
}

function validacionDeDatos() {
    var btnCompra = document.getElementById("siguenteD");
    btnCompra.addEventListener('click', pedidoDeDatos());
}

function pedidoDeDatos() {
    var forms = document.querySelectorAll('.needs-validation');
    forms.forEach(function (form) {
        var wasValidated = form.classList.contains('was-validated');
        if (form.checkValidity()) {
            form.innerHTML = "";
            form.innerHTML = `
                <form class="row g-3 needs-validation" novalidate>
                    <div class="row g-3">
                        <div class="col-md-12">
                            <label for="validaTarjeta" class="form-label">Numero de Tarjeta</label>
                            <input type="number" class="form-control" id="validaTarjeta" min="1" max="100"
                                required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="validaFechaVencimiento" class="form-label">Fecha Vencimiento:</label>
                            <input type="date" class="form-control" id="validaFechaVencimiento" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="validaCodigoSeguridad" class="form-label">Cod Seguridad</label>
                            <input type="number" class="form-control" id="validaCodigoSeguridad" min="100" max="999"
                                required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="validaCodigoPostal" class="form-label">Codigo Postal</label>
                            <input type="number" class="form-control" id="validaCodigoPostal" min="1000" max="9999"
                                required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="validaNombreTar" class="form-label">Nombre Exacto de Tarjeta</label>
                            <input type="text" class="form-control" id="validaNombreTar"  required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validaCompIdentidad" class="form-label">Identidad:</label>
                            <select class="form-select" id="validaCompIdentidad" required>
                                <option selected disabled value="">Identidad...</option>
                                <option value="1">Documento</option>
                                <option value="2">CIPE</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validaNumeroIdent" class="form-label">Numero de identidad</label>
                            <input type="number" class="form-control" id="validaNumeroIdent" min="10000000" max="55000000"
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
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
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
        } else {
            form.classList.add('was-validated');
        }
        if (wasValidated) {
            form.classList.add('was-validated');
        }
    });
}


function validacionFinal() {
    var btnF = document.getElementById("siguenteD");
    btnF.addEventListener('click', validarCompra());
}


function validarCompra() {
    var forms = document.querySelectorAll('.needs-validation');
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



