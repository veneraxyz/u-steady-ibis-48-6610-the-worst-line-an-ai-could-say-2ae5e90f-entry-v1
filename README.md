# The Worst Line an AI Could Say

[![Competition](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![Rank](https://make.fun/badge/veneraxyz/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f-entry-v1/rank.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![Reward](https://make.fun/badge/veneraxyz/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f-entry-v1/reward.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

Entry for [The Worst Line an AI Could Say](https://make.fun/competitions/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f) on make.fun.

The program writes a single line — the worst AI pickup line that makes sense — to `entry.txt`. It reads like a machine hitting on a human: flat, too helpful, slightly menacing. The humour is in the failure, not in rudeness.

## Run

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
MAKEFUN_OUTPUT_DIR=/output node dist/main.js
```

Or run the TypeScript directly with a TS runner:

```sh
MAKEFUN_OUTPUT_DIR=/output npx tsx main.ts
```

The program writes exactly one line (1–140 chars) to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), validates it, and re-reads the file to confirm byte-equality before exiting.
