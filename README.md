<h1 aling="center">
<img src="https://github.com/StephanieSouzaC/FocinhosCarinhosos/assets/117867662/afeddaf2-06e5-4d2a-a96a-15d48befb85a" width=200>  Site - Focinhos Carinhosos</h1>

<p align="center">
<!--   <img src="https://img.shields.io/static/v1?label=React&message=framework&color=blue&style=for-the-badge&logo=React"/> -->
  <img src="https://img.shields.io/static/v1?label=Express&message=framework&color=yellow&style=for-the-badge&logo=Express"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=red&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=JavaScript&message=linguage&color=yellow&style=for-the-badge&logo=JavaScript"/>
  <img src="http://img.shields.io/static/v1?label=node.js&message=linguage&color=green&style=for-the-badge&logo=node.js"/>
  <img src="http://img.shields.io/static/v1?label=HTML&message=5&color=red&style=for-the-badge&logo=HTML5"/>
  <img src="http://img.shields.io/static/v1?label=CSS&message=3&color=blue&style=for-the-badge&logo=CSS3"/>
  <img src="http://img.shields.io/static/v1?label=MongoDb&message=DB&color=green&style=for-the-badge&logo=MongoDb"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=Desenvolvimento&color=yellow&style=for-the-badge"/>
  
</p>

> Status do Projeto: 🚧 Em Desenvolvimento.

### Tópicos 

:small_blue_diamond: [Descrição do Projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Como rodar a Aplicação Web](#como-rodar-a-aplicação-web-computer)

:small_blue_diamond: [Documentação](#documentação-books) 

:small_blue_diamond: [Layout da Aplicação](#layout-da-aplicação-computer)

:small_blue_diamond: [Linguagens, dependencias e libs utilizadas](#linguagens-dependencias-e-libs-utilizadas-books)

:small_blue_diamond: [Desenvolvedores](#desenvolvedores-octocat)

## Descrição do projeto 

<p align="justify">
Projeto FullStack para uma ong fictícia Focinhos Carinhososde uma calculadora valores de petshop, desenvolvido utilizando as tecnologias node.js, JavaScript, Html, CSS, express...
</p>

## Funcionalidades

:heavy_check_mark: Parte administrador - Cadastrar Animais; 

:heavy_check_mark: Parte administrador - Alterar cadastro de Animais;

:heavy_check_mark: Parte administrador - Cadastrar Funcionários; 

:heavy_check_mark: Parte administrador - Alterar cadastro de Funcionários;

:heavy_check_mark: Parte administrador - Login para acesso;

:heavy_check_mark: Parte usuário - Exibe animais consumidos pela api retirados do Banco de Dados;

:heavy_check_mark: Parte usuário - Filtra animais para adoção por tipo;

## Como rodar a Aplicação Web :computer:
> Para instalar as dependências e tecnologias do projeto FrontEnd digite em seu terminal:
```sh
cd .\FrontEnd\
```
```sh
npm install
```
> Para iniciar a aplicação FrontEnd, digite no terminal:
```sh
npm start
```
> Para instalar as dependências e tecnologias do projeto BackEnd digite em seu terminal:
```sh
cd .\BackEnd\
```
```sh
npm install
```
> Para iniciar a aplicação BackEnd, digite no terminal:
```sh
npm start
```
> Observação: para o projeto BackEnd, garanta que o Node.js esteja instalado corretamente em sua máquina. Para instalar o Node.js acesse [Node.js](https://nodejs.org/en/download/prebuilt-installer)

<p> Para conectar ao banco de dados Mongodb crie um documento com o nome ".env" dentro da pasta BackEnd, no mesmo nível da pasta SRC, esse documento já está sendo chamado no arquivo dbConect.js que está localizado na pasta Config, dentro de SRC.</p>
<img src="https://github.com/StephanieSouzaC/FocinhosCarinhosos/assets/117867662/fc944baf-e20f-46f8-9116-269313c1283e">
<p>No documento .env, deve acrescentar a seguinte informação: </p>

```
DB_CONNECTION_STRING = mongodb+srv://NOMEADM:SENHA@cluster0.hyodblz.mongodb.net/FocinhosCarinhosos?retryWrites=true&w=majority&appName=Cluster0
```
<p> :bangbang: O NOMEADM e SENHA devem ser alterados de acordo com as credenciais enviadas pelo forms de entrega da atividade. Os ":" deve ser mantido ao ser inserido o usuario e senha informados.</p>

------
<p>Caso ocorra algum erro as tecnologias podem ser instaladas manualmente conforme instruções abaixo:</p>

> Para o projeto BackEnd, instale em seu terminal as tecnologias abaixo:
```sh
npm install express --save
```
```sh
npm install cors
```
```sh
npm install dotenv
```
```sh
npm install date-fns --save
```
```sh
npm install nodemon
```

> Para o projeto FrontEnd, instale em seu terminal a tecnologia abaixo:
```sh
npm install axios
```
> Para iniciar o servidor BackEnd, digite em seu terminal:
```sh
npm start
```
> Garanta que no seu Package.Json tenha o script CLI "start": "nodemon server.js":

## Documentação :books:
> Acesse a documentação do projeto: [Documentação](https://github.com/user-attachments/files/15829371/Personas.e.caso.de.uso.pdf)

## Layout da Aplicação :computer:

## Linguagens, dependencias e libs utilizadas :books:

- [Express](https://expressjs.com/pt-br/)
- [MongoDb](https://www.mongodb.com/docs/)
- [Node.js](https://nodejs.org/docs/latest/api/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

## Desenvolvedores :octocat:

[<img src="https://github.com/AmarilisTomaz.png" width=200><br><p>Desenvolvedora FrontEnd e Designer</p><p>Amarilis Tomaz</p>](https://www.linkedin.com/in/amarilis-vieira-93a56626b/)

[<img src="https://github.com/StephanieSouzaC.png" width=200><br><p>Desenvolvedora BackEnd e Designer</p><p>Stephanie Souza</p>](https://www.linkedin.com/in/stephanie-souza-83a18b239/)
