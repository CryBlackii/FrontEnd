(function(){
    'use strict';
    const txtTitulo = document.getElementById("txtTitulo");
    const btn = document.getElementById("btn");
    const formCadastro = document.querySelector(".formCadastro");

    formCadastro.addEventListener("submit", function(e){
        if(!txtTitulo.value){
            showErrorMessage("preencha todos os campos, zé",function(){
                txtTitulo.focus() 
            })
            e.preventDefault()
        }
    })
    function showErrorMessage(msg, cb){
        function hideErrorMessage(){
            feedbackMessage.classList.add("show")
            feedbackMessage.getElementByTagName("p") [0].textContent = msg
            feedbackMessage
        }
    }
})