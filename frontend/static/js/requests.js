// --------------ANIMAIS-----------------

function requestAnimaisAdocao() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/Animais', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var data = JSON.parse(xhr.responseText);
                    console.log(data);
                    data.forEach(function (animal) {
                        var link_Img = animal['linkImg'];
                        var cor = animal['cor'];
                        var idade = animal['idade'];
                        var nome = animal['nome'];
                        var tipo = animal['tipo'];
                        var obs = animal['observacao'];
                        var id = animal['_id'];
                        var ano = idade > 1 ? 'anos' : 'ano';

                        var divAnimaisAdocao = document.getElementById("animais-adocao");

                        var divAdocao = `<div> <img src='${link_Img}' alt=''> 
                        <div> 
                        <p> 
                        NOME:  ${nome.toLowerCase()}<br>
                        TIPO:  ${tipo.toLowerCase()}<br>
                        IDADE:  ${idade} ${ano.toLowerCase()}<br>
                        COR:  ${cor.toLowerCase()}
                        <span style="display: none; text-align: left;" id="${id}">OBSERVAÇÕES: ${obs}</span><br>
                        <button style="background: transparent; border: none; font-weight: bold" onclick="document.getElementById('${id}').style.display = 'flex';">Mais informações</button>
                        </p>
                        <button class='default-button' id='${nome}'>Adotar</button>
                        </div></div>`

                        divAnimaisAdocao.innerHTML += divAdocao;
                    });
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            } else {
                console.error('Network response was not ok ' + xhr.statusText);
            }
        }
    };

    xhr.onerror = function() {
        console.error('There has been a problem with your fetch operation:', xhr.statusText);
    };

    xhr.send();
}

function cadAnimais() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/Animais', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    var tipo = document.getElementById("tipo").value.toLowerCase();
    var idade = document.getElementById("idade").value;
    var cor = document.getElementById("cor").value.toLowerCase();
    var obs = document.getElementById("obs").value.toLowerCase();
    var nome = document.getElementById("nome").value.toLowerCase();
    var porte = document.getElementById("porte").value.toLowerCase();

    var linkImg = document.getElementById("imagem");
    if (!linkImg || !linkImg.files || !linkImg.files[0]) {
        console.error('Nenhum arquivo foi selecionado.');
        return;
    }

    var file = linkImg.files[0];

    function toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    toBase64(file)
        .then(base64String => {
            var animalInfo = {
                ativo: true,
                cor: cor,
                idade: parseInt(idade),
                linkImg: base64String,
                nome: nome,
                observacao: obs,
                porte: porte,
                tipo: tipo
            };

            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 201) {
                        try {
                            var response = JSON.parse(xhr.responseText);
                            console.log('Response:', response);
                            alert(nome + " foi cadastrado.");
                            document.getElementById("tipo").value = "";
                            document.getElementById("idade").value = "";
                            document.getElementById("cor").value = "";
                            document.getElementById("imagem").value = "";
                            document.getElementById("obs").value = "";
                            document.getElementById("nome").value = "";
                            document.getElementById("porte").value = "";
                        } catch (e) {
                            console.error('Error parsing JSON:', e);
                        }
                    } else {
                        console.error('Network response was not ok ' + xhr.statusText);
                    }
                }
            };

            xhr.onerror = function() {
                console.error('There has been a problem with your fetch operation:', xhr.statusText);
            };

            xhr.send(JSON.stringify(animalInfo));
        })
        .catch(error => {
            console.error('Erro ao converter arquivo para base64:', error);
        });
}

function getIdandUpdate(value) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/Animais/nome/' + value.toLowerCase(), true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var data = JSON.parse(xhr.responseText);

                    if (typeof data === 'object' && !Array.isArray(data)) {
                        var link_Img = data.linkImg;
                        var cor = data.cor;
                        var porte = data.porte;
                        var idade = data.idade;
                        var nome = data.nome;
                        var tipo = data.tipo;
                        var obs = data.observacao;
                        var id = data._id;

                        document.getElementById("tipo").value = tipo;
                        document.getElementById("idade").value = idade;
                        document.getElementById("cor").value = cor;
                        document.getElementById("imagem").value = link_Img;
                        document.getElementById("obs").value = obs;
                        document.getElementById("nome").value = nome;
                        document.getElementById("porte").value = porte;
                    } else {
                        console.error('Dados não estão no formato esperado. Esperado um objeto, mas recebeu:', typeof data);
                    }
                } catch (e) {
                    console.error('Erro ao analisar JSON:', e);
                }
            } else {
                console.error('A resposta da rede não foi bem-sucedida:', xhr.statusText);
            }
        }
    };

    xhr.onerror = function() {
        console.error('Houve um problema com a operação de requisição:', xhr.statusText);
    };

    xhr.send();
}

