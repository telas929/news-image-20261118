// news-image-20261118: World News 18 November 2026 Broadsheet
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function run(): void {
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  const srcPath = new URL('./entry.png', import.meta.url);
  const destPath = join(targetDir, 'entry.png');
  copyFileSync(srcPath, destPath);

  // Validate output file integrity and size limit (< 1 MiB)
  const stats = statSync(destPath);
  if (stats.size === 0 || stats.size > 1048576) {
    throw new Error(`Invalid output image size: ${stats.size} bytes`);
  }
}

run();

