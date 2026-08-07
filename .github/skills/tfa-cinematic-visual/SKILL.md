---
name: tfa-cinematic-visual
description: Melhora o visual deste projeto React com linguagem cinematografica (scrollytelling, overlays, video em movimento, reveals, grain e cursor custom), preservando o conteudo existente e a navegacao por secoes. Use quando o pedido incluir melhorar visual, dar movimento a pagina, estilo imersivo, storytelling por scroll, hero premium ou referencia aos sites higgsfield.
---

# Skill: TFA Cinematic Visual

Use esta skill para evoluir o visual deste projeto sem trocar o conteudo base.

## Objetivo
- Dar vida e movimento ao site com narrativa visual cinematografica.
- Manter textos, secoes e identidade do projeto.
- Preservar SEO atual em [index.html](index.html).

## Stack recomendada
- `gsap` + `ScrollTrigger` para pin/scrub/reveals.
- `lenis` para smooth scroll.
- CSS com grain, vinheta e tipografia expressiva.

## Regras
1. Nao substituir o conteudo institucional existente; apenas melhorar apresentacao.
2. Manter um unico `h1` no topo.
3. Texto semantico no DOM (nunca desenhar texto em canvas).
4. `prefers-reduced-motion` obrigatorio com fallback estatico/simples.
5. Priorizar performance mobile (menos efeitos simultaneos e videos leves).

## Arquivos de referencia desta skill
- [Playbook de implementacao](references/implementation-playbook.md)
- [Checklist de performance e acessibilidade](references/quality-checklist.md)
- [Mapa de integracao no projeto](references/project-integration.md)