function animaisAlt() {
    var nome = document.getElementById("nome").value;
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:8080/Animais/nome/' + nome.toLowerCase(), true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    var tipo = document.getElementById("tipo").value;
    var idade = document.getElementById("idade").value;
    var cor = document.getElementById("cor").value;
    var linkImg = document.getElementById("imagem").value;
    var obs = document.getElementById("obs").value;
    var porte = document.getElementById("porte").value;

    var animalInfo = {
        ativo: true,
        cor: cor,
        idade: parseInt(idade),
        linkImg: linkImg,
        nome: nome,
        observacao: obs,
        porte: porte,
        tipo: tipo
    };

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var response = JSON.parse(xhr.responseText);
                    console.log('Response:', response);
                    alert(nome + " foi atualizado.");
                    document.getElementById("tipo").value = "";
                    document.getElementById("idade").value = "";
                    document.getElementById("cor").value = "";
                    document.getElementById("imagem").value = "";
                    document.getElementById("obs").value = "";
                    document.getElementById("nome").value = "";
                    document.getElementById("porte").value = "";
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            } else {
                console.error('Network response was not ok ' + xhr.statusText);
            }
        }
    };

    xhr.onerror = function() {
        console.error('There has been a problem with your fetch operation:', xhr.statusText);
    };

    xhr.send(JSON.stringify(animalInfo));
}

function buscarAnimal(value) {
    var nome = document.getElementById("nome").value;
    console.log(nome);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/Animais/tipo/' + value.toLowerCase(), true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var data = JSON.parse(xhr.responseText);
                    console.log(data);
                    data.forEach(function (animal) {
                        var link_Img = animal.linkImg;
                        var cor = animal.cor;
                        var idade = animal.idade;
                        var nome = animal.nome;
                        var tipo = animal.tipo;
                        var obs = animal.observacao;
                        var id = animal._id;
                        var ano = idade > 1 ? 'anos' : 'ano';

                        var divAnimaisAdocao = document.getElementById("animais-adocao");

                        var divAdocao = `<div> <img src='${link_Img}' alt=''> 
                        <div> 
                        <p> 
                        NOME:  ${nome.toLowerCase()}<br>
                        TIPO:  ${tipo.toLowerCase()}<br>
                        IDADE:  ${idade} ${ano.toLowerCase()}<br>
                        COR:  ${cor.toLowerCase()}
                        <span style="display: none; text-align: left;" id="${id}">OBSERVAÇÕES: ${obs}</span><br>
                        <button style="background: transparent; border: none; font-weight: bold" onclick="document.getElementById('${id}').style.display = 'flex';">Mais informações</button>
                        </p>
                        <button class='default-button' id='${nome}'>Adotar</button>
                        </div></div>`

                        divAnimaisAdocao.innerHTML += divAdocao;
                    });
                } catch (e) {
                    console.error('Erro ao analisar JSON:', e);
                }
            } else {
                console.error('A resposta da rede não foi bem-sucedida:', xhr.statusText);
            }
        }
    };

    xhr.onerror = function() {
        console.error('Houve um problema com a operação de requisição:', xhr.statusText);
    };

    xhr.send();
}


// ------------------FUNCIONARIOS--------------

function requestFuncionarios(value) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/Funcionarios/nome/'+value, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var data = JSON.parse(xhr.responseText);


                        var nome = data.nome;
                        var cpf = data.cpf;
                        var email = data.email;
                        var telefone = data.telefone;
                        var senha = data.senha;
                        var funcao = data.funcao;
                        var dataNascimento = data.dataNascimento;


                        document.getElementById("email").value = email;
                        document.getElementById("data-nasc").value = dataNascimento;
                        document.getElementById("cpf").value = cpf;
                        document.getElementById("telefone").value = telefone;
                        document.getElementById("senha").value = senha;
                        document.getElementById("nome").value = nome;
                        document.getElementById("funcao").value = funcao;
                } catch (e) {
                    console.error('Erro ao analisar JSON:', e);
                }
            } else {
                console.error('A resposta da rede não foi bem-sucedida:', xhr.statusText);
            }
        }
    };

    xhr.onerror = function() {
        console.error('Houve um problema com a operação de requisição:', xhr.statusText);
    };

    xhr.send();
}

