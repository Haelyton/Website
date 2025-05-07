document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.querySelector('.form-register input[placeholder="Nome"]');
    const inputEmail = document.querySelector('.form-register input[placeholder="Email"]');
    const inputSenha = document.querySelector('.form-register input[placeholder="Senha"]');

    const botaoCadastrar = document.getElementById("botao-cadastrar");
    const botaoLogin = document.getElementById("botao-login");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    botaoCadastrar.addEventListener("click", function () {
        const nome = inputNome.value.trim(); 
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();

        if (!emailRegex.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        if (nome === "" || email === "" || senha === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (senha < 8) {
            alert("A senha deve ter pelo menos 8 caracteres.");
            return;
        }

        const usuarios = {
            nome,
            email,
            senha
        };

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Cadastro realizado com sucesso!");
    });

    botaoLogin.addEventListener("click", function () {
        const email = document.querySelector('.form-login input[placeholder="Email"]').value.trim();
        const senha = document.querySelector('.form-login input[placeholder="Senha"]').value.trim();

        if (email === "" || senha === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }
        
        const usuario = JSON.parse(localStorage.getItem("usuarios"));

        if (usuario.email === email && usuario.senha === senha) {
            alert("Login realizado com sucesso!");
            window.location.href = "site.html"
        }else {
            alert("Email ou senha incorretos. Tente novamente.");
        }
    })

});
