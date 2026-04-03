# Redgate Release Notes — Snapshot
<!-- fetched: 2026-04-03 | source: documentation.red-gate.com -->
<!-- split on `---PRODUCT---` to get one file per product -->

---PRODUCT---
# Flyway Desktop 9
<!-- source: https://documentation.red-gate.com/fd/flyway-desktop-9-release-notes-329778435.html -->
<!-- fetched: 2026-04-03 | latest: 9.2.2 (19 March 2026) -->

## 9.2.2 — 19 March 2026

### Fixes
- Fixed issue where the Generate Migrations page could run generate when there were no differences, or only unselectable differences

### Library Versions
- Flyway: 12.2.0-rc1680
- Electron: 41.0.3

## 9.2.1 — 18 March 2026

### Fixes
- Fixed headings appearing too large on some pages
- Fixed an issue preventing the creation of MongoDB projects

### Library Versions
- Flyway: 12.2.0-rc1680
- Electron: 41.0.3

## 9.2.0 — 17 March 2026

### New Features
- Code review display (preview) added to the generate migrations and deployment script screens. Code review will show potential issues in scripts identified during generation, and by configured code analysis engines for Flyway check. By default, Flyway check will use the SQL Fluff engine.

### Improvements
- On the baseline screen, the list of available tables for static data configuration will now be retrieved from the configured target environment, if set. If not it will use the development environment.

### Library Versions
- Flyway: 12.1.1-rc1670
- Electron: 41.0.2

## 9.1.1 — 04 March 2026

### Changes
- Removed SQL Server 'IgnoreSynonymDependencies' comparison option

### Library Versions
- Flyway: 12.0.3-rc1589
- Electron: 40.6.1

## 9.1.0 — 18 February 2026

### New Features
- Add Oracle comparison option to ignore invisible columns
- Add Oracle comparison option to ignore invisible indexes
- Multiple project tabs can now be opened

### Library Versions
- Flyway: 12.0.2-rc1522
- Electron: 40.4.1

## 9.0.3 — 12 February 2026

### Improvements
- Added previous/next change navigation buttons to the version control diff viewer
- The diff viewer header now adapts to its container width instead of the screen width

### Fixes
- Fixed an issue when reviewing dependencies during deployment with a partial selection of objects

### Library Versions
- Flyway: 12.0.1-rc1482
- Electron: 40.4.0

## 9.0.2 — 11 February 2026

### Fixes
- The automated deployment page no longer displays commands which are not supported, for database flavors without advanced comparison support
- Fixed error in automated deployment page ad hoc rollback scripts

### Library Versions
- Flyway: 12.0.1-rc1473
- Electron: 40.2.1

## 9.0.1 — 05 February 2026

### New Features
- Added scripts for deploying specific migrations and for rolling back deployments to the automated deployment page

### Changes
- Baseline scripts no longer give the option for AI descriptions as such scripts are often too large to be used for generation

### Fixes
- Fixed an issue where an error page could not be dismissed on the Migration scripts page

### Library Versions
- Flyway: 12.0.1-rc1449
- Electron: 40.1.0

## 9.0.0 — 03 February 2026

### Breaking Changes
- Removing preview support for Redgate Clone as a provisioner and resolver from connection dialogues

### New Features
- There is now a dedicated deploy page for manual deployments on projects with migrations enabled
- Added copy script to clipboard button on Automate deployment page

### Improvements
- Improved form validation in the create branch modal to show validation messages instead of disabling the button

### Changes
- `check.majorRules`, `check.majorTolerance`, `check.minorRules`, `check.minorTolerance` settings have been removed from the list of advanced parameters on the migration scripts page, as they are no longer supported by the flyway commandline

### Fixes
- Fixed warning messages for generated undo scripts showing the same content as those for deployment scripts

### Library Versions
- Flyway: 12.0.1-rc1419
- Electron: 40.1.0


---PRODUCT---
# Flyway CLI (Engine)
<!-- source: https://documentation.red-gate.com/fd/release-notes-for-flyway-engine-179732572.html -->
<!-- fetched: 2026-04-03 | latest: 12.3.0 (31 March 2026) -->

## 12.3.0 — 2026-03-31

### New Features
- Added a new rule: RG22 - Ensure the same table is not created and then dropped or vice versa in the same script
- Flyway includes SQLite support in Native Connectors mode

### Changes
- Added additional properties to json output of check code: "engine", "file_pos", "file_pos_end" and (optional) "fixes"

### Bug Fixes
- Fix RG18 and RG19 handling of bracketed identifiers

## 12.2.0 — 2026-03-26

### New Features
- Added a new rule: RG19 - Simple check to ensure table names are not pluralized
- Added a new rule: RG20 - Object names should be contained within square brackets
- `check -code` now generates a SARIF 2.1.0 report file alongside JSON and HTML reports, enabling integration with GitHub Code Scanning, Azure DevOps, and other SARIF-compatible tools
- Added RG21, a configurable rule that can enforce naming prefixes for multiple object types (Table, View, Procedure, Function, Schema)
- Added `check.code.noqaSeverity` setting for configuring the severity of the warning about use of `--noqa` in migrations checked by SQLFluff

### Changes
- Code Analysis renamed to Code Review in output from check command
- The regex rule engine used by check -code will no longer automatically convert line endings before applying rules

