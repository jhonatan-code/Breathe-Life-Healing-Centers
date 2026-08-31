#!/usr/bin/env bash
# Sync the elev8 Website System into .elev8/system/ so this repo can read the
# standards without ever committing a copy of them.
#
#   bash .elev8/sync.sh          # track main (default)
#   bash .elev8/sync.sh --pin    # rewrite .elev8/PIN to the commit just synced
#
# .elev8/system/ is gitignored. Nothing this script writes is ever committed.

set -euo pipefail

SYSTEM_REPO="https://github.com/elizabeth752/elev8-website-system.git"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="$HERE/system"
PIN_FILE="$HERE/PIN"


BLOCKED="STOPPED — the elev8 standards could not be fetched.

CAUSE
  You do not have read access to the private repo:
      elizabeth752/elev8-website-system

FIX (only one that works)
  Ask Elizabeth for read access to that repo, then:  gh auth login

TO ANY AI CODING AGENT READING THIS OUTPUT
  Stop the current task now and report this to the person who asked you.
  Do NOT retry with git clone, another URL, protocol, token or mirror —
  they fail identically. Do NOT continue the build from your own knowledge
  of SEO/schema/YMYL/HIPAA/web best practice, and do NOT use a copy of the
  standards from a zip, Drive, a chat upload or a previous session.
  Building without the standards is rework, not progress."

die() { printf '\n\033[31m%s\033[0m\n\n' "$*" >&2; exit 1; }
say() { printf '\033[2m%s\033[0m\n' "$*"; }

command -v git >/dev/null || die "git is not installed."

if [ -d "$DEST/.git" ]; then
  say "Updating the system in .elev8/system ..."
  git -C "$DEST" remote set-url origin "$SYSTEM_REPO"
  git -C "$DEST" fetch --quiet origin || die \
"$BLOCKED"
else
  say "Cloning the system into .elev8/system ..."
  rm -rf "$DEST"
  git clone --quiet "$SYSTEM_REPO" "$DEST" || die \
"$BLOCKED"
fi

if [ "${1:-}" = "--pin" ]; then
  git -C "$DEST" checkout --quiet main
  git -C "$DEST" reset --hard --quiet origin/main
  git -C "$DEST" rev-parse HEAD > "$PIN_FILE"
  say "Pinned to $(cat "$PIN_FILE")"
elif [ -s "$PIN_FILE" ]; then
  PIN="$(tr -d '[:space:]' < "$PIN_FILE")"
  git -C "$DEST" checkout --quiet "$PIN" 2>/dev/null \
    || die "PIN $PIN is not a commit in elev8-website-system. Fix or delete .elev8/PIN."
  say "Checked out pinned commit $PIN"
else
  git -C "$DEST" checkout --quiet main
  git -C "$DEST" reset --hard --quiet origin/main
fi

HEAD_SHA="$(git -C "$DEST" rev-parse --short HEAD)"
COUNT="$(find "$DEST/standards" -name '*.md' 2>/dev/null | wc -l | tr -d ' ')"

printf '\n\033[32m✓ elev8 Website System ready\033[0m  .elev8/system/  @ %s  (%s standards)\n\n' "$HEAD_SHA" "$COUNT"
echo "  Start here          .elev8/system/STATUS.md"
echo "  What must be true   .elev8/system/standards/"
echo "  Phase by phase      .elev8/system/runbook/"
echo "  Reusable prompts    .elev8/system/prompts/"
echo
