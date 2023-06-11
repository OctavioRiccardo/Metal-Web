/*----------------------------------------Funcion de Paginacion------------------------------------------------------- */


/*----------------------------------------Funcion de Validacion Pagina de formulario------------------------------------------------------- */
function validacion() {
  var btn = document.getElementById("boton");
  btn.addEventListener('click', versionPropia());
}

function versionPropia() {
  var forms = document.querySelectorAll('.needs-validation');
  forms.forEach(function (form) {
    if (form.checkValidity()) {
      form.classList.add('was-validated');
      form.innerHTML = "";
      form.innerHTML = `
      <form class="row g-3 needs-validation" style="display: none;" novalidate>
      <div class="col-md-8" style="border: 1px solid black;">
          <label for="validaNombre" class="form-label">Nombre:</label>
      </div>
      <div class="col-md-4">
          <input type="text" class="form-control" id="validaNombre" required>
          <div class="valid-feedback">
              Looks good!
          </div>
      </div>
      <div class="col-md-8" style="border: 1px solid black;">
          <label for="validaApellido" class="form-label">Apellido:</label>
      </div>
      <div class="col-md-4">
          <input type="text" class="form-control" id="validaApellido" required>
          <div class="valid-feedback">
              Looks good!
          </div>
      </div>
  </form>
        `;
    } else {
      form.classList.add('was-validated');
    }
  });
}

/*---------------------------------------------------------------------------------------------------------------------------------------- */

/*-----------------------------------------------Peticiones HTTP-------------------------------------------------------*/



