TELA DE LOGGIN - DOCUMENTAÇÃO

Tela de login da aplicação, onde o usuário insere login e senha, valida as credenciais e é redirecionado caso corretas. Exibe mensagens de erro em caso de login inválido.

Funções principais:

Função	Descrição
handleSubmit(e) -	Dispara quando o usuário envia o formulário. Valida se login e senha correspondem aos valores esperados. Se corretos, salva o nome do usuário no localStorage e redireciona para a página de entregas. Se incorretos, exibe uma mensagem de erro.

Estados principais:
login - Armazena o login digitado pelo usuário.
senha - Armazena a senha digitada pelo usuário.
erro - Armazena mensagens de erro para exibição caso o login ou senha estejam incorretos.

Fluxo de funcionamento:

1. O usuário digita login e senha.
2. Ao enviar o formulário, handleSubmit verifica as credenciais.
3. Se corretas, salva o nome do usuário e redireciona para /entregas.
4. Se incorretas, atualiza erro para mostrar mensagem na tela.