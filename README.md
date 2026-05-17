# Coruja Comunicação — OiCoruja.com.br

Website institucional da [Coruja Comunicação](https://www.instagram.com/coruja.comunicacao), agência brasileira especializada em gestão de redes sociais e publicidade digital.

---

## Stack

- **Vite + React** — build tooling e estrutura de componentes
- **GSAP + ScrollTrigger** — animações de entrada e elementos flutuantes
- **CSS customizado** — design tokens via variáveis CSS, sem framework de UI
- **Instagram Embed** — portfólio carregado diretamente do Instagram via `embed.js`

---

## Identidade Visual

| Token | Valor | Uso |
|---|---|---|
| `--purple` | `#6341CE` | Cor primária — autoridade e sabedoria |
| `--salmon` | `#F59A8D` | Cor primária — alegria e humanização |
| `--purple-dark` | `#380E89` | Destaques e sombras |
| `--pink` | `#E84669` | Secundária |
| `--green` | `#01BB5B` | Secundária |
| `--lime` | `#91EA0F` | Secundária |
| `--black` | `#131214` | Texto e fundos escuros |

**Tipografia:**
- Display / Headlines: *Bringbold Nineties* (licença comercial — arquivos em `public/fonts/`)
- Corpo: *DM Sans* via Google Fonts

---

## Estrutura do Projeto

```
.
├── public/
│   ├── fonts/          # Bringbold Nineties (TTF + OTF)
│   ├── mascot.png      # Mascote Corujinha (extraído do brand guide)
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css       # Animação de entrada + mascote flutuante
│   │   ├── Services.jsx / .css   # Grid de serviços
│   │   ├── Portfolio.jsx / .css  # Embeds do Instagram
│   │   ├── Contact.jsx / .css    # CTA com WhatsApp e e-mail
│   │   ├── Footer.jsx / .css
│   │   └── FloatingShapes.jsx / .css  # Formas decorativas reutilizáveis
│   ├── App.jsx
│   ├── index.css       # Variáveis globais de design e reset
│   └── main.jsx
├── nginx.conf          # Config de produção para servidor próprio
├── package.json
└── vite.config.js
```

---

## Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`.

---

## Build de Produção

```bash
npm run build
# Arquivos estáticos gerados em dist/
```

O site é **100% estático** após o build — sem servidor Node.js em produção.

---

## Deploy no Servidor

### Primeira vez

```bash
git clone git@github.com:willdeberry/oicoruja.com.br.git /config/www/oicoruja.com.br
cd /config/www/oicoruja.com.br
npm ci && npm run build

sudo cp nginx.conf /config/nginx/site-confs/oicoruja.com.br
sudo nginx -t && sudo nginx -s reload
```

### Atualizações

```bash
cd /config/www/oicoruja.com.br
git pull && npm ci && npm run build
```

O nginx continua servindo o `dist/` — não precisa recarregar.

### nginx

O `nginx.conf` incluso configura:
- Redirect HTTP → HTTPS
- Redirect `www` → sem `www`
- SSL via `include /config/nginx/ssl.conf`
- Cache imutável de 1 ano em `/assets/` e `/fonts/` (Vite gera hashes nos nomes)
- Sem cache em `index.html` para que deploys surtam efeito imediatamente
- Fallback SPA (`try_files`) para rotas do React

---

## Contato

- **Instagram:** [@coruja.comunicacao](https://www.instagram.com/coruja.comunicacao)
- **WhatsApp:** +55 19 99831-5115
- **E-mail:** corujaccomunicacao@gmail.com
