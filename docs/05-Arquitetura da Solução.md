# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes


O diagrama de classes oferece uma representação visual da arquitetura do software, mostrando as interconexões entre as diferentes classes que compõem o sistema. Essas classes desempenham o papel de modelos para definir como os objetos serão instanciados e operados em tempo de execução na memória.

![Diagrama de Classe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/a068f125-dcbe-4b6a-8d42-3c0542cf2f99)


## Modelo ER

O Modelo de Entidade-Relacionamento (ER) oferece um diagrama que visualiza as interações entre entidades na aplicação interativa, esclarecendo como diferentes objetos se conectam e interagem entre si.

![Modelo ER](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/e4e5b43f-5301-4b9f-b760-ced33b19d4ac)

## Esquema Relacional


O Esquema Relacional é uma representação tabular dos dados, acompanhada de restrições de integridade e definições de chaves primárias, garantindo a organização e consistência dos dados.
 
![Esquema Relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/bafa5fbd-303b-4d62-9d1e-cf04cbc04605)


## Modelo Físico

### Tabela consulta
![Tabela consulta](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/0a95793d-2d67-432f-b206-d7411e1598ed)

![Smartcare_consultas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/327b95c0-2a8a-4d94-b6ff-303913895f9c)


### Tabela remédio
![Tabela remédio](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/268dcb52-1822-4862-a950-4a2ec8438d1c)

![Smartcare_remédio](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/d55efb89-0af5-4791-955c-2ac1f251fe92)


### Tabela usuário
![Tabela usuário](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/57849d3f-d8f4-4641-99dc-9d8f7eae39fd)

![Smartcare_usuário](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/e512b40b-99d5-4d30-81d5-c03f249ac99b)


### Tabela receita
![Tabela receita](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/28159035-49c2-462f-82ec-9098a4cd940d)

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

- IDEs de desenvolvimento: Visual Studio Code, node.JS, Visual Studio 2022 e React Native;
  
- Linguagens utilizadas: HTML, CSS, JavaScript;
  
- Ferramenta de design: Figma;
  
- Ferramenta de Diagramação: Draw.io;
  
- Ferramenta de versionamento: Git;
  
- Ferramenta de Gestão de Projeto: Github Projects;
  
- Plataforma para hospedagem do Site: Azure.

A seguir, apresentamos uma representação do percurso do usuário pelo sistema, mostrando os passos pelos quais ele atravessa até receber uma resposta.

  ![Interação Usuário Sitema](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/0c86ce92-73d2-48ca-88b8-0430e834f692)

- 1 Usuário: Um usuário abre o aplicativo em seu dispositivo móvel.

- 2 Frontend (React Native): A interface do aplicativo é carregada e exibida no dispositivo do usuário.

- 3 Interatividade: O usuário pode interagir com os diferentes elementos da interface, como botões, menus e formulários.

- 4 Backend (node.js, SQL): Quando o usuário realiza uma ação, como preencher um formulário e enviar dados, o aplicativo envia uma solicitação para o backend, onde o node.js processa os dados e realiza operações no banco de dados SQL, como armazenar informações do usuário ou recuperar dados relevantes.

- 5 Resposta ao Usuário: Após o processamento no backend, o frontend recebe uma resposta do servidor. Por exemplo, se o usuário preencher um formulário de login corretamente, o backend pode retornar uma resposta confirmando o login bem-sucedido. Essa resposta é então exibida ao usuário na interface do aplicativo, por exemplo, redirecionando-o para a página inicial do aplicativo ou exibindo uma mensagem de boas-vindas.

## Hospedagem

Procedi à criação de um novo aplicativo web no Azure, seguindo as orientações fornecidas pela própria plataforma. Posteriormente, realizei o upload dos arquivos que compõem o site para o aplicativo web recém-criado, dado que o site já estava previamente desenvolvido. Nas configurações do aplicativo web, localizei a seção "Configurações de implantação" e selecionei a opção para fazer o deploy a partir do repositório do Azure DevOps onde estavam os arquivos do site. Após salvar as configurações, o site foi publicado em poucos minutos e tornou-se acessível através do URL https://smartcare.azurewebsites.net.
Após concluir o processo de hospedagem do aplicativo web no Azure, a publicação das atualizações tornou-se uma tarefa bastante simplificada. Sempre que for necessário fazer uma alteração no aplicativo, basta realizar as modificações nos arquivos pertinentes e fazer o upload para o repositório de código fonte no Azure DevOps.
Assim que os novos arquivos são enviados para o repositório, o serviço de implantação automática do Azure detecta automaticamente as alterações e atualiza o aplicativo correspondente em questão de minutos. Isso significa que qualquer modificação ou adição de conteúdo é imediatamente refletida no aplicativo online.
Essa funcionalidade de atualização automática elimina a necessidade de qualquer intervenção manual para publicar as alterações, proporcionando uma experiência de gerenciamento de aplicativo contínuo e sem complicações.


## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

![Qualidade de software](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/6cea0d05-6b3a-4b0d-91b6-de87c980fb74)

