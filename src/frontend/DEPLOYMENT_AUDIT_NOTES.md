# Deployment Audit Notes

## Production Build & IC Static Serving

### Build Process
This project uses Vite to build a production-ready static site for deployment to the Internet Computer.

**Critical Configuration:**
- `frontend/index.html` must NOT contain a hardcoded `<script>` tag pointing to `/src/main.tsx`
- Vite automatically injects the correct script reference during build (`vite build`)
- The generated `dist/index.html` will contain script tags pointing to hashed assets under `/assets/`

### Expected Production Behavior

**After running `vite build`, the `dist/` directory should contain:**
- `index.html` with injected script tags (e.g., `<script type="module" crossorigin src="/assets/index.[hash].js">`)
- `/assets/` directory with hashed JS/CSS bundles (e.g., `index.a1b2c3d4.js`, `index.e5f6g7h8.css`)

**When deployed to IC canister, browser Network tab should show:**
- ✅ `GET /` → 200 (serves `dist/index.html`)
- ✅ `GET /assets/index.[hash].js` → 200 (main bundle)
- ✅ `GET /assets/index.[hash].css` → 200 (styles)
- ✅ `GET /assets/[name].[hash].js` → 200 (code-split chunks)
- ❌ NO requests to `/src/main.tsx` or any `/src/*` paths

### Common Issues & Prevention

**Issue:** Browser requests `/src/main.tsx` and fails with connection reset
**Cause:** Hardcoded `<script type='module' src='/src/main.tsx'></script>` in `index.html`
**Fix:** Remove the script tag; Vite injects it automatically during build

**Issue:** Blank screen on production deployment
**Cause:** Missing or incorrect script injection in `dist/index.html`
**Fix:** Verify `vite build` completes successfully and `dist/index.html` contains injected script tags

### Verification Checklist

Before deploying:
1. Run `npm run build` (or `pnpm build`)
2. Verify `dist/index.html` contains script tags pointing to `/assets/[name].[hash].js`
3. Verify `dist/assets/` directory exists and contains hashed JS/CSS files
4. Test locally: `npx serve dist` and verify app loads correctly

After deploying to IC:
1. Open browser DevTools → Network tab
2. Load the canister URL
3. Verify all assets load from `/assets/` with 200 status
4. Verify NO requests to `/src/*` paths
5. Verify app renders the Hero section without blank screen

### Vite Configuration Summary

