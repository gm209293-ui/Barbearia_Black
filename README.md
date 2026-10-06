# Barbearia Black

Template de site estático para barbearias, feito com HTML, CSS e JavaScript puro. Inclui apresentação dos serviços, galeria, contatos e formulário que prepara uma solicitação de agendamento pelo WhatsApp.

O formulário não verifica disponibilidade nem confirma horários. Ele prepara uma solicitação e abre o WhatsApp com a mensagem preenchida; a pessoa ainda precisa confirmar e enviar a mensagem no WhatsApp. A barbearia confirma a solicitação diretamente com o cliente.

## Demonstração comercial

A configuração inicial apresenta a **Barbearia Black** como uma demonstração visual, não como uma empresa real. Marca, serviços, preços, localização e horários são ilustrativos. Há um número de WhatsApp configurado em `script.js`: ao enviar o formulário, a página abre uma conversa com a solicitação preenchida, mas não envia a mensagem automaticamente; a pessoa ainda precisa confirmá-la e enviá-la no WhatsApp. Confirme o número de destino antes de apresentar ou publicar a demonstração. As fotos da galeria são imagens de referência servidas por Unsplash e Pexels. Substitua-as por imagens aprovadas pelo cliente antes de publicar um site comercial.

Ao converter a demonstração para um cliente real, revise `siteConfig.isDemo`, `siteConfig.business`, `siteConfig.seo`, `siteConfig.contact`, `siteConfig.structuredAddress`, `siteConfig.colors`, `siteConfig.services`, `siteConfig.images`, `siteConfig.texts` e `siteConfig.footer`. Verifique os dados com o cliente; não publique localização, contatos, preços ou alegações da demonstração como se fossem reais.

## Arquivos do projeto

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Estrutura semântica, metadados SEO e conteúdo inicial da página. |
| `style.css` | Identidade visual, componentes e regras responsivas. |
| `script.js` | Configuração da barbearia, conteúdo dinâmico, navegação, galeria e formulário. |
| `Barber.code-workspace` | Atalho opcional para abrir o projeto no VS Code. |

Não há dependências de instalação, framework, backend ou etapa de compilação.

## Instalação e execução local

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no VS Code ou no gerenciador de arquivos.
3. Abra `index.html` no navegador.

Para testar em um servidor local, use uma extensão de servidor estático do VS Code (por exemplo, Live Server) e inicie o `index.html`. Não é necessário executar `npm install` nem configurar variáveis de ambiente.

## Personalizar para um novo cliente

Na maioria dos projetos, edite somente:

1. **`script.js`**: atualize o objeto `siteConfig`, no início do arquivo. Ele controla marca, textos, contatos, SEO, endereço estruturado, cores, serviços, preços, imagens e rodapé.
2. **`style.css`**: altere estilos ou o favicon em `index.html` somente se o cliente precisar de uma identidade visual ou marca diferentes além das cores.
3. **`index.html`**: altere a estrutura apenas quando a página precisar de novas seções ou campos. Preserve os IDs usados pelo JavaScript, como `service-list`, `booking-form` e `gallery-figure`.

### Nome, slogan e textos

Edite `siteConfig.business.name`, `siteConfig.business.brandMark`, `siteConfig.business.monogram` e `siteConfig.business.slogan`. A descrição da empresa fica em `siteConfig.business.description`. Títulos ficam em `siteConfig.sectionTitles`; textos da interface, CTAs e textos de demonstração ficam em `siteConfig.texts`; o rodapé é configurado em `siteConfig.footer`. O marcador `{businessName}` é substituído automaticamente pelo nome da empresa nos textos que o utilizam.

Configure também `siteConfig.seo.title` e `siteConfig.seo.description` com um título e uma descrição adequados ao cliente. Esses valores atualizam o título da aba, a meta description, Open Graph, Twitter e os dados estruturados.

### Contatos e WhatsApp

Edite `siteConfig.contact`:

