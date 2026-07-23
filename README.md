# Redgate Release Checker
Release Aggregator For Redgate Solutions

Built to have a single place for release notes across multiple Redgate products. This dashboard is the answer.

## Primary Goal
Answer the question "what's been released recently?" — and answer it quickly.

## Secondary Goal
A sales-focused summary layer built on top of the structured release data. Each product tab and the all-products view generate a **"Current Quarter At A Glance"** card using **Smart Summaries**.

### How Smart Summaries work
Summaries are not AI-generated. They are pattern-matched and rendered from pre-written, product-specific copy:

- Jina Reader fetches and parses each product's release page, detecting which features are present in the loaded changes.
- Each product has a set of predefined copy blocks written for specific feature signals — for example, Flyway Desktop branches on Oracle vs. CI/CD, Monitor branches on cloud FinOps vs. AI alerting vs. coverage depth, SQL Prompt surfaces the ADS end-of-life signal when breaking changes are detected.
- The matching copy is assembled into a paragraph that describes what the team is shipping, why it matters to customers, and what the conversation angle is.
- Three "Next Quarter Outlook" bullets are appended, tailored to the product's buyer and the accounts most likely to care.

Smart Summaries regenerate from already-loaded data on demand (↻ Refresh) — no network round-trip required. They are powered by the structured `snapshot.json` the CI job commits every 6 hours.

## Future
- Old Version → New Version: specific diff of release notes?
- OPEN TO IDEAS (💡)

Keep in mind the goals of the dashboard when suggesting features!

Cron job runs every 6 hours to fetch and refresh.
