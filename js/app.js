const form = document.getElementById("form")


form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const amount = document.getElementById("amount");
    const categoria = document.getElementById("categoria");
    const total = document.getElementById("total")

    

if (name.value.trim() == "Nombre" || surname.value.trim() == "Apellido" || email.value.trim() == "" || amount.value.trim() == "Cantidad") {
    alert("ATENCIÓN: Faltan completar campos")
    
} else if(!isValidEmail(email.value)){
    alert("Ingrese correo válido");}
 
   
  

  if (categoria.value == "Estudiante"){
    var precio = 200 * 0.2
  } else if (categoria.value == "Trainee"){
    var precio = 200 * 0.5
  } else if (categoria.value == "Junior") {
    var precio = 200 * 0.85
  }
   var totalApagar = amount.value * precio
   
   total.innerHTML = "Total a pagar $ " + totalApagar
    

});

function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email);
}

function resetForm() {
    document.getElementById("form").reset();
    total.innerHTML = "Total a pagar $ "
  }