# Deployment no Cloudflare Pages

Este projeto é uma aplicação React/Vite estática. O destino recomendado é o
**Cloudflare Pages**, conectado ao repositório GitHub. O servidor Plesk não é
necessário para executar a aplicação.

## Estado atual da produção

- Repositório: `akillez01/TFA`
- Branch de produção: `main`
- Projeto Cloudflare Pages: `tfa`
- URL provisória do Pages: `https://tfa-eg3.pages.dev`
- Domínio principal: `https://tecnofoniaancestral.com`
- Domínio alternativo: `https://www.tecnofoniaancestral.com`
- Último commit publicado: `92d21ab`

O deploy do commit `92d21ab` foi concluído com sucesso no Pages. A ativação do
domínio personalizado depende da confirmação final em **Custom domains**.

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

Depois do primeiro deploy, no projeto `tfa`:

1. Abra o projeto em **Custom domains > Set up a custom domain**.
2. Informe `tecnofoniaancestral.com`.
3. Na etapa **Complete DNS setup**, use **Activate domain**. Quando o domínio
   já tiver um CNAME criado na zona Cloudflare, o Pages exibirá o registro
   existente e o novo registro; ambos devem apontar para o mesmo projeto.
4. Em **DNS > Records**, confirme estes registros:

   | Type | Name | Target | Proxy |
   | --- | --- | --- | --- |
   | CNAME | `@` | `tfa-eg3.pages.dev` | Proxied |
   | CNAME | `www` | `tfa-eg3.pages.dev` | Proxied |

5. Volte a **Custom domains** e use **Check DNS records**.
6. Aguarde o status **Active** e a emissão do certificado SSL.

O domínio foi comprado no próprio Cloudflare. Portanto, não é necessário
configurar nameservers em outro registrador; os nameservers atribuídos à zona
ficam disponíveis em **DNS > Settings**. Não crie registros A apontando para o
Plesk e não coloque nameservers (`*.ns.cloudflare.com`) como conteúdo de um
registro A ou CNAME.

### Erro 1014: CNAME Cross-User Banned

O erro 1014 aparece quando o CNAME para `*.pages.dev` existe, mas o domínio
ainda não foi associado ao projeto Pages. A correção é:

1. Abrir **tfa > Custom domains**.
2. Adicionar novamente `tecnofoniaancestral.com`, se necessário.
3. Na tela que compara **Existing record** e **New record**, confirmar o mesmo
   destino `tfa-eg3.pages.dev`.
4. Clicar em **Activate domain**.
5. Repetir a checagem em **Check DNS records**.

Não resolva o erro criando outro CNAME, trocando o destino por um IP ou
desativando o proxy.

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

## Fluxo de publicação

```bash
npm run lint
npm run build:prod
git add .
git commit -m "Descrição da alteração"
git push origin main
```

O Cloudflare Pages detecta o push em `main`, executa `npm run build:prod` e
publica o conteúdo de `dist`. Não é necessário enviar a pasta `dist` pelo
Plesk ou por FTP.

## Retirada do Plesk

O Plesk está fora do fluxo de publicação. Só cancele o serviço ou remova os
arquivos depois de confirmar:

- o domínio principal e o `www` carregam o projeto pelo Cloudflare;
- um refresh direto em qualquer âncora da aplicação não retorna 404;
- o HTTPS está ativo;
- o formulário e os links externos continuam funcionando.

## Diagnóstico rápido

| Sintoma | Verificação |
| --- | --- |
| Pages não publica | Conferir **Deployments** e o commit da branch `main`. |
| Domínio em `Verifying` | Conferir os CNAME e clicar em **Check DNS records**. |
| Erro 1014 | Usar **Activate domain** em **Custom domains**; não criar outro CNAME. |
| Site abre, mas uma rota retorna 404 | Confirmar `dist/_redirects` com `/* /index.html 200`. |
| `www` não abre | Criar o CNAME `www` para `tfa-eg3.pages.dev`. |
| DNS ainda não aparece | Aguardar propagação e limpar o cache DNS local/navegador. |
