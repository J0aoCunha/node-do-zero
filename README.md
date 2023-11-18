# API Node.js com Fastify e PostgreSQL

Projeto de uma API em Node.js utilizando Fastify e PostgreSQL, com esse projeto estou iniciando meus estudos em node! 

## Pré-requisitos

- Node.js instalado.
- Configuração do banco de dados em `database-postgres.js`.

## Como Usar

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:



    ```bash
    npm install 
    ```

    
3. Execute o servidor:

    ```bash
    npm start
    ```

O servidor estará disponível em http://localhost:3333 ou em outra porta definida pela variável de ambiente `PORT`.

## Rotas da API

- **POST /video:** Adiciona um novo vídeo.
- **GET /video:** Lista vídeos com opção de filtro.
- **DELETE /video/:id:** Exclui um vídeo.
- **PUT /video/:id:** Atualiza informações de um vídeo.
  
