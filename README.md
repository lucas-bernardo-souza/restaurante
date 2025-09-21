# Casa do Assado - Sistema de Gestão

Este é um projeto front-end desenvolvido em React para um sistema de gestão de restaurante e buffet. A aplicação foi projetada para visualizar e gerenciar pedidos, mesas, caixa e outros aspectos operacionais de um restaurante.

## Visão Geral

O sistema apresenta uma interface limpa e organizada, com uma página inicial de boas-vindas e uma seção dedicada à visualização de pedidos em tempo real. A estrutura do projeto é baseada em componentes, o que facilita a manutenção e a adição de novas funcionalidades.

### Tecnologias Utilizadas

* **React:** Biblioteca principal para a construção da interface de usuário.
* **React Router DOM:** Para gerenciamento de rotas e navegação entre as páginas.
* **CSS:** Para estilização dos componentes, com arquivos dedicados para cada um.
* **NPM:** Como gerenciador de pacotes e para execução dos scripts do projeto.

### Funcionalidades Atuais

* **Página Inicial:** Tela de apresentação do restaurante.
* **Cabeçalho com Navegação:** Um menu principal com acesso rápido às seções:
    * Pedidos
    * Mesas
    * Caixa
    * Produtos
    * Garçons
    * Relatórios
* **Visualização de Pedidos:** Uma página dedicada (`/pedidos`) que exibe uma lista de pedidos, cada um com seu número, mesa correspondente e itens consumidos.

---

## Como Executar o Projeto

Para executar este projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) e o [NPM](https://www.npmjs.com/) instalados em sua máquina.

### Passo a Passo

1.  **Clone o Repositório**
    Abra o seu terminal ou git bash e clone o projeto para a sua máquina.
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Acesse a Pasta do Projeto**
    Navegue até o diretório que acabou de ser criado.
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as Dependências**
    Execute o comando abaixo para instalar todas as dependências do projeto listadas no arquivo `package.json`.
    ```bash
    npm install
    ```

4.  **Inicie a Aplicação**
    Após a instalação ser concluída, inicie o servidor de desenvolvimento local.
    ```bash
    npm start
    ```

5.  **Acesse no Navegador**
    O comando anterior iniciará a aplicação e a abrirá automaticamente em seu navegador padrão no endereço `http://localhost:3000`. A partir daí, você já pode navegar e testar o sistema.
