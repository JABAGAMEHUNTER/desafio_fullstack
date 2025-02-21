# Desafio (REMOTO) Desenvolvedor full stack - foco em NODE

  [![License](https://img.shields.io/static/v1?label=License&message=GPL-3-0&color=blue&?style=plastic&logo=appveyor)](https://opensource.org/license/GPL-3-0)



## Table Of Content

- [Description](#description)

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)

- [GitHub](#github)

- [License](#license)




![GitHub repo size](https://img.shields.io/github/repo-size/https://github.com/JABAGAMEHUNTER/desafio_fullstack?style=plastic)

  ![GitHub top language](https://img.shields.io/github/languages/top/https://github.com/JABAGAMEHUNTER/desafio_fullstack?style=plastic)



## Description

  O seguinte projeto foi criado como parte do desafio proposto pela empresa Mediccont Assessoria + tempo para o que importa
O objetivo do projeto teve como criar um sistema fullstack para cadastro, consulta e cálculo de imposto de renda.

Foi dado um prazo de 3 dias para a criação do mesmo, tendo como objetivo ser um projeto robusto com funcionalidades para testar os limítes dos programadores.

Atualmente, o projeto conta com uma API em NestJS para cadastrar usuários, fazer login e funcionalidades CRUD de usuários, declarações de imposto e decarações de rendimentos.
É possível com a API, dos itens citados:

	- Cadastrar Usuários
	- Cadastrar Declarações
	- Cadastrar Rendimentos
        - Listar Usuários
        - Listar Declarações
        - Listar Rendimentos
        - Listar os itens acima por ID (usuários são listados por email)
        - Deletar todos os itens acima
	- Alterar todos os itens acima
	- Associar Usuário com um grupo de Declaracões
	- Associar uma declaração com um grupo de Rendimentos
        - As funcionalidades são protegidas por autenticação JWT
        - As rotas de cadastro de Usuário, Declaração e Listagem de Declaração e Rendimento estão abertas para teste
          mas podem ser travadas novamente para uso apenas com token JWT
        - Login com token JWT
        - Persistencia de Login com Token

Sobre o banco de dados, foi usado o PostreSQL, que se configurado certo nas entradas do .env do backend, irá receber do backend as tabelas e relacionamentos declarados na modelagem
de objetos do projeto.

A pasta do projeto possui um PDF com o diagrama de modelagem do banco de dados.

O Frontend do projeto foi feito utilizando REACTJS com Vite, Typescript e TailwindCSS.
O Frontend pode cadastrar Declarações e Fontes de Rendimento com formulários, listar um brave histórico de declarações com seus anos fiscais e demais informações existentes da API
e na modelagem do banco de dados, todos usando validação breve nos campos de formulário, alem das telas já integradas, exite uma de Login e Logout prototipada para funcionar com o
Backend e seu token JWT.

Com a API pode-se também alterar algumas informações que iriam estar prontas para aplicar con o frontend, como associar o Usuário a um grupo de Declarações e um grupo de Rendimentos a uma
Declaração.

Próxima iteração:

	- Cálculo do imposto de renda baseado em Rendimentos cadastrados pelo Usuário
	- Autenticação de Login no frontend -- Feito
	- Autenticação de dois fatores

Acredito que em uma semana estes itens poderiam estar mais polidos e integrados, no entanto foi algo muito proveitoso fazer de um ponto de vista a sempre se desafiar em menor tempo.

## Demais Funcionalidades
Atualmente as demais Funcionalidades estão sendo implementadas











## Installation

Para testar os projetos deve-se ter o NodeJs 22.13 e instalado PostgreSQL

Rodar o backend:

	cd ir-backend

	npm install

	npm run start:dev

	abrir o navegador em http://localhost:3000/api/

	O projeto possui uma API Swagger e pode ser testado com POSTMAN ou similares
	Tambem sendo possivel usar os argumentos do próprio SWAGGER

Rodar o Frontend:

	cd ir-frontend
	
	npm install

	npm run dev

	abrir o navegador em http://localhost:5173/





Desafio (REMOTO) Desenvolvedor full stack - foco em NODE is built with the following tools and libraries: <ul><li>https://github.com/microsoft/TypeScript</li> <li>https://github.com/nodejs</li> <li>https://github.com/facebook/react</li> <li>https://github.com/nestjs/nest</li> <li>https://github.com/postgres/postgres</li> <li>https://github.com/tailwindlabs/tailwindcss</li></ul>





## Usage
 

Entrar em cada pasta

cd ir-backend

npm install

cp .env.example .env

checar se informações do postgres conferem

npm run start:dev


cd ir-frontend

npm install

cp .env.example .env

npm run dev






## Contribution
 
Este projeto pode ser copiado e utilizado para outros projetos e ideias respeitando a GPL se nÃ£o entrarem em conflito com outras licenÃ§as anteriores.










## GitHub

<a href="https://github.com/https://github.com/JABAGAMEHUNTER"><strong>https://github.com/JABAGAMEHUNTER</a></strong>









## License

[![License](https://img.shields.io/static/v1?label=Licence&message=GPL-3-0&color=blue)](https://opensource.org/license/GPL-3-0)


