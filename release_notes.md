# Redgate Release Notes — Snapshot
<!-- fetched: 2026-04-13 | latest: 0.53.1111 (13 April 2026) -->
<!-- split on `---PRODUCT---` to get one file per product -->

---PRODUCT---
# Flyway Desktop
<!-- source: https://documentation.red-gate.com/fd/flyway-desktop-9-release-notes-329778435.html -->
<!-- fetched: 2026-04-17 | latest: 9.3.4 (17 April 2026) -->

#
## 9.3.4 — 17 April 2026

### New Features
- Code review issues such as noqa warnings and regex rules will now underline the whole line in addition to adding an icon annotation.

## 9.3.3 — 16 April 2026

### New Features
- Added an apply fix action to the code review panel for issues with a suggested fix.

## 9.3.1 — 10 April 2026

### Improvements
- Rearranged options on the Automated Deployment page to emphasise their position in the heirarchy

### Bug Fixes
- Fix dialect mapping for postgres to ensure code review can run successfully in postgres projects
- Fixed issue with layout of Automated Deployment page at small screen sizes
- Fixed an issue with code review warnings where out of date noqa warnings would persist in the issue view

## 9.3.0 — 09 April 2026

### Bug Fixes
- Fixed issue where upgrading projects with obsolete configurations would cause migrations tab to disappear

## 9.2.4 — 07 April 2026

### Bug Fixes
- Fixed an issue where the splash screen could not be found, preventing Flyway Desktop from loading

## 9.2.3 — 07 April 2026

### New Features
- Added new Oracle option ‘IncludePermissionsUserCheck’ to script a condition around GRANTs and REVOKEs to ensure that these statements are skipped if the grantee/revokee is the user running the deployment script.
- Projects created with a previous version of Flyway that contain deprecated configuration fields can now be automatically upgraded when opened
- Fixed an issue where repeatable scripts would add erroneous blank options to dropdowns in the Automated Deployment page

### Bug Fixes
- Fixed issue in the sample project where erroneous UI would block access to the generate migrations tab
- Fixed an issue where the Version control sidebar wouldn’t always refresh the file list after pulling changes
- Fixed an issue where the push tab’s ‘Available to push’ list would not clear after a successful push
- Fixed an issue where the tour in the sample project would be unable to progress

## 9.2.2 — 19 March 2026

### Bug Fixes
- Fixed issue where the Generate Migrations page could run generate when there were no differences, or only unselectable differences

## 9.2.1 — 18 March 2026

### Bug Fixes
- Fixed headings appearing too large on some pages
- Fixed an issue preventing the creation of MongoDB projects

## 9.2.0 — 17 March 2026

### New Features
- Code review display (preview) added to the generate migrations and deployment script screens. Code review will show potential issues in scripts identified during generation, and by configured code analysis engines for Flyway check. By default, Flyway check will use the SQL Fluff engine.

### Improvements
- On the baseline screen, the list of available tables for static data configuration will now be retrieved from the configured target environment, if set. If not it will use the development environment.

## 9.1.1 — 04 March 2026

### Improvements
- Removed SQL Server ‘IgnoreSynonymDependencies’ comparison option

## 9.1.0 — 18 February 2026

### New Features
- Add Oracle comparison option to ignore invisible columns
- Add Oracle comparison option to ignore inivisble indexes

### Improvements
- Multiple project tabs can now be opened

## 9.0.3 — 12 February 2026

### New Features
- Added previous/next change navigation buttons to the version control diff viewer

### Improvements
- The diff viewer header now adapts to its container width instead of the screen width

### Bug Fixes
- Fixed an issue when reviewing dependencies during deployment with a partial selection of objects

## 9.0.2 — 11 February 2026

### New Features
- The automated deployment page no longer displays commands which are not supported, for database flavors without advanced comparison support

### Bug Fixes
- Fixed error in automated deployment page ad hoc rollback scripts

## 9.0.1 — 05 February 2026

### New Features
- Added scripts for deploying specific migrations and for rolling back deployments to the automated deployment page

### Improvements
- Baseline scripts no longer give the option for AI descriptions as such scripts are often too large to be used for generation.

### Bug Fixes
- Fixed an issue where an error page could not be dismissed on the Migration scripts page

## 9.0.0 — 03 February 2026

### New Features
- Removing preview support for Redgate Clone as a provisioner and resolver from connection dialogues.
- Added copy script to clipboard button on Automate deployment page
- check.majorRules, check.majorTolerance, check.minorRules, check.minorTolerance settings have been removed from the list of advanced parameters on the migration scripts page, as they are no longer supported by the flyway commandline

### Improvements
- There is now a dedicated deploy page for manual deployments on projects with migrations enabled
- Improved form validation in the create branch modal to show validation messages instead of disabling the button

### Bug Fixes
- Fixed warning messages for generated undo scripts showing the same content as those for deployment scripts

---PRODUCT---
# Flyway CLI
<!-- source: https://documentation.red-gate.com/fd/release-notes-for-flyway-engine-179732572.html -->
<!-- fetched: 2026-04-14 | latest: 12.4.0 (14 April 2026) -->

## 12.4.0 — 14 April 2026

### New Features
- Added a new rule: RG23 - Configurable forbidden alias names
- Add a "checksumIncludeReferencedScripts" parameter under "Oracle" namespace to control whether referenced scripts are included in checksum calculation
- Issue 4223 Support the Gradle configuration cache in flyway-gradle-plugin

### Bug Fixes
- Fix NullPointerException when comparison engine returns null collection fields
- in json output of check code, "file_pos", "file_pos_end" properties will now adjust for windows line endings present in scripts. Suggested fix content will now attempt to match the line endings used by the script.
- Fix a bug where the "validate" operation may cause a "NullPointerException"
- Issue 4221 Fixed Snowflake connectivity failure after JDBC driver update when PUBLIC schema does not exist
- fix CLI scoped namespace resolution when nested parameters are not immediately after their flag
- Fixed incorrect file position returned in code review json for some types of sql fluff insertion fixes

### Improvements
- Upgraded RgCompare.Cli from 1.52.3.3436 to 1.52.6.3589

## 12.3.0 — 31 March 2026

### Breaking Changes
- Added a new rule: RG22 - Ensure the same table is not created and then dropped or vice versa in the same script

### New Features
- Flyway includes SQLite support in Native Connectors mode
- Added additional properties to json output of check code: "engine", "file_pos", "file_pos_end" and (optional) "fixes".

### Bug Fixes
- Fix RG18 and RG19 handling of bracketed identifiers

### Improvements
- Upgraded RgCompare.Cli from 1.52.1.3430 to 1.52.3.3436

## 12.2.0 — 26 March 2026

### New Features
- Added a new rule: RG19 - Simple check to ensure table names are not pluralized. More complex pluralizations should be handled by hand.
- Added a new rule: RG20 - Object names should be contained within square brackets.
- Add RG21, a configurable rule that can enforce naming prefixes for multiple object types. (Table, View, Procedure, Function, Schema)
- added check.code.noqaSeverity setting for configuring the severity of the warning about use of --noqa in migrations checked by SQLFluff as part of check -code

### Improvements
- check -code now generates a SARIF 2.1.0 report file (.sarif) alongside JSON and HTML reports, enabling integration with GitHub Code Scanning, Azure DevOps, and other SARIF-compatible tools
- Code Analysis renamed to Code Review in output from check command
- the regex rule engine used by check -code will no longer automatically convert line endings before applying rules for the contents of migrations
- Flyway now correctly exits with a non-zero exit code when migrations fail and multiple report generators are loaded
- Updated Snowflake JDBC driver to 4.0.2
- Upgrade aws-secretsmanager to 2.0.4
- Updated RgCompare.Cli from 1.52.0.3327 to 1.52.0.3345
- Updated RgCompare.Cli from 1.52.0.3345 to 1.52.0.3385
- Upgraded RgCompare.Cli from 1.52.1.3407 to 1.52.1.3410
- Upgraded RgCompare.Cli from 1.52.1.3410 to 1.52.1.3424
- Upgraded RgCompare.Cli from 1.52.1.3424 to 1.52.1.3430

### Bug Fixes
- Fix parsing of backticks for quoted strings in MySQL

## 12.1.1 — 17 March 2026

### Improvements
- Implement non statement level callbacks in Native Connectors for undo, info, baseline and repair
- serverId in Maven plugin now correctly respects user-configured value via flyway.serverId
- snapshot no longer saved during dry run for migrate, undo, and deploy commands
- Gradle plugin now correctly reads connectRetries, connectRetriesInterval, and failOnMissingLocations from the flyway extension configuration
- Java Migrations correctly show the script path when an exception is thrown due to duplicated versions
- improved startup time for lightweight CLI commands like flyway version and flyway auth
- Upgrade lombok to 1.18.44

### Bug Fixes
- fixed NPE in Oracle database type when using instrumentation agents like JaCoCo
- fix NullPointerException in SnapshotVersionRetriever when applied migrations include null-version entries (repeatable migrations, SCHEMA markers)

## 12.1.0 — 9 March 2026

### New Features
- Flyway now supports using the 'init' command to automatically update TOML configuration files for Desktop users
- InsertRowLock now supports custom locking strategies for databases without primary key support
- Foundational support for Babelfish added.

### Improvements
- Removed SQL Server 'IgnoreSynonymDependencies' comparison option
- changed the snapshot history limit default to 5, so that ad-hoc rollbacks are available for recent deployments by default
- drift resolution folder path in JSON output now serializes as an absolute file path string instead of a URI
- Upgrade Jetty-server from 12.0.21 to 12.1.6
- Upgrade Jackson from 3.0.4 to 3.1.0

### Bug Fixes
- Fix NullPointerException when executing callbacks where callback name is null

## 12.0.3 — 27 February 2026

### Improvements
- report filenames and drift resolution folder now included in JSON output when check -drift fails with failOnDrift enabled
- Oracle Schema History Table synonyms no longer appear as drift in Check reports
- Upgrade Jackson from 2.19.1 to 3.0.4

### Bug Fixes
- Fixed an issue where Flyway failed when applied migrations specified in 'cherryPick' were not found in Native Connectors mode

## 12.0.2 — 20 February 2026

### New Features
- Add flag -check.generateReport to control whether check should write the result to a file

### Improvements
- flyway check now honours environment-specific cleanDisabled override when no provisioner set for the build database
- running snapshot against an Oracle database without specifying schemas will now use the default schema if set
- Auth can now be output as JSON when outputType=json is set

## 12.0.1 — 12 February 2026

### Improvements
- check -changes now honours target parameter for setting a target version
- Redgate Clone documentation marked as deprecated and Flyway Desktop sections removed
- Bump Oauth2-oidc-sdk to 11.32

### New Features
- Added alias for azureAdInteractive resolver to entraId
- Oracle now uses synonyms on new schema and snapshot history tables to enable them to be called unquoted

### Bug Fixes
- Fixed issue where configuration parameters would not be listed when running --help on check with a flag specified
- Fixed issue where drift resolution filter generation would fail when drift found involving objects with no schema
- Fix static data ordering when on Windows and using a string primary key

## 12.0.0 — 28 January 2026

### New Features
- The 'passOnRegexMatch' field in the Code Analysis Regex Rule is no longer supported
- The 'plugin' namespace for configuration parameters is no longer supported
- The 'majorRules', 'minorRules', 'majorTolerance', and 'minorTolerance' settings have been removed and are now no longer supported in Code Analysis
- MongoDB support via JDBC has been removed. MongoDB is now supported only in Native Connectors mode
- Support for SQLFluff versions prior to '1.3' has been removed
- Issue 4194 Add support for nested IF statements in Snowflake parser

### Improvements
- The environment variable 'REDGATE_LICENSING_PERMIT_PATH' has been replaced by the standard 'FLYWAY_OFFLINE_PERMIT_PATH'
- Flyway no longer ships the default Redgate regex ruleset
- Reports now display results from separate flyway command invocations on the main page. Reports no longer contain a timestamp dropdown.
- Changed the method signature of the public 'CommandExtension' interface
- CompositeResult is now a record
- Upgraded RgCompare.Cli from 1.48.1.2582 to 1.50.1.2648

## 11.20.3 — 26 January 2026

### Improvements
- Upgraded RgCompare.Cli from 1.48.1.2503 to 1.48.1.2582
- Upgraded sqlfluff from 3.5.0 to 4.0.0

### Security Fixes
- Issue 4152 Upgrade google-cloud-spanner to 2.34.1 and google-cloud-storage to 2.60.0 to fix CVE-2025-55163

## 11.20.2 — 15 January 2026

### Improvements
- Upgraded RgCompare.Cli from 1.47.1.2438 to 1.48.1.2503

## 11.20.1 — 8 January 2026

### Improvements
- generated drift incorporate script will now contain object existence checks for SQL Server
- When check is called with both -drift and -changes flags, -drift is now always run first as there will be a performance improvement when using a build environment
- Upgraded RgCompare.Cli from 1.47.0.2331 to 1.47.1.2438
- Upgrade Netty from 4.2.7 to 4.2.9

## 11.20.0 — 22 December 2025

### Improvements
- model, generate, and prepare commands now return full selection output instead of a list of names of included dependencies
- Upgraded RgCompare.Cli from 1.46.0.2246 to 1.47.0.2331
- Upgrade MariaDB from 2.7.11 to 2.7.13

## 11.19.1 — 18 December 2025

### Improvements
- It is now possible to switch off automatic dependency handling for Oracle when performing comparison operations. This is done by setting includeDependencies = false in the [redgateCompare.oracle.options.behavior] section of the config file.
- LICENSES-THIRD-PARTY.txt format has changed. Will now refer to the shipped license file instead of duplicating the license text.
- Verified compatibility for SingleStore 8.9
- Upgraded RgCompare.Cli from 1.45.1.2176 to 1.46.0.2246

### Bug Fixes
- Fixed an issue where Flyway treated skipped SQLFluff code analysis as a successful linting run

## 11.19.0 — 8 December 2025

### Bug Fixes
- Fixed issue when running check -drift against a database with no snapshot history table

### Improvements
- CLI now ships with Java 25
- Upgraded RgCompare.Cli from 1.45.1.2083 to 1.45.1.2176
- Upgraded MongoDB Sync Driver to 5.6.1

## 11.18.0 — 27 November 2025

### New Features
- 'testConnection' command is now supported in Native Connectors mode

### Improvements
- When using Oracle in 'Native Connectors' mode, Flyway now fails early during database initialization if the migration execution tool cannot connect
- When using MongoDB in 'Native Connectors' mode, Flyway now fails early during database initialization if the migration execution tool cannot connect
- Upgraded RgCompare.Cli from 1.45.1.2021 to 1.45.1.2083
- Upgraded sqlfluff from 3.4.2 to 3.5.0

### Bug Fixes
- Fix issue with obtaining the value of SQLPlus placeholders on Oracle 26ai
- fixed an issue with using the create-database provisioner where a reprovision operation would not fully occur if no additional provisioner configuration was specified

## 11.17.2 — 24 November 2025

### Bug Fixes
- Fixed an issue where the bundled SqlFluff was not included with some versions of the CLI

## 11.17.1 — 20 November 2025

### Improvements
- Redgate bundled SQLFluff was not shipped in this release due to a packaging problem
- Snapshot history version column will now be populated when a database is used as the source for the snapshot
- Comparison options can now be configured via the command-line
- testConnection command can test Comparison Engine connections
- snapshots can be written to an s3 bucket and read from an s3 bucket when performing drift checks
- Upgraded RgCompare.Cli from 1.45.1.1851 to 1.45.1.2021

### New Features
- Added ability to run code analysis on individiual scripts with 'check.scriptFilename' and new 'SCRIPT' scope
- Flyway now supports reporting the usage of '--noqa' tags that suppress code analysis linting

### Bug Fixes
- Fixed missing descriptions for SQLFluff rules RG07, RG08, RG11, and RG12
- Issue 4172 Fix getting Oracle metadata properties
- Issue 4169 Fixes an additional connection being created when running migrate or undo

## 11.17.0 — 11 November 2025

### Improvements
- It is now possible to capture and store snapshots in a target database in a flyway snapshot history table following a migrate, undo, or deploy action. These snapshots can be used for drift analysis and potentially for rollback. For more information see snapshots.
- standard logging is now included with outputType=json; it is posted via STDERR
- if deployed snapshot is configured but not found, drift detection will warn rather than fail, allowing for initial deployment to succeed
- Test connection will only output success if it is successful
- Upgraded RgCompare.Cli from 1.45.1.1821 to 1.45.1.1851

### Bug Fixes
- Fixed issue where namespace short-circuiting would not work when environment parameters were set

## 11.16.0 — 6 November 2025

### Improvements
- Redgate bundled SQLFluff was not shipped in this release due to a packaging problem
- Regex code analysis now reports all identified violations instead of only the first one
- Flyway now uses the packaged SQLFluff for Enterprise users by default, unless this feature is explicitly turned off
- Updated latest version of SQL Server to 2025
- Oracle now respects the encoding configuration parameter when reading SQL migrations.
- Resolve issue causing output progress only being set when the user is set.
- Upgraded RgCompare.Cli from 1.44.0.1673 to 1.45.1.1821
- Upgrade mssql-jdbc to 12.10.2
- Upgrade Couchbase SDK to 3.9.2
- Upgrade Databricks JDBC to 3.0.1
- Upgraded Netty to 4.2.7

### New Features
- Added a new 'testConnection' command to test the validity of a configured database connection

## 11.15.0 — 23 October 2025

### Improvements
- Flyway now provides clearer error messages when online authentication methods fail
- Simplified setting debugMode and quietMode in Loggers. When using Flyway via the Java API, Log level is now configured via LogFactory.setLogLevel(LogLevel). All appropriate loggers will now honor the LogLevel including quietMode (most loggers were previously flawed and would ignore this)
- Upgraded RgCompare.Cli from 1.44.0.1656 to 1.44.0.1673

## 11.14.1 — 15 October 2025

### New Features
- Flyway now supports configuring Offline Permits via command-line parameters and TOML configuration

### Improvements
- Released first set of Redgate code analysis rules for SQLFLuff (RG01-RG08)
- Issue 4129 Update Snowflake driver to 3.27.0
- Issue 4135 Improved redaction of passwords in JDBC connection strings
- Issue 4151 No longer crash when calling ClassUtils.getInstallDir if jars located at root of filesystem
- Upgraded RgCompare.Cli from 1.44.0.1580 to 1.44.0.1656

## 11.14.0 — 9 October 2025

### New Features
- Packaged SQL Fluff added to docker images
- Enhanced exception handling during Code Analysis to allow Flyway to continue generating the Report if partial results are already available

### Improvements
- Flyway now provides more comprehensive details in code analysis results
- Issue 4155 Schema history index is now created in a specified tablespace for Oracle and DB2
- stop detecting schema model folder as a SQL server schema model when it was empty but had empty sub folders
- S3ClientFactory has moved to the flyway-locations-s3 module
- Upgraded RgCompare.Cli from 1.44.0.1569 to 1.44.0.1580

## 11.13.3 — 7 October 2025

### New Features
- JVM Startup time added to verbose logs

### Improvements
- Issue 4119 Update shaded aws-secretsmanager-jdbc to not include io.netty to remove vulnerable dependencies
- Upgraded RgCompare.Cli from 1.43.0.1498 to 1.44.0.1569

## 11.13.2 — 26 September 2025

### New Features
- Deprecated constructor on Location class. Use new static factory method instread.

### Improvements
- it is now possible to implement locations via plugins
- Upgraded RgCompare.Cli from 1.42.2.1345 to 1.43.0.1498

## 11.13.1 — 17 September 2025

### Improvements
- Flyway now provides clearer error messages when attempting to load an unlicensed plugin

## 11.13.0 — 16 September 2025

### Improvements
- It is now possible to define beforeDeploy, afterDeploy, and afterDeployError callbacks in locations specified by the callbackLocations parameter. This allows logic to be executed before and after script execution for state-based deployments.
- it is now possible to specify callback-specific locations using the callbackLocations parameter
- Exceptions using batch will now display the line number of the offending SQL causing the error
- The Callback interface now extends a generic interface. The compile-time signature is unchanged.
- Upgraded RgCompare.Cli from 1.41.0.1246 to 1.42.2.1345

### New Features
- deploy command now supports errorOverrides, allowing for graceful handling of SQL Server PRINT statements
- Couchbase foundational support is now in preview

### Security Fixes
- Bump netty-common-http to 4.1.125 to fix CVE-2025-58057

## 11.12.0 — 4 September 2025

### New Features
- A new 'failOnError' mode has been introduced in Flyway 'check' code analysis
- add support to generate undo script for state based model migration

### Improvements
- 'majorRules' and 'minorRules' parameters in Code Analysis are now deprecated
- Upgraded RgCompare.Cli from 1.40.0.1194 to 1.41.0.1246

### Bug Fixes
- Fixed an issue where fetching the list of static data tables may fail when using Azure AD interactive authentication

## 11.11.2 — 21 August 2025

### Improvements
- afterConnect callback is now available outside of Native Connectors
- Upgraded RgCompare.Cli from 1.39.4.1185 to 1.40.1.1194

### Bug Fixes
- Fixed jar for aws-secretsmanager

### Security Fixes
- Bump Netty-common, netty-resolver and netty-codec-http2 to 4.1.124 to fix CVE-2025-55163

## 11.11.1 — 14 August 2025

### Improvements
- Table of useful configuration options will now print if no migrations found
- When performing operations using the results of database comparison capabilities (model, generate, prepare, diffText) for SQL Server and Oracle databases, selecting static data differences will fail if the associated table does not exist in the target database and is not also included for selection
- Upgraded RgCompare.Cli from 1.39.0.1098 to 1.39.4.1185

## 11.11.0 — 8 August 2025

### Improvements
- Removed flywayTelemetryManager from CommandExtension API signature
- Update community dbs to 10.24.0
- MongoDB Native Connectors now handles the case where no authentication is explicitly specified gracefully
- Upgraded RgCompare.Cli from 1.38.0.1077 to 1.39.0.1098

## 11.10.5 — 31 July 2025

### New Features
- New configuration option that allows a WHERE clause to be specified for comparison operations on each static data table to filter the returned rows
- Added full aws-secretsmanager-jdbc dependencies

### Improvements
- Upgraded RgCompare.Cli from 1.38.0.1042 to 1.38.0.1077

## 11.10.4 — 24 July 2025

### New Features
- Oracle Database Flashback support for Native Connectors Oracle
- Added community db IRIS
- Added community db QuestDB

### Improvements
- 'passOnRegexMatch' parameter in Regex Code Analysis is now deprecated
- Upgraded RgCompare.Cli from 1.38.0.974 to 1.38.0.1042
- Upgraded sqlfluff from 3.4.1 to 3.4.2

## 11.10.3 — 17 July 2025

### Improvements
- Code analysis reports now display both the number of files with violations and the total number of violations
- Issue 4089 Gradle plugin now uses Extensions API over deprecated Conventions API
- Upgraded RgCompare.Cli from 1.37.0.926 to 1.38.0.974
- org.apache.commons:commons-lang3 to 3.18.0
- Upgraded Jackson from 2.15.2 to 2.19.1

## 11.10.2 — 10 July 2025

### New Features
- A new parameter has been added to Regex Rule configuration files, allowing individual Regex Rules to be selectively disabled

### Improvements
- Fabric Data Warehouse is now available in Preview
- Upgraded RgCompare.Cli from 1.36.0.820 to 1.37.0.926
- mssql-jdbc 12.6.3 -> 12.10.1

### Bug Fixes
- Fixed an issue where baseline scripts were not included during check -changes and check -drift

## 11.10.1 — 3 July 2025

### Improvements
- The 'help' command now provides targeted help for individual 'check' sub-commands
- Update terminology in docs from AAD to Microsoft Entra

### New Features
- New SQL Server projects will now surface 'PRINT' statements as info logs instead of warnings with a default error override in the project settings

### Bug Fixes
- Fixed an issue where the 'shouldExecute' configuration was ignored by Flyway during Callbacks execution in Native Connectors mode

## 11.10.0 — 26 June 2025

### New Features
- error output is now a record and supports custom payloads for different exception types
- It is now possible to set generate.usePlaceholders=true to allow the generate verb to place placeholders into generated files
- Flyway now supports specifying the code analysis scope for migrations
- Flyway now supports configuring the SQL dialect for code analysis via a dedicated configuration parameter

### Improvements
- Backup provisioner will no longer attempt to create users that already exist
- Native Connectors is now available via the API
- Issue 4092 Gradle tasks now use lazy instantiation
- flyway prepare target parameter will now default to the value of the environment parameter if the source is schema model or migrations. This makes it more straightforward if the connection details are provided as parameters rather than as a toml environment, and makes the command neater if prepare and deploy are chained together.
- Deleted migrations and baseline markers are now ignored when running check -drift and check -changes
- Upgraded OJDBC 11 from 21.1.0.0 to 21.18.0.0

## 11.9.2 — 19 June 2025

### Improvements
- The snapshot command now creates any missing parent directories for the provided snapshot file path
- Flyway code analysis now reports analyzed files more accurately
- Deprecated MongoDB using legacy JDBC driver. Please make sure Mongosh is installed to use Native Connectors
- improved error message information for script migration errors
- Upgraded RgCompare.Cli from 1.33.6.583 to 1.34.8.647

### New Features
- MongoDB Native Connectors now supports outputQueryResults for Javascript migrations
- Fabric SQL Database support added for foundational capabilities

### Bug Fixes
- Fixed an issue where Flyway would throw an error during code analysis if no specific connection URL was provided

## 11.9.1 — 5 June 2025

### Improvements
- SQLFluff Code Analysis will now show the line number and position of a violation
- suppressed incorrect warning about transactions appearing when running prepare
- Upgraded RgCompare.Cli from 1.33.6.573 to 1.33.6.583

## 11.9.0 — 2 June 2025

### Improvements
- OSS command-line artifacts will now be downloaded from the release tag on GitHub instead of Maven
- Flyway now allows enabling or disabling Code Analysis Rules Engines via configuration
- difference IDs are now included in diffText console output.
- Upgraded RgCompare.Cli from 1.33.3.433 to 1.33.6.573
- Databricks JDBC driver 2.7.1 -> 2.7.3

### New Features
- diffText console output will use the unified diff format when -color=never is set or color support has not been detected.

### Bug Fixes
- Fixed an issue where the MongoDB connection string's 'defaultauthdb' configuration was not being correctly applied

## 11.8.3 — 20 May 2025

### New Features
- Add cubrid community database

### Improvements
- Upgraded RgCompare.Cli from 1.32.0.269 to 1.33.3.408

## 11.8.2 — 13 May 2025

### Improvements
- Jackson-databind is now a dependency of flyway-core
- Issue 4074 MongoDB Native Connectors now throws when there is a writeError
- NC Mongo now uses temporary files to remove issues with " characters in migrations
- Reports will now display the environments used by Flyway
- Upgraded RgCompare.Cli from 1.30.3.102 to 1.32.0.254

### Bug Fixes
- Fixed a bug where SQLFluff code analysis reported files with violations even when the violation count was zero

### New Features
- Support Create table inside IF THEN block for BigQuery

## 11.8.1 — 6 May 2025

### Improvements
- Issue 4068 Snowflake will not set a role after a migration if the current role is the same as the original role before a migration
- Issue 4046 Make jackson libraries optional on flyway-core. JSON and TOML features will require these libraries
- Flyway now throws error if PAT is set in OSS edition
- Upgraded RgCompare.Cli from 1.30.2.26414 to 1.30.3.102

### New Features
- added Oracle debug information to documentation

## 11.8.0 — 24 April 2025

### New Features
- Fixed an issue where the TLS auto-configuration failed to recognize a supported object type in the client PEM file
- The PostgreSQL parser now supports CASE statements within a BEGIN ATOMIC statement
- Issue 4055 Add support for STREAMLIT objects to Snowflake parser
- Native Connectors now supports the afterConnect callback. This will function similarly to initSql which this will be replacing

### Improvements
- flyway will raise an error if a provisioner is requested to be used when dry run is set
- Deprecate detectUserByUrl and detectPasswordByUrl methods from the DatabaseType API
- Upgraded RgCompare.Cli from 1.30.2.26351 to 1.30.2.26414
- Upgraded sqlfluff from 3.3.1 to 3.4.0

## 11.7.2 — 17 April 2025

### Improvements
- MongoDB Native Connectors can now use the database from the url instead of the default test database
- Upgraded RgCompare.Cli from 1.30.2.26299 to 1.30.2.26351
- Update databricks-jdbc to 2.7.1

### New Features
- Issue 4033: Add support for the AWS Wrapper with PostgreSQL

### Security Fixes
- Update jetty-server to 9.4.57.v20241219 to fix CVE-2024-6763

## 11.7.1 — 14 April 2025

