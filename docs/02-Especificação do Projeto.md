# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>


## Apresentação

<div align="justify">

Nessa seção serão apresentados os principais aspectos do projeto na seguinte sequência:

</div>

- Personas;

- Histórias de usuários;

- Análise da situação atual;

- Descrição geral da proposta;

- Indicadores de desempenho;

- Requisitos do projeto;
  
- Diagrama de casos de uso;

- Matriz de rastreabilidade;

- Gestão de tempo;

- Gestão da equipe;

- Gestão de orçamento

## Personas
**Ana Luiza**

**Idade:** 35 anos

**Ocupação:** Advogado

**Aplicativos:** Instagram, Pinterest, Twitter.

**Motivações:** Ana Luiza é uma profissional dedicada que se esforça para alcançar seus objetivos na carreira. Ela valoriza muito sua saúde e bem-estar, pois sabe que são essenciais para sua produtividade e sucesso profissional. 

**Frustrações:** Ana Luiza tem dificuldade em encontrar tempo para cuidar de sua saúde devido à carga de trabalho pesada e ao estresse constante da profissão. Ela também se sente sobrecarregada com as responsabilidades domésticas e muitas vezes negligencia seus próprios cuidados. 

**Hobbies:** Ana Luiza adora praticar yoga nas horas vagas para aliviar o estresse e relaxar. Ela também gosta de ler livros de ficção e passar tempo com sua família e amigos.

**Marcos Silva**

**Idade:** 50 anos

**Ocupação:** Empresário

**Aplicativos:** Facebook, Linkedin, Youtube.

**Motivação:** Marcos é um empreendedor ambicioso que está sempre em busca de novos desafios e oportunidades de negócios. Ele valoriza muito sua saúde e bem-estar, pois sabe que são fundamentais para sua capacidade de liderança e tomada de decisões. 

**Frustrações:** Marcos tem dificuldade em manter uma rotina saudável devido ao ritmo acelerado de trabalho e às viagens frequentes. Ele também enfrenta problemas de estresse e ansiedade devido às pressões do mundo dos negócios. 

**Hobbies:** Marcos tem dificuldade em manter uma rotina saudável devido ao ritmo acelerado de trabalho e às viagens frequentes. Ele também enfrenta problemas de estresse e ansiedade devido às pressões do mundo dos negócios. 


**Fernanda Soares**

**Idade:** 28 anos

**Ocupação:** Professora

**Aplicativos:** Instagram, Pinterest, Youtube.

**Motivações:** Fernanda é uma educadora dedicada que se preocupa com o bem-estar de seus alunos. Mãe de uma criança de 3 anos, ela valoriza muito sua saúde e bem-estar, pois sabe que são essenciais para sua energia e disposição no trabalho. 

**Frustrações:** Fernanda enfrenta dificuldades em manter uma rotina saudável devido ao estresse e às longas horas de trabalho. Além disso, ela lida com problemas, como ansiedade devido às pressões da profissão. A preocupação constante com o equilíbrio entre o trabalho e a vida familiar também pode ser desgastante para ela.

**Hobbies:** Fernanda: gosta de praticar ioga e meditação para aliviar o estresse e relaxar. Ela também adora ler e escrever poesia como forma de expressão artística. 


**Pedro Oliveira**

**Idade:** 60 anos

**Ocupação:** Aposentado

**Aplicativos:** WhatsApp, Facebook.

**Motivação:** Pedro é um aposentado que valoriza muito sua saúde e bem-estar. Ele gosta de aproveitar a vida ao máximo e se mantém ativo física e socialmente. 

 **Frustações:**  Pedro enfrenta problemas de saúde crônicos, como hipertensão e diabetes, que exigem cuidados constantes.

 **Hobbies:**  Pedro enfrenta problemas de saúde crônicos, como hipertensão e diabetes, que exigem cuidados constantes.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana Luiza  | Utilizar o SmartCare para configurar lembretes de horários para tomar seus medicamentos diários.          | Garantir que não esqueça de tomar seus medicamentos nos horários corretos, garantindo assim a eficácia de seu tratamento médico.     |
|Marcos Silva      |   Ação: Utilizar o SmartCare para programar lembretes de horários para tomar sua medicação para controle de pressão arterial.  | Garantir que Marcos mantenha sua pressão arterial sob controle, seguindo corretamente seu tratamento medicamentoso.  |
|Fernanda Soares| Ação: Utilizar o SmartCare para receber lembretes de horários para administrar a sua medicação para ansiedade.| Garantir que Fernanda se lembre de tomar suas medicações precisas sobre os horários de administração da medicação destinada ao controle da ansiedade, assegurando que Fernanda mantenha uma rotina consistente de cuidados pessoais.|
|Pedro Oliveira| Utilizar o SmartCare para configurar lembretes de horários para tomar sua medicação para diabetes. | Garantir que Pedro siga corretamente seu tratamento medicamentoso para controlar sua diabetes e evitar complicações de saúde.|



## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Modelo de Processos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/127978114/63b156df-21a9-4b4d-a256-87a73fa480cd)


## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir. 


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que os usuários registrem, editem, consultem e excluam receitas médicas (CRUD), incluindo informações como: data de emissão, médico prescritor, validade, data de retorno, medicamentos receitados e indicações e contraindicações recomendadas.  | ALTA | 
|RF-002|  O sistema deve permitir que os usuários registrem, editem, consultem e excluam (CRUD) medicamentos, incluindo informações como: nome dos medicamentos, preços, locais de venda, doses e horários recomendados, prazo para consumo e quantidade em estoque.  | ALTA|
|RF-003|O sistema deve permitir que os usuários registrem, editem, consultem e excluam (CRUD) contatos de emergência, incluindo informações como: Nome, número de contato, endereço do contato.| ALTA|
|RF-004|O sistema deve permitir o cadastro, consulta, atualização e exclusão (CRUD) de exames médicos, incluindo informações como: Nome do exame, Recomendação médica(documento), Local do exame, data e horários para realização, status (realizado, ou a fazer). No caso de exames já realizado deve ser possível a anexação de documentos como laudos, resultados, imagens, vídeos, dentre outras formas de Mídias de exames.|ALTA|
|RF-005|O sistema deve permitir que novos usuários se cadastrem na plataforma, incluindo informações como: Nome, data de nascimento, e-mail e telefone celular.|ALTA|
|RF-006|O sistema deve permitir que usuários consultem, editem ou excluam suas informações.|ALTA|
|RF-007|Permitir que os usuários registrem a quantidade atual de cada medicamento em estoque.|ALTA|
|RF-008|Permitir que os usuários cadastrem informações de contatos de emergência, incluindo nome, relação e número de telefone.|ALTA|
|RF-009|Permitir que os usuários cadastrem novos medicamentos, incluindo nome, dosagem, forma de administração e frequência de uso.|ALTA|
|RF-010|Permitir que os usuários registrem quando tomaram seus medicamentos, fornecendo uma visão geral do cumprimento do regime de tratamento.|ALTA|
|RF-011|O sistema deve permitir que novos usuários se cadastrem na plataforma.|ALTA|
|RF-012|Permitir que os usuários registrem informações sobre exames médicos realizados, incluindo data, tipo de exame, resultados e observações.|MÉDIA|
|RF-013|O sistema deve exigir confirmação da administração da dose do usuário e garantir que a quantidade tomada seja subtraída da quantidade em estoque de modo a manter atualizado a quantidade disponível de forma automática.|MÉDIA|
|RF-014|O sistema deve facilitar o acesso aos contatos de emergência, com uma tela dedicada para tal em destaque.|MÉDIA|
|RF-015|O sistema deve emitir lembretes sobre datas e prazos relacionados à receita médica, como consultas de retorno, prazos e horários da consulta de retorno e validade da receita.|BAIXA|
|RF-016|O sistema deve emitir lembretes sobre horários e prazos para a administração de medicamentos, assim também como deve alertar sobre a necessidade de reposição quando o estoque estiver baixo.|BAIXA|
|RF-017|O sistema deve emitir lembretes sobre datas e prazos para a realização de exames.|BAIXA|
### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Descrição das Restruções                                 |Prioridade|
|--|---------------------------------------------------|---|
|RG-001|**Segurança de Dados:** Implementar medidas robustas de seguraça para as informações médicas sensíveis dos usuários. Isso inclui autenticação segura, autorização adequada e proteção contra ameaças.| ALTA |
|RG-002| **Compatibilidade com Dispositivos Móveis:** Garantir que o SmartCart seja compatível com uma ampla variedade de dispositivos móveis, como smartphones e tablets, e com diferentes sistemas operacionais, como Android e iOS.| ALTA |        
|RG-003|**Acessibilidade:** Comprir padrões de acessibilidade para garantir que o SmartCare seja utilizável por pessoas com deficiências. Isso inclui a implementação de recursos como leitores de tela, tamanhos de fonte ajustáveis e contraste adequado para garantir que a plicação seja acessível a todos os usuários, independentemente de suas habilidades. | ALTA |
|RG-004|**Desempenho e Otimização:** Garantir que a aplicação seja otimizada para um desempenho eficiente, mesmo em dispositivos móveis mais antigo ou com recursos limitados. Isso inclui a minimização do consumo de recursos, como CPU e memória, para proporcionar uma experiência fluida aos usuários. | MÉDIA |       
|RG-005|**Conectividade e Modo Offline:** Oferecer suporte para operação offline sempre que possível, permitindo que os usuários acessem e registrem informações essenciais mesmo em condições de conectividade instável ou ausente. Além disso, a aplicação deve ser capaz de sincronizar dados automaticamente quando a conexão for restaurada. | MÉDIA |        
|RG-006|**Notificações e Lembretes Personalizados:** Oferecer um sistema flexivel de notificações e lembretes, permitindo que os usuários personalizem alertas para consultas médicas, horários de medicamentos e outros compromissos relacionados á saúde sem inundar o usuário com notificações excessivas e permitindo que ele tenha controle total sobre as preferências de lembrete. | MÉDIA |       
|RG-007|**BacKup e Recuperação de Dados** Implementar um sistema eficaz de baxKup e recuperação de dados para garantir a integridade das informações médicas. Isso envolve a regularidade dos backups, a facilidade de restauração em caso de falhas e a segurança dos dados durante o processo de bacKup. | MÉDIA |        
|RG-008|**Restrição de Consumo de Bateria:** Garantir que a aplicação SmartCare seja otimizada para minimizar o consumo de bateria dos dispositivos móveis. Isso envolve a implementação de práticas de programação eficientes, evitando processos em segundo plano desnecessários e otimizando o uso de recursos do sistema, para proporcionar uma experiência de usário mais duradoura e amigável em termos de bateria. | BAIXA |        
|RG-009|**Atualizações e manutenção:** Implementar um sistema eficaz de atualizações para corrigir falhas de segurança, melhorar o desempenho e adicionar novos recursos. Certificar-se de que as atualizações sejam fáceis de realizar para os usuários e que a aplicação continue funcionando corretamente após cada atualização. | BAIXA |        |
|RG-010|**Compatibilidade com Versões Anteriores:** Assegurar que o SmartCare seja compatível com versões mais antigas da aplicação, sempre que possível. Isso permite que os usuários que não atualizaram imediatamente possam continuar utilizando a aplicação sem problemas, garantindo uma transição suave entre versões e evitando possíveis interrupções no serviço. | BAIXA |        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

