# Programação de Funcionalidades
Representação de tudo que já foi implementado e ideias que estão sendo desenvolvidas pelo grupo para a aplicação. Usando o VS Code, cada componente do grupo vem desenvolvendo, em diferentes branches, sua tela.

## Tela de Cadastro (Vinicius)

Na tela de cadastro, é usado o useState para armazenar os valores dos campos do formulário, como email, nome, CPF, senha, telefone, etc. O useEffect é usado para criar a tabela de usuários no banco de dados assim que a tela é renderizada. A função validar é chamada antes de salvar os dados do usuário no banco de dados e verifica se todos os campos foram preenchidos corretamente. A função salvar é responsável por salvar os dados do usuário no banco de dados.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/f3024ac8-22df-48a5-bae8-87315aee8186)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/7a6a73a8-d88f-426e-9db9-243341056013)

Podemos ver que todos os campos são obrigatórios e quando não preenchidos ou preenchidos de maneira incorreta o usuário recebe a mensagem de erro.

![ezgif com-video-to-gif (3)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/7058bc71-ae4f-421f-adb0-265ff675ca9e)


Já na imagem abaixo, é possível ver o cadastro sendo feito com sucesso. Com informações do usuário indo para o banco de dados. E em seguida, usuário volta para a tela de Login e seus dados no tela de Cadastro são limpos.

![ezgif com-video-to-gif (4)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/9960410a-e978-48b3-beb9-051c7de29370)

## Tela de Login (Vinicius)

Na tela de login, é utilizado um useState para armazenar os valores dos campos de email e senha. A função entrar é chamada ao pressionar o botão de login e verifica se os campos foram preenchidos corretamente. Em seguida, ela chama a função buscarUsuario do arquivo UsuarioDB.js para verificar se as credenciais estão corretas. Se o usuário for encontrado, a tela é redirecionada para a tela principal. Se não for encontrado, aparece uma mensagem de erro informando que informações não são válidas.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/106fa4f6-6552-477c-ad0b-a019120c2c42)

Abaixo, campo de senha não foi preenchido, e mensagem de erro recebida.

![login-fail)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/44e2d709-4354-4783-b595-a2a6090489ee)

É possível ver primeiro a mensagem de erro pelo preenchiemtno do campo da senha errado, após usuários inserir dados corretos, o login sendo feito com sucesso (sem caracteres no campo de senha por proteção do iphone na gravação de tela). Login encaminha o usuário para a tela principal.

![login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/801400fb-c591-438f-909d-78013bd28c29)

### UsuarioDB (Vinicius)

O arquivo UsuarioDB.js contém funções relacionadas ao banco de dados SQLite. A função criarTabelaUsuarios é usada para criar a tabela de usuários se ela ainda não existir. A função salvarUsuario é responsável por inserir um novo usuário no banco de dados. A função getCadastroUsuarios é usada para recuperar todos os usuários cadastrados no banco de dados. E a função buscarUsuario é usada para buscar um usuário específico pelo email e senha.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/6490aad7-3dfd-4cb0-82f7-9ccc89fad328)


## Tela de Início (Crislaine)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/60985c83-f6ce-4a23-a314-dd7de3e4f8f0)

Após fazer login, usuário chega na tela principal, com opções de navegar para outras telas clicando em ícones da aba inferior. Tela de Início possui serviços cadastrados e barra de pesquisa para procurar esses serviços no banco de dados.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/2d53d12c-6aaf-41bc-b893-9fb97b17cb5e)

![Busca](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/3d6788a0-64f6-4c3e-800d-3da1920b93dc)


## Tela de Cadastro de Serviços (Alisson)

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

### ServicoDB (Vinicius)

![ServicoDB](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-jobs/assets/103579574/810b73b0-8322-4778-85ec-928dfc6f4ddf)

Banco de dados no arquivo ServicoDB, usando o SQLite. Recebe os serviços cadastrados.

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