### New Features
- Native Connectors for Oracle now supports clean
- Added new error code FAILED_BASELINE_MIGRATION to convey failure when migration a baseline

### Improvements
- Upgraded RgCompare.Cli from 1.30.2.26158 to 1.30.2.26299
- Upgraded azure-identity 1.14.2 -> 1.15.4
- Upgraded msal4j 1.15.1 -> 1.20.0

## 11.7.0 — 9 April 2025

### New Features
- Flyway now supports Native Connectors mode for Oracle Database

### Bug Fixes
- Fixed an issue where diff comparisons of empty schema models to empty would use the SqlServer comparison engine
- Fixed an issue where the MongoDB connection string's 'authSource' parameter was not being correctly applied
- Fixed an issue where performing a dry run on non-Native Connectors databases triggered a misleading Native Connector warning message

### Improvements
- Upgraded RgCompare.Cli from 1.30.2.26104 to 1.30.2.26158

## 11.6.0 — 3 April 2025

### Improvements
- The shape of the JSON object during an error has changed to include 'sqlState' and 'sqlErrorCode' for conveying the SQL state and error code from a database-level exception
- Upgraded RgCompare.Cli from 1.30.1.26056 to 1.30.2.26104

## 11.5.0 — 26 March 2025

### Improvements
- If Mongosh is available, Flyway Redgate Edition will default to using the Native Connectors Mode for MongoDB
- Upgraded RgCompare.Cli from 1.30.0.26008 to 1.30.1.26056

## 11.4.1 — 21 March 2025

### New Features
- Rule and configuration TOML files now support a BOM character at the start of the file
- Added support for change reports to projects deploying from a Schema model. This can be enabled by setting '-check.changesSource=schemaModel' when running 'check -changes'
- (preview) add support for migration tags. Tags can be used to cherry pick groups of migrations.

### Security Fixes
- Update Snowflake to 3.23.1 to fix CVE-2025-27496

### Improvements
- Upgraded RgCompare.Cli from 1.29.0.25860 to 1.30.0.25967

## 11.4.0 — 12 March 2025

### Bug Fixes
- Fixed an issue where Flyway would fail to fall back to 'flywayDesktop.schemaModel' during 'diff'
- Issue 4039 Fix OpenTelemetry dependencies not being shipped with GCP Spanner in open source

### Improvements
- Renamed error codes returned for database comparison errors
- Issue 4039 Update OpenTelemetry dependencies to 1.42.1

## 11.3.4 — 27 February 2025

### Bug Fixes
- Fixed an issue where Flyway incorrectly examined an unused permit on disk and gave a misleading warning message
- fixed an issue where check filterFile was not being used for check actions

### Improvements
- shouldExecute expressions are validated before being evaluated

## 11.3.3 — 19 February 2025

### Bug Fixes
- Fixed missing Oracle Wallet dependencies after upgrading to ojdbc11
- fixed an issue where clean, backup and snapshot provisioners would not use configured properties from the flyway namespace. This fixes an issue where script callbacks would not be called for the subset of flyway operations directly caused by these provisioners running.
- Fixes issue where specifying an empty cherry pick list to the diff build database property would be treated as if cherry pick was not specified. This fixes an issue seen in the check reports when deploying to an empty target for the first time.

### Improvements
- Nested resolver definitions are disallowed and will result in an error
- Flyway Enterprise now automatically configures 'javax.net.ssl.keyStore' and 'javax.net.ssl.trustStore' for MongoDB TLS connections in Native Connectors mode

### New Features
- Added user defined placeholder resolver

## 11.3.2 — 14 February 2025

### Bug Fixes
- Fixed an issue with the reports where previous reports before the current report displayed invalid results
- Issue 3771 Fixed an issue where the Flyway 'configuration' API returned Configuration objects with shared references instead of deep copies

### Improvements
- The deploy command will now succeed with a warning if the deployment script does not exist, allowing for smoother chaining with the prepare command.
- Update Cassandra JDBC Wrapper to 4.13
- Update AWS S3 SDK to 2.30.18

### New Features
- CosmosDB added
- AWS DocumentDB added
- Native Connectors now supports transactions for MongoDB with .json migrations

### Security Fixes
- Update Netty Common and Netty Handler to 4.1.118.Final to fix CVE-2025-25193 and CVE-2025-24970

## 11.3.1 — 4 February 2025

### Security Fixes
- Upgrade snowflake-jdbc 3.20.0 to 3.22.0 to fix CVE-2025-24790

## 11.3.0 — 30 January 2025

### Improvements
- Converted FlywayTelemetryManager to use the plugin interface
- Updated the ojdbc8 driver to ojdbc11 21.1

### New Features
- Add Community DB Support for Timeplus and DuckDB
- Flyway now supports certain Callbacks with Native Connectors

## 11.2.0 — 16 January 2025

### New Features
- Removed ARM V7 support from docker images
- Issue 4010 Snowflake now supports COMMENT IF EXISTS
- placeholders support in Native Connectors

### Improvements
- check changes will not require a target url/environment when provided with snapshots
- Converting .conf files to toml using flyway init now preserves conf defaults
- Native connectors respects set schema for Mongodb using Mongosh
- check no longer fails for SQLServer with the error: "Database passed into LiveSQLProvider needs to have DbConnectionInstructions"
- check changes will now prefer using a given deployment snapshot over the live environment. In cases where drift appears in the live environment, this will mean that drift will now be excluded from the change report when possible.
- the default filter file created upon SqlServer project initialization now ignores certificates
- Update databricks to 10.16.4
- Issue 4005 Update Databricks JDBC driver to 2.6.40
- Include ARM 64 in the Alpine docker image
- Updated Java version shipped with Docker and CLI to 21

### Bug Fixes
- Fixed issue where converting a .conf file to toml in place via flyway init might not rename the original .conf file to .conf.bak
- Fixed an issue where callbacks were incorrectly loaded as migrations when Native Connectors mode was enabled

## 11.1.1 — 7 January 2025

### Improvements
- the shouldExecuteExpression field now displays the expression correctly in the JSON output of the info command
- Issue 3986 ship library org-reactive-streams

### Bug Fixes
- Fixed an issue where 'deploy' could fail due to null results despite having executed correctly

### New Features
- Native Connectors now supports validateMigrationNaming

## 11.1.0 — 12 December 2024

### Improvements
- Upgraded to .NET 9. Existing workflows that do not depend on .NET should not need to change
- Improve error output of un-parsable TOML configuration to display line and point of failure
- Native connectors for MongoDB released and enabled in OSS edition - Native connectors blog post

### Breaking Changes
- Issue 3438 Snowflake will only drop USER PROCEDURES instead of all PROCEDURES
- Issue 3601 Snowflake will now drop stages when running clean

## 11.0.1 — 3 December 2024

### Improvements
- Issue 3432 Increase block depth for WHILE, LOOP and REPEAT keywords in HSQLDB
- Issue 3986 Update azure-identity to 1.14.2

## 11.0.0 — 21 November 2024

### Improvements
- Stop deploying to deprecated org.flywaydb.enterprise group ID on the Redgate Maven Repository. Please use com.redgate.flyway
- cleanOnValidationError function and configuration has been removed. An error will be thrown if this feature is configured
- Flyway will no longer provide an interactive method to input database usernames and passwords. Please use other configuration or URL methods
- Environments used with the 'check' command must have a provisioner defined or the '-cleanDisabled=false' parameter must instead be specified when running the check command. Please see here for more information.

### New Features
- The prepare and deploy flyway commands have been added, enabling a state-based deployment directly from a schema model or another database
- The following flyway commands are now out of preview: 'add', 'diff', 'model', 'diffText' and 'generate'
- Issue 3970 Add AWS Advanced MySQL wrapper support

## 10.22.0 — 20 November 2024

### Improvements
- (Preview) the preview verb 'diffApply' has been replaced with the verb 'model'
- Resolved issue where Flyway would fail to publish an event to Flyway Pipelines using a PAT token in conjunction with using an offline permit for licensing
- MySQL schema history table will create using default storage engine instead of being forced to InnoDB
- Scoped Namespaces: when configuring on the command line, you can skip namespaces if they match the verb of which you are in the scope of. For example, rather than flyway init -init.projectName=test you can now shortcut to flyway init -projectName=test.

### Bug Fixes
- Fix error message when using unpopulated default placeholders with configured seperators
- Fixed an issue where the 'Placeholders' configuration erased the 'jdbcProperties' configuration

### Breaking Changes
- collations will now be dropped on postgres

### New Features
- addTimestamp boolean option for generate and add verbs has been replaced with timestamp=always|auto|never option

## 10.21.0 — 7 November 2024

### New Features
- Removedcheck.url, check.password and check.username. These undocumented historic fields have been deprecated for a while and have confusing impacts (such as not working in all check functionality). It is recommended to use environments to replace this functionality, alternatively, check does support standard url, username and password

### Bug Fixes
- Fixed an issue that the Repair command was unable to remove failed Repeatable migration entries in schema history table for MongoDB

### Improvements
- Backup provisioner now puts database into single user mode before restoring
- Legacy Flyway keys (FL0...) are now deprecated
- Update H2 2.3.224 to 2.3.232
- Improved repair performance when removing failed migrations

### Security Fixes
- Upgrade snowflake-jdbc 3.14.3 to 3.20.0 to fix CVE-2024-43382

## 10.20.1 — 24 October 2024

### Improvements
- Remove erroneous Guava import
- Enable out of process change detection for all license tiers when publishing results to Flyway Service
- Drift results are now sent to Flyway Service when the service is enabled

### Bug Fixes
- Fixed an issue where Flyway incorrectly displayed a warning about missing locations, even when locations were properly configured per environment

## 10.20.0 — 16 October 2024

### Bug Fixes
- Fix a bug where error messages are produced when check -drift is run without setting deployedSnapshot
- FLYWAY_PIPELINE_ID environment variable was previously broken but is now fixed

### Improvements
- The 'createSchema' callback is now deprecated and replaced by 'beforeCreateSchema'

### New Features
- Support PostgreSQL 17

### Security Fixes
- jetty-server 9.4.53.v20231009 to 9.4.56.v20240826 to fix CVE-2024-8184

## 10.19.0 — 3 October 2024

### Improvements
- Extracted FlywayMigrateException to its own class

### New Features
- Add support for DB2 ZOS
- DB2 and Redshift now support AWS Secrets Manager
- The following flyway commands are now available in preview: add, diff, diffApply, diffText and generate.

### Security Fixes
- Upgrade google-cloud-spanner-jdbc 2.18.1 to 2.22.1 to fix CVE-2024-7254
- Upgrade google-cloud-secretmanager 2.20.0 to 2.51.0 to fix CVE-2024-7254
- Upgrade google-cloud-storage version 2.22.5 to 2.43.1 to fix CVE-2024-7254

## 10.18.2 — 26 September 2024

### Improvements
- Resolved cascading failure when reporting results to Flyway Pipelines

### Bug Fixes
- Fix issue with createStatement override not being used in DB2 Z/OS

## 10.18.1 — 24 September 2024

### Bug Fixes
- Fixed the issue that 'Check' command should throw an Exception if current environment and build environment are the same
- Issue 3812 Fixed the bug that Flyway failed to load Callbacks which are configured as a 'classpath'
- Issue 3812 Fixed the bug that Flyway failed to load Callbacks from default path 'db/callback'

### Improvements
- Update Parser createStatement method signature
- Retire usage of https://nexus.flywaydb.org

## 10.18.0 — 12 September 2024

### Bug Fixes
- Issue 3915 Fixed an issue that could cause Flyway to hang when a database connection is unavailable and there are a large number of pending migrations

### Improvements
- cleanOnValidationError is now deprecated
- Updated snowflake driver to 3.14.3

### New Features
- Flyway now supports setting personal access token (PAT) through API
- Added a warning message if 'group' parameter is enabled for databases which don't support DDL transactions

## 10.17.3 — 2 September 2024

### New Features
- Add NOLOCK to SQL Server query to reduce blocking

### Bug Fixes
- Fix result publishing when chaining commands

### Improvements
- Issue 3947 skipExecutingMigrations now works for OSS

## 10.17.2 — 22 August 2024

### Bug Fixes
- Fixed the issue that Flyway errors when running 'check -code' with 'classpath' locations
- Fixed the issue where the classpath could not be resolved when running the 'check' command

## 10.17.1 — 13 August 2024

### Bug Fixes
- Fixed the issue that Repeatables apply placeholders when calculating checksum even when 'placeholderReplacement' is set to false in script config file
- Fixed the issue where setting placeholderReplacement to true in the script configuration had no effect when it was false in the global configuration.
- Issue 3934 Fix org.flywaydb:flyway-database-cassandra artifact on Maven Central

### Improvements
- Script migration is now available as an open source feature of Flyway
- Move report function and assets to their own module

### New Features
- Support Environment Overrides for the 'jarDirs' parameter
- Add suggestions for incorrect configurations within the Flyway namespace

## 10.17.0 — 29 July 2024

### Bug Fixes
- Fixed the bug that prevented powershell scripts from running when located in a folder with spaces in the folder name.
- Fixed the issue where schemas might get inadvertently cleaned when running check in MySQL

### New Features
- Cassandra taken out of preview and added to OSS edition
- Flyway now supports Environment Overrides for parameters configuration

### Improvements
- Azure Identity is now a dependency of Flyway for SQL Server Active Directory MSI authentication

## 10.16.0 — 18 July 2024

### Bug Fixes
- Fix a bug where mongoDb database name was null
- Issue with ${flyway:workingDirectory} not using configured working directory has been fixed
- Fixed an issue where failed migrations could report a negative execution time

### Improvements
- Removed duplicate libraries from the command line
- The schema model's location is now also specified in schemaModelLocation in the Flyway namespace in Flyway.toml

## 10.15.2 — 1 July 2024

### Breaking Changes
- Bump SQLServer JDBC to 12.6.3 to fix breaking change with MSAL4j 1.15.1

## 10.15.1 — 27 June 2024

### Bug Fixes
- Fixed the bug preventing users from configuring schemas or jarDirs via command-line

### New Features
- Allow flyway internals to return query results when migration executor runs a query

### Improvements
- Removed the maximum of 100 migrations in Amazon S3 limitation from Open Source Edition

### Security Fixes
- Bump msal4j to 1.15.1 to fix CVE-2024-35255

## 10.15.0 — 11 June 2024

### Bug Fixes
- Fixed bug where certain keywords in BigQuery and HSQL were not handled correctly when in lower case.
- Fix a bug where targetSchemaVersion is not set in API and JSON result objects when migrate fails, or no versioned migrations are applied
- Fix the bug preventing users from initiating a trial using the "auth" command

### New Features
- Issue 3900 Increase Cloud Spanner support to 2.18.1
- Issue 3905 Increase H2 support to 2.2.224
- add file helpers

## 10.14.0 — 3 June 2024

### Improvements
- Flyway no longer makes repeated calls to the same Vault secret. This allows using dynamic roles from the Vault database engine.
- Flyway will not auto-install SQLFluff 1.2.1 for Enterprise customers when running code analysis
- The 'Rules Location' parameter of Flyway Check command will now honor 'workingDirectory' configuration

## 10.13.0 — 14 May 2024

### Improvements
- Flyway should only send qualified migration files to code analysis when no url is configured rather than all the '.sql' files
- Improve the code analysis major/minor rule violation error output
- Updated wording on Drift Report
- Flyway won't print out the whole sql statement responsible for a migration failure unless debug mode enabled
- If Cherry Pick is configured in OSS or Community Edition, Flyway will give 'upgrade required' prompt
- Use Temurin 17.0.11+9 JRE for Flyway Command Line

### Breaking Changes
- the default Code Analysis Rule RX001 won't require the 'drop table' statement to appear at the start of a SQL statement

### New Features
- Added support for Databricks in Flyway - thanks to the community for the contribution
- add outputProgress support to legacy (conf) projects

## 10.12.0 — 29 April 2024

### Improvements
- Flyway shouldn't call SqlFluff if there are no pending migrations found
- Reworded exception messages when executing scripts fails to say "Script ... failed" instead of "Migration ... failed"
- 'beforeEachMigrateStatement' and 'afterEachMigrateStatement' callbacks are now open source features
- Updated wording on Drift Report
- 'versioned' and 'repeatable' can now be used for 'ignoreMigrationPatterns' in the open-source version.

### New Features
- Personal Access Tokens are now supported as a method of authorizing Flyway

## 10.11.1 — 18 April 2024

### Improvements
- Issue 3866 set System Properties as String rather than Boolean
- Update license header plugin
- When running the SQL*Plus '@' command, Flyway will honour 'workingDirectory' configuration when looking for runnable scripts

## 10.11.0 — 3 April 2024

### New Features
- Update ErrorCode and ErrorOutput to allow extending in plugins - The ErrorCode enum is now an interface with the base enum now residing in CoreErrorCode. Any Java usage of this enum will need to be updated accordingly.
- Add support for stream configuration for ClassPath SQL Migrations
- Added an init command which will create a project compatible with Flyway Desktop
- Create flyway.communityDBSupportEnabled to turn off community db support database types if desired

### Improvements
- Continue to improve the way Flyway honors the workingDirectory parameter
- Remove unrelated warning from polyglot engine.
- Broken up the check page into functional sections and reference & explanation material
- shouldExecuteExpression returned from info output in json format contained expression after placeholder replacement, rather than before placeholder replacement.
- Issue 3860 Remove need for java.desktop

### Security Fixes
- Update AWS S3 dependency to fix CVE-2024-29025

## 10.10.0 — 14 March 2024

### Improvements
- Improve the way Flyway honors the workingDirectory parameter
- Flyway OSS won't throw any exception for unknown parameters if the TOML contains non-flyway namespaces.

## 10.9.1 — 7 March 2024

### Bug Fixes
- Fix issue with MySQL not falling back to MariaDB driver when official driver is unavailable
- Fix duplicate migration pattern error when running 'check -drift' or 'check -changes' on a database with multiple schema creation rows.

## 10.9.0 — 5 March 2024

### Bug Fixes
- Fixing issue where placeholders are not merged properly when using TOML configuration files.

### New Features
- Update Flyway-Community-DB-Support version to 10.8.0
- Cassandra support added as a preview feature in Redgate edition.

### Improvements
- Reintroduce OceanBase
- Update Mongo JDBC driver to 1.19

### Security Fixes
- Update postgres to 42.7.2 for CVE-2024-1597
- Increase dependency software.amazon.awssdk:s3 to 2.21.46 to fix CVE-2023-44487

## 10.8.1 — 15 February 2024

### Bug Fixes
- Issue 3841 Fix issue with PostgreSQL when running in a transaction

### Improvements
- Removed Oceanbase from Flyway CLI. If required, please download from Maven Central.

## 10.8.0 — 15 February 2024

### Improvements
- output from flyway info can return the contents of a shouldExecute condition, if provided
- Provide Regex rules to replace the SQLFluff rules Flyway_L001 and Flyway_L002

### New Features
- Issue 3835 Downgrade MariaDB Connect/J from 3.3.2 to 2.7.11 to continue to support latest MariaDB without compatibility issues with MySQL. MariaDB 3.X Connect/J requires for permitMysqlScheme flag in the URL

### Security Fixes
- Upgrade com.nimbusds:nimbus-jose-jwt@9.37.2 to fix CVE-2023-52428

## 10.7.2 — 8 February 2024

### Improvements
- Flyway errors running check -dryrun for MongoDB
- Issue 3837 Parameter settings through Environment variables got ignored if combined with command line parameter settings
- Update AWS secrets manager JDBC dependency to 2.0.2.
- Flyway matches Oracle SQL*Plus behavior when parsing 'SHOW ERR[ORS]'.

### Breaking Changes
- Fixed a bug with the Oracle PL/SQL parser which caused certain view definitions containing the 'FORCE' keyword to break.

### New Features
- Bump Flyway-Community-DB-Support to 10.7.2
- Add Community DB Support for Oceanbase

## 10.7.1 — 30 January 2024

### Security Fixes
- The Flyway Commandline package no longer includes dependencies for Apache Derby. This is due to CVE-2022-46337. Apache have not released Java-17 compatible jars with the vulnerability fixed, so users will have to acquire their own Derby dependencies. See Flyway Derby database support for details

### Improvements
- Due to a change in the latest version of the MariaDB driver, MySQL users will either have to set 'permitMysqlScheme=true' in their connection string or download the MySQL driver. See here for more details.
- Improved formatting of Dry Run report.
- The configFiles parameter respects interpreting your configuration in the appropriate format
- Make Flyway "Output Query Results" an open source feature
- If Working Directory is set, Flyway will now use that location to check for default Flyway configuration files in addition to its previous functionality. See updated documentation for more information on default command line configuration order.

### New Features
- Fix to filter on Cloud Spanner table schema name when selecting all foreign key constraints. This is to make sure that no system constraints are included in the results if they were to be added in the future. Additionally if Cloud Spanner starts supporting named user schemas, the listed foreign keys are consistent with the tables that are used, which are all filtered based on an empty schema name.
- Added support for Clickhouse in Flyway - thanks to the community for the contribution
- To help increase Flyway's community contribution support, flyway-community-db-support/ has been moved to separate repository: flyway/flyway-community-db-support. Any new PRs for database support additions need to be raised there and any existing PRs in flyway/flyway will need to be transferred by the author.
- Issue 3821 Flyway now supports Snowflake up to version 8.3.
- Issue 3822 Increase MariaDB JDBC driver to version 3.3.2 and add support for MariaDB 11.2
- allow onEachMigrateOrUndoStatementEvent callback to block statement execution

### Bug Fixes
- Fixed issues caused by dollar signs and backslashes in property resolver values.
- Fix configuring JDBC Properties in command line environment configuration

## 10.6.0 — 16 January 2024

### Improvements
- Resolve RedgateCompare toml being read incorrectly.
- Improved auth logging to be more concise
- Make Flyway "Target" an open source feature
- Make Flyway Detect Encoding an open source feature
- Make Flyway Batch an open source feature
- Make Flyway Stream an open source feature

### New Features
- Adding API friendly method to getEngines

## 10.5.0 — 11 January 2024

### New Features
- adding support to configure environments via command line

## 10.4.1 — 22 December 2023

### New Features
- Allow build environments to be processed by resolvers

## 10.4.0 — 20 December 2023

### Improvements
- Use instance variable of defaultProperties in DriverDataSource constructor instead of parameter variable

### New Features
- Add additional connection attributes when connecting to SingleStore

## 10.3.0 — 14 December 2023

### Breaking Changes
- The clean command will also drop services and queues in SQL Server.

### Bug Fixes
- Correct redgate-compare options when using TOML with check and drift or changes.
- Fixed reports not displaying Teams and Enterprise level features

### New Features
- Issue 3806 Correct HSQLDB support message and increase driver support to 2.7.2

## 10.2.0 — 8 December 2023

### Bug Fixes
- Fix parsing of boolean comparison options
- Fixed a bug where comma-separated lists for configuration parameters passed in via command line would fail with a parsing error

### Improvements
- Update document on setting environment parameter through environment variable
- Upgrade version of Maven dependencies used by the Flyway Maven plugin to 3.9.6.
- Make datasource in classic config environment aware
- Improve error message for misconfigured environment variables in TOML config.
- Can now start a trial with the auth command
- Move flyway-sqlserver into flyway-database folder space

### Security Fixes
- Issue 3797 Use latest version of Apache Derby dependencies to avoid CVE-2022-46337.

### New Features
- Added support for cleaning table snapshots and table clones in Google BigQuery.
- add supported-databases command.

## 10.1.0 — 22 November 2023

### Bug Fixes
- Correct urls for fetching offline permits
- Fix dropping views from GCP Spanner when running clean.
- Issue 3793 Fix index out of bounds issue in ConfigUtils

### New Features
- Add new groupId to flyway-gradle-plugin
- Flyway now supports PostgreSQL version 16.
- MongoDB 7.0 support available. Currently shipped as preview in Redgate edition CLI.
- Updated to use dotnet 8 which drops support for RHEL 7 - this only impacts the check verb (drift and changes)
- Flyway now uses Schema History Table locking to allow parallel migrations in Google Cloud Spanner.

## 10.0.1 — 13 November 2023

### Bug Fixes
- Fixed handling of FLYWAY_JDBC_PROPERTIES_ACCESSTOKEN environment variable with toml projects
- Fixed bug caused by generation of unrecognized parameters when starting the Redgate Comparison engine process.
- Fixed making locations relative to the working directory when using TOML configuration.

### New Features
- When using the new TOML configuration format, 'jarDirs' and 'schemas' will no longer be erased when also configuring certain parameters through the command line or environment variables.
- add support for progress logging to STDERR with json output

### Improvements
- Flyway Gradle Plugin is currently unable to be released.

## 10.0.0 — 31 October 2023

### Improvements
- Removed deprecated flyway.check.reportFilename. Please use flyway.reportFilename.
- The 'cherryPick' configuration option has been moved to a configuration extension. When using the API, it can no longer be directly set through configuration object - instead it is set using an 'cherryPickConfigurationExtension' object which must be retrieved from the plugin register. See the docs for this configuration parameter for more information.
- License key logic has been moved into a different module ('flyway-key-licensing'). This is not shipped in the open-source edition of Flyway so attempting to configure the license key will cause an error. In the Redgate edition of Flyway, license keys must be configured as a configuration extension (see configuration docs for more information).
- Rename lib/community with lib/flyway
- Removal of the default sql folder from Flyway CLI and Docker release
- Remove unused Edition flags documentation, E.G -community or -teams. These flags are no longer used by Flyway and have been marked for deprecation.
- If flyway fails due to a licensing issue, return a unique (35) exit code
- Adjusted the wording on the 'deleted' Repair action to mention it only marks migrations as deleted
- Include singlestore into Flyway Community Edition.
- Google Cloud Spanner has been released and is no longer BETA
- Info filters are now available in community
- beforeEachMigrateStatement, afterEachMigrateStatement, afterEachMigrateStatementError, and beforeConnect callbacks are now Community features
- Script migrations are now a Community feature
- Retired Java 8 from use. Java 17 is now required for development
- Move packages and groupID from org.flywaydb.enterprise to com.redgate.flyway. Duplicate packages will be deployed to org.flywaydb.enterprise until a future release.
- Flyway Gradle Plugin is currently unable to be released.

### New Features
- Modularized database support in Flyway to allow greater flexibility. This includes; DB2, Derby, HSQLDB, Informix, PostgreSQL, CockroachDB, Redshift, SAP HANA, Snowflake and Sybase ASE. See Database Support page for your database for module dependency. If you are including Flyway in your project, either as a dependency or via the maven and gradle plugins please include the respective database module in your project configuration.
- The lowest supported Gradle version for the Flyway Gradle plugin is now 7.6. This is due to a known issue with older Gradle versions where it cannot handle dependencies with multi-release chars containing Java 19 code.
- Move older db support handling into OSS
- Flyway now supports MySQL 8.1.0.
- Added auth command to authorize Flyway online using Redgate username and password
- Added support for REDGATE_LICENSING_PERMIT_PATH and REDGATE_LICENSING_PERMIT environment variables along with offline licensing for offline machines
- add support for LocalSecrets resolvers

## 9.22.3 — 12 October 2023

### Improvements
- The AWS-Secrets JDBC driver included in the Commandline package has been upgraded to 2.0.0.

### New Features
- Issue 3752 add "END CASE" support in BigQuery sql script
- Update newest supported version of Snowflake to 7.33

### Security Fixes
- Keep software.amazon.awssdk:s3 on latest 2.20.X release to get fix for CVE-2023-4586

### Bug Fixes
- Upgrade software.amazon.awssdk:s3@2.20.94 to software.amazon.awssdk:s3@2.20.158 to fix CWE-295

## 9.22.2 — 21 September 2023

### Security Fixes
- Fixed configuration disclosure in extended debug output. CVE-2023-43564

### Improvements
- improve parsing of 'ACCESSIBLE BY' clauses in Oracle
- Issue 3730 Make SLF4J detection also work with SLF4J 2.0
- Enhance Comparison engine error output
- update mariadb-java-client to 2.7.10 to resolve CONJ-1091

### Bug Fixes
- Fix parsing issue caused by statements containing multiple sets of parentheses.

### New Features
- Flyway now supports MariaDB version 10.11

## 9.22.1 — 12 September 2023

### Improvements
- Correctly parse Oracle wrapped statements.
- update Java 17 JRE included in Flyway CLI

### Bug Fixes
- Fix filter file option detection
- Fix invalid flags not correctly erroring at the end of the arguments

### New Features
- Issue 3736 Increase CockroachDB support to V22.2

## 9.22.0 — 30 August 2023

### Bug Fixes
- Fix issue with check.reportFilename parameter

### Improvements
- Code Analysis will honor BaselineVersion configuration if SchemaHistory table is absent.

## 9.21.2 — 22 August 2023

