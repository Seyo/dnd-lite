# DnD - Lite — kampanjwiki

En Obsidian-vault publicerad via Quartz v4 till GitHub Pages på `seyo.github.io/dnd-lite`.

## Kommandon

- Lokal förhandsvisning: `npx quartz build --serve`
- Bygg utan serve: `npx quartz build`
- Deploya: pusha till `main` — GitHub Actions sköter resten

## Innehållsstruktur

```
content/
  Sessions/     — sessionsammanfattningar (Session 1.md, Session 2.md, …)
  Karaktärer/   — spelarkaraktärer med porträtt
  NPC/          — icke-spelarkaraktärer
  Platser/      — orter och landmärken
  Fraktioner/   — grupper och organisationer
  Uppdrag/      — aktiva och avslutade uppdrag och rykten

source-docs/    — originalfiler (PDFer från Notion) — publiceras EJ
```

## Konventioner

- Språk: svenska i innehållet, engelska i kod och konfiguration
- Interna länkar: wikilinks `[[Sidnamn]]`
- Döda NPC:er markeras med `†` i filnamnet
- Karaktärsporträtt flödar höger med CSS-klassen `.portrait-right`:
  ```html
  <div class="portrait-right">
  ![[karaktär.png]]
  </div>
  ```
- Frontmatter per sida: `title`, valfritt `tags`
- PDFer från Notion ligger i `source-docs/notion-exports/` och används som källmaterial när sessionssammanfattningar skrivs

## Källmaterial

Notion-exporterade PDFer finns i `source-docs/notion-exports/`. De innehåller råa sessionsanteckningar som Claude läser och omvandlar till wiki-sidor under `Sessions/`.

## Tema

Pergament (ljust läge) / mörk dungeonkänsla (mörkt läge). Typsnitt: Cinzel (rubriker), EB Garamond (brödtext).
