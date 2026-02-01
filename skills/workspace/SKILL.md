---
name: workspace
version: 0.3.0
description: Browse and read Craft.do workspace documents. Use when the user asks to "read a Craft doc", "search Craft for X", "list Craft folders", "show recent Craft docs", "check today's Craft daily note", or references a Craft doc ID.
---

Browse and read documents in the Craft.do workspace via the craft CLI.

## Finding documents

Start with `craft folders` to see the workspace structure, then narrow down with `craft docs --folder NAME` or `craft search "query"` for full-text search. Use `craft recent` to see what changed lately.

## Reading content

`craft read <docId>` returns a doc as markdown. Add `--meta` for created/modified timestamps. To search within a doc, use `craft grep "pattern" <docId>`.

## Commands

The craft binary is at: `${CLAUDE_PLUGIN_ROOT}/bin/craft`

Always use this full path when running craft via Bash. Do not assume `craft` is on PATH.

- `folders` -- list folder tree
- `docs --folder NAME` -- list docs in a folder
- `recent` -- recently modified docs
- `search "query"` -- full-text search
- `read <docId>` -- read doc as markdown
- `read <docId> --meta` -- with timestamps
- `grep "pattern" <docId>` -- search blocks in a doc
- `today` -- today's daily note
- `tasks` -- active tasks

All commands accept `--json` for raw API output.

## Environment

Requires CRAFT_API_KEY and CRAFT_API_BASE in the shell environment.
