## Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir:

## CT-001: Registro de Nova Receita Médica

**Descrição:** Verificar se os usuários podem registrar uma nova receita médica com sucesso.

**Passos:**
1. Logar no sistema.
2. Navegar até a seção de receitas médicas.
3. Clicar no botão "Adicionar nova Receita".
4. Preencher todos os campos obrigatórios.
5. Salvar a receita.

**Resultado Esperado:** A receita médica é registrada com sucesso no sistema e todas as informações são salvas corretamente.

## CT-002: Edição de Medicamento

**Descrição:** Verificar se os usuários podem editar informações de um medicamento existente.

**Passos:**
1. Logar no sistema.
2. Navegar até a seção de medicamentos.
3. Selecionar um medicamento existente.
4. Clicar no botão de edição.
5. Alterar os detalhes do medicamento.
6. Salvar as alterações.

**Resultado Esperado:** As informações do medicamento são atualizadas corretamente no sistema após a edição.

## CT-003: Anexação de Documento a um Exame Médico

**Descrição:** Verificar se os usuários podem anexar documentos a um exame médico existente.

**Passos:**
1. Logar no sistema.
2. Navegar até a seção de exames médicos.
3. Selecionar um exame existente.
4. Clicar no botão de anexar documento.
5. Selecionar o documento a ser anexado.
6. Confirmar o upload do documento.

**Resultado Esperado:** O documento é anexado com sucesso ao exame médico selecionado e pode ser visualizado pelos usuários autorizados.

## CT-004: Registro de Novo Usuário

**Descrição:** Verificar se novos usuários podem se cadastrar no sistema.

**Passos:**
1. Acessar a página de registro do sistema.
2. Preencher todos os campos obrigatórios.
3. Escolher um nome de usuário e senha.
4. Confirmar o registro.

**Resultado Esperado:** O novo usuário é registrado com sucesso no sistema e pode efetuar login usando as credenciais fornecidas.

## CT-005: Registro de Novo Usuário - Campos Obrigatórios Ausentes

**Descrição:** Verificar se uma mensagem de erro é exibida quando os campos obrigatórios não são preenchidos durante o registro de um novo usuário.

**Passos:**
1. Acessar a página de registro do sistema.
2. Deixar um ou mais campos obrigatórios em branco.
3. Tentar confirmar o registro.
4. Verificar se uma mensagem de erro é exibida indicando os campos obrigatórios que estão faltando.

**Resultado Esperado:** Uma mensagem de erro é exibida indicando os campos obrigatórios que precisam ser preenchidos.

## CT-006: Teste de Login com Nome de Usuário Inválido

**Descrição:** Verificar se o sistema impede o login com um nome de usuário inválido.

**Passos:**
1. Acessar a página de login do sistema.
2. Inserir um nome de usuário inválido.
3. Inserir uma senha válida.
4. Clicar no botão de login.
5. Verificar se o sistema exibe uma mensagem de erro indicando que o nome de usuário é inválido.

**Resultado Esperado:** O sistema impede o login e exibe uma mensagem de erro indicando que o nome de usuário é inválido.

