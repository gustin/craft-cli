#!/usr/bin/env node
import { renderMermaid, renderMermaidAscii } from "beautiful-mermaid";

const format = process.argv[2];
if (!format || !["ascii", "svg"].includes(format)) {
  process.stderr.write("usage: render-mermaid.js <ascii|svg>\n");
  process.exit(1);
}

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", async () => {
  const diagram = input.trim();
  const result =
    format === "ascii"
      ? renderMermaidAscii(diagram)
      : await renderMermaid(diagram);
  process.stdout.write(result);
});