### Improvements
- check.buildUrl, check.buildUser and check.buildPassword are now deprecated. These will be replaced by check.buildEnvironment in Flyway 10.0
- Issue 3723 Upgrade Jackson to 2.15.2

### New Features
- Flyway now supports Oracle 21.
- Issue 3726 Add MariaDB to Flyway H2 compatibility mode
- allow external browser SSO in Snowflake

## 9.21.1 — 27 July 2023

### New Features
- Added working directory variable to config

### Improvements
- When running the SQL*Plus '@' command, Flyway will also search 'SQLPATH' and 'ORACLE_PATH' for runnable scripts. It will also attempt to load from absolute paths.
- Upgrade H2 to 2.2.220

## 9.21.0 — 20 July 2023

### Bug Fixes
- fix handling of plugin string array properties

### Improvements
- Previously, when migrating using Flyway's SQL*Plus feature, Flyway parsed the first statement of the migration script before reading 'login.sql'/'glogin.sql' files. These files are now fully read beforehand.

### Breaking Changes
- Drop B Script functionality from teams into OSS

## 9.20.1 — 12 July 2023

### Improvements
- Update Maven Version check to use Maven Metadata to avoid website deprecation issues
- Issue 3690 flyway-core now has a dependency on jackson-dataformat-toml.

### New Features
- Added table feedback for SQL Plus

### Security Fixes
- Upgrade AWS SDK to fix SNYK issue CVE-2023-34462

### Bug Fixes
- Upgrade google-cloud-spanner to fix SNYK issue SNYK-JAVA-COMGOOGLEGUAVA-5710356
- Upgrade Google Cloud Secretmanager to 2.22.5 to fix SNYK-JAVA-COMGOOGLEGUAVA-5710356
- Upgrade Google Cloud Storage to 2.22.5 to fix SNYK-JAVA-COMGOOGLEGUAVA-5710356
- Update AWS Java SDK to 2.20.69 to fix SNYK-JAVA-IONETTY-5725787

## 9.20.0 — 20 June 2023

### New Features
- RGCompare MySql support has gone GA
- Flyway now supports the latest version on SQL Server 2022.

## 9.19.4 — 9 June 2023

### Bug Fixes
- incorrect license shown above correct license
- Issue 3682 Fixed parsing of boolean values in configuration

## 9.19.3 — 7 June 2023

### Bug Fixes
- Fix missing Jackson-Annotation dependency in CLI bundle

## 9.19.2 — 7 June 2023

### Improvements
- Improved parsing of CASE expressions inside function bodies.

### Bug Fixes
- Fixed a bug encountered when cleaning Azure Synapse instances where Flyway referred to 'sys.xml_schema_collections` which only exists in SQL Server.

## 9.19.1 — 24 May 2023

### Bug Fixes
- Fixed exit code when report is disabled and error occurs
- Fixed an issue where IF(..) function calls in MySQL functions could cause the statement parser to incorrectly split the function in two

### Security Fixes
- The SQLite driver shipped with the Flyway CLI has been updated to 3.41.2.2 to avoid CVE-2023-32697

### Improvements
- Flyway's SQLPlus 'FEEDBACK' output wording has been adjusted to match Oracle SQLPlus.

## 9.19.0 — 23 May 2023

### New Features
- Extract Oracle code to plugin. This will need to be added as a new dependency. See Oracle documentation.
- Disable GET_LOCK on MariaDB connections when WSRERP=ON is present. This is to allow for usage of MariaDB with Galera clusters
- Added driver() method to FluentConfiguration

### Improvements
- Change error code on migration failure to be more specific and include script path and line number of failure in JSON error output
- An event connection will be created to handle callbacks, and this connection will be released instantly after the event handle work is done.
- Baseline scripts with the same version number as an applied '<< Flyway Baseline >>' are now put in the 'Ignored (Baseline)' state. Also, migrations in this state appear before the '<< Flyway Baseline >>' in the info output instead of being put at the end.
- Update RGCompare version to 1.11.2.9265

## 9.18.0 — 15 May 2023

### Improvements
- Avoid hanging indefinitely during 'check' comparisons when running on Windows.
- Running check -changes or check -drift now handles schema creation rows in the schema history table.
- All undo migrations will no longer have their own rows in the ASCII-table output. This seemed redundant given that there's a separate Undoable column to provide this information. Also, there was some inconsistency whereby undo migrations in the AVAILABLE state were already filtered out but others were not.
- Baseline migrations now have the 'baseline' category in info output
- Issue 3665 Only warn if reports are unable to write to the default location rather than print an error
- Flyway now handles defining PostgreSQL functions using BEGIN ATOMIC.
- Update documentation to provide solution to Snowflake JDBC JRE16+ issues

### Security Fixes
- Bump maven version to address CVE-2021-29425

## 9.17.0 — 27 April 2023

### Bug Fixes
- Fixed the issue causing empty dry run reports when running flyway using the Maven plugin.
- Update version of snowflake-jdbc to 3.13.29 to fix SNYK-JAVA-NETSNOWFLAKE-5425048
- Issue 3664 Bump MariaDB JDBC to 2.7.9 to address race condition, metadata catalog, ArrayIndexOutOfBounceExcetions and other issues in JDBC driver

### Improvements
- Issue 3621 The Snowflake SQL parser can now handle escaping single quotes inside strings using backslash.
- Undo migrations which have not been applied will no longer cause validation to fail.
- Remove unused Edition flags documentation, E.G -community or -teams. These flags are no longer used by Flyway and have been marked for deprecation. These flags will be removed in V10.
- Issue 3648 Ensure Flyway uses ALL_CREDENTIALS when using versions of Oracle where ALL_SCHEDULER_CREDENTIALS is deprecated. This is to avoid continuting to rely on functionality only retained in Oracle for backwards compatibility.
- Issue 3652 Remove redundant html extension on automatically generated reports and prevent generation of reports for currently unsupported verbs
- Issue 3664 Bump Snowflake JDBC to 3.13.3

### New Features
- add direct support for Alpine linux
- Add Info report. You can now get a report of an info call as a tab in a flyway HTML report.
- We have improved support for WHENEVER SQLERROR EXIT in Oracle SQL*Plus. This now works on its own and no longer needs to be followed by FAILURE or SQL.SQLCODE.
- Add migration report
- Adding Flyway Reports; Single file HTML reports that expose important details and stats about your Flyway pipeline in an easy to read and share format.

### Security Fixes
- Issue 3664 ]Bump SQLite JDBC to 3.41.2.1 to address CVE-2021-20227, CVE-2022-35737 and CVE-2022-46908

## 9.16.3 — 4 April 2023

### Improvements
- Remove placeholder text from report summary

### Bug Fixes
- Fix Nullpointer exception on empty exception in reports

## 9.16.2 — 4 April 2023

### Improvements
- Removed unwanted SLF4J messages on stderr
- Issue 3636 EnvironmentModel: swap back connectRetries and connectRetriesInterval default values
- Updated Postgres password change regex to use latest form
- Reduce allocations from class loading through FeatureDetector

### Bug Fixes
- Update msal4j to fix SNYK-JAVA-NETMINIDEV-3369748

## 9.16.0 — 15 March 2023

### Bug Fixes
- Issue 3618 Fix reading in configuration from standard input in Teams and Enterprise edition.
- Issue 3621 Fixed a parsing error caused by begin transaction statements in Snowflake.
- Issue 3628 Update flyway-bom to use correct versioning system and deploy to Maven Central

### Improvements
- Drift report titles have been renamed from 'Before' and 'After' to 'Expected' and 'Actual'.

## 9.15.2 — 6 March 2023

### Improvements
- SQL errors with configured overrides no longer cause the Oracle SQLPlus spool output to close prematurely and lead to a null pointer exception.
- Issue 3621 Further improvements to the Snowflake parser when detecting conditionally creatable objects.
- When running 'check' commands with involve database comparison (i.e. '-drift' and '-changes') and Flyway has debug enabled, debug output from the Redgate Compare engine will be logged as well.

### Security Fixes
- Update Ant dependency version to address CVE-2020-11979, CVE-2021-36374, CVE-2021-36373 and CVE-2020-1945 vulnerabilities.

## 9.15.1 — 22 February 2023

### Improvements
- If Flyway encounters a SQL exception while Oracle Spool is set, the error information is now written to the Spool output.

### New Features
- Issue 3613 Allow the Snowflake parser to handle more conditionally creatable objects.

## 9.15.0 — 16 February 2023

### Improvements
- When Flyway is running in Oracle SQLPlus mode, character escaping is now disabled by default in order to be consistent with Oracle's SQLPlus command-line tool.
- Introduced a flyway-bom pom for Maven. This BOM includes all modules of Flyway which are compatible with each other to be used in Maven dependency management.

### Bug Fixes
- Issue 3616 Fixed a bug where migration patterns display names incorrectly changed case depending on default locale.

## 9.14.1 — 1 February 2023

### Bug Fixes
- Issue 3583 Fixed issues with the Snowflake SQL parser which failed to correctly parse scripting blocks containing 'if' and 'for' statements
- Fix issue with code analysis reports not generating when major or minor tolerance threshold has been passed and set build to fail.

### New Features
- Issue 3557 Update latest supported MariaDB version to 10.10
- Issue 3602 Flyway now officially supports snowflake versions up to 7.1
- Added 'NON_EMPTY_SCHEMA_WITHOUT_SCHEMA_HISTORY_TABLE' as a new error code
- As part of the ongoing work to improve Flyway we are looking at the current Java landscape and to the future. As a result, we are introducing Multi-Release builds for Flyway which will support Java 8 and Java 17. This allows us access to modern Java practices and technologies. This is with the aim to move fully to Java 17 in the next major release.

## 9.11.0 — 5 January 2023

### Breaking Changes
- Explicitly drop Oracle package bodies so that package bodies not tied to an existing package are also cleaned

### Improvements
- 'check' reports now produce all successful reports and fail on the first non-successful report
- Update RGCompare engine to 1.6.0.7325
- Regex Rule code analysis results now include the line and column number of where violations occurred

## 9.10.2 — 22 December 2022

### New Features
- Issue 3581 Resolves migration resolvers not fully supporting instances for API users

### Improvements
- version operations (version or -v or --version) will now list the versions of all plugins (and if they are correctly licensed)

### Security Fixes
- Update AWS dependency to resolve CVE-2022-41915

## 9.10.1 — 16 December 2022

### Bug Fixes
- Flyway includes a custom SQL Fluff plugin, containing extra rules for enterprise users. Previously, if this custom plugin failed to install it would fail the whole process citing an absence of the correct SQL Fluff installation. It now only gives a warning so core SQL Fluff rules can still be run.
- Issue 3582 Fix missing setBaselineVersion(MigrationVersion baselineVersion) on ClassicConfiguration

### Improvements
- Incorrectly errored when validating the configuration for the 'check -changes' command, when using a URL and a snapshot.
- Config parameter flyway.executeInTransaction should now correctly set when doing so via an environment variable.
- Update RG Compare to 1.3.1.7159

## 9.10.0 — 8 December 2022

### Bug Fixes
- Fix NPE that results when configuring either 'workingDirectory' or 'jarDirs'

### New Features
- Adds a new configuration parameter ('flyway.executeInTransaction') which determines whether SQL execution in a transaction is enabled.

## 9.9.0 — 7 December 2022

### New Features
- Removed the parsing of nested multiline comments from Oracle. This is in line with their documentation that states nested multiline comments are not supported.
- Support for BigQuery is now out of beta and in GA

### Improvements
- Drift results now appear in the JSON and HTML reports when 'failOnDrift' is set and drift is present.
- The bundled Regex Rules are now case insensitive

### Bug Fixes
- Update error message for invalid CLI argument to reflect possible fixes
- Issue 3578 Fix documentation to use correct method to configure url, user and password in API

### Security Fixes
- The version of the Postgres driver included in the CLI has been increased to 42.4.3 to avoid CVE-2022-41946

## 9.8.3 — 24 November 2022

### Improvements
- The version of RG compare included with Flyway has been increased to 1.2.2.6628. This avoids a bug in which 'check' produced empty change/drift reports for certain SQL Server URLs.

### New Features
- Upgrade the version of the Apache Ignite core dependency to avoid a new vulnerability.

## 9.8.2 — 18 November 2022

### Improvements
- Check reports are written when an exception occurs

## 9.8.1 — 11 November 2022

### Bug Fixes
- Fix issue with Regex Rules looking in the wrong directory by default
- Issue 3563 Fixed parsing error with batch statements in GCP Spanner.

## 9.8.0 — 11 November 2022

### Improvements
- Logic for the undo command has been moved into the separate 'flyway-proprietary' module, which will need to be present on the classpath in order to use the undo command. This also means that undo migrations will now be resolved in Community edition, and migrations may be marked as undone in the info output, though running the undo migrations still requires a Teams or Enterprise license. Lastly, when implementing undo migrations as java migrations, they should extend 'UndoJavaMigration' instead of 'BaseJavaMigration'.
- We now use 'jackson-dataformat-toml' to read TOML config files, instead of 'night-config'.
- All 'check' results include the operation in the JSON result
- Include the code analysis engine's name in the summary logs
- Bump the version of Redgate Compare to 1.0.0.6319
- Move documentation to main repo
- Bundled Regex Rules are now enabled by default
- The JSON result for the 'check' command now includes the paths to any generated report
- SingleStoreDB JDBC driver is now shipped in the CLI
- Allows a configuration ('flyway.check.failOnDrift') to trigger an error if drift is detected with check -drift allowing the build to be halted should drift exist.

### Bug Fixes
- Fix an issue where 'clean.mode' would not be detected in Enterprise

### New Features
- Create a Dialect configuration to allow configuration of rules engine dialect via Flyway
- Add descriptions to shipped Regex Rules in the check report
- Issue 1317 Add SingleStoreDB support at the Teams level
- Issue 3570 Cockroach DB is now supported up to the latest version of 22.1

### Security Fixes
- Issue 3562 The version of 'jackson-dataformat' bundled in the CLI package has been bumped to 2.14.0 to avoid CVE-2022-42003

## 9.7.0 — 2 November 2022

### Improvements
- Help output for 'check' no longer returns 'null' when 'outputType=json'
- Rule codes are now visible in Code Analysis HTML Reports

### Bug Fixes
- Issue 3552 Fix Snowflake parser to handle nested 'BEGIN...END' statements

### Security Fixes
- Update version of MSAL4J to fix CVE-2022-42004
- Update AWS SecretsManager to fix CVE-2022-42004

### New Features
- Add bundled Code Analasys RegEx rules for Enterprise tiers
- A new rule has been added to the Flyway SQL Fluff plugin, which is applied when running code analysis. This rule checks that all tables created in TSQL have an 'MS_Description' extended property set in the same file.
- Add REGEX rules engine to -code for Enterprise tier

## 9.6.0 — 26 October 2022

### Improvements
- Move SQLFluff specific components into own module
- Issue 3489 PostgreSQL history table indexes and constraints now use the configured tablespace
- Provide a Mac CLI for arm64 CPUs

### Security Fixes
- Increase hsqldb version from 2.6.1 to 2.7.1 to resolve CVE-2022-41853

### Breaking Changes
- Issue 3516 Drop PostgreSQL DOMAINs with 'CASCADE'

### New Features
- Issue 3535 Added error override behavior which excludes the full error/warning message and only shows the SQL state and error code.

## 9.5.1 — 20 October 2022

### Improvements
- Remove in-product warnings when using PostgreSQL 15

## 9.5.0 — 19 October 2022

### Bug Fixes
- Ensure correct version of SQL Fluff is installed

### Security Fixes
- Update version of 'commons-text' to fix vulnerability CVE-2022-42889

### New Features
- Add edition to the version model
- Issue 3539 Add support for PostgreSQL 15
- Add custom code analysis rule that requires tables to have a primary key
- Add syntax highlighting to dry run reports

### Improvements
- When urls are unsupported by check, ascertain which ones are unsupported, and include them as part of the exception.
- Issue 3519 Replace SQLPlus placeholders that begin with a double '&'

## 9.4.0 — 29 September 2022

### Improvements
- Code analysis is now available in Community Edition

### New Features
- Add support for SQL Server 2022
- Add configuration to allow flyway to fail when sqlfluff finds issues when running check code

## 9.3.1 — 20 September 2022

### Bug Fixes
- Fix cases of 'cherryPick' causing issues with change and drift reports
- Fix bug where 'installedBy' wasn't always populated during a baseline
- Fixed bug when checking for changes or drift when multiple schemas are configured

## 9.3.0 — 8 September 2022

### Bug Fixes
- Fix issues with Community Fallback
- Fix Windows paths with spaces causing classpath issues

### Improvements
- Closed the Teams preview access to Change and Drift report. Please contact sales at sales@flywaydb.org for license information.

## 9.2.3 — 7 September 2022

### New Features
- Add Community fallback warning to JSON output object

### Bug Fixes
- Show correct validation message when checking for license keys that have expired.

## 9.2.2 — 2 September 2022

### Bug Fixes
- Fix issue with Flyway not running correctly on Macs with a path that has a space
- Fix bug in 'check' when comparing non-Oracle databases with configured schemas

### New Features
- Added null-check to avoid NPE when scanning inaccessible locations

### Breaking Changes
- Issue 3515 Drop MariaDB JDBC driver back to major version 2 to enable MySQL compatibility

### Improvements
- Issue 3296 Schemas are now created if the user has edited flyway.schemas after an initial migration

## 9.2.1 — 31 August 2022

### Improvements
- Check report UI improvements
- change and drift reports now fail for incompatible database types
- Remove JNA dependency as no longer needed by MariaDB
- Increase MariaDB driver version to 3.0.7

### New Features
- Issue 3386 Updated to support Snowflake 6 and Snowflake Scripting

### Bug Fixes
- Move flyway-commandline runtime dependency to correct scope

## 9.2.0 — 25 August 2022

### Bug Fixes
- Fix problems when appending to code analysis reports
- Fix bug in 'check -code' where multiple SQL files were not being correctly linted

### Improvements
- Configured suffixes are now case insensitive
- Improvements to the 'check' report
- Remove the error information from 'CompareResult' so that the existing JSON error handling is used
- Remove unnecessary dependencies
- Moved Undo command into flyway-proprietary
- Remove unnecessary maven-model dependency
- Make 'CompositeResult' generic
- Issue 3505 Include transitive GAX dependency in CLI

## 9.1.6 — 18 August 2022

### Improvements
- Issue 3499 connectRetriesInterval now defaults to 120 instead of 0 on the Maven plugin.
- code analysis now auto detects the dialect if a URL is provided, otherwise a '.sqlfluff' configuration file is needed

## 9.1.5 — 16 August 2022

### New Features
- Add SQLFluff to redgate/flyway Docker image for use with new integrations

## 9.1.4 — 15 August 2022

### Bug Fixes
- Issue 3498 Updated dependencies to fix vulnerabilities

### New Features
- Add 'dryrun' to check as a report that can be generated

## 9.1.3 — 10 August 2022

### New Features
- Add access to Community features for Teams and Enterprise artifacts when no license key is given
- Issue 3467 Added support for H2 2.1.214

### Improvements
- Issue 3491 PostgreSQL session locks now use one connection

## 9.1.2 — 3 August 2022

### Improvements
- check includes all transitive dependencies so it runs out of the box
- Issue 3479 BigQuery procedures containing END AS are not cut off early.
- Update bundled JRE to latest version of Java 11 to include security updates

### New Features
- Issue 3487 Update ensured supported to latest documented versions for Oracle and Snowflake
- Issue 2895 Use transactional locks in PostgreSQL by default, which enables support for PgBouncer (session locks can be enabled again by setting 'flyway.postgresql.transactional.lock=false')

## 9.0.4 — 29 July 2022

### Improvements
- Change reports now html encode SQL.

## 9.0.3 — 28 July 2022

### Improvements
- JSON output for 'drift' now always shows the 'driftDetected' field
- Improved tab styling of check reports

## 9.0.2 — 26 July 2022

### Improvements
- Multiple 'check' reports now appear as tabs
- Serialize the LocalDateTime field in the check JSON result as a string
- No longer include .html when generating the JSON result for a check report
- Only print the version information in Flyway once per execution
- No longer display the underlying 'DELETE' rows during 'info'
- License check now occurs when a Flyway object is constructed

### New Features
- bash entrypoint now adds 'native' folder to library path for use on Windows

## 9.0.1 — 15 July 2022

### Bug Fixes
- Issue 3481 Fix cases where validation fails saying checksums of '0' are now 'null'

## 9.0.0 — 13 July 2022

### Improvements
- Migration patterns that are version numbers are treated as numbers rather than strings when matching to migrations
- Script & Java migrations are no longer executed during a dry run.
- 'getResolvedMigration' method on Java Migrations interface now takes a StatementInterceptor
- Don't clear the Url/Pass/Username when setting a data source
- Change default of cleanDisabled to true.
- Removed deprecated parameters for configuring secrets managers
- Removed parameter 'oracleKerberosConfigFile' as it is replaced by 'kerberosConfigFile'
- Removed parameters 'ignorePendingMigrations', 'ignoreMissingMigrations', 'ignoreIgnoredMigrations' and 'ignoreFutureMigrations' as they are replaced by 'ignoreMigrationPatterns'
- 'MigrationType' moved into 'extensibility' package as an enum and replaced with 'CoreMigrationType'
- 'SQL__BASELINE' and 'JDBC__BASELINE' migration types removed from 'flyway-core'
- 'CoreMigrationType' enum field 'baselineMigration' now called 'baseline', for which the type 'BASELINE' now returns true
- 'baselineMigrationPrefix' removed from Configuration - see the docs for this parameter for how to configure it via the API
- use 'BaselineJavaMigration' from the 'flyway-proprietary' package to make Java-based Baseline Migrations now
- Removed 'isUndo' and 'isBaselineMigration' from 'ResolvedMigration'
- 'Context' in 'resolveMigrations' on a 'MigrationResolver' is now a class which also has 'ResourceProvider', 'SqlScriptFactory' and 'SqlScriptExecutorFactory'
- Info filter 'infoOfState' now allows multiple states as a comma-separated list
- Handle errors (with warning) when cleaning procs on snowflake
- 'flyway/flyway-azure' Docker images are deprecated and replaced with 'flyway/flyway:*-azure'
- H2 1.4 is now in Teams
- Oracle 12.2 is now in Teams
- MariaDB 10.2 is now in Teams
- HSQLDB 2.4 is now in Teams
- Issue 3469 Flyway CLI now bundles version 2.6.1 of the HSQLDB driver.

### New Features
- Add '-migrationIds' flag to 'info' to get a comma-separated list of versions or descriptions for repeatables
- Added the 'check' command to the Flyway CLI which lets you generate deployment reports. You can find more information here

---PRODUCT---
# Redgate Monitor 14
<!-- source: https://documentation.red-gate.com/monitor14/redgate-monitor-14-1+-release-notes-317489801.html -->
<!-- fetched: 2026-04-16 | latest: 14.15.0 (April 16, 2026) -->
## 14.15.0 — April 16, 2026

### New Features
- Added an option to various alert types allowing databases to be excluded by name. See 'What's New' for a list of relevant alert types.
- Added ability to see cost details of Azure virtual machines on virtual machine page.
- Enterprise edition - SQL Audit now supports all action types that belong to the SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP, DATABASE_OBJECT_PERMISSION_CHANGE_GROUP, DATABASE_PERMISSION_CHANGE_GROUP, SERVER_OBJECT_PERMISSION_CHANGE_GROUP, SERVER_PERMISSION_CHANGE_GROUP, SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP, DATABASE_OWNERSHIP_CHANGE_GROUP, DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP and SERVER_OBJECT_OWNERSHIP_CHANGE_GROUP.

### Improvements
- AI Alert analysis is now available for Long-running query, Deadlock and Blocking process alerts.
- Enterprise Edition - Messages on the Security pages can now be dismissed.
- Limited the time window for which we sample Oracle log entries to 24 hours.
- Postgres users will now see a banner inviting them to participate in a research call.

### Bug Fixes
- Fixed an issue where custom metric collection against databases on Always On Availability Group secondary replicas (or other temporarily unavailable databases) could produce collection errors instead of returning null samples.
- Fixed an issue where compliance data was not loading on the configuration compliance pages.

## 14.14.0 — April 9, 2026

### New Features
- Added ability to see subscription details of Azure virtual machines on virtual machine page.
- Enterprise edition - New alert type for SQL Audit file rollovers is now available. This alert is raised when all SQL Audit files rollover within a single sampling interval, indicating that some audit events may have been missed.
- Custom metric alert detail text (from the secondary query) is now included in script notification $AlertData.AlertDetailText and webhook notification payloads. Users with existing scripts or webhook consumers that parse the JSON payload may need to update them to handle the new AlertDetailText field.
- Enterprise edition - SQL Audit now supports all action types that belong to the SERVERROLEMEMBERCHANGEGROUP and DATABASEROLEMEMBERCHANGEGROUP.
- Added a composite index to query plans and related data to improve the performance of purge operations when using a TimescaleDB repository with Monitor. As a result, database migration during upgrade may take longer than usual.
- Added support for private keys as an alternative to client secret authentication in OIDC authorization code flow.
- Added support for strict encryption when connecting to SQL Server instances.

### Improvements
- Custom metrics can now be configured on Oracle instances.
- Query compare is now available for PostgreSQL Top queries.
- The script notification section of the Notification settings page has configuration for selecting the execution method of the scripts.
- Showing details of a Postgres top query from the alert details page no longer causes the top queries tab to show blank.
- Improved performance and reduced CPU overhead when parsing large .xel files. This optimization is available via the UseTempTableForXeParsing feature flag.
- Amazon RDS PostgreSQL log sampling will no longer fail when the log_fdw extension version is outdated.
- Repeatedly unavailable monitored entities will no longer erroneously show as "Connecting" or "Connected". This reverts an improvement made in 14.13.0 to reduce connection attempts to monitored entities when previous connections have failed.
- AI analysis share menu button is now a copy button.

### Bug Fixes
- Fixed an issue where Azure Elastic Job schedule monitoring could fail if the schedule interval type was returned in an unexpected case (e.g., "minutes" instead of "Minutes").
- Fixed an issue where the Alert Suppression Window Health group could show up in the wrong part on the Global Overview page.
- Fixed an issue where the PostgreSQL Top queries and Tracked queries tables no longer have their recommendation button be after the kebab menu button.
- Fixed an issue where the Fragmented indexes alert for a read-only database could not be ended.
- Fixed an issue where the Integrity Check alert for a read-only database could not be ended.



## 14.13.0 — March 26, 2026

### New Features
- Added disk read and write latency metrics to the analysis page for Amazon RDS hosts.
- Added support for gMSA accounts being used in the Installer UI rather than requiring automation.
- SQL Server query plans now display information about the instance it originated from in the modal and new tabs.

### Improvements
- Enterprise edition - SQL Audit events can now be filtered by a custom date and time range, allowing for a more granular view of audit activity.
- The Query Executions tab is now available alongside the History tab on SQL Server instance overviews, with guidance for enabling this type of monitoring if not yet enabled for the monitored server.
- Addressed a potential issue where hosts monitored via WinRM could become permanently unreachable until the Base Monitor service was restarted.
- Improved error handling and propagation for failed Top Queries search requests.
- Reduced PostgreSQL query plan data storage volume, improving repository performance.
- GSS encyption mode is now set to disabled for PostgreSQL connection strings.
- Disabled Query Executions monitoring for SQL Server 2016 and earlier, which could cause sampling to get stuck on busy servers due to slow Extended Events log reading.

### Bug Fixes
- Fixed an issue where certain monitored object types would not correctly raise alerts for internal monitoring errors.
- Fixes an issue where retained SQL Audit data on Amazon RDS was not being read alongside the active file.
- Fixed an issue where a single invalid alert configuration could prevent other alerts from triggering correctly.

## 14.12.0 — March 19, 2026

### New Features
- The new Analysis graph experience is now the default, featuring improved performance, better user experience, and modern design. Users can still switch back to the classic experience if needed.

### Improvements
- Modernized the current activity tabs for SQL Server and PostgreSQL instances.
- CPU and memory usage statistics can now be seen for SQL Server sessions in the current activity tab.
- Suspended instances can now be filtered by tags on the global dashboard.
- The server overview instance selector and active alert banner now display a blue border for monitored objects with Info severity.

### Bug Fixes
- Fixed an issue where PostgreSQL error log sampling could get stuck after a log file rotation.
- Fixed PostgreSQL server overview pages becoming unresponsive when monitoring instances with large volumes of query plan data.
- Fixed a casing issue that prevented availability group replicas from being retrieved.
- Fix an issue where disks on Windows drives were treated as case-sensitive, causing them to be omitted from the Estate disk usage details page.

## 14.11.1 — March 18, 2026

### Bug Fixes
- Fixed an issue that could result in false overdue backup alerts when using SQL Backup.

## 14.11.0 — March 11, 2026

