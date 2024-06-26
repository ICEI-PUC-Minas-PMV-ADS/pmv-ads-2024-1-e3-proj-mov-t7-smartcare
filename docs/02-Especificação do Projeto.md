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

<table border="1">
    <tr>
        <td colspan="4" align="center"><b>Ana Luiza</b></td>
    </tr>
    <tr>
        <td colspan="4" align="center">
            <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/blob/main/docs/img/personasAnaLuiza.png?raw=true" alt="image">
        </td>
    </tr>
    <tr>
        <td><i><strong>Nome:</strong></i> Ana Luiza</td>
        <td><i><strong>Idade:</strong></i> 35 anos</td>
        <td><i><strong>Ocupação:</strong></i> Advogada</td>
        <td><i><strong>Aplicativos:</strong></i> Instagram, Pinterest, Twitter</td>
    </tr>
    <tr>
        <td colspan="2">
            <strong><i>Motivações:</i></strong><br>
            Ana Luiza é uma profissional dedicada que se esforça para alcançar seus objetivos na carreira. Ela valoriza muito sua saúde e bem-estar, pois sabe que são essenciais para sua produtividade e sucesso profissional.
        </td>
        <td colspan="2">
            <strong><i>Frustrações:</i></strong><br>
            Ana Luiza tem dificuldade em encontrar tempo para cuidar de sua saúde devido à carga de trabalho pesada e ao estresse constante da profissão. Ela também se sente sobrecarregada com as responsabilidades domésticas e muitas vezes negligencia seus próprios cuidados.
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <strong><i>Hobbies:</i></strong><br>
            Praticar yoga nas horas vagas para aliviar o estresse e relaxar. Ela também gosta de ler livros de ficção e passar tempo com sua família e amigos.
        </td>
    </tr>
</table>




<table border="1">
    <tr>
        <td colspan="4" align="center"><b>Marcos Silva</b></td>
    </tr>
    <tr>
        <td colspan="4" align="center">
            <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/blob/main/docs/img/personasMarcosSilva.png?raw=true" alt="image">
        </td>
    </tr>
    <tr>
        <td><i><strong>Nome:</strong></i> Marcos Silva</td>
        <td><i><strong>Idade:</strong></i> 52 anos</td>
        <td><i><strong>Ocupação:</strong></i> Empresário</td>
        <td><i><strong>Aplicativos:</strong></i> Facebook, Linkedin, Youtube</td>
    </tr>
    <tr>
      <td colspan="2">
        <strong><i>Motivações:</i></strong><br> 
        Marcos é um empreendedor ambicioso que está sempre em busca de novos desafios e oportunidades de negócios. Ele valoriza muito sua saúde e bem-estar, pois sabe que são fundamentais para sua capacidade de liderança e tomada de decisões.
      </td>
      <td colspan="2">
            <strong><i>Frustrações:</i></strong><br> 
          Marcos tem dificuldade em manter uma rotina saudável devido ao ritmo acelerado de trabalho e às viagens frequentes. Ele também enfrenta problemas de estresse e ansiedade devido às pressões do mundo dos negócios.
      </td>
    </tr>
        <td colspan="2">
            <strong><i>Hobbies:</i></strong> Praticar esportes ao ar livre (como golfe e corrida), apreciar boa comida e vinho, explorar novos restaurantes em viagens de negócio.
        </td>
    </tr>
</table>



<table border="1">
    <tr>
        <td colspan="4" align="center"><b>Fernanda Soares</b></td>
    </tr>
    <tr>
        <td colspan="4" align="center">
            <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/blob/main/docs/img/personasFernandaSoares.png?raw=true" alt="image">
        </td>
    </tr>
    <tr>
        <td><i><strong>Nome:</strong></i> Fernanda Soares</td>
        <td><i><strong>Idade:</strong></i> 28 anos</td>
        <td><i><strong>Ocupação:</strong></i> Professora</td>
        <td><i><strong>Aplicativos:</strong></i> Instagram, Pinterest, Youtube</td>
    </tr>
    <tr>
        <td colspan="2">
            <strong><i>Motivações:</i></strong><br>
            Fernanda é uma educadora dedicada que se preocupa com o bem-estar de seus alunos. Mãe de uma criança de 3 anos, ela valoriza muito sua saúde e bem-estar, pois sabe que são essenciais para sua energia e disposição no trabalho.
        </td>
        <td colspan="2">
            <strong><i>Frustrações:</i></strong><br>
            Fernanda enfrenta dificuldades em manter uma rotina saudável devido ao estresse e às longas horas de trabalho. Além disso, ela lida com problemas como ansiedade devido às pressões da profissão. A preocupação constante com o equilíbrio entre o trabalho e a vida familiar também pode ser desgastante para ela.
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <strong><i>Hobbies:</i></strong><br>
            Praticar ioga e meditação para aliviar o estresse e relaxar, ler e escrever poesias como forma de expressão artística.
        </td>
    </tr>
