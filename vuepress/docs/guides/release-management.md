# Release management

Release management handles the processes around managing, planning, scheduling, and controlling a software change through deployment and testing across various environments.

::: tip NOTE
The processes described in this section represent best practices and act as recommendations for organizations fulfilling a Hub Operator role.
:::

## Release components and environments

When releasing new code from development to production, the code is taken through a series of testing activities in various environments. The recommended environment setup comprises of multiple environments all serving different purposes, as depicted in the diagram below.

![Recommended environment setup](/release_mgmt.png)

A client-specific implementation of the Hub is built on a number of service components (Mojaloop OSS, extensions or other components, potential customizations), and releases will include new releases or bug fixes of all of these components. 

![Service component releases](/release_service_components.png)

## Development and testing (Definition of Done)

Standard development and QA practices – followed by Mojaloop – include the following as part of the Definition of Done. The recommendation is for the Hub Operator to adopt a similar strategy. 

* Unit tests developed for every piece of code written.
* Code, unit tests, and documentation have been peer reviewed.  
* Integration tests have been developed and executed.
* Full regression tests have been executed successfully on commit (merge to master branch). 
* Release notes have been created with the following details: 
    * Description of changes 
    * List of changed components/services
    * List of user stories and bugs in the release
    * Highlight of any fundamental (breaking) changes impacting any functionality, API solution, or system architecture
* Deployment runbook created, with deployment and rollback instructions including environment variables and deployment prerequisites.
* Handover/knowledge transfer of any new or significant changes to functionality, products, architecture, and so on, from the Product Delivery (= Development) team to the Operations team. This handover includes full review of the deployment runbook and other release artifacts, such as release packages and database scripts.

## Mojaloop releases

The standard practice for Mojaloop releases is as follows:

* All new versions of the individual applications, components, and microservices that make up Mojaloop, are available via Helm charts in the public repositories here: <https://github.com/mojaloop/helm/releases>
* Unit tests and some functional integration tests are produced with each component version.
* The Mojaloop release also includes automated end-to-end regression tests. Test suites are versioned, with the version number corresponding to the version number of the Mojaloop release. 
* A release package is produced, once every Program Increment (PI), for new versions of Mojaloop. This includes upgrades to individual applications, components, and microservices within Mojaloop. \
\
A Program Increment is a timeboxed interval during which an Agile team delivers incremental value.
* All Mojaloop maintenance updates, new features, and bug fixes are made available to users of Mojaloop as part of the release cycles, once in each PI period.

## Product releases of extensions/additional components

It is expected that the standard practice for the product releases of extensions/additional components is as follows:

* All new product versions are made available via release packages and described within the release notes.
* A release package includes automated end-to-end tests for each product release. Test suites are versioned, with the version number corresponding to the version number of the product release.
* Product releases are in line with the Mojaloop release cadence, once in each PI period.
* All product maintenance updates, new features, and bug fixes are made available to users of extension/additional products as part of the release cycle, once in each PI period.

## Bugs and hotfixes

Bugs and hotfixes are handled in the following way:

* All bug fixes (both Mojaloop and other products) are included in the release packages.
* Likewise, hotfixes are also provided via a release. It is not recommended to deploy hotfixes directly from the specific application package releases, as deploying only a single component of a release (as opposed to deploying the release that includes the updated component) can result in the Hub being out of sync with the application package release.
* Bugs are tracked, managed, and prioritized as defined in the [defect triage process](defect-triage.md): 
    * The Service Desk tool is used for managing all bugs. 
    * A Triage team with representatives from both Mojaloop and other Product Delivery and Product Management teams are involved in analyzing urgency and impact to determine prioritization of bugs, including resolution planning/scheduling and communication back to the Hub Operator.

## Environments and QA strategy

In order to validate the deployment of the Mojaloop release against the latest other products, a temporary environment is required to be set up. This allows the Mojaloop Support team (a team dedicated to providing operative services to operators of a Mojaloop Hub) to carry out the deployment and testing of Mojaloop releases against the latest versions of other products. 

::: tip NOTE
The temporary environment that the Mojaloop Support team use for validation should follow a standard infrastructure. This standard infrastructure may differ from the infrastructure that the Hub Operator uses. The Operator must either ensure they have up-to-date information about the differences at all times, or choose to set up their infrastructure so it is fully in sync with the Mojaloop Support team's infrastructure standards.
::: 

Following the successful deployment and validation of a release on the standard infrastructure and architecture, and after successfully running the latest version of Mojaloop and other products, the release is approved and can be scheduled for deployment into the Hub Operator's (potentially bespoke) Development environment. 

The QA strategy employed by the Mojaloop and other Product Delivery teams ensures that new code of each and every service component has undergone comprehensive testing before it gets released. The QA strategy of the Mojaloop Support team, on the other hand, should focus on validating the deployability of the integrated service components, guaranteeing that there is a working Mojaloop Switch, which then can be deployed in a Hub Operator's environment.

## Release process

The recommendation for Hub implementations is to stay in line with the Mojaloop release cadence of one release every PI period and avoid deploying individual changes directly from the master branch of specific applications, components, or services within Mojaloop. This recommendation ensures that the integrity of the applications remains cleaner and in line with the source repositories. 

The Mojaloop Support team should schedule a new release for every PI, in line with the Mojaloop and other product release cadence. Hub Operators are informed about the target release date well ahead of time.

For every release, the Mojaloop Support team is recommended to take the following steps:

1. The Mojaloop Support team review all release artifacts including release notes, associated documentation and deployment runbook as soon as they are made available. 
1. The Mojaloop Support team conduct deployment and validation of the planned Mojaloop and other product releases in a temporary Mojaloop Support environment (using the standard Mojaloop Support infrastructure but matching the client's – that is, the Hub Operator's – application versions). 
1. Following the successful deployment and validation of a release on the standard Mojaloop Support infrastructure and architecture, and after successfully running the latest version of Mojaloop and other products, the release is approved and can be scheduled for deployment into the Hub Operator's Development environment.
1. The Mojaloop Support team confirm readiness (and optionally, target deployment window) for the deployment into the Hub Operator's Dev environment. \
\
It is the Hub Operator's responsibility to carry out deployment into the Development environment and subsequent validation. Alternatively, they can request Mojaloop Support to perform these activities on their behalf. \
\
The Mojaloop Support team sends out an email (or any other form of communication depending on the Hub Operator’s preferences) with information on the target release date and the range of features included in the release. If the Hub Operator requests the Mojaloop Support team to perform deployment into their Development environment, then communication includes information about the deployment window too. Following deployment, further communication is sent out to confirm that the deployment has been carried out, validated, and the deployment window has closed.
1. It is the Hub Operator's responsibility to take the release to higher environments and proceed with the acceptance of the release.

![Mojaloop and other components release cycle](/release_process.png)