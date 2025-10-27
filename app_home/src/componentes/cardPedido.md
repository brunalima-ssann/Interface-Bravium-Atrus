TELA DE PEDIDO (CardPedido)

Componente que representa um único pedido, podendo mostrar resumo ou detalhes, e permitindo atualizar o status do pedido.

Funções principais:
1. handleMarcarEntregue() -	Chama a função do componente pai para marcar o pedido como entregue e navega para a página de detalhes do pedido.
2. handleClienteNaoEncontrado() - Atualiza o status do pedido para "Cliente não encontrado" e fecha o card.

Estados principais:
aberto - Controla se o card está aberto (detalhes) ou fechado (resumo).

Fluxo de funcionamento:
1. Inicialmente, o card é exibido em modo resumido, mostrando apenas nome do cliente e endereço.
2. Ao clicar em Ver detalhes, o estado aberto é ativado e o card mostra informações completas (telefone, endereço completo).

O usuário pode:
- Marcar o pedido como entregue (handleMarcarEntregue)
- Fechar o card (setAberto(false))
- As atualizações de status são enviadas ao componente pai (Entregas) para persistência.

Observações:
- Modularizar cada pedido em um card permite reutilização, facilita manutenção e mantém a tela principal limpa.
- Esse componente *não manipula diretamente o array de pedidos*, apenas chama funções do pai para alterar os dados.