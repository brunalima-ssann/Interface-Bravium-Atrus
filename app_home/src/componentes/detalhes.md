TELA DE DETALHES

Componente que exibe informações completas de um pedido específico, permitindo marcar como entregue ou atualizar status para “Cliente não encontrado”.

Funções principais:
handleClienteNaoEncontrado() - Atualiza o status do pedido para "Cliente não encontrado" no localStorage e retorna à tela de entregas.

Estados principais:
Não possui estados próprios além do que vem do useParams.
O componente depende de dados passados via props e localStorage para exibir os detalhes corretamente.

Fluxo de funcionamento:
1. Captura o ID do pedido da URL (useParams).
2. Busca o pedido correspondente no array de pedidos (ou localStorage).
3. Exibe o CardDetalhe com informações completas do pedido.

O usuário pode:
- Clicar em Marcar como entregue, navegando para a tela de confirmação.
- Clicar em Cliente não encontrado, atualizando o status e voltando para a tela de entregas.

Observações:
- Usar o localStorage garante persistência do status mesmo após atualizar a página.
S- eparar o card em CardDetalhe mantém a tela limpa, modular e facilita manutenção futura.