</table>

<table border="1">
    <tr>
        <td colspan="4" align="center"><b>Pedro Oliveira</b></td>
    </tr>
    <tr>
        <td colspan="4" align="center">
            <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/blob/main/docs/img/personasPedroOliveira.png?raw=true" alt="image">
        </td>
    </tr>
    <tr>
        <td><i><strong>Nome:</strong></i> Pedro Oliveira</td>
        <td><i><strong>Idade:</strong></i> 60 anos</td>
        <td><i><strong>Ocupação:</strong></i> Aposentado</td>
        <td><i><strong>Aplicativos:</strong></i> WhatsApp, Facebook</td>
    </tr>
    <tr>
        <td colspan="2">
            <strong><i>Motivações:</i></strong><br>
            Pedro é um aposentado que valoriza muito sua saúde e bem-estar. Ele gosta de aproveitar a vida ao máximo e se mantém ativo física e socialmente.
        </td>
        <td colspan="2">
            <strong><i>Frustrações:</i></strong><br>
            Pedro enfrenta problemas de saúde crônicos, como hipertensão e diabetes, que exigem cuidados constantes.
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <strong><i>Hobbies:</i></strong><br>
            Entusiasta de atividades ao ar livre (como caminhadas e jardinagem), membro ativo da comunidade local participando de grupos de voluntariado e eventos sociais.
        </td>
    </tr>
</table>




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

<div align="justify">

Atualmente, existem diversos apps que procuram resolver de alguma forma os problemas que o SmartCare procura resolver, no entanto, a quantidade de apps é elevada e nenhum aborda o problema da perspectiva que o SmartCare abordará.

<div>

### Descrição Geral da Proposta

<div align="justify">
  
A proposta é elaborar um aplicativo chamado SmartCare que centralize as principais funcionalidade de gerenciamento de aspectos da saúde dos usuários, focando na experiência do usuário de forma a facilitar sua operação e manuseio.

<div>

<div align="justify">
  
Existem inúmeras melhorias que poderão ser desenvolvidas ao longo da vida útil do Aplicativo aqui proposto como: melhorias de interface, melhorias de funcionalidades, melhoria de desempenho, implementação de novas funcionalidades, dentre outras.

<div>


  
### Processo 1 – Cadastro e Login

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Modelo de Processos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/127978114/63b156df-21a9-4b4d-a256-87a73fa480cd)

 Possíveis melhorias:
- Implementar uma página de recuperação de senha;
- Implementar recuperação de senha via e-mail;
- Implementar verificação em duas etapas para maior segurança;
  
## Indicadores de Desempenho

