#!/bin/bash

# Script de build para Cloudflare Pages
# Uso local: ./deploy.sh
# O deploy recomendado é automático pelo GitHub integrado ao Cloudflare Pages.

echo "🚀 Iniciando processo de build para o Cloudflare Pages..."

# Limpar pasta dist anterior
echo "🧹 Limpando pasta dist anterior..."
rm -rf dist

# Executar build de produção
echo "🔨 Executando build de produção..."
npm run build:prod

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo ""
    echo "📁 Arquivos gerados na pasta 'dist':"
    ls -la dist/
    echo ""
    echo "📋 O diretório 'dist' está pronto para o Cloudflare Pages."
    echo "   No painel, use Build command: npm run build:prod"
    echo "   e Build output directory: dist"
else
    echo "❌ Erro durante o build. Verifique os logs acima."
    exit 1
fi