### Bug Fixes
- Flyway now correctly exits with a non-zero exit code when migrations fail and multiple report generators are loaded
- Fix parsing of backticks for quoted strings in MySQL

### Library Upgrades
- Updated Snowflake JDBC driver to 4.0.2
- Upgrade aws-secretsmanager to 2.0.4

## 12.1.1 — 2026-03-17

### Changes
- Implement non statement level callbacks in Native Connectors for undo, info, baseline and repair

### Bug Fixes
- `serverId` in Maven plugin now correctly respects user-configured value via `flyway.serverId`
- Fixed NPE in Oracle database type when using instrumentation agents like JaCoCo
- Fix NullPointerException in SnapshotVersionRetriever when applied migrations include null-version entries
- Snapshot no longer saved during dry run for migrate, undo, and deploy commands
- Gradle plugin now correctly reads `connectRetries`, `connectRetriesInterval`, and `failOnMissingLocations` from the flyway extension configuration
- Java Migrations correctly show the script path when an exception is thrown due to duplicated versions

### Performance Improvements
- Improved startup time for lightweight CLI commands like `flyway version` and `flyway auth`

## 12.1.0 — 2026-03-09

### New Features
- Flyway now supports using the 'init' command to automatically update TOML configuration files for Desktop users

### Changes
- InsertRowLock now supports custom locking strategies for databases without primary key support
- Removed SQL Server 'IgnoreSynonymDependencies' comparison option
- Changed the snapshot history limit default to 5

### Database Compatibility
- Foundational support for Babelfish added

### Bug Fixes
- Fix NullPointerException when executing callbacks where callback name is null
- Drift resolution folder path in JSON output now serializes as an absolute file path string instead of a URI

## 12.0.3 — 2026-02-27

### Bug Fixes
- Report filenames and drift resolution folder now included in JSON output when check -drift fails with failOnDrift enabled
- Fixed an issue where Flyway failed when applied migrations specified in 'cherryPick' were not found in Native Connectors mode
- Oracle Schema History Table synonyms no longer appear as drift in Check reports

## 12.0.2 — 2026-02-20

### New Features
- Add flag `-check.generateReport` to control whether check should write the result to a file

### Changes
- Flyway check now honours environment-specific cleanDisabled override when no provisioner set for the build database
- Running snapshot against an Oracle database without specifying schemas will now use the default schema if set

### Bug Fixes
- Auth can now be output as JSON when `outputType=json` is set

## 12.0.1 — 2026-02-12

### New Features
- check -changes now honours target parameter for setting a target version

### Changes
- Added alias for azureAdInteractive resolver to entraId
- Redgate Clone documentation marked as deprecated and Flyway Desktop sections removed

### Database Compatibility
- Oracle now uses synonyms on new schema and snapshot history tables to enable them to be called unquoted

### Bug Fixes
- Fixed issue where configuration parameters would not be listed when running --help on check with a flag specified
- Fixed issue where drift resolution filter generation would fail when drift found involving objects with no schema
- Fix static data ordering when on Windows and using a string primary key

## 12.0.0 — 2026-01-28

### Breaking Changes
- The 'passOnRegexMatch' field in the Code Analysis Regex Rule is no longer supported
- The 'plugin' namespace for configuration parameters is no longer supported
- The environment variable 'REDGATE_LICENSING_PERMIT_PATH' has been replaced by 'FLYWAY_OFFLINE_PERMIT_PATH'
- Flyway no longer ships the default Redgate regex ruleset
- Reports now display results from separate flyway command invocations on the main page
- The 'majorRules', 'minorRules', 'majorTolerance', and 'minorTolerance' settings have been removed from Code Analysis
- MongoDB support via JDBC has been removed; MongoDB is now supported only in Native Connectors mode
- Support for SQLFluff versions prior to '1.3' has been removed

### Database Compatibility
- Add support for nested IF statements in Snowflake parser

## 11.20.3 — 2026-01-26

### Library Upgrades
- Upgraded RgCompare.Cli from 1.48.1.2503 to 1.48.1.2582
- Upgraded sqlfluff from 3.5.0 to 4.0.0
- Upgrade google-cloud-spanner to 2.34.1 and google-cloud-storage to 2.60.0 to fix CVE-2025-55163

## 11.20.1 — 2026-01-08

### New Features
- Generated drift incorporate script will now contain object existence checks for SQL Server

### Performance Improvements
- When `check` is called with both `-drift` and `-changes` flags, `-drift` is now always run first for a performance improvement

## 11.20.0 — 2025-12-22

### Changes
- `model`, `generate`, and `prepare` commands now return full selection output instead of a list of names of included dependencies

## 11.19.1 — 2025-12-18

### New Features
- It is now possible to switch off automatic dependency handling for Oracle when performing comparison operations via `includeDependencies = false`

### Database Compatibility
- Verified compatibility for SingleStore 8.9

### Bug Fixes
- Fixed an issue where Flyway treated skipped SQLFluff code analysis as a successful linting run

## 11.19.0 — 2025-12-08

### Bug Fixes
- Fixed issue when running `check -drift` against a database with no snapshot history table

### Java Compatibility
- CLI now ships with Java 25

## 11.18.0 — 2025-11-27

