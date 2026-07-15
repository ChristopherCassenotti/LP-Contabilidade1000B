# 1000B Assessoria Contábil

Landing page institucional desenvolvida para apresentar a **1000B Assessoria Contábil**, seus serviços, áreas de atuação, diferenciais e formas de contato.

O projeto foi construído com foco em uma experiência profissional, responsiva e objetiva, conduzindo o visitante desde a apresentação da empresa até o contato direto pelo WhatsApp.

## Objetivo do projeto

- Apresentar a empresa e seu posicionamento;
- Explicar os principais serviços contábeis oferecidos;
- Destacar especialidades e áreas de atuação;
- Reforçar a importância da segurança fiscal e contábil;
- Esclarecer dúvidas frequentes dos visitantes;
- Facilitar o contato com a equipe;
- Direcionar potenciais clientes para o WhatsApp.

## Principais seções

- **Hero:** apresentação inicial, proposta de valor e chamada para contato;
- **Sobre:** informações institucionais e apresentação da empresa;
- **Serviços:** visão geral das soluções contábeis oferecidas;
- **Especialidades:** destaque para áreas específicas de atendimento;
- **Segurança fiscal:** conteúdo sobre organização, prevenção e conformidade tributária;
- **Quando procurar uma assessoria:** situações em que o suporte contábil se torna necessário;
- **FAQ:** respostas para dúvidas frequentes;
- **CTA final:** chamada direta para falar com a equipe;
- **Rodapé:** informações institucionais, navegação e contato.

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript
- CSS
- HTML

## Estrutura do projeto

```text
public/
└── assets/
    ├── fonts/
    ├── equipe.JPG
    ├── globo.png
    ├── leao.png
    ├── logo-1000b.png
    └── person.png

src/
├── components/
│   ├── layout/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── HeroVisual.jsx
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── FAQ.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Specialties.jsx
│   │   ├── TaxSafety.jsx
│   │   └── WhenToContact.jsx
│   │
│   └── ui/
│       ├── Container.jsx
│       ├── Icons.jsx
│       ├── SectionHeading.jsx
│       └── WhatsAppButton.jsx
│
├── data/
│   └── siteContent.js
│
├── hooks/
│   └── useActiveSection.js
│
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## Organização dos componentes

O projeto foi dividido em grupos para facilitar a manutenção e a reutilização dos elementos.

### `components/layout`

Componentes responsáveis pela estrutura geral da página, como cabeçalho, rodapé e composição visual do hero.

### `components/sections`

Cada arquivo representa uma seção completa da landing page. Essa divisão facilita alterações no conteúdo, na ordem das seções e na estrutura da página.

### `components/ui`

Elementos reutilizáveis da interface, como container, títulos de seção, ícones e botão de contato pelo WhatsApp.

### `data`

Arquivo responsável por centralizar os textos, informações e conteúdos exibidos no site.

### `hooks`

Hooks personalizados utilizados para controlar comportamentos específicos da interface, como a identificação da seção ativa durante a navegação.

## Conteúdo centralizado

Os textos e informações principais do site estão organizados no arquivo:

```text
src/data/siteContent.js
```

Manter o conteúdo separado dos componentes facilita atualizações futuras sem a necessidade de alterar diretamente a estrutura visual das seções.

## Como executar o projeto

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para visualização do projeto.

### 3. Gere a versão de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta:

```text
dist/
```

### 4. Visualize a versão de produção localmente

```bash
npm run preview
```

## Personalização

### Alterar textos

Edite o arquivo:

```text
src/data/siteContent.js
```

### Alterar imagens e logotipo

Substitua ou adicione os arquivos dentro de:

```text
public/assets/
```

Depois, atualize os caminhos utilizados nos componentes correspondentes.

### Alterar o WhatsApp

O botão reutilizável de contato está localizado em:

```text
src/components/ui/WhatsAppButton.jsx
```

As informações utilizadas pelo botão podem estar centralizadas em:

```text
src/data/siteContent.js
```

Ou em arquivos auxiliares dentro de:

```text
src/utils/
```

### Alterar cores e estilos

Os estilos globais podem ser ajustados no arquivo:

```text
src/index.css
```

Também verifique as classes utilizadas diretamente nos componentes JSX.

### Alterar a navegação

O cabeçalho pode ser editado em:

```text
src/components/layout/Header.jsx
```

O comportamento de identificação da seção ativa está em:

```text
src/hooks/useActiveSection.js
```

Ao adicionar uma nova seção, atualize os links de navegação e os identificadores utilizados no hook.

## Responsividade

A interface foi estruturada para se adaptar a diferentes tamanhos de tela, incluindo:

- Smartphones;
- Tablets;
- Notebooks;
- Monitores maiores.

Ao adicionar novos elementos, mantenha o comportamento responsivo e teste o site em diferentes resoluções.

## Acessibilidade

Ao realizar alterações, recomenda-se manter:

- Textos alternativos nas imagens;
- Hierarquia correta de títulos;
- Contraste adequado entre texto e fundo;
- Estados visíveis de foco;
- Navegação funcional por teclado;
- Botões e links com descrições claras;
- Áreas de clique adequadas para dispositivos móveis.

## Deploy

Após executar o comando de build, publique o conteúdo da pasta `dist` no serviço de hospedagem escolhido.

```bash
npm run build
```

Antes da publicação, verifique:

- Número e mensagem do WhatsApp;
- Informações institucionais;
- Serviços e especialidades;
- Links de navegação;
- Imagens e logotipo;
- Título e descrição da página;
- Funcionamento do formulário ou dos botões de contato;
- Responsividade em dispositivos móveis.

## Licença

Projeto desenvolvido para uso institucional da **1000B Assessoria Contábil**. A utilização, reprodução ou distribuição dos conteúdos e elementos visuais deve respeitar a autorização da empresa responsável.