![Indicadores de desempenho](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/e06dfa9b-e891-4016-9380-5ec3ff80fcb9)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir. 


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que os usuários registrem, editem, consultem e excluam receitas médicas (CRUD), incluindo informações como: data de emissão, médico prescritor, validade, data de retorno, medicamentos receitados e indicações e contraindicações recomendadas.  | ALTA | 
|RF-002|  O sistema deve permitir que os usuários registrem, editem, consultem e excluam (CRUD) medicamentos, incluindo informações como: nome dos medicamentos, doses e horários recomendados.  | ALTA|
|RF-003|O sistema deve permitir o cadastro, consulta, atualização e exclusão (CRUD) de exames médicos, incluindo informações como: Nome do exame, Recomendação médica(documento), Local do exame, data e horários para realização. |ALTA|
|RF-004|O sistema deve permitir que novos usuários se cadastrem na plataforma, incluindo informações como: Nome, data de nascimento, e-mail e telefone celular.|ALTA|
|RF-005|O sistema deve permitir que usuários consultem, editem ou excluam suas informações de perfil.|ALTA|
|RF-006|O usuário pode colocar o comentário em estoque a quantidade que ele tem de remedios e garantir que a quantidade tomada seja subtraída da quantidade em estoque, terá um alerta toda vez que ele en trar nessa parte para lembra-lo de fazer a subtração dos remédios em estoque. |BAIXA|
|RF-007|O sistema deve emitir lembretes sobre datas e prazos relacionados à receita médica, como consultas de retorno, prazos e horários da consulta de retorno e validade da receita.|BAIXA|
|RF-008|O sistema deve emitir lembretes sobre horários e prazos para a administração de medicamentos, assim também como deve alertar sobre a necessidade de reposição quando o estoque estiver baixo.|BAIXA|
|RF-009|O sistema deve emitir lembretes sobre datas e prazos para a realização de exames.|BAIXA|
### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|A interface do usuário do aplicativo deve ser intuitiva e fácil de usar, com elementos de design claros e instruções simples para garantir que os usuários possam navegar e interagir com o aplicativo sem dificuldade. |ALTA| 
|RNF-002| O aplicativo deve estar disponível e operacional a maior parte do tempo, com tempo de inatividade planejado mantido ao mínimo para garantir o acesso dos usuários quando necessário.|ALTA| 
|RNF-003|Deve-se garantir a segurança e privacidade dos usuários.|ALTA|
|RNF-004|Deve-se garantir um login seguro.|ALTA|
|RNF-005|O aplicativo deve ser otimizado para consumir uma quantidade mínima de memória e espaço de armazenamento no dispositivo do usuário, garantindo um desempenho eficiente.|MÉDIA|



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Descrição das Restruções                                 |Prioridade|
|--|---------------------------------------------------|---|
|RG-01|**Segurança de Dados:** Implementar medidas robustas de seguraça para as informações médicas sensíveis dos usuários. Isso inclui autenticação segura, autorização adequada e proteção contra ameaças.| ALTA |
|RG-02| **Compatibilidade com Dispositivos Móveis:** Garantir que o SmartCart seja compatível com uma ampla variedade de dispositivos móveis, como smartphones e tablets, e com diferentes sistemas operacionais, como Android e iOS.| ALTA |        
|RG-03|**Acessibilidade:** Comprir padrões de acessibilidade para garantir que o SmartCare seja utilizável por pessoas com deficiências. Isso inclui a implementação de recursos como leitores de tela, tamanhos de fonte ajustáveis e contraste adequado para garantir que a plicação seja acessível a todos os usuários, independentemente de suas habilidades. | ALTA |
|RG-04|**Desempenho e Otimização:** Garantir que a aplicação seja otimizada para um desempenho eficiente, mesmo em dispositivos móveis mais antigo ou com recursos limitados. Isso inclui a minimização do consumo de recursos, como CPU e memória, para proporcionar uma experiência fluida aos usuários. | MÉDIA |       
|RG-05|**Conectividade e Modo Offline:** Oferecer suporte para operação offline sempre que possível, permitindo que os usuários acessem e registrem informações essenciais mesmo em condições de conectividade instável ou ausente. Além disso, a aplicação deve ser capaz de sincronizar dados automaticamente quando a conexão for restaurada. | MÉDIA |        
|RG-06|**Notificações e Lembretes Personalizados:** Oferecer um sistema flexivel de notificações e lembretes, permitindo que os usuários personalizem alertas para consultas médicas, horários de medicamentos e outros compromissos relacionados á saúde sem inundar o usuário com notificações excessivas e permitindo que ele tenha controle total sobre as preferências de lembrete. | MÉDIA |       
|RG-07|**BacKup e Recuperação de Dados** Implementar um sistema eficaz de baxKup e recuperação de dados para garantir a integridade das informações médicas. Isso envolve a regularidade dos backups, a facilidade de restauração em caso de falhas e a segurança dos dados durante o processo de bacKup. | MÉDIA |        
|RG-08|**Restrição de Consumo de Bateria:** Garantir que a aplicação SmartCare seja otimizada para minimizar o consumo de bateria dos dispositivos móveis. Isso envolve a implementação de práticas de programação eficientes, evitando processos em segundo plano desnecessários e otimizando o uso de recursos do sistema, para proporcionar uma experiência de usário mais duradoura e amigável em termos de bateria. | BAIXA |        
|RG-09|**Atualizações e manutenção:** Implementar um sistema eficaz de atualizações para corrigir falhas de segurança, melhorar o desempenho e adicionar novos recursos. Certificar-se de que as atualizações sejam fáceis de realizar para os usuários e que a aplicação continue funcionando corretamente após cada atualização. | BAIXA |        |
|RG-10|**Compatibilidade com Versões Anteriores:** Assegurar que o SmartCare seja compatível com versões mais antigas da aplicação, sempre que possível. Isso permite que os usuários que não atualizaram imediatamente possam continuar utilizando a aplicação sem problemas, garantindo uma transição suave entre versões e evitando possíveis interrupções no serviço. | BAIXA |        |



