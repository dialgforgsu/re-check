# Redgate Release Notes — Snapshot
<!-- fetched: 2026-04-13 | latest: 0.53.1111 (13 April 2026) -->
<!-- split on `---PRODUCT---` to get one file per product -->

---PRODUCT---
# Flyway Desktop
<!-- source: https://documentation.red-gate.com/fd/flyway-desktop-9-release-notes-329778435.html -->
<!-- fetched: 2026-08-27 | latest: 9.8.0 (27 August 2026) -->

#
## 9.8.0 — 27 August 2026

### Improvements
- The Save button on the schema model page is no longer disabled when no changes have been detected
- Deploying migrations to a non-empty target database that has never been baselined now offers to baseline it and continue, instead of failing with an error
- The pending migrations warning on the Generate migrations page is now more concise, with the full explanation available on demand
- The manage target/build databases dialog now lists your databases immediately, instead of briefly opening empty and resizing once their connection details had been read
- Guided setup is offered whenever the schema model is empty, even once a development database has been linked
- The shadow database setup for pending migrations has moved from the warning banner’s cog icon to a configure link within the warning details
- Deleting the schema model no longer leaves the schema model page with no way to save it again

## 9.7.2 — 21 August 2026

### Improvements
- After a manual deployment, the review drawer now stays open and shows a dedicated summary of what was deployed, replacing the less prominent success banner

## 9.7.1 — 19 August 2026

### Improvements
- The Create empty, Docker, Snapshot and Backup provisioners now have a link to their documentation in the connection dialog and in the shadow/environment configuration
- Setting up a shadow database with the Docker provisioner no longer returns you to the ‘Select migration reference point’ screen instead of continuing

## 9.7.0 — 11 August 2026

### Improvements
- Code review policies can now be configured directly in Flyway Desktop, using the ‘Code Review Policies’ tab on the project settings screen

## 9.6.5 — 05 August 2026

### New Features
- New Automated deployment page is now available in public preview, it can be turned off via the Preview features menu

### Improvements
- The project settings dialog now asks for confirmation before closing if you have unsaved changes
- The Backup and Create empty provisioners are no longer labelled as being in preview

## 9.6.4 — 29 July 2026

### Improvements
- Notifications now stack up, and dismiss themselves after 20 seconds with a bar showing the time remaining. Errors still stay until you dismiss them

## 9.6.3 — 28 July 2026

### New Features
- Added support for Databricks Lakebase as a distinct database type; the existing Databricks database type has been renamed to Databricks Lakehouse (Unity Catalog)

## 9.6.2 — 21 July 2026

### New Features
- Add Oracle option to add ‘ONLINE’ clause to index creation scripts
- The ‘Manage target databases’ dialog no longer shows an empty state; it now opens straight to adding a database when none are configured

### Improvements
- The Run clean button in the clean confirmation modal is no longer disabled. If clicked without ticking ‘Ok to erase’ it now shows a validation error instead
- The project settings dialog no longer disables the state-based deployment option when the project already contains migration scripts
- The All Objects rule in the PostgreSQL filter editor is now always evaluated first, so more specific rules can override it as intended

### Bug Fixes
- Fixed an issue where the Schema model contents would not show if no development database was connected

## 9.6.1 — 16 July 2026

### Improvements
- Guided shadow provisioning is now always available to Enterprise customers, replacing the previous opt-out preview toggle.
- The project settings dialog no longer disables the state-based deployment option when the project already contains migration scripts.

### Bug Fixes
- Fixed bug on Migration Scripts page where removal of a parameter would not be saved.

## 9.6.0 — 06 July 2026

### New Features
- Databricks advanced capabilities support is now available in public preview

## 9.5.11 — 02 July 2026

### Improvements
- Hide the remove condition button when only one condition is present on filter rules in the Postgres Filter UI

## 9.5.10 — 30 June 2026

### Improvements
- When a push is rejected because the remote has changes you don’t have locally, the error now explains this and offers a ‘Pull changes’ button to resolve it.
- The Sample project card on the landing page now uses a single ‘Create a sample project…’ button consistent with the other cards, with the Autopilot docs available as a link in the card description.

## 9.5.9 — 23 June 2026

### Improvements
- Git errors now make it clear the problem came from Git rather than Flyway Desktop, with the raw Git output tucked behind a ‘Show raw git output’ toggle.

## 9.5.8 — 18 June 2026

### New Features
- Added support for configuring check.driftResolutionFolder as an advanced parameter for drift analysis operations on the Migrations page.

### Improvements
- Saving generated migrations is now faster

## 9.5.7 — 15 June 2026

### New Features
- Fixed the Deploy tab being missing on new projects when the migrations deploy page feature flag was disabled, which also hid the deployment decision screen

## 9.5.6 — 09 June 2026

### Bug Fixes
- Fixed an issue around being unable to select a filter effect in the PostgreSQL filter UI if the object type wasn’t selected

## 9.5.5 — 04 June 2026

### Improvements
- Filter UI for PostgreSQL projects now includes an option to filter across any object type

## 9.5.4 — 03 June 2026

### Improvements
- Postgres filter editor: multiple rules per object type are now allowed, enabling patterns such as ‘Include when table name = X’ alongside ‘Exclude table’

## 9.5.3 — 27 May 2026

### New Features
- Add preview Oracle option to add existence checks to scripts - currently supports index creation statements
- Added an option to copy the sign-in link to the clipboard, for users where the browser cannot automatically be opened

## 9.5.2 — 26 May 2026

### New Features
- Added Filters UI support for Postgres projects to enable users to filter out objects during comparison.

### Improvements
- Flyway Desktop will now restore previous open tabs on launch

## 9.5.0 — 18 May 2026

### Improvements
- Automated Deployment page now has workflows with a manual approval step, for users with GitHub environments with required viewers.
- The choice between state and migrations deployments has moved from project creation to the Deployment page

## 9.4.4 — 11 May 2026

### Improvements
- Automated Deployment page now links out to user’s GitHub repository when generating GitHub Actions workflows

### Bug Fixes
- Fixed environment display name text color being invisible in project settings modal

## 9.4.3 — 07 May 2026

### New Features
- Adds a SQL Server data deployment behavior option to use existence checks for INSERT statements.
- Added support for the oracle.checksumIncludeReferencedScripts parameter in migration commands

### Improvements
- Now lists the changes that will happen as part of the upgrade process, when upgrading projects with obsolete configuration
- Don’t show the ‘Execute in a transaction’ option for an Oracle deployment script

## 9.4.2 — 29 April 2026

### New Features
- The Automated Deployment page now generates Github Actions workflow files, using the new Flyway Github Actions.

### Bug Fixes
- Fixed issue where Copy to clipboard button on Automated Deployment page would copy the contents without newlines on Windows

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
<!-- fetched: 2026-08-26 | latest: 13.4.0 (26 August 2026) -->

## 13.4.0 — 26 August 2026

### Improvements
- The Flyway command line and Docker images now automatically use the proxy configured in your operating system. Set the FLYWAY_USE_SYSTEM_PROXIES environment variable to false to disable this.
- removed the unused g++ compiler toolchain from the Redgate Azure Docker images
- the docker provisioner rejected a sourceEnvironment that declared provisioner = "none", reporting it as already provisioned
- Upgraded RgCompare to 1.62.7.5446

### New Features
- Issue 4269 Snowflake parser supports AGENT IF EXISTS clause
- TOML support is no longer bundled with flyway-core and is now provided through the new flyway-core-utilities module

### Bug Fixes
- fixed Oracle parser failing with "Incomplete statement" when a PL/SQL package body referenced a table or column literally named CASE after INSERT INTO, UPDATE, JOIN, CREATE TABLE, or AS

## 13.3.0 — 13 August 2026

### Breaking Changes
- Fixed a bug where Redshift CREATE, ALTER and DROP IDENTITY PROVIDER statements were run inside a migration transaction, which Redshift does not support

### Improvements
- ConfigurationExtension.copy() no longer requires jackson-databind on the classpath; if it's absent, copy() falls back to a shallow copy
- Upgraded RgCompare to 1.62.6.5172

## 13.2.0 — 6 August 2026

### Improvements
- JSON results with timestamps now include a UTC offset. Reports generated will not be compatible with previous versions of Flyway. API users relying on getTimestamp or setTimestamp will need to use OffsetDateTime instead
- Flyway now warns when validate resolves no migrations from the configured locations but the schema history contains applied migrations
- mcp server project load will no longer raise an error if a .conf project was detected in a default location outside of the project root
- OSS no longer recognises the 'publishResult' or 'checkDriftOnMigrate' parameters which had no effect
- Configuration details defined against a specific environment, such as a custom schema history table or default schema, were lost when Flyway switched to that environment
- The Docker provisioner could not connect to Oracle 23 and later containers, failing with ORA-12514, because it requested the wrong pluggable database service
- Upgraded adoptium/temurin25-binaries from 25.0.3+9 to 25.0.4+7
- Upgraded RgCompare to 1.62.5.5071

### New Features
- CockroachDB is now provided as a standalone database module. API users targeting CockroachDB should include the new CockroachDB module instead of relying on the PostgreSQL module

### Bug Fixes
- Updated BouncyCastle to 1.85 to address a High severity Uncontrolled Recursion advisory

### Security Fixes
- Updated Oracle SQLcl in the Flyway Docker oracle image to 26.2.0.181.2110, resolving CVE-2026-68494 in jackson-core

## 13.1.0 — 30 July 2026

### Improvements
- deploy command result now includes execution time in milliseconds
- environments_<name>_<setting> and flyway_<setting> environment variables can now use any letter casing in their prefix, e.g. ENVIRONMENTS_PRODUCTION_PASSWORD
- Databricks identifiers containing a backtick produced invalid SQL
- Databricks migrations could fail at the unlock step with a Delta ConcurrentAppendException; the lock keepalive no longer races the unlock
- Issue 4240 Log execution of Java callbacks, matching SQL/script callback logging
- Upgraded jansi to use org.jline.jansi package
- Upgraded RgCompare to 1.62.4.4998

### New Features
- Databricks Lakebase is now recognised as a supported PostgreSQL-derivative database type in public preview
- snapshot history is now supported on Databricks

### Bug Fixes
- Issue 4259 Fixed afterConnect callback not being fired on the migration connection
- Fixed an issue that prevented several after*OperationFinish SQL callback scripts (clean, validate, undo, repair, baseline) from ever running
- Fixed an issue where the Docker provisioner for Oracle would immediately exit
- Fixed dry run failing on Databricks with "Unable to switch connection to read-only" error

## 13.0.0 — 20 July 2026

### New Features
- Add support for new 'IncludeOnlineIndexCreation' option for Oracle

### Improvements
- check drift and check changes JSON output now includes an id for each difference, allowing drift to be resolved against specific objects
- Flyway MCP server now available, exposing development-time tools an AI agent can call. These tools run flyway commands for both state based and migrations projects
- Include the offending SQL in error messages for Flyway Desktop when debug logging is disabled
- the docker provisioner now reports a dedicated error code when a SQL Server or Oracle container is provisioned without accepting the database vendor's EULA
- Upgraded RgCompare to 1.61.4.4850

### Bug Fixes
- Fixed the 'auth' command incorrectly showing a "no locations configured" warning that only applies to migration commands
- Updated jackson-databind to 3.1.5 / 2.22.1 to address a High-severity Incorrect Authorization advisory

## 12.11.0 — 9 July 2026

### New Features
- Add support for new 'disable-constraints-for-static-data' option for PostgreSQL

