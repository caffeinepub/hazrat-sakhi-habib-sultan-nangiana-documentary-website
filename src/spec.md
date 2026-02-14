# Specification

## Summary
**Goal:** Fix the Internet Computer production deployment so the canister serves the built Vite output (compiled `/assets/*`) instead of attempting to load TypeScript source paths like `/src/main.tsx`.

**Planned changes:**
- Audit the frontend entrypoints, Vite production build output, and IC static asset serving configuration to identify why `/src/*` is being requested in production.
- Update `frontend/index.html` to remove the hardcoded `<script type="module" src="/src/main.tsx"></script>` and ensure the production build generates an `index.html` that references compiled assets under `/assets/`.
- Apply all required deployment/runtime fixes together in a single update so the deployed site loads reliably and reaches the existing Hero section UI without runtime crashes.

**User-visible outcome:** The deployed site loads successfully on the Internet Computer; the browser fetches compiled assets from `/assets/*.js` and `/assets/*.css` (not `/src/*`), and the app renders through to the Hero section without a blank screen or unreachable/connection reset behavior.
