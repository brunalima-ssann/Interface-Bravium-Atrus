# IMPORTANTE!!
Caso os pascotes adicionais não sejam baixados, a grande risco de não rodar da forma correta

# Instalação - Interface Bravium
Siga os passos abaixo para instalar e executar o projeto localmente.

Pré-requisitos:
- Node.js instalado (recomendado versão 18 ou superior)
- npm ou yarn (gerenciador de pacotes)
- Prompt de comando (Windons)

- Passo 1: Clonar o repositório

No terminal, execute:
git clone <URL_DO_REPOSITORIO>
Substitua <URL_DO_REPOSITORIO> pela URL do repositório do projeto.

- Passo 2: Acessar a pasta do projeto
Pode ser tanto no Prompt de comando quanto na bash do vs

cd app_home

- Passo 3: Instalar dependências principais

Usando npm:
npm install
Isso instala todas as dependências listadas no package.json.

- Passo 4: Instalar dependências adicionais

Algumas bibliotecas específicas foram usadas no projeto:
    - React Router DOM > Responsável pelo gerenciamento de rotas da aplicação:

        npm install react-router-dom

    - React Icons >   Fornece ícones e “figurinhas” usadas nos componentes:

        npm install react-icons

# Observação: esses pacotes são essenciais para que a interface funcione corretamente.

- Passo 5: Executar a aplicação localmente

Usando npm:
npm start

O projeto será aberto em http://localhost:3000/
 no navegador.


# Observações
- Todas as imagens devem estar dentro da pasta src/imagem para serem carregadas corretamente.
- As rotas e telas principais estão definidas no arquivo App.jsx.