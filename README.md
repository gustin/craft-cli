# craft-cli

CLI for the Craft.do workspace API. Read, write, and manage docs from the terminal.

## Install

```bash
git clone https://github.com/gustin/craft-cli.git
cd craft-cli
mise install
mise trust
npm install
```

## Setup

Create `.mise.local.toml` with your Craft API credentials:

```toml
[env]
CRAFT_API_KEY = "pdk_your-key-here"
CRAFT_API_BASE = "https://connect.craft.do/links/YOUR_LINK/api/v1"
```

Get these from Craft Settings > API Connections.

## Usage

### Browse

List folders, search docs, read content.

```bash
craft folders
craft recent
craft docs --folder Business
craft docs --sort modified --since today
craft search "ontology"
craft search "TODO|FIXME" --folder Product
craft search "query" --title
craft search "pattern" --doc <docId>
craft read <docId>
craft read <docId> --meta
craft today
craft tasks
```

### Write

Create docs, append content, upload files. Pipe content via stdin.

```bash
craft create "title" --folder Product
craft append <docId>
craft update <blockId>
craft upload <docId>
craft mv <docId> Product
craft delete <docId>
```

### Blocks

Operate on individual blocks within a doc.

```bash
craft rmblock <blockId>
craft mvblock <blockId> --to <docId>
```

### Collections

Manage structured data in Craft collections.

```bash
craft collections
craft collection:schema <colId>
craft collection:items <colId>
craft collection:add <colId> "title"
craft collection:update <colId> <itemId>
craft collection:rm <colId> <itemId>
```

### Folders

Create, move, and remove folders.

```bash
craft mkdir "name" --parent Product
craft mvfolder "Old" "New"
craft rmfolder "Temp"
```

### Render

Render mermaid diagrams from `.mmd` source files to ASCII (local markdown) and SVG (Craft upload).

```bash
craft render docs/ontology.mmd --local-only
craft render docs/ontology.mmd --doc <docId>
```

Source files use `%% diagram:NAME` markers to delimit diagrams. The corresponding `.md` file uses `<!-- mermaid:NAME -->` markers as injection points for rendered ASCII.

### Other

```bash
craft open <docId>
craft link <docId>
craft help
```

### Piping

Pipe content in via stdin:

```bash
echo "# Meeting Notes" | craft create "Weekly Sync" --folder Business
cat docs/ontology.md | craft create "Ontology" --folder Product
```

Pipe output to Claude CLI:

```bash
craft read <docId> | claude "summarize this doc"
craft search "auth" --json | claude "which docs discuss OAuth?"
```

### Flags

All commands accept `--json` for raw API output. Date filters accept ISO dates (`2026-01-28`) or relative values (`today`, `yesterday`, `tomorrow`).

## Claude Code Plugin

Install as a Claude Code plugin to use craft across any project:

```bash
/plugin marketplace add gustin/craft-cli
/plugin install craft@gustin-marketplace
```

For local development, use `claude --plugin-dir /path/to/craft-cli` instead.

The plugin provides skills that let Claude automatically browse, read, write, and render Craft docs. Set `CRAFT_API_KEY` and `CRAFT_API_BASE` in your shell environment.

## Requirements

- bash, curl, jq
- node 24+ and `npm install` (for mermaid rendering)
- Craft.do API connection ([docs](https://support.craft.do/hc/en-us/articles/23702897811612-Craft-API))

## License

MIT
