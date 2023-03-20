# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram afirmados na forma de personas e histórias de usuários

## Personas

Seguem demonstradas por meio dos quadros apresentados o levantamento feito das personas e suas características durante o processo de entendimento do problema:

|João Paiva| ![alt text](/docs/img/persona1.png) |
|-----------------------|-|
|Idade:|41|
|Ocupação:| Segurança de empresa privada e gesseiro. |
|Aplicativos:| WhatsApp, Instagram, LinkedIn, Aplicativos de bancos. |
|Motivações | Trabalhar visando proporcionar uma boa qualidade de vida para a família. |
|Frustrações | Não conseguir entregar uma obra dentro do prazo. |
|Hobbies | Gosta de ler, Ouvir música |

|Ricardo Ornelas| ![alt text](/docs/img/persona2.png) |
|-----------------------|-|
|Idade:|39|
|Ocupação:| Film Maker, Criador de conteúdo. |
|Aplicativos:| WhatsApp, Facebook, Instagram. |
|Motivações | Procura de staff qualificada para apoio em seus projetos.             |
|Frustrações | Falta de oportunidades para iniciar sua carreira. |
|Hobbies | Aprimorar o conhecimento em sua área de atuação. |

|Gabriel Gamber|  ![alt text](/docs/img/persona3.png) |
|-----------------------|-|
|Idade:|22|
|Ocupação:| Técnico em Informática. |
|Aplicativos:| WhatsApp, Instagram, Twitch, Youtube, Discord  |
|Motivações | Entregar ao cliente o resultado que ele mesmo gostaria de receber.    |
|Frustrações | Sentir que seu trabalho não está sendo bem feito. |
|Hobbies | Assistir séries , jogar jogos online |

|Heloísa Pimenta| ![alt text](/docs/img/persona4.png) |
|-----------------------|-|
|Idade:|25|
|Ocupação:| Cuidadora de Idosos, acompanhante hospitalar e estudante de Enfermagem.  |
|Aplicativos:| WhatsApp, Instagram, TikTok, Youtube. |
|Motivações | Crescer como profissional da saúde. |
|Frustrações | Sentir que seu trabalho não está sendo bem feito. |
|Hobbies | Praticar exercícios físicos, ler. |

|Maria Gomes | ![alt text](/docs/img/persona5.png) |
|-----------------------|-|
|Idade:|24|
|Ocupação:| Designer de interiores e empresaria. |
|Aplicativos:| WhatsApp, Instagram, TikTok. |
|Motivações |  Crescer sua empresa e maximizar seus lucros.  |
|Frustrações | Falta de resultados expressivos na busca de mão de obra qualificada.     |
|Hobbies | Academia, Maquiagem. |

> - [Imagens das personas retiradas do site](https://br.freepik.com/)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`         |PARA ... `MOTIVO/VALOR`                               |
|--------------------|--------------------------------------------|------------------------------------------------------|
|João Paiva         |Encontrar clientes de forma rápida e objetiva                        |Prestar seus serviços com mais tranquilidade afim de complementar sua renda       |
|Ricardo Ornelas      |Estabelecer conexões com outros profissionais afim de trocar ideias sobre a execução dos serviços                           |Encontrar procedimentos visando otimizar o tempo total de uma obra|
|Gabriel Gamber        |Encontrar pessoas e estabelecimentos que buscam serviços de qualidade        |Ampliar suas experiências e obter mais resultados satisfatórios  |
|Heloísa Pimenta       |Sentir satisfação ao ver pessoas que passaram sob seus cuidados recuperadas e com qualidade de vida           |Retribuição moral e pessoal
|Maria Gomes        |Localizar mais pessoas necessitadas de cuidados específicos e atenção hospitalar          |Ajudar mais pessoas, obter mais experiências e contatos                  |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – LOGIN DO USUÁRIO

![Processo 1](img/jobs-processo1.png)

### Processo 2 – GERENCIAMENTO DO PERFIL

![Processo 2](img/jobs-processo2.png)

### Processo 3 – ANÚNCIO DE SERVIÇOS

![Processo 3](img/jobs-processo3.png)

### Processo 4 – SOLICITAÇÃO DO CONTRATANTE

![Processo 4](img/jobs-processo4.png)

### Processo 5 - SOLICITAÇÃO DE SERVIÇO

![Processo 5](img/jobs-processo5.png)

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
|RF-001| O usuário deve conseguir cadastrar uma conta na aplicação móvel. | ALTA | 
|RF-002| O usuário cadastrado deve conseguir fazer o login em sua conta.   | ALTA |
|RF-003| O usuário deve conseguir editar informações do seu perfil.   | MÉDIA |
|RF-004| O anunciante deve conseguir publicar serviços na aplicação móvel.   | ALTA |
|RF-005| O anunciante deve conseguir informar valores do seu serviço.  | ALTA |
|RF-006| O usuário deve conseguir buscar por serviços na aplicação.   | ALTA |
|RF-007| O usuário deve conseguir buscar por serviços vinculados a um determinado anunciante.   | MÉDIA |
|RF-008| O anunciante deve conseguir decidir o meio de comunicação com o usuário referente ao serviço publicado. 	   | ALTA |
|RF-009| O anunciante deve conseguir contratar serviço.	   | ALTA |
|RF-010| A aplicação móvel deve notificar o anunciante sobre a solicitação de serviço.  | MÉDIA |
|RF-011| O Anunciante deve conseguir rejeitar um serviço caso não queira executa-lo.  | ALTA |
|RF-012| O Usuário deve conseguir avaliar e comentar nos serviços contratados da aplicação.  | BAIXA |
|RF-013| O usuário deve conseguir ver as avaliações e comentários de clientes nos serviços.  | BAIXA |
|RF-014| A aplicação móvel deve conter uma tela principal  | ALTA |
|RF-015| A aplicação móvel deve conter tela de login  | ALTA |



### Requisitos não Funcionais
Os requisitos não funcionais não estão relacionados diretamente com os serviços específicos do sistema oferecidos aos seus usuários. Eles estão relacionados com o nível de serviço esperado para o melhor funcionamento do software como um todo. O descritivo abaixo representa o escopo não funcional que a plataforma atenderá:

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|A aplicação deve retornar os resultados da busca de serviços em até 5 segundos.  | ALTA | 
|RNF-002|A aplicação deve verificar a disponibilidade do serviço requisitado pelo usuário antes de notificar o anunciante.   |  ALTA | 
|RNF-03|A aplicação deve ter ícones representando visualmente as funcionalidades.  | MÉDIA | 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01|A aplicação móvel deve ser feita apenas por membros do grupo do projeto.  |
|RE-02|A aplicação móvel deve ser desenvolvida apenas utilizando React Native |
|RE-03|O sistema deve ser responsivo |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama de Casos de Uso](/docs/img/DiagramaCasosdeUso.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

![Matriz de Rastreabilidade](/docs/img/Matriz.png)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico abaixo é uma ferramenta utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico do cronograma](/docs/img/Cronograma.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](/docs/img/RecursosHumanos.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](/docs/img/Custos.png)
