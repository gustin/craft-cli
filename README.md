# craft-cli

CLI for the Craft.do workspace API. Read, write, and manage docs from the terminal.

## Install

```bash
git clone https://github.com/gustin/craft-cli.git
cd craft-cli
mise install   # installs jq
mise trust
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

```bash
Browse:
  craft folders                           # list folder tree
  craft docs --folder Business            # list docs in a folder
  craft search "ontology"                 # full-text search
  craft read <docId>                      # read doc as markdown
  craft today                             # today's daily note
  craft tasks                             # list active tasks

Write:
  craft create "title" --folder Product   # create doc (pipe content via stdin)
  craft append <docId>                    # append to doc (stdin)
  craft update <blockId>                  # update block (stdin)
  craft delete <docId>                    # move doc to trash

Other:
  craft open <docId>                      # open in Craft app
  craft help                              # full usage
```

Pipe content via stdin:

```bash
echo "# Meeting Notes" | craft create "Weekly Sync" --folder Business
cat docs/ontology.md | craft create "Ontology" --folder Product
```

All commands accept `--json` for raw API output.

## Requirements

- bash, curl, jq
- Craft.do API connection ([docs](https://support.craft.do/hc/en-us/articles/23702897811612-Craft-API))

## License

MIT