### New Features
- 'testConnection' command is now supported in Native Connectors mode

### Bug Fixes
- Fix issue with obtaining the value of SQLPlus placeholders on Oracle 26ai
- Fixed an issue with using the create-database provisioner where a reprovision operation would not fully occur

## 11.17.1 — 2025-11-20

### New Features
- Added ability to run code analysis on individual scripts with 'check.scriptFilename' and new 'SCRIPT' scope
- Snapshot history version column will now be populated when a database is used as the source for the snapshot
- Comparison options can now be configured via the command-line
- testConnection command can test Comparison Engine connections
- Snapshots can be written to and read from an S3 bucket when performing drift checks
- Flyway now supports reporting the usage of '--noqa' tags that suppress code analysis linting

## 11.17.0 — 2025-11-11

### New Features
- It is now possible to capture and store snapshots in a target database in a flyway snapshot history table following a migrate, undo, or deploy action
- Standard logging is now included with `outputType=json`

### Changes
- If deployed snapshot is configured but not found, drift detection will warn rather than fail

## 11.16.0 — 2025-11-06

### New Features
- Regex code analysis now reports all identified violations instead of only the first one
- Added a new 'testConnection' command to test the validity of a configured database connection

### Changes
- Flyway now uses the packaged SQLFluff for Enterprise users by default

### Database Compatibility
- Updated latest version of SQL Server to 2025
- Oracle now respects the encoding configuration parameter when reading SQL migrations

## 11.15.0 — 2025-10-23

### New Features
- Flyway now provides clearer error messages when online authentication methods fail

## 11.14.1 — 2025-10-15

### New Features
- Flyway now supports configuring Offline Permits via command-line parameters and TOML configuration

### Changes
- Released first set of Redgate code analysis rules for SQLFluff (RG01-RG08)

### Database Compatibility
- Update Snowflake driver to 3.27.0

## 11.14.0 — 2025-10-09

### New Features
- Packaged SQL Fluff added to docker images
- Enhanced exception handling during Code Analysis to allow Flyway to continue generating the Report if partial results are available
- Flyway now provides more comprehensive details in code analysis results

## 11.13.0 — 2025-09-16

### New Features
- It is now possible to define `beforeDeploy`, `afterDeploy`, and `afterDeployError` callbacks in locations specified by the `callbackLocations` parameter
- deploy command now supports errorOverrides, allowing for graceful handling of SQL Server PRINT statements
- It is now possible to specify callback-specific locations using the `callbackLocations` parameter

### Database Compatibility
- Couchbase foundational support is now in preview

## 11.12.0 — 2025-09-04

### New Features
- A new 'failOnError' mode has been introduced in Flyway 'check' code analysis
- Add support to generate undo script for state based model migration

### Changes
- 'majorRules' and 'minorRules' parameters in Code Analysis are now deprecated


---PRODUCT---
# Redgate Monitor 14
<!-- source: https://documentation.red-gate.com/monitor14/redgate-monitor-14-1+-release-notes-317489801.html -->
<!-- fetched: 2026-04-03 | latest: 14.10.0 (4 March 2026) -->

## 14.10.0 — 4 March 2026

### Features
- Top waits data is now available for PostgreSQL on the server overview and database details pages
- Users can now run an optional secondary SQL query during custom metric collection that adds additional context when a custom metric alert is raised
- Add ability to see subscription details of AWS virtual machines on virtual machine page

### Improvements
- Improved filtering options for the returned values of a custom metric query in the 'Test metric' step
- You can now copy the Query analysis AI response to your clipboard using the new copy button
- PostgreSQL tracked queries are now available from the database overview page
- The top waits graph display type selection now persists across page reloads

### Fixes
- Fixed an issue where tags applied to Oracle, MySQL, and MongoDB instances were not appearing in the global dashboard filter options
- Fixed an issue in the session table where the row colour on the table would not match the one in the graph
- The page life expectancy alert description now clearly indicates that the alert triggers when the value is below the threshold for 1 minute
- Fixed an issue where the access token rights view would not update correctly when changing the token role
- Monitor now correctly displays a monitoring error when WMI is not configured correctly
- The database sampler will now be able to continue sampling on SQL Server instances where the msdb system database is no longer online
- Fixed an issue preventing PostgreSQL queries from being tracked correctly
- Fixed an issue where expanding a top query on the Alert Details page for a PostgreSQL instance would cause the page to crash
- Improved OracleErrorLogSampler performance
- The `ALTER TABLE SWITCH` statement no longer fails when upgrading the repository with a schema which has multiple indexes on a single table with different data compression values
- Fixed an issue for SQL Server logon failure alert where negative regex statements matched incorrectly
- Sorting on Disk usage details page now works as expected

## 14.9.0 — 18 February 2026

### Improvements
- Added a column to the SQL Server Availability Group page to show the backup priority of each replica
- The `Virtual machine name` column on the Estate > Virtual Machines page now displays a cloud icon next to Azure-hosted VMs

### Fixes
- Fixed an issue where the time range would be incorrect when clicking a Server Overview redirect URL from Jobs page
- Fixed an issue that caused the UI to hang when creating a custom metric where the default instance was selected
- Fixed an issue that caused retrieval of a large number of alerts in the alert inbox and global dashboard to fail when using a SQL Server data repository
- Restored Extended Event sampling support for SQL Server 2008R2 SP2 CU12 and SQL Server 2012 SP1 CU6

