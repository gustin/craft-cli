# Changelog

## 0.7.0

- Show folder breadcrumbs on `read` and `search` output
- Case-insensitive search by default via `(?i)` regex prefix

## 0.6.0

- Consolidate `grep` into `search --doc` for single search interface
- Title-only search with `--title` flag
- Context lines with `-C` for block-level search

## 0.5.1

- Use full binary path in skills instead of assuming PATH
- Rename marketplace to gustin-marketplace

## 0.5.0

- Rasterize mermaid diagrams to PNG via sharp (Craft doesn't inline SVGs)
- Themed rendering with 15 beautiful-mermaid color themes
- Flatten CSS variables and color-mix() to static hex before rasterizing
- Default theme: catppuccin-mocha, configurable via `--theme`
- Fix block search API field names (.blockId not .id)
- Retina 2x PNG output for crisp rendering
- Marketplace.json for permanent plugin install

## 0.4.0

- Package as Claude Code plugin with workspace, authoring, and render skills
- SessionStart hook adds CLI to PATH via CLAUDE_ENV_FILE
- Surface API errors on body writes in `craft create`
- Corrected rich formatting color reference for Craft REST API

## 0.3.0

- Render mermaid diagrams from `.mmd` files to ASCII and SVG
- Upload rendered SVGs to Craft docs with marker-based positioning
- Node helper via beautiful-mermaid for both output formats
- Restructure README with prose headings and piping examples

## 0.2.0

- Move docs between folders with `craft mv`
- Search, delete, and move blocks within docs
- Collections CRUD: schema, items, add, update, remove

## 0.1.0

- Core read/write commands: folders, docs, search, read, create, append, update, delete
- Sort, filter by date, folder resolution by name
- Upload files and images via stdin
- Folder management: mkdir, mvfolder, rmfolder
- Daily notes and task listing
