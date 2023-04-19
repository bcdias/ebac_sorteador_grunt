document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault()

        let numeroMaxio = document.getElementById('max-number').value;
        numeroMaxio =parseInt(numeroMaxio)

        let numeroAleatorio = Math.random() * numeroMaxio;
        numeroAleatorio = Math.floor(numeroAleatorio + 1)
        document.getElementById('resultado-valor').innerText = numeroAleatorio

        document.querySelector('.resultado').style.display = 'block';
    })
})