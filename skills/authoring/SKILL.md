---
name: authoring
version: 0.3.0
description: Create, edit, and organize Craft.do documents. Use when the user asks to "create a Craft doc", "write to Craft", "append to a Craft document", "move a Craft doc to a folder", or "add formatted content to Craft".
---

Create, edit, and organize documents in the Craft.do workspace via the craft CLI.

## Creating documents

Pipe markdown content via stdin: `echo "# Body" | craft create "Title" --folder NAME`. The doc is created first, then the body is written as blocks. If the body contains invalid formatting tags, the API rejects the entire block write and warns on stderr.

## Editing content

Use `craft append <docId>` to add content to the end of a doc, or `craft update <blockId>` to replace a specific block. Find block IDs with `craft read <docId> --json`.

## Organizing

Move docs between folders with `craft mv`, create folders with `craft mkdir`, or move blocks between docs with `craft mvblock`.

## Commands

The craft binary is at: `${CLAUDE_PLUGIN_ROOT}/bin/craft`

Always use this full path when running craft via Bash. Do not assume `craft` is on PATH.

- `create "title" --folder NAME` -- create doc (pipe content via stdin)
- `append <docId>` -- append markdown to doc (stdin)
- `update <blockId>` -- update a block (stdin)
- `upload <docId>` -- upload file/image (stdin)
- `mv <docId> <FOLDER>` -- move doc to folder
- `delete <docId>` -- move doc to trash
- `mkdir "name"` -- create folder
- `rmblock <blockId>` -- delete blocks
- `mvblock <blockId> --to <docId>` -- move blocks

## Rich Formatting

Craft supports highlights, callouts, and gradients beyond standard markdown. See [rich-formatting.md](rich-formatting.md) for the full reference.

## Environment

Requires CRAFT_API_KEY and CRAFT_API_BASE in the shell environment.
