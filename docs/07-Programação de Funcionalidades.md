# Programação de Funcionalidades
Representação de tudo que já foi implementado e ideias que estão sendo desenvolvidas pelo grupo para a aplicação. Usando o VS Code, cada componente do grupo vem desenvolvendo, em diferentes branches, sua tela.

## Tela de Cadastro (Vinicius)
Podemos ver que todos os campos são obrigatórios e quando não preenchidos ou preenchidos de maneira incorreta o usuário recebe a mensagem de erro.

![cadastro](https://user-images.githubusercontent.com/103579574/236703168-28207bbb-2cd7-4edb-adfb-e15c156c0c7e.gif)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/8257ac7b-e0d9-43a2-9ab3-4b3798404f8a)

Já na imagem abaixo, é possível ver o cadastro sendo feito com sucesso. Com informações do usuário indo para o banco de dados. 

### Funcionalidade a ser implementada:
Após a mensagem de sucesso do serviço criado, retornar usuário de volta a Tela de Login

![cadastro-sucesso](https://user-images.githubusercontent.com/103579574/236703755-f85fdeff-33ef-404d-994a-06341f94d44d.gif)

Com a API rodando através do comando 'npm run start', o back-end do aplicativo é integrado e as informações podem ser salvas no banco de dados.

![API-rodando](https://user-images.githubusercontent.com/103579574/236705347-889317bc-6064-4298-aade-1273abc579e2.png)

Dados guardados no Banco de dados Myql.

![Mysql](https://user-images.githubusercontent.com/103579574/236705344-20680e1e-659d-4d76-83fd-6df92564770a.png)

## Tela de Login (Vinicius)
É possível ver o login feito com sucesso (sem caracteres no campo de senha por proteção do iphone na gravação de tela). Login encaminha o usuário para a tela principal, com opções de navegar para outras telas clicando em ícones da aba inferior. Usuário vai para tela de Início que será implementada com opções de serviços.

![login](https://user-images.githubusercontent.com/103579574/236705913-65a1d3dd-aa2c-42cc-83aa-a418462c84ae.gif)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/d8e7d176-694d-4dd0-9b49-67535c8a97ce)


## Tela de Busca de serviços (Crislaine)
Nessa tela, usuário pesquisa o serviço desejado. 

### Funcionalidade a ser implementada:
Busca do usuário deve retornar serviços cadastrados no banco de dados.

![busca](https://user-images.githubusercontent.com/103579574/236706231-92f8996d-552c-46ee-ae83-67ae51a01209.gif)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/4f42c789-8f80-49f9-a0b7-3240ccc01669)


## Tela de Cadastro de serviços (Alisson)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/fb940b92-347c-42ef-991c-8740c5e37f54)

O código acima é um componente React Native chamado CadastroServicos. Ele implementa um formulário de cadastro de serviços, onde o usuário pode preencher informações como nome, descrição, preço, localização e telefone.

O componente utiliza diversos componentes fornecidos pela biblioteca react-native para criar a interface do usuário, como View, TextInput, StyleSheet, TouchableOpacity, Text, Alert, KeyboardAvoidingView, e ScrollView. Além disso, ele também utiliza os componentes TextInputMask e Image fornecidos pelas bibliotecas react-native-masked-text e expo-image-picker, respectivamente.

O estado do componente é gerenciado por meio dos hooks useState. Existem vários estados definidos no componente, como nome, descricao, preco, localizacao, telefone e imagens. Os valores desses estados são atualizados por meio das funções setNome, setDescricao, setPreco, setLocalizacao, setTelefone e setImagens, respectivamente.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/6fd5753e-4b6f-41ed-a2d0-7a5256839b2b)

O componente utiliza o hook useEffect para executar um efeito colateral apenas uma vez, no momento em que o componente é montado. Esse efeito colateral cria uma tabela de serviços utilizando a função criarTabelaServicos do arquivo ../services/ServicoDB. Se a criação da tabela for bem-sucedida, a mensagem "Tabela de serviços criada com sucesso" é exibida no console. Caso contrário, um erro é exibido no console.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/ab59df16-e5cc-411a-879e-e49eaf0b3ca4)

A função handleCadastro é chamada quando o botão de cadastro é pressionado. Ela verifica se todos os campos obrigatórios estão preenchidos e, caso positivo, cria um objeto servicoCriado com os dados do serviço. Em seguida, a função salvarServico do arquivo ../services/ServicoDB é chamada para salvar o serviço no banco de dados. Se o serviço for salvo com sucesso, o usuário é navegado para a tela "ServicoCriado" com os detalhes do serviço.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/dbf408a6-2816-4c43-aaa9-9b124268457c)

A função handleSelecionarImagem é chamada quando o botão de seleção de imagem é pressionado. Ela solicita permissão de acesso à biblioteca de mídia e, se a permissão for concedida, abre a biblioteca de mídia por meio da função launchImageLibraryAsync do expo-image-picker. A imagem selecionada é adicionada ao estado imagens por meio da função setImagens.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/ca95c5c5-bca7-4ee6-a222-c44e52f8dffe)

A interface do usuário é definida dentro do retorno do componente. O componente KeyboardAvoidingView é usado para evitar que o teclado sobreponha o formulário em dispositivos iOS. O componente ScrollView é utilizado para permitir que o conteúdo do formulário seja rolado verticalmente. Os componentes TextInput, TextInputMask, TouchableOpacity e Text são usados para criar os campos de entrada, botão de cadastro e textos exibidos na tela.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/9b7dc741-4918-42e9-94e1-e94c198ad820)

Os estilos do componente são definidos utilizando o StyleSheet.create. Ele define estilos para o container principal, campos de entrada, container de imagens, imagens, botão e texto exibidos na tela.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/46a2338b-5cbc-4544-83e1-aa1df9b14657)

