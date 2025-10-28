<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center">
    <h1 align="center">USERS_REGISTRATION</h1>
</p>
<p align="center">
    <em><code>Interface de Usuário para o Gerenciamento de Dados em Escala</code></em>
</p>
<p align="center">
    <img src="https://img.shields.io/github/license/MarceloNobrega29/users_registration?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="licença">
    <img src="https://img.shields.io/github/last-commit/MarceloNobrega29/users_registration?style=default&logo=git&logoColor=white&color=0080ff" alt="ultimo-commit">
    <img src="https://img.shields.io/github/languages/top/MarceloNobrega29/users_registration?style=default&color=0080ff" alt="linguagem-principal">
    <img src="https://img.shields.io/github/languages/count/MarceloNobrega29/users_registration?style=default&color=0080ff" alt="contagem-linguagens">
</p>
<br>

## 🔗 Sumário

* [📍 Visão Geral](#-visão-geral)
* [✨ Funcionalidades](#-funcionalidades)
* [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
* [📁 Estrutura do Projeto](#-estrutura-do-projeto)
* [🚀 Primeiros Passos](#-primeiros-passos)
    * [☑️ Pré-requisitos](#☑️-pré-requisitos)
    * [⚙️ Instalação](#⚙️-instalação)
    * [🤖 Uso](#🤖-uso)
    * [🧪 Testes](#🧪-testes)
* [📌 Roteiro do Projeto](#-roteiro-do-projeto)
* [🔰 Contribuição](#-contribuição)
* [🎗 Licença](#-licença)
* [🙌 Agradecimentos](#-agradecimentos)

---

## 📍 Visão Geral

O projeto **USERS_REGISTRATION** é o **Frontend** construído em **React** para interagir com a **API-NODE** (serviço de *backend*).  
Ele oferece uma interface de usuário completa e responsiva para gerenciar registros de dados via requisições HTTP, garantindo uma experiência fluida para operações CRUD (*Criar, Ler, Atualizar e Deletar*).

---

## ✨ Funcionalidades

- **Gerenciamento de Usuários (CRUD):** Formulários para cadastro e interface para visualização, edição e exclusão de registros.  
- **Comunicação com API:** Serviço de conexão (`src/services/api.js`) configurado para o Backend **API-NODE**.  
- **Design Responsivo:** Layout otimizado para desktop e mobile.  
- **Desenvolvimento Moderno:** Utilização de componentes React para modularidade e manutenção simplificada.  

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição | Badge |
| :---: | :--- | :---: |
| **JavaScript** | Linguagem principal para lógica de *frontend*. | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **HTML5** | Estrutura das páginas. | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) |
| **CSS3** | Estilização e layout. | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) |
| **React** | Biblioteca para construção da interface. | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) |
| **Vite** | Ferramenta de build rápida para React. | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) |
| **ESLint** | Garantia de qualidade do código. | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) |

### Estatísticas do Projeto

| Estatística | Valor | Detalhes |
| :---: | :---: | :--- |
| **Linguagem Principal** | ![javascript 56.7%](https://img.shields.io/badge/JavaScript-56.7%25-yellow) | Lógica e componentes (React) |
| **Estilos** | ![css 31.2%](https://img.shields.io/badge/CSS-31.2%25-blue) | Estilização (CSS) |
| **Estrutura** | ![html 12.1%](https://img.shields.io/badge/HTML-12.1%25-orange) | Estrutura da página |
| **Licença** | ![license](https://img.shields.io/github/license/MarceloNobrega29/users_registration?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff) | |
| **Último Commit** | ![last commit](https://img.shields.io/github/last-commit/MarceloNobrega29/users_registration?style=default&logo=git&logoColor=white&color=0080ff) | |

---

## 📁 Estrutura do Projeto

```sh
└── users_registration/
    ├── README.md
    ├── eslint.config.js          # Configuração do ESLint
    ├── index.html                # Ponto de entrada do Frontend
    ├── package-lock.json
    ├── package.json              # Dependências do projeto (React, Vite)
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css               # Estilos globais
    │   ├── assets                # Recursos (imagens, ícones)
    │   ├── main.jsx              # Renderização inicial do React
    │   ├── pages                 # Páginas principais da aplicação
    │   │   └── Home/
    │   │       ├── style.css     # Estilos da página Home
    │   │       └── App.jsx       # Componente principal da Home
    │   └── services              # Módulos de serviço
    │       └── api.js            # Configuração de conexão com a API
    └── vite.config.js            # Configuração do Vite
```

---

## 🚀 Primeiros Passos

### ☑️ Pré-requisitos

- **Linguagem de Programação:** JavaScript  
- **Gerenciador de Pacotes:** npm (ou yarn/pnpm)  
- **API de Backend:** A **API-NODE** deve estar rodando e acessível.  
  Verifique o arquivo `src/services/api.js` para confirmar a URL correta do backend.  

---

### ⚙️ Instalação

**Clone o repositório:**
```bash
git clone https://github.com/MarceloNobrega29/users_registration
```

**Navegue até o diretório do projeto:**
```bash
cd users_registration
```

**Instale as dependências:**
```bash
npm install
```

---

### 🤖 Uso

**Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

O aplicativo será iniciado em modo de desenvolvimento, geralmente acessível em:  
👉 **http://localhost:5173**

---

### 🧪 Testes

**Execute os testes (se configurado):**
```bash
npm test
```

---

## 📌 Roteiro do Projeto

- [x] Task 1: <strike>Implementar o formulário de cadastro de usuário.</strike>  
- [ ] Task 2: Implementar a visualização e edição de registros.  
- [ ] Task 3: Adicionar notificação de sucesso/erro após operações na API.  

---

## 🔰 Contribuição

💬 **Junte-se às Discussões**  
🐛 **Reporte Issues**  
💡 **Envie Pull Requests**