![Diagrama de caso de uso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/a8f91595-650e-441a-a653-1d1bc5337b80)

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

O projeto tem ao todo a duração de 159 dias, divididos em cinco etapas. Na Etapa 1, será feita a definição do projeto, a documentação de contexto e a especificação de problema. Na Etapa 2, será especificada a metodologia, a arquitetura da solução e o projeto de interface. Também serão iniciados a programação de funcionalidades e os planos e registros de testes, atividades que seguem na Etapa 3 e 4. Na última etapa, a Etapa 5, serão feitos os ajustes finais e a apresentação final do projeto.

O diagrama abaixo contém o tempo para desenvolvimento e as atividades correspondentes de cada etapa:

![Gerenciamento de Tempo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/127978114/eb57edae-4fb3-4088-98b9-5cc402fcc526)


O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Cronograma e Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/a63328ca-2ef0-4fff-96cc-11f458e28cea)
## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

### Custos do projeto: SmartCare 

Os custos fixos do projeto estão distribuídos sobre a mão de obra dos desenvolvedores, sobre os custos de alocar o projeto na nuvem e sobre as assinaturas das plataformas de publicação de apps. 
Os custos fixos da equipe, foram calculados sobre o valor de horas trabalhas, que teve uma estimativa de aproximadamente 1200 horas de trabalho para desenvolver o app. 
Assim o custo bruto do desenvolvimento do projeto ficou estipulado em aproximadamente R$: 130.200,00 Reais em um período de 5 meses de trabalho.  

### Publicação de APP nas plataformas de distribuição APP Store/ Play Store 

Para publicação de aplicativos na Apple (App Store), tem o pagamento de algumas taxas anuais: A taxa anual do Apple Developer Program é de US$ 99 Dólares e a taxa anual do Apple Developer Enterprise Program é de US$ 299 Dólares. Já a Play Store tem um custo Anual de R$: 89,90 por ano. 

### Preço final do projeto  

Finalizando os custos fixos, atribuiremos a margem de lucro em cima do valor total do projeto que vai ser de 15%, que é um valor razoável dentro do mercado.

![Custo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/709a4223-b93e-4530-8ead-0c3e12e28458)



