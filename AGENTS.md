# AGENTS.md

## Objetivo
Este projeto é um site React + TypeScript (Vite) de página única para o coletivo Tecnofonia Ancestral.
Priorize mudanças seguras, pequenas e consistentes com a estética e conteúdo em português.

## Comandos essenciais
- Instalar dependências: `npm install`
- Desenvolvimento local: `npm run dev`
- Lint: `npm run lint`
- Build padrão: `npm run build`
- Build de produção: `npm run build:prod`
- Limpar e build de produção: `npm run build:clean`
- Preview local do build: `npm run preview`
- Script de deploy (build): `./deploy.sh`

## Fluxo de validação para mudanças de código
1. Rode `npm run lint`.
2. Rode `npm run build:prod`.
3. Se houver mudança visual relevante, valide no `npm run dev`.

## Arquitetura rápida
- Entrada da aplicação: [src/main.tsx](src/main.tsx)
- Composição da página (ordem das seções): [src/App.tsx](src/App.tsx)
- Seções reutilizáveis: [src/components](src/components)
- Estilos globais Tailwind: [src/index.css](src/index.css)
- Tema (cores, fontes, animações): [tailwind.config.js](tailwind.config.js)

## Convenções do projeto
- UI construída majoritariamente com classes utilitárias Tailwind nos componentes.
- Ícones vindos de `lucide-react`; prefira manter esse padrão.
- Preserve conteúdo e tom em português nas cópias de interface.
- Evite criar abstrações desnecessárias: prefira consistência com os componentes existentes.

## Guardrails de deploy e build
- O build é estático (sem runtime Node.js no servidor).
- Não alterar `base: './'` em [vite.config.ts](vite.config.ts) sem justificar, pois isso mantém os assets compatíveis com subpastas e o histórico de deploy.
- Rotas SPA em produção usam [public/_redirects](public/_redirects) no Cloudflare Pages; preserve [public/.htaccess](public/.htaccess) enquanto a transição do Plesk não estiver concluída.
- Antes de orientar deploy, consulte [DEPLOYMENT.md](DEPLOYMENT.md).

## Pontos de atenção funcionais
- Navegação é por âncoras (`#home`, `#about`, etc.); mantenha IDs e links sincronizados.
- Formulário de contato atual não integra backend; mudanças devem deixar claro se continuam front-only.
- Várias imagens são externas; considere fallback/robustez ao alterar mídia.

## Referências
- Scripts e dependências: [package.json](package.json)
- Build e chunking: [vite.config.ts](vite.config.ts)
- Regras de lint: [eslint.config.js](eslint.config.js)
- Guia de deploy: [DEPLOYMENT.md](DEPLOYMENT.md)
- Script de deploy: [deploy.sh](deploy.sh)
