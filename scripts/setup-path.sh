#!/usr/bin/env bash
PLUGIN_ROOT="${1:?usage: setup-path.sh <plugin-root>}"
echo "export PATH=${PLUGIN_ROOT}/bin:\$PATH" >> "$CLAUDE_ENV_FILE"