Acima podemos ver uma visão geral de como a tela é renderizada atualmente, demais funcionalidades serão implementadas, assim como alterações de estilo.

## Tela de Serviço Criado (Alisson)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/ba1cb76a-32f1-4277-a109-36bf46a3d96d)

O código acima é um componente de uma aplicação React Native chamado ServicoCriado. O código implementa um componente React Native para exibir informações de um serviço, permitir edição, exibir avaliações e comentários, além de permitir adicionar novos comentários. Foram importados vários componentes e ícones necessários para a interface, como View, Text, TouchableOpacity, StyleSheet, Alert e Ionicons. O componente é uma função que recebe as propriedades "route" e "navigation" como parâmetros. Foram definidos vários estados utilizando o hook useState. Os estados incluem isEditing (indicando se o usuário está editando), avaliacao (valor da avaliação), comentario (texto do comentário), e comentarios (lista de comentários).

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/b800435e-21de-4e1f-9e2f-f4ab096a209c) 

A função handleEdit é chamada quando o usuário deseja editar os dados. Ela define o estado isEditing como true.

A função handleSave é chamada quando o usuário conclui a edição, definindo isEditing como false e exibindo um alerta de sucesso.

A função handleContact exibe um alerta de contato com o nome do serviço. A renderização condicional do botão é baseada na propriedade "criador" do serviço. Se o criador for o "usuario_atual", o botão exibirá "Editar". Caso contrário, exibirá "Entrar em Contato".

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/8dbecef8-48c8-4180-8194-b7528b0a4ba8)

São exibidas estrelas que representam a avaliação. Ao clicar em uma estrela, a função handleRating é chamada, atualizando o estado de avaliacao e exibindo um alerta de sucesso.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/e74aed6d-3f29-4124-811e-8a49551c6c65)

Os comentários são exibidos em um loop utilizando a função map. Cada comentário exibe o texto, e se tiver uma resposta, exibe também. Há botões de ação para curtir o comentário e responder.

As funções handleReply e handleLike atualizam os comentários conforme necessário. Há um campo de texto onde o usuário pode digitar um novo comentário.

Ao pressionar o botão "Adicionar Comentário", a função handleComment é chamada, adicionando o novo comentário à lista de comentários e exibindo um alerta de sucesso.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/07c49b7a-1024-472c-908e-b5662e7cd54e)

Foram definidos estilos utilizando o StyleSheet.create para vários elementos da interface, como títulos, botões, caixas de comentários, etc.

O componente ServicoCriado é exportado para que possa ser utilizado em outros lugares da aplicação.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/100442612/6f154a76-1ddf-44ef-a51e-032bb8b81727)

Acima podemos ver uma visão geral de como a tela é renderizada atualmente, demais funcionalidades serão implementadas, assim como correção de erros e alterações de estilo.

## Tela de Perfil (Leonardo)

### Funcionalidade a ser implementada:
Será implementada informações do usuário e possibilidade de alterá-las.

![perfil](https://user-images.githubusercontent.com/103579574/236707213-ee5291be-c5dc-4aea-90a7-498d196d4682.jpeg)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/86bbb067-3c66-4be7-889b-2b0d96612abe)

## Tela de Exclusão de Serviço
Quando o usuário optar por excluir um serviço, será redirecionado para a tela de exclusão com os detalhes do serviço para que ele possa conferir e excluir.

![WhatsApp Image 2023-05-20 at 17 52 03](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/90863834/365d3e7d-139b-4f0f-afc8-9f12ab078d81)


![WhatsApp Image 2023-05-20 at 17 52 03 (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/90863834/1700f5e8-8cb8-4cfb-8687-9574bb24c1df)


![deletarServico](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/90863834/3e62d521-9cdd-447b-81ab-d4b3c66ea503)





