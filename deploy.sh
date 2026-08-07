#!/bin/bash

# Script de deployment para Plesk
# Uso: ./deploy.sh

echo "🚀 Iniciando processo de build para deployment no Plesk..."

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
    echo "📋 Próximos passos para deployment no Plesk:"
    echo "1. Faça upload de todos os arquivos da pasta 'dist' para o diretório público do seu domínio no Plesk"
    echo "2. Certifique-se de que o arquivo .htaccess foi enviado junto"
    echo "3. Verifique se as permissões dos arquivos estão corretas (644 para arquivos, 755 para diretórios)"
    echo ""
    echo "💡 Dica: Você pode comprimir a pasta dist em um arquivo .zip para facilitar o upload:"
    echo "   zip -r dist.zip dist/"
else
    echo "❌ Erro durante o build. Verifique os logs acima."
    exit 1
fi
