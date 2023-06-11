/*----------------------------------------Funcion de Paginacion------------------------------------------------------- */


/*----------------------------------------Funcion de Validacion Pagina de formulario------------------------------------------------------- */
 function validacion() {
    var btn = document.getElementById("boton");
    btn.addEventListener('click', versionPropia());
  }
  
  function versionPropia() {
    var forms = document.querySelectorAll('.needs-validation');
    forms.forEach(function(form) {
      if (form.checkValidity()) {
        form.classList.add('was-validated');
        form.innerHTML = "";
      } else {
        form.classList.add('was-validated');
      }
    });
  }
  
/*---------------------------------------------------------------------------------------------------------------------------------------- */  

/*-----------------------------------------------Peticiones HTTP-------------------------------------------------------*/



