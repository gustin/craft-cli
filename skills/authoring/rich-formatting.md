# Craft.do Formatting Reference

Rich formatting tags for writing to Craft via the CLI. These tags are parsed by Craft's API and render as styled content in the native and web apps.

## Inline Highlights

Wrap text in `<highlight>` tags with a `color` attribute:

```
<highlight color="cyan">Label</highlight>
<highlight color="purple">Important</highlight>
```

### Solid Colors

`yellow` · `green` · `mint` · `cyan` · `blue` · `purple` · `pink` · `red` · `gray`

### Gradients

`gradient-blue` · `gradient-purple` · `gradient-red` · `gradient-yellow` · `gradient-brown`

IMPORTANT: Only the colors listed above are valid. The REST API rejects any other color name and the entire block write fails. Do not use camelCase names from the extension API types.

## Callout Blocks

Wrap a blockquote in `<callout>` tags:

```
<callout>> Quoted text renders as a styled callout with accent bar</callout>
```

The `>` blockquote prefix is required inside the callout.

## Text Styles

| Markdown | Craft textStyle |
|----------|----------------|
| `#` | title |
| `##` | subtitle |
| `###` | heading |
| `**text**` | strong (inline) |
| Regular text | body |

## List Styles

| Markdown | List style |
|----------|-----------|
| `- item` | bullet |
| `1. item` | numbered |
| `- [ ] item` | todo (unchecked) |
| `- [x] item` | todo (checked) |

## Usage Pattern

```markdown
# <highlight color="gradient-purple">**Section Title**</highlight>

<callout>> Key insight or definition goes here</callout>

**<highlight color="cyan">Label</highlight>:** Description text

- Bullet points with `inline code` work normally
```

## Source

Type definitions from [craftdocs/craft-extension-api](https://github.com/craftdocs/craft-extension-api). The REST API accepts these tags in markdown content passed to block create/update endpoints.
