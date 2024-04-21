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

## CT-005: Edição do Perfil do Usuário

**Descrição:** Verificar se os usuários podem editar suas informações de perfil com sucesso.

**Passos:**
1. Logar no sistema com as credenciais do usuário.
2. Navegar até a seção de perfil do usuário.
3. Clicar no botão de edição de perfil.
4. Editar as informações necessárias.
5. Salvar as alterações.

**Resultado Esperado:** As informações do perfil do usuário são atualizadas corretamente no sistema após a edição.

## CT-006: Confirmação da Administração de Dose

**Descrição:** Verificar se o sistema exige confirmação da administração de dose do usuário e atualiza o estoque automaticamente.

**Passos:**
1. Logar no sistema com as credenciais do usuário.
2. Navegar até a seção de administração de medicamentos.
3. Selecionar um medicamento para administração.
4. Confirmar a administração da dose.

**Resultado Esperado:** O sistema subtrai a quantidade administrada do medicamento do estoque e atualiza automaticamente a quantidade disponível.

## CT-007: Emissão de Lembretes de Receita Médica

**Descrição:** Verificar se o sistema emite lembretes sobre datas e prazos relacionados à receita médica.

**Passos:**
1. Logar no sistema com as credenciais do usuário.
2. Verificar se há lembretes sobre consultas de retorno, prazos e horários da consulta de retorno e validade da receita.

**Resultado Esperado:** O sistema emite lembretes relevantes relacionados à receita médica conforme especificado nos requisitos.

## CT-008: Emissão de Lembretes de Administração de Medicamentos

**Descrição:** Verificar se o sistema emite lembretes sobre horários e prazos para a administração de medicamentos e alerta sobre a necessidade de reposição quando o estoque estiver baixo.

**Passos:**
1. Logar no sistema com as credenciais do usuário.
2. Verificar se há lembretes sobre horários e prazos para a administração de medicamentos.
3. Verificar se há alertas sobre a necessidade de reposição quando o estoque estiver baixo.

**Resultado Esperado:** O sistema emite lembretes relevantes relacionados à administração de medicamentos conforme especificado nos requisitos.

## CT-009: Emissão de Lembretes de Realização de Exames

**Descrição:** Verificar se o sistema emite lembretes sobre datas e prazos para a realização de exames.

**Passos:**
1. Logar no sistema com as credenciais do usuário.
2. Verificar se há lembretes sobre datas e prazos para a realização de exames.

**Resultado Esperado:** O sistema emite lembretes relevantes relacionados à realização de exames conforme especificado nos requisitos.
