let qs = function(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function() {
    let form = qs('#createForm')

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        let inputTitulo = qs('#titulo')
            inputTexto = qs('#texto')
            
        let errorTitulo = qs('#errorTitulo')
            errorTexto = qs('#errorTexto')
            
        let regexOnlyLetters = /^[A-Za-z]+$/;
        
        let errores = {}

        // console.log("La REGEX ES ", regexOnlyLetters.test(inputtitulo.value))

        // VALIDACION titulo

        if(inputTitulo.value.length == 0) {
            errores.titulo = "Este campo es obligatorio"
            errorTitulo.innerText = errores.titulo
        } else if(inputTitulo.value.length < 1) {
            errores.titulo = "Mínimo 2 caracteres..."
            errorTitulo.innerText = errores.titulo
        } else if(!regexOnlyLetters.test(inputTitulo.value)) {
            errores.titulo = "Solo letras..."
            errorTitulo.innerText = errores.titulo
        }
        else {
            delete errores.titulo
            errorTitulo.innerText = ""
        }

       
        // ENVIAMOS EL FORMULARIO???

        console.log(errores)
        
        if(Object.keys(errores).length == 0) {
            form.submit()
        }
        
    })
})