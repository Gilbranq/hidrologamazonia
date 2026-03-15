# ═══════════════════════════════════════════════
# HidroLog Amazônia — GitHub Actions Deploy
# Deploy automático para GitHub Pages a cada push na branch main
# ═══════════════════════════════════════════════

name: Deploy HidroLog para GitHub Pages

on:
  push:
    branches:
      - main          # Dispara a cada push na branch principal
  workflow_dispatch:  # Permite rodar manualmente pelo painel do GitHub

permissions:
  contents: read
  pages: write
  id-token: write

# Evita deploys simultâneos
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    name: Build e Deploy
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    steps:
      # 1. Faz checkout do repositório
      - name: Checkout
        uses: actions/checkout@v4

      # 2. Configura o GitHub Pages
      - name: Setup Pages
        uses: actions/configure-pages@v5

      # 3. Faz upload dos arquivos estáticos
      #    O site é 100% estático — sem build necessário
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'    # Raiz do repositório (onde index.html está)

      # 4. Publica no GitHub Pages
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
