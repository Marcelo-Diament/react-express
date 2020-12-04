# React + Express

## Introdução

Esse repositório visa demonstrar uma forma fácil de 'integrar' uma aplicação frontend usando React.js com um back end (bem simples, sem banco de dados) usando node.js (com Express, Nodemon e Concurrently).

## Tecnologias

| Tecnologia   | Uso      | Download | Documentação                                                                                                         |
| ------------ | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| React.js     | Frontend | [npm](https://www.npmjs.com/package/create-react-app) | [reactjs.org](https://pt-br.reactjs.org/)                               |
| node.js      | Backend  | [nodejs](https://nodejs.org/en/download/)             | [nodejs.org](https://nodejs.org/)                                       |
| Express.js   | Backend  | [npm](https://www.npmjs.com/package/express)          | [expressjs.com](https://expressjs.com/)                                 |
| Nodemon      | Terminal | [npm](https://www.npmjs.com/package/nodemon)          | [nodemon.io](https://nodemon.io/)                                       |
| Concurrently | Terminal | [npm](https://www.npmjs.com/package/concurrently)     | [concurrently @ github](https://github.com/kimmobrunfeldt/concurrently) |

## Passo a Passo

Aqui vamos entender como replicar a solução, ao invés de simplesmente usar esse repositório. Para isso, dividiremos esse tutorial num passo a passo simples. O fluxo do projeto - _giitflow_ - também respeitará esses mesmos passos através da criação de _branches_, _commits_ e _pull requests_ (PRs).

### Passo 1 | Criando um projeto

Após criarmos o diretório (pasta) do nosso projeto, executaremos o código `npm init` para criarmos um arquivo _package.json_, no qual salvaremos nossos _scripts_, dependências e outras informações acerca do projeto. Isso pode ser feito através da sua IDE de prefência, do terminal ou do próprio sistema operacional que estiver usando (como Explorer do usuário Windows ou Finder no caso do usuário Mac).

Vamos ver como faríamos via terminal (a partir da pasta onde quer criar o projeto):

**1. Criando a pasta do nosso projeto**

``` sh
mkdir NomeDoProjeto
```

**2. Acessando essa pasta com o comando '_change directory_', o famoso `cd` **

``` sh
cd NomeDoProjeto
```

**3. Abrindo o projeto na nossa IDE de preferência**

``` sh
code .
```

**4. Iniciando nosso projeto**

``` sh
npm init
```

**5. Definindo parâmetros iniciais do nosso _package.json_**

Nesse caso basta preencher as informações solicitadas ou apertar 'Enter' para acatar as sugestões exibidas. No tópico _entry point_, podemos definir o nome `server.js` . No mais, fique à vontade para definir seus próprios valores.

Nosso arquivo _package.json_ final ficará semelhante ao seguinte:

``` json
{
  "name": "react-express",
  "version": "1.0.0",
  "description": "Integração simples do React.js com o node.js",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Marcelo-Diament/react-express.git"
  },
  "keywords": [
    "reactjs",
    "nodejs",
    "expressjs",
    "concurrently",
    "nodemon",
    "frontend",
    "backend"
  ],
  "author": "Marcelo Diament",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/Marcelo-Diament/react-express/issues"
  },
  "homepage": "https://github.com/Marcelo-Diament/react-express#readme"
}

```
