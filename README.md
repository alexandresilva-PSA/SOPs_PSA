# Manuais PSA Elevate

Documentação unificada das ferramentas do sistema PSA Elevate, hospedada no GitHub Pages.

## 📚 Manuais Disponíveis

| Manual | Descrição | Versão |
|--------|-----------|--------|
| [Consulta de XMLs](manuais/consulta-xmls/) | Pesquisa e exportação de documentos fiscais | 3.0 |
| [EFD ICMS/IPI](manuais/efd-icms/) | Consulta e análise de arquivos SPED Fiscal | 1.0 |
| [EFD Contribuições](manuais/efd-contribuicoes/) | Consulta e exportação PIS/COFINS | 2.0 |
| [DIFAL Inteligente](manuais/difal-inteligente/) | Auditoria de diferencial de alíquotas | 1.0 |

## 🚀 Como Adicionar um Novo Manual

1. **Criar pasta** em `manuais/nome-do-manual/`
2. **Criar arquivo** `index.md` com o frontmatter:
   ```yaml
   ---
   layout: manual
   title: "Nome do Manual"
   versao: "1.0"
   ---
   ```
3. **Adicionar imagens** na pasta `imagens/`
4. **Registrar** no arquivo `_data/manuais.yml`
5. **Commit e push** - GitHub Pages faz o build automaticamente

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
bundle install

# Rodar servidor local
bundle exec jekyll serve

# Acessar em http://localhost:4000/psa-manuais/
```

## 📁 Estrutura do Projeto

```
psa-manuais/
├── _config.yml           # Configuração Jekyll
├── _layouts/
│   └── manual.html       # Template dos manuais
├── _includes/
│   ├── header.html       # Cabeçalho PSA
│   ├── sidebar.html      # Sumário navegável
│   └── admin-toolbar.html
├── _data/
│   └── manuais.yml       # Metadados dos manuais
├── assets/
│   ├── css/style.css     # Estilos unificados
│   └── js/               # Scripts compartilhados
├── manuais/
│   └── {nome}/
│       ├── index.md      # Conteúdo em Markdown
│       └── imagens/      # Screenshots
└── index.html            # Hub central
```

## 📝 Licença

Uso interno PSA Digital.
