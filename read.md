# DeviceResourcesApp

Aplicação desenvolvida em React Native com Expo para integração com recursos nativos do dispositivo Android.

## Funcionalidades

- Solicitação de permissão para acesso à galeria;
- Seleção de uma imagem armazenada no dispositivo;
- Exibição da imagem selecionada na aplicação;
- Solicitação de permissão para acesso aos contatos;
- Leitura dos contatos armazenados no dispositivo;
- Exibição dos contatos em uma lista utilizando `FlatList`;
- Tratamento de situações em que o usuário não concede as permissões.

## Tecnologias utilizadas

- React Native
- Expo SDK 54
- JavaScript
- `expo-image-picker`
- `expo-contacts`

## Estrutura do projeto

```text
DeviceResourcesApp/
├── assets/
├── src/
│   └── components/
│       ├── ImagePickerComponent.js
│       └── ContactsComponent.js
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

## Requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- Expo CLI
- Expo Go instalado no dispositivo Android

## Instalação

Clone o repositório:

```bash
git clone https://github.com/luanagreys7/DeviceResourcesApp.git
```

Acesse a pasta do projeto:

```bash
cd DeviceResourcesApp
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

Inicie o servidor do Expo com:

```bash
npx expo start
```

Após iniciar o servidor, será exibido um QR Code no terminal.

Com o aplicativo Expo Go instalado no dispositivo Android, escaneie o QR Code para abrir o projeto.

## Permissões

O aplicativo solicita permissões para acessar recursos nativos do dispositivo.

No Android, foram configuradas as seguintes permissões:

- `READ_CONTACTS`
- `WRITE_CONTACTS`
- `READ_EXTERNAL_STORAGE`
- `WRITE_EXTERNAL_STORAGE`

As permissões são solicitadas durante a utilização dos recursos correspondentes.

Caso o usuário negue uma permissão, o aplicativo informa que o acesso foi negado por meio de uma mensagem na tela.

## Funcionalidade de galeria

A funcionalidade de galeria é implementada pelo componente `ImagePickerComponent`.

Ao selecionar a opção de seleção de imagem, o aplicativo:

1. Solicita a permissão para acessar a galeria;
2. Abre a galeria do dispositivo;
3. Permite que o usuário selecione uma imagem;
4. Armazena a URI da imagem selecionada;
5. Exibe a imagem selecionada na tela.

Caso a permissão seja negada, uma mensagem informativa é exibida ao usuário.

## Funcionalidade de contatos

A funcionalidade de contatos é implementada pelo componente `ContactsComponent`.

Ao utilizar a funcionalidade de contatos, o aplicativo:

1. Solicita permissão para acessar os contatos;
2. Obtém os contatos armazenados no dispositivo;
3. Recupera informações de telefone e e-mail;
4. Exibe os contatos utilizando FlatList;
5. Permite recarregar a lista de contatos;
6. Informa caso não sejam encontrados contatos.

Caso a permissão seja negada, uma mensagem informativa é exibida ao usuário.