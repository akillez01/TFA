# Guia de Deployment para Plesk

Este guia explica como preparar e enviar o projeto React para o Plesk.

## 📋 Pré-requisitos

- Node.js instalado
- Dependências do projeto instaladas (`npm install`)
- Acesso ao painel do Plesk

## 🚀 Processo de Build e Deployment

### 1. Executar o Build de Produção

```bash
# Opção 1: Usar o script automatizado
./deploy.sh

# Opção 2: Build manual
npm run build:clean
```

### 2. Verificar os Arquivos Gerados

Após o build, a pasta `dist` conterá:

- `index.html` - Arquivo principal da aplicação
- `assets/` - CSS e JavaScript otimizados
- `.htaccess` - Configurações do servidor

### 3. Upload para o Plesk

#### Via File Manager do Plesk:

1. Acesse o painel do Plesk
2. Vá em "Files" > "File Manager"
3. Navegue até o diretório público (`httpdocs` ou `public_html`)
4. Faça upload de todos os arquivos da pasta `dist`

#### Via FTP/SFTP:

```bash
# Exemplo usando rsync (substitua pelos seus dados)
rsync -avz dist/ usuario@seudominio.com:/var/www/vhosts/seudominio.com/httpdocs/
```

#### Via ZIP:

```bash
# Criar arquivo ZIP
zip -r website.zip dist/

# Fazer upload do ZIP e extrair no Plesk
```

### 4. Configurações no Plesk

#### Verificar configurações do Apache/Nginx:

- Certifique-se de que o `.htaccess` está funcionando
- Verifique se o mod_rewrite está habilitado
- Configure o documento raiz para apontar para onde você fez upload

#### Configurações de Node.js (se aplicável):

- Este é um build estático, não requer Node.js no servidor
- Apenas arquivos HTML, CSS e JS são necessários

## 🔧 Comandos Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build padrão
npm run build:prod   # Build otimizado para produção
npm run build:clean  # Limpa dist e faz build
npm run preview      # Preview do build localmente
./deploy.sh          # Script automatizado de deployment
```

## 📁 Estrutura da Pasta dist

```
dist/
├── index.html          # Página principal
├── .htaccess          # Configurações do servidor
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    └── vendor-[hash].js
```

## 🛠️ Solução de Problemas

### Rotas não funcionam (404)

- Verifique se o arquivo `.htaccess` foi enviado
- Confirme se o mod_rewrite está habilitado no servidor

### Arquivos CSS/JS não carregam

- Verifique as permissões dos arquivos (644)
- Confirme se a configuração `base: './'` está no vite.config.ts

### Performance

- O build inclui otimizações automáticas (minificação, compressão)
- Cache configurado para 1 ano em arquivos estáticos

## 📞 Suporte

Se encontrar problemas, verifique:

1. Logs do servidor no Plesk
2. Console do navegador para erros JavaScript
3. Configurações de DNS e SSL
