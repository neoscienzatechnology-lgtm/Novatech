# Landing Page - Escola de Tecnologia

Landing page estática moderna e tecnológica para a Escola de Tecnologia, inspirada no estilo visual da FIAP.

## 📋 Sobre o Projeto

Esta é uma landing page desenvolvida com HTML, CSS e JavaScript puro, apresentando:

- **Hero Section**: Seção inicial impactante com chamada para ação
- **Sobre a Escola**: Apresentação dos diferenciais e metodologia
- **Cursos/Trilhas**: Showcase dos principais cursos oferecidos
- **Depoimentos**: Feedback de alunos (placeholder)
- **Call to Action**: Formulário de inscrição final

## 🎨 Design

O design segue uma estética moderna e tecnológica com:

- Cores vibrantes e gradientes (rosa, roxo, azul, cyan)
- Tipografia futurista (Space Grotesk e Inter)
- Elementos visuais tecnológicos (orbs, grid pattern, glassmorphism)
- Animações suaves e interativas
- Layout responsivo para todos os dispositivos

## 🚀 Como Visualizar Localmente

1. Clone o repositório ou navegue até a pasta:
```bash
cd frontend/landing-page
```

2. Abra o arquivo `index.html` diretamente no navegador:
   - **Windows**: Duplo clique no arquivo ou use `start index.html` no cmd
   - **macOS**: `open index.html` no terminal
   - **Linux**: `xdg-open index.html` no terminal

Ou use um servidor local (recomendado):

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (npx)
npx serve

# VS Code Live Server
# Clique direito no index.html > "Open with Live Server"
```

Acesse: `http://localhost:8000`

## 📦 Estrutura de Arquivos

```
frontend/landing-page/
├── index.html       # Estrutura HTML da página
├── styles.css       # Estilos CSS modernos
├── script.js        # Interatividade JavaScript
└── README.md        # Este arquivo
```

## 🌐 Publicar no GitHub Pages

### Método 1: Via Interface do GitHub (Mais Fácil)

1. **Acesse as Configurações do Repositório**
   - Vá para o repositório no GitHub
   - Clique em **Settings** (Configurações)

2. **Configure o GitHub Pages**
   - No menu lateral esquerdo, clique em **Pages**
   - Em **Source**, selecione:
     - Branch: `frontend-landingpage` (ou a branch desejada)
     - Folder: `/frontend/landing-page`
   - Clique em **Save**

3. **Aguarde o Deploy**
   - O GitHub levará alguns minutos para publicar
   - A URL será exibida na página: `https://[username].github.io/[repo-name]/`
   - Acesse: `https://[username].github.io/[repo-name]/index.html`

### Método 2: Via GitHub CLI

```bash
# Certifique-se de estar na branch correta
git checkout frontend-landingpage

# Configure o GitHub Pages
gh repo edit --enable-pages --pages-branch frontend-landingpage --pages-path /frontend/landing-page

# Ou configure manualmente via navegador
gh browse --settings
```

### Método 3: Criar Branch gh-pages (Alternativa)

Se preferir ter uma branch dedicada apenas para a landing page:

```bash
# Criar branch órfã (sem histórico)
git checkout --orphan gh-pages

# Remover todos os arquivos
git rm -rf .

# Copiar apenas a landing page para a raiz
cp -r frontend/landing-page/* .

# Adicionar e commitar
git add .
git commit -m "Deploy landing page to GitHub Pages"

# Push para o GitHub
git push origin gh-pages

# Configurar no GitHub Settings > Pages
# Source: gh-pages branch / root folder
```

### Método 4: Mover para Raiz (Mais Simples)

Para ter a URL mais limpa (`https://username.github.io/repo-name`):

1. Copie os arquivos para a raiz do repositório:
```bash
cp frontend/landing-page/index.html ./
cp frontend/landing-page/styles.css ./
cp frontend/landing-page/script.js ./
```

2. Configure GitHub Pages:
   - Settings > Pages
   - Source: Branch `main` ou `frontend-landingpage` / `root` folder

## 🔧 Personalização

### Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-pink: #FF006E;
    --primary-purple: #8338EC;
    --primary-blue: #3A86FF;
    --accent-cyan: #06FFA5;
    --accent-yellow: #FFBE0B;
}
```

### Conteúdo

- **Hero Section**: Edite o título e descrição em `index.html` (linha ~50)
- **Cursos**: Adicione/edite cards de curso (linha ~200)
- **Depoimentos**: Atualize depoimentos dos alunos (linha ~350)
- **Footer**: Personalize links e informações (linha ~450)

### Fontes

As fontes são carregadas do Google Fonts:
- **Space Grotesk**: Títulos e headings
- **Inter**: Corpo do texto

Para usar fontes diferentes, altere o link no `<head>` do `index.html`.

## ✨ Funcionalidades JavaScript

- **Smooth Scroll**: Navegação suave entre seções
- **Mobile Menu**: Menu responsivo para dispositivos móveis
- **Scroll Effects**: Navbar muda ao rolar a página
- **Counter Animation**: Números das estatísticas animam ao aparecer
- **Form Validation**: Validação básica do formulário de inscrição
- **Parallax**: Efeito parallax nos elementos de fundo
- **Intersection Observer**: Animações ao aparecer na tela

## 📱 Responsividade

A landing page é totalmente responsiva e testada em:

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (375px - 480px)

## 🎯 Performance

Otimizações aplicadas:

- **Sem dependências externas** (exceto fontes do Google)
- **CSS puro** sem frameworks pesados
- **JavaScript vanilla** otimizado
- **Imagens SVG** para ícones (escaláveis e leves)
- **Lazy loading** para animações
- **Código minificável** para produção

## 🔍 SEO

Meta tags incluídas:

```html
<meta name="description" content="...">
<meta name="viewport" content="...">
```

Para melhorar o SEO, adicione:

- Open Graph tags para redes sociais
- Schema.org markup para cursos
- Sitemap.xml
- robots.txt

## 🐛 Solução de Problemas

### Fontes não carregam
- Verifique sua conexão com a internet
- As fontes são carregadas do Google Fonts

### Animações não funcionam
- Certifique-se de que JavaScript está habilitado
- Verifique o console do navegador (F12)

### Layout quebrado
- Limpe o cache do navegador (Ctrl+Shift+R)
- Verifique se todos os arquivos (HTML, CSS, JS) estão na mesma pasta

### GitHub Pages não atualiza
- Aguarde 5-10 minutos após o push
- Force refresh no navegador (Ctrl+Shift+R)
- Verifique em modo anônimo/privado

## 📝 Licença

Este projeto faz parte do repositório Escola de Tecnologia.

## 🤝 Contribuindo

Para contribuir com melhorias:

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📧 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

Desenvolvido com ❤️ para a Escola de Tecnologia
