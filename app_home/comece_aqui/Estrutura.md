# IMPORTANTE!!
Não faça nenhuma mudança com o nome, extensão e localização de nenhum dos arquivos, podem acabar afetando diretamente a renderização do projeto

# Estrutura do Projeto - Interface Bravium
O projeto é organizado de forma modular e clara, facilitando manutenção, escalabilidade e compreensão.

# Estrutura geral
/
├── comece_aqui/      # Você esta aqui agora
├── node_modules/         
├── src/              # Código-fonte da aplicação << Pasta mais importantes
    ├── componentes/      # Todos os arquivos JSX da aplicação 
    ├── css/              # CSS Modules de cada componente
    ├── imagem/           # Imagens e ícones utilizados na interface
    ├── App.css           # Configurações básicas sobre estilo
    ├── App.jsx           # Componente principal que define as rotas
    ├── index.css         # Sem utilidade no momento
    └── main.jsx
├── index.html        # Definição de titulo, icon...
├── package.json      # Configurações do projeto e dependências
└── package-lock.json # Versão exata das dependências instaladas    

# componentes/
- Contém todos os arquivos .jsx usados no projeto.
- Todos os componentes e documentações sobre os mesmo estão dentro dessa pasta
- Cada componente é responsável por uma funcionalidade específica da interface, como Login, Entregas, CardPedido, Detalhes, Confirmacao, Faixa e Relogio.
- Segue o padrão de componentes modulares: cada componente funciona isoladamente, facilitando testes, manutenção e reutilização.

# css/
- Contém os arquivos de estilos em CSS Modules (.module.css).
- Cada componente possui seu próprio CSS Module para evitar conflitos de estilo e manter consistência visual.

# imagem/
- Pasta com imagens, ícones e logos usados na interface.
- Centralizar imagens ajuda a manter o projeto organizado e facilita a substituição de recursos visuais.

# App.jsx
- Componente principal que define todas as rotas da aplicação usando React Router DOM.
- Controla a navegação entre telas como Login, Entregas, Detalhes e Confirmacao.