### Improvements
- -h help for migrate, info, validate, clean, and undo now lists relevant configuration parameters and a usage example instead of just a description
- Oracle SQL error output no longer shows the redundant SQL State and Error Code lines, as the ORA-#### code is already in the message
- testConnection now keeps the configured environments available so provisioners that reference another environment (for example the docker provisioner's sourceEnvironment) resolve correctly when testing an inline environment
- testConnection now reports provisioning progress (e.g. Docker container start-up) when progress output is enabled
- the docker provisioner now reports clear, dedicated errors when the Docker CLI is not installed or the Docker daemon is not running
- the legacy compose-file configuration of the preview docker provisioner is deprecated and now logs a warning; use the docker-compose provisioner instead
- using 'auth' without the '-IAgreeToTheEula' flag defaults to an interactive EULA agreement process
- Improved Flyway CLI cold start time by switching driver JARs from eager static classpath loading to lazy dynamic loading
- Upgrade Snowflake from 4.0.2 to 4.3.1
- Upgraded RgCompare to 1.60.0.4759

### Bug Fixes
- Fixed an issue where authentication warnings could be displayed multiple times during a Flyway run
- Issue 4253 Fixed FlywayUnknownMigrationTypeException when schema history table contains legacy SPRING_JDBC type from older Flyway versions

## 12.10.0 — 30 June 2026

### Improvements
- smart docker provisioner keepAlive reuses the build database container across Flyway commands
- filesystem location 'not found' messages now report the effective working directory and prompt you to check it, since running Flyway from the wrong working directory (without -workingDirectory) is a common cause
- Native Connectors mode is now enabled by default for Cassandra
- outOfOrder mode is now reported at info level instead of as a warning
- The preview docker environment provisioner has been renamed to docker-compose. Existing docker provisioner configurations that use a compose file continue to work via automatic forwarding.
- A missing callback location (including the default filesystem:callbacks) is now skipped instead of being logged as an error or failing the command
- drift resolution script generation failures no longer fail the check drift command; drift is still reported and any scripts that can be generated are still written
- The smart docker provisioner now starts Postgres and MySQL build containers with valid credentials and a usable default schema, so provisioning and migrating against them succeeds
- skip building an unused Flyway instance for configuration-only commands (e.g. constructMigrationName, parseMigrationName, comparison-capabilities), reducing their startup latency
- Upgraded com.fasterxml.jackson.core:jackson-databind from 2.21.2 to 2.22.0
- Upgraded tools.jackson.core:jackson-databind from 3.1.1 to 3.1.4
- Upgraded RgCompare to 1.58.5.4666

### Bug Fixes
- Fixed drift resolution failing to generate scripts when the drift included object types whose names contain spaces (e.g. user-defined types)

## 12.9.0 — 18 June 2026

### New Features
- Added a check.driftResolutionFolder setting to configure the folder in which drift resolution scripts are generated when drift is detected

### Improvements
- Flyway CLI now exits with a distinct exit code derived from the error code when a FlywayException is thrown
- check drift, changes and dryrun commands now report phase-level progress when outputProgress is enabled
- Upgraded RgCompare to 1.58.4.4526

## 12.8.1 — 5 June 2026

### Bug Fixes
- Fix FLYWAY_TOKEN and FLYWAY_EMAIL environment variables not being recognised for PAT authentication

### Improvements
- Upgraded RgCompare to 1.58.3.4420

## 12.8.0 — 4 June 2026

### Improvements
- Flyway now warns when an offline permit is due to expire within the next 30 days
- Improved progress reporting for PostgreSQL, MySQL and SQLite
- Oracle EXEC statements preceded by a comment now parse correctly
- API users now must include a flyway Licensing module dependency to be recognized as Redgate edition
- Upgraded RgCompare to 1.58.3.4416

## 12.7.0 — 29 May 2026

### Improvements
- Flyway can load custom SQLFluff rules for use in the Check command
- API users are now required to include the flyway-proprietary module to use Redgate proprietary features
- Upgraded RgCompare to 1.58.2.4353

## 12.6.2 — 21 May 2026

### Improvements
- Environment Variable resolver syntax now works in all flyway configuration parameters, not just environment connection properties
- Upgraded ch.qos.logback:logback-classic from 1.2.3 to 1.2.13
- Upgraded org.apache.derby:derby from 10.16.1.1 to 10.17.1.0
- Upgraded org.apache.logging.log4j:log4j-core from 2.17.1 to 2.25.4
- Upgraded RgCompare to 1.58.1.4262

### New Features
- Issue 4238 Cockroach v26 is now supported

### Bug Fixes
- fix crash in check code when SQLFluff emits LXR violations for files containing a UTF-8 BOM
- Fixed misleading "try running the 'auth' command" warning appearing when already running auth command

## 12.6.1 — 12 May 2026

### Improvements
- flyway repair against a dry-run target no longer fails for SQL baseline migrations
- license text files now included in Flyway distributions
- Upgraded RgCompare.Cli to 1.58.1.4056

### Bug Fixes
- Fixed SARIF output for check -code

## 12.6.0 — 8 May 2026

### New Features
- Flyway now supports Native Connectors mode for the Deploy command

### Improvements
- Auth command now defers to existing license providers instead of redundantly re-authenticating. License output now reports the acquisition method.
- configuration errors caused solely by obsolete parameters now throw ObsoleteConfigurationParametersException, exposing the obsolete parameters as structured data
- Issue 4229 Gradle plugin is now compatible with Gradle's configuration cache for environment variable and system property inputs
- obsolete parameter exception payload now includes a reason field explaining why each parameter is obsolete
- simplified namespace short-circuiting (aka scoped namespacing) so that mixing scoped and unscoped namespaces is allowed
- Issue 4230 Only create synonyms for Oracle SHTs when the name includes lower case characters
- Upgraded adoptium/temurin25-binaries from 25.0.2+10 to 25.0.3+9
- Bumped aws-secretsmanager-jdbc from 2.0.4 to 2.1.0
- Upgraded RgCompare.Cli from 1.55.1.3732 to 1.58.0.3966

### Breaking Changes
- Issue 4232 Add support for DROP ... IF EXISTS and CREATE ... IF NOT EXISTS for Oracle parser

## 12.5.0 — 27 April 2026

### New Features
- Flyway now supports Azure Key Vault as a secrets resolver
- Flyway now supports Native Connectors mode for Cassandra. The JDBC-based approach has been deprecated

### Improvements
- flyway prepare with -prepare.source=schemaModel now fails with a clear error when the configured schema model directory does not exist
- "initSql" has been deprecated. Please use the "afterConnect" callback instead
- The Flyway Secret Manager feature is no longer available under Teams license
- Retry Informix table drops on ISAM file lock errors
- Upgraded RgCompare.Cli from 1.52.6.3589 to 1.55.1.3732

### Bug Fixes
- Fix pluginConfigurations in the Maven and Gradle plugins not being handled by Flyway

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
<!-- fetched: 2026-08-26 | latest: 14.30.0 (August 26, 2026) -->
## 14.30.0 — August 26, 2026

### Improvements
- The improved Reports experience is now the default experience, featuring enhanced tiles and a modern interface. Scheduled PDFs still use the classic experience, but can be opted-in via Report Settings. Users can still switch back to the classic experience if needed.
- Enterprise edition: The CIS for SQL Server 2022 templates have been updated from v1.2.1 to v1.3.0.
- Read-only MongoDB replica set secondaries can now be monitored.
- Cleared alerts are now automatically uncleared if their severity subsequently increases.
- Modernize Alert Settings table to improve multi-select experience.
- The get_metrics tool (available to Redgate Assistant and third-party MCP clients) can now retrieve additional metrics - lock wait time, CPU/disk queue length, disk transfers/sec, and memory paging rate.
- Show base monitor name in Alert Settings' "Inherited from" column when multiple base monitors exist and inheriting from the base monitor's settings.
- Redgate Assistant (preview) - When the user's login has expired (for example after an upgrade), the assistant now explains that the page needs refreshing instead of failing with a 401 error.
- Viewing the "current activity" tab on a server overview no longer prevents navigation away from that tab.
- Error responses in the REST API now consistently show property names in camel case.

### New Features
- New alert type for repeated login failures. This alert is raised when there are a number of SQL Server login failures in a specified window of time. Requires the SQL Server audit log to be enabled on the database.
- New alert type for table bloat on PostgreSQL. This alert is raised when the percentage of dead tuples on a PostgreSQL table exceeds a set threshold.
- Added a Configuration tab to the PostgreSQL server overview page, showing the instance's current configuration parameters and recommendations for important settings.
- The SQL Server configuration estate page is now Server configuration, with a new PostgreSQL tab listing your monitored PostgreSQL servers with the number of critical settings and warnings in each server's configuration, based on recommended values.
- Enterprise edition: New Security user role that allows read-only access to Security pages without full admin access.
- The new Cluster and Availability Group Overview pages are the new default experience.
- New MCP tools to retrieve top blocking processes for SQL Server instances, and to drill into an individual blocked children processes.
- Added the TopProcedures-SampleWindowHours key-value pair which configures how far back in time Redgate Monitor will look when sampling Top Procedures data. Increasing this will increase the load on all sampled servers, as more executions will be used when calculating the top stored procedures. The default is 25 hours, the maximum is 169 hours.

### Bug Fixes
- Fixed an issue where the "Instances ordered by lowest uptime" report tiles listed the instances with the _highest_ uptime, omitting the instances that had actually been unreachable.
- Fixed an issue where backup overdue alerts would not raise if two clusters monitored by the same Base Monitor had Availability Groups with the same name.
- Fixed an issue where databases and Availability Group replicas would show separately if their casing differed from the primary.
- Fixed an issue where query executions would not be collected for SQL Server 2017 14.0.1000.169.
- Fixed an issue where a read-only Azure SQL Database, such as a failover group secondary, would incorrectly show as being in an error state because the deadlock Extended Events session cannot be created on it.
- Fixed an issue where an item could be missing its color in the legend of a chart when its name contained certain characters
- Fixed an issue where the y-axis of a stacked graph could be scaled too low when one of its series had only recently started sampling
- Fixed an issue where error log data for PostgreSQL on Google Cloud SQL was missing the database, user, or host if log_line_prefix didn't include all three.
- Fixed an issue where the Base Monitor service could become unresponsive and require a manual restart after monitoring a large number of unreachable Windows-based SQL Server hosts for an extended period.
- Fixed an issue where editing credentials for multiple SQL Server instances at once could unintentionally reset their Port and Trust Server Certificate settings.
- Fixed an issue where an Amazon Aurora PostgreSQL cluster could show as healthy on the Global Dashboard while an instance in that cluster had an active alert. The cluster's row now shows the most severe alert raised on any of its instances or their hosts.

## 14.29.0 — August 11, 2026

### New Features
- The -EncryptConnection parameter on the PowerShell cmdlets New-RedgateMonitorSqlServer, New-RedgateMonitorAzureSqlManagedInstance and New-RedgateMonitorGoogleCloudSqlServer now accepts Optional, Mandatory and Strict. $false and $true are still accepted, and mean Optional and Mandatory.
- Fixed an issue introduced in 14.14 where adding a SQL Server instance through the PowerShell API used Strict connection encryption when none was specified, rather than Optional.
- Added a DiskUsageDetailsWeeklyGranularity feature flag to reduce the Disk Usage Details history graph to weekly, rather than daily, granularity.

### Improvements
- All base monitors are now shown at once in the tree in the Alert Settings page, rather than using a Base Monitors dropdown in the corner.
- Update-RedgateMonitorMonitoredObjectCredential PowerShell cmdlet now accepts -WmiConnectionMethod and -EncodePortInServicePrincipalNameForWinRM to switch a Windows Cluster or Standalone Machine between DCOM and WinRM.

### Bug Fixes
- Fixed an issue where error log alert settings for PostgreSQL instances would incorrectly return SQL Server settings with the PowerShell API.
- Fixed an issue where the uptime figures on the Reports page, and in the emailed and printed PDF versions of a report, were wrong for any instance that had been unreachable.
- Fix a issue introduced in 14.28.0 where, when editing an alert in alerts settings, the server tree would not render certain selected elements, such as disks and machines.

## 14.28.0 — August 5, 2026

### Improvements
- Redgate Monitor can now run in a Docker container.
- Redgate Assistant (RGA) (preview) is now available. See https://www.red-gate.com/monitor14/redgate-assistant for details.
- MCP server (preview) is now available. See https://www.red-gate.com/monitor14/mcp-server for details.
- Enterprise edition - Sensitive webhook notification headers are now masked in the Sensitive action log.
- Improved SASL authentication handling when configuring an SMTP server for email notifications.
- Alert notifications now include the value that triggered the alert and the threshold it crossed. For example, an email, Slack message or webhook for a Server waits alert now reads "Server waits reached 1.25 s/s (High threshold: 1 s/s)". For custom webhook templates, this text is available in the alertDetailText field.
- Sorting the Alert Suppression Windows page by the Duration column now orders windows by their actual duration rather than alphabetically.
- SaaS only - Sorting the Agents overview by the Last activity column now orders agents chronologically rather than alphabetically.

### New Features
- Enterprise edition - The SQL Server logon failure alert is now supported for Amazon RDS SQL Server instances.
- Added an Instance Properties section to the Aurora PostgreSQL instance overview, showing key configuration details such as parameter group, size, and role.
- Fixed an issue where refreshing the Analysis page after selecting one or more metrics could silently add an extra, unselected metric to the graph.

### Bug Fixes
- Fixed an issue where clicking an alert marker on the graph at the top of the Server overview page did not open the alert sidebar. The sidebar now opens showing the alert's details, or the list of alerts for a grouped marker.
- Fixed an issue where a Logon failures report tile could crash the Base Monitor when targeting an entity that could not be resolved.
- Fixed an issue where backup details supplied by Redgate SQL Backup, such as compression and encryption status, could be missing from the Backups page, most commonly for SQL Servers not running in UTC.
- Fixed an issue introduced in 14.19 where Monitor ran more queries than necessary when collecting database size and space used from SQL Server instances. Offline databases on Amazon RDS and Azure Managed Instance are no longer sampled for size and space used, so they no longer log a collection error every minute.
- Fixed an issue where SQL Server backups were not shown on the Estate > Backups page, and backup overdue alerts were raised incorrectly, when the database name recorded in the backup history differed in case from the actual database name.
- Fixed an issue where server waits data was not collected from SQL Server instances whose database compatibility level was below 100.
- Fixed an issue where some monitoring queries ran at the default deadlock priority rather than the lowest.
- Fixed an issue where the blocking processes list on the Server overview omitted sessions depending on the selected time range.

## 14.27.0 — July 29, 2026

### Improvements
- Sensitive webhook notification headers, such as an Authorization header, are now masked in the notification settings UI and API instead of being shown in plaintext.

### New Features
- Added a new "Power BI Report Server status" alert, so Power BI Report Server (the successor to SQL Server Reporting Services from SQL Server 2025) can be alerted on independently from SQL Server Reporting Service.
- A new Reports experience is now available, providing a more modern interface and improved layout. Click on the Try it out link on the Reports tab.
- New alert type for IO stalls is now available for SQL Server and MySQL. This alert is raised when the average time an IO operation spends stalled waiting on storage exceeds a threshold for a sustained duration.
- Read-only databases can now be included on the Estate > Backups page by enabling the new IncludeReadOnlyDatabasesInBackups setting in the repository database. They remain excluded by default.

### Bug Fixes
- Fixed an issue where testing an Oracle custom metric failed if the query took longer than 15 seconds, even though scheduled collection allows up to 300 seconds.
- Fixed an issue where custom metric test collection stopped if the browser tab was in the background while the test ran, showing an error instead of the results on returning to the tab.
- Fixed an issue where the Alert Summary report tile could intermittently fail to load data on estates with a large number of active monitored servers.
- Fixed an issue where SQL Server configuration compliance data was collected for customers without an Enterprise license.

## 14.26.0 — July 22, 2026

### New Features
- The Aurora PostgreSQL cluster monitoring experience been reworked and improved. The cluster overview page will now show detailed metrics about the cluster's DB instances, as well as cluster events, alongside aggregation of query performance metrics. The dashboard will show a single card for the cluster, with navigation to instances available inside the overview page. Additionally, clusters with auto-monitoring of instances enabled will now automatically monitor writer instances as well as readers. Auto-monitoring can be enabled when adding an Aurora PostgreSQL cluster, or when editing its credentials.

### Improvements
- Individual query execution monitoring is now available for Azure SQL Database, Azure SQL Managed Instance, and Google Cloud SQL for SQL Server. See https://www.red-gate.com/monitor14/individual-query-executions for details.
- The Virtual Machines machine details panel has been replaced with a full-screen modal.

### Bug Fixes
- Fixed an issue where the service status of SQL Server 2025 Integration Services was not collected. Power BI Report Server, which replaces Reporting Services from SQL Server 2025, is now also monitored.
- Fixed an issue where selecting from the instance dropdown while viewing some Server overview tabs could reset the view back to the History tab.
- Fixed an issue on the Analysis page where Availability Group and Availability Group Replica never had their own row persisted to Postgres/TimescaleDB.

## 14.25.0 — July 16, 2026

### Improvements
- Enterprise edition - SQL Audit is now out of preview.
- The Virtual Machines page now shows per-disk details (space used, capacity, and average IOPS and read, write, and total throughput over the selected period) for each machine's disks in the machine details panel.
- Enterprise edition - Increased default pagination size of Configuration Compliance Templates table from 10 to 25 rows.
- Replication job failure alerts can now be suppressed on secondary availability group nodes.
- The Virtual Machines page is now out of preview.

### Bug Fixes
- Fixed an issue where setting an alias for suspended SQL Servers were not working correctly on the Overview page.
- Fixed an issue where files in mapped folders were also assigned to the root drive on the Disk Usage pages.
- Fixed an issue where some alerts could not be suppressed when the head blocker was idle with an open transaction.
- Fixed an issue where enabling host monitoring for an Amazon RDS SQL Server without selecting a region was saved silently and broke host metric collection.
- Fixed an issue where editing credentials for multiple Amazon RDS entities at once overwrote each entity's database instance identifier with a single shared value.

## 14.24.0 — July 10, 2026

### Improvements
- Google Cloud SQL monitoring is now available for PostgreSQL instances.
- The Virtual Machines page now lists the SQL Server instances running on each machine, along with their version and edition, in the machine details panel.
- Report summary tile now shows Linux and Google Cloud hosted machines.

### New Features
- Enterprise edition - New alert type for database permission changes is now available for SQL Server instances with SQL Audit enabled. This alert is raised when a permission is granted, revoked, denied, or ownership is transferred on a database or database securables.

### Bug Fixes
- Fixed an issue where links on the AG overview for default instances were not working correctly.

## 14.23.0 — July 1, 2026

### Improvements
- Google Cloud SQL monitoring is now available for SQL Server instances.
- The public API monitored-entities endpoint is now faster, particularly when monitoring many instances.
- The Virtual Machines page now shows each machine's average network throughput (bytes received and sent per second) over the selected period, both in the table and as a chart in the machine details panel.
- The PowerShell module no longer reports a cluster's availability groups, or their alert settings, as missing after a monitoring gap such as a Base Monitor restart or the replica instances being briefly unreachable. Previously an availability group was hidden if no data had been collected for it in the preceding 2 hours; the most recently collected topology is now returned for up to 24 hours.
- The standalone .msi installers are no longer internally compressed. This makes the .msi files larger, but allows the .exe bundle installer to compress their contents more effectively, resulting in a smaller .exe download.
- The Analysis page metric selector now auto-selects the top item when options load, and keyboard arrow key navigation immediately updates the graph selection.
- The classic Analysis experience has been deprecated.
- Updated the default required disk space for query executions event session logs from 16 MB to 40 MB.

### New Features
- A preview of the new Cluster and Availability Group overview is now available via a preview banner on the current pages.
- Added missing descriptions for some metrics in the Analysis page.

### Bug Fixes
- Fixed an issue where Query execution monitoring could time out prematurely.
- Fixed an issue where alert configuration was not showing inheritance from Linux machines to instances on it.
- Fixed an issue where a removed monitored instance could still appear in the group tree. The group tree now only shows instances that still exist in your monitoring configuration.
- Fixed an issue where deleted databases were not marked as "Used SQL" on the Estates > Disk Usage page.

## 14.22.0 — June 25, 2026

### New Features
- The X-Forwarded-Prefix header is now only trusted when it comes from a configured reverse proxy. If the web interface is hosted behind a reverse proxy under a virtual path, add the proxy's address to knownProxies or knownIPNetworks under forwardedHeadersSettings in appsettings.json (the same configuration already required for X-Forwarded-Host and X-Forwarded-Proto).
- New Analysis: Selector behavior more closely matches the original page (Autoselect of top item, updating selection with keyboard arrow keys)

### Improvements
- Postgres instances that have been unreachable since a Base Monitor restart will now recover more quickly from an "Unreachable" state when they become reachable.
- Aurora instances without host monitoring will no longer appear as "RDS" on the Global Dashboard.

### Bug Fixes
- Fixed an issue where PostgreSQL instance log collection could stop permanently if a log file contained corrupt or truncated content, for example after a server crash.
- Fixed an issue where, in an MSP setup, a Base Monitor with no monitored entities could downgrade involved web servers to Standard licencing.

## 14.21.0 — June 16, 2026

### Improvements
- Snapshot backups can now be excluded from sampling using the ExcludeSnapshotBackupsFromCollection key value pair setting.

### New Features
- The built-in REST API documentation has a new interface that's faster, fully searchable, and makes exploring and testing endpoints easier and more intuitive.
- Fixed an issue where machine data collection could silently stop after a monitored server reboot, requiring the server to be removed and re-added.

### Breaking Changes
- Fixed an issue where the tag selection drop-down was not fully visible for the last server in the Configuration -> Monitored Servers list.

### Bug Fixes
- Fixed OpenID Connect sign-in failing when Redgate Monitor is hosted under a virtual path (for example behind a reverse proxy that sets X-Forwarded-Prefix); the post-login redirect now keeps the path prefix.

## 14.20.2 — June 15, 2026

### Bug Fixes
- Fixed an issue where the web interface failed to load when Redgate Monitor was deployed as an IIS sub-site

## 14.20.1 — June 10, 2026

### Improvements
- Query executions for Azure SQL Database and Azure Managed Instances have been temporarily deactivated due to a potential cloud cost issue.

## 14.20.0 — June 10, 2026

### Improvements
- SQL Agent job monitoring is now available for Contained Availability Groups. Job definitions, history, activity, and schedules are collected and surfaced in the Estate Jobs view and alert configuration.
- Improved the blocking tree viewer for better usability and control.
- The Estate > Disk Usage > Disk page now caches its data, reducing load times on subsequent refreshes.
- When creating or viewing an access token, the UI now indicates the selected servers that the token has access to.

### New Features
- New Analysis - Fixed an issue where chart series were displaying in gray when there are lots of displayed series.

### Bug Fixes
- Fixed an issue that would cause availability groups with an apostrophe in their name to fail loading in the Availability Groups page.
- Fixed Oracle current activity failing with ORA-06502 when a monitored session has long SQL text.
- Fixed an issue where an unreachable or restarting Oracle instance (notably on Amazon RDS) did not raise the high-severity Instance unreachable alert.

## 14.19.1 — June 9, 2026

### Improvements
- Re-enable snapshot backups in backup history and RPO calculations on the Backups Estate page which were causing false backup overdue alerts, This was disabled in version 14.18.0.

## 14.19.0 — June 3, 2026

### Breaking Changes
- After upgrading, PostgreSQL queries with existing plan history will show a duplicate plan entry. This is due to a breaking change to query plan storage which greatly improves efficiency, and will resolve as the data reaches its retention period.

### Improvements
- Native ServiceNow and Microsoft Teams notifications are now out of preview.
- Individual query execution monitoring is now available for Azure SQL Database and Azure SQL Managed Instance. See https://www.red-gate.com/monitor14/individual-query-executions for details.
- When a SQL Server database is inaccessible to the monitoring account (for example, a database restored from another server where the monitoring user has no user mapping), the monitored server now shows Monitoring with limited sampling in amber, and the monitoring log lists each affected database with the specific error. Previously this was silently ignored and no indication was shown in the UI.
- PostgreSQL query plan history now distinguishes plans that use different indexes, making index changes visible as plan changes.
- Configuration Compliance now uses a ≠ icon (rather than an up/down arrow) when Min server memory or Max server memory differs from the baseline, since the baseline is a target value rather than a threshold.
- Enterprise edition - Removed some rules from the built-in compliance templates that incorrectly specified expectations for unused SQL Server protocols and the SQL Server Browser service.

### New Features
- Added hover functionality for medium-sized cards on the global dashboard.
- New Analysis chart now locks the Y-axis for percentage metrics to 0 to 100%

### Bug Fixes
- Fixed an issue where viewing the details of a low disk space alert raised on an Azure Database for PostgreSQL/MySQL Flexible Server host would fail with an error.
- Fixed an issue where the "View actual plan" button was hidden on the Top Queries drilldown for SQL Server 2022 instances, even when actual execution plans were being collected.
- Fixed an issue where query execution monitoring would fall back to full scans after restarting the Base Monitor on on-premises SQL Server instances.
- Fixed an issue where Amazon Aurora PostgreSQL instance log sampling could throw an ArgumentOutOfRangeException due to log entries being split or duplicated across AWS RDS API pagination boundaries.
- Fixed an issue causing cluster query errors to be displayed for standalone SQL Server instances.

## 14.18.0 — May 28, 2026

### Security Fixes
- CVE-2026-44503 Updated the Microsoft.Kiota.Http.HttpClientLibrary package to 1.22.2 to address a reported vulnerability with a CVSS 3.1 base score of 6.5 (Medium). Redgate Monitor uses this library in its support for monitoring Microsoft Entra domains. Requests are only made to Microsoft Azure APIs, and there's no evidence that any of these APIs have been compromised. See https://github.com/advisories/GHSA-7j59-v9qr-6fq9 for more details.

### Improvements
- Linux host CPU utilization metrics now exclude I/O wait time from the calculation. The CPU is idle during I/O waits, so including it previously overstated utilization. This results in lower reported CPU percentages for Linux machines with significant I/O activity. Customers with CPU alert thresholds configured for Linux hosts may need to adjust their thresholds.
- Amazon RDS Host and Azure Flex monitored entities can now be removed using the Powershell API.
- Redgate Monitor now warns on the monitored server's log page when msdb.dbo.sysjobhistory has grown large enough to slow SQL Server Agent job history collection. See https://www.red-gate.com/monitor14/improving-job-history-sampling-performance for recommended maintenance, indexing, and how to adjust the warning threshold.
- Improved the load time of PostgreSQL top queries.
- Stop showing Azure SQL Database Hyperscale instances on the Estate -> Backups page.
- Alerts for a custom metric will now be raised for Amazon RDS for SQL Server when the metric is running against system databases. If this behavior is not intended, specify the databases to be excluded from the custom metrics configuration page.
- Exclude VM snapshot backups from backup history and RPO calculations on the Backups Estate page.
- Linux installations: environment variable names for connection strings are now REDGATE_MONITOR_PostgresRepositoryConnectionString / REDGATE_MONITOR_SqlServerRepositoryConnectionString and are now read directly by the Base Monitor. Existing installations using the old names will continue to work without any changes.
- As a result of performance improvement changes, PostgreSQL query plans are no longer accessible from a query's kebab menu.
- Change the default timeout for Postgres sampling to 15 minutes and make it configurable through the key value pair setting Postgres-EntitySamplingQueryTimeoutMinutes.

### New Features
- Added effective costs to the Estate -> Virtual machines page (originally only showing billed costs).
- Enterprise edition - New alert type for server role membership changes is now available. This alert is raised when a principal is added to or removed from a server role, indicating potential privilege changes.
- Added a Spills column to the Query Executions tab showing the count of pages each query spilled to tempdb.
- New Analysis graph uses stepping when based on stable samples (to match orginal behaviour)

### Bug Fixes
- Fixed an issue where the PowerShell module would report a misleading version mismatch error when a transient connection problem occurred, instead of reporting the actual connection failure.
- Fixed an issue where PostgreSQL monitoring would fail with an interval syntax error on systems with a locale that uses a comma as the decimal separator (e.g. Italian, German, Turkish).
- Fixed an issue where Postgres query plan compare would fail in some cases for IIS installations.
- Fixed an issue where multiple Availability Groups that contain databases with the same name would cause an ArgumentException.
- Fixed an issue to collect and raise alert for custom metrics running against system databases on Amazon RDS for SQL Server.
- Fixed an issue where the alert suppression windows displayed in the UI could diverge from the repository.
- Fixed the white space issue seen in some viewports.
- Fixed an issue where severity sections on the Overview Dashboard could appear in the wrong order when grouped by status.
- Fixed an issue where alert notifications were not sent when an alert ended because its configuration was changed (e.g. the threshold was raised above the current value).

## 14.17.0 — May 14, 2026

### Bug Fixes
- Fixed a security issue (CVSS 6.9 - Medium) where it was possible for a remote attacker to cause a denial-of-service against the Redgate Monitor Website by sending HTTP requests with oversized or malformed trace propagation headers.
- Fixed an issue where certain Azure failures would prevent any cloud information being retrieved
- Fixed an issue where OpenID Connect authentication failed when the website is behind a reverse proxy (e.g. AWS ALB, nginx) that forwards requests from a non-loopback IP address. This was caused by an upstream .NET runtime change (ASP.NET Core 9.0.6+) that began enforcing proxy trust checks on X-Forwarded-Proto and X-Forwarded-Host headers. Trusted proxy networks can be configured via forwardedHeadersSettings in appsettings.json.
- Fixed an issue where Oracle custom metric collection was attempted on Data Guard standby instances.
- Fixed an issue where standalone SQL Servers with a leftover MSCluster WMI namespace would be incorrectly flagged as having a connection failure.
- Fixed an issue where Aurora instances in a creating state would cause a monitoring error due to a missing availability zone.
- Fixed an issue that prevented PostgreSQL indexes from being sampled on PostgreSQL 10 instances.
- Fixed an error that could occur when sampling Aurora instance logs if the RDS API returned no log files.
- Fixed an issue where some users would be shown bad daily cost data for Cloud Virtual Machines.
- Fixed an issue where getting tracked queries on a TimescaleDB repository no longer shows internal server errors.
- Fixed an issue with uncleared Alerts causing blank Global Dashboard.

### Security Fixes
- CVE-2026-44302 Updated the Snappier package to 1.3.1 to address a reported vulnerability with a CVSS 3.1 base score of 7.5 (High). The vulnerability lies in the MongoDB driver used by Redgate Monitor. Since the driver only uses Snappier if compression is enabled, but Redgate Monitor currently doesn't support compression, Redgate Monitor is unaffected by this vulnerability. See https://github.com/advisories/GHSA-pggp-6c3x-2xmx for more details.

### New Features
- Added ability to see cost details of AWS EC2 instances on the Estate -> Virtual machines page.
- Added a daily costs graph to the VM details sidebar, with comparison period overlay support.
- When adding new cloud service credentials, the test button will now test the credentials more thoroughly and provide more detailed error messages.
- Added a feature flag which allows users to disable Oracle error log sampling.

### Improvements
- Improved responsiveness when saving reports as PDF.
- Viewing current activity doesn't crash the Redgate Monitor Website when there are cyclic sessions.

## 14.16.0 — April 23, 2026

### Bug Fixes
- Fixed a security issue (CVSS 4.4 - Medium) where it was theoretically possible for a denial-of-service attack to be caused by adjusting the Base Monitor or Website XML configuration files.
- Fixed an issue where links to Analysis from instance-level graphs on Server Overviews didn't load properly.
- Fixed an issue where the base monitor process hangs on startup if a Windows performance counter can not be created on a server hosting the base monitor.
- Fixed an issue on the Alerts configuration page where instances were being incorrectly shown against Alerts that were not applicable to them.
- Fixed an issue preventing the TDE state and Owner fields from populating correctly in the database configuration compliance pages.

### New Features
- Monitoring PostgreSQL Aurora reader instances is now supported. PostgreSQL Aurora reader instances can be automatically monitored via the cluster by toggling "Automatically monitor reader instances" in the add or edit server pages for an Aurora cluster.
- Enterprise Edition - New alert category to group the Enterprise only alerts.

### Improvements
- The source hyperlink in the Alert details now directs users to the specific time and date of the alert.
- Increased the size of the dialog shown for Blocking process.
- Enterprise edition - Navigation from the Permissions → Server → Ad Users tab to the user details page works correctly.
- SQL Server monitoring no longer requires db_owner permissions on tempdb database.

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
<!-- fetched: 2026-07-16 | latest: 2.2.20.3766 (16 July 2026) -->
<!-- fetched: 2026-04-03 | latest: 0.6.0.0 (19 September 2
## 2.2.20.3766 — 16 July 2026

### Bug Fixes
- Fixed an issue where data in tables linked transitively from excluded tables caused an error.

## 2.2.19.3703 — 30 June 2026

### Bug Fixes
- Fixed a valid starting-table filter clause that matched no rows being reported as invalid. It now reports a distinct no-matching-data error

## 2.2.18.3556 — 26 May 2026

### Bug Fixes
- Fixed an issue where not specifying an options file was defaulting to a subset of 0MB.

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
<!-- fetched: 2026-07-23 | latest: 2.4.10.2787 (23 July 2026) -->
<!-- fetched: 2026-04-04 | latest: 1.0.3.1787 (16 January 2024) 
## 2.4.10.2787 — 23 July 2026

### Bug Fixes
- Fixed an issue where certain characters in table and/or trigger names caused masking to fail.

## 2.4.8.2699 — 30 June 2026

### Improvements
- Unique constraints are now picked up automatically as a row identifier when no other suitable identifier is found.

## 2.4.7.2636 — 02 June 2026

### New Features
- Improved AI Classification. Added minimum width guardrail checks, equivalent to those in the default rules.

### Improvements
- Improved AI Classification. CreditCardNumbers, PhoneNumbers, USSocialSecurityNumbers, and ZipCodes are no longer classified on numeric columns.

## 2.4.6.2622 — 26 May 2026

### Improvements
- Improved the speed of masking when dealing with large text columns.

## 2.4.5.2602 — 18 May 2026

### Improvements
- Improved AI classification. The Machine Learning classification model was retrained with additional data.

## 2.4.4.2596 — 12 May 2026

### Improvements
- PII class UKNationalInsuranceNumbers is now disabled by default when using AI classification.

## 2.4.2.2514 — 22 April 2026

### Improvements
- Improved AI classification on numeric columns

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
<!-- fetched: 2026-07-08 | latest: 0.69.4 (7 July 2026) -->

## 0.69.4 — 7 July 2026

### Improvements
- The Windows installer now lets you choose the account the TDM service runs under — Network Service (the default), a specific Windows account, or a group Managed Service Account (gMSA) — and lets you change it later by re-running the installer.
- If the encryption key (key.dat) is missing on startup, the TDM service now fails with a message asking you to repair or reinstall, instead of silently generating a replacement. The key is created and owned by the installer; a regenerated key cannot decrypt existing connection credentials, so failing fast avoids silent data loss.
- Display alert in treatment summary when AI Classify has finished classifying a Database Model.
- Duplicating a treatment now creates an exact copy. Previously the duplicate could show a different masking configuration, or raise validation issues that had already been resolved on the original.

### New Features
- TDM now supports Okta as an OIDC identity provider alongside Microsoft Entra ID.
- Added filtering capability to be able to filter by "Classification source": User defined, AI Classify, or Rules defined.

## 0.68.198 — 7 July 2026

### Improvements
- The Windows installer now lets you choose the account the TDM service runs under — Network Service (the default), a specific Windows account, or a group Managed Service Account (gMSA) — and lets you change it later by re-running the installer.
- If the encryption key (key.dat) is missing on startup, the TDM service now fails with a message asking you to repair or reinstall, instead of silently generating a replacement. The key is created and owned by the installer; a regenerated key cannot decrypt existing connection credentials, so failing fast avoids silent data loss.
- Display alert in treatment summary when AI Classify has finished classifying a Database Model.
- Duplicating a treatment now creates an exact copy. Previously the duplicate could show a different masking configuration, or raise validation issues that had already been resolved on the original.

### New Features
- TDM now supports Okta as an OIDC identity provider alongside Microsoft Entra ID.
- Added filtering capability to be able to filter by "Classification source": User defined, AI Classify, or Rules defined.

## 0.66.396 — 25 June 2026

### Improvements
- A server name and database name are now required when entering connection details as individual parameters.
- OIDC can now be configured through the setup wizard and the Settings page, in addition to manually editing config.yml.
- The appearance of chips (also known as labels or tags) throughout the product have been revamped.
- Editing or duplicating a saved connection now keeps the existing connection string in place and only clears the password, which you must re-enter before saving.
- The connection string field now has a copy button.
- Importing or duplicating a treatment no longer loses user edits (changed datasets, excluded columns, etc.).
- Excluding a starting table in subsetting no longer causes a validation error.
- Continue button no longer stays disabled after starting a trial.
- Don't show Licensing credential fields in Settings if those fields are externally managed (e.g. config.yml or env).
- When the list of datasets is not ready for use because data is still loading, the dataset dropdown will show a loading indicator.

## 0.65.105 — 5 June 2026

### New Features
- Add sorting and filtering to workflow runs page.
- Turn off AI Classify by default for new Database models
- Hide Windows Authentication when connecting to SQL Server instances on Docker builds of TDM, which don't currently support it.

### Improvements
- Remove classification source filtering capability in Summary and Anonymization pages.

## 0.64.177 — 1 June 2026

### Improvements
- Disable classification source filtering capability in Summary and Anonymization pages.
- Connection status is now shown inline throughout the UI. This will tell you if a connection can be connected to or not and can be refreshed on demand.
- Temporarily disable classification source filtering capability in Summary and Anonymization pages.
- Improve display of some categories of validation errors throughout TDM GUI.
- Improved accuracy of dry run results when using code view.
- Existing custom datasets can now have their types edited (e.g. pattern ⇒ list) again.

## 0.63.88 — 21 May 2026

### Bug Fixes
- Fixed an issue where restarting the TDM service under a custom Windows service account caused anUnauthorizedAccessExceptionwhen readingkey.dat.

### Improvements
- Significantly improved load times of anonymize treatment pages for large schemas

## 0.62.229 — 18 May 2026

### Improvements
- Creation dialogs for connections, treatments, database models, and workflows now pre-fill the name field with a sensible default derived from the context (e.g. database name, model name). If the default is already taken an ordinal suffix is appended automatically.
- Subset treatments can now be run directly from the treatment actions menu and details view.
- Display alert in treatment summary when AI Classify has finished classifying a Database Model.

### New Features
- Added 'Create workflow' button to treatment actions menu.
- Added an 'Edit' option at the top of the dataset dropdown menu in the anonymization grid when a column has a custom (user-created) dataset applied.
- Added filtering capability to be able to filter by "Classification source": User defined, AI Classify, or Rules defined.

### Bug Fixes
- Fixed an issue where the tooltip in anonymization summary page shows the incorrect column when a table has the same error in many columns.
- Fix the issue where the user cannot override the UnsafeDemoPassword via config.
- Fixed an issue where cancelling the 'Create dataset' form in the anonymization drawer left the typed (unsaved) dataset name visible on the column.
- Fixed an issue where switching a subset treatment between Custom (starting tables) and Desired Size modes could leave a stale where clause in the UI and prevent saving with a "zero starting tables" error.

## 0.61.6 — 07 May 2026

### Improvements
- Uninstalling TDM now allows choosing to either keep or delete all associated data.

## 0.59.135 — 07 May 2026

### Improvements
- Workflows can run custom PowerShell (.ps1) and Bash (.sh) command before and after treatments.
- Changed pattern dataset creation UI to closer align with list creation UI.

### New Features
- TDM UI now support HSTS with a max age of 365 days. This can be switched on via the config file by setting "UseHsts: True"

### Bug Fixes
- Fixed an issue where creating a connection with a duplicate name gives an unhelpful error.
- Fixed an issue where updating a connection can give an incorrect duplicate name error.
- Fix 'MenuListContext is missing' error when clicking on filter button in subsetting starting tables list.

## 0.58.26 — 27 April 2026

### Improvements
- The workflow run dialog now shows the workflow's source and target connections as read-only and no longer exposes the "Ignore additional objects in target database" checkbox. Connections and the force-subset setting are configured when the workflow is created or edited and cannot be overridden per run.
- Workflows can now run custom sql command before and after treatments

### New Features
- Add "Masked" filter option to the anonymization treatment dataset filter, allowing viewing of all masked columns at once without selecting each dataset individually.

## 0.57.20 — 23 April 2026

### Improvements
- The workflow run dialog now shows the workflow's source and target connections as read-only and no longer exposes the "Ignore additional objects in target database" checkbox. Connections and the force-subset setting are configured when the workflow is created or edited and cannot be overridden per run.

### Bug Fixes
- Fixed an issue where clicking a dataset chip does not overwrite the filters.
- Fix an issue where a custom dataset for a pattern did not appear in the dataset dropdown for a column.
- Fix for affected columns not matching the list of columns in the anonymize grid when filtering by the error.
- Fix issue where updates are not synced immediately when switching between Anonymization Code View and Anonymization Details view
- Fixed an issue where anonymization summary does not show table-level errors properly.

## 0.56.205 — 23 April 2026

### Improvements
- The workflow run dialog now shows the workflow's source and target connections as read-only and no longer exposes the "Ignore additional objects in target database" checkbox. Connections and the force-subset setting are configured when the workflow is created or edited and cannot be overridden per run.

### Bug Fixes
- Fixed an issue where clicking a dataset chip does not overwrite the filters.
- Fix an issue where a custom dataset for a pattern did not appear in the dataset dropdown for a column.
- Fix for affected columns not matching the list of columns in the anonymize grid when filtering by the error.
- Fix issue where updates are not synced immediately when switching between Anonymization Code View and Anonymization Details view
- Fixed an issue where anonymization summary does not show table-level errors properly.

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
<!-- fetched: 2026-08-19 | latest: 5.6.29 (August 19, 2026) -->

## 5.6.29 — August 19, 2026

### New Features
- Added -BlockSize parameter to New-SqlCloneImage PowerShell cmdlet for specifying block size when creating images from backups. This can improve restore performance when SQL Server reports Event 3285 filemark alignment warnings.

### Improvements
- Retain comments in the stored proc definition template

## 5.6.28 — May 15, 2026

### New Features
- SQL Clone now targets .NET 10.0. For details of .NET Core's supported operating systems see https://github.com/dotnet/core/blob/main/release-notes/10.0/supported-os.md.

## 5.6.27 — April 29, 2026

### Bug Fixes
- The dashboard summary was showing incorrect counts when there were more images or clones than the client-side fetch limit. This is now fixed.

### Improvements
- Users with large numbers of images can now see them all in the dashboard.

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
<!-- fetched: 2026-05-18 | latest: 11.3.14.24187 (18 May 2026) -->
<!-- fetched: 2026-04-03 | latest: 11.3.8.22342 (19 March 2026) -
## 11.3.14.24187 — 18 May 2026

### Bug Fixes
- Fixed problem that could permanently prevent usage of Prompt AI by having an always disabled Check Prompt AI availability command in the SQL Prompt main menu.
- Fixed an issue that caused suggestions to fail in SQL Prompt when string concatenation was used with TRIM.
- Fixed an issue in SSMS 22.6 where opening the Manage License screen in SQL Prompt could display an unexpected error dialog.

## 11.3.13.23933 — 12 May 2026

### Improvements
- Updated the SQL Prompt SSMS Check for Updates (CFU) flow to launch the SQL Toolbelt Essentials installer instead of the standalone SQL Prompt installer.
- This removes the need to restart SSMS/VS to be able to re-use Prompt AI in those scenarios.

### Bug Fixes
- Fixed an issue where SQL Prompt did not auto-fill the default NUMERIC values for a stored procedure.
- Fixed an issue where SQL Prompt suggestions failed to load on read-only replicas in Availability Groups.
- Fixed issue where SQL History could cause errors and SSMS freezes when disabled or enabled via the SQL Prompt options.
- Fixed an issue where the COPY AS IN clause in the result grid returned duplicate values when multiple cell with identical values were selected using Ctrl+Click.
- Fixed an issue where the SQL Prompt right‑click context menu failed to appear in the Registered Servers window in SSMS 21 and SSMS 22 after signing out of SQL Prompt.
- Fixed issue that could cause the Prompt AI availability check to always fail in the same IDE session, even if AI access
- Fixed an issue where SQL Prompt Table definition tooltip suggestions failed to load System-Versioning scripts for Temporal tables.

## 11.3.12.23605 — 28 April 2026

### Bug Fixes
- Fixed incorrect issue highlighting for queries containing IS DISTINCT predicate.
- Fixed SQLPrompt crash that occurred when applying changes from Copilot Chat.
- Fixed an issue where SQL Prompt could freeze or hang SSMS and Visual Studio when switching tabs or opening files.
- Fixed low-contrast SQL text in SQL History under dark mode, improving readability.
- Fixed formatting issues for REGEXP and CURRENT_DATE when connected to Azure SQL Database.

### New Features
- Fixed An unexpected error occurred. Try again later or contact Redgate support if issue persists when gathering initial AI suggestions if SQL History was disabled.

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
<!-- fetched: 2026-07-14 | latest: 16.1.1.29148 (14 July 2026) -->
<!-- fetched: 2026-04-03 | latest: 16.0.10.28672 (31 March 
## 16.1.1.29148 — 14 July 2026

### Bug Fixes
- Fixed a NullReferenceException that could occur when comparing mappings for non-database sources such as backups, snapshots, or scripts folders
- Fixed a NullReferenceException that could occur when navigating to the next/previous difference in the results grid

## 16.1.0.29116 — 06 July 2026

### Improvements
- SQL Compare command line now stops if your project’s WHERE clauses might have unintended side effects when deploying static data. Use /AllowDangerousWhereClauses to suppress the error.

## 16.0.19.29095 — 01 July 2026

### New Features
- Added Information as a valid /logLevel option in the command line tool.

## 16.0.18.29038 — 18 June 2026

### Bug Fixes
- ZD-357878: Fixed parsing of ALTER TABLE ALTER COLUMN where COLLATE, MASKED WITH and NULL/NOT NULL appear together (e.g.in stored procedure bodies)

### Improvements
- Scripts registered from folders now report unsupported SQL statements (such as ALTER SEQUENCE, ALTER USER, ALTER SCHEMA) as parser messages that highlight the problematic SQL, instead of silently ignoring them

### New Features
- Added Information as a selectable minimum log level in Help > Minimum log levels.

## 16.0.17.29004 — 03 June 2026

### Bug Fixes
- ZD-357153: Fixed parsing of SQL Server 2019 graph query syntax (SHORTEST_PATH, FOR PATH, WITHIN GROUP (GRAPH PATH)) in stored procedure and view bodies
- Fixed an issue where scripting options were not being honored during script generation

## 16.0.16.28949 — 21 May 2026

### Bug Fixes
- Fixed an issue when encountering columns with defaults that use SQL Server functions that don’t have trailing parenthesis e.g.current_date
- Fixed a PlatformNotSupportedException when generating Classic HTML or Excel reports from the CLI

## 16.0.15.28900 — 12 May 2026

### New Features
- Support for JSON_QUERY WITH ARRAY WRAPPER introduced in SQL Server 2025

## 15.4.29.28207 — 04 December 2025

### New Features
- Preview feature: Support Redgate Data Modeler models as a comparison source.

## 15.4.28.28077 — 14 November 2025

### New Features
- Support for SQL Server 2025. New SQL Server 2025 features may not function correctly.

### Bug Fixes
- Fixed an issue where the ‘Create snapshot of target before deployment’ option was not generating a snapshot

## 15.4.27.28006 — 04 November 2025

### New Features
- Added support for SSMS 21 as an external SQL Editor

## 15.4.26.27858 — 02 October 2025

### Improvements
- ZD-329373: Use sp_rename instead of dropping and recreating columns when collations are different

### Bug Fixes
- Fixes incorrect exit code being returned when a licensing error occurs

## 15.4.20.28553 — 17 June 2025

### Bug Fixes
- ZD-333542: Fixed an issue preventing project files from loading when they used a legacy authentication method.

## 15.4.16.28371 — May 12th, 2025

### New Features
- ZD-330789: Allow for comparison of user-defined functions named ‘try_cast’ in scripts folders

## 15.4.15.28277 — Apr 16th, 2025

### Improvements
- Updated authentication type labels for Azure Active Directory to Microsoft Entra in the UI

## 15.4.12.28089 — Mar 6th, 2025

### New Features
- ZD326791: Added support for included columns on inline indexes

## 15.4.11.28054 — Feb 24th, 2025

### New Features
- Add support for IGNORE NULLS, RESPECT NULLS on the LAG and LEAD functions

## 15.4.10.27977 — Feb 6th, 2025

### New Features
- ZD-324430: Add support for Delta external file format.

## 15.4.9.27950 — Jan 31st, 2025

### Bug Fixes
- ZD-324963: Fixed the issue when trying to write to a read only file/folder.

### New Features
- ZD-325187: Add support for SQL Server 2022 SSDT projects.

## 15.4.6.27751 — Dec 19th, 2024

### Improvements
- SqlCompareExceptions now provide unredacted Message and ToString() values.

### Bug Fixes
- Fix string.Format call in Message.Text

## 15.4.5.27738 — Dec 17th, 2024

### New Features
- ZD-320234: Fixed the issue where ONLINE=ON was being added when altering a column on a temporal table

## 15.4.3.27665 — Dec 3rd, 2024

### Improvements
- Removed the Flyway option from the project dialog, as it had very low usage

## 15.4.2.27580 — Nov 22nd, 2024

### Improvements
- Updates the licensing client
- Allows tool to be used across user profiles on the same machine
- Prioritises licenses correctly

### Bug Fixes
- ZD-321309: Fixed a dependency error with ‘System.Memory’ when selecting a database in SQL Snapper

## 15.4.1.27450 — Nov 12th, 2024

### Improvements
- MessageBase has been inlined into Message, which is now a record.

### Bug Fixes
- Ensures the user has verified their email address as part of the login flow

## 15.4.0.27425 — Nov 11th, 2024

### Improvements
- Updated licensing with improved UI, integration, security, and trials. Read more at https://www.red-gate.com/blog/redgate-licensing-update
- Serial Keys have been retired.

## 15.3.14.27393 — Nov 5th, 2024

### Bug Fixes
- Fixed issue when displaying error messages
- Fixed a crash when using newer versions of SQL Prompt formatting

## 15.3.12.27264 — Oct 15th, 2024

### New Features
- SQL Compare Engine no longer has a dependeny on Microsoft.Data.SqlClient. You may need to add this package to your project if you are using the SQL Compare Engine NuGet package.
- ZD-304828: Add support for ignore nulls, respect nulls options on the last_value function

### Improvements
- Removed methods marked as Obsolete on public API that depended on Microsoft.Data.SqlClient.
- Removed .SSMS and .SSMS20 versions of the SQL Compare Engine NuGet package.

## 15.3.11.27029 — Sep 17th, 2024

### Bug Fixes
- ZD-302580: Fixed the issue where ONLINE=ON was being specified within an ALTER statement for the primary index of a table containing a spatial data type column, and for the creation of spatial indexes

### New Features
- ZD-304828: Add support for ignore nulls, respect nulls options on the first_value function

## 15.3.10.26944 — Sep 12th, 2024

### Improvements
- Marked a number of public API methods as obsolete. They will be removed in a future release. All methods have have replacements that should be used instead, see the warning message for guidance.
- Stability improvements for the UI

## 15.3.9.26398 — Jul 31st, 2024

### Bug Fixes
- ZD-314973, ZD-302580: Fixed the issue where ONLINE=ON was being specified within an inlined primary index of a temporal table within a CREATE Table statement

## 15.3.8.26171 — Jul 16th, 2024

### Improvements
- Changed the name of sqlcompare.tar.gz to include the version number

## 15.3.7.25849 — Jun 4th, 2024

### New Features
- ZD-308580: Add support for security policy schema binding

## 15.3.6.25729 — May 8th, 2024

### Improvements
- ZD309124: Prevent unwanted multiple space characters appearing in CREATE OR ALTER statements

## 15.3.5.25572 — Apr 9th, 2024

### Improvements
- ZD304081: SQL Compare no longer locks the selective_xml_index_paths catalog view during registration.

## 15.3.4.25528 — Mar 26th, 2024

### Bug Fixes
- ZD-307150: Fixed issue when connecting to Azure SQL instance where an error occurred related to the loading of assembly Microsoft.IdentityModel.Abstractions

### New Features
- Additional connection string properties added to the server name are now used again when comparing two SQL Source Control revisions from the SQL Compare command line

## 15.3.2.25249 — Feb 15th, 2024

### Improvements
- Upgraded to Microsoft.Data.SqlClient 5.1.5

## 15.3.1.25177 — Feb 6th, 2024

### New Features
- ZD-298420: Add support for the TRIM function optional arguments LEADING, TRAILING and BOTH
- ZD-303715: Fixed a crash when permissions are added to columns of a file table
- ZD-304545: Added support for using sp_unbindefault against a table to override the binding of a default on a column’s user-defined type.

### Bug Fixes
- ZD-303860: Fixed an issue where some temporary files were not being deleted when generating a snapshot

## 15.3.0.25068 — Jan 12th, 2024

### Improvements
- Upgraded to Microsoft.Data.SqlClient 5.1.4
- ZD-302580: Prevent scripting Online = On for indexes which are part of a UDT Table

### New Features
- Added read-only support for Flyway projects, allowing you perform comparisons with Flyway on the left.

## 15.2.7.24880 — Dec 27th, 2023

### Bug Fixes
- ZD-303915: Fixed a caching bug during script folder registration.

## 15.2.6.24771 — Dec 12th, 2023

### Improvements
- ZD-302367: Changes UI to always open ‘Save As’ dialog window when saving filters.

## 15.2.5.24669 — Dec 5th, 2023

### Improvements
- ZD-299431: Slightly reduced memory usage of the UI and engine.
- ZD-299431: Deployment script syntax highlighting is now disabled for scripts exceeding 300k lines for performance reasons.
- Speed up script folder registration.

### New Features
- ZD-294122: Add support for APPROX_PERCENTILE_CONT and APPROX_PERCENTILE_DISC functions in SQL Server 2022.
- ZD-302521, ZD-302326, ZD-280962, ZD-262990, ZD-297151 & ZD-284803: Stopped scripts folders containing a function with the INLINE option erroring and added a warning when attempting to deploy them to unsupported server versions

### Bug Fixes
- ZD-299431: Fixed a memory leak in the SQL Compare UI, noticeable when refreshing large comparisons.
- ZD-299431: Fixed a crash on the pre-deploy Summary tab when toggling the grouping for large deploys.

## 15.2.4.24551 — Nov 28th, 2023

### Improvements
- ZD-298714: When altering a column or index, better detection of when ONLINE = ON cannot be used
- ZD-299431: Sped up dependencies selection screen by tweaking column autosizing.
- ZD-299431: Sped up dependency resolution for SQL Compare GUI and CLI.
- ZD-299431: Sped up deploy summary tab.
- ZD-299431: Sped up snapshot registration when triggers are present.

## 15.2.3.24503 — Nov 21st, 2023

### New Features
- Add support for the JSON_OBJECT function introduced in SQL Server 2022

## 15.2.1.24235 — Oct 31st, 2023

### Improvements
- RedGate.SQLCompare.Engine.Difference now has a subclass RedGate.SQLCompare.Engine.DifferenceSubtypes.ViewTableDifference. This subclass has an extra property ContainsFullTextIndexChanges.

## 15.2.0.24040 — Oct 6th, 2023

### Improvements
- ZD-297510: Made the table mapping screens more responsive by significantly reducing the number of times they reprocess saved data.
- Note that the project Save button no longer grays out when there are no unsaved changes.

## 15.1.2.24012 — Sep 28th, 2023

### Improvements
- Update to licencing link in CLI output

## 15.1.1.23971 — 06 September 2023

### Bug Fixes
- ZD-297062: Fixes error when changing a history table clustered index to a clustered columnstore index.
- ZD-290609: Fixes an issue encountered when SQL Server system defined CLR types are prefixed with “[sys].”

## 15.1.0.23826 — 06 September 2023

### New Features
- Added link to licensing restrictions documentation in CLI output header

### Bug Fixes
- Fixed an issue where the invalid object detection would flag objects as invalid if they have a reference to an external DB.

## 15.0.12.23728 — 08 August 2023

### Bug Fixes
- Fixed column rename bug

## 15.0.11.23723 — 08 August 2023

### New Features
- ZD-287143: Add initial level of support for the use of the WINDOW clause in SELECT statements

### Bug Fixes
- ZD-285053: Fixes an issue in the command line where options such as “TrustServerCertificate” in the server switches were not being used

## 15.0.10.23691 — Aug 1st, 2023

### Bug Fixes
- ZD-293296: Fix parsing error when property access is made on CLR types returned from CASE Statements.

## 15.0.9.23488 — May 30th, 2023

### New Features
- ZD-292465: Added SSMS19 to list of SQL editor options

## 15.0.8.23473 — May 23rd, 2023

### Improvements
- Upgraded to Microsoft.Data.SqlClient 5.1.1
- ZD-290643: Stopped changes to external tables causing script file name changes

## 15.0.7.23280 — Mar 14th, 2023

### Improvements
- “Encrypt” and “Trust server certificate” server connection checkbox values are now loaded with server connection details from server dropdown

## 15.0.6.23274 — Mar 7th, 2023

### Improvements
- ZD-286622: Warn that non-primary filestream filegroups of tables will need to be created manually

## 15.0.5.23181 — Feb 21st, 2023

### Bug Fixes
- ZD-285412: Fixed issue with table mappings not appearing when connecting through Azure MFA to a managed instance

## 15.0.4.23133 — Feb 14th, 2023

### New Features
- Added warning to command line clarifying which differences will be deployed

## 15.0.3.23021 — Jan 24th, 2023

### New Features
- ZD-284359: Added missing schema check in a column existence test

## 15.0.2.22953 — Jan 17th, 2023

### Improvements
- ZD-282763 “Encrypt” and “Trust Server Certificate” can now be specified on database connections with checkboxes, rather than the workround of manually appending connection string parameters to the server name

### Bug Fixes
- Fixed minor bugs relating to the handling of long file paths

## 15.0.1.22876 — Jan 11th, 2023

### New Features
- ZD-283578: Added “Dynamically override default save location when saving to a new location in the deployment script save dialog” option to application settings.

## 15.0.0.22793 — Dec 20th, 2022

### New Features
- SQL Server 2022 support
- UI displays a warning that support for SQL Server 2008 and SQL Server 2008R2 will be removed in a future version

### Improvements
- UI displays a warning when an unsupported scripts folder is selected

## 14.10.9.22680 — Dec 8th, 2022

### New Features
- ZD-281179: Adding ‘NOT NULL’ to a temporal table column will now update values in the history table to the default value and display a warning.

### Breaking Changes
- ZD-281520: Primary keys are now correctly dropped before being replaced when using system versioning.

## 14.10.8.22508 — Nov 24th, 2022

### New Features
- Added new option to ignore statistics incremental during comparison
- Added support for long file paths in windows when enabled in the windows registry (We cannot guarantee how it will work with windows and other applications as it does not seem well supported)

### Breaking Changes
- ZD-280144: SCHEMABINDING is correctly dropped on functions that are created WITH EXECUTE AS ..., SCHEMABINDING options, when required to do so by a change to an underlying object.

### Bug Fixes
- ZD-280317: Fixed missing dll reference that appears when attempting Azure authentication in the command line.

## 14.10.7.22333 — Nov 15th, 2022

### New Features
- Added new option to ignore statistics incremental during comparison

### Improvements
- ZD-280398 - saving a deployment script to a non-default location via the small “save script” button in the deployment wizard no longer causes the default location in global application settings to change.
- ZD-271170 ZD-276218 ZD-278637: Dropping external tables no longer leaves an un-parsable file

## 14.10.6.22196 — Nov 3rd, 2022

### Improvements
- Improved scripts folder file name generation in the case of long paths or file names
- ZD278637 - Dropping external tables no longer leaves an un-parsable file
- SQL Compare will no longer install the Microsoft Active Directory Authentication Library (ADAL) as a pre-requisite as it is superseded by MSAL

## 14.10.5.22107 — Oct 18th, 2022

### New Features
- ZD278733: Prevented the program from failing when encountering ledger tables. Ledger tables are not currently supported but if you would like them to be please log interest on the SQL Compare UserVoice page: https://redgate.uservoice.com/forums/141379-sql-compare

## 14.10.4.22065 — Oct 11th, 2022

### Improvements
- Upgraded to Microsoft.Data.SqlClient 5.0.1

### Bug Fixes
- ZD-277198: Fixed missing dll reference that appears when attempting Azure authentication
- ZD-278565: Fixes bug where rebuilding of temporal tables could cause constraint changes in the history table to be duplicated.

## 14.10.3.21932 — Oct 4th, 2022

### Improvements
- ZD-277520 Performance focused changes in an indexes registration query

## 14.10.2.21877 — Sep 28th, 2022

### Improvements
- ZD276113: Prevented SQL Compare from creating foreign keys that already exist in target

## 14.10.1.21845 — Sep 21st, 2022

### Bug Fixes
- ZD-277111: SQL Snapper - error populating database list when TrustServerCertificate is required to be true is fixed.
- ZD-278020: Fixes command line bug where an invalid filter file would cause SQL Compare to log the error but not stop.

## 14.10.0.21773 — Sep 13th, 2022

### New Features
- Beta support for SQL Server 2022 Preview. New SQL 2022 features may not function properly.

### Bug Fixes
- ZD-277681: Fixes scripts folder parsing of the character pair “<-” whether they appear in a MATCH graph search pattern or as a Less Than comparison operator followed by a unary negative operator
- ZD-277111 SQL Snapper tool: error populating database list when TrustServerCertificate is required to be true is fixed.

## 14.9.3.21711 — Sep 6th, 2022

### New Features
- ZD-276627: Added support for the OPTIMIZE_FOR_SEQUENTIAL_KEY index option.

## 14.9.2.21665 — Aug 30th, 2022

### Bug Fixes
- ZD-274687 Fixes an issue in parsing query MATCH syntax from scripts folders

## 14.9.1.21642 — Aug 16th, 2022

### Bug Fixes
- ZD-274277 Fixed an issue where database connections failed due to mishandling of the Failover Partner parameter.

## 14.9.0.21563 — Aug 10th, 2022

### Improvements
- ZD269834 SQL Compare will now only rebuild a table when the filegroup differs just by casing if the “Use case-sensitive object definition” comparison option is on

## 14.8.5.21499 — Jul 26th, 2022

### New Features
- ZD-275263: Add support for T-SQL undocumented virtual column %%physloc%%

### Bug Fixes
- ZD-275762: Fix deployment script object existince checks, when source and target have column names that differ only in case.

## 14.8.3.21395 — Jul 5th, 2022

### Bug Fixes
- Fixes an issue with verifying server certificates when an explicit port number is set.

## 14.8.1.21249 — Jun 22nd, 2022

### Improvements
- Integer scale arguments for time data type columns, in scripts folders, outside the integer range of 0 to 7 will be read as the default scale value of 7 not 1

## 14.8.0.21190 — Jun 14th, 2022

### Improvements
- Upgraded to Microsoft.Data.SqlClient 4.1.0
- SQL Compare now encrypts connections to SQL Server by default Previously, connections would have been encrypted according to the server’s Force Encryption setting
- Setting an Application ID is no longer needed to connect using Azure Active Directory Universal with MFA authentication
- Linux command line timebomb doubled to 180 days

### Bug Fixes
- ZD-259302 ZD-273613: Fixed the reading of scale arguments for time, datetime2 and datetimeoffset types in scripts folder user defined type creation statements

## 14.7.7.21053 — May 24th, 2022

### New Features
- Option added to use CREATE OR ALTER statememnts when deploying to servers that support this feature

### Bug Fixes
- ZD-271345: Fixed an issue with recognising the data type of fields that are user defined types, in history tables of temporal tables

## 14.7.2.20940 — Apr 7th, 2022

### Bug Fixes
- ZD-269731: Fixed an issue where the Line Differences view shows a message about an incorrect license

### Improvements
- ZD-268685: When FIPS is enabled, encrypted objects are now correctly decrypted, when the option to do so is set

## 14.7.1.20862 — Mar 22nd, 2022

### New Features
- Add support for additional T-SQL built-in functions

## 14.7.0.20823 — Mar 16th, 2022

### New Features
- New options SchemaExistenceChecks, RoleExistenceChecks added to API.
- Added a SQL Prompt formatted diff view, using the current SQL Prompt formatting options. Requires SQL Prompt v10.11.5 or above. (_SQL Toolbelt or SQL Toolbelt Essentials license required_)

## 14.6.20.20708 — Mar 1st, 2022

### Improvements
- Delimit credential names for external data sources

## 14.6.19.20650 — Feb 22nd, 2022

### Bug Fixes
- ZD-256556: Fixed issue which caused data compression settings on partitioned temporal tables to not be read from scripts folders

## 14.6.18.20606 — Feb 15th, 2022

### Improvements
- ZD-264118: Stop rebuilding temporal tables and their history tables due to system named constraint and index name differences when the option “Ignore system named constraint and index names” is used

### New Features
- ZD-264035: SQL Compare can now deploy text objects containing line continuations when Add object existence checks is enabled

## 14.6.17.20533 — February 3rd 2022

### Improvements
- SQL Compare no longer uses migration scripts from the Custom Scripts folder when generating a deployment script

## 14.6.15.20403 — January 12th 2022

### New Features
- ZD-261847: Add support for T-SQL functions CURRENT_TIMEZONE_ID and TRANSLATE

### Improvements
- ZD-263527: A foreign key that references the key column(s) of an index will be correctly handled if that index changes in such a way as the only changes are in its non-key columns
- ZD-260221 Query on sys.parameters now runs WITH (NOLOCK)

## 14.6.14.20342 — December 22nd 2021

### Improvements
- Improved warning message when creating users without an associated login
- ZD-260221 More queries now run WITH (NOLOCK)

### New Features
- ZD-262581: Add support for T-SQL undocumented virtual column %%lockres%%

## 14.6.13.20238 — December 8th 2021

### Bug Fixes
- ZD-262649: Fixed parsing of file paths in bulk insert statements

## 14.6.12.20158 — November 29th 2021

### New Features
- To support automation environments, the SQL Data Compare command line now has an /allUsers flag that can be using when activating to allow it to be used by all users, including service accounts

## 14.6.10.20102 — November 10th 2021

### Bug Fixes
- ZD-260283: Fix object reference error in SQL Snapper when attempting to create a database snapshot

## 14.6.9.20059 — November 1st 2021

### New Features
- ZD-261137: Support for SQL Server 2019 differential backups fixed

## 14.6.8.20031 — October 26th 2021

### Bug Fixes
- ZD-256677: Fix issue of usages of AT TIME ZONE leading to comparison differences which do not change the function of scripts, but which do not go away after deployment.
- ZD-260222: Fix queries to use WITH (NOLOCK) consistently when reading database schema

## 14.6.7.20011 — October 18th 2021

### New Features
- ZD256971: Fix text diff view when an extended property is added or removed in the middle

### Bug Fixes
- ER-57: Fix null reference error when deploying from a snapshot file.
- ZD259357: Fixed issue in the project settings dialog where the username for a database using Active Directory universal with MFA auth could get copied over the other database’s username

## 14.6.5.19910 — September 27th 2021

### Improvements
- ZD-257212: Changes to role owners now get applied to scripts folders.

### Bug Fixes
- ZD-254395: Fix to failing deployment script when dropping a function that is referred to by a constraint.
- SC-11006, ER-55: Fixed a crash when loading a snapshot containing several external tables with the same name

## 14.6.4.19846 — September 20th 2021

### New Features
- ZD256698: Support for clustered columnstore indexes in scripts folders where sp_autostats has been set to OFF

## 14.6.3.19802 — September 16th 2021

### Improvements
- Upgraded to Microsoft.Data.SqlClient v3

### Bug Fixes
- Fixed Active Directory universal with MFA authentication

## 14.6.2.19746 — September 13th 2021

### Bug Fixes
- Fixed parsing of unicode strings in search properties and aliases

## 14.5.22.19589 — August 16th 2021

### Bug Fixes
- ZD-254361: Fixed broken table renaming technique.

## 14.5.21.19562 — August 9th 2021

### New Features
- When the RG_SC_CREATE_OR_ALTER environment variable is non-empty, SQL Compare Engine will script out text objects using the CREATE OR ALTER syntax for SQL Server versions that support it.

## 14.5.19.19515 — July 26th 2021

### Improvements
- Improved performance of reading from backup files

## 14.5.18.19506 — July 22nd 2021

### Bug Fixes
- ZD-254361: Fixed error ‘field change calculation failed in TableRebuildChecker’ when deploying in certain mapping scenarios.

## 14.5.15.19373 — July 5th 2021

### Improvements
- Changed default deployment script encoding to UTF-8

## 14.5.10.19206 — June 2nd 2021

### Improvements
- ZD-250030: Turning off system versioning on a table that is consumed by a security policy no longer results in an incorrect deployment script
- ZD-251135: STATISTICS_NORECOMPUTE=ON is no longer scripted out for columnstore indexes; instead sp.autostats is invoked

### Bug Fixes
- ZD-251196: Fixed a bug in deployment scripts using CURRENT_USER

## 14.5.9.19133 — May 24th 2021

### Bug Fixes
- Fixed help menu link

## 14.5.8.19095 — May 19th 2021

### Improvements
- Updated incorrect warning about in-memory tables in Azure SQL Databases.

## 14.5.5.18909 — April 27th 2021

### Improvements
- ZD-248719: Parser messages are now propagated to command-line output.

## 14.5.4.18843 — April 19th 2021

### Improvements
- Updated to Newtonsoft.Json 13

## 14.5.3.18766 — April 12th 2021

### Improvements
- Exception reports now go to Application Insights instead of Raygun

## 14.5.2.18630 — March 23rd 2021

### Improvements
- Register and CreateEmptyTarget methods have been moved from IDatabase to DatabaseFactory
- ZD-245196: Comparing a scripts folder with invalid static data now results in an error.

## 14.5.1.18536 — March 15th 2021

### Improvements
- SC-10973: The create scripts folder dialog no longer causes the UI to hang.

## 14.5.0.18430 — March 4th 2021

### New Features
- SQL Compare now supports PolyBase objects (external data source, external file format and external table)

### Improvements
- The create database dialog no longer fails when using SQL Server on Linux

## 14.4.23.18321 — February 22nd 2021

### Improvements
- ZD-245196: Deploying a full text catalog along with its owner will no longer duplicate the CREATE USER statement
- SC-10963: The /makescripts option on the command line no longer writes out migration blocks metadata for non-migration blocks databases

## 14.4.22.18256 — February 15th 2021

### Improvements
- SC-10959: SQL Compare now properly handles temporal tables on partition schemes

## 14.4.18.17935 — January 18th 2021

### Improvements
- SC-10308: Renaming a column included in a temporal table primary key will no longer produce an invalid deployment script

## 14.4.17.17847 — January 11th 2021

### Improvements
- ZD-242682: Deploying a memory optimized table type will now longer ignore indexes when the option is set

## 14.4.16.17770 — January 5th 2021

### New Features
- SC-10950: Extended properties representing sensitivity classifications are now treated as sensitivity classifications on versions of SQL Server that support the ADD SENSITIVITY CLASSIFICATION syntax

### Bug Fixes
- Fix a crash when opening the Server dropdown in SQL Snapper

## 14.4.15.17626 — December 14th 2020

### Improvements
- DifferenceFilter now exposes SaveToStream and LoadFromStream methods
- External tables are no longer erroneously registered as regular tables
- SC-10945: Role members are now sorted in the SQL view

## 14.4.14.17548 — December 7th 2020

### Improvements
- IDatabase.CompareWith now takes IDatabase instead of Database

## 14.4.13.17493 — November 30th 2020

### New Features
- SC-10946: Security policies now respect the “Add object existence checks” option

## 14.4.9.17070 — October 26th 2020

### Bug Fixes
- SC-10928: Fixed regression where static data could not be deployed to a table referenced by a system named foreign key.

### Improvements
- SC-6959: Comparing spatial indexes no longer gives false differences.

## 14.4.7.16962 — October 12th 2020

### Bug Fixes
- SQL Compare now generates correct update script when changing data type of PK column of temporal table

## 14.4.6.16906 — October 5th 2020

### Improvements
- SC-10919: Improved handling of SQL SET statements in scripts folders
- SC-4733: When the Ignore Permissions option is enabled, and a table is rebuilt, SQL Compare now restores its original permissions rather than deploying its original permissions

## 14.4.4.16824 — September 23rd 2020

### Improvements
- Static data differences are now correctly shown in the command line list of differences when using /include:staticdata

## 14.4.3.16779 — September 16th 2020

### New Features
- SC-10907: Amended script order when adding an IDENTITY field to a temporal table.

### Improvements
- SCA-2749: When comparing a scripts folder using /include:staticdata, SQL Compare Command Line will no longer compare data for tables without static data defined.

## 14.4.2.16694 — September 7th 2020

### Improvements
- SC-10906: SQL Compare no longer tries to recreate an existing clustered columnstore index when a column’s datatype is modified

## 14.4.1.16663 — September 2nd 2020

### Bug Fixes
- ZD-166228: Fixed “SQL Change Automation scripting error”

## 14.4.0.16632 — August 24th 2020

### Improvements
- Improved consistency between command line and UI behaviours

## 14.3.4.16598 — August 19th 2020

### New Features
- SC-10897: Fixed “Multi-module assemblies are not supported when loading from memory”

## 14.3.2.16501 — July 30th 2020

### Improvements
- The current highlighted row in the differences grid is deselected (de-highlighted, not unticked.) after a refresh.
- SC-10890: Azure AD users are now registered on an Azure SQL database
- SC-10891: When generating a script for a partition scheme change, an exception is no longer thrown

## 14.3.1.16487 — July 27th 2020

### Breaking Changes
- Spurious ‘Table rebuild fields dropped’ warnings are no longer displayed during a table rebuild

## 14.3.0.16423 — July 20th 2020

### Improvements
- Engine now uses Microsoft.Data.SqlClient instead of System.Data.SqlClient
- Engine now depends on SmartAssembly.Attributes package
- SQL Compare will now reject self-signed certificates when connecting over the internet to SQL Servers with force encryption enabled

### New Features
- SQL Compare command line on Linux now supports Azure Active Directory Password authentication

## 14.2.18.16317 — July 6th 2020

### Bug Fixes
- SC-10852: Fixed SQL Server version not being read from SSDT/SCA project file
- SC-10865: Fixed the filter pane behaviour when changing All Object Types.
- ZD160360: Fixed an occasional hang when comparing CLR assemblies.

### Improvements
- SC-10853: When rebuilding an index, the order of included columns is now respected

## 14.2.17.16188 — June 23rd 2020

### Improvements
- SQL Compare Engine no longer references RedGate.Reflector.Compare.

### Bug Fixes
- SC-10851: Fixed object existence check when changing between a SQL function and a CLR function
- Fixed an issue with registering scripts folders on Linux.

## 14.2.16.16006 — June 4th 2020

### Bug Fixes
- SC-10848: Fixed issue where saved passwords could be forgotten

## 14.2.15.15984 — June 1st 2020

### Bug Fixes
- Fixed Azure AD authentication when using the command line

## 14.2.14.15839 — May 18th 2020

### Improvements
- Removed SeparateTriggers option.
- SC-7052: Only warn about potential data loss when precision/scale has changed in a way that could lose data.

## 14.2.13.15781 — May 11th 2020

### Improvements
- Improved startup performance in cases where networking issues were delaying product start.

## 14.2.12.15739 — May 4th 2020

### Improvements
- ZD160292: In the diff view, permissions are now sorted by user and then by action.

## 14.2.11.15654 — April 29th 2020

### Improvements
- SC-10818: Stop trying to register triggers on tables we do not register when SeparateTriggers is specified in the options.

## 14.2.8.15465 — April 6th 2020

### Bug Fixes
- SC-10806 Fixed an issue that could occur while dropping tables with foreign keys with a scripts folder target

### New Features
- SC-10801: Fixed the case when a computed column is added to a temporal table.

## 14.2.5.15352 — March 16th 2020

### Bug Fixes
- SC-10797: Fixed a script ordering error when altering a queue with an event notification on it

### New Features
- SC-10798: Fixed support for newer SQL Server features (introduced in SQL Server 2016 or later) on Azure Managed Instances

## 14.2.4.15334 — March 5th 2020

### Bug Fixes
- Fix performance issue with large text objects when the “Ignore WITH element order” option is enabled.
- SC-10795: Fixed a crash when opening the Create Scripts Folder dialog

## 14.2.3.15242 — March 2nd 2020

### Improvements
- SC-10786: When dropping a user with a permission set on a built-in user from a scripts folder, the permission will now be removed from the built-in user

## 14.2.2.15139 — February 24th 2020

### Breaking Changes
- SC-10785: When dropping a column, clustered columnstore indexes on the table are no longer dropped

## 14.2.1.15041 — February 11th 2020

### Improvements
- SC-10773: Scripts folders containing Microsoft Database projects are now correctly recognized
- SC-10774: When using the “Don’t use transactions in deployment scripts” option, SQL Compare no longer includes a rollback statement at the end of the script
- SC-10777: Deploying a trigger change to a scripts folder no longer causes duplicate EXEC sp_settriggerorder statements
- SC-10776: When sys.sql_expression_dependencies claims a dependency against an object that does not exist in the database, SQL Compare now ignores the dependency and outputs an error to the logfile
- SC-10763: Scripts folders without a valid metadata file will now default to SQL Server 2019 instead of SQL Azure DB

## 16.0.14.28844 — 05 May 2026

### New Features
- ZD-355966: The Edit Filter Rules dialog now adds nested AND/OR clauses correctly.
- ZD-355509: Added support for SET TEXTSIZE -1 in stored procedure bodies.
- The Docker image base has changed from Ubuntu Noble to Alpine 3.23. If you use this image as a base for your own Dockerfile, you will need to update it to use Alpine-compatible commands (e.g. apk add instead of apt-get install).

### Improvements
- The Docker image base has been updated from Ubuntu Noble to Alpine 3.23, reducing image size and resolving security vulnerabilities in the base OS.

## 16.0.13.28757 — 21 April 2026

### Improvements
- ZD-354140: Ignore Collations option now works for memory-optimised tables on SQL Server 2016+

### New Features
- Support for the CURRENT_DATE keyword introduced in SQL Server 2025
- Support for JSON_ARRAYAGG and JSON_OBJECTAGG aggregate functions introduced in SQL Server 2025

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
<!-- fetched: 2026-07-06 | latest: 16.1.0.29116 (06 July 2026) -->

## 16.1.0.29116 — 06 July 2026

### Improvements
- SQL Data Compare command line now stops if your project’s WHERE clauses might have unintended side effects. Please pass /AllowDangerousWhereClauses as an option to compare anyway

## 16.0.19.29095 — 01 July 2026

### Improvements
- SQL Data Compare UI now shows a warning if your project’s WHERE clauses might have unintended side effects

### New Features
- Added Information as a valid /logLevel option in the command line tool.

## 16.0.18.29038 — 18 June 2026

### New Features
- Added Information as a selectable minimum log level in Help > Minimum log levels.

## 16.0.17.29004 — 03 June 2026

### Bug Fixes
- Fixed an issue so that a recomparison is not required after making a change to deployment behavior options.

## 16.0.11.28694 — 08 April 2026

### Improvements
- Modernized engine progress tracking

## 15.4.28.28077 — 14 November 2025

### New Features
- Support for SQL Server 2025. New SQL Server 2025 features may not function correctly.

## 15.4.27.28006 — 04 November 2025

### New Features
- Added support for SSMS 21 as an external SQL Editor

## 15.4.26.27858 — 02 October 2025

### Bug Fixes
- ZD-335741: Fixed an issue with “Use checksum comparison” option producing an “Object reference not set to an instance of an object” error
- Fixes incorrect exit code being returned when a licensing error occurs

## 15.4.24.29094 — 02 September 2025

### Bug Fixes
- ZD-338367: Fixed issue where the deploy now button is greyed out if the deployment script only deletes rows

## 15.4.18.28452 — 03 June 2025

### Bug Fixes
- ZD-332834 and ZD-328669: Fixed handling of DATETIMEOFFSET when the timezone triggers rolling over months

## 15.4.15.28277 — Apr 16th, 2025

### New Features
- ZD327775: Added improved error handling when comparing billions of rows

## 15.4.10.27977 — Feb 6th, 2025

### Bug Fixes
- ZD-325134: Fixed an issue with Data Compare unable to compare with unsupported data type.

## 15.4.6.27751 — Dec 19th, 2024

### Improvements
- SqlCompareExceptions now provide unredacted Message and ToString() values.

## 15.4.3.27665 — Dec 3rd, 2024

### Improvements
- Removed the Flyway option from the project dialog, as it had very low usage

## 15.4.2.27580 — Nov 22nd, 2024

### Improvements
- Updates the licensing client
- Allows tool to be used across user profiles on the same machine
- Prioritises licenses correctly

## 15.4.1.27450 — Nov 12th, 2024

### Bug Fixes
- Ensures the user has verified their email address as part of the login flow

## 15.4.0.27425 — Nov 11th, 2024

### Improvements
- Updated licensing with improved UI, integration, security, and trials. Read more at https://www.red-gate.com/blog/redgate-licensing-update
- *   Serial Keys have been retired.

## 15.3.12.27264 — Oct 15th, 2024

### New Features
- SQL Data Compare Engine no longer has a dependeny on Microsoft.Data.SqlClient. You may need to add this package to your project if you are using the SQL Data Compare Engine NuGet package.
- Added support for the SSMS20 editor

### Improvements
- Removed methods marked as Obsolete on public API that depended on Microsoft.Data.SqlClient.
- Removed .SSMS and .SSMS20 versions of the SQL Data Compare Engine NuGet package.

## 15.3.11.27029 — Sep 17th, 2024

### Improvements
- Removed dependency on System.Text.Json. When using the ComparisonSessionSerializer, you will now need to provide an implementation of IJsonSerializer.

## 15.3.10.26944 — Sep 12th, 2024

### Improvements
- Stability improvements for the UI

## 15.3.8.26171 — Jul 16th, 2024

### Improvements
- Changed the name of sqldatacompare.tar.gz to include the version number

## 15.3.6.25729 — May 8th, 2024

### Improvements
- ZD-308402: Data rows selection will now be preserved when swapping compare/synchronization directions.

## 15.3.4.25528 — Mar 26th, 2024

### Bug Fixes
- ZD-307150: Fixed issue when connecting to Azure SQL instance where an error occurred related to the loading of assembly Microsoft.IdentityModel.Abstractions

## 15.3.2.25249 — Feb 15th, 2024

### Improvements
- Upgraded to Microsoft.Data.SqlClient 5.1.5

## 15.3.1.25177 — Feb 6th, 2024

### Bug Fixes
- ZD-296925: Fixed an issue when comparing graph tables.

## 15.3.0.25068 — Jan 12th, 2024

### Improvements
- Upgraded to Microsoft.Data.SqlClient 5.1.4
- ZD-304352 Prevent table mappings from incorrectly reverting to default state when editing a project.

### New Features
- Added read-only support for Flyway projects, allowing you perform comparisons with Flyway on the left.

## 15.2.5.24669 — Dec 5th, 2023

### Improvements
- ZD-299431: Slightly reduced memory usage of the UI and engine.
- ZD-299431: Deployment script syntax highlighting is now disabled for scripts exceeding 300k lines for performance reasons.

### Bug Fixes
- ZD-299431: Fixed a memory leak in the SQL Data Compare UI, noticeable when refreshing large comparisons.
- ZD-299431: Fixed a crash on the pre-deploy Summary tab when toggling the grouping for large deploys.

## 15.2.1.24235 — Oct 31st, 2023

### Bug Fixes
- ZD-292086: Fixed an issue where Include checkboxes would re-tick themselves if multiple schemas had a table with the same name.

## 15.2.0.24040 — Oct 6th, 2023

### Improvements
- ZD-297510: Made the table mapping screens more responsive by significantly reducing the number of times they reprocess saved data.
- Note that the project Save button no longer grays out when there are no unsaved changes.

## 15.1.2.24012 — Sep 28th, 2023

### Improvements
- Update to licencing link in CLI output

## 15.1.0.23826 — 06 September 2023

### New Features
- Added link to licensing restrictions documentation in CLI output header

## 15.0.13.23797 — 29 August 2023

### Bug Fixes
- ZD-294648: Fixes misleading record Include checkbox behavior in Data Compare following a refresh/deployment. Checkboxes now reset to a ticked/un-ticked state, based on the object grid checkbox.

## 15.0.11.23723 — 08 August 2023

### Bug Fixes
- ZD-285053: Fixes an issue in the command line where options such as “TrustServerCertificate” in the server switches were not being used

## 15.0.9.23488 — May 30th, 2023

### New Features
- ZD-292465: Added SSMS19 to list of SQL editor options

## 15.0.8.23473 — May 23rd, 2023

### Improvements
- Upgraded to Microsoft.Data.SqlClient 5.1.1

## 15.0.7.23280 — Mar 14th, 2023

### Improvements
- “Encrypt” and “Trust server certificate” server connection checkbox values are now loaded with server connection details from server dropdown

## 15.0.6.23274 — Mar 7th, 2023

### Bug Fixes
- ZD-284324: Fixes a bug where an “Identical items are not deployed.”-error was incorrectly being raised when deploying to scripts folders

## 15.0.5.23181 — Feb 21st, 2023

### Bug Fixes
- ZD-285412: Fixed issue with table mappings not appearing when connecting through Azure MFA to a managed instance

## 15.0.4.23133 — Feb 14th, 2023

### New Features
- Added warning to command line clarifying which differences will be deployed

## 15.0.2.22953 — Jan 17th, 2023

### Improvements
- ZD-282763 “Encrypt” and “Trust Server Certificate” can now be specified on database connections with checkboxes, rather than the workround of manually appending connection string parameters to the server name

### Bug Fixes
- Fixed minor bugs relating to the handling of long file paths

## 15.0.1.22876 — Jan 11th, 2023

### New Features
- ZD-283578: Added “Dynamically override default save location when saving to a new location in the deployment script save dialog” option to application settings.

## 15.0.0.22793 — Dec 20th, 2022

### New Features
- SQL Server 2022 support
- UI displays a warning that support for SQL Server 2008 and SQL Server 2008R2 will be removed in a future version

### Improvements
- UI displays a warning when an unsupported scripts folder is selected

## 14.10.8.22508 — Nov 24th, 2022

### New Features
- Added support for long file paths in windows when enabled in the windows registry (We cannot guarantee how it will work with windows and other applications as it does not seem well supported)

## 14.10.6.22196 — Nov 3rd, 2022

### Improvements
- SQL Compare will no longer install the Microsoft Active Directory Authentication Library (ADAL) as a pre-requisite as it is superseded by MSAL

## 14.10.4.22065 — Oct 11th, 2022

### Improvements
- Upgraded to Microsoft.Data.SqlClient 5.0.1

### Bug Fixes
- ZD-277198: Fixed missing dll reference that appears when attempting Azure authentication

## 14.10.0.21773 — Sep 13th, 2022

### New Features
- Beta support for SQL Server 2022 Preview. New SQL 2022 features may not function properly.

## 14.9.0.21563 — Aug 10th, 2022

### Improvements
- ER-71: Change to the process by which static data is written to scripts folders in order to improve ordering consistency.

## 14.8.4.21440 — Jul 19th, 2022

### Bug Fixes
- ZD-274628: Fixed deploying changes to an edge table that has an identity column as its primary key

## 14.8.3.21395 — Jul 5th, 2022

### Bug Fixes
- Fixes an issue with verifying server certificates when an explicit port number is set.

## 14.8.0.21190 — Jun 14th, 2022

### Improvements
- Upgraded to Microsoft.Data.SqlClient 4.1.0
- SQL Data Compare now encrypts connections to SQL Server by default Previously, connections would have been encrypted according to the server’s Force Encryption setting
- Setting an Application ID is no longer needed to connect using Azure Active Directory Universal with MFA authentication
- Linux command line timebomb doubled to 180 days

## 14.7.7.21053 — May 24th, 2022

### Bug Fixes
- ZD-269383 Fixed an issue with sorting order of data in a scripts folder, with UTF8 collations

## 14.7.6.21017 — May 17th, 2022

### Bug Fixes
- ZD-269383 Fixed an issue with comparison and deployment of data containing accented characters in char/varchar/text columns, with Latin1_General_100_CS_AS_SC_UTF8 and similar _100_ collations

## 14.7.2.20940 — Apr 7th, 2022

### Improvements
- ZD-268685 When FIPS is enabled, encrypted objects are now correctly decrypted, when the option to do so is set

## 14.6.14.20342 — December 22nd 2021

### Improvements
- ZD-260221 More use of WITH (NOLOCK) on DMV queries

## 14.6.12.20158 — November 29th 2021

### New Features
- To support automation environments, the SQL Compare command line now has an /allUsers flag that can be using when activating to allow it to be used by all users, including service accounts

## 14.6.9.20059 — November 1st 2021

### New Features
- ZD-261137: Support for SQL Server 2019 differential backups fixed

## 14.6.7.20011 — October 18th 2021

### Bug Fixes
- ZD259357: Fixed issue in the project settings dialog where the username for a database using Active Directory universal with MFA auth could get copied over the other database’s username

## 14.6.3.19802 — September 16th 2021

### Improvements
- Upgraded to Microsoft.Data.SqlClient v3

### Bug Fixes
- Fixed Active Directory universal with MFA authentication

## 14.6.0.19635 — August 19th 2021

### Improvements
- Previously, when comparing two decimal fields with a different number of decimal places, in which a number in the source was different to the number in the target, but equal after rounding, we would not list that as a difference. This behaviour has now been changed so that these will be shown in the list of differences.

## 14.5.20.19533 — August 2nd 2021

### Improvements
- sql_variant fields with a NULL value now show as ‘<NULL>’ instead of ‘Null’, to be consistent with other data types

## 14.5.19.19515 — July 26th 2021

### Improvements
- Improved performance of reading from backup files

## 14.5.17.19461 — July 19th 2021

### Improvements
- ZD-252839 - Respect the users decision of turning off some default DCE options

## 14.5.15.19373 — July 5th 2021

### Improvements
- Changed default deployment script encoding to UTF-8
- Changed default CSV report encoding to UTF-8

## 14.5.9.19133 — May 24th 2021

### Bug Fixes
- Fixed help menu link

## 14.5.5.18909 — April 27th 2021

### Improvements
- ZD-248719: Parser messages are now propagated to command-line output.

## 14.5.4.18843 — April 19th 2021

### Improvements
- Updated to Newtonsoft.Json 13

## 14.5.3.18766 — April 12th 2021

### Improvements
- Exception reports now go to Application Insights instead of Raygun

## 14.5.2.18630 — March 23rd 2021

### Improvements
- ZD-247451: Respect command line parameters MaxTransactionSizeDB and TransactionIsolationLevel

## 14.4.23.18321 — February 22nd 2021

### Improvements
- SC-10963: The /makescripts option on the command line no longer writes out migration blocks metadata for non-migration blocks databases

## 14.4.14.17548 — December 7th 2020

### Bug Fixes
- Fixed a NullReferenceException when deploying to a scripts folder with a missing target of a foreign key

## 14.4.12.17429 — November 25th 2020

### Improvements
- The DoNotOutputCommentHeader option is now respected in the SQL Data Compare command line
- ZD194840: SQL Data Compare UI now applies selections correctly when Include Identical Values In Results is ticked

## 14.4.10.17174 — November 3rd 2020

### Improvements
- SDC-3100: The /Include:Additional command line switch will no longer include rows that are present in the source

## 14.4.0.16632 — August 24th 2020

### Improvements
- Improved consistency between command line and UI behaviours

## 14.3.1.16487 — July 27th 2020

### Improvements
- Checksum comparison now works against read-only databases

## 14.3.0.16423 — July 20th 2020

### Improvements
- Engine now uses Microsoft.Data.SqlClient instead of System.Data.SqlClient
- Engine now depends on SmartAssembly.Attributes package
- SQL Data Compare will now reject self-signed certificates when connecting over the internet to SQL Servers with force encryption enabled

### New Features
- SQL Data Compare command line on Linux now supports Azure Active Directory Password authentication

## 14.2.16.16006 — June 4th 2020

### Bug Fixes
- SC-10848: Fixed issue where saved passwords could be forgotten

## 14.2.15.15984 — June 1st 2020

### New Features
- SDC-1451: When reading from a backup file, not null columns added with a default value are now read correctly

### Improvements
- When reading from a backup file, sql_variant columns containing time, datetime2, or datetimeoffset values are now read correctly

## 14.2.11.15654 — April 29th 2020

### Bug Fixes
- SDC-2992: Fixed partial deployments to scripts folders

## 14.2.1.15041 — February 11th 2020

### Improvements
- SDC-3027: Columns with incompatible data types that get automapped no longer prevent comparisons
- SC-10773: Scripts folders containing Microsoft Database projects are now correctly recognized
- SDC-3029: Some custom comparison keys no longer cause tables to be excluded from the comparison

## 14.2.0.14846 — January 29th 2020

### New Features
- SQL Data Compare now supports Azure Active Directory Interactive Authentication

## 14.1.8.14471 — January 7th 2020

### Improvements
- SDC-3019: Where clause editor is now disabled for incompatible data sources
- The open projects button no longer exhibits erroneous dropdown behavior

## 14.1.6.14245 — December 16th 2019

### Improvements
- Azure Managed Instances can now take backups before deployment to a supplied URL.

## 14.1.5.14025 — December 2nd 2019

### Improvements
- SQL Data Compare will now install the Microsoft Active Directory Authentication Library if it is required

## 14.1.3.13888 — November 18th 2019

### Improvements
- SDC-3004: The command line no longer attempts to deploy tables with no comparison key

## 14.1.2.13797 — November 11th 2019

### Improvements
- SC-10654: Launching SSMS 18 from SQL Data Compare now behaves correctly when using SQL Authentication

## 14.1.1.13725 — November 5th 2019

### New Features
- You can no longer add a backup statement to a script that is immediately run on an Azure server, which would always cause the script to fail.
- ‘master’ no longer appears on the database list for Azure SQL Database and we no longer allow you to register it, as it is not really a full database and may have unexpected behaviour.

### Improvements
- SDC-2997: We no longer deselect the whole table when you have a column deselect in your project which doesn’t match any registered columns, because this was causing us to deselect tables where the column was hidden by an option e.g.ignore timestamp columns.
- SQL Data Compare no longer attempts to connect to an Azure SQL Database to check SQL Backup install status or do folder browsing, neither of which work on Azure SQL Database.

## 14.1.0.13605 — October 28th 2019

### Improvements
- Improved error messages around Azure Active Directory authentication.
- Improved labelling of authentication types to make it clearer which ones are only applicable to on-prem or Azure SQL Database connections.

## 14.0.6.13387 — October 14th 2019

### Improvements
- Enabled sharing of recently used servers with other Redgate products

## 14.0.5.13297 — October 7th 2019

### Improvements
- SC-10056: Server combobox in the live database connection form now correctly updates when clicking the swap sides button

## 14.0.3.13106 — September 23rd 2019

### Improvements
- SQL Data Compare command line is now available as a linux container on Docker Hub
- Command line on Linux now logs to the /logs directory

## 14.0.2.13006 — September 16th 2019

### Improvements
- SDC-2986: The deployment progress dialog will now only display the last element in a batch

## 14.0.1.12901 — September 9th 2019

### Improvements
- Server retrieval in connection dialog now retrieves local server instances more comprehensively

## 13.8.0.12703 — August 27th 2019

### Improvements
- Faster script parser - scripts folders should load data much faster from all tables.

### New Features
- New command line error code - 60 - for the state where there are no comparable tables/views. This would previously have returned error code 63, which now only covers identical databases.

## 13.7.21.12250 — July 31st 2019

### Improvements
- SDC-2976: Stop mappings list entirely refreshing itself and resetting scroll position to the top when e.g.column selection edits are made
- SOC-9937: Improved handling of static data for unusual table names

## 13.7.20.12175 — July 29th 2019

### Bug Fixes
- Fixed a crash when SQL contains hundreds of nested parentheses.

## 13.7.19.12066 — July 22nd 2019

### Improvements
- Tables that had no available comparison key, and hence could not be compared, are now displayed in command line output with the string ‘No PK or UQ’ in the ‘Records’ column and ‘x’ in the DB1 and DB2 columns, rather than entirely ignored. Similarly, tables with no data in will be displayed with the string ‘No data’ in the ‘Records’ column and ‘x’ in the DB1 and DB2 columns. These will only appear if /Include:Identical is specified, as they can’t form part of a deployment.

## 13.7.18.11916 — July 15th 2019

### Improvements
- SDC-2763: You can now bring up the difference viewer more easily when you edit a project with only one table/view and re-compare

## 13.7.16.11325 — June 13th 2019

### New Features
- SDC-2955: New projects will now get a new set of table / schema mappings, rather than reusing the previous project’s mappings if the data sources matched.

## 13.7.8.10109 — April 1st 2019

### Improvements
- SDC-2938: Data compare command line no longer throws away options in the project file when using the project switch

## 13.7.7.10021 — March 26th 2019

### Improvements
- Removed remaining vestigial dependency on SMO package.
- SQL Data Compare Engine now dual targets both net461 and netstandard2.0. Please note that netstandard2.0 versions of the Compare and Data Compare engines are not really ready for use in anger.

## 13.7.6.9920 — March 18th 2019

### Improvements
- RedGate.SQLCompare.ASTParser NuGet package has been updated to include both net461 and netstandard2.0 content.
- Removed dependency on Microsoft.SqlServer.ManagementObjects NuGet package.
- SQLite dependency upgraded to version 1.0.110

## 13.7.5.9811 — March 11th 2019

### Improvements
- Engine NuGet packages now have the packaged assemblies delivered in the lib\net461 folder, rather than the lib folder directly.

## 13.7.3.9483 — February 20th 2019

### Improvements
- SDC-1639: Transaction isolation level can now be specified

## 13.7.2.9407 — February 18th 2019

### Improvements
- The ongoing migration of our project files to the VS 2017 format may introduce subtle changes to the various Compare and Data Compare NuGet packages.
- The RedGate.SQLCompare.ASTParser and RedGate.SQLCompare.Engine NuGet packages now include some previously missing NuGet package dependencies. These may potentially result in downstream dependency conflicts.
- SDC-2927: Concatenated strings in static data can now be parsed

### Bug Fixes
- SDC-2930: Fixed a code path where certain deployment options could be ignored

## 13.7.0.9250 — February 7th 2019

### Improvements
- SDC-2906: Worked around a Windows Installer error that caused Microsoft.SqlServer.Management.SqlParser.dll to be removed when upgrading SQL Data Compare.

### New Features
- SDC-2925: Rows on node tables are now added before rows on edge tables, and vice versa when deleting rows

## 13.6.14.9174 — February 4th 2019

### Improvements
- Additional logging of .NET assembly loading to help investigate SDC-2906.

## 13.6.11.8947 — January 23rd 2019

### Bug Fixes
- Fixed an issue with SOC integration

## 13.6.8.8602 — January 8th 2019

### Breaking Changes
- Minor script ordering change - constraint and key nocheck and drop statements will now group slightly differently (check constraints are now in their own section rather than mixed in with primary, unique and foreign keys)

### Bug Fixes
- SDC-2914 Fixes comparison between TINYINT and NUMERIC(x,y) columns

## 13.6.3.8160 — November 12th 2018

### Improvements
- SDC-2889: Stop Data Compare from creating an additional folder in the scripts data when generating a deployment script
- SDC-2889: As part of 2889 above I renamed DisposeOfSyncInfo to DisposeOfExecutionBlock which is called twice from SQLSourceControl

### Bug Fixes
- SOC-9648: Fixed issue where DataFileSet is not updated when using Synchronise

## 13.6.2.7987 — October 23rd 2018

### Improvements
- SDC-2747: When resizing the comparison key window in a mapping dialog, the scrollbar no longer disappears
- The SQL Data Compare UI build now runs the Compare Engine through SmartAssembly

### Bug Fixes
- SDC-2894: The command line now exits with the correct exit code when the license is invalid

## 13.5.1.7638 — September 24th 2018

### Improvements
- SDC-2884 - MissingIn2AsInclude command line option now includes key columns again in output script

## 13.4.8.7337 — September 3rd 2018

### Improvements
- The SQL Data Compare Engine package now directly references Microsoft.SqlServer.SqlManagementObjects insead of relying on a transitive reference through SQL Compare Engine.
- SQL Data Compare now correctly outputs server name as part of the source and target databas names in CSV report exported from the command line

## 13.4.6.7079 — August 13th 2018

### Improvements
- SDC-2861: Reduce re-registrations in the edit project dialog

## 13.4.4.6883 — July 24th 2018

### New Features
- SDC-1262 Option to include a USE <databaseName> statement added, consistent with SQL Compare

## 13.4.2.6669 — July 2nd 2018

### Improvements
- SDC-2833: Dropping an index linked via a foreign key to a table that is not selected for deployment will now ensure the foreign key dependency is respected

## 13.4.0.6563 — June 20th 2018

### Improvements
- SDC-2862: If “WHERE” is included in a where clause, it no longer causes a broken update script

## 13.3.8.6436 — June 11th 2018

### Improvements
- SQL Data Compare more consistently compares data from a scripts folder when using a VARCHAR comparison key.

## 13.3.6.6375 — June 4th 2018

### New Features
- SDC-2857: Add option to include generated always columns in the comparison

### Improvements
- SDC-2844: Update collations to use Microsoft library to improve consistency
- Performance improvements when populating indexes from a database

## 13.3.5.6244 — May 23rd 2018

### Improvements
- Telemetry has been updated in accordance with the privacy policy available at https://www.red-gate.com/website/legal

## 13.3.4.6198 — May 17th 2018

### Improvements
- Redgate.*.Obfuscated packages no longer built
- SDC-2843: SQL Data Compare command line won’t throw an error when an unmapped column that doesn’t exist in the source is excluded on the command line

## 13.3.2.5875 — April 17th 2018

### Breaking Changes
- SDC-2826: The ‘Drop primary keys, indexes, and unique constraints’ option no longer drops unique ROWGUIDCOL indexes on tables that include a FILESTREAM field.

### Improvements
- SC-10036: The SQL Data Compare command line will no longer fail when there is whitespace between options in an XML argument file

## 13.3.1.5775 — April 9th 2018

### Improvements
- SQL Data Compare command line now includes switches /activedirectory1 and /activedirectory2 to specify the use of Azure Active Directory authentication
- SDC-2799: The Reseed identity columns option now sets the current seed of the target to the current seed of the source when possible

## 13.2.4.5728 — March 23rd 2018

### Improvements
- Differences.Remove() has been renamed to Filter(). Difference objects passed to this method will have their Selected property set to false.

## 13.2.1.5640 — March 1st 2018

### Improvements
- Bulk uninstaller improvements

## 13.1.9.5540 — January 16th 2018

### Bug Fixes
- SDC-2798: Fixed some incorrect script comments regarding SQL Graph EGDE tables.

## 13.1.8.5525 — January 8th 2018

### Improvements
- Integrates the Redgate bulk uninstaller

## 13.1.7.5470 — December 11th 2017

### Bug Fixes
- SDC-2788: Fixed a memory leak during deployment.

## 13.1.6.5463 — December 5th 2017

### Bug Fixes
- SC-9683: Fixed display of warning message text, which was invisible for some .NET 4.7 users

### Improvements
- SQL Data Compare Command Line now runs in 64-bit mode by default

## 13.1.3.5405 — November 14th 2017

### Bug Fixes
- SDC-2764: Fixed a Windows Clipboard interaction bug when choosing which server to connect to

## 13.1.0.5287 — October 16th 2017

### Improvements
- SDC-2745: Display pseudo column names for column headers instead of the full column name
- SC-8880: Scripts folders can now be in the root of a drive (as long as it is otherwise empty)

### Bug Fixes
- SDC-2753: Fixed a crash at the start of the Deployment Wizard

## 13.0.6.5248 — October 9th 2017

### Improvements
- SC-9740: Ensured that warning messages correctly show a title next to the icon

## 13.0.5.5219 — October 2nd 2017

### Improvements
- SQL Data Compare now requires .NET 4.6.1
- Improved the installer UI for SQL Data Compare

## 13.0.3.5144 — September 19th 2017

### Bug Fixes
- SC-9175: fix an issue where incorrect credentials could be used when registering, after typing server names into the connection dialog.

## 13.0.2.5109 — September 11th 2017

### Improvements
- SQL Data Compare now lists SQL Server Management Studio 17 as a default script editor
- SQL Data Compare now remembers passwords in the Windows Credential Store, as well as the project file.

## 13.0.1.5078 — September 4th 2017

### Improvements
- SQL Data Compare Engine now targets .NET 4.0 instead of .NET 3.5
- SC-9662: The command line now displays your serial number correctly

### Bug Fixes
- SDC-2639: Fixed a crash when performing checksum comparisons

## 13.0.0.5057 — August 29th 2017

### Breaking Changes
- SDC-2555, SDC-2199, SDC-2224: SQL Data Compare now drops foreign keys to allow other indexes to be dropped

## 12.4.11.5008 — August 21st 2017

### Improvements
- SDC-2557: Remove “Create a SQL Compare snapshot” as a backup target option since it doesn’t perform any operations

## 12.4.9.4945 — July 31st 2017

### New Features
- SC-9335: SQL Data Compare now supports Azure Active Directory authentication with integrated and password authentication methods. These options are available in the ‘Authentication’ dropdown in the ‘Database’ section of the ‘Edit project’ window. Note that this feature requires .NET 4.6 and adalsql.dll to be installed; see https://docs.microsoft.com/en-us/azure/sql-database/sql-database-aad-authentication-configure#configure-your-client-computers for more details

### Bug Fixes
- SDC-2556: Fixed a crash when recomparing data after a deployment

## 12.4.8.4926 — July 26th 2017

### Improvements
- SDC-2553: Data Compare no longer crashes when attempting to view the comparison key or column mapping dialogs

## 12.4.7.4905 — July 13th 2017

### Improvements
- SC-9509: The ‘Export CSV files’ menu item will now be enabled after comparing a project from the ‘My projects’ window using the ‘Compare now’ option
- SC-9514: Switching deployment direction will no longer cause the currently selected table to be deselected

### Bug Fixes
- Fixed an issue where cancelling a comparison at a specific moment could cause SQL Data Compare to hang

## 12.4.3.4752 — June 20th 2017

### Improvements
- SC-9494: SQL Compare will no longer truncate extra long warnings in the deployment wizard
- SDC-2502: SQL Data Compare should now correctly preserve newline characters in multiline strings in the deployment script

### Bug Fixes
- SDC-2509: Fixed a bug which could cause the ‘Selected X of Y’ count in the results grid to get out of sync after refreshing the comparison.

## 12.4.2.4681 — June 7th 2017

### Improvements
- SDC-2548: SQL Data Compare can now hide columns with no different values, even if inserted and deleted values exist

### Bug Fixes
- SC-9437: Fixed a bug which could cause some rows in the My Projects dialog to not render correctly when there were some invalid project files in the displayed folder

## 12.4.1.4639 — May 30th 2017

### New Features
- The authentication type for databases (Windows/SQL Server) is now specified as a dropdown. This allows more authentication types to be added in the future.

### Bug Fixes
- SDC-2547: Fixed an error displaying columns in the correct order when switching between tabs in the differences grid.
- SC-9404: Fixed a bug which prevented the saved sort order in the My Projects dialog from being applied correctly
- SC-9456: Fixed some high-DPI display issues in the deployment wizard ‘Deployment method’ settings that occurred when the windows UI scale was set to 250% or greater
- SC-9474: Fixed some high-DPI display issues in the deployment wizard title bar

### Improvements
- SDC-2507: When selecting columns for comparison, all selection will now be saved rather than only those that are visible using the “Find” function.
- SC-9439: The “Edit selected file” button on the “Error parsing scripts” dialog will now correctly launch the selected editor

## 12.3.3.4490 — May 8th 2017

### Improvements
- The “My Projects” window can now be opened from the toolbar
- The ‘Use checksum comparison’ and ‘Treat empty string as NULL’ options can now be used together. Comparing a NULL value and empty string will cause the table checksums to be different, but Data Compare should then treat these values as equal when comparing the tables.
- SC-9399: When using the SQL Source Control data source, progress updates will now be displayed while the requested revision of the scripts folder is being checked out.

## 12.3.2.4426 — April 26th 2017

### Improvements
- SDC-2459: Data Compare no longer matches on all columns when custom comparison keys are used, and no keys are repeated.

### Bug Fixes
- SDC-2505: Fixed a bug that could prevent Data Compare from scripting out some INSERT/DELETE statements when not all rows were selected and the deployment direction was reversed.

## 12.3.1.4383 — April 12th 2017

### Bug Fixes
- Fixed a silent crash on start up that could occur when upgrading from SQL Data Compare 12.2.3 or 12.2.4

## 12.3.0.4373 — April 10th 2017

### Improvements
- SQL Data Compare can now register SQL Server vNext backups and scripts folders
- SDC-2485: DateTime data is now formatted consistently in the differences grid.
- SC-9339: The size of the My Projects dialog is now saved between sessions

### New Features
- SDC-2493: Regular expressions are now supported when using the excludecolumns and includecolumns switches in the command line.

## 12.2.4.4299 — March 30th 2017

### Improvements
- SC-9066: It is now possible to compare to a historical git revision (Requires SQL Source Control 5.5.4 or later)
- SDC-2383: Individual cells in the Data Compare differences grid are now highlighted only when they contain a difference.
- SC-9374, SC-9376: Choosing ‘HEAD’ as the source control revision no longer causes a ‘Value cannot be null’ error in the UI or command line

## 12.2.2.4140 — March 13th 2017

### Improvements
- SC-9338: The My Projects dialog will now remember the previous sort ordering
- SDC-2448: Improved warning messages around referential integrity.
- SC-9204: Filenames are no longer truncated in the deployment wizard when updating a scripts folder
- SC-8944: Improved the title bars of various dialogs in high DPI mode

## 16.0.14.28844 — 05 May 2026

### New Features
- Add an option to include existence checks when generating insert statements
- The Docker image base has changed from Ubuntu Noble to Alpine 3.23. If you use this image as a base for your own Dockerfile, you will need to update it to use Alpine-compatible commands (e.g. apk add instead of apt-get install).

### Improvements
- The Docker image base has been updated from Ubuntu Noble to Alpine 3.23, reducing image size and resolving security vulnerabilities in the base OS.

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
