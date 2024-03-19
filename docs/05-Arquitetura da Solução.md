# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes


O diagrama de classes oferece uma representação visual da arquitetura do software, mostrando as interconexões entre as diferentes classes que compõem o sistema. Essas classes desempenham o papel de modelos para definir como os objetos serão instanciados e operados em tempo de execução na memória.

![Diagrama de Classe](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/f1fb2e65-f2d4-4b1e-9e34-d41339b9c227)


## Modelo ER

O Modelo de Entidade-Relacionamento (ER) oferece um diagrama que visualiza as interações entre entidades na aplicação interativa, esclarecendo como diferentes objetos se conectam e interagem entre si.

![Modelo ER](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/130614485/dbf4e5b7-5576-469c-a0e3-ba8fd3f4bab6)

## Esquema Relacional


O Esquema Relacional é uma representação tabular dos dados, acompanhada de restrições de integridade e definições de chaves primárias, garantindo a organização e consistência dos dados.
 
![Esquema Relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/bc347d7d-615d-4be1-adf1-8c83d1cbb0fe)


## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

- IDEs de desenvolvimento: Visual Studio Code, node.JS, Visual Studio 2022 e React Native;
  
- Linguagens utilizadas: HTML, CSS, JavaScript, C# e SQL;
  
- Ferramenta de design: Figma;
  
- Ferramenta de Diagramação: Draw.io;
  
- Ferramenta de versionamento: Git;
  
- Ferramenta de Gestão de Projeto: Github Projects;
  
- Plataforma para hospedagem do Site: Github Pages.

A seguir, apresentamos uma representação do percurso do usuário pelo sistema, mostrando os passos pelos quais ele atravessa até receber uma resposta.

  ![Interação Usuário Sitema](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t7-smartcare/assets/129237541/0c86ce92-73d2-48ca-88b8-0430e834f692)

- 1 Usuário: Um usuário abre o aplicativo em seu dispositivo móvel.

- 2 Frontend (React Native): A interface do aplicativo é carregada e exibida no dispositivo do usuário.

- 3 Interatividade: O usuário pode interagir com os diferentes elementos da interface, como botões, menus e formulários.

- 4 Backend (node.js, SQL): Quando o usuário realiza uma ação, como preencher um formulário e enviar dados, o aplicativo envia uma solicitação para o backend, onde o node.js processa os dados e realiza operações no banco de dados SQL, como armazenar informações do usuário ou recuperar dados relevantes.

- 5 Resposta ao Usuário: Após o processamento no backend, o frontend recebe uma resposta do servidor. Por exemplo, se o usuário preencher um formulário de login corretamente, o backend pode retornar uma resposta confirmando o login bem-sucedido. Essa resposta é então exibida ao usuário na interface do aplicativo, por exemplo, redirecionando-o para a página inicial do aplicativo ou exibindo uma mensagem de boas-vindas.

## Hospedagem

Procedi à criação de um novo repositório denominado <Smartcare>.github.io, seguindo as orientações fornecidas pela própria plataforma.
Posteriormente, realizei o upload dos arquivos que compõem o site para o repositório recém-criado. Dado que o site já estava previamente desenvolvido.
Nas configurações do repositório, localiza-se a seção "GitHub Pages" nela selecionamos a branch que continha os arquivos do site como a fonte para a publicação do GitHub Pages. Após salvar as configurações, o site foi publicado em poucos minutos e tornou-se acessível através do URL https://<Smartcare>.github.io.

### Lançamento

Após concluir o processo de hospedagem do meu site no GitHub Pages, a publicação das atualizações tornou-se uma tarefa bastante simplificada. Sempre que desejo fazer uma alteração no meu site, basta realizar as modificações nos arquivos pertinentes e fazer o upload para o repositório no GitHub.
Assim que os novos arquivos são enviados para o repositório, o GitHub Pages detecta automaticamente as alterações e atualiza o site correspondente em questão de minutos. Isso significa que qualquer modificação ou adição de conteúdo é imediatamente refletida no site online.
Essa funcionalidade de atualização automática elimina a necessidade de qualquer intervenção manual para publicar as alterações, proporcionando uma experiência de gerenciamento de site contínuo e sem complicações. Em resumo, o GitHub Pages simplifica significativamente o processo de lançamento e atualização do site, permitindo que eu me concentre no conteúdo e na funcionalidade do site, em vez de lidar com tarefas de gerenciamento de hospedagem.


## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
