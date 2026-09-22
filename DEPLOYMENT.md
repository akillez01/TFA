# Deployment no Cloudflare Pages

Este projeto é uma aplicação React/Vite estática. O destino recomendado é o
**Cloudflare Pages**, conectado ao repositório GitHub. O servidor Plesk não é
necessário para executar a aplicação.

## Configuração do projeto no Cloudflare Pages

No Cloudflare Dashboard:

1. Acesse **Workers & Pages > Create application > Pages > Connect to Git**.
2. Selecione o repositório `akillez01/TFA` e a branch de produção (`main`).
3. Use estas configurações:

   | Campo | Valor |
   | --- | --- |
   | Framework preset | Vite |
   | Build command | `npm run build:prod` |
   | Build output directory | `dist` |
   | Root directory | `/` |
   | Node.js version | `20` ou superior |

4. Salve e faça o primeiro deploy.

O arquivo `public/_redirects` é copiado para `dist/_redirects` durante o build
e mantém o fallback das rotas da SPA no Cloudflare Pages. O arquivo
`public/.htaccess` pode permanecer no repositório para compatibilidade durante
a transição, mas não é usado pelo Cloudflare.

## Domínio personalizado e DNS

Depois do primeiro deploy:

1. Abra o projeto em **Custom domains > Set up a custom domain**.
2. Informe `tecnofoniaancestral.com` e também `www.tecnofoniaancestral.com`,
   caso o endereço com `www` seja desejado.
3. Em **DNS > Records**, confirme os registros solicitados pelo Cloudflare.
   Para um domínio gerenciado integralmente pelo Pages, o próprio painel
   orientará a criação dos CNAME necessários.
4. Aguarde a emissão do certificado SSL e teste os dois endereços antes de
   desligar o Plesk.

Não crie registros A apontando para o IP antigo do Plesk. Enquanto a
propagação DNS não terminar, mantenha o servidor antigo disponível para evitar
indisponibilidade.

## Build e teste local

```bash
npm install
npm run lint
npm run build:prod
npm run preview
```

O script `./deploy.sh` apenas limpa e gera o build de produção localmente. No
fluxo recomendado, cada push para a branch de produção dispara o deploy
automaticamente no Cloudflare Pages.

## Retirada do Plesk

Somente remova os arquivos ou cancele o plano do Plesk depois de confirmar:

- o domínio principal e o `www` carregam o projeto pelo Cloudflare;
- um refresh direto em qualquer âncora da aplicação não retorna 404;
- o HTTPS está ativo;
- o formulário e os links externos continuam funcionando.
