/*----------------------------------------Funcion de Paginacion------------------------------------------------------- */


/*----------------------------------------Funcion de Validacion Pagina de formulario------------------------------------------------------- */
const precio = 1000;
function validacion() {
  var btn = document.getElementById("boton");
  btn.addEventListener('click', versionPropia());
}

function versionPropia() {
  var forms = document.querySelectorAll('.needs-validation');
  let cant = document.getElementById("validaCantEntradas").value;
  let fPago = document.getElementById("validaOpcionesDePago").value;
  let total = precio * cant;
  if (fPago == 1) {
    // insertar codigo funcion aparte al igual que precio
    forms.innerHTML = `
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
                    </div>`
  }

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
                    </div>
                    <div class="row g-3">
                        <div class="col-md-8" style="border: 1px solid black;">
                            <label for="validaApellido" class="form-label">Apellido:</label>
                        </div>
                        <div class="col-md-4">
                            <input pattern="[A-Za-z]+" type="text" class="form-control" id="validaApellido" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>

                    <div class="row g-3">
                        <div class="col-md-4" style="border: 1px solid black;">
                            <label for="validaCorreo" class="form-label">Correo Electronico:</label>
                        </div>
                        <div class="col-md-8">
                            <input  type="email" class="form-control" id="validaCorreo" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>

                    <div class="row g-3">
                        <div class="col-md-4" style="border: 1px solid black;">
                            <label for="validaCorreo" class="form-label">Confirmar Correo:</label>
                        </div>
                        <div class="col-md-8">
                            <input  type="email" class="form-control" id="confirmCorreo" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    <div class="row g-3">
                        <div class="col-12" style="border: 1px solid black;">
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
                    </div>
              
                    <div class="row g-3 fixed-botton">
                        <div class="col-md-6">
                            <button class="btn" type="button" id="botonComprar" onclick="validacionFinal();">Comprar Entrada/s</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn" type="button" id="botonCancelar" >Cancelar Compra</button>
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
  var btnCompra = document.getElementById("botonComprar");
  btnCompra.addEventListener('click', validarCompra());
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