### Improvements
- Index sampling is now enabled by default for all PostgreSQL instances. This will result in a change of configuration if it was previously disabled. It can be disabled by visiting the "Additional monitoring settings" section of the "Configuration" page.
- the blocking processes table now shows system processes and the blocking process alert now alerts about system processes.
- Improved performance when loading host-level metrics (CPU, disk I/O, memory), when running the Base Monitor with TimescaleDB repository.
- ServiceNow URLs are no longer required to follow a specific format in notification settings.
- PostgreSQL connection strings will no longer enforce the 'C' locale for time and date formatting.
- Filtering on the alerts page now works properly when there are multiple Base Monitors that each have custom alerts.
- Reduced the frequency of Windows authentication attempts when monitoring a SQL Server instance with invalid credentials.
- Changed the default working directory for PowerShell script alert notification from the Base Monitor installation directory to %TEMP%, existing scripts that rely on the previous working directory will need to be updated to use absolute paths or change their working directory within the script.

### New Features
- Added Machine: processor time (excluding steal) metric for Linux hosts on the server overview, showing CPU usage excluding hypervisor steal time.
- Added support for AI analysis of Top queries for MongoDb instances.
- The Get-RedgateMonitorServicePrincipalCredential, Add-RedgateMonitorServicePrincipalCredential, and Remove-RedgateMonitorServicePrincipalCredential cmdlets now support AWS credentials using the -Provider AWS flag, in addition to Azure credentials.
- Modernized the Configuration information page with collapsible base monitor details to better support larger estates.
- Enterprise edition - SQL Audit now supports all action types that belong to the DATABASE_PRINCIPAL_CHANGE_GROUP.
- Added AWS EC2 cloud details support in the Estate > Virtual Machines page (and the ability to add credentials) for Monitor SaaS.

### Bug Fixes
- Fixed an issue where filtering a database in the custom metric test UI would have no effect when performing the test.
- Fixed an issue where SQL Backup compressed backups could be stored with incorrect size, compression, and encryption data if Monitor sampled during SQL Backup's post-processing window.
- Fixed an issue in Estate > SQL Server versions for customers who have disabled automatic refresh of the latest available updates of SQL Server. A notification about the freshness of update data was incorrectly based on a stale update file, if still present.
- Fixed an issue where the script notifications set the $AlertData.Target.MachineName to the cluster name and set the $AlertData.Target.ClusterName to null.
- Fixed an issue where the script notifications set the $AlertData.Target.FailoverClusterActiveNodeName to null for certain alert types.
- Fixed an issue where Analyze query functionality in Server overview > Current activity tab was not working in some cases on IIS hosts.
- Fixed an issue where custom metrics imported from the external library could not be installed on a specific base monitor when multiple base monitors were configured.
- Fixed an issue where servers could show as Green/Healthy on the overview page when they had alerts suppressed
- Fixed an issue where Redgate Monitor did not correctly detect some types of connection error for an Azure Database for MySQL Flexible Server.
- Enterprise edition - Fixed a loading error on Security → Users Tab when clicking on a user to view details.
- Fixed an issue preventing stored procedure statistics from appearing in the Top Procedures tab for Azure SQL Database.
- Fixed an issue where the PostgreSQL index usage chart could appear empty for users outside the UTC timezone.
- Fixed an issue where a Backup Overdue alert could fire incorrectly when the most recent backup was copy-only, even if a valid regular backup was within the threshold.
- Fixed an issue where PostgreSQL top queries collection would fail after upgrading the PostgreSQL server without updating the pg_stat_statements extension.

## 14.10.0 — March 4, 2026

### Improvements
- Top waits data is now available for PostgreSQL on the server overview and database details pages.
- Improved filtering options for the returned values of a custom metric query in the 'Test metric' step of configuration.
- PostgreSQL tracked queries are now available from the database overview page.
- The top waits graph display type selection (Stacked graph or Line graph) now persists across page reloads.
- The page life expectancy alert description now clearly indicates that the alert triggers when the value is below the threshold for a period of 1 minute.
- Monitor now correctly displays a monitoring error when WMI is not configured correctly.
- The database sampler will now be able to continue sampling on SQL Server instances where the msdb system database is no longer online.
- Improved OracleErrorLogSampler performance.
- The ALTER TABLE SWITCH statement no longer fails when upgrading the repository with a schema which has multiple indexes on a single table with different data compression values as a result of Azure SQL DB Automatic Index Tuning or custom changes.
- Sorting on Disk usage details page now works as expected.

### New Features
- Users can now run an optional secondary SQL query during custom metric collection that adds additional context when a custom metric alert is raised.
- Add ability to see subscription details of AWS virtual machines on virtual machine page.
- You can now copy the Query analysis AI response to your clipboard using the new copy button.

### Bug Fixes
- Fixed an issue where tags applied to Oracle, MySQL, and MongoDB instances were not appearing in the global dashboard filter options.
- Fixed an issue in the session table where the row colour on the table would not match the one in the graph.
- Fixed an issue where the access token rights view would not update correctly when changing the token role.
- Fixed an issue preventing PostgreSQL queries from being tracked correctly.
- Fixed an issue where expanding a top query on the Alert Details page for a PostgreSQL instance would cause the page to crash.
- Fixed an issue for SQL Server logon failure alert where negative regex statements matched incorrectly.

## 14.9.0 — February 18, 2026

### New Features
- Added a column to the SQL Server Availability Group page to show the backup priority of each replica.
- Restored Extended Event sampling support for SQL Server 2008R2 SP2 CU12 and SQL Server 2012 SP1 CU6.
- Script notifications now run using PowerShell 5.1 in a separate process. Previously, they ran in-process using PowerShell 7. Please contact Redgate Support if this change impacts you.
- Script notifications alert data payload now includes a new property $AlertData.Target.FailoverClusterActiveNodeName for alerts regarding a SQL Server hosted on a failover cluster.

### Improvements
- The Virtual machine name column on the Estate > Virtual Machines page now displays a cloud icon next to the name of virtual machines hosted in Azure.
- All PowerShell executions are now logged to 'Base Monitor_PowerShellScriptNotifications*'.

### Bug Fixes
- Fixed an issue where the time range would be incorrect when clicking a Server Overview redirect URL from Jobs page in the Estate section.
- Fixed an issue that caused the UI to hang when creating a custom metric where the default instance was selected.
- Fixed an issue that caused retrieval of a large number of alerts in the alert inbox and global dashboard to fail when using a SQL Server data repository.

## 14.8.2 — February 12, 2026

### New Features
- Restored Extended Event sampling support for SQL Server 2008R2 SP2 CU12 and SQL Server 2012 SP1 CU6.

## 14.8.1 — February 6, 2026

### Bug Fixes
- Fixed an issue that caused retrieval of a large number of alerts in the alert inbox and global dashboard to fail when using a SQL Server data repository.
- Fixed an issue that causes the current activity tab to fail to display sessions with no text (including sleeping sessions) for SQL Server instances.

## 14.8.0 — January 29, 2026

### New Features
- Added Current activity pages with AI capability for Oracle and MySQL instances
- Enterprise edition - SQL Audit now supports all action types that belong to the SERVER_PRINCIPAL_CHANGE_GROUP.

### Improvements
- The Alert Inbox now displays timestamps with seconds precision in the "Last updated" column.
- Improved handling of SQL Server Instance vs Master DB collation differences.
- The Estate > Virtual Machines page no longer shows the "(formatted)" values columns (which are useful for exporting only, and they still show up when exporting the data table).
- The PowerShell Module can now be downloaded by users in any role on the Configuration page
- Access to the 'Configuration Information' page has been restricted to users with the Administrator role. This page is no longer available to other user types.

### Bug Fixes
- Fixed PostgreSQL CurrentActivity page erroring on certain time data
- Fixed an issue where the blocking process alert details were showing blocked by 0.
- Fixed an issue where the blocked process alert details displayed unknown database name when the database name is known.
- Fixed an issue where the link to alert configuration from the alert details page was sometimes not visible.
- Fixed an issue where proxy settings were not being applied correctly. This fix ensures that "Use Default Credentials" and "Bypass Proxy for Local Addresses" now function as expected.
- Fixed an issue with sorting on the Backups and Disk Estate pages when "Show groups" is disabled.
- Fixed an issue that caused TimeOut on individual query monitoring.

## 14.7.2 — January 26, 2026

### Bug Fixes
- Fixed an issue that prevented access tokens from being created or deleted.

## 14.7.1 — January 22, 2026

### Bug Fixes
- Fixed an issue where mixed SQL Server Collations could lead to issues during upgrades.

## 14.7.0 — January 22, 2026

### Improvements
- The Estate > Virtual Machines page now displays cloud resource details for Azure VMs in the details sidebar, if the appropriate cloud credentials are provided.
- Microsoft Teams notifications now include a link to the alert in Redgate Monitor.
- All notification types can now be rate limited with a default of 30 notifications per alert type per server to prevent notification overload. This can be configured in the notification settings.
- Extended the error logging performed when samples are received out of order. Logs now include by how much time the samples were out of order.
- When a Node is selected on a Query plan it will be highlighted with a blue border.
- Enterprise edition - "Audit level" rule has been renamed to "Login audit level" in Configuration Compliance templates.

### New Features
- Added database version and edition to the configuration information page.
- Enterprise edition - Added the new "All databases are encrypted with TDE" rule to the CIS Benchmark in Configuration compliance templates.
- Add user or group modal on Manage user and permissions page now shows tree view again.
- Enterprise: Removed the "FIPS Enabled" rule from the CIS Microsoft SQL Server 2022 Benchmark. The rule can still be added to other templates.
- It's no longer possible to use the Individual query monitoring feature with SQL Server versions running 2008R2 and 2012. This is because Extended Events functionality is not fully supported on these versions.

### Bug Fixes
- Fixed an issue where active alerts wouldn't end during a suppression window.
- Fixed an issue where the Estate Backups page displayed uncompressed backup sizes instead of compressed sizes for compressed backups.
- Fixed an issue where the 'last updated' timestamp on current activity tab of server overview was not updating correctly.
- Fixed an issue where OracleErrorLogSampler times out.

## 14.6.2 — January 16, 2026

### Bug Fixes
- Fixed an issue where some rules were not being included in the configuration compliance score calculation for some servers

### New Features
- Added further defensive logic to handle an issue where Active Directory sampling was encountering unexpected data from domain controllers.

## 14.6.1 — January 13, 2026

### Bug Fixes
- Fixed an issue that prevented Active Directory sampling from proceeding where some expected fields were not present.

## 14.6.0 — January 7, 2026

### New Features
- Enterprise edition - New SQL Audit tab is available in preview in the Security > Permissions page. This uses SQL Server's audit feature to provide a list of events that affected the state of permissions in an instance. Self-managed SQL Server instances and Amazon RDS SQL Server instances are currently supported.
- Added "Ensure Windows BUILTIN groups are not SQL Logins" rule to CIS Template in Configuration Compliance.
- New Analysis Preview – "Same as above" functionality added to match the current page.
- Availability Group overview page now displays a "Readable Secondary" column showing whether secondary replicas allow read connections (No, Read-only, All, or Unknown).
- Added support for virtual machines running PostgreSQL on the Estate > Virtual Machines page.
- Added a banner to the Estate > Virtual Machines details sidebar to indicate when no data is available for the previous time period when using the comparison toggle.
- Added ability to add SQL Server instance on previously added Linux machines.
- Added ability to search the Configuration page.
- Add cloud service page no longer provides/requires a radio button to access Azure cloud services.

### Improvements
- The details sidebar in Estate > Virtual Machines now has a comparison toggle to compare data across different time periods. Currently, the comparison is only displayed in the table.
- AI-powered query analysis (preview) is now available on the Current activity tab for SQL Server and PostgreSQL instances.
- The individual query monitoring threshold can now be set to values between 1 and 5 seconds via the Additional monitoring settings page.
- The comparison toggle in the details sidebar on the Estate > Virtual Machines page now also shows the comparison in the usage charts.
- Exporting data from the Estate > Virtual Machines page now includes additional columns with formatted values alongside the raw values.
- The comparison values in Estate > Virtual Machines now use better logic for coloring the differences.
- Loading banner on Estate > Virtual Machines page is now less intrusive, no longer shifting the page content when loading.
- The CIS Microsoft SQL Server 2022 benchmark now includes the benchmark version in the name of the configuration compliance template.
- Errors occurring while creating a value for a cache key no longer cause the cache key to permanently fail in some rare cases.
- The Estate/Virtual Machines page comparison toggle now correctly compares data across different time periods instead of showing the same period twice.
- The Estate/Licensing page now correctly excludes Developer and Evaluation versions from the core count.
- If report cannot be attached to email, include a link in email instead allowing user to download it manually.
- Large (>1MB) Postgres Query Plans no longer cause crash in Base Monitor service when sampled.
- The Estate > Virtual Machines page no longer displays erroneous vCPU usage values that exceed the maximum possible.
- Alerts load faster and without internal resource error when loading the global dashboard page and the alert inbox page.
- Oracle Redo log switches graph is no longer displayed on Oracle Server overview pages.

### Breaking Changes
- Fixed an issue to not hide drop down menus behind breadcrumbs on the User and permissions page.

### Bug Fixes
- Fixed issues where Test collection was incorrectly disabled when toggling all databases when creating a Postgres custom metric
- Fixed an issue so that QEMU virtual machines now show up on the Estate > Virtual machines page.
- Fixed an issue where Postgres instances in recovery mode had to be suspended and re-enabled to restart monitoring
- Fixed an issue that prevented Active Directory group members from accessing Monitor when connected to a Timescale repository.
- Fixed duplicate key exception coming from MySQL Long Running Queries Sampler.
- Fixed an issue where showing full text for a top query could cause the page to hang
- Fixed an issue where logging in with Basic authentication, and not typing a password, no longer crashes the page.

## 14.5.1 — December 18, 2025

### Breaking Changes
- The ALTER TABLE SWITCH statement no longer fails when upgrading the repository with a schema which has dropped or added indexes as a result of Azure SQL DB Automatic Index Tuning or custom changes.

## 14.5.0 — December 11, 2025

### New Features
- AI-powered query analysis (preview) now supports Oracle and MySQL instances in addition to SQL Server and PostgreSQL.
- Added a 7-day history option to the history tab on the Server overview page.
- Added the "Max number of error log files" rule to CIS Microsoft SQL Server 2022 Benchmark.

### Improvements
- The instance name field on the Additional monitoring settings page is now a hyperlink that redirects to the server overview page of the selected instance.
- Improved the performance of Active Directory sampling.
- Tags can now be applied to SQL Server and PostgreSQL databases.
- Alert suppression windows can now be applied to individual databases, via tags.
- Custom metrics can now be retrieved when the server has the Canadian locale set.
- "Percentage of connections used" postgres alert will now correctly fire
- DTU graph on Alert details for Azure SQL Db entities now shows DTU rather than CPU
- PostgreSQL's "Query history" graph renamed to "Query execution history".
- Monitor no longer samples disabled Active Directory accounts by default. This behaviour can be changed using a feature flag - see https://www.red-gate.com/monitor14/permissions-monitoring

### Bug Fixes
- Fix issue whereby the base monitor would fallback to the local service user when trying to authenticate across an untrusted Windows domain.
- Fixed an issue where editing a custom metric that targeted an Amazon RDS SQL Server would result in a blank edit page.
- Fixed an issue that would result in server names not being populated in the waits summary report tile.
- Fixed an issue to prevent negative counter values causing data collection failure on Azure Managed Instances.

## 14.4.0 — December 1, 2025

### New Features
- Support for certificate authentication when monitoring Linux PostgreSQL servers is now in preview. This feature is currently only available for Windows Base Monitors running on standard Windows user accounts. Linux Base Monitors and Windows Base Monitors running on service accounts and gMSA are not currently supported.
- Support for PostgreSQL 18 is now available.
- Custom text can now be added to alert email notifications via the alert configuration page.
- Monitoring of MySQL instances running on AWS Aurora is now supported.
- Enterprise Edition - Monitoring of Permissions is now available for Azure Managed Instances. Microsoft Entra ID is not supported for Azure Managed Instances yet.
- Suspended virtual machines are now sorted at the bottom of the new virtual machines table.
- Split the average / current value columns in the new Virtual Machines page in two columns (value and percentage) for better readability. The value columns are hidden by default, but can be enabled.
- Added usage graphs to the details sidebar of the Virtual Machines page.
- Fixed an issue where deleting a group then creating a new group, created the new group as a child of the deleted group.
- Clarify the Database cluster identifier needs to be specified when adding or editing the Host monitoring credentials for PostgreSQL instances on Aurora clusters.
- Fixed an issue where creating a new group with no name after cancelling a new group with an acceptable name creates a new group with the cancelled name.
- Added 5 second and 10 second refresh intervals to the Current Activity view.

### Improvements
- Tracking queries now available for PostgreSQL.
- Virtual Machines page can now compare usage with the previous time period.
- Search and filter functionality is now available on the 'Databases in pool' table on the Elastic Pool server overview page.
- When partial data has been received for the virtual machines table, we now have an indicator to show that more data is expected.
- Filtering by values is now possible in the Additional monitoring settings page.
- Replication job failure alerts and Replication maintenance job failure alerts can now be configured to ignore jobs that succeed with a failing step.
- Re-enabled and improved the performance of the Estate > SQL Server replication page.
- reduce number of locks introduced by SQL Server backup sampler (Can be disabled by switching off the feature flag 'UseNoLockSqlServerBackupSampler')
- PostgreSQL SSL authentication errors should now be correctly categorised by Monitor.
- Pinning an entity on the global dashboard should no longer cause other entities with the same name to also be pinned.
- Azure Managed Instances should no longer appear as being in an error state if non-fatal database connection errors occur during sampling.
- Trials no longer begin on installation, and can instead be started from the License Allocation page at an appropriate time.

### Bug Fixes
- Fixed an issue where SQL Server services were not being correctly reported on configuration compliance templates.
- Fixed an issue where Get-RedgateMonitorAnnotation cmdlet didn't respect target instance.
- Fixed an issue where the last column of PostgreSQL top queries and Replica nodes was clickable despite not having a functionality when clicked.
- Fixed an issue where a selected group of a custom metric was deselected when renaming the selected group
- Fixed an issue where alert details related to Cluster Shared Volumes were not being displayed correctly.
- Fixed an issue where toggling between template types in the Select Servers modal of Compliance Templates did not work properly.
- Fixed an issue where wait events were not shown when connected to an Oracle PDB instead of the CDB.
- Fixed an issue where the selected group is not selected after being moved.
- Fixed an issue where the selected group is not selected after being renamed.
- Fixed an issue where attempting to create a group with no name after attempting to create a group with a conflicting name displays both error messages at once.
- Fixed an issue where an option to expand a query wouldn't appear.
- Fixed a performance degradation of TopQueries
- Fixed an issue where memory usage gradually increased in Base Monitor when repeatedly attempting to connect to an unreachable server.

## 14.3.1 — November 18, 2025

### Bug Fixes
- Fixed an issue where report analysis tiles would always appear at half width when saved as a PDF regardless of their actual width.
- Fixed an issue where some report PDF urls generated for email notifications were invalid.

### New Features
- Fixed an issue with the new Analysis page that prevented it from loading in certain scenarios.

## 14.3.0 — November 17, 2025

### Improvements
- AI-powered query analysis (preview) - provides advice on why queries may be performing poorly, along with improvement suggestions.

## 14.2.2 — November 12, 2025

### Bug Fixes
- Fixed an issue where job failure alerts weren't raised correctly for users with pre-2020 alert configs.

## 14.2.1 — November 7, 2025

### Bug Fixes
- Fixed a memory issue that could occur for sites with a substantial volume of sampled data for SQL Server agent jobs.

### Improvements
- The SQL Server Replication estate page has been hidden by default.

## 14.2.0 — October 29, 2025

### Improvements
- Custom metrics and alerts are now available for PostgreSQL.
- Alert configuration save failures are now displayed in the UI with clear error notifications.
- The export 'All data' button on the Security page grids will now also export hidden columns.
- The job failure alert and the job canceled alert now displays the job category in the alert details.
- Scheduled reports will no longer fail to send if website is bound to all IP addresses (0.0.0.0 or [::]).
- Resolved an issue where retrying individual query monitoring on a non-existent file resulted in a connectivity error.
- Switching the inheritance level of a custom alert should no longer cause the page to fail to load.
- Editing a custom metric with Azure Managed Instance or Azure SQL DB as one of the targets should now populate all the metric fields as expected.
- Deeply nested Postgres query plans no longer disrupt monitoring.

### New Features
- Estate > SQL Server replication page added to display the latest activity of replication jobs.
- New alert types for Replication job failure and Replication maintenance job failure added for SQL Server instances. These new alert types replace the existing Job failure alert type for replication jobs.
- Estate > Virtual machines page added to monitor virtual machine usage.
- The Analysis page has been updated with a new modern design.
- Added a feature flag (OnlySampleEnabledActiveDirectoryUsers) that can be switched on to stop Monitor from sampling Active Directory users whose accounts are disabled.
- Fixed an issue where opening a new tab on the current activity filters were not persisting after closing and reopening the tab.
- Fixed an issue when adding an Oracle instance on an Amazon RDS environment, the service name label mentions pointing to the "container database" rather than the "PDB".
- The Job failure alert type (default severity: medium) no longer applies to SQL Server replication jobs. Replication jobs are now covered by the new Replication job failure alert type (default severity: high), or Replication maintenance job failure alert type (default severity: low). The job failure alert type continues to apply to non-replication jobs.

### Bug Fixes
- Fixed an issue causing intermittent failures in sending notifications for alert closure events, introduced by a regression in version 14.1.0.
- Fixed an issue for TimescaleDB repositories that could result in custom alerts being shown with an incorrect name for a monitored server.
- Fixed an issue where renaming a parent group loses the child group level alert configuration.
- Fixed an issue where moving a child group to a different parent group loses the child group level alert configuration.
- Fixed an issue where deleting a parent group whose child group had alert configurations retained the alert configurations (upon restoring the parent group and child group).
- Fixed an issue preventing custom alert settings from being configured properly for certain monitored servers.
- Fixed an issue where failing SQL server replication jobs raised Job failure alerts that could not transition from Active to Ended.
- Fixed an issue where the blocking process alert incorrectly included unrelated child processes and reported inaccurate blocking durations.

## 14.1.0 — October 16, 2025

### New Features
- Added native ServiceNow integration, allowing ServiceNow incidents to be raised when alerts occur.
- Added native Microsoft Teams integration, allowing notifications to be sent to Teams when alerts occur.
- Monitoring of MySQL instances running on Azure Flexible Server is now supported.
- Extended Oracle support to include Oracle Data Guard monitoring.
- Added overall wait event/class information for Oracle Installs, viewable as a graph or table.
- Enterprise edition - Added the ability to export all sysadmins, serveradmins or securityadmins across all servers on the Permissions page.
- Improved the clarity of failure messages when testing adding new entities.
- Enterprise edition - Servers on the 'New Compliance Template' dialog are now grouped by their groups in a nested fashion.
- Host monitoring (previously "Advanced monitoring") is now toggled on by default on the Add monitored server pages.
- For Oracle Instances, Top Queries and Long Running queries have been merged into a query performance section alongside the new waits information.
- New-RedgateMonitorSqlServer PowerShell cmdlet now accepts -SqlServerAuthenticationMode implicit.
- A new Update-RedgateMonitorMonitoredObjectCredential cmdlet is now available, enabling the credentials of existing Monitored servers and hosts to be updated.

### Improvements
- Query Executions page now shows the Memory Grants associated with each query if available.
- Improved the Licensing page UI by moving the licensing requirements modal into a drawer and underlining the page links for better clarity.
- Enterprise edition - Improved the searchability of compliance template settings by sorting the list alphabetically.
- Enterprise edition - Estates with Amazon RDS SQL Server instances will now auto-detect Active Directory.
- Enterprise edition - Improved the clarity of the UI in Security > Permissions > Servers > Server details, by splitting the Users tab into two: AD Users and Logins.
- Enterprise edition - List-based columns on permission pages grids now filter for partial matches.
- Enterprise edition - Improved icons on Security pages to better align with industry standards.
- Resolved an issue where extended intervals between availability group (AG) samples could trigger false positive backup alerts.
- Active Directory monitoring credentials will now automatically sync with SQL servers.
- Virtual machines are detected more accurately for SQL Server on Windows machine on the "SQL Server licensing" page under the "Estate" tab.
- Amazon RDS SQL Server no longer fails to update credentials when changing authentication modes while running Base Monitor on a PostgreSQL with TimescaleDB data repository.
- Tags selected in Disk usage & Job filtering now apply only when all tags match.
- Long-running query alerts for MongoDB, and clock skew alerts no longer fail to load their details page when using a PostgreSQL with TimescaleDB data repository.
- The server permissions page now shows an error for the server status if credential decryption fails.
- Enterprise edition - Permission changes are now calculated correctly when using a Timescale data repository.
- Disable deletion of Cloud Service credentials if they are in use by an instance.
- DATAS (Dynamic adaptation to application sizes) was disabled by default. It was originally enabled in Monitor ver. 14.0.48 as part of the upgrade to .NET 9. The Base Monitor component is expected to run on a dedicated server, so DATAS is counterproductive in such a setup. The default setting can be changed in the RedGate.Monitor.BaseMonitor.runtimeconfig.json file.
- Legacy permissions and AD samplers are now disabled by default.
- In the server overview page, the legend is now hidden if the graph has only one series and the tooltip series label is changed to match the graph title.
- https://www.red-gate.com/monitor14/permissions-monitoring

### Bug Fixes
- Fixed issue where MySQL Long Running Queries could get a duplicate key.
- Fixed an issue where some SQL Server numeric return types weren't handled correctly by custom metric collection.
- Fixed an issue where it wasn't possible to edit credentials for a Postgres instance without re-specifying the secret key for IAM User authentication.
- Fixed an issue when saving Microsoft Entra credentials for an Azure SQL Database or Azure SQL Managed Instance, when using a PostgreSQL with TimescaleDB data repository.
- Fixed an issue with gaps in performance metrics graphs due to insertion error, when using a PostgreSQL with TimescaleDB data repository.
- Fixed an issue with deadlock graphs being cropped incorrectly when exporting to a PDF.
- Fixed an issue where the SSIS version was incorrectly displayed in Estate Configuration page when multiple SQL Server instances were installed on the same server.
- Fixed an issue where tracked queries could not be displayed when there were no queries sampled within the selected time range.
- Fixed an issue where Azure SQL Database was displaying server collation rather than database collation on database server overview page.
- Fixed an issue preventing SQL Server top procedures search from returning results.
- Fixed an issue where the SQL Backup integration could execute a long-running query at startup.
- Fixed an issue where suspended SQL Servers were being displayed under the server selector in server overview page.