## Diagrama de Casos de Uso


![Diag](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/127978114/601f0af2-a5a7-4cc2-83ad-93a25eeaba31)





# Matriz de Rastreabilidade

<div align="justify">
  
Identificados os módulos do sistema e seus principais aspectos, abaixo a matriz de rastreabilidade relaciona os principais aspectos do sistema:

</div>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/19398297/2e211db4-3309-4ace-adac-244b9448071c)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

O projeto tem ao todo a duração de 159 dias, divididos em cinco etapas. Na Etapa 1, será feita a definição do projeto, a documentação de contexto e a especificação de problema. Na Etapa 2, será especificada a metodologia, a arquitetura da solução e o projeto de interface. Também serão iniciados a programação de funcionalidades e os planos e registros de testes, atividades que seguem na Etapa 3 e 4. Na última etapa, a Etapa 5, serão feitos os ajustes finais e a apresentação final do projeto.

O diagrama abaixo contém o tempo para desenvolvimento e as atividades correspondentes de cada etapa:

![Gerenciamento de Tempo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/127978114/eb57edae-4fb3-4088-98b9-5cc402fcc526)


O Gráfico de Gantt, ou diagrama de Gantt, é uma ferramenta visual fundamental para supervisionar e administrar o cronograma de atividades de um projeto. Através dele, torna-se viável compilar uma abrangente lista de ações necessárias para a implementação do projeto, estruturando-as em atividades distintas e estimando o tempo necessário para sua realização.

![Cronograma e Gantt](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/9d0adcda-886c-49c2-a347-957a1b13c812)

## Gerenciamento de Equipe

O aprimorado gerenciamento de tarefas não apenas impulsionará a produtividade do projeto, mas também se revela essencial para a consecução de metas excepcionais. Assim, é imperativo implementar uma gestão holística, englobando tanto as tarefas quanto a dinâmica interpessoal, a fim de promover uma coordenação eficaz das equipes envolvidas. Essa abordagem integrada não só facilita o controle operacional, mas também fomenta um ambiente colaborativo que potencializa a sinergia entre os membros, resultando em níveis superiores de eficiência e sucesso para o projeto.

![Gerenciamento de Equipe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/ddf26c87-374a-4f3a-ac5b-2ad06b90374f)

## Gestão de Orçamento

### Custos do projeto: SmartCare 

A estrutura de custos do projeto SmartCare é composta por custos fixos distribuídos em três áreas principais: mão de obra dos desenvolvedores, custos de alocação na nuvem e assinaturas das plataformas de publicação de aplicativos. Os custos fixos da equipe foram calculados com base em uma estimativa de 1200 horas de trabalho necessárias para desenvolver o aplicativo. Esse cálculo resultou em um custo bruto de desenvolvimento de aproximadamente R$ 130.200,00, durante um período de 5 meses de trabalho.

Além disso, para publicar o aplicativo nas plataformas de distribuição App Store e Play Store, são necessários pagamentos de taxas anuais. Na App Store, a taxa anual do Apple Developer Program é de US$ 99, enquanto a do Apple Developer Enterprise Program é de US$ 299. Na Play Store, o custo anual é de R$ 89,90.

Por fim, para garantir uma margem de lucro sustentável e competitiva no mercado, será aplicada uma margem de 15% sobre o valor total do projeto. Essa margem é considerada razoável e adequada para cobrir custos indiretos, riscos e garantir uma compensação justa para a equipe de desenvolvimento, além de proporcionar sustentabilidade financeira ao projeto.

Em resumo, a estrutura de custos apresentada reflete uma abordagem abrangente e justificada para o desenvolvimento e publicação do projeto SmartCare, levando em consideração tanto os custos fixos diretos quanto as taxas associadas à publicação do aplicativo.

![Custo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/c56a03e9-afd2-49d8-8229-7f2a44534a85)



