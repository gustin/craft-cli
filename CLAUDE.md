# craft-cli

CLI for the Craft.do workspace API. Single bash script (`bin/craft`).

## Communication Style

Be direct and concise. Skip validation phrases and move straight to substance.

Never use em dashes. Use commas, colons, semicolons, or separate sentences instead.

When unsure about implementation details, always ask the developer.

## Code Investigation

Read and understand the script before proposing changes. Investigate the actual API behavior rather than speculating. When the user references a bug, reproduce it before fixing.

## Code Quality

- **Clear intent**: Express purpose through naming and structure
- **Minimal complexity**: This is a bash script, keep it that way
- **Consistent patterns**: New commands follow the same structure as existing ones
- **Error handling**: Validate inputs, show usage on misuse, fail with clear messages

## Git Commit Standards

Follow Tim Pope's commit message guide (https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html):

- Subject line: Capitalized, imperative mood, 50 chars or less
- Blank line after subject
- Body: Wrap at 72 chars, explain what and why
- Attribute commits to the human developer (no Claude references or co-author tags)
- Keep commits focused on what was accomplished
- Vary your verbs (Add, Implement, Create, Build, Introduce, Establish)

Stage files and create commits only when explicitly requested. Push to remote only when explicitly approved.

## Versioning

Trunk-based development on main branch. Tag with semantic versioning:

- `0.MINOR.PATCH` until 1.0
- Increment MINOR for new commands or breaking changes
- Increment PATCH for bug fixes only
- Tag format: `git tag -a v0.X.X -m "Short description"`
- Tag messages: concise, 50 chars or less, assume it works if tagged
- No redundant descriptors ("Complete", "Full", "Working", "Initial")

Examples:
- `git tag -a v0.1.0 -m "Core read/write commands with folder management"`
- `git tag -a v0.1.1 -m "Fix folder name resolution for DELETE"`
- `git tag -a v0.2.0 -m "Upload and mermaid rendering support"`