---PRODUCT---
# TDM — Subsetter
<!-- source: https://documentation.red-gate.com/testdatamanager/command-line-interface-cli/subsetting/subsetter-release-notes -->
<!-- fetched: 2026-04-03 | latest: 0.6.0.0 (19 September 2
## 2.2.14.3210 — 12 March 2026

### Bug Fixes
- Fixed an issue where a syntax error was caused by a comma (,) as a decimal separator instead of a period (.) collation.

## 2.2.13.3174 — 10 March 2026

### New Features
- Added support for token-based authentication via Azure for SqlServer only

## 2.2.11.3077 — 20 February 2026

### Bug Fixes
- Fixed a compatibility issue with MySQL 9.6.0. Note: this fix will change the data that is subsetted when using desired size when compared to previous versions.

## 2.2.8.2706 — 25 November 2025

### Bug Fixes
- Fixed an issue where temporal table hidden columns were being set to visible after subsetting (SQL Server only).

## 1.1.2.0 — 16 January 2024

### Improvements
- Improved performance of filter table validation in source database (particularly impactful for large tables with many rows).
- Improved performance of row counting used by the target size feature, so that it will be much faster for large tables.
- Improved validation for table identifiers such as the filter table.
- The subsetter is now able to accept filter clauses that start with the WHERE keyword.

### Bug Fixes
- Fixed known high severity vulnerabilityCVE-2024-0056.

## 1.1.1.0 — 20 December 2024

### New Features
- System version temporal tables in SQL Server are now supported. The subsetter copies the temporal tables but leaves the history tables empty.

### Improvements
- Improved command line validation for manual relationships in theconfiguration file.

## 1.1.0.0 — 11 December 2024

### Improvements
- A fewknown limitationsin current and past versions:
- The subsetter can't copy columns with User-Defined Types (UDTs) in Oracle.
- The subsetter may fail on PostgreSQL databases if the source and target database are on machine with different architectures.
- Updated Redgate's Windows Authenticode digital certificate signature in the CLI executable (previous one expired on6th of December 2023).

### New Features
- Significant performance improvements in all 4 supported database engines (SQL Server, Oracle, MySQL and PostgreSQL).

## 1.0.0.0 — 5 December 2023

### Improvements
- First General Availability (GA) release.
- Note that this version of the subsetter only carries out limited validation of this part of the configuration file, so users are recommended to take care when completing it.
- Addedexperimental supportforAzure SQL Databases.
- The subsetter now only starts the row counting process when an output file is explicitly requested (--output-file), which means it will run faster in cases where the file is not requested (which is impactful in larger source databases).

### New Features
- Added support for manual relationships in theconfiguration file.
- This allows the user to specify foreign key relationships that are not actually in the database design, but that should be used during subsetting.
- Added an application icon for the subsetter CLI executable.

### Bug Fixes
- Fixed a bug that made subsetting fail with MySql when the target and source are on the same server but using different ports.

## 0.8.0.0 — 1 November 2023

### Breaking Changes
- Breaking change:CLI parameter--starting-tablehas been renamed to--filter-tableto better reflect its purpose. This also impacts ourYAML/JSON configuration filewhere input fieldStartingTableis now namedFilterTable.
- Breaking change:CLI parameter--filterhas been renamed to--filter-clauseto better reflect its purpose. This also impacts ourYAML/JSON configuration filewhere input fieldFilteris now namedFilterClause.
- Breaking change:Exit codes have been updated to the following values:

### Improvements
- *   Ok= 0
- GenericFailure= 1
- UnhandledException= 2
- FailedInitialization= 3
- CliInvokedIncorrectly= 4
- InvalidConfiguration= 5
- FailedTableExtraction= 6
- FailedTablePreprocessing= 7
- FailedUpdatingTargetDatabase= 8
- Improved logging setup error checking during application initialization.
- Several improvements to logging and error reporting during subsetting, making the information more human friendly.
- We no longer ship the subsetter CLI as a Docker Linux Alpine image. See ourinstallation guidefor more information on our release binaries.
- The subsetter CLI executable is now digitally code signed usingdotnet sign(andMicrosoft Authenticodetechnology) in Windows and SHA-256 hash checksum files are provided with the Linux distributables.
- The subsetter ensures all SQL connections are closed at the end of execution, regardless of the outcome.
- Made more culture invariant by no longer assuming we are running in British UK compatible environmental settings.
- Subsetter no longer uses SQL Server stored proceduresp_MSforeachtable
- Improved error message when the tool doesn't work because the database contains cyclic references.

### Bug Fixes
- Fixed issue where subsetter would only cleanup the temporary tables generated in the source database and restore the constraints on the target database if the overall operation was successful. This is now done regardless of the outcome.
- Fixed issue where sometimes database structure validation could fail claiming that columns were in a different order in the source and target.
- Fixed a bug related to extracting tables with names containing unbalanced brackets.

## 0.7.0.0 — 6 October 2023

### New Features
- The subsetter now fully supports MySql and Oracle, increasing the total number ofsupported database enginesto 4.

### Improvements
- Runtime execution issues and exceptions are now reported to Redgate for analysis.
- The subsetter can now handle tables whose fully qualified names would be ambiguous if unquoted, e.g. If there is a schema calledAwith a table calledB.Cand a schema calledA.Bwith a table calledCthat will now work fine.

### Bug Fixes
- Fixed an issue that could cause a log line to still be written to disk when--file-log-level=Nonewas provided.
02
## 2.2.7.2456 — 21 October 2025

### Bug Fixes
- Fixed an issue where untrusted constraints were being restored as trusted, causing issues with existing data (SQL Server only).
- Fixed an issue where copying large records to the target database can sometimes deadlock (SQL Server only).

## 2.2.5.2230 — 3 October 2025

### Bug Fixes
- Fixed an issue where excluded tables were not being emptied in the target database when using Overwrite target database write mode.

## 2.2.4.2138 — 22 September 2025

### Improvements
- No longer CASCADE when truncating target database tables in Overwrite mode (Oracle only).

## 2.2.3.2120 — 18 September 2025

### New Features
- Fixed an issue where foreign keys were being re-enabled after subsetting but were being left as untrusted (SQL Server only).

### Bug Fixes
- Fixed an issue where databases with square brackets in their names caused a crash (Oracle only).

## 2.2.2.2056 — 15 September 2025

### New Features
- Added support for subsetting temporal tables (in SQL Server). The temporal table will be subsetted, but the history table will be emptied. The retention period of the temporal table will also be reset.

### Improvements
- maxTableCopyParallelism can now be set in the options file to control the maximum number of tables to copy in parallel.

## 2.1.14.1471 — 24 June 2025

### New Features
- Added the ability to follow forward only relationships for starting tables.

## 2.1.13.1440 — 23 June 2025

### New Features
- Added support for MariaDB. Running against MariaDB was previously possible by using --database-engine MySQL. MariaDB is now a supported value (e.g. --database-engine MariaDB).

### Bug Fixes
- Fixed an issue where subsetter tries to insert/update a record without a value specified for a specific column in MySQL.

## 2.1.9.7997 — 19 May 2025

### New Features
- Added the ability to allow subsetting when there are no foreign keys using the--forceoption.

## 2.1.5.7733 — 18 March 2025

### New Features
- Added help links for validation errors.
- Added a --dry-run option to perform a dry-run with no subsetting.
- Added a --force option to allow subsetting when the source and target database schemas are not an exact match.

### Bug Fixes
- Fixed an issue where subsetting can fail on databases with more than 2.1bn rows in a single table.

### Improvements
- Better handling of tables containing encrypted columns (SQL Server).

## 2.0.1.6888 — 21 October 2024

### Improvements
- Renamed the command line executable from subsetter to rgsubset.
- Renamed the configuration file to options file.
- Moved some command line flags affecting the behaviour of subsetting to the options file.
- Moved static data tables to their own section instead of a flag on starting tables.
- Improved error logging when validating a subset.

### New Features
- Added the ability to specify target size using percentages.
- Added a default target size of 10% (up to a maximum of 1GB) when running subsetting without specifying any target size or starting tables.
3) -->
## 0.6.0.0 — 19 September 2023

### Improvements
- Two command-line arguments have been removed.Scripts or workflows that pass these command-line arguments will now fail with an error. The arguments should be removed.
- The command-line argument--target-to-source-connection-stringhas been removed. This optional argument allowed the provision of a second connection string for use in remote queries. The subsetter now uses streaming rather than remote queries, and only uses one connection string for each database.
- The environment variable corresponding to this command-line argument has been removed: i.e. the variableREDGATE_SUBSET_TARGET_TO_SOURCE_CONNECTION_STRING. The environment variable will now be ignored.
- The command-line argument--ole-db-providerhas been removed. This optional argument was only valid for Sql Server. It allowed the user to specify the database driver to use with remote queries. The subsetter now uses streaming rather than remote queries.
- The subsetter now modifies the source database.It creates tables to hold intermediary data during subsetting. It deletes them at the end of subsetting. Users are _strongly advised_ not to run the subsetter against a live production database. It is recommended to restore a backup, and run the subsetter against the restored database.
- Now uses a streaming approach to transfer subset data to the target database. Previous versions of the subsetter used remote queries to link the target database to the source database.
- The subsetter no longer uses remote queries, so there is no longer any requirement to enable them. PreviouslyOPENROWSEThad to be enabled for Sql Server, andDB Linkhad to be enabled for PostgreSql.

### Bug Fixes
- Used the correct page size for Sql Server which was slightly wrong, causing a small error in the target size feature.

## 0.5.1.0 — 4 September 2023

### Bug Fixes
- Fixed issue where mixed case tables didn't work in--target-database-write-mode=Overwritemode for PostgreSql.

### Improvements
- FixedArgumentExceptionthrown when using a relative output file living in the same location as the subsetter executable (e.g.--output-file=subsetting.json).

## 0.5.0.0 — 31 August 2023

### Breaking Changes
- Breaking change:Optional--modeparameter has been renamed to--target-database-write-modeto better reflect its purpose.
- Breaking change:JSON output file schema has changed.sourceDbSizehas been renamed tosourceDbSizeInBytesandtargetDbSizehas been renamed totargetDbSizeInBytes.

### Improvements
- Improved processing and validation of the--output-fileCLI parameter:
- Folder structure will be created if it doesn't exist (e.g.C:\A\B\output.jsonin Windows will create foldersAandBif they don't exist).
- If the JSON output file cannot be created for any reason, tool will fail early (instead of only at the end of the subsetting operation).
- The subsetter will fail if the output file value corresponds to an existing folder.
- A warning will be issued if the output file value doesn't have an extension or if the extension doesn't match a JSON (.json) one.

### Bug Fixes
- Fixed issue where tables in the source database with special characters, reserved keywords or spaces in their names would cause the subsetter to crash during execution (regardless of whether they were being used in the subset operation or not).
- Fixed issue where a slow connection to the source or target databases could lead to runtime execution timeouts and a failed subsetting operation.

## 0.4.1.0 — 16 August 2023

### Improvements
- Results of a subset run can now be output as a JSON file using--output-file <file path>CLI parameter, where<file path>is a relative or absolute path to a file.

## 0.4.0.0 — 11 August 2023

### Improvements
- There is now an experimental--target-sizeCLI option which allows you to specify the desired size of the subset in the formatx(B|KB|MB|GB|TB)(e.g.--target-size=5GB) instead of setting a starting table and filter.
- NOTE:While the program does its best to choose a sample of the source database that is close to the target size, it's not guaranteed to work well on all databases.

### Bug Fixes
- Fixed an issue where copyright and version information was missing from the win-64 subsetter CLI executable.

## 0.3.1.0 — 17 July 2023

### New Features
- Introduced the --mode optional parameter. Supported values are Strict and Overwrite. In Strict mode the subsetter stops if the target tables are not empty. In Overwrite mode it truncates the target tables if they have any rows. Defaults to Strict.

### Improvements
- Anonymous telemetry events are now reported during execution of the subset.
- The validation of the target database is now less strict: Only the tables in the target database that are going to receive the subset are validated.
- It's now possible to subset SQL Server databases that usevarcharkeys (in particular with theSQL_Latin1_General_CP1_CI_AScollation).

## 0.3.0.0 — 29 June 2023

