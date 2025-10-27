TELA DE ENTREGAS - DOCUMENTAÇÃO

Tela onde o usuário visualiza suas entregas, filtra por status, data, cliente ou nota fiscal, e pode atualizar o status de cada pedido.

Funções principais:
1. atualizarStatus(id, novoStatus)	- Atualiza o status de um pedido específico. Modifica o estado local (pedidos) e salva a lista atualizada no localStorage, garantindo persistência dos dados mesmo após recarregar a página.

2. filtrarFiltro() - Aplica os filtros selecionados pelo usuário (status, data, cliente ou nota fiscal). Atualmente apenas registra no console os filtros aplicados.

3. limparFiltro() - Limpa todos os filtros, resetando os estados para os valores padrão.

Estados principais:
nome - Armazena o nome do usuário logado, recuperado do localStorage.
pedidos	- Lista de pedidos exibidos na tela. Pode ser carregada do localStorage ou do array original.
statusFiltro - Controla o valor selecionado no filtro de status.
data - Controla o valor selecionado no filtro de data.
cliente - Controla o valor digitado no filtro de cliente.
notaFiscal - Controla o valor digitado no filtro de nota fiscal.

Fluxo de funcionamento:

1. Ao carregar a página, recupera o nome do usuário do localStorage.
2. Carrega os pedidos salvos no localStorage ou, se não houver, utiliza o array inicial (pedidosOriginais).
3. O usuário pode aplicar filtros ou limpar os filtros.
4. Para cada pedido exibido, é possível atualizar seu status usando a função atualizarStatus.
5. Cada alteração é persistida no localStorage para que os dados não se percam ao recarregar a página.

Sobre o “banco de dados local” :
- Esse banco de dados local permite a "personalização" de várias propriedades, como ainda não esta ligado a nenhum banco de dados, usar um array, ajuda a definir melhor a visualização de pedidos de forma individual
- Utilizamos o localStorage como um banco de dados simples no navegador.
- Ele permite salvar dados em formato de texto (normalmente JSON) que permanecem mesmo após fechar ou recarregar a página.

Sobre o componente CardPedido:
- As informações vem direto do array "pedidosOriginais"
- Cada pedido é representado por um CardPedido, que recebe as informações do pedido e a função atualizarStatus.
- Serve para modularizar a interface: cada card lida com seu próprio conteúdo e ações, mantendo o componente principal