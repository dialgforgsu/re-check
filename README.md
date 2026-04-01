# re-check
Release Aggregator For Redgate Solutions

This was built by me to try to have a one stop place for release notes across multiple solutions. This dashboard was the answer.

## Server-side SQLite caching (True local file DB)

1. Install dependencies:
   ```bash
   cd "c:\Users\gsupa\Redgate Re-Check\re-check"
   npm install
   ```
2. Start server:
   ```bash
   npm start
   ```
3. API endpoints:
   - `GET http://localhost:3000/api/products`
   - `GET http://localhost:3000/api/fetch/:productId` (e.g. `flyway-desktop`)
   - `GET http://localhost:3000/api/status`
   - `GET http://localhost:3000/api/releases/:productId`

This server stores per-source snapshots in `recheck.sqlite` and compares SHA-256 hashes before writing new data.
 
