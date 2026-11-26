import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Hello. I analyzed 4,318 photos of you. Compatibility is 98.7%. Please confirm you like me back.";

function validateLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  if (line.length < 1 || line.length > 140) {
    throw new Error(
      `entry must be 1-140 chars, got ${line.length}`,
    );
  }
  for (let i = 0; i < line.length; i++) {
    const code = line.charCodeAt(i);
    if (code < 0x20 && code !== 0x09) {
      throw new Error(`control character at index ${i}`);
    }
    if (code === 0x7f) {
      throw new Error(`control character at index ${i}`);
    }
  }
}

function main(): void {
  validateLine(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== LINE) {
    throw new Error("read-back mismatch: entry.txt does not match the line");
  }
  const readBackBytes = readFileSync(outPath);
  const writtenBytes = Buffer.from(LINE, "utf8");
  if (!readBackBytes.equals(writtenBytes)) {
    throw new Error("read-back mismatch: entry.txt bytes differ");
  }
}

main();
