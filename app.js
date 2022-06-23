let boton = document.getElementById ('formulario')
boton.addEventListener('submit', validarformulario);
    
function validarformulario (e){
    e.preventDefault();
    let datos = e.target
    let li = document.createElement("li");
    li.innerHTML = datos.children[0].value + ' ' + datos.children[1].value;
    padre.append(li);
    
  
}
