# Viena Roleplay — Código da Rua

Este repositório mantém os capítulos de regras em `docs/` e prepara a versão pública do site em `site/`.

## O que está pronto
- Visual, estrutura de navegação e efeitos de fundo baseados no site antigo da Viena.
- Cursor personalizado desativado: sem imagem, bolinha ou rastro de tinta; o navegador usa o cursor normal do sistema.
- Pesquisa e navegação organizadas em 9 categorias e todos os capítulos Markdown deste projeto.
- As regras publicadas são geradas a partir dos arquivos em `docs/`, com seus textos preservados e os contêineres do VitePress convertidos para avisos legíveis no renderizador original.
- As letrinhas de fundo continuam ativadas.

## Publicação no GitHub Pages
1. Envie os arquivos desta pasta para a raiz do repositório `vienarpgg/central-de-regras-viena`, na branch `main`.
2. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
3. Abra **Actions** e confira a execução de **Deploy Viena Roleplay to GitHub Pages**.
4. O artefato publicado usa a pasta `site/`; o endereço esperado é `https://vienarpgg.github.io/central-de-regras-viena/`.

O workflow baixa o CSS, o JavaScript e os arquivos visuais originais do repositório público `alaska-ui/viena-regras1` durante a publicação para manter a aparência original e não depender desses arquivos remotamente em cada visita. Por isso, a primeira publicação precisa conseguir acessar esse repositório público.

## Atualização das regras
Edite os arquivos Markdown em `docs/`. O workflow executa `python gerar_regras.py` antes de publicar e sincroniza automaticamente `site/content/rules.json` e `site/rules.json`. Para testar a geração localmente, execute `python gerar_regras.py`.

## Cursor
A propriedade `cursor.enabled` em `site/content/site.json` permanece `false`. Isso remove a imagem personalizada, o ponto e o rastro de tinta. O efeito de partículas/letras no fundo continua ativo de forma independente.