### Changes
- Script notifications now run using PowerShell 5.1 in a separate process
- All PowerShell executions are now logged to 'Base Monitor_PowerShellScriptNotifications*'
- Script notifications alert data payload now includes `$AlertData.Target.FailoverClusterActiveNodeName`

## 14.8.0 — 29 January 2026

### Features
- Added Current activity pages with AI capability for Oracle and MySQL instances

### Improvements
- The Alert Inbox now displays timestamps with seconds precision in the "Last updated" column
- Enterprise edition - SQL Audit now supports all action types that belong to the SERVER_PRINCIPAL_CHANGE_GROUP

### Fixes
- Fixed PostgreSQL CurrentActivity page erroring on certain time data
- Improved handling of SQL Server Instance vs Master DB collation differences
- Fixed an issue where the blocking process alert details were showing blocked by 0
- Fixed an issue where proxy settings were not being applied correctly

### Changes
- The PowerShell Module can now be downloaded by users in any role on the Configuration page
- Access to the 'Configuration Information' page has been restricted to users with the Administrator role

## 14.7.0 — 22 January 2026

### Features
- The Estate > Virtual Machines page now displays cloud resource details for Azure VMs in the details sidebar

### Improvements
- Added database version and edition to the configuration information page
- Microsoft Teams notifications now include a link to the alert in Redgate Monitor
- All notification types can now be rate limited with a default of 30 notifications per alert type per server
- Enterprise edition - Added "All databases are encrypted with TDE" rule to CIS Benchmark

### Fixes
- Fixed an issue where active alerts wouldn't end during a suppression window
- Fixed an issue where the Estate Backups page displayed uncompressed backup sizes instead of compressed sizes

### Changes
- Enterprise: Removed the "FIPS Enabled" rule from the CIS Microsoft SQL Server 2022 Benchmark
- It's no longer possible to use Individual query monitoring with SQL Server 2008R2 and 2012

## 14.6.0 — 7 January 2026

### Features
- Enterprise edition - New SQL Audit tab available in preview in the Security > Permissions page
- The details sidebar in Estate > Virtual Machines now has a comparison toggle to compare data across different time periods
- Added "Ensure Windows BUILTIN groups are not SQL Logins" rule to CIS Template
- AI-powered query analysis (preview) is now available on the Current activity tab for SQL Server and PostgreSQL instances

### Improvements
- The individual query monitoring threshold can now be set to values between 1 and 5 seconds
- Availability Group overview page now displays a "Readable Secondary" column
- Added support for virtual machines running PostgreSQL on the Estate > Virtual Machines page
- Added ability to add SQL Server instance on previously added Linux machines
- Added ability to search the Configuration page

## 14.5.0 — 11 December 2025

### Features
- AI-powered query analysis (preview) now supports Oracle and MySQL instances in addition to SQL Server and PostgreSQL

### Improvements
- Added a 7-day history option to the history tab on the Server overview page
- Tags can now be applied to SQL Server and PostgreSQL databases
- Alert suppression windows can now be applied to individual databases, via tags

### Changes
- Monitor no longer samples disabled Active Directory accounts by default

## 14.4.0 — 1 December 2025

### Features
- Support for certificate authentication when monitoring Linux PostgreSQL servers (preview)
- Support for PostgreSQL 18 is now available
- Custom text can now be added to alert email notifications
- Tracking queries now available for PostgreSQL
- Monitoring of MySQL instances running on AWS Aurora is now supported
- Enterprise Edition - Monitoring of Permissions now available for Azure Managed Instances
- Virtual Machines page can now compare usage with the previous time period

### Improvements
- Re-enabled and improved the performance of the Estate > SQL Server replication page
- Added usage graphs to the details sidebar of the Virtual Machines page

### Changes
- Trials no longer begin on installation, and can instead be started from the License Allocation page

## 14.3.0 — 17 November 2025

### Major Changes
- AI-powered query analysis (preview) - provides advice on why queries may be performing poorly, along with improvement suggestions

## 14.2.0 — 29 October 2025

### Major Changes
- Custom metrics and alerts are now available for PostgreSQL

### Features
- Estate > SQL Server replication page added to display the latest activity of replication jobs
- New alert types for Replication job failure and Replication maintenance job failure added
- Estate > Virtual machines page added to monitor virtual machine usage

### Improvements
- The Analysis page has been updated with a new modern design
- Alert configuration save failures are now displayed in the UI with clear error notifications

## 14.1.0 — 16 October 2025

### Features
- Added native ServiceNow integration for raising incidents when alerts occur
- Added native Microsoft Teams integration for notifications when alerts occur
- Monitoring of MySQL instances running on Azure Flexible Server is now supported
- Extended Oracle support to include Oracle Data Guard monitoring
- Added overall wait event/class information for Oracle Installs
- Enterprise edition - Added ability to export all sysadmins, serveradmins or securityadmins across all servers

### Improvements
- Query Executions page now shows the Memory Grants associated with each query
- Enterprise edition - Estates with Amazon RDS SQL Server instances will now auto-detect Active Directory
- Enterprise edition - Improved the clarity of the UI in Security > Permissions > Servers, splitting the Users tab into AD Users and Logins


