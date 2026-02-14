# Specification

## Summary
**Goal:** Fix the production “connection reset”/unreachable deployment and remove runtime crashes by eliminating Next.js-only theming usage, deduplicating React Query providers, and ensuring the Internet Computer serves the built Vite output.

**Planned changes:**
- Remove the `next-themes` dependency and any `ThemeProvider` usage from `frontend/src/App.tsx`, preserving the existing emerald/gold look and current user-facing behavior.
- Ensure there is exactly one `QueryClientProvider` at runtime (no nested/duplicated providers) without editing `frontend/src/main.tsx`, and keep visitor message submission working.
- Update the production deployment configuration so the canister serves the built Vite `dist` assets and `index.html` references compiled `/assets/...` files rather than `/src/main.tsx`.

**User-visible outcome:** The deployed site loads reliably in a browser (no connection reset, no blank page), all existing sections render on hard refresh, and contact/message submission continues to work.