- `phoneDisplay`: número formatado para exibição.
- `phone`: número telefônico somente com dígitos, incluindo código do país e DDD. Um link `tel:` só é criado se o valor passar pela validação básica de comprimento.
- `whatsapp`: número de destino somente com dígitos, incluindo código do país e DDD (por exemplo, `55` + DDD + número). Não inclua `+`, espaços, parênteses ou hífens. Há um número configurado atualmente. O formulário prepara uma solicitação e abre `wa.me` com a mensagem preenchida; a pessoa precisa confirmar e enviar a mensagem no WhatsApp.
- `email`: e-mail de contato válido. Um link `mailto:` só é criado se o valor passar pela validação básica.
- `instagram` e `instagramHandle`: URL HTTPS do perfil e nome exibido. O link só aparece quando uma URL HTTPS válida está configurada.
- `address` e `hours`: endereço e horário apresentados na seção de contato. Substitua os valores “a configurar”.

O formulário não armazena nem envia dados para um servidor. Ele monta uma mensagem e abre `wa.me` em uma nova aba. A mensagem não é enviada automaticamente: a pessoa precisa confirmá-la e enviá-la no WhatsApp. O texto deixa claro que se trata de uma solicitação, sujeita à confirmação da barbearia.

### Endereço para Schema.org

O objeto `siteConfig.structuredAddress` controla os dados de endereço no Schema.org. Preencha com dados fornecidos pelo cliente:

```js
structuredAddress: {
  streetAddress: "Rua e número",
  addressLocality: "Cidade",
  addressRegion: "UF",
  postalCode: "CEP",
  addressCountry: "BR",
},
```

Enquanto `streetAddress` estiver vazio, o endereço é omitido dos dados estruturados. O texto de endereço visível é configurado separadamente em `siteConfig.contact.address`. Configure `siteConfig.seo.siteUrl` com a URL pública HTTPS do site somente após a publicação.

## Alterar cores

Edite as propriedades de `siteConfig.colors` no início de `script.js`. O idioma de formatação e a moeda são definidos por `siteConfig.language` e `siteConfig.currency`. Use valores CSS válidos, preferencialmente hexadecimais para cores sólidas:

```js
colors: {
  background: "#10100f",
  surface: "#181817",
  surfaceRaised: "#20201e",
  text: "#f4f1eb",
  muted: "#b7b2a8",
  accent: "#c9a45c",
  accentLight: "#e2c47f",
  border: "rgb(226 196 127 / 18%)",
},
```

As cores principais são aplicadas às propriedades CSS `--color-*`. Revise o contraste de texto, controles, links e estados de foco após mudar a paleta. Algumas cores de fundo e texto de botões estão definidas diretamente em `style.css`; ajuste-as lá se a nova identidade exigir isso.

## Alterar serviços e preços

Edite a lista `siteConfig.services`. Cada serviço possui:

- `name`: nome mostrado no card e no formulário;
- `price`: preço numérico em reais, sem símbolo ou separador (por exemplo, `40` ou `39.90`);
- `description`: descrição do serviço.

```js
services: [
  { name: "Corte", price: 40, description: "Descrição do serviço." },
  { name: "Barba", price: 30, description: "Descrição do serviço." },
],
```

Os cards e as opções do seletor do formulário são gerados a partir dessa lista. Ao remover ou renomear serviços, confira o resultado no navegador.

## Trocar imagens

Edite `siteConfig.images.gallery`, uma lista de imagens com `src`, `alt` e `caption`. A imagem principal fica em `siteConfig.images.hero`:

```js
gallery: [
  {
    src: "images/fachada.webp",
    alt: "Fachada da barbearia durante o dia",
    caption: "Entrada da barbearia.",
  },
],
```

Coloque imagens próprias em uma pasta do projeto, como `images/`, e use caminhos relativos ao `index.html`; ou use uma URL HTTPS autorizada pelo cliente. O JavaScript aceita apenas imagens locais/da mesma origem, HTTPS e o SVG de exemplo embutido; origens inseguras são descartadas. Prefira WebP ou AVIF, imagens comprimidas e texto alternativo que descreva a imagem.

Para a imagem de compartilhamento em redes sociais, configure `siteConfig.seo.socialImage` com uma URL HTTPS pública e absoluta. Ela é independente da galeria porque os robôs de redes sociais podem não executar JavaScript. Configure-a após publicar a imagem em um endereço público.