---PRODUCT---
# TDM — Subsetter
<!-- source: https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/subsetting/subsetter-release-notes -->
<!-- fetched: 2026-04-03 | latest: 2.2.14.3210 (12 March 2026) -->

## 2.2.14.3210 — 12 March 2026

### Fixes
- Fixed an issue where a syntax error was caused by a comma (,) as a decimal separator instead of a period (.) collation

## 2.2.13.3174 — 10 March 2026

### Features
- Added support for token-based authentication via Azure for SQL Server only

## 2.2.12.3127 — 25 February 2026
- Internal updates

## 2.2.11.3077 — 20 February 2026

### Fixes
- Fixed a compatibility issue with MySQL 9.6.0

## 2.2.10.2960 — 4 February 2026
- Internal updates

## 2.2.9.2828 — 6 January 2026
- Internal updates

## 2.2.8.2706 — 25 November 2025

### Fixes
- Fixed an issue where temporal table hidden columns were being set to visible after subsetting (SQL Server only)

## 2.2.7.2456 — 21 October 2025

### Fixes
- Fixed an issue where untrusted constraints were being restored as trusted (SQL Server only)
- Fixed an issue where copying large records to the target database can sometimes deadlock (SQL Server only)

## 2.2.5.2230 — 3 October 2025

### Fixes
- Fixed an issue where excluded tables were not being emptied in the target database when using Overwrite target database write mode

## 2.2.4.2138 — 22 September 2025

### Fixes
- No longer CASCADE when truncating target database tables in Overwrite mode (Oracle only)

## 2.2.3.2120 — 18 September 2025

### Fixes
- Fixed an issue where foreign keys were being re-enabled after subsetting but were being left as untrusted (SQL Server only)
- Fixed an issue where databases with square brackets in their names caused a crash (Oracle only)

## 2.2.2.2056 — 15 September 2025

### Features
- Added support for subsetting temporal tables in SQL Server
- `maxTableCopyParallelism` can now be set in the options file to control the maximum number of tables to copy in parallel

## 2.2.0.1742 — 4 August 2025
- Static data tables are now considered as the end of the traversal graph

## 2.1.14.1471 — 24 June 2025

### Features
- Added the ability to follow forward only relationships for starting tables

## 2.1.13.1440 — 23 June 2025

### Features
- Added support for MariaDB as a supported value for `--database-engine`

### Fixes
- Fixed an issue where subsetter tries to insert/update a record without a value specified for a specific column in MySQL

## 2.1.9.7997 — 19 May 2025

### Features
- Added the ability to allow subsetting when there are no foreign keys using the `--force` option

## 2.1.5.7733 — 18 March 2025

### Features
- Added help links for validation errors
- Added a `--dry-run` option to perform a dry-run with no subsetting
- Added a `--force` option to allow subsetting when the source and target database schemas are not an exact match

## 2.0.1.6888 — 21 October 2024

### Features (v2 breaking change release)
- Renamed the command line executable from subsetter to rgsubset
- Renamed the configuration file to options file
- Moved some command line flags affecting the behaviour of subsetting to the options file
- Moved static data tables to their own section instead of a flag on starting tables
- Added the ability to specify target size using percentages
- Added a default target size of 10% (up to a maximum of 1GB) when running subsetting without specifying any target size or starting tables


---PRODUCT---
# TDM — Anonymize
<!-- source: https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/anonymization/anonymize-release-notes -->
<!-- fetched: 2026-04-03 | latest: 2.3.14.2173 (20 February 2026) -->

## 2.3.14.2173 — 20 February 2026
- Internal updates

## 2.3.13.2140 — 11 February 2026

### Features
- Added new column width conditions to classification rules: `is set` and `is not set`

### Fixes
- Updated built-in Social Security Number rule to ignore names containing 'ADDRESSN'

## 2.3.12.2123 — 10 February 2026

### Features
- Improved data scanning classification by using information such as presence of special characters like `@`, pattern matching and data value statistics (preview)

## 2.3.11.2111 — 5 February 2026

### Features
- Improved data scanning classification of table columns that contain numbers e.g. dates, SSNs, Credit Card Numbers (preview)

## 2.3.10.2091 — 3 February 2026

### Fixes
- Updated built-in Social Security Number rule to ignore 'ADDRESSNUMBER'
- Fixed an issue where mapping unsupported database type to a dataset was throwing exception

## 2.3.5.1990 — 12 January 2026

### Fixes
- Fixed an issue where multi-column constraints ignore columns that are not being masked

## 2.3.0.1622 — 10 November 2025

### Features
- Working with Oracle now operates at the pluggable database (PDB) level, meaning that multiple schemas can be handled at the same time

### Fixes
- Fixed an issue where columns defined using custom data types were not being classified correctly (SQL Server only)

## 2.2.19.1475 — 21 October 2025

### Features
- Added the ability to pass multiple classification files to the `map` command
- Added the ability to pass multiple masking files to the `mask` command

### Fixes
- Fixed an issue where connection timeouts set in a connection string were being ignored
- Fixed an issue where uniqueness constraints were using included columns (SQL Server only)

## 2.2.16.1371 — 13 October 2025