function cadFuncionarios() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/Funcionarios', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("data-nasc").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var funcao = document.getElementById("funcao").value;
    var nome = document.getElementById("nome").value;

    var funcionarioInfo = {
        ativo: true,
        cpf: cpf,
        email: email,
        dataNascimento: dataNascimento,
        nome: nome,
        telefone: telefone,
        senha: senha,
        funcao: funcao
    };

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 201) {
                try {
                    var response = JSON.parse(xhr.responseText);
                    console.log('Response:', response);
                    alert(nome + " foi cadastrado.");
                    document.getElementById("email").value = "";
                    document.getElementById("data-nasc").value = "";
                    document.getElementById("cpf").value = "";
                    document.getElementById("telefone").value = "";
                    document.getElementById("senha").value = "";
                    document.getElementById("funcao").value = "";
                    document.getElementById("nome").value = "";
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            } else {
                console.error('Network response was not ok ' + xhr.statusText);
            }
        }
    };

    xhr.onerror = function() {
        console.error('There has been a problem with your fetch operation:', xhr.statusText);
    };

    xhr.send(JSON.stringify(funcionarioInfo));
}


function funcionariosAlt() {
    var nome = document.getElementById("nome").value;
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:8080/Funcionarios/nome/'+nome.toLowerCase(), true);

    xhr.setRequestHeader('Content-Type', 'application/json');

    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("data-nasc").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var funcao = document.getElementById("funcao").value;

    var funcionarioInfo = {
        ativo: true,
        cpf: cpf,
        email: email,
        dataNascimento: dataNascimento,
        nome: nome,
        telefone: telefone,
        senha: senha,
        funcao: funcao
    };

    xhr.onreadystatechange = function() {
            if (xhr.status == 200) {
                try {
                    var response = JSON.parse(xhr.responseText);
                    console.log('Response:', response);
                    alert(nome + " foi atualizado.");
                    document.getElementById("email").value = "";
                    document.getElementById("data-nasc").value = "";
                    document.getElementById("cpf").value = "";
                    document.getElementById("telefone").value = "";
                    document.getElementById("senha").value = "";
                    document.getElementById("nome").value = "";
                    document.getElementById("funcao").value = "";
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            } else {
                console.error('Network response was not ok ' + xhr.statusText);
            }
    };

    xhr.onerror = function() {
        console.error('There has been a problem with your fetch operation:', xhr.statusText);
    };

    xhr.send(JSON.stringify(funcionarioInfo));
}


function buscarFuncionario(value) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/Funcionarios/cpf/' + value, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    var funcionario = JSON.parse(xhr.responseText);

                    console.log(funcionario);

                    var email = funcionario['email'];
                    var cpf = funcionario['cpf'];
                    var telefone = funcionario['telefone'];
                    var nome = funcionario['nome'];
                    var dataNascimento = funcionario['dataNascimento'];
                    var funcao = funcionario['funcao'];
                    var id = funcionario['_id'];

                    var divFuncionarios = `
                        <div>
                            <div>
                                <p>
                                    NOME: ${nome}<br>
                                    FUNÇÃO: ${funcao.toLowerCase()}<br>
                                    DATA DE NASCIMENTO: ${dataNascimento}<br>
                                    TELEFONE: ${telefone}<br>
                                    <span style="display: none; text-align: left;" id="${id}">
                                        EMAIL: ${email}<br>
                                        CPF: ${cpf}
                                    </span><br>
                                    <button style="background: transparent; border: none; font-weight: bold" onclick="document.getElementById('${id}').style.display = 'flex';">Mais informações</button>
                                </p>
                                <button class='default-button' id='${id}' onclick="deleteFuncionario(this.id)">Deletar</button>
                            </div>
                        </div>`;

                    document.getElementById("content-body-bus").innerHTML += divFuncionarios;
                } catch (e) {
                    console.error('Erro ao analisar JSON:', e);
                }
            } else {
                console.error('Erro na requisição:', xhr.status, xhr.statusText);
            }
        }
    };

    xhr.send();
}

