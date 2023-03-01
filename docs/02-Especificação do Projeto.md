# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Seguem demonstradas por meio dos quadros apresentados o levantamento feito das personas e suas características durante o processo de entendimento do problema:

<table>
  <tr>
   <td width="1000" colspan="5" align="center">João Teixeira, 45 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="https://user-images.githubusercontent.com/101372729/189243307-9fd2fe0e-879c-4189-8f56-937bdee0decf.png"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Segurança de empresa privada e gesseiro.</td>
   <tr>
    <td width="150" align="center">Aplicativos</td>
    <td width="210" align="center">Motivações</td>
    <td width="210" align="center">Frustrações</td>
    <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Facebook.<br>
    ●	Instagram.<br>
    ●	OLX.<br>
    ●	WhatsApp.<br>
   </td>
   <td>
    ●	Trabalhar visando proporcionar uma boa qualidade de vida para a família.
   </td>
   <td>
    ●	Não conseguir entregar uma obra dentro do prazo.<br>
    ●	Não encontrar clientes.	<br>
   </td>
   <td>
    ●	Jogar futebol com amigos.<br>
    ●	Passear com a família em parques e shoppings.<br>
    ●	Pai presente e dedicado na criação dos filhos.<br>
   </td>
  </tr>
   

   <tr>
   <td width="1000" colspan="5" align="center">Jadson Mendes, 48 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="img/persona1"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Oficial de Manutenção Predial.</td>
   <tr>
    <td width="150" align="center">Aplicativos</td>
    <td width="210" align="center">Motivações</td>
    <td width="210" align="center">Frustrações</td>
    <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Facebook.<br>
    ●	Instagram.<br>
    ●	WhatsApp.<br>
   </td>
   <td>
    ●	Tornar-se excelência na prestação de seus serviços à comunidade.<br>
    ●	Mudar de vida através do seu trabalho.<br>
   </td>
   <td>
    ●	Não ser reconhecido pelos serviços prestados a um cliente.<br>
    ●	Falta de tempo para passar com os familiares.	<br>
   </td>
   <td>
    ●	Aprimorar o conhecimento em sua área de atuação.<br>
    ●	Profissional dedicado e obcecado por resultados.<br>
   </td>
  </tr>
    
  <tr>
   <td width="1000" colspan="5" align="center">Guilherme Prado, 21 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="https://user-images.githubusercontent.com/101372729/189245168-1616d4cf-3ade-4e78-88d8-16dbedf32ff6.png"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Técnico em Informática.</td>
  <tr>
   <td width="150" align="center">Aplicativos</td>
   <td width="210" align="center">Motivações</td>
   <td width="210" align="center">Frustrações</td>
   <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Discord.<br>
    ●	Facebook.<br>
    ●	Instagram.<br>
    ●	Reddit.<br>
    ●	Twitch.<br>
    ●	Twitter.<br>
    ●	YouTube.<br>
    ●	WhatsApp.<br>
   </td>
   <td>
    ● Prestar ao cliente um serviço de excelência.<br>
    ● Entregar ao cliente o resultado que ele mesmo gostaria de receber. <br>
   </td>
   <td>
    ●	Tentar compreender a falta de conhecimento específico de um cliente.<br>
    ●	Sentir que seu trabalho não está sendo bem feito.<br>
   </td>
   <td>
    ●	Consumir conteúdo sobre tecnologia focado em hardware.<br>
    ●	Jogar jogos online. <br>
   </td>
  </tr>
 
  <tr>
   <td width="1000" colspan="5" align="center">Karen Rocha, 27 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="img/persona4.png"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Cuidadora de Idosos, acompanhante hospitalar e estudante de Enfermagem.</td>
  <tr>
   <td width="150" align="center">Aplicativos</td>
   <td width="210" align="center">Motivações</td>
   <td width="210" align="center">Frustrações</td>
   <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ●	Facebook.<br>
    ●	Instagram.<br>
    ●	LinkedIn.<br>
    ●	Telegram.<br>
   </td>
   <td>
    ●	Cuidar das pessoas de forma séria e humana.<br>
    ●	Crescer como profissional da saúde.<br>
   </td>
   <td>
    ●	Tentar compreender a falta de conhecimento específico de um cliente.<br>
    ●	Sentir que seu trabalho não está sendo bem feito.<br>
   </td>
   <td>
    ●	Cuidar com a casa e animais de estimação.<br>
    ●	Praticar exercícios físicos.<br>
    ●	Aprofundar-se nos estudos de sua área de atuação.<br>
   </td>
  </tr>
 
  <tr>
   <td width="1000" colspan="5" align="center">Luiza Silva, 29 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="imga/persona5.png"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Designer de interiores e empresaria.</td>
  <tr>
   <td width="150" align="center">Aplicativos</td>
   <td width="210" align="center">Motivações</td>
   <td width="210" align="center">Frustrações</td>
   <td width="240" align="center">Hobbies, História</td>
   </tr>
  </tr>
  <tr>
   <td>
    ● Instagram.<br>
    ● Linkedin.<br>
    ●	TikTok.<br>
    ●	Youtube.<br>
   </td>
   <td>
    ●	Crescer sua empresa e maximizar seus lucros.<br>
    ●	Terceirizar serviços.<br>
   </td>
   <td>
    ●	Falta de resultados expressivos na busca de mão de obra qualificada.<br>
    ●	Perda de tempo e de dinheiro ao não conseguir uma equipe qualificada para construir seus projetos.<br>
   </td>
   <td>
    ●	Criar artes gráficas.<br>
    ●	Maquiagem.<br>
    ●	Redes sociais.<br>
   </td>
  </tr>
    
 
  <tr>
   <td width="1000" colspan="5" align="center">Paulo Ribeiro, 37 anos.</td>
  </tr>
  <tr>
   <td width="200" align="center" height="200" rowspan="3"><img src="https://user-images.githubusercontent.com/101372729/189246157-e34d4684-f8f0-495b-bbae-15892d6413bf.png"></td>
   <td width="150" align="center">Ocupação</td>
   <td colspan="3">Film Maker, Criador de conteudo.</td>
 <tr>
   <td width="150" align="center">Aplicativos</td>
   <td width="210" align="center">Motivações</td>
   <td width="210" align="center">Frustrações</td>
   <td width="240" align="center">Hobbies, História</td>
  </tr>
  </tr>
  <tr>
   <td>
    ●	Youtube.<br>
    ●	Instagram.<br>
    ●	LinkedIn.<br>
    ●	Telegram.<br>
    ●	Netflix.<br>
    ●	Prime Video.<br>
   </td>
   <td>
   ● Procura de staff qualificada para apoio em seus projetos.<br>
   ●	Crescer suas mídias e aumentar o capital de investidores  para suas obras cinematográficas.<br>
   </td>
   <td>
    ●	Sentir que um paciente não está satisfeito com seus cuidados.<br>
    ●	Falta de oportunidades para iniciar sua carreira.<br>
   </td>
   <td>
    ●	Cuidar com a casa e animais de estimação.<br>
    ●	Aprofundar-se nos estudos de sua área de atuação.<br>
   </td>
   </tr>
 
 </table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

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

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

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

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