### Fixes
- Fixed an issue with masking partitioned tables in PostgreSQL
- Fixed an issue where the `RandomNumbers` dataset sometimes generates values too large to fit into the column being masked

## 2.2.15.1292 — 6 October 2025

### Features
- Added the ability to anonymize many different number types with the `RandomNumbers` dataset

## 2.2.12.1133 — 15 September 2025

### Features
- Added support for masking of temporal tables in SQL Server
- The names of temporary row identifiers now start with `rg_`, making them easier to identify

## 2.2.11.1089 — 9 September 2025

### Features
- Added a conditional custom dataset that allows the dataset for a column to vary based on the data in the row
- Added ability to mask binary columns using a binary file dataset

## 2.2.10.927 — 21 August 2025

### Features
- Added the ability to classify with data scanning and AI using the `--scan-data` command line parameter

## 2.2.4.683 — 21 July 2025

### Features
- Added a `concat` function to the pre and post masking transforms
- Added the ability to reference other columns in the same table in pre-masking transformations

## 2.2.3.606 — 15 July 2025

### Features
- Added the ability to define datasets at the table level as well as globally
- Added the ability to create datasets using an expression to use values from other columns
- Added new datasets for `Domains` and `TopLevelDomains`

## 2.2.1.418 — 23 June 2025

### Features
- Added support for MariaDB as a supported value for `--database-engine`

## 2.1.15.3814 — 9 June 2025

### Features
- Added the ability to run pre-masking and post-masking transforms on the data
- Added a default classification rule to classify columns called 'forename' as `GivenNames`
- Added a new `DateVariance` dataset

## 2.1.7.3006 — 13 March 2025

### Features
- Improved the performance of masking when running against a SQL Server database
- Added the ability to specify the connection string via a `REDGATE_ANONYMIZE_CONNECTION_STRING` environment variable
- Added the ability to use `equals any` and `not equals any` in classification rules
- Added the ability to ignore columns from classification using a custom classification rule


---PRODUCT---
# TDM — GUI (Hub)
<!-- source: https://documentation.red-gate.com/testdatamanager/graphical-user-interface-gui/gui-release-notes -->
<!-- fetched: 2026-04-03 | latest: 0.49.39 (5 March 2026) -->

## 0.49.39 — 5 March 2026

### Changes
- Add ability to edit the treatment JSON directly in the UI with new code view tab on the treatment page

## 0.48.269 — 3 March 2026

### Changes
- Run output downloads now offer three options: human-readable logs (new default), raw CLEF logs, and run artifacts
- Add an error header to the run details page — when a workflow run fails, errors are summarized at the top
- Add licensing debugging information to the Settings page

### Fixes
- Fixed intermittent "Failed to load module script" errors in Monaco code editor by bundling all editor assets locally
- Suppressed harmless ResizeObserver console warnings from Monaco Editor
- Oracle connections can now be edited without an "unimplemented method" error being thrown
- Connections can again be edited even if they cannot be decrypted

## 0.47.4 — 17 February 2026

### Changes
- Support for running an anonymize workflow against multiple target databases at the same time

### Fixes
- Fixed an issue where the downloaded JSON for an anonymize treatment was empty when the treatment had not been edited

## 0.45.37 — 4 February 2026

### Changes
- Reduced the delay experienced after clicking the 'Create Treatment' button

### Fixes
- Fixed an issue in create workflow where source connection could not be selected for Subsetting

## 0.43.51 — 28 January 2026

### Fixes
- Fixed a bug where workflows running both a subset and an anonymize treatment would anonymize the source database instead of the target

## 0.42.59 — 26 January 2026

### Changes
- Add an About dialog showing current product version and a breakdown of all included CLI versions
- New licensing page in the setup wizard is now active

## 0.41.9 — 19 January 2026

### Features
- Pages now all have relevant titles
- Workflows can now be edited
- Require basic auth password to be entered twice in setup wizard to mitigate typos
- Password fields now have a "show password" toggle

### Fixes
- When a new dataset is created for a column and saved, TDM now allocates the newly created dataset to column

## 0.38.335 — 18 December 2025

### Features
- Users can now do a dry run and Exclude columns with issues in Anonymization treatments
- Setup parameters can now be set as environment variables: `REDGATE_TDM_EULA_ACCEPTED` and `REDGATE_TDM_PASSWORD`
- Added data scanning feature in preview for more comprehensive classification of PII

### Changes
- Moved initial classification to create database model

## 0.36.2 — 25 November 2025

### Features
- Users can now do a dry run and Auto-Exclude issues with Anonymization treatments

## 0.34.51 — 24 November 2025

### Features
- The configuration process is now done through a setup wizard in the TDM Hub UI

## 0.32.23 — 12 November 2025

### Features
- The feature for creating custom datasets for masking using AI is now Generally Available (no longer in Preview)

## 0.21.1 — 21 October 2025

### Features
- The installer now creates a SQLite database to use as the backing database for TDM instead of requiring an existing SQL Server instance
- Connections are now filtered by database engine when on the run treatment sidebars

## 0.20.3 — 19 September 2025

### Features
- Connection tests no longer block you from running a treatment or creating a database model
- Connection string builder is now available when adding new connections
- Add ability to exclude tables from subsetting
- Support for both database and instance type connections

## 0.20.2 — 28 August 2025