## Publicar na Vercel

### Pelo painel da Vercel

1. Crie um repositório GitHub e envie os arquivos do projeto.
2. Entre na Vercel e escolha **Add New → Project**.
3. Importe o repositório.
4. Como é um site estático sem build, deixe o preset como **Other** e não informe comandos de build ou instalação.
5. Se solicitado, defina a pasta raiz como a pasta que contém `index.html`.
6. Clique em **Deploy** e aguarde a URL de publicação.
7. Abra a URL em computador e celular e teste navegação, imagens, links e formulário.
8. Depois de confirmar o domínio definitivo, atualize `siteConfig.seo.siteUrl` e `siteConfig.seo.socialImage` com URLs HTTPS públicas e envie uma nova versão.

Cada envio para a branch conectada ao projeto pode iniciar uma nova publicação automática. Confirme a configuração de domínio e branch diretamente no painel da Vercel.

### Enviar o projeto ao GitHub pela primeira vez

Se a pasta ainda não for um repositório Git, abra um terminal nela e execute:

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Adiciona template de site para barbearia"
git branch -M main
git remote add origin https://github.com/USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

Substitua `USUARIO` e `NOME-DO-REPOSITORIO` pelos valores do seu repositório. Não adicione senhas, tokens, credenciais, dados de acesso ou informações privadas do cliente ao código ou ao GitHub.

Para publicar atualizações depois de configurar o repositório remoto:

```bash
git add index.html style.css script.js README.md
git commit -m "Atualiza site da barbearia"
git push
```

Inclua imagens locais na lista de `git add` quando fizer parte da entrega. Revise os arquivos antes de enviar; não versionar credenciais ou arquivos privados.

## SEO, acessibilidade e validação antes da entrega

- O HTML define idioma `pt-BR`, viewport, título, descrição, Open Graph, Twitter Card, favicon e landmarks semânticos.
- O JavaScript gera dados estruturados Schema.org do tipo `Barbershop`; telefone, endereço, imagem social e URL só são incluídos quando configurados.
- Imagens da galeria recebem texto alternativo, dimensões e carregamento tardio.
- O formulário possui labels, campos obrigatórios e mensagens acessíveis.
- A navegação inclui atalho para o conteúdo principal, foco visível e menu móvel. Respeita a preferência por movimento reduzido nas animações.
- Verifique o HTML, CSS e JavaScript no navegador e revise os dados estruturados antes de publicar. Os metadados gerados no cliente podem não ser lidos por robôs sociais que não executam JavaScript; por isso, a imagem social, o título e a descrição também têm valores iniciais no HTML.

## Checklist final antes de entregar

- [ ] Nome, slogan, textos, títulos e direitos autorais estão corretos.
- [ ] SEO title, meta description, URL pública e imagem social estão configurados.
- [ ] Endereço e horários correspondem aos dados aprovados pelo cliente.
- [ ] Telefone, e-mail, Instagram e WhatsApp foram verificados; nenhum link de demonstração permanece.
- [ ] O número do WhatsApp inclui país e DDD, e o pedido explica que o horário depende de confirmação.
- [ ] Serviços, preços e descrições foram conferidos com o cliente.
- [ ] Imagens têm permissão de uso, carregam corretamente e possuem textos alternativos descritivos.
- [ ] Cores mantêm contraste legível; links, botões e campos têm estados de foco visíveis.
- [ ] Teste de navegação por teclado, menu móvel, links internos e botão de agendamento foi concluído.
- [ ] Teste o layout em larguras móveis, incluindo 320 px, e confirme que não há rolagem horizontal indesejada.
- [ ] Campos obrigatórios e data anterior à atual são rejeitados; o link do WhatsApp foi conferido sem enviar uma mensagem real de teste.
- [ ] Console do navegador está sem erros e não há requisições externas inesperadas.
- [ ] Repositório não contém credenciais, tokens, informações privadas ou arquivos de trabalho que não devam ser publicados.
- [ ] Publicação na Vercel foi aberta e conferida em desktop e celular.
