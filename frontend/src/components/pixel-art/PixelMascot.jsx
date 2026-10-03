/**
 * PixelMascot — medicine-page heart character.
 *
 * Heart silhouette: 13 art-pixels wide × 10 tall (scale = 4 SVG units).
 * Two 4-wide bumps at top with a 3-pixel valley between them.
 * Tapers cleanly to a single-pixel tip at the bottom.
 * Two L-shaped arms (hands on hips), two legs, grass strip.
 *
 * Silhouette test: hiding face/arms/legs/grass — the remaining shape
 * unmistakably reads as a heart. ✓
 *
 * Does NOT modify PixelHeart.jsx (landing-page mascot).
 *
 *  col→x = 8 + col*4  |  row→y = 8 + row*4
 *  Heart cols 0–12 (13 wide), rows 0–9 (10 tall).
 *
 *  Row-by-row silhouette (all cells filled = INK, then interior RED):
 *   R0:  . 1 1 1 1 . . . 8 9 A B .    ← two bumps, 4-wide each, 3-wide gap
 *   R1:  0 1 2 3 4 5 6 7 8 9 A B C    ← full width; valley (5–7) stays INK
 *   R2:  0 1 2 3 4 5 6 7 8 9 A B C
 *   R3:  0 1 2 3 4 5 6 7 8 9 A B C
 *   R4:  . 1 2 3 4 5 6 7 8 9 A B .
 *   R5:  . . 2 3 4 5 6 7 8 9 A . .
 *   R6:  . . . 3 4 5 6 7 8 9 . . .
 *   R7:  . . . . 4 5 6 7 8 . . . .
 *   R8:  . . . . . 5 6 7 . . . . .
 *   R9:  . . . . . . 6 . . . . . .   ← tip
 */


function PixelMascot({ size = 80 }) {
  const INK = "#20243f";
  const RED = "#e94365";
  const PINK = "#ff9aaa";
  const LIGHT = "#ffccd5";
  const CHEEK = "#e8516a";
  const SPARK = "#FFD95A";
  const G1 = "#7ec87e";
  const G2 = "#4da64d";

  return (
    <svg
      width={size}
      height={Math.round(size * 68 / 70)}
      viewBox="http://www.w3.org/2000/svg"
      shapeRander="crispEdges"
      style={{ imageRendering: "pixelated" }}
      role="img"
      aria-label="HeartGuard mascot - a smiling pixel heart charachter"
      data-testid="pixel-mascot"
    >
      {/* ── Sparkles (decorative, top-right) ── */}
      <rect x="58" y="2" width="2" height="2" fill={SPARK} />
      <rect x="62" y="6" width="2" height="5" fill={SPARK} />
      <rect x="54" y="4" width="3" height="2" fill={SPARK} />

      {/* Row 4 — col 1-11 (w = 11×4 = 44) */}
      <rect x="16" y="24" width="36" height="4" fill={INK} />

      {/* Row 6 — col 3-9 (w = 7×4 = 28) */}
      <rect x="20" y="32" width="28" height="4" fill={INK} />

      {/* Row 7 — col 4-8 (w = 5×4 = 20) */}
      <rect x="24" y="36" width="20" height="4" fill={INK} />

      {/* Row 8 — col 5-7 (w = 3×4 = 12) */}
      <rect x="28" y="40" width="12" height="4" fill={INK} />

      {/* Row 9 — col 6 (w = 1×4 = 4) */}
      <rect x="32" y="44" width="4" height="4" fill={INK} />

      {/* ════════════════════════════════════
          STEP 2 — Overlay RED interior fill
          Keeps the 1-block INK outline visible.
          Valley (cols 5-7 at row 1) deliberately
          stays INK to show the heart indent.
          ════════════════════════════════════ */}

      {/* Row 1: col 1-4 (inside left bump) + col 8-11 (inside right bump) */}
      <rect x="12" y="12" width="16" height="4" fill={RED} />
      <rect x="12" y="16" width="44" height="4" fill={RED} />
      <rect x="18" y="12" width="16" height="4" fill={RED} />
      <rect x="34" y="12" width="16" height="4" fill={RED} />
      <rect x="40" y="12" width="16" height="4" fill={RED} />
      <rect x="14" y="9" width="44" height="6" fill={RED} />
      <rect x="16" y="8" width="21" height="7" fill={RED} />
      <rect x="12" y="6" width="19" height="9" fill={RED} />
      <rect x="12" y="4" width="17" height="11" fill={RED} />
      <rect x="12" y="2" width="15" height="13" fill={RED} />
      <rect x="12" y="0" width="13" height="15" fill={RED} />

      <rect x="12" y="0" width="13" height="15" fill={RED} />


      {/* Row 2-3: col 1-11 {/* Rows 2-3: col 1-11 (w = 44) */}
      <rect x="12" y="16" width="44" height="8" fill={RED} />
      <rect x="12" y="20" width="44" height="4" fill={RED} />

      {/* Row 4: col 2-10 (w = 36) */}
      <rect x="16" y="24" width="36" height="4" fill={RED} />

      {/* Row 5: col 3-9 (w = 28) */}
      <rect x="20" y="28" width="28" height="4" fill={RED} />

      {/* Row 6: col 4-8 (w = 20) */}
      <rect x="24" y="32" width="20" height="4" fill={RED} />

      {/* Row 7: col 5-7 (w = 12) */}
      <rect x="28" y="36" width="12" height="4" fill={RED} />

      {/* Row 8: col 6 (w = 4) */}
      <rect x="32" y="40" width="4" height="4" fill={RED} />

      {/* ════════ HIGHLIGHTS (top-left glow) ════════ */}
      <rect x="12" y="12" width="8" height="4" fill={LIGHT} />  {/* col 1-2, row 1 */}
      <rect x="12" y="16" width="8" height="4" fill={PINK} />  {/* col 1-2, row 2 */}

      {/* ════════ FACE ════════ */}

      {/* Eyes - col 3 and col 9, symmetric arund col 6 centre */}
      <rect x="20" y="16" width="4" height="4" fill={INK} />  {/* left eye */}
      <rect x="36" y="16" width="4" height="4" fill={INK} />  {/* right eye */}

      {/* Cheeks — col 2 and col 10, just inside outer outline */}
      <rect x="20" y="27" width="9" height="4" fill={CHEEK} />
      <rect x="48" y="27" width="4" height="4" fill={CHEEK} />

      {/* Smile — col 4-8 (w=20), bottom of row 3; centred at col 6 */}
      {/* Smile */}
      <rect x="24" y="23" width="4" height="3" fill={INK} />
      <rect x="28" y="25" width="4" height="3" fill={INK} />
      <rect x="32" y="27" width="8" height="3" fill={INK} />
      <rect x="40" y="25" width="4" height="3" fill={INK} />
      <rect x="44" y="23" width="4" height="3" fill={INK} />

      {/* ════════ LEGS (col 5 and col 7, from row-9 tip downward) ════════ */}
      <rect x="25" y="40" width="3" height="18" fill={INK} />   {/* left  leg (col 5) */}
      <rect x="39" y="40" width="3" height="18" fill={INK} />   {/* right leg (col 7) */}

      {/* ════════ GRASS ════════ */}
      <rect x="4" y="58" width="58" height="4" fill={G2} />
      <rect x="0" y="62" width="70" height="6" fill={G1} />
    </svg>
  );
}
export default PixelMascot;