### Features
- Hide datasets that are too large for the column when masking
- Postgres, MySQL, and Oracle support for connection string builder
- Added ability to create custom datasets for masking using AI (Preview)

## 0.20.0 — 18 August 2025

### Features
- Workflows, Agents and VHDs now broadly available as a Preview in the Enterprise tier
- Added support for multiple file shares per connection
- Add restrictions and warnings to columns that should not be masked
- Cancelling workflow runs on agents now stops the workflow running on the agent
- Individualised parameters can now be used instead of connection strings when creating a database model (SQL Server currently)


---PRODUCT---
# TDM — Workflows
<!-- source: https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/using-workflows-rgworkflow/workflows-release-notes -->
<!-- fetched: 2026-04-03 | latest: 0.5.0 (10 July 2025) -->

## 0.5.0 — 2025-07-10

### Breaking Changes
- The location of VHD Clones has been changed from Program Files to the Application Data folder
- All job and step log event ids now log `jobKey` instead of `jobNumber`

### Changes
- The output connection string of a deploy backup step now always includes both a jdbc and an ado connection string
- Added an `ephemeral` flag to the `export-backup` step which automatically deletes the backup after the workflow finishes
- Added the ability to create and drop logins via the new `create-login` and `drop-login` steps
- Default log file naming scheme is now in `yyyy-MM-dd` instead of `yyyy-dd-M` format

### Fixes
- The log files now include progress logging lines for when jobs and steps are started or finished
- Setting the log path via `--log-file` now logs to that file all the way through the workflow
- When calling command line tools, connection strings and sensitive parameters are no longer logged

## 0.4.0 — 2025-04-23

### Breaking Changes
- Remove the Provision CLI and the repository-based state system as they are obsolete going forward

## 0.3.1020 — 2025-04-08

### Changes
- Added `export-variables` step to export any combination of variables to a JSON file
- Added `--output-zip-file` which creates a zip at the given path at the end of the run containing all logs

## 0.3.924 — 2025-03-18

### Changes
- Add workflow steps for `rggenerate` Plan and Populate

## 0.3.753 — 2025-02-19

### Changes
- Add `database-name` parameters to `subset`, `classify` and `mask` steps

## 0.2.33 — 2025-01-02

### Changes
- Add workflow steps for creating and deleting Redgate Clone images

## 0.2.21 — 2024-11-20

### Breaking Changes
- The CLI has been renamed: Provision.CLI.exe is now rgprovision.exe


---PRODUCT---
# SQL Clone 5
<!-- source: https://documentation.red-gate.com/clone/release-notes-and-other-versions/sql-clone-5-release-notes -->
<!-- fetched: 2026-04-03 | latest: 5.6.26 (13 March 2026) -->

## 5.6.26 — 13 March 2026
- Internal fixes and improvements

## 5.6.25 — 10 March 2026

### Features
- Added support for SQL Server 2025

## 5.6.24 — 18 February 2026
- Internal fixes and improvements

## 5.6.23 — 3 February 2026
- Internal fixes and improvements

## 5.6.22 — 20 January 2026
- Internal fixes and improvements

## 5.6.21 — 17 December 2025
- Internal fixes and improvements

## 5.6.20 — 18 November 2025

### Features
- Adds a new feature flag `SQLCLONE_FORCE_VHDX` which, when enabled, forces images and clones to use the VHDX format instead of VHD

## 5.6.19 — 28 October 2025
- Internal fixes and improvements

## 5.6.16 — 30 September 2025
- Internal fixes and improvements

## 5.6.13 — 5 August 2025

### Features
- Updated third-party libraries

## 5.4.13 — 14 October 2023

### Fixes
- Increased the total number of clones visible in the UI from 1000 to 5000

## 5.4.0 — 6 February 2023

### Features
- SQL Clone now targets .NET 7.0


---PRODUCT---
# SQL Prompt 11.3
<!-- source: https://documentation.red-gate.com/sp/release-notes-and-other-versions/sql-prompt-11-3-release-notes -->
<!-- fetched: 2026-04-03 | latest: 11.3.8.22342 (19 March 2026) -->

## 11.3.8.22342 — 19 March 2026

### Fixes
- Fixed SQL Prompt not loading correctly on start up in SSMS 22.4

## 11.3.7.21945 — 12 March 2026

### Features
- Prompt AI requests now include the SQL Server version of the connected database alongside its schema, significantly increasing chance of AI-generated T-SQL being fully compatible
- The Prompt AI window now displays the SQL Server version of the connected database as a gray suffix after the database name
- Prompt AI fix now respects `GO` batches and will no longer try to incorrectly remove them
- Several improvements to the categorization and display of items in the SSMS/VS command palette

### Fixes
- Fixed registration of Select Synonym in Object Explorer command
- Fixed `Exception has been thrown by the target of an invocation` error when saving SQL Prompt options while the SSMS registered servers tool window was active
- Fixed inconsistent formatting when Check constraint is used
- Fixed an issue where SQL Prompt did not insert a space before the NOT LIKE keyword when formatting SQL
- Fixed an issue where Registered Server tab colors were not displayed in SSMS 21 and 22
- Fixed an issue where SQL Prompt menu was not shown on menu bar in SSMS 21 and SSMS 22 after installation/upgrade

## 11.3.6.21421 — 13 February 2026

### Features
- Added support for SQL Server 2025 database-scoped configuration preview features

### Fixes
- Fixed an incompatibility between SQL Prompt and SSMS 22.3 which caused SSMS to consistently crash when SQL Prompt was installed
- Fixed an issue where aggregate totals were calculated incorrectly when using the German language/region settings
- Fixed an issue that caused code completion to fail for user-defined stored procedures in Microsoft Fabric SQL Databases

## 11.3.5.21197 — 5 February 2026

### Features
- Two SQL Prompt suggestion-based opt-in experimental settings promoted to regular options: Automatically refresh suggestions and Refresh Microsoft IntelliSense cache when refreshing suggestions
- Opt-in setting to prevent Excel's rounding of numerical values when exporting SQL query results promoted to a regular option

## 11.3.4.20814 — 20 January 2026

### Features
- Failure to retrieve the database schema no longer prevents AI requests from completing — they will instead be performed without schema-awareness

### Fixes
- Fixed issue where failure to perform an AI request could leave the work in progress spinner visible
- Fixed an issue where SQL Prompt repeatedly displayed error messages for unsupported authentication types
- Fixed an issue in Code Analysis where extended stored procedures were incorrectly suggested to use named parameter style
- Fixed an issue in Code Analysis where SYSUTCDATETIME was incorrectly identified as a user-defined function
- Fixed an issue in SQL Prompt where script containing JSON_OBJECT would not get formatted

## 11.3.3.20567 — 7 January 2026

### Features
- Query Index Analysis main menu entry now appears under the AI section

### Fixes
- Fixed SQL History panel in the options menu from disappearing when you reset options to default in SSMS
- Fixed performance issue in SQL Prompt when the active formatting style was not stored locally
- Fixed several use cases where the connected database schema was not being sent as part of the AI request

## 11.3.2.20417 — 26 December 2025

### Features
- Added support for Microsoft Fabric

### Fixes
- Fixed issue where SQL Prompt Inline EXEC did not work with cross schema data types
- Fixed SSMS crash on AWS RDS instance

## 11.3.0.20275 — 17 December 2025

### Features
- Added new opt-in preview SQL Prompt AI feature to generate AI-based code completion suggestions that understand your current query editor context


---PRODUCT---
# SQL Compare 16.0
<!-- source: https://documentation.red-gate.com/sc/release-notes-and-other-versions/sql-compare-16-0-release-notes -->
<!-- fetched: 2026-04-03 | latest: 16.0.10.28672 (31 March 2026) -->

## 16.0.10.28672 — 31 March 2026

### New Features
- Support for ORDER clause on clustered and non-clustered columnstore indexes

## 16.0.9.28654 — 24 March 2026

### Bug Fixes
- Fixed Null Reference exception when deploying a data type change to XML column

## 16.0.8.28634 — 17 March 2026

### Bug Fixes
- Memory optimized tables with replaced indexes are now correctly modelled

## 16.0.6.28582 — 24 February 2026

### Bug Fixes
- Fixed an issue where SQL Compare would fail to handle CREATE EXTERNAL MODEL syntax in stored procedure or function bodies

## 16.0.4.28477 — 20 January 2026

### Bug Fixes
- Many more system function names are now correctly recognized
- Fixed offline licensing workflow for SQL Compare docker container

## 16.0.3.28451 — 14 January 2026

### New Features
- Support for || string concatenation operator introduced in SQL Server 2025

### Bug Fixes
- Improved error message for certain invalid filter files
- Database collation is now written to snapshots
- Fixed a connection issue in SQL Snapper where "Encrypt" option was incorrectly set to True when the checkbox was unchecked

## 16.0.1.28365 — 19 December 2025

### New Features
- Use Distroless base image for SQL Compare docker image to reduce image size and improve security

### Bug Fixes
- Fix issue where USING locale was not included for PARSE and TRY_PARSE functions

### Improvements
- Add the name of the file where a parsing error occurs into the error message

## 16.0.0.28327 — 11 December 2025

### Features
- Support for SQL Server 2025

### Breaking Changes
- Remove support for storing passwords in the project file; passwords are now stored in the Windows Credential Manager


---PRODUCT---
# SQL Data Compare 16.0
<!-- source: https://documentation.red-gate.com/sdc/release-notes-and-other-versions/sql-data-compare-16-0-release-notes -->
<!-- fetched: 2026-04-03 | latest: 16.0.9.28654 (24 March 2026) -->

## 16.0.9.28654 — 24 March 2026
- Compatibility with SQL Compare 16.0.9.28654

## 16.0.5.28494 — 28 January 2026

### Features
- Add support for JSON Data Type in SQL Server 2025

## 16.0.4.28477 — 20 January 2026

### Bug Fixes
- Fixed offline licensing workflow for SQL Compare docker container

## 16.0.1.28365 — 19 December 2025

### New Features
- Use Distroless base image for Data Compare docker image to reduce image size and improve security

### Bug Fixes
- Fixed an issue preventing viewing a deployment script for an object

### Improvements
- Add the name of the file where a parsing error occurs into the error message

## 16.0.0.28327 — 11 December 2025

### Features
- Support for SQL Server 2025

### Breaking Changes
- Remove support for storing passwords in the project file; passwords are now stored in the Windows Credential Manager
