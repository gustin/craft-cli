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
  craft recent                            # 10 most recently modified docs
  craft docs --folder Business            # list docs in a folder
  craft docs --sort modified --since today  # docs modified today
  craft search "ontology"                 # full-text search
  craft read <docId>                      # read doc as markdown
  craft read <docId> --meta               # include timestamps
  craft grep "pattern" <docId>            # search blocks within a doc
  craft today                             # today's daily note
  craft tasks                             # list active tasks

Write:
  craft create "title" --folder Product   # create doc (pipe content via stdin)
  craft append <docId>                    # append to doc (stdin)
  craft update <blockId>                  # update block (stdin)
  craft upload <docId>                    # upload file/image (stdin)
  craft mv <docId> Product                # move doc to folder
  craft delete <docId>                    # move doc to trash

Blocks:
  craft rmblock <blockId>                 # delete blocks
  craft mvblock <blockId> --to <docId>    # move blocks to another doc

Folders:
  craft mkdir "name" --parent Product     # create folder
  craft mvfolder "Old" "New"              # move folder
  craft rmfolder "Temp"                   # delete folder (docs go to parent)

Other:
  craft open <docId>                      # open in Craft app
  craft link <docId>                      # print deep link URL
  craft help                              # full usage
```

Pipe content via stdin:

```bash
echo "# Meeting Notes" | craft create "Weekly Sync" --folder Business
cat docs/ontology.md | craft create "Ontology" --folder Product
```

All commands accept `--json` for raw API output. Date filters accept ISO dates (`2026-01-28`) or relative values (`today`, `yesterday`, `tomorrow`).

## Requirements

- bash, curl, jq
- Craft.do API connection ([docs](https://support.craft.do/hc/en-us/articles/23702897811612-Craft-API))

## License

MIT
