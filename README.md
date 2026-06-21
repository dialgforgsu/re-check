# re-check
Release Aggregator For Redgate Solutions

This was built by me to try to have a one stop place for release notes across multiple solutions. This dashboard was the answer.

Primary Goal
Built to answer the question of “what’s been released recently?” and to answer it quickly. 
Secondary Goal
A sales lens summary layer built on top of the structured release data. Each product tab and the all-products view generate a “Current Quarter At A Glance” card — a paragraph that reads the actual loaded release changes and produces a product-specific take on what the team is shipping, why it matters to customers, and what the conversation angle is. Flyway Desktop has an Oracle-vs-CI/CD branch. Monitor branches on cloud FinOps vs. AI alerting vs. coverage depth. SQL Prompt detects the ADS end-of-life signal in breaking changes. Test Data Manager routes on Entra ID and Docker shipping vs. general compliance story. Each card also has three “Next Quarter Outlook” bullets tailored to the product’s buyer and the accounts most likely to care. The summary regenerates from already-loaded data on demand (↻ Refresh) without a network round-trip. Powered by the structured snapshot.json the CI job commits every 6 hours.
Future
Old Version -> New Version Compare Specific Diff Release Notes?
OPEN TO IDEAS (💡)
Keep in mind the goals of the dashboard! 

Chron Job runs every 6 hours to fetch and refresh. 
