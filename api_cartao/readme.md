# Gerenciador de Cartões de Crédito

Este é um projeto de exemplo para a criação de um sistema de gerenciamento de cartões de crédito usando Node.js, Express e Sequelize com um banco de dados MySQL.

## Estrutura do Projeto

- **config/**: Contém a configuração do banco de dados.
- **controllers/**: Contém os controladores para as rotas da API.
- **migrations/**: Contém os arquivos de migração do banco de dados.
- **models/**: Contém os modelos do Sequelize.
- **routes/**: Contém as definições das rotas da API.
- **seeders/**: Contém os seeders para popular o banco de dados com dados iniciais.
- **index.js**: Arquivo principal para iniciar o servidor Express.

## Pré-requisitos

- Node.js
- npm ou yarn
- MySQL

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/gerenciador_cartao_credito.git
    cd gerenciador_cartao_credito
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
    ```env
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=nome_do_banco
    DB_HOST=localhost
    ```

4. Configure o banco de dados em `config/config.js` (se necessário).

5. Inicialize a estrutura do banco de dados:
    ```bash
    npx sequelize-cli db:migrate
    ```

6. Popule o banco de dados com dados iniciais:
    ```bash
    npx sequelize-cli db:seed:all
    ```

## Estrutura das Tabelas

### Cliente

| Campo      | Tipo       | Descrição                       |
|------------|------------|---------------------------------|
| id         | INTEGER    | Chave primária                  |
| nome       | STRING     | Nome do cliente                 |
| email      | STRING     | Email do cliente                |
| createdAt  | DATE       | Data de criação                 |
| updatedAt  | DATE       | Data de atualização             |

### Cartao

| Campo      | Tipo       | Descrição                       |
|------------|------------|---------------------------------|
| id         | INTEGER    | Chave primária                  |
| numero     | STRING     | Número do cartão                |
| validade   | DATE       | Data de validade do cartão      |
| cvv        | STRING     | Código CVV                      |
| limite     | FLOAT      | Limite do cartão                |
| clienteId  | INTEGER    | Chave estrangeira para Cliente  |
| createdAt  | DATE       | Data de criação                 |
| updatedAt  | DATE       | Data de atualização             |

### Transacao

| Campo      | Tipo       | Descrição                       |
|------------|------------|---------------------------------|
| id         | INTEGER    | Chave primária                  |
| descricao  | STRING     | Descrição da transação          |
| valor      | FLOAT      | Valor da transação              |
| data       | DATE       | Data da transação               |
| cartaoId   | INTEGER    | Chave estrangeira para Cartao   |
| createdAt  | DATE       | Data de criação                 |
| updatedAt  | DATE       | Data de atualização             |

## Uso

### Rotas da API

#### Clientes

- **GET /clientes**: Lista todos os clientes
- **GET /clientes/:id**: Obtém um cliente pelo ID
- **POST /clientes**: Cria um novo cliente
- **PUT /clientes/:id**: Atualiza um cliente pelo ID
- **DELETE /clientes/:id**: Exclui um cliente pelo ID

#### Cartões

- **GET /cartoes**: Lista todos os cartões
- **GET /cartoes/:id**: Obtém um cartão pelo ID
- **POST /cartoes**: Cria um novo cartão
- **PUT /cartoes/:id**: Atualiza um cartão pelo ID
- **DELETE /cartoes/:id**: Exclui um cartão pelo ID

#### Transações

- **GET /transacoes**: Lista todas as transações
- **GET /transacoes/:id**: Obtém uma transação pelo ID
- **POST /transacoes**: Cria uma nova transação
- **PUT /transacoes/:id**: Atualiza uma transação pelo ID
- **DELETE /transacoes/:id**: Exclui uma transação pelo ID