function buscarFuncionarioNome(value) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/Funcionarios/nome/' + value, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    var funcionario = JSON.parse(xhr.responseText);

                    var cpf = funcionario['cpf'];
                    navigator.clipboard.writeText(cpf).then(function() {
                        alert('CPF copiado para a área de transferência, pode usa-lo para pesquisar agora');
                    }, function(err) {
                        console.error('Erro ao copiar o texto: ', err);
                    });

                    document.getElementById("cpf").value = "Cole o CPF aqui";
                } catch (e) {
                    console.error('Erro ao analisar JSON:', e);
                }
            } else {
                console.error('Erro na requisição:', xhr.status, xhr.statusText);
            }
        }
    };

    xhr.send();
}


function deleteFuncionario(value){
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/Funcionarios/'+value.toLowerCase(), true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var response = xhr.responseText;

                    alert("Funcionário deletado");
                    window.location.reload();
                } catch (e) {
                    console.error('Erro ao analisar JSON:', e);
                }
            } else {
                console.error('A resposta da rede não foi bem-sucedida:', xhr.statusText);
            }
        }
    };

    xhr.onerror = function() {
        console.error('Houve um problema com a operação de requisição:', xhr.statusText);
    };

    xhr.send();
}

//------------Login----------------------------

function login() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;

    var funcionarioInfo = {
        cpf: cpf,
        senha: senha
    };
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var response = JSON.parse(xhr.responseText);
                    console.log('Response:', response);
                    alert("Login efetuado");
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                    alert("Erro ao efetuar login");
                }
            } else {
                console.error('Erro na resposta da rede: ' + xhr.statusText);
                alert("Erro ao efetuar login");
            }
        }
    };

    xhr.send(JSON.stringify(funcionarioInfo)); //Enviando
}


//----------------AUX---------------------------
if( "/Adocao.html" == window.location.pathname){

    document.addEventListener('DOMContentLoaded', requestAnimaisAdocao);
}



document.addEventListener('DOMContentLoaded', cadAnimais);



// ----------------------------------------------
function doacoes(){

        if( "/HomePage.html" == window.location.pathname){
            var qrCodeInfoElement = document.querySelector('.qr-code-info');


            if (qrCodeInfoElement) {

                qrCodeInfoElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }else{
            window.location.href = "/HomePage.html?roll=yes"

        }
}

function reveal(toogle) {

    if (toogle == 1){
        document.getElementById("home").style.display = 'block';
        document.getElementById("adocao").style.display = 'block';
        document.getElementById("doacoes").style.display = 'block';
        document.getElementById("admin").style.display = 'block';
        if(document.getElementById("cadastrar")) {
            document.getElementById("cadastrar").style.display = 'block';
            document.getElementById("buscar").style.display = 'block';
        }
        document.getElementById("mobile-change").innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" onclick="reveal(0)" id="mobile">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>`
        document.querySelector(".nav").style.transition = '0.5s'
        document.querySelector(".nav").style.height = 'fit-content'
        document.querySelector(".nav").style.padding = '5px'
        document.querySelector(".nav").style.background = 'white'
        document.querySelector(".nav").style.borderRadius = "15px"
        document.getElementById("cat").style.display = "none"

    }else {
        document.getElementById("home").style.display = 'none';
        document.getElementById("adocao").style.display = 'none';
        document.getElementById("doacoes").style.display = 'none';
        document.getElementById("admin").style.display = 'none';
        if(document.getElementById("cadastrar")){
            document.getElementById("cadastrar").style.display = 'none';
            document.getElementById("buscar").style.display = 'none';
        }


        document.getElementById("mobile-change").innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" onclick="reveal(1)" id="mobile">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>`
        document.querySelector(".nav").style.transition = '0.5s'
        document.querySelector(".nav").style.height = '0px'
        document.querySelector(".nav").style.padding = '0px'
        document.querySelector(".nav").style.background = 'transparent'
        document.querySelector(".nav").style.borderRadius = "0px"
        document.getElementById("cat").style.display = "block"
    }

}

function roll() {
    if ("/HomePage.html" === window.location.pathname) {
        const url = new URL(window.location.href);

        const params = new URLSearchParams(url.search);
        const roll = params.get('roll');
        if (roll == 'yes') {
            doacoes();
        }
    }

}

document.addEventListener('DOMContentLoaded', roll);


