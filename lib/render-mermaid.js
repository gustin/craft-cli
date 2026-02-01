#!/usr/bin/env node
import { renderMermaid, renderMermaidAscii, THEMES } from "beautiful-mermaid";
import sharp from "sharp";

const format = process.argv[2];
const themeName = process.argv[3] || "catppuccin-mocha";

if (!format || !["ascii", "png"].includes(format)) {
  process.stderr.write(
    `usage: render-mermaid.js <ascii|png> [theme]\nthemes: ${Object.keys(THEMES).join(", ")}\n`
  );
  process.exit(1);
}

const theme = THEMES[themeName];
if (!theme) {
  process.stderr.write(
    `unknown theme: ${themeName}\navailable: ${Object.keys(THEMES).join(", ")}\n`
  );
  process.exit(1);
}

// Mix two hex colors at a given percentage (sRGB, matching CSS color-mix)
function hexMix(fgHex, bgHex, pct) {
  const parse = (h) => [
    parseInt(h.slice(1, 3), 16),
    parseInt(h.slice(3, 5), 16),
    parseInt(h.slice(5, 7), 16),
  ];
  const fg = parse(fgHex);
  const bg = parse(bgHex);
  const r = Math.round(fg[0] * (pct / 100) + bg[0] * (1 - pct / 100));
  const g = Math.round(fg[1] * (pct / 100) + bg[1] * (1 - pct / 100));
  const b = Math.round(fg[2] * (pct / 100) + bg[2] * (1 - pct / 100));
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

// Resolve CSS custom properties and color-mix() to static hex values
function flattenSvg(svg, colors) {
  const { bg, fg } = colors;

  const palette = {
    "--bg": bg,
    "--fg": fg,
    "--_text": fg,
    "--_text-sec": colors.muted || hexMix(fg, bg, 60),
    "--_text-muted": colors.muted || hexMix(fg, bg, 40),
    "--_text-faint": hexMix(fg, bg, 25),
    "--_line": colors.line || hexMix(fg, bg, 30),
    "--_arrow": colors.accent || hexMix(fg, bg, 50),
    "--_node-fill": colors.surface || hexMix(fg, bg, 3),
    "--_node-stroke": colors.border || hexMix(fg, bg, 20),
    "--_group-fill": bg,
    "--_group-hdr": hexMix(fg, bg, 5),
    "--_inner-stroke": hexMix(fg, bg, 12),
    "--_key-badge": hexMix(fg, bg, 10),
  };

  svg = svg.replace(/<style>[\s\S]*?<\/style>\s*/, "");

  svg = svg.replace(
    /(<svg[^>]*?)style="[^"]*"/,
    `$1style="background:${bg}"`
  );

  svg = svg.replace(/var\(--([a-z_-]+)\)/g, (match, name) => {
    return palette["--" + name] || match;
  });

  svg = svg.replace(
    /font-family:\s*'Inter'[^;]*/g,
    "font-family: system-ui, -apple-system, sans-serif"
  );

  return svg;
}

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", async () => {
  const diagram = input.trim();
  if (format === "ascii") {
    process.stdout.write(renderMermaidAscii(diagram));
  } else {
    const svg = await renderMermaid(diagram, theme);
    const flatSvg = flattenSvg(svg, theme);

    // Extract dimensions from SVG for 2x retina rendering
    const wMatch = flatSvg.match(/width="([\d.]+)"/);
    const hMatch = flatSvg.match(/height="([\d.]+)"/);
    const width = wMatch ? Math.ceil(parseFloat(wMatch[1]) * 2) : undefined;
    const height = hMatch ? Math.ceil(parseFloat(hMatch[1]) * 2) : undefined;

    const png = await sharp(Buffer.from(flatSvg), { density: 144 })
      .resize(width, height)
      .png()
      .toBuffer();

    process.stdout.write(png);
  }
});
