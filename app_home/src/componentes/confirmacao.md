TELA DE CONFIRMAÇÃO (Confirmacao)

Componente que permite ao usuário anexar arquivos ou fotos do termo de entrega e confirmar a entrega.

Funções principais:
handleArquivoChange(event) - Adiciona arquivos selecionados pelo usuário à lista de anexos.
handleRemoverArquivo(index) - Remove um arquivo específico da lista de anexos.
confirmarEntrega() - Navega para a tela de pós-confirmação (/posConfirmacao).

Estados principais:
nome - nome do usuário logado, recuperado do localStorage.
arquivos - lista de arquivos anexados para envio.
abrirCamera - controla a abertura do modal de câmera (em teste).

Fluxo de funcionamento:
1. Recupera o nome do usuário do localStorage.
2. O usuário pode selecionar múltiplos arquivos ou tirar foto (funcionalidade futura).
3. Arquivos selecionados são exibidos em uma lista, podendo ser removidos individualmente.
4. Ao clicar em Confirmar entrega, a aplicação navega para a tela de pós-confirmação.

Observações:
- Separar a tela de confirmação facilita modularidade e clareza do fluxo de entrega.
- O uso do localStorage garante que o nome do usuário seja persistente entre telas.
- A funcionalidade de câmera está planejada para adicionar fotos diretamente à lista de arquivos anexados.