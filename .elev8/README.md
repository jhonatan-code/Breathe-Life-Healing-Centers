# .elev8/

The pointer to the [elev8 Website System](https://github.com/elizabeth752/elev8-website-system) —
the single source of truth for how elev8 builds behavioural-health websites.

| | |
|---|---|
| `sync.sh` | Clones/updates the system into `system/`. **Committed.** |
| `PIN` | Optional. A commit SHA to lock this repo to a known-good version of the standards. **Committed.** |
| `system/` | The standards themselves. **Gitignored — never committed.** |

## Use

```bash
bash .elev8/sync.sh          # get / update the standards
bash .elev8/sync.sh --pin    # lock this repo to the version you just synced
```

Delete `PIN` to go back to tracking `main`.

## Why a sync script and not a copy

A copy drifts. Within a month two client repos disagree about what the standard says and
nobody knows which is right. The system repo is the only place a standard is edited; every
client repo reads the same file.

## Why not a submodule

A submodule breaks for anyone who clones without `--recurse-submodules`, and it makes the
host fetch a private repo at build time for no benefit. `system/` is gitignored, so the
build never sees it at all.

## If sync fails

The system repo is private. You need read access:

```bash
gh auth login
```

If you still cannot reach it, ask Elizabeth to add you as a collaborator on
`elizabeth752/elev8-website-system`.