### Breaking Changes
- Breaking change:SQL Server only CLI parameter--providerhas been renamed to--ole-db-providerto better reflect its purpose.
- Breaking change:CLI parameter--database-enginevaluePostgreshas been renamed toPostgreSQLto match official database engine name (and to ensure consistency across Redgate's toolset). This also impacts ourYAML/JSON configuration file.

### New Features
- Composite foreign keys are now supported.
- Added several improvements to SQL Server connection string (source,targetandtarget-to-source) CLI validations (e.g. usage of preferred field aliases, replacement of unsupported field values by compatible supported ones) to ensure compatibility with remote connections viaOPENROWSET.

### Improvements
- In SQL Server, the default behavior if a custom OLE DB provider is not given via the--ole-db-providerCLI parameter has been changed. Instead of using a single defaultMSOLEDBSQLand exiting if not registered in the target database, the tool now tries several default OLE DB providers in order (MSOLEDBSQL,MSOLEDBSQL19,SQLNCLIandSQLOLEDB) and only fails if none work in the target database.
- Related with the above, the subsetter will now suggest a course of action if no suitable OLE DB provider is found and will also link to ourtroubleshooting documentationin that scenario.
- A warning will be printed to standard out if the CLI is given a custom OLE DB provider via--ole-db-providerfor any database engine that is not SQL Server. The subset operation will still be executed.
- The subsetter will no longer try to subset views in PostgreSQL.

## 0.2.1.0 — 14 June 2023

### New Features
- Improved support for self references. Previously if a table contains a foreign key to itself, that column would always be set to null. Now, that column will be set to null only if it refers to a row not in the subset. Note self reference columns will not affect which rows are included in the subset.
- Added a runtime warning that output subset may not contain the parents for thehierarchyid SQL Server data type.

### Bug Fixes
- Fixed an issue where the logging output location wasn't always being created if it didn't exist.
- Fixed an issue where some target database validation errors were being silently swallowed by the CLI.

## 0.2.0.0 — 2 June 2023

### Breaking Changes
- Important- This version introduces two breaking changes:

### Improvements
- To ourYAML/JSON configurationwhere the source and target connection strings have been removed from the configuration schema.
- The source and target connection strings can now either be passed in the command line or stored in environment variables. Please check theCLI referencefor more details.
- To our connection string parameters to append a-stringsuffix to follow Redgate's convention:
- --source-connectionbecomes--source-connection-string.
- --target-connectionbecomes--target-connection-string.
- --target-to-source-connectionbecomes--target-to-source-connection-string.
- Several improvements to thesubsetter CLI parameters:
- You can now disable file and console logging with the specialNonelog level (e.g.--file-log-level=None).
- Several enhancements to command line validation checks.

### New Features
- Add initial support forPostgreSQL database engine.
- Added new parameter--log-folderto override the default log folder location.

## 0.1.0.0 — 11 May 2023

### New Features
- First internal release of theRedgate subsetter. Only SQL Server is supported.
- experimental support

### Improvements
- this page
- YAML/JSON configuration file
- known limitations
- Azure SQL Databases
- installation guide
- dotnet sign
- Microsoft Authenticode
- OPENROWSET
- DB Link
- hierarchyid SQL Server data type
- CLI reference
- Redgate subsetter

### Security Fixes
- CVE-2024-0056

## 2.1.16.1649 — 24 July 2025

### Bug Fixes
- Fixed an issue with ignoring columns with complex data types (e.g. XML, JSON, Geography, etc...).
- Fixed an issue where static data tables occasionally cause a column imbalance when subsetting, resulting in unexpected null values.

## 2.1.15.1477 — 24 June 2025

### Bug Fixes
- Fixed an issue where static data tables were being treated as starting tables.

## 2.1.10.8038 — 21 May 2025

### New Features
- Added the ability to specify the log file location using a--log-filecommand line option. This can also be used to turn off the log file using--log-file none.

## 2.1.8.7948 — 9 May 2025

### Bug Fixes
- Fixed a crash on startup.

## 2.1.7.7933 — 8 May 2025

### Bug Fixes
- Fixed an issue where subsetting tries to put nulls in a non-nullable column

## 2.1.6.7744 — 19 March 2025

### Bug Fixes
- Fixed an issue where using desired size can cause an "Invalid column name" error when subsetting.

## 2.1.4.7676 — 27 February 2025

### Bug Fixes
- Fixed an issue when supplying an empty options file.

## 2.1.3.7501 — 14 January 2025

### New Features
- Added progress reporting while subsetting.

## 2.1.2.7370 — 10 December 2024

### Bug Fixes
- Fixed an issue with SQL Server where auto-updating statistics on the target database could cause subsetting to fail.

## 2.0.5.7299 — 21 November 2024

### Bug Fixes
- Fixed an issue when using desired size in conjunction with static data tables.

## 2.0.4.7180 — 11 November 2024

### Improvements
- Improved logging.

## 2.0.3.7037 — 29 October 2024

### Bug Fixes
- Fixed an issue with self-referencing foreign keys.

## 2.0.2.6967 — 23 October 2024

### Bug Fixes
- Fixed an issue where filter clauses can't begin with a 'WHERE'

## 1.1.22.6378 — 23 September 2024

### Improvements
- Improved the output when source and target database have different schemas.
- Reduced the working space required in the source database while subsetting.

### New Features
- Allowed subsetting to work on source tables with no rows.
- Added the ability (SQL Server only) to use temporary tables as a working space rather than tables in the source database. This can be configured using theUseTemporaryTablesconfiguration option.

## 1.1.21.6082 — 30 August 2024

### Improvements
- Internal library updates

### Bug Fixes
- Fixed an issue where disabling triggers failed due to unquoted trigger names
- Fixed an issue where schema validation failed due to relationships

## 1.1.20.5998 — 21 August 2024

### Improvements
- Logged the tables and relationships involved in a schema mismatch.

## 1.1.19.5974 — 19 August 2024

### Improvements
- Performance improvement.

## 1.1.18.5918 — 13 August 2024

### Improvements
- Triggers on the target database are now automatically disabled while subsetting.

### Bug Fixes
- Fixed an issue where subsetter ignored values passed into the--include-tables-row-threshold flag

## 1.1.17.5805 — 5 August 2024

### New Features
- Added the ability to define excluded tables in the configuration file.

### Improvements
- Made the auto detection of static data tables more robust.

## 1.1.16.5647 — 26 July 2024

### Bug Fixes
- Fixed an issue with not being able to pass the --include-tables-row-threshold parameter on the command line.

## 1.1.15.5636 — 26 July 2024

### Bug Fixes
- Fixed an issue where subsetting sometimes fails when working on tables that have computed columns.

## 1.1.14.5531 — 16 July 2024

### New Features
- Added the ability to define starting tables as static data tables.
- Added the ability to configure the row threshold for automatic table inclusion.

### Improvements
- Automatically included tables without outgoing relationships based on a row threshold.
- Improved the way table size is measured for SQL Server to make the target size feature more accurate.

### Breaking Changes
- Fixed an issue where the subsetter tries to break relationships for cycles that are not in the final subset.

### Bug Fixes
- Fixed an issue when trying to subset a table using more than one inward relationship.

## 1.1.13.5255 — 25 June 2024

### New Features
- Added support for subsetting with cyclic relationships.
- Added more detailed logging when validation errors occur.

## 1.1.11.0 — 23 May 2024

### Improvements
- Replaced the in-product date-based timebomb with a Redgate license check.
- Logged the tables involved when subsetting cannot proceed due to cyclic references.

### Bug Fixes
- Fixed an error when subsetting a database with a computed column with a unique constraint.

## 1.1.10.0 — 14 May 2024

### Improvements
- Improved reporting of errors for more useful error messages.

## 1.1.9.0 — 7 May 2024

### Breaking Changes
- Breaking change:Multiple starting tables now subsets each starting table individually and merges the results.

### New Features
- Added support for subsetting multiple starting tables without primary keys for SQL Server, PostgreSQL, and Oracle.

### Bug Fixes
- Fixed --target-size issue with empty parent tables.

## 1.1.8.0 — 30 April 2024

### Breaking Changes
- Breaking change:CLI parameter--filter-tablehas been renamed to--starting-tableto better reflect its purpose.

### Improvements
- Performance improvements.

## 1.1.7.0 — 27 March 2024

### Breaking Changes
- Breaking change:FilterTable is now named StartingTable in theYAML/JSON configuration file.

### New Features
- Added the ability to use multiple starting tables.

### Bug Fixes
- Fixed an issue where log files were being capped at 20MB.

## 1.1.6.0 — 8 March 2024

### Bug Fixes
- Fixed issue with foreign keys with the same name across schemas.

## 1.1.5.0 — 29 February 2024

### New Features
- Improved support for partitions in PostgreSQL.

## 1.1.2.0 — 16 January 2024

### Improvements
- Improved performance of filter table validation in source database (particularly impactful for large tables with many rows).
- Improved performance of row counting used by the target size feature, so that it will be much faster for large tables.
- Improved validation for table identifiers such as the filter table.
- The subsetter is now able to accept filter clauses that start with the WHERE keyword.

### Bug Fixes
- Fixed known high severity vulnerabilityCVE-2024-0056.

## 1.1.1.0 — 20 December 2024

### New Features
- System version temporal tables in SQL Server are now supported. The subsetter copies the temporal tables but leaves the history tables empty.

### Improvements
- Improved command line validation for manual relationships in theconfiguration file.

## 1.1.0.0 — 11 December 2024

### Improvements
- A fewknown limitationsin current and past versions:
- The subsetter can't copy columns with User-Defined Types (UDTs) in Oracle.
- The subsetter may fail on PostgreSQL databases if the source and target database are on machine with different architectures.
- Updated Redgate's Windows Authenticode digital certificate signature in the CLI executable (previous one expired on6th of December 2023).

### New Features
- Significant performance improvements in all 4 supported database engines (SQL Server, Oracle, MySQL and PostgreSQL).

## 1.0.0.0 — 5 December 2023

### Improvements
- First General Availability (GA) release.
- Note that this version of the subsetter only carries out limited validation of this part of the configuration file, so users are recommended to take care when completing it.
- Addedexperimental supportforAzure SQL Databases.
- The subsetter now only starts the row counting process when an output file is explicitly requested (--output-file), which means it will run faster in cases where the file is not requested (which is impactful in larger source databases).

### New Features
- Added support for manual relationships in theconfiguration file.
- This allows the user to specify foreign key relationships that are not actually in the database design, but that should be used during subsetting.
- Added an application icon for the subsetter CLI executable.

### Bug Fixes
- Fixed a bug that made subsetting fail with MySql when the target and source are on the same server but using different ports.

## 0.8.0.0 — 1 November 2023

### Breaking Changes
- Breaking change:CLI parameter--starting-tablehas been renamed to--filter-tableto better reflect its purpose. This also impacts ourYAML/JSON configuration filewhere input fieldStartingTableis now namedFilterTable.
- Breaking change:CLI parameter--filterhas been renamed to--filter-clauseto better reflect its purpose. This also impacts ourYAML/JSON configuration filewhere input fieldFilteris now namedFilterClause.
- Breaking change:Exit codes have been updated to the following values:

### Improvements
- *   Ok= 0
- GenericFailure= 1
- UnhandledException= 2
- FailedInitialization= 3
- CliInvokedIncorrectly= 4
- InvalidConfiguration= 5
- FailedTableExtraction= 6
- FailedTablePreprocessing= 7
- FailedUpdatingTargetDatabase= 8
- Improved logging setup error checking during application initialization.
- Several improvements to logging and error reporting during subsetting, making the information more human friendly.
- We no longer ship the subsetter CLI as a Docker Linux Alpine image. See ourinstallation guidefor more information on our release binaries.
- The subsetter CLI executable is now digitally code signed usingdotnet sign(andMicrosoft Authenticodetechnology) in Windows and SHA-256 hash checksum files are provided with the Linux distributables.
- The subsetter ensures all SQL connections are closed at the end of execution, regardless of the outcome.
- Made more culture invariant by no longer assuming we are running in British UK compatible environmental settings.
- Subsetter no longer uses SQL Server stored proceduresp_MSforeachtable
- Improved error message when the tool doesn't work because the database contains cyclic references.

### Bug Fixes
- Fixed issue where subsetter would only cleanup the temporary tables generated in the source database and restore the constraints on the target database if the overall operation was successful. This is now done regardless of the outcome.
- Fixed issue where sometimes database structure validation could fail claiming that columns were in a different order in the source and target.
- Fixed a bug related to extracting tables with names containing unbalanced brackets.

## 0.7.0.0 — 6 October 2023

### New Features
- The subsetter now fully supports MySql and Oracle, increasing the total number ofsupported database enginesto 4.

### Improvements
- Runtime execution issues and exceptions are now reported to Redgate for analysis.
- The subsetter can now handle tables whose fully qualified names would be ambiguous if unquoted, e.g. If there is a schema calledAwith a table calledB.Cand a schema calledA.Bwith a table calledCthat will now work fine.

### Bug Fixes
- Fixed an issue that could cause a log line to still be written to disk when--file-log-level=Nonewas provided.


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
<!-- fetched: 2026-04-17 | latest: 2.4.1.2487 (17 April 2026) -->
<!-- fetched: 2026-04-04 | latest: 1.0.3.1787 (16 January 2024) 
## 2.4.1.2487 — 17 April 2026

### New Features
- Improved AI classification. A set of new features has been added to the Machine Learning PII classification model.

## 2.2.12.1133 — 15 September 2025

### Improvements
- The names of temporary row identifiers now start withrg_, making them easier to identify.

### New Features
- Added support for masking of temporal tables (in SQL Server). The temporal table will be masked, but the history table will be emptied. The retention period of the temporal table will also be reset.

### Bug Fixes
- Fixed an error when expressions reference a primary key column.

## 2.2.11.1089 — 9 September 2025

### New Features
- Added a conditional custom dataset that allows the dataset for a column to vary based on the data in the row.
- Added ability to mask binary columns using a binary file dataset.

## 2.2.10.927 — 21 August 2025

### New Features
- Added the ability to classify with data scanning and AI using the --scan-data command line parameter.

## 2.2.4.683 — 21 July 2025

### New Features
- Added a concat function to the pre and post masking transforms.
- Added the ability to reference other columns in the same table in pre-masking transformations. This allows for columns to be deterministic based on other columns, or combination of columns.
-->

## 1.0.3.1787 — 16 January 2024

### Improvements
- Improved the performance of classifying databases with large numbers of columns.
- Changed the default behaviour for dates of birth from random date generation to variance. Existing date values will now be shifted by a random number of days (up to a maximum of 90) when masking.

### New Features
- Added the ability to create options files from the command line.
- Added the ability to preserve null values when masking. This is turned on by default.
- Added the ability to mask dates of births deterministically.

## 
## 2.2.3.606 — 15 July 2025

### New Features
- Added the ability to define datasets at the table level as well as globally. Table-level datasets override the global ones for that table, but global ones will be used where a table-level dataset is not defined.
- Added the ability to create datasets using an expression to use values from other columns and datasets when masking.
- Added new datasets for Domainsand TopLevelDomains.

## 2.2.1.418 — 23 June 2025

### New Features
- Added support for MariaDB. Running against MariaDB was previously possible by using --database-engine MySQL. MariaDB is now a supported value (e.g. --database-engine MariaDB).

## 2.1.15.3814 — 9 June 2025

### New Features
- Add the ability to run pre-masking and post-masking transforms on the data.
- Added a default classification rule to classify columns called 'forename' as GivenNames.
- Added a new DateVariance dataset. This works similar to the DatesOfBirth dataset in varying a date by a random number of days (up to a maximum of ±90 days).

### Improvements
- Handled a false-positive classification of ethnicity columns.

## 2.1.7.3006 — 13 March 2025

### Improvements
- Improved the performance of masking when running against a SQL Server database.

### New Features
- Added the ability to specify the connection string via aREDGATEANONYMIZECONNECTION_STRINGenvironment variable.
- Added the ability to useequals anyandnot equals anyin classification rules.
- Added the ability to ignore columns from classification using a custom classification rule.
- Added better validation of column widths when masking with pattern-based datasets.
1.0.3.1787 — 16 January 2024

### Improvements
- Improved the performance of classifying databases with large numbers of columns.
- Changed the default behaviour for dates of birth from random date generation to variance. Existing date values will now be shifted by a random number of days (up to a maximum of 90) when masking.

### New Features
- Added the ability to create options files from the command line.
- Added the ability to preserve null values when masking. This is turned on by default.
- Added the ability to mask dates of births deterministically.

## 1.0.2.1557 — 2 January 2024

### New Features
- Added link to documentation in the CLI help menu.

### Improvements
- Allowed custom datasets to be used when masking columns deterministically.
- Allowed pattern-based datasets to be used when masking columns deterministically.
- PostgreSQL: For partitioned tables, only classify the logical "root" table, not the separate partition "child" tables. Also only read constraints from the "root" table.

### Bug Fixes
- Updated links to documentation in CLI menu and errors to use more stable address.

## 1.0.1.1407 — 15 December 2023

### Improvements
- Introduced custom classification rules.

### New Features
- Added help links to validation errors.

## 1.0.0.1182 — 29 November 2023

### Improvements
- pre-masking and post-masking transforms

## 2.3.18.2388 — 1 April 2026

### Improvements
- PassportNumbers, USSocialSecurityNumbers, and ZipCodes classes are now disabled when using Data Scanning classification.

## 2.3.17.2351 — 30 March 2026

### New Features
- Improved the data scanning feature. We have re-trained the Machine Learning PII classification model on new training data.

## 2.3.15.2234 — 10 March 2026

### New Features
- Added support for token-based authentication via Azure for SqlServer only.

## 2.3.2.1836 — 4 December 2025

### Improvements
- Minor performance improvements

## 2.2.14.1183 — 23 September 2025

### Improvements
- String literals in pre or post transforms and conditional datasets can now be single quoted or double quoted.

## 2.2.13.1158 — 15 September 2025

### Bug Fixes
- Fixed an issue with .NET runtime bundling introduced in 2.2.12.113 and 2.2.11.1089

## 2.2.8.885 — 19 August 2025

### Bug Fixes
- Fixed an issue extracting the required data for expression datasets.

## 2.2.2.448 — 24 June 2025

### New Features
- Added option to control max parallelization for masking

## 2.2.0.388 — 18 June 2025

### New Features
- Added the ability for pattern-based datasets to specify ranges of characters rather than just any random character.

## 2.1.18.342 — 16 June 2025

### New Features
- Added the ability to defined rules to apply pre-masking and post-masking transforms to columns.

## 2.1.17.312 — 16 June 2025

### Improvements
- AddednullIf,nullIfEmptyandifNullfunctions, and decimal, integer and date literals to pre-masking and post-masking transforms.

## 2.1.14.3521 — 21 May 2025

### New Features
- Added the ability to specify the log file location using a--log-filecommand line option. This can also be used to turn off the log file using--log-file none.

## 2.1.13.3497 — 20 May 2025

### Improvements
- Handled an error when the user does not have "view any definition" permissions in SQL Server.

## 2.1.12.3456 — 12 May 2025

### New Features
- Added the ability to classify based on the type of a column being a number.

## 2.1.8.3032 — 24 March 2025

### New Features
- Added help links to the output when masking validation errors occur.
- Added datasets to groups to help with discoverability.

## 2.1.6.2874 — 27 February 2025

### New Features
- Added the ability to set connection and command timeouts for classification.

## 2.1.5.2853 — 25 February 2025

### New Features
- Added the ability to generate a masking options file to auto-fix validation errors.
- Added the ability to manually define a unique row identifier for tables.

## 2.1.4.2746 — 24 January 2025

### New Features
- Added the ability to mask more numeric data types using pattern datasets.

## 2.1.3.2646 — 7 January 2025

### Bug Fixes
- Fixed an issue with duplicate unique constraint names.
- Fixed an issue where the total number of tables being masked was reported incorrectly.
- Fixed an issue with materialized views in Oracle.

### Improvements
- Ignored computed and timestamp columns in SQL Server.
- Ignored system and temporal tables in SQL Server.

## 2.1.0.2541 — 5 December 2024

### Bug Fixes
- Fixed an issue with dangling constraints in Oracle.

## 2.0.3.3506 — 27 November 2024

### Improvements
- Ignored constraints on system tables.

## 2.0.2.2502 — 26 November 2024

### Bug Fixes
- Fixed query compatibility with SQL Server instances with case sensitive collations.

## 2.0.1.2494 — 25 November 2024

### Bug Fixes
- Fixed query compatibility with Oracle 19.

## 2.0.0.2317 — 17 October 2024

### Improvements
- Renamed Anonymize.exe to rganonymize.exe

## 1.2.3.1862 — 12 June 2024

### Bug Fixes
- Fixed an issue where the EmptyValue dataset and NullValue dataset were querying the column data unnecessarily.

## 1.2.2.1852 — 10 June 2024

### Bug Fixes
- Fixed an issue with the lifetime of temporary tables in SQL Server used when masking.

## 1.2.1.1824 — 6 June 2024

### Bug Fixes
- Fixed an issue with timeouts when masking using the NullValue and EmptyValue datasets.

## 1.2.0.1730 — 22 May 2024

### Improvements
- Replaced the in-product date-based timebomb with a Redgate license check.

## 1.1.9.1641 — 16 May 2024

### Improvements
- Improved validation for dataset and datatype compatibility.

### New Features
- Added support for masking exact numerics.

## 1.1.6.1531 — 25 April 2024

### Bug Fixes
- Fixed an issue where masking based on patterns was producing only a small number of distinct values.
- Fixed an issue where masking was generating data that was too long to fit into some columns.

## 1.1.5.1423 — 27 March 2024

### Improvements
- Improved error handling when masking fails.

## 1.1.3.1368 — 12 March 2024

### New Features
- Added support for masking tables without primary keys.

### Improvements
- Switched the format of phone numbers to be US-based by default.
- Changed the masking connection and command timeouts to 90 seconds.
- Phone number extensions are no longer classified as phone numbers.
- US states are no longer auto-classified.

## 1.1.2.1302 — 28 February 2024

### Improvements
- Improved realism for list-based datasets.

### New Features
- Added support for using YAML for configuration and output files.
- Added support for string-based date/datetime columns.

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
<!-- fetched: 2026-04-17 | latest: 0.55.59 (17 April 2026) -->

## 0.55.59 — 17 April 2026

### New Features
- Add "Masked" filter option to the anonymization treatment dataset filter, allowing viewing of all masked columns at once without selecting each dataset individually.

### Improvements
- Editing connections with parameters is now more intuitive, with better warnings and explanations.

## 0.54.26 — 14 April 2026

### New Features
- Fixed an issue where updates to a column's dataset made using the Anonymization table view for a new treatment were being ignored

## 0.53.1111 — 13 April 2026

### New Features
- Added command timeout setting to connections. When set, the --command-timeout flag is passed to CLI tools during workflow runs.

### Improvements
- TDM is now opted out of the popular extension Dark Reader. Instead, TDM respects your system theme. If users wish to

### Bug Fixes
- Fixed an issue where updates to a column's dataset made using the Anonymization table view were being ignored

#
#
## 0.52.168 — 9 April 2026

### Improvements
- Data scanning feature is now called AI Classify in the GUI

### New Features
- Turns AI Classify on by default in the GUI, both for new installations and for existing installations. I.e. customers who have already installed TDM will find AI Classify is on by default once they upgrade. Their existing database models won't be changed, but any new database models that they create will be scanned.

### Bug Fixes
- Fixed an error when attempting to use the sample database after installation.

## 0.8.11 — 31 May 2024

### New Features
- Added Redgate license check. See https://documentation.red-gate.com/testdatamanager/getting-started/licensing for more info.
- Adjusted the add image button placement in the Test Databases page.
- Users are no longer immediately given access to an image when selected in Image Details => Permissions Popover => User List. This also fixes the user list not updating when a user is added to an image.

### Breaking Changes
- Non-breaking changes to config.yml: TdmDatabaseUsername and TdmDatabasePassword are now optional if ConnectionStringTemplate is provided.

### Improvements
- Anonymization 1.2.0
- DataGeneration 1.0.4
- Subsetting 1.1.10
- Provision 0.0.44

## 0.49.39 — 5 March 2026

### New Features
- Add ability to edit the treatment JSON directly in the UI with new code view tab on the treatment page.

## 0.49.39
## 0.17.0 — 1 July 2025

### Improvements
- The duration of individual workflow steps can now be seen.
- The logs for each step of a workflow run can now be viewed in the operations tab of the run details page.
- Runs under deleted workflows can now be viewed.
- Anonymization 2.1.15.1477
- DataGeneration 1.0.5
- Subsetting 2.2.2.448
- Provision 0.4.166

### New Features
- The user can now pick from a list of connections to deploy to when creating a clone from an image. This will typically only work if the connections have a file share in common.
- Added msi installer for the GUI.

## 0.16.0 — 17 June 2025

### New Features
- The TDM backing database schema and migration engine has been significantly changed to support the upcoming Workflows feature and future alternative database engines. TDM will therefore require a fresh database, and will not start with the old database schema.

### Improvements
- Anonymization 2.1.18.342
- DataGeneration 1.0.5
- Subsetting 2.1.11.1344
- Provision 0.4.134

## 0.14.0 — 23 May 2025

### Improvements
- Anonymization 2.1.14
- DataGeneration 1.0.5
- Subsetting 2.1.10
- Provision 0.4.82
- Workflow 0.4.82
- Extraction 0.0.0.3549

## 0.13.1 — 10 April 2025

### New Features
- Added dataset groupings
- Added more support for creating subsetting treatments
- Add support basic auth for DevOps Test Data Manager edition

### Bug Fixes
- Fix edit dataset not updating edited names

### Improvements
- Anonymization 2.1.9
- DataGeneration 1.0.5
- Subsetting 2.1.6
- Provision 0.3.1

## 0.13.0 — 20 March 2025

### New Features
- Added new 'Treatments' section to the side menu to hold all the capabilities of 'Tier 1: Data Treatment'.
- Added new 'Delivery' section to the side menu to hold all the capabilities of 'Tier 2: Delivery'.
- The preview label no longer shows erroneously when an image is being created.
- The creation date of an image synced from Clone now actually matches the create date of the data-image, rather than using the date the image was synced.

### Improvements
- Card views for images and clones now show the latest items at the top.
- Navigation to the image details page in the DataGrid view can now be done with the keyboard.
- Keyboard navigation around the DataGrid view's interactive elements now better match ARIA standards.
- Column masking information now shows correctly again in image details view.
- If you filter the images grid by database engine and choose an engine with no specific version, all versions will be shown.
- Anonymization 2.1.7
- DataGeneration 1.0.5
- Subsetting 2.1.4
- Provision 0.3.912

## 0.12.2 — 13 January 2025

### Bug Fixes
- Synced deployments now correctly include the port in their URL. This fixes deleting deployments not working amongst other clone sync issues.

### Improvements
- Anonymization 2.1.4
- DataGeneration 1.0.5
- Subsetting 2.1.2
- Provision 0.2.42

## 0.12.1 — 19 December 2024

### Improvements
- The current tab is now persisted in the url, so users can deep-link to specific tabs.
- Removes (non-functional) option to select Oracle as a database type.
- Anonymization 2.1.2
- DataGeneration 1.0.5
- Subsetting 2.1.2
- Provision 0.2.34

### New Features
- Drops support for Postgres 11. Existing images will continue to work, but no new ones can be created on Clone connections.

### Breaking Changes
- Admins are now indicated in the image permissions modal and cannot be removed from share lists.

### Bug Fixes
- Fix migration bug that prevented users from editing a connection that had no credentials.

## 0.12.0 — 5 December 2024

### Improvements
- Changes made to the tables in the images and clones screens are persisted to local storage.
- Now shipping rgsubset version 2.0 and rganonymize version 2.0.
- Renamed Subsetter.exe to rgsubset.exe and Anonymize.exe to rganonymize.exe. You will need to update your config.yml to reflect this change if you were manually specifying those executable locations.
- Licensing code changes for rgsubset.exe and rganonymize.exe means you will need to re-download and apply your license.
- Anonymization 2.0.3
- DataGeneration 1.0.5
- Subsetting 2.0.5
- Provision 0.2.25

### New Features
- Existing subsetting data has been cleared to support rgsubset.exe v2.0. This means that the source and target number of rows will not show on images created on older versions, but those images will continue to function.

## 0.11.3 — 29 October 2024

### Bug Fixes
- Fix "unable to load datasets" error on the Image Details page.
- Fix sync issue when saving custom options for Anonymize on the ImageDetails page.

### New Features
- Add connection button of the create image page no longer enabled for non-admin users.

### Improvements
- Anonymization 2.0.0
- DataGeneration 1.0.5
- Subsetting 1.1.22
- Provision 0.2.12

## 0.11.2 — 24 October 2024

### New Features
- Client secret and API token inputs in the add connection form are now password fields.
- Fixed a vulnerability in the add connection form of secret values not being cleared correctly.

### Improvements
- Anonymization 2.0.0
- DataGeneration 1.0.5
- Subsetting 1.1.22
- Provision 0.2.12

## 0.11.1 — 23 October 2024

### Bug Fixes
- Resolved an issue of image creation with no treatment not working existing infrastructure connections.

### Improvements
- Anonymization 2.0.0
- DataGeneration 1.0.5
- Subsetting 1.1.22
- Provision 0.2.12

## 0.11.0 — 22 October 2024

### Improvements
- TDM Clone images shared in TDM are now also shared to that user in TDM Clone.
- TDM Hub now synchronizes images and clones with TDM Clone.
- Improved filtering performance of the image and clones card views.
- Ensures the TDM database password is never logged.
- Clone lifespans are now visible as a column in the Clones table view.
- Success messages are now displayed using snackbars instead of in the banner.
- Due to changes in how we store user modifications, images in preview which have been customised will not generate correctly.
- Anonymization 2.0.0
- DataGeneration 1.0.5
- Subsetting 1.1.22
- Provision 0.2.12

### New Features
- TDM Hub now supports creating connections to Clone with Client Credentials.
- Added support for writing classification rule conditions in custom anonymization.
- Connections no longer are being added when an unreachable file share causes the submission to fail.

## 0.10.3 — 28 August 2024

### Improvements
- Images and clones are now separate pages.
- Connection details have been cleared and will need to be re-entered on the Connections page.
- Users will no longer see the rename or delete buttons on images they are not the owner of.
- Anonymization 1.2.4
- DataGeneration 1.0.5
- Subsetting 1.1.20
- Provision 0.1.15

### New Features
- Added a new list view for images and clones.
- Fixed handling of multiple versions of a database in the same backup by adding only the latest one to sources.

### Breaking Changes
- Removed support for RgCloneSqlServerContainerMaxMemoryLimitMb. This is handled by Clone internally.

## 0.9.3 — 12 August 2024

### Bug Fixes
- Fixed a bug preventing data gen from working on rgclone connections.

### Improvements
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.17
- Provision 0.1.5

## 0.9.2 — 8 August 2024

### Improvements
- Staging data-images are now deleted immediately on image creation failure rather than waiting for the user to delete the associated image in the GUI.
- TDM Clone default container lifetime is now respected rather than having an infinite lifetime.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.17
- Provision 0.1.4

### Bug Fixes
- Fixed a bug that sees users have the name "Name unknown" in the user profile.

### New Features
- Validation of Clone URL in Add/Edit Connection sidebar improved.

## 0.9.1 — 8 August 2024

### Bug Fixes
- Fix global exception handler in Provision.

### Improvements
- Hotfix for provision swallowing error messages.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.14
- Provision 0.0.70

## 0.9.0 — 29 July 2024

### Improvements
- The image and clone cards have been redesigned to better fit our standards.
- Operations log on the error details sidebar now fetches clone creation logs without erroring.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.14
- Provision 0.0.69

### New Features
- TDM Hub now supports standalone servers as well as TDM Clone via the new Connections feature.

### Breaking Changes
- Because credentials are now managed via the Connections page, please remember to remove all RGClone_ parameters in your config.yml, e.g. RgCloneApiEndpoint and RgCloneApiToken. A TDM Clone connection with those credentials will have already been created on your behalf.

### Bug Fixes
- Fix accessibility and discoverability issues around the image rename feature.

## 0.8.15 — 18 July 2024

### New Features
- Added a new operations list in both the error details sidebar and the image details page.

### Improvements
- The number of subset rows now correctly displays in the image details table.
- The header is sticky again.
- Image details now correctly shows classification information when it becomes available. No need for a page refresh.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.14
- Provision 0.0.67
 — 5 March 2026

### New Features
- Add ability to edit the treatment JSON directly in the UI with new code view tab on the treatment page.

## 0.48.269 — 3 March 2026

### New Features
- Run output downloads now offer three options: human-readable logs (new default), raw CLEF logs, and run artifacts.
- Add an error header to the run details page. When a workflow run fails, the errors are summarized at the top.
- Add licensing debugging information to the Settings page.

### Bug Fixes
- Fixed intermittent "Failed to load module script" errors in Monaco code editor by bundling all editor assets locally instead of loading from CDN.

### Improvements
- Suppressed harmless ResizeObserver console warnings from Monaco Editor that were causing confusing empty global error alerts.
- Oracle connections can now be edited without an "unimplemented method" error being thrown.
- Connections can again be edited even if they cannot be decrypted.

## 0.47.4 — 17 February 2026

### New Features
- Support for running an anonymize workflow against multiple target databases at the same time.

### Bug Fixes
- Fixed an issue where the downloaded JSON for an anonymize treatment was empty when the treatment had not been edited.

## 0.45.37 — 4 February 2026

### New Features
- Reduced the delay experienced after clicking the 'Create Treatment' button.
- Fixed an issue in create workflow where source connection could not be selected for Subsetting preventing creation of the workflow.

## 0.43.51 — 28 January 2026

### Bug Fixes
- Fixed a bug where workflows running both a subset and an anonymize treatment would anonymize the source database instead of the target.

## 0.42.59 — 26 January 2026

### New Features
- Add an About dialog, reachable from the top bar help button, that shows current product version and a breakdown of all included CLI versions.
- New licensing page in the setup wizard is now active.

### Bug Fixes
- Fix test connection in workflow creation and editing page.

## 0.41.9 — 19 January 2026

### Improvements
- Pages now all have relevant titles.
- Workflows can now be edited.
- Require basic auth password to be entered twice in setup wizard to mitigate typos.
- Password fields now have a "show password" toggle so users can check what they've typed / pasted.

### Bug Fixes
- Prevent re-entry into the wizard once setup is complete. Note that users who have already completed the wizard will see the "Setup complete" step again.

### New Features
- When a new dataset is created for a column and saved, TDM now allocates the newly created dataset to column.

## 0.38.335 — 18 December 2025

### Improvements
- Users can now do a dry run and Exclude columns with issues in Anonymization treatments.
- Setup parameters can now be set as environment variables - REDGATETDMEULAACCEPTED and REDGATETDM_PASSWORD.
- Excluded columns from dry run can now be viewed in the Anonymization treatment summary review center.

### New Features
- Added data scanning feature in preview for more comprehensive classification of PII when creating database models. Can be enabled via a toggle in Settings page.
- Moved initial classification to create database model. Existing models without a classification will be updated on service start.

## 0.36.2 — 25 November 2025

### Improvements
- Users can now do a dry run and Auto-Exclude issues with Anonymization treatments.

## 0.34.51 — 24 November 2025

### Improvements
- The configuration process is now done through a setup wizard in the TDM Hub UI.

## 0.32.23 — 12 November 2025

### New Features
- The feature for creating custom datasets for masking using AI is now Generally Available. It is no longer in Preview.

### Improvements
- Font preloading now works properly in the UI.
- Workflows 0.5.296
- Anonymization 2.2.19.1475
- Subsetting 2.2.7.2456

## 0.21.1 — 21 October 2025

### Improvements
- The installer now creates a Sqlite database to use as the backing database for TDM instead of requiring an existing Sql Server instance. Existing installs will remain on SQL Server unless the config.yml file is modified.
- Connections are now filtered by database engine when on the run treatment sidebars.
- The installer now opens the app in a browser window after first install.
- Connection strings containing backslashes now work correctly with treatments.
- Treatment no longer gets stuck in "Classifying" state.
- Update notification should now be dismissable.
- Workflows 0.5.274
- Anonymization 2.2.18.1435
- Subsetting 2.2.6.2288

### Bug Fixes
- Various accessibility fixes.

### Security Fixes
- As advised by Microsoft, we have implemented the official mitigation for ASP.NET Core Vulnerability CVE-2025-55315. This has been applied out of an abundance of caution as there is no known impact against this product.

## 0.20.3 — 19 September 2025

### New Features
- Connection tests no longer block you from running a treatment or creating a database model.
- Add setting page that allows user to configure license.
- Add starting table detail page to allow larger edit area for filter clause.
- Support for both database and instance type connections.
- Connection string builder is now available when adding new connections.
- Add ability to exclude tables from subsetting.

### Improvements
- Database platform selection in the database model creation page is now done through a dropdown.
- Make connection string testing reliable when we can connect to the database.
- Existing connections will be deleted because we now capture the creator of a connection. This only affects Enterprise-tier users.
- Improve filtering in anonymization advanced configuration.
- Workflows 0.5.153
- Anonymization 2.2.13.1158
- Subsetting 2.2.3.2120

### Bug Fixes
- Fix delete starting table when subsetting.

## 0.20.2 — 28 August 2025

### Improvements
- Hide datasets that is too large for the column when masking.
- Display warning in summary when unsupported columns are selected for masking.
- Workflows 0.5.124
- Anonymization 2.2.10.927
- Subsetting 2.2.1.1872

### New Features
- Postgres support for connection string builder.
- MySQL support for connection string builder.
- Oracle support for connection string builder.
- Added ability to create custom datasets for masking using AI. This feature is currently in Preview.

### Bug Fixes
- Fix set environment variables in license error page.

## 0.20.0 — 18 August 2025

### Improvements
- Workflows, Agents and VHDs now broadly available as a Preview in the Enterprise tier.
- File shares can be modified from the connections page.
- Disable deterministic masking for columns that are unique.
- Cancelling workflow runs on agents now stops the workflow running on the agent.
- Workflows 0.5.107
- Anonymization 2.2.7.830
- DataGeneration 1.0.5
- Subsetting 2.2.0.1742

### New Features
- Added Feature Usage Reporting (FUR) and Product Usage Reporting (PUR) metrics reporting.
- Connection testing implemented over agents.
- Added support for multiple file shares per connection.
- When creating a new workflow, users can choose which file share to export their backups to.
- Add restrictions and warnings to columns that should not be masked.
- Individualised parameters can now be used instead of connection strings when creating a database model or running a treatment. Currently available for SQL Server only. Other platforms coming soon.

### Breaking Changes
- Hide incompatible datasets when trying to mask a column.
- Resolve issue with AddConnection drawer breaking after cancellation.

### Bug Fixes
- Fix update determinism handling in bulk actions.
- Fix AddConnection drawer appearing under Workflow creation dialog.
- Fixed issue where dataset values are persisting when switching between dataset types in custom dataset creation drawer.

## 0.8.14 — 11 July 2024

### Improvements
- Show file names instead of database names in the data source picker.
- Small visual tweaks to image cards and the image details list.
- Properly clean up deployments (data-containers on TDM Clone) used for masking and subsetting if image creation fails.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.13
- Provision 0.0.62

### New Features
- The type of connection is now shown in the data source picker, in preparation for supporting multiple connection types.
- Creating an image no longer fails if the user selected "Replace sensitive data" and there was no sensitive data to replace. This used to throw a "No tables found" error.
- Image details now correctly shows how a column was masked, instead of how it would be masked if masking was enabled.

### Bug Fixes
- Fix most remaining accessibility issues in the UI.

## 0.8.13 — 17 June 2024

### New Features
- Allow column masking configuration to be modified in preview mode.

### Improvements
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.12
- Provision 0.0.50

## 0.8.12 — 7 June 2024

### Improvements
- User can now choose between an ADO/.NET connection string or a JDBC one when copying the connection string for a clone.
- Anonymization 1.2.1
- DataGeneration 1.0.5
- Subsetting 1.1.12
- Provision 0.0.48

### Bug Fixes
- Do not prevent TDM from starting if TDM Clone is not initially reachable.
- Sanitize logs to prevent exposure of connection string passwords.
# 0.8.11 — 31 May 2024

### New Features
- Added Redgate license check. See https://documentation.red-gate.com/testdatamanager/getting-started/licensing for more info.
- Adjusted the add image button placement in the Test Databases page.
- Users are no longer immediately given access to an image when selected in Image Details => Permissions Popover => User List. This also fixes the user list not updating when a user is added to an image.

### Breaking Changes
- Non-breaking changes to config.yml: TdmDatabaseUsername and TdmDatabasePassword are now optional if ConnectionStringTemplate is provided.

### Improvements
- Anonymization 1.2.0
- DataGeneration 1.0.4
- Subsetting 1.1.10
- Provision 0.0.44

## 0.8.10 — 24 May 2024

### Improvements
- Move the image name input to the final step in the create image wizard and rename the step itself to "Create image".
- Anonymization 1.1.9
- DataGeneration 1.0.4
- Subsetting 1.1.10
- Provision 0.0.40

## 0.8.9 — 17 May 2024

### Improvements
- Creating images from other images has been removed for now.
- Improved the initial load times of the app on slower connections.
- The installation--unpack command no longer overwrites your config.yml file if it exists.
- Some actions that were previously incorrectly marked as successful now correctly throw and communicate errors to the user.
- Anonymization 1.1.8
- DataGeneration 1.0.4
- Subsetting 1.1.10
- Provision 0.0.40

## 0.8.8 — 10 May 2024

### Improvements
- The platform of an image (e.g. MSSQL, Postgres) is now visible on image sources in the image creation wizard.
- Change the structure and order of steps in the create image wizard.
- Anonymization 1.1.8
- DataGeneration 1.0.4
- Subsetting 1.1.9
- Provision 0.0.37

## 0.8.7 — 3 May 2024

### Improvements
- The user can now log out via the account settings menu in the drawer.
- Theme switching moved to the account settings menu in the drawer.
- Show destination name in the source selector.
- Provision 0.0.35: Better logging for Redgate Clone errors.
- Improved the accuracy of the image details page when 'replace all data' is selected.
- Source image is no longer erroneously deleted when user masks / subsets an existing image. Regression from 0.8.6.
- Provision 0.0.30: Converting backups to images now works correctly for non-SQL-Server backups.
- Anonymization 1.1.7
- DataGeneration 1.0.4
- Subsetting 1.1.8
- Provision 0.0.35

### New Features
- Users can now manually trigger source scanning in the new image wizard.

## 0.8.6 — 26 April 2024

### New Features
- A new source selector has been added when creating images. Provision is used to supply this list.

### Improvements
- The application not ready screen no longer shows randomly during usage.
- Anonymization 1.1.6
- DataGeneration 1.0.4
- Subsetting 1.1.7
- Provision 0.0.27

## 0.8.5 — 23 April 2024

### Improvements
- Provision destinations are no longer duplicated on launch of TDM Hub.
- Sources are no longer duplicated when multiple instances of Provision scan a destination at the same time.
- Anonymization 1.1.4
- DataGeneration 1.0.3
- Subsetting 1.1.7
- Provision 0.0.27

## 0.8.4 — 23 April 2024

### Bug Fixes
- Performing multiple operations at the same time (such as creating two clones) should no longer cause errors. Fixed via Provisioning v0.0.25. Regression from v0.8.0.
- Deleting clones that have no underlying data-container (if the latter was deleted in Redgate Clone's CLI, for example) should now succeed. Fixed via Provisioning v0.0.26.

### Improvements
- Anonymization 1.1.4
- DataGeneration 1.0.3
- Subsetting 1.1.7
- Provision 0.0.26

## 0.8.3 — 19 April 2024

### Improvements
- Operations will no longer try to run before the database migrations are done. Regression from 0.8.1.
- Anonymization 1.1.4
- DataGeneration 1.0.3
- Subsetting 1.1.7
- Provision 0.0.21

## 0.8.2 — 12 April 2024

### Improvements
- Creation of two clones at the same time fails.
- Race condition where multiple actions at once can cause operations to fail.

## 0.8.1 — 9 April 2024

### Improvements
- The image details page now correctly identifies the user as the owner if they have a custom AuthUserNameClaimType.
- Anonymization 1.1.4
- DataGeneration 1.0.3
- Subsetting 1.1.7
- Provision 0.0.17

### Bug Fixes
- Fix regression from 0.8.0 where the service took too long to start and Windows would kill the process.

## 0.8.0 — 5 April 2024

### Improvements
- A dark theme is now available to the user via a toggle button in the App Bar.
- The Provision CLI is now being used for the management of Images and Clones. This means that:
- your existing Clones will no longer work and you'll need to delete them and recreate them in the UI.
- deleted Clones need their data-containers in Redgate Clone manually deleted.
- your Images will be migrated. Older Images that had their data-images deleted in Redgate Clone but not in the UI will be automatically removed from TDM.
- Anonymization 1.1.4
- DataGeneration 1.0.3
- Subsetting 1.1.7
- Provision 0.0.16

## 0.7.4 — 28 March 2024

### Improvements
- Anonymization 1.1.4
- DataGeneration 1.0.3
- Subsetting 1.1.7
- Provision 0.0.14

## 0.7.3 — 22 March 2024

### Improvements
- Navigation Drawer collapse state persists across page refreshes.
- Anonymization 1.1.3
- DataGeneration 1.0.3
- Subsetting 1.1.6
- Provision 0.0.10

## 0.7.2 — 15 March 2024

### Improvements
- Improve layout of radio buttons on smaller screens.
- Anonymization 1.1.3
- DataGeneration 1.0.2
- Subsetting 1.1.6
- Provision 0.0.7

## 0.7.1 — 8 March 2024

### Bug Fixes
- Visual improvements and bug fixes to the image details page.

## 0.7.0 — 16 February 2024

### Improvements
- Configuration needs to be changed; AuthAudienceScope parameter has been removed and replaced with AuthAudience and AuthScope parameters.
- Restored automatic handling of missing slash onAuthAuthority in config.yml that was accidentally removed in 0.6.0.
- "JWT is not well formed" errors will no longer be thrown when the user has not yet logged in.

### New Features
- Errors will be logged and shown to the user if JWT validation fails on a backend. Fine-tuned the configuration of identity provider to allow independent setup for Scope, Audience, and Issuer. Additionally, there is an optionalAuthUserNameClaimType field when email claim is not available in the token.

## 0.6.0 — 9 February 2024

### Improvements
- The log file location has been changed from %PROGRAMDATA%/Red Gate/Logs/TDM Solution/ to %PROGRAMDATA%/Red Gate/Logs/TDM/GUI/
- Integrated security is no longer accepted for preview connections for security reasons.
- Validation errors are now properly displayed in several flows.
- Logging of errors originating from Redgate Clone will now work more consistently.

### New Features
- Accessibility improvements in the New Image workflow.

## 0.51.177 — 26 March 2026

### New Features
- The data scanning feature is now Generally Available. It is no longer in Preview. The feature can be enabled via a toggle in Settings page.
- Added option to ignore additional objects in the target database when running subset treatments or workflows.
- Add ability to duplicate connections from the connections menu, pre-populating the new connection with the original's details.
- Connection editing now supports parameter-based input (server, database, authentication, etc.) in addition to raw connection strings.
- Fixed an error where treatments created by importing JSON or duplicating an existing treatment got stuck in an initializing state.

### Improvements
- Adjusted column widths and order in the runs table for better readability, especially on small screens.
- Keyboard accessibility in runs table improved.

## 0.44.29 — 30 January 2026

### Bug Fixes
- Fix how affected columns are filtered in anonymization treatment

## 0.37.50 — 1 December 2025

### Bug Fixes
- Fixes issue where the Workflow page was visible to users not licensed to use it.

## 0.31.7 — 10 November 2025

### Bug Fixes
- Fixed an issue that caused TDM to fail to startup once installed by the msi installer.

### Improvements
- Workflows 0.5.296
- Anonymization 2.2.19.1475
- Subsetting 2.2.7.2456

## 0.30.234 — 10 November 2025

### New Features
- Reduce volume of logs created per HTTP request.

### Improvements
- Don't open the browser automatically after upgrading.
- Workflows 0.5.296
- Anonymization 2.2.19.1475
- Subsetting 2.2.7.2456

### Bug Fixes
- Fix a bug whereby editing an instance level connection would always turn it into a database level connection.
- Fix an issue that broke the saving of AI generated datasets.
- Fix an issue that caused the "Regenerate" text on the AI dataset generation button to be not displayed properly.

## 0.20.5 — 6 October 2025

### New Features
- Added sample connection strings in the connection string builder
- Workflows now sorted by date created (descending) by default.
- Add ability to save connections when creating database models and running treatments.
- Fix issue where newly created database models would not appear in the list until the page was refreshed.

### Improvements
- Introduces a search bar to subsetting starting tables data grid.
- Automatically check for updates
- Introduces bulk actions and filter to subset UI
- Workflows 0.5.189
- Anonymization 2.2.14.1183
- Subsetting 2.2.5.2230

### Bug Fixes
- Fix issue that causes the service to fail to start due to not being able to read key.dat on some machines.
- Fix accessibility bug preventing navigation between pages using the keyboard.

## 0.20.4 — 24 September 2025

### Bug Fixes
- Fixed treatment logging to be properly formatted.
- Fixed an issue where special characters in the connection string would cause treatments to fail.

### Improvements
- Workflows 0.5.175
- Anonymization 2.2.14.1183
- Subsetting 2.2.4.2138

## 0.20.1 — 19 August 2025

### New Features
- Trying to run a treatment with connection details with read/write access, but not create database permissions, will no longer result in a validation error.
- Require database name to be passed to run treatments and create schema models.

### Improvements
- Agent creation sidebar no longer shows underneath the connection sidebar when opened.
- Connection string input no longer errors incorrectly for Postgres, MySQL and Oracle.

## 0.19.2 — 1 August 2025

### Improvements
- Display the toolbar in anonymize treatment view.

## 0.19.1 — 1 August 2025

### Improvements
- Datasets dropdown now have the ability to search.
- Schema is now display in the dataset table.
- Anonymization summary page chips are now clickable filters.
- Workflow wizard now shows as single pop-up dialog instead of a wizard on a separate page.
- Reduced front-end page loading times using compression.
- Introduced start trial/no-license page when a user has no valid license.
- Anonymization 2.2.5.707
- DataGeneration 1.0.5
- Subsetting 2.1.17.1671
- Provision 0.5.32

### Bug Fixes
- Fix keyboard accessibility of some dropdowns.

## 0.19.0 — 24 July 2025

### Improvements
- Agents are now in preview. Users taking part can execute workflows remotely using agents. Contact RedGate to learn more about joining the preview.
- Anonymization 2.2.2.448
- DataGeneration 1.0.5
- Subsetting 2.1.15.1477
- Provision 0.5.21

### Bug Fixes
- Fixed error when connection string contain backslashes in run treatment.

## 0.18.0 — 21 July 2025

### Improvements
- Run treatments (Anonymize and Subset) using workflow locally
- Better obfuscating of connection strings with unusual field names e.g. Pwd.
- Connection tests can now be performed on saved connection strings without re-entering them.
- Anonymization 2.2.2.448
- DataGeneration 1.0.5
- Subsetting 2.1.15.1477
- Provision 0.5.9

### Bug Fixes
- Fixed broken save functionality in custom datasets edit and creation drawer.

## 0.17.2 — 15 July 2025

### New Features
- Allow customise HTTPS port number in installer.
- Virtual hard-disk images are now in preview. Users taking part can create virtual hard-disk images which can be used to achieve SQL Clone style fast clone creation. Contact RedGate to learn more about joining the preview

### Improvements
- Changes on configuration file
- Replace DbConnectionString, SqlServerInstanceName, SqlServerInstancePort, TdmDatabasePassword, and ConnectionStringTemplate with ConnectionString only.
- Anonymization 2.2.2.448
- DataGeneration 1.0.5
- Subsetting 2.1.15.1477
- Provision 0.5.9

### Breaking Changes
- Removed MySqlDumpExecutable and SqliteFilePath

## 0.17.1 — 10 July 2025

### Improvements
- Back-end connection errors shown on first load are now shown more naturally within the app, and should bring you to the page you requested after the connection is restored without needing a page refresh.
- Better obfuscating of connection strings with unusual field names e.g. Pwd.
- Connection tests can now be performed on saved connection strings without re-entering them.
- Anonymization 2.2.2.448
- DataGeneration 1.0.5
- Subsetting 2.1.15.1477
- Provision 0.5.19

### Bug Fixes
- Fixed broken save functionality in custom datasets edit and creation drawer.

## 0.17.0 — 1 July 2025

### Improvements
- The duration of individual workflow steps can now be seen.
- The logs for each step of a workflow run can now be viewed in the operations tab of the run details page.
- Runs under deleted workflows can now be viewed.
- Anonymization 2.1.15.1477
- DataGeneration 1.0.5
- Subsetting 2.2.2.448
- Provision 0.4.166

### New Features
- The user can now pick from a list of connections to deploy to when creating a clone from an image. This will typically only work if the connections have a file share in common.
- Added msi installer for the GUI.

## 0.16.0 — 17 June 2025

### New Features
- The TDM backing database schema and migration engine has been significantly changed to support the upcoming Workflows feature and future alternative database engines. TDM will therefore require a fresh database, and will not start with the old database schema.

### Improvements
- Anonymization 2.1.18.342
- DataGeneration 1.0.5
- Subsetting 2.1.11.1344
- Provision 0.4.134

## 0.14.0 — 23 May 2025

### Improvements
- Anonymization 2.1.14
- DataGeneration 1.0.5
- Subsetting 2.1.10
- Provision 0.4.82
- Workflow 0.4.82
- Extraction 0.0.0.3549

## 0.13.1 — 10 April 2025

### New Features
- Added dataset groupings
- Added more support for creating subsetting treatments
- Add support basic auth for DevOps Test Data Manager edition

### Bug Fixes
- Fix edit dataset not updating edited names

### Improvements
- Anonymization 2.1.9
- DataGeneration 1.0.5
- Subsetting 2.1.6
- Provision 0.3.1

## 0.13.0 — 20 March 2025

### New Features
- Added new 'Treatments' section to the side menu to hold all the capabilities of 'Tier 1: Data Treatment'.
- Added new 'Delivery' section to the side menu to hold all the capabilities of 'Tier 2: Delivery'.
- The preview label no longer shows erroneously when an image is being created.
- The creation date of an image synced from Clone now actually matches the create date of the data-image, rather than using the date the image was synced.

### Improvements
- Card views for images and clones now show the latest items at the top.
- Navigation to the image details page in the DataGrid view can now be done with the keyboard.
- Keyboard navigation around the DataGrid view's interactive elements now better match ARIA standards.
- Column masking information now shows correctly again in image details view.
- If you filter the images grid by database engine and choose an engine with no specific version, all versions will be shown.
- Anonymization 2.1.7
- DataGeneration 1.0.5
- Subsetting 2.1.4
- Provision 0.3.912

## 0.12.2 — 13 January 2025

### Bug Fixes
- Synced deployments now correctly include the port in their URL. This fixes deleting deployments not working amongst other clone sync issues.

### Improvements
- Anonymization 2.1.4
- DataGeneration 1.0.5
- Subsetting 2.1.2
- Provision 0.2.42

## 0.12.1 — 19 December 2024

### Improvements
- The current tab is now persisted in the url, so users can deep-link to specific tabs.
- Removes (non-functional) option to select Oracle as a database type.
- Anonymization 2.1.2
- DataGeneration 1.0.5
- Subsetting 2.1.2
- Provision 0.2.34

### New Features
- Drops support for Postgres 11. Existing images will continue to work, but no new ones can be created on Clone connections.

### Breaking Changes
- Admins are now indicated in the image permissions modal and cannot be removed from share lists.

### Bug Fixes
- Fix migration bug that prevented users from editing a connection that had no credentials.

## 0.12.0 — 5 December 2024

### Improvements
- Changes made to the tables in the images and clones screens are persisted to local storage.
- Now shipping rgsubset version 2.0 and rganonymize version 2.0.
- Renamed Subsetter.exe to rgsubset.exe and Anonymize.exe to rganonymize.exe. You will need to update your config.yml to reflect this change if you were manually specifying those executable locations.
- Licensing code changes for rgsubset.exe and rganonymize.exe means you will need to re-download and apply your license.
- Anonymization 2.0.3
- DataGeneration 1.0.5
- Subsetting 2.0.5
- Provision 0.2.25

### New Features
- Existing subsetting data has been cleared to support rgsubset.exe v2.0. This means that the source and target number of rows will not show on images created on older versions, but those images will continue to function.

## 0.11.3 — 29 October 2024

### Bug Fixes
- Fix "unable to load datasets" error on the Image Details page.
- Fix sync issue when saving custom options for Anonymize on the ImageDetails page.

### New Features
- Add connection button of the create image page no longer enabled for non-admin users.

### Improvements
- Anonymization 2.0.0
- DataGeneration 1.0.5
- Subsetting 1.1.22
- Provision 0.2.12

## 0.11.2 — 24 October 2024

### New Features
- Client secret and API token inputs in the add connection form are now password fields.
- Fixed a vulnerability in the add connection form of secret values not being cleared correctly.

### Improvements
- Anonymization 2.0.0
- DataGeneration 1.0.5
- Subsetting 1.1.22
- Provision 0.2.12

## 0.11.1 — 23 October 2024

### Bug Fixes
- Resolved an issue of image creation with no treatment not working existing infrastructure connections.

### Improvements
- Anonymization 2.0.0
- DataGeneration 1.0.5
- Subsetting 1.1.22
- Provision 0.2.12

## 0.11.0 — 22 October 2024

### Improvements
- TDM Clone images shared in TDM are now also shared to that user in TDM Clone.
- TDM Hub now synchronizes images and clones with TDM Clone.
- Improved filtering performance of the image and clones card views.
- Ensures the TDM database password is never logged.
- Clone lifespans are now visible as a column in the Clones table view.
- Success messages are now displayed using snackbars instead of in the banner.
- Due to changes in how we store user modifications, images in preview which have been customised will not generate correctly.
- Anonymization 2.0.0
- DataGeneration 1.0.5
- Subsetting 1.1.22
- Provision 0.2.12

### New Features
- TDM Hub now supports creating connections to Clone with Client Credentials.
- Added support for writing classification rule conditions in custom anonymization.
- Connections no longer are being added when an unreachable file share causes the submission to fail.

## 0.10.3 — 28 August 2024

### Improvements
- Images and clones are now separate pages.
- Connection details have been cleared and will need to be re-entered on the Connections page.
- Users will no longer see the rename or delete buttons on images they are not the owner of.
- Anonymization 1.2.4
- DataGeneration 1.0.5
- Subsetting 1.1.20
- Provision 0.1.15

### New Features
- Added a new list view for images and clones.
- Fixed handling of multiple versions of a database in the same backup by adding only the latest one to sources.

### Breaking Changes
- Removed support for RgCloneSqlServerContainerMaxMemoryLimitMb. This is handled by Clone internally.

## 0.9.3 — 12 August 2024

### Bug Fixes
- Fixed a bug preventing data gen from working on rgclone connections.

### Improvements
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.17
- Provision 0.1.5

## 0.9.2 — 8 August 2024

### Improvements
- Staging data-images are now deleted immediately on image creation failure rather than waiting for the user to delete the associated image in the GUI.
- TDM Clone default container lifetime is now respected rather than having an infinite lifetime.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.17
- Provision 0.1.4

### Bug Fixes
- Fixed a bug that sees users have the name "Name unknown" in the user profile.

### New Features
- Validation of Clone URL in Add/Edit Connection sidebar improved.

## 0.9.1 — 8 August 2024

### Bug Fixes
- Fix global exception handler in Provision.

### Improvements
- Hotfix for provision swallowing error messages.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.14
- Provision 0.0.70

## 0.9.0 — 29 July 2024

### Improvements
- The image and clone cards have been redesigned to better fit our standards.
- Operations log on the error details sidebar now fetches clone creation logs without erroring.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.14
- Provision 0.0.69

### New Features
- TDM Hub now supports standalone servers as well as TDM Clone via the new Connections feature.

### Breaking Changes
- Because credentials are now managed via the Connections page, please remember to remove all RGClone_ parameters in your config.yml, e.g. RgCloneApiEndpoint and RgCloneApiToken. A TDM Clone connection with those credentials will have already been created on your behalf.

### Bug Fixes
- Fix accessibility and discoverability issues around the image rename feature.

## 0.8.15 — 18 July 2024

### New Features
- Added a new operations list in both the error details sidebar and the image details page.

### Improvements
- The number of subset rows now correctly displays in the image details table.
- The header is sticky again.
- Image details now correctly shows classification information when it becomes available. No need for a page refresh.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.14
- Provision 0.0.67

## 0.8.14 — 11 July 2024

### Improvements
- Show file names instead of database names in the data source picker.
- Small visual tweaks to image cards and the image details list.
- Properly clean up deployments (data-containers on TDM Clone) used for masking and subsetting if image creation fails.
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.13
- Provision 0.0.62

### New Features
- The type of connection is now shown in the data source picker, in preparation for supporting multiple connection types.
- Creating an image no longer fails if the user selected "Replace sensitive data" and there was no sensitive data to replace. This used to throw a "No tables found" error.
- Image details now correctly shows how a column was masked, instead of how it would be masked if masking was enabled.

### Bug Fixes
- Fix most remaining accessibility issues in the UI.

## 0.8.13 — 17 June 2024

### New Features
- Allow column masking configuration to be modified in preview mode.

### Improvements
- Anonymization 1.2.3
- DataGeneration 1.0.5
- Subsetting 1.1.12
- Provision 0.0.50

## 0.8.12 — 7 June 2024

### Improvements
- User can now choose between an ADO/.NET connection string or a JDBC one when copying the connection string for a clone.
- Anonymization 1.2.1
- DataGeneration 1.0.5
- Subsetting 1.1.12
- Provision 0.0.48

### Bug Fixes
- Do not prevent TDM from starting if TDM Clone is not initially reachable.
- Sanitize logs to prevent exposure of connection string passwords.
# 0.49.39 — 5 March 2026

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
<!-- fetched: 2026-04-03 | latest: 0.0.62 -->


## 0.3.847 — 
## 0.0.62

### Improvements
- Deployments to postgres instances now provide the user full ownership of all tables on the restored database.
7 March 2025

### Improvements
- Don't crash when scanning for vhds if the folder doesn't exist
#
## 0.3.847 — 7 M
## 0.0.7

### Improvements
- Return whole source object from list command.

## 0.0.6

### Improvements
- Return source from snapshot action.

## 0.0.5

### New Features
- Wait for created clone to be connectable before returning from deployment create.

## 0.0.2

### New Features
- Prevent destinations with the same id from being created.
- Add Four Key Metrics reporting.

### Improvements
- Set up auto release on merge.

## 0.0.1

### Improvements
- Initial release.
arch 2025

### Improvements
- Don't crash when scanning for vhds if the folder doesn't exist

## 0.3.834 — 5 March 2025

### Improvements
- Set the permissions on executables to 755 before we run them on Linux and OSX

## 0.3.697 — 6 February 2025

### Improvements
- The required properties are now more correctly marked in WorkflowEngine.IO and included in the generated documentation.

## 0.3.668 — 5 February 2025

### Improvements
- Workflow documentation now includes an example workflow YAML.

## 0.3.651 — 3 February 2025

### Improvements
- Introduce console logging and log file creation for rgworkflow.exe.
- Authorization features of rgworkflow.exe are now accessible through an auth command.
- Change the way WorkflowSpec's are built on the IO package side, using IInput<T> and Output<T>, for better type-safety.

## 0.2.49 — 23 January 2025

### Improvements
- rgworkflow.exe Documentation is now generated and shipped in the WorkflowEngine.IO package and with any build of rgworkflow.exe.

## 0.2.44 — 20 January 2025

### Improvements
- Introduce type safety for Workflow engine steps.

### New Features
- Add auto-generation of Workflow step models in WorkflowEngine.IO.

## 0.2.43 — 15 January 2025

### New Features
- CreatedAt, ExpiresAt and Tags are now collected for RG Clone data-images added to SourceMetadata object.

## 0.2.40 — 9 January 2025

### Bug Fixes
- Synced deployments now correctly include the port in their URL. This fixes deleting deployments not working amongst other things.

## 0.2.39 — 8 January 2025

### Improvements
- Decouple WorkflowEngine.IO from CliTemplate project.
- WorkflowEngine.IO YAML Serializer no longer serializes computed connection string values.

## 0.2.37 — 7 January 2025

### Improvements
- First release of the WorkflowEngine.IO package.
- Hotfix for 0.2.36 which broke image creation.

## 0.2.32 — 13 December 2024

### Improvements
- Bump to .NET 9.0

## 0.2.25 — 3 December 2024

### Breaking Changes
- Deployments are now deleted from the Repository when a Destination is removed. The deployments themselves are not affected.

## 0.2.23 — 21 November 2024

### Improvements
- Integration of the VHD library.

## 0.2.19 — 15 November 2024

### Improvements
- Make CloneConnectionStringHelper and its methods public

## 0.2.18 — 7 November 2024

### New Features
- Add scaffolding for SQL Server virtualization on Windows.

## 0.2.16 — 5 November 2024

### Breaking Changes
- Replace obsolete method calls in the CLI and remove the obsolete methods from the library.

## 0.2.12 — 22 October 2024

### Improvements
- Filter sources by destination when matching them up with deployments

## 0.2.11 — 21 October 2024

### Bug Fixes
- Fix comparison of sources to include the status field.

## 0.2.10 — 16 October 2024

### New Features
- Destination Service exposes methods to add and update both forms of credential with Redgate Clone.

### Improvements
- Include source status in SourceMetadata.

#
## 0.5.0 — 10 July 2025

### Improvements
- The location of VHD Clones has been changed from Program Files to the Application Data folder.
- All job and step log event ids now no longer have jobNumber being logged, instead logging jobKey, which is the YAML key for the job. jobName now refers to the optional field name on the job, but will fall back to the key (see below).
- The output connection string of a deploy backup step now always includes both a jdbc and an ado connection string.
- When a deploy-backup or deploy-from-script step fails because the database already exists, the original database will no longer be wiped during the clean-up stage.
- Default log file naming scheme is now in yyyy-MM-dd instead of yyyy-dd-M format.
- The log files now include progress logging lines. This includes when jobs and steps are started or finished. This information used to only be output to the console.
- Setting the log path via --log-file now logs to that file all the way through the workflow. We still also log into the workflow.log file that will go into the zip.
- When calling command line tools, we no longer ever log connection strings or any other parameters labelled as sensitive
- RGCompare no longer logs it's entire script to the log file and command line out.
- Anonymization 2.1.9.3049
- DataGeneration 0.1.21.6466
- Subsetting 2.1.6.7744

### New Features
- Added an ephemeral flag to the export-backup step which automatically deletes the backup after the workflow finishes. It only works if the workflow engine is running on the same machine as the database.
- deploy-backup and deploy-from-script steps can now take an optional login-user and login-password which will be made the owner of the created database and modify the returned connection string to have those credentials.
- Lots of per-step documentation has been added to the documentation.g.md file shipped with the executable.
- Scanning VHDs now supports reading image ids from their filenames

### Breaking Changes
- Added the ability to create and drop logins (or user, depending on the engine) via the new create-login and drop-login steps.

### Bug Fixes
- Fix and issue whereby sql server scanning would sometimes crash when scanning a vhd, thinking it's a backup

## 0.4.0 — 23 April 2025

### Breaking Changes
- Remove the Provision CLI and the repository-based state system as they are obsolete going forward.

## 0.3.1020 — 8 April 2025

### New Features
- Added export-variables step, which allows you to export any combination of variables to a JSON file.
- Added --output-zip-file which creates a zip at the given path at the end of the run containing all logs for the run and the run yaml file.

## 0.3.924 — 18 March 2025

### New Features
- Add workflow steps for rggenerate Plan and Populate.

## 0.3.753 — 19 February 2025

### New Features
- Add database-name parameters to subset, classify and mask steps, optionally overriding input connection database name. This helps with Clone, which sets the database name to master.

## 0.2.33 — 2 January 2025

### New Features
- Add workflow steps for creating and deleting Redgate clone images.

## 0.2.21 — 20 November 2024

### Improvements
- The CLI has been renamed. Provision.CLI.exe is now rgprovision.exe.

## 0.2.8 — 10 October 2024

### Improvements
- Deployment IDs are now deterministic.
- Include data container status in deployment

### Bug Fixes
- Correct the capitalisation of the status fields

## 0.2.4 — 9 October 2024

### New Features
- Add a name option for deployment create command.

## 0.2.2 — 7 October 2024

### New Features
- Add a rename operation and a name parameter for convert and snapshot commands.

## 0.2.0

### Improvements
- Move Clone deployment url from Name field to Metadata.Url field.

### New Features
- Add Owner field for Clone deployments.

## 0.1.28

### New Features
- Add deployment synchronization with Redgate Clone.

## 0.1.27

### Breaking Changes
- Rollback removed methods until TDM Hub is ready.

## 0.1.26

### Breaking Changes
- Remove obsolete API methods

## 0.1.25

### New Features
- Add user impersonation for delete, convert and snapshot operations.

## 0.1.24

### Breaking Changes
- Remove Redgate Clone connection details object and replace with new methods.

## 0.1.23

### Improvements
- Expose Redgate Clone connection details object.

## 0.1.22

### New Features
- Add support for connecting to Redgate Clone via OIDC client credentials flow.

## 0.1.18

### New Features
- Added OIDC user impersonation authentication to the api and cli. The deployment command now has an optional, rgclone specific, owner attribute.

## 0.1.16

### New Features
- Add scan type parameter to destination service Scan action.

## 0.1.15

### New Features
- Fix handling of multiple versions of a database in the same backup file by adding only the latest one to sources.

## 0.1.9

### Breaking Changes
- Add support for adding and removing users from images on Clone.

## 0.1.4

### Improvements
- Clone data-container default lifetime is now respected, rather than setting the lifetime to infinite.

## 0.1.0

### Improvements
- Provision is now two packages, a Library (RedGate.Provisioning) and a CLI (RedGate.Provisioning.CLI). If you wish to continue to use the CLI, you'll need to refer to the RedGate.Provisioning.CLI package.

## 0.0.69

### Improvements
- Second attempt at previous hotfix around certificates.

## 0.0.68

### Improvements
- Hotfix for a change in how Clone certificates the SQL Server instances.

## 0.0.67

### Improvements
- On Postgres, give deployment user ownership of the schema as well as the tables and database.

## 0.0.66

### Improvements
- Postgres backups with empty schemas no longer fail to restore with a CommandText property has not been initialized error.

## 0.0.65

### New Features
- Add support for restoring .dump Postgres backups.

## 0.0.63

### Improvements
- Commands can now be cancelled part-way through a run. On most terminals this is done by pressing Ctrl + C.
- Provision no longer fails if a query takes longer than 30 seconds.
# 0.0.62

### Improvements
- Deployments to postgres instances now provide the user full ownership of all tables on the restored database.

## 0.0.59

### Improvements
- CloneDestination now returns a connection string for deployments containing the name of the restores database (instead of 'master').

## 0.0.58

### Improvements
- Empty schemas (i.e. without data) can now be deployed using the --empty and --rgcompare-path options with the deployment create command.

## 0.0.56

### Improvements
- Deployments on destinations other than Redgate Clone will now provide a JDBC connection string when getting the output in JSON format.

## 0.0.50

### Improvements
- Deployment deletion no longer fails if the underlying database has already been deleted.

## 0.0.48

### New Features
- Added destination get command.

## 0.0.46

### Improvements
- Exits with an error when creating MySql snapshots if the MySqlDumpPath option is not set.
- Exits with an error when creating MySql snapshots if the mysqldump executable has a failure.
- Now passes the password to the mysqldump executable using an environment variable instead of a command line argument.

### New Features
- Forces the TCP protocol when creating MySql snapshots to support connecting to local containers.

## 0.0.38

### Improvements
- Destinations can now be updated with the destination update command.
- Removal of destinations now works correctly.

## 0.0.37

### Bug Fixes
- Duplication of sources introduced in 0.0.36 now fixed.

## 0.0.36

### Improvements
- Redgate Clone Image sources now include metadata when requesting JSON output.

## 0.0.35

### Improvements
- Show more information about failed calls to Redgate Clone.

## 0.0.33

### Improvements
- Deleting an Oracle deployment will no longer throw an error if the session or user is deleted before Provision tries to delete them.

## 0.0.31

### Improvements
- DatabaseType renamed to Type in destination list command JSON output.

## 0.0.30

### Improvements
- Convert command now works correctly for non-SQL-Server backups.

## 0.0.27

### Improvements
- Running multiple simultaneous scans no longer results in duplicated sources.

## 0.0.26

### Improvements
- Deleting a deployment when the underling Redgate Clone data-container has already been deleted no longer throws an error.

## 0.0.25

### Bug Fixes
- Fix a concurrency issue around creating deployments across multiple processes.

## 0.0.24

### Bug Fixes
- Fix the migration introduced in 0.0.21 in the scenario where deployments where previously orphaned.

## 0.0.23

### Improvements
- Repository pattern refactor.

## 0.0.21

### New Features
- Changes added in 0.0.20 now have a migration to fix orphaned deployments, as long as you have not run a scan on version 0.0.20.

## 0.0.20

### Improvements
- Source Ids will no longer depend on their names. Existing sources will be changed on rescan, but deployments will be orphaned.

## 0.0.18

### Improvements
- Destinations now have separate Name and Id properties. The Id is autogenerated at creation time, while the name is specified by the creator.

### New Features
- Existing destinations will be automatically migrated, keeping the old Id as the new name.

## 0.0.17

### Improvements
- Releases are now signed.

## 0.0.16

### Improvements
- Deployments now come with two connection strings in a ConnectionStrings object: AdoDotNet and Jdbc. These are nullable.

## 0.0.15

### New Features
- Tags can now be added when snapshotting an image.

## 0.0.14

### New Features
- Tags can now be added when converting a backup to an image.

## 0.0.13

### Improvements
- Sources should more consistently generate matching ids across platforms.

## 0.0.12

### New Features
- Add scanning of backup files on the Redgate Clone share to the destination scan operation.

## 0.0.11

### Improvements
- Images can now be created from backups with the source convert command.

## 0.0.10

### Improvements
- Handle invalid container names.

## 0.3.847 — 7 March 2025

### Improvements
- Don't crash when scanning for vhds if the folder doesn't exist

## 0.3.834 — 5 March 2025

### Improvements
- Set the permissions on executables to 755 before we run them on Linux and OSX

## 0.3.697 — 6 February 2025

### Improvements
- The required properties are now more correctly marked in WorkflowEngine.IO and included in the generated documentation.

## 0.3.668 — 5 February 2025

### Improvements
- Workflow documentation now includes an example workflow YAML.

## 0.3.651 — 3 February 2025

### Improvements
- Introduce console logging and log file creation for rgworkflow.exe.
- Authorization features of rgworkflow.exe are now accessible through an auth command.
- Change the way WorkflowSpec's are built on the IO package side, using IInput<T> and Output<T>, for better type-safety.

## 0.2.49 — 23 January 2025

### Improvements
- rgworkflow.exe Documentation is now generated and shipped in the WorkflowEngine.IO package and with any build of rgworkflow.exe.

## 0.2.44 — 20 January 2025

### Improvements
- Introduce type safety for Workflow engine steps.

### New Features
- Add auto-generation of Workflow step models in WorkflowEngine.IO.

## 0.2.43 — 15 January 2025

### New Features
- CreatedAt, ExpiresAt and Tags are now collected for RG Clone data-images added to SourceMetadata object.

## 0.2.40 — 9 January 2025

### Bug Fixes
- Synced deployments now correctly include the port in their URL. This fixes deleting deployments not working amongst other things.

## 0.2.39 — 8 January 2025

### Improvements
- Decouple WorkflowEngine.IO from CliTemplate project.
- WorkflowEngine.IO YAML Serializer no longer serializes computed connection string values.

## 0.2.37 — 7 January 2025

### Improvements
- First release of the WorkflowEngine.IO package.
- Hotfix for 0.2.36 which broke image creation.

## 0.2.32 — 13 December 2024

### Improvements
- Bump to .NET 9.0

## 0.2.25 — 3 December 2024

### Breaking Changes
- Deployments are now deleted from the Repository when a Destination is removed. The deployments themselves are not affected.

## 0.2.23 — 21 November 2024

### Improvements
- Integration of the VHD library.

## 0.2.19 — 15 November 2024

### Improvements
- Make CloneConnectionStringHelper and its methods public

## 0.2.18 — 7 November 2024

### New Features
- Add scaffolding for SQL Server virtualization on Windows.

## 0.2.16 — 5 November 2024

### Breaking Changes
- Replace obsolete method calls in the CLI and remove the obsolete methods from the library.

## 0.2.12 — 22 October 2024

### Improvements
- Filter sources by destination when matching them up with deployments

## 0.2.11 — 21 October 2024

### Bug Fixes
- Fix comparison of sources to include the status field.

## 0.2.10 — 16 October 2024

### New Features
- Destination Service exposes methods to add and update both forms of credential with Redgate Clone.

### Improvements
- Include source status in SourceMetadata.

## 0.2.8 — 10 October 2024

### Improvements
- Deployment IDs are now deterministic.
- Include data container status in deployment

### Bug Fixes
- Correct the capitalisation of the status fields

## 0.2.4 — 9 October 2024

### New Features
- Add a name option for deployment create command.

## 0.2.2 — 7 October 2024

### New Features
- Add a rename operation and a name parameter for convert and snapshot commands.

## 0.2.0

### Improvements
- Move Clone deployment url from Name field to Metadata.Url field.

### New Features
- Add Owner field for Clone deployments.

## 0.1.28

### New Features
- Add deployment synchronization with Redgate Clone.

## 0.1.27

### Breaking Changes
- Rollback removed methods until TDM Hub is ready.

## 0.1.26

### Breaking Changes
- Remove obsolete API methods

## 0.1.25

### New Features
- Add user impersonation for delete, convert and snapshot operations.

## 0.1.24

### Breaking Changes
- Remove Redgate Clone connection details object and replace with new methods.

## 0.1.23

### Improvements
- Expose Redgate Clone connection details object.

## 0.1.22

### New Features
- Add support for connecting to Redgate Clone via OIDC client credentials flow.

## 0.1.18

### New Features
- Added OIDC user impersonation authentication to the api and cli. The deployment command now has an optional, rgclone specific, owner attribute.

## 0.1.16

### New Features
- Add scan type parameter to destination service Scan action.

## 0.1.15

### New Features
- Fix handling of multiple versions of a database in the same backup file by adding only the latest one to sources.

## 0.1.9

### Breaking Changes
- Add support for adding and removing users from images on Clone.

## 0.1.4

### Improvements
- Clone data-container default lifetime is now respected, rather than setting the lifetime to infinite.

## 0.1.0

### Improvements
- Provision is now two packages, a Library (RedGate.Provisioning) and a CLI (RedGate.Provisioning.CLI). If you wish to continue to use the CLI, you'll need to refer to the RedGate.Provisioning.CLI package.

## 0.0.69

### Improvements
- Second attempt at previous hotfix around certificates.

## 0.0.68

### Improvements
- Hotfix for a change in how Clone certificates the SQL Server instances.

## 0.0.67

### Improvements
- On Postgres, give deployment user ownership of the schema as well as the tables and database.

## 0.0.66

### Improvements
- Postgres backups with empty schemas no longer fail to restore with a CommandText property has not been initialized error.

## 0.0.65

### New Features
- Add support for restoring .dump Postgres backups.

## 0.0.63

### Improvements
- Commands can now be cancelled part-way through a run. On most terminals this is done by pressing Ctrl + C.
- Provision no longer fails if a query takes longer than 30 seconds.
# 0.5.0 — 2025-07-10

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

### Fixes
- Internal fixes and improvements.

## 5.6.25 — 10 March 2026

### Features
- Added support for SQL Server 2025.

## 5.6.24 — 18 February 2026

### Fixes
- Internal fixes and improvements.

## 5.6.23 — 3 February 2026

### Fixes
- Internal fixes and improvements.

## 5.6.22 — 20 January 2026

### Fixes
- Internal fixes and improvements.

## 5.6.21 — 17 December 2025

### Fixes
- Internal fixes and improvements.

## 5.6.20 — 18 November 2025

### Features
- Adds a new feature flag which, when enabled, forces images and clones to use the VHDX format (instead of VHD), no matter what size of database backup is used.
- This can be done by setting environment variable `SQLCLONE_FORCE_VHDX` with `true`.

## 5.6.19 — 28 October 2025

### Fixes
- Internal fixes and improvements.

## 5.6.18 — 16 October 2025

### Fixes
- Internal fixes and improvements.

## 5.6.17 — 16 October 2025

### Fixes
- Internal fixes and improvements.

## 5.6.16 — 30 September 2025

### Fixes
- Internal fixes and improvements.

## 5.6.15 — 16 September 2025

### Fixes
- Internal fixes and improvements.

## 5.6.14 — 19 August 2025

### Fixes
- Internal fixes and improvements.

## 5.6.13 — 5 August 2025

### Features
- Updated third-party libraries.

## 5.6.11 — 22 July 2025

### Fixes
- Internal fixes and improvements.

## 5.6.10 — 10 June 2025

### Fixes
- Internal fixes and improvements.

## 5.6.9 — 27 May 2025

### Fixes
- Internal fixes and improvements.

## 5.6.8 — 7 May 2025

### Fixes
- Internal fixes and improvements.

## 5.6.7 — 23 April 2025

### Fixes
- Internal fixes and improvements.

## 5.6.6 — 11 March 2025

### Fixes
- Internal fixes and improvements.

## 5.6.5 — 25 February 2025

### Fixes
- Internal fixes and improvements.

## 5.6.4 — 17 February 2025

### Fixes
- Internal fixes and improvements.

## 5.6.1 — 29 November 2024

### Fixes
- Internal fixes and improvements.

## 5.4.21 — 23 November 2023

### Fixes
- Internal fixes and improvements.

## 5.4.20 — 20 November 2023

### Fixes
- Internal fixes and improvements.

## 5.4.19 — 23 October 2023

### Fixes
- Internal fixes and improvements.

## 5.4.18 — 13 October 2023

### Fixes
- Increased the total number of clones visible in the UI from 1000 to 5000

## 5.4.17 — 7 September 2023

### Fixes
- Internal fixes and improvements.

## 5.4.16 — 29 August 2023

### Fixes
- Internal fixes and improvements.

## 5.4.14 — 24 July 2023

### Fixes
- Internal fixes and improvements.

## 5.4.13 — 14 July 2023

### Fixes
- Internal fixes and improvements.

## 5.4.12 — 29 June 2023

### Fixes
- Internal fixes and improvements.

## 5.4.11 — 15 June 2023

### Fixes
- Fixed a problem where the auto-update mechanism did not work on machines with EnableCertPaddingCheck enabled. Affected agents will require a manual update, but future updates should automatically update successfully.

## 5.4.10 — 8 June 2023

### Fixes
- Internal fixes and improvements.

## 5.4.9 — 1 June 2023

### Fixes
- Internal fixes and improvements.

## 5.4.8 — 23 May 2023

### Fixes
- Internal fixes and improvements.

## 5.4.7 — 3 May 2023

### Fixes
- Internal fixes and improvements.

## 5.4.6 — 28 April 2023

### Fixes
- Internal fixes and improvements.

## 5.4.5 — 19 April 2023

### Fixes
- Internal fixes and improvements.

## 5.4.4 — 24 March 2023

### Fixes
- Internal fixes and improvements.

## 5.4.3 — 3 March 2023

### Fixes
- Internal fixes and improvements.

## 5.4.2 — 17 February 2023

### Fixes
- Internal fixes and improvements.

## 5.4.1 — 13 February 2023

### Fixes
- Internal fixes and improvements.

## 5.4.0 — 6 February 2023

### Features
- SQL Clone now targets .NET 7.0. For details of .NET Core's supported operating systems see [https://github.com/dotnet/core/blob/main/release-notes/7.0/supported-os.md](https://github.com/dotnet/core/blob/main/release-notes/7.0/supported-os.md).

## 5.3.34 — 20 January 2023

### Fixes
- Internal fixes and improvements.

## 5.3.33 — 11 January 2023

### Fixes
- Internal fixes and improvements.

## 5.3.32 — 21 December 2022

### Fixes
- Internal fixes and improvements.

## 5.3.31 — 13 December 2022

### Fixes
- Internal fixes and improvements.

## 5.3.30 — 29 November 2022

### Fixes
- Internal fixes and improvements.

## 5.3.29 — 20 November 2022

### Fixes
- Internal fixes and improvements.

## 5.3.28 — 11 November 2022

### Fixes
- Internal fixes and improvements.

## 5.3.27 — 28 October 2022

### Fixes
- Internal fixes and improvements.

## 5.3.26 — 21 October 2022

### Fixes
- Internal fixes and improvements.

## 5.3.25 — 11 October 2022

### Fixes
- Internal fixes and improvements.

## 5.3.24 — 23 September 2022

### Fixes
- Internal fixes and improvements.

## 5.3.23 — 15 September 2022

### Fixes
- Internal fixes and improvements.

## 5.3.22 — 7 September 2022

### Fixes
- Internal fixes and improvements.

## 5.3.21 — 25 August 2022

### Fixes
- Internal fixes and improvements.

## 5.3.20 — 18 August 2022

### Fixes
- Internal fixes and improvements.

## 5.3.19 — 10 August 2022

### Fixes
- Internal fixes and improvements.

## 5.3.18 — 22 July 2022

### Fixes
- Internal fixes and improvements.

## 5.3.17 — 8 July 2022

### Fixes
- Internal fixes and improvements.

## 5.3.16 — 23 June 2022

### Fixes
- Internal fixes and improvements.

## 5.3.15 — 16 June 2022

### Fixes
- Internal fixes and improvements.

## 5.3.14 — 27 May 2022

### Fixes
- Internal fixes and improvements.

## 5.3.13 — 19 May 2022

### Fixes
- Internal fixes and improvements.

## 5.3.12 — 13 May 2022

### Fixes
- Internal fixes and improvements.

## 5.3.11 — 29 April 2022

### Fixes
- Internal fixes and improvements.

## 5.3.10 — 21 April 2022

### Fixes
- Internal fixes and improvements.

## 5.3.9 — 14 April 2022

### Fixes
- Internal fixes and improvements.

## 5.3.8 — 7 April 2022

### Fixes
- Internal fixes and improvements.

## 5.3.7 — 24 March 2022

### Fixes
- Internal fixes and improvements.

## 5.3.6 — 16 March 2022

### Fixes
- Internal fixes and improvements.

## 5.3.5 — 11 March 2022

### Fixes
- Internal fixes and improvements.

## 5.3.4 — 3 March 2022

### Fixes
- Handle error in Get-SqlCloneSqlServerInstance powershell command, when agent is not found

## 5.3.3 — 8 February 2022

### Fixes
- Internal fixes and improvements.

## 5.3.2 — 21 January 2022

### Fixes
- Fixed a logging issue when images are unexpectedly unmounted during creation

## 5.3.1 — 14 January 2022

### Fixes
- Internal fixes and improvements.

## 5.3.0 — 4 January 2022

### Features
- SQL Clone now targets .NET 6.0. For details of .NET Core's supported operating systems see [https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md](https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md).

## 5.2.42 — 16 December 2021

### Fixes
- Internal fixes and improvements.

## 5.2.41 — 3 December 2021

### Fixes
- Internal fixes and improvements.

## 5.2.40 — 18 November 2021

### Fixes
- Internal fixes and improvements.

## 5.2.39 — 12 November 2021

### Fixes
- Internal fixes and improvements.

## 5.2.38 — 5 November 2021

### Fixes
- Internal fixes and improvements.

## 5.2.37 — 28 October 2021

### Fixes
- Fixed an issue creating an image from a backup where a database file was listed, but not actually present
- Began signing further Redgate .dlls, in particular RedGate.SqlClone.Installer.Bootstrap.dll

## 5.2.36 — 22 October 2021

### Fixes
- Internal fixes and improvements.

## 5.2.35 — 14 October 2021

### Fixes
- Fixed regression bug causing unsuccessful operations to not update their state correctly leading to UI mismatches in the activity log.

## 5.2.34 — 6 October 2021

### Fixes
- Internal fixes and improvements.

## 5.2.33 — 1 October 2021

### Fixes
- Internal fixes and improvements.

## 5.2.32 — 23 September 2021

### Fixes
- Internal fixes and improvements.

## 5.2.31 — 17 September 2021

### Fixes
- Internal fixes and improvements.

## 5.2.30 — 10 September 2021

### Fixes
- Internal fixes and improvements.

## 5.2.29 — 2 September 2021

### Fixes
- Internal fixes and improvements.

## 5.2.28 — 26 August 2021

### Fixes
- Internal fixes and improvements.

## 5.2.27 — 20 August 2021

### Fixes
- Internal fixes and improvements.

## 5.2.26 — 13 August 2021

### Fixes
- Internal fixes and improvements.

## 5.2.25 — 5 August 2021

### Fixes
- Internal fixes and improvements.

## 5.2.24 — 30 July 2021

### Fixes
- Internal fixes and improvements.

## 5.2.23 — 23 July 2021

### Fixes
- Internal fixes and improvements.

## 5.2.22 — 12 July 2021

### Fixes
- Internal fixes and improvements.

## 5.2.21 — 6 July 2021

### Fixes
- Increased the timeout for downloading agents installer during an auto-update to better suipport mahcines with a slow connection to the SQL Clone server

## 5.2.20 — 1 July 2021

### Fixes
- Internal fixes and improvements.

## 5.2.19 — 25 June 2021

### Fixes
- Fixed an issue preventing proper logging of some agent auto-update issues

## 5.2.18 — 17 June 2021

### Fixes
- Fixes issue with Agent upgrade if Agent is down and server upgraded across version 5.2.12

## 5.2.17 — 10 June 2021

### Fixes
- Internal fixes and improvements.

## 5.2.16 — 3 June 2021

### Fixes
- Internal fixes and improvements.

## 5.2.15 — 27 May 2021

### Fixes
- Internal fixes and improvements.

## 5.2.14 — 20 May 2021

### Fixes
- Internal fixes and improvements.

## 5.2.13 — 14 May 2021

### Fixes
- Internal fixes and improvements.

## 5.2.12 — 28 April 2021

### Features
- Added several improvements to the logging in the Agent and Server setup tools, including the addition of logging to disk in `%LOCALAPPDATA\Red Gate\Logs\SQL Clone`.

### Fixes
- Fixed an issue in SQL Clone Agent startup where errors happening at an early stage would not be logged to disk.

## 5.2.11 — 23 April 2021

### Fixes
- Internal fixes and improvements.

## 5.2.10 — 16 April 2021

### Features
- Added new Powershell cmdlet `Start-SqlCloneAgent` which allows you to manually register and start a SQL Clone Agent (when needed).

## 5.2.9 — 9 April 2021

### Fixes
- "Getting started" process now includes "Enable permissions" step to encourage security best practices.

## 5.2.8 — 31 March 2021

### Fixes
- Image deletion will now be retried a few times if there is a transient failure

## 5.2.7 — 25 March 2021

### Fixes
- Internal fixes and improvements.

## 5.2.6 — 19 March 2021

### Fixes
- Internal fixes and improvements.

## 5.2.5 — 12 March 2021

### Fixes
- Internal fixes and improvements.

## 5.2.4 — 5 March 2021

### Fixes
- Internal fixes and improvements.

## 5.2.3 — 24 February 2021

### Fixes
- Internal fixes and improvements.

## 5.2.2 — 19 February 2021

### Fixes
- Fixed bug when creating images from backups containing database files with the same name in different locations.

## 5.2.1 — 10 February 2021

### Fixes
- Internal fixes and improvements.

## 5.2.0 — 3 February 2021

### Features
- SQL Clone now targets .NET 5.0; Microsoft does not support Windows Server 2012 R1 or earlier as a deployment target for .NET 5.0. For details of .NET Core's supported operating systems see [https://github.com/dotnet/core/blob/main/release-notes/5.0/5.0-supported-os.md](https://github.com/dotnet/core/blob/main/release-notes/5.0/5.0-supported-os.md).
- Following the deprecation of SQL Server 2008 in SQL Clone v5, SQL Clone Server's config database is now incompatible with SQL Server 2008

## 5.1.0 — 27 January 2021

### Features
- SQL Clone Agents now target .NET Core 3.1; Microsoft does not support Windows Server 2012 R1 or earlier as a deployment target for .NET Core 3.1. For details of .NET Core's supported operating systems see [https://github.com/dotnet/core/blob/main/release-notes/3.1/3.1-supported-os.md](https://github.com/dotnet/core/blob/main/release-notes/3.1/3.1-supported-os.md).

### Fixes
- Fixed an issue that could prevent uninstallation of old agents during auto-update

## 5.0.2 — 14 January 2021

### Fixes
- Internal fixes and improvements.

## 5.0.1 — 12 January 2021

### Fixes
- Internal fixes and improvements.

## 5.0.0 — 11 January 2021

### Features
- SQL Clone server and agents drop support for Windows 7, Windows 8.0, Windows Server 2008 R2 and Windows Server 2012.
- SQL Clone server now requires SQL Server 2012 or later for its config database.
- The SQL Clone web UI no longer supports Internet Explorer. It continues to support the latest versions of Microsoft Edge, Google Chrome, and Mozilla Firefox.
- [https://github.com/dotnet/core/blob/main/release-notes/7.0/supported-os.md](https://github.com/dotnet/core/blob/main/release-notes/7.0/supported-os.md)
- [https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md](https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md)
- [https://github.com/dotnet/core/blob/main/release-notes/5.0/5.0-supported-os.md](https://github.com/dotnet/core/blob/main/release-notes/5.0/5.0-supported-os.md)
- [https://github.com/dotnet/core/blob/main/release-notes/3.1/3.1-supported-os.md](https://github.com/dotnet/core/blob/main/release-notes/3.1/3.1-supported-os.md)

---PRODUCT---
# SQL Prompt 11.3
<!-- source: https://documentation.red-gate.com/sp/release-notes-and-other-versions/sql-prompt-11-3-release-notes -->
<!-- fetched: 2026-04-21 | latest: 11.3.11.23448 (21 April 2026) -->
<!-- fetched: 2026-04-03 | latest: 11.3.8.22342 (19 March 2026) -
## 11.3.11.23448 — 21 April 2026

### New Features
- Added link to the new Redgate AI trust & transparency hub in SQL Prompt AI options, which
- Added suggestion support for functions - JSON_QUERY, JSON_ARRAYAGG and JSON_OBJECTAGG.
- Added support for theme switching, aligned with SSMS 21 (modern preview themes) and SSMS 22. - Learn More.

### Improvements
- Complements our own existing SQL Prompt AI data handling documentation.

### Bug Fixes
- Fixed an issue where restored SQL History queries forget save path.
- Fixed incorrect suggestions for BACKUP DATABASE, RESTORE DATABASE, and CREATE LOGIN in Azure SQL Managed Instance.
- Fixed SQLCMD syntax query formatting issue while using COLLATE clause.

## 11.3.10.22862 — 03 April 2026

### Bug Fixes
- Fixed compatibility issues with SSMS 22.5

## 11.3.9.22706 — 30 March 2026

### Bug Fixes
- Fixed Index was outside the bounds error when expanding stored procedures.
- Fixed duplicate entries in the Registered Servers and Object Explorer context menus for Tab Color.

## 11.3.8.22342 — 19 March 2026

### Bug Fixes
- Fixed SQL Prompt not loading correctly on start up in SSMS 22.4.

## 11.3.7.21945 — 12 March 2026

### Improvements
- Prompt AI requests now include the SQL Server version of the connected database alongside its schema.
- This significantly increases the chance of the AI-generated T-SQL being fully compatible with the current version and not using newer language features.
- The Prompt AI window now displays the SQL Server version of the connected database as a gray suffix after the database name.
- Several improvements to the categorization and display of items in the SSMS/VS command palette.
- Prevent unnecessary AI requests when the SQL query editor window is not connected to a database or when its schema is empty.

### Bug Fixes
- Prompt AI fix now respects GO batches and will no longer try to incorrectly remove them or flag them as syntax errors when executing SQL if the Show fix suggestions popup dialog option is enabled.
- Several tweaks to Prompt AI fix behavior to improve outcome (especially in cases where multiple syntax errors occur in the
- Fixed registration of Select Synonym in Object Explorer command in SSMS and command palette.
- Fixed Exception has been thrown by the target of an invocation error that could be shown when saving SQL Prompt options while the SSMS registered servers tool window was active.
- Fixed inconsistent formatting when Check constraint is used.
- Fixed an issue where SQL Prompt did not insert a space before the NOT LIKE keyword when formatting SQL.
- Fixed an issue where Registered Server tab colors were not displayed in SSMS 21 and 22.
- Fixed display of friendly-name hyperlinks in SQL Prompt options interactive help dialogs (? buttons).
- Fixed issue that could cause non-SQL errors (e.g. connection timeouts) to incorrectly trigger the Prompt AI fix suggestion popup dialog.
- Fixed an issue where SQL Prompt menu was not shown on menu bar in SSMS 21 and SSMS 22 after installation/upgrade.

## 11.3.6.21421 — 13 February 2026

### New Features
- Added support for SQL Server 2025 database-scoped configuration preview features..

### Bug Fixes
- Fixed an incompatibility between SQL Prompt and SSMS 22.3 which caused SSMS to consistently crash when SQL Prompt was installed. Refer Documentation.
- Fixed an issue where aggregate totals were calculated incorrectly when using the German language/region settings.
- Fixed an issue that caused code completion to fail for user‑defined stored procedures in Microsoft Fabric SQL Databases..

## 11.3.5.21197 — 05 February 2026

### Improvements
- Two SQL Prompt suggestion-based opt-in experimental settings have been promoted to regular options and moved from
- Automatically refresh suggestions - When this option is on, SQL Prompt automatically refreshes the suggestion list
- Refresh Microsoft IntelliSense cache when refreshing suggestions (SSMS only) - By default, SSMS's IntelliSense functionality

### New Features
- Opt-in setting to prevent Excel's rounding of numerical values with more than 15 digits when exporting SQL query results -- introduced as an experimental feature in version 10.14.12.11.347 -- has now been promoted to a regular option in the new Query Results options pane.

### Bug Fixes
- Fixed issue where a GUI notification about SQL Prompt product usage could be shown incorrectly on SSMS/VS startup.
- Fixed issue that could cause SQL Prompt to fail to load on startup if some of its configuration settings could not be read from disk.

## 11.3.4.20814 — 20 January 2026

### Improvements
- Failure to retrieve the database schema no longer prevents AI requests from completing. They will instead be performed without
- If this happens, a warning will be displayed in the Prompt AI window to offer contextual information.
- Prompt AI window will no longer wrongly claim you are not connected to a database when clicking in non SQL editor windows (e.g. "Object Explorer").
- The list of AI suggestions (initial or follow-up) will now only be re-generated when necessary (e.g. if the database connection changed) to avoid needless processing and server-side network requests.

### Bug Fixes
- Fixed issue where failure to perform an AI request (e.g. Explain SQL) could leave the work in progress spinner UI element visible and would not surface the problem in the Prompt AI window (other than a cryptic -- ERROR comment in the SQL editor window).
- Fixed an issue where SQL Prompt repeatedly displayed error messages for unsupported authentication types.
- Fixed an issue where clicking the 'Snippet Manager' caused a null reference error when on a non-query tab.
- Fixed enablement and disablement of SQL Prompt suggestions and code analysis features in main menu and options in all Visual Studio versions.
- Fixed issue where intermittent failures to retrieve database schema would not recover unless the Prompt AI window was closed and re-opened.
- Fixed an issue in Code Analysis where extended stored procedures were incorrectly suggested to use named parameter style.
- Fixed an issue in Code Analysis where SYSUTCDATETIME was incorrectly identified as a user-defined function (UDF).
- Fixed an issue in SQL Prompt where script containing JSON_OBJECT would not get formatted.
- Fixed issue that would prevent SQL Prompt from reacting to database connection modifications if suggestions were disabled.
- Fixed an issue where SSMS 22 freezes during the initial import of user settings with SQL Prompt already installed.

## 11.3.3.20567 — 07 January 2026

### Improvements
- Query Index Analysis main menu entry now appears under the AI section.
- Disabling Prompt AI now correctly disables Query Index Analysis (which uses an internal AI model).

### Bug Fixes
- Fixed SQL History panel in the options menu from disappearing when you reset options to default in SSMS.
- Fixed an issue where restoring default options would only restore one option at a time.
- Fixed performance issue in SQL Prompt when the active formatting style was not stored locally.
- Fixed and enhanced Prompt AI features availability checks. More information will be provided in the options if they are not available.
- Fixed InvalidOperationException that could be thrown when trying to launch Prompt AI features.
- Fixed several use cases where the connected database schema was not being sent as part of the AI request.
- Fixed formatting inconsistencies when the "Collapse Short Control Statement" option is enabled containing 'ELSE BEGIN' clause.

### New Features
- Fixed logging in all supported versions of Visual Studio.

## 11.3.2.20417 — 26 December 2025

### New Features
- Added support for Microsoft Fabric. -Learn more

### Bug Fixes
- Fixed issue where SQL Prompt Inline EXEC did not work with cross schema data types.
- Fixed issue where nested EXISTS subquery indentation aligned to the WHERE clause instead of its contextual parent.
- Fixed SSMS crash on AWS RDS instance.

## 11.3.1.20365 — 23 December 2025

### Bug Fixes
- Fixed issue where SQL Prompt was not showing suggestion for a secondary read only node in an Availability Group for SSMS v20 and older.
- Fixed issue where SQL Prompt extension was not visible in SSMS 22 for certain users after upgrade.

## 11.3.0.20275 — 17 December 2025

### New Features
- Added new opt-in preview SQL Prompt AI feature to generate AI-based code completion suggestions that understand your current query editor context (and can react to instructions in SQL comments).
- The feature is disabled by default on new installations of SQL Prompt, but can be enabled via the options.
- Added SQL Prompt main menu option (shortcut: Ctrl+Shift+B) to quickly enable/disable SQL Prompt AI features.
- Added contextual help (shortcut: F1) to Prompt AI main and onboarding windows which link to official documentation (opens
- Added SQL Prompt AI commands to the Command Palette.

### Improvements
- You can manually trigger AI code completion suggestions on demand (CTRL+Alt+Up arrow) or optionally set it to show automatically after a configurable delay in milliseconds to auto-complete for you as you type in the SQL editor window (as is the case for normal SQL Prompt code suggestions). See AI code completion docs for more information.
- This preview feature is tagged as experimental as it's currently still under development and we would love to hear your
- No longer fails silently if something goes wrong when registering SQL Prompt editor commands as this will leave
- 11.3.10.22862
- 11.3.9.22706
- 11.3.8.22342
- 11.3.7.21945
- command palette
- Select Synonym in Object Explorer
- 11.3.6.21421
- Refer Documentation
- 11.3.5.21197
- exporting SQL query results
- 11.3.4.20814
- initial or follow-up
- 11.3.3.20567
- Query Index Analysis
- 11.3.2.20417
- Learn more
- 11.3.1.20365
- 11.3.0.20275
- enabled via the options
- AI online feedback form
- enable/disable SQL Prompt AI features

### Bug Fixes
- Fixed several UI-based errors in SQL Prompt options components.
- Fixed several issues that could cause SQL Prompt AI commands to be wrongly disabled or enabled in SQL Prompt main menu and SQL editor context menus.
- Fixed an issue where Tab Color for databases was not displaying correctly in Dark Mode.
- Fixed issue where the right button context menu entry for Query Index Analysis could be missing depending on the SQL editor window contents.
- Fixed an issue where SQL Prompt was not showing suggestion for ALTER USER.
- Prompt AI fix

---PRODUCT---
# SQL Compare 16.0
<!-- source: https://documentation.red-gate.com/sc/release-notes-and-other-versions/sql-compare-16-0-release-notes -->
<!-- fetched: 2026-04-03 | latest: 16.0.10.28672 (31 March 
## 16.0.11.28694 — 08 April 2026

### New Features
- ZD-352570: Fixed a case where PERIOD FROM SYSTEM TIME is added between an existing column and a new one

### Bug Fixes
- ZD-353428: Fixed an issue where function dependencies on tables might not be recognized correctly if a user-defined table type existed with the same name as the table.
2026) --
## 16.0.2.28399 — 06 January 2026

### Improvements
- Internal library updates
>

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
