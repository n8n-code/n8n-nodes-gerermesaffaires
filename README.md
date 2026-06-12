# @n8n-dev/n8n-nodes-gerermesaffaires

![gerermesaffaires Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-gerermesaffaires.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-gerermesaffaires)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing gerermesaffaires API integrations by hand.**

Every time you connect n8n to gerermesaffaires, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to gerermesaffaires took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-gerermesaffaires
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-gerermesaffaires`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **gerermesaffaires API** → paste your API key
3. Drag the **gerermesaffaires** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Default</b> (269 operations)</summary>

- Get Box Menus
- Get Business Groups
- Patch Business Groups
- Post Business Groups
- Get Business Groups All
- Get Business Groups Spaces
- Delete Business Groups Spaces
- Post Business Groups Spaces Legal Entities Customers Guest In Space
- Post Business Groups Spaces Legal Entities Customers Spaces
- Get Hub Business Groups Menus
- Post Hub Documents
- Get Hub Menus
- Get Hub Menus All
- Post Hub Payslips
- Post Hub Spaces Documents
- Get Hub Spaces Menus
- Post Hub Spaces Payslips
- Get Menus
- Post Menus Documents
- Get Profile
- Patch Profile
- Post Profile
- Patch Profile Email
- Get Profile ID File
- Patch Profile Mobile
- Get Registration
- Post Registration
- Get Session
- Get Spaces
- Post Spaces
- Get Spaces All
- Delete Spaces
- Patch Spaces
- Get Spaces Accounting Year
- Post Spaces Accounting Year
- Get Spaces Collective Decision
- Post Spaces Collective Decision
- Get Spaces Company Entities
- Post Spaces Company Entities
- Get Spaces Company Entities All
- Patch Spaces Company Entities
- Get Spaces Company Entities Details
- Post Spaces Company Entities Details
- Delete Spaces Company Entities Details
- Post Spaces Documents Download
- Get Spaces Folders Persons
- Patch Spaces Folders Persons
- Patch Spaces Folders Persons Activeaccess
- Patch Spaces Folders Persons Unactiveaccess
- Post Spaces Folders Persons Guest In Space
- Get Spaces Groups
- Post Spaces Groups
- Get Spaces Groups All
- Patch Spaces Groups
- Delete Spaces Groups Folders
- Patch Spaces Groups Folders
- Delete Spaces Groups Persons
- Patch Spaces Groups Persons
- Get Spaces Legal
- Patch Spaces Legal
- Get Spaces Logo
- Get Spaces Persons
- Post Spaces Persons
- Get Spaces Persons All
- Patch Spaces Persons Player
- Delete Spaces Persons
- Patch Spaces Persons
- Get Spaces Persons Details
- Post Spaces Persons Details
- Delete Spaces Persons Details
- Get Spaces Persons Folders
- Get Spaces Persons Groups
- Get Spaces Persons Portfolios
- Post Spaces Persons Portfolios
- Patch Spaces Portfolios Persons
- Get Spaces Professional Vehicles
- Post Spaces Professional Vehicles
- Get Spaces Settings Nf 203 Logs
- Post Spaces Settings Nf 203 Logs
- Get Spaces Status
- Post Spaces Status
- Delete Spaces Status
- Get Spaces Tax Contracts
- Post Spaces Tax Contracts
- Get Spaces Triggers
- Delete Spaces Triggers
- Post Spaces Triggers
- Delete Spaces Common Folders
- Patch Spaces Common Folders
- Get Spaces Company Entities Follow Ups
- Get Spaces Customers
- Get Spaces Customers All
- Get Spaces Documents
- Patch Spaces Documents
- Get Spaces Documents Extend
- Post Spaces Documents Extend
- Get Spaces Documents Folders
- Post Spaces Documents Mailing
- Get Spaces Documents Mailingprice
- Get Spaces Documents Versions
- Post Spaces Documents Versions
- Get Spaces Documents Versions Current
- Get Spaces Documents Access
- Get Spaces Documents Accounting
- Get Spaces Documents Download
- Get Spaces Employees
- Get Spaces Employees All
- Get Spaces Employers
- Get Spaces Employers All
- Get Spaces Extend
- Post Spaces Extend
- Get Spaces Folders
- Get Spaces Folders All
- Delete Spaces Folders Bank Statements
- Patch Spaces Folders Bank Statements
- Delete Spaces Folders Contractual Documents
- Patch Spaces Folders Contractual Documents
- Delete Spaces Folders Corporate Tax Declarations
- Patch Spaces Folders Corporate Tax Declarations
- Delete Spaces Folders Expense Proofs
- Patch Spaces Folders Expense Proofs
- Delete Spaces Folders Expense Reports
- Patch Spaces Folders Expense Reports
- Delete Spaces Folders Invoices
- Patch Spaces Folders Invoices
- Get Spaces Folders Nominative Social Declarations
- Delete Spaces Folders Other Taxes
- Patch Spaces Folders Other Taxes
- Delete Spaces Folders Payrolls
- Patch Spaces Folders Payrolls
- Post Spaces Folders Payrolls Refresh
- Delete Spaces Folders Payslips
- Patch Spaces Folders Payslips
- Delete Spaces Folders Social Contracts
- Patch Spaces Folders Social Contracts
- Delete Spaces Folders Social Declarations
- Patch Spaces Folders Social Declarations
- Delete Spaces Folders Vat Declarations
- Patch Spaces Folders Vat Declarations
- Patch Spaces Folders
- Delete Spaces Folders Accounting Year
- Patch Spaces Folders Accounting Year
- Get Spaces Folders Accountings
- Get Spaces Folders Accountings Journal
- Delete Spaces Folders Bank
- Get Spaces Folders Bank
- Patch Spaces Folders Bank
- Get Spaces Folders Bank Statements
- Post Spaces Folders Bank Statements
- Patch Spaces Folders Collective Decision
- Get Spaces Folders Common Folders
- Post Spaces Folders Common Folders
- Get Spaces Folders Common Folders All
- Get Spaces Folders Contracting Partner
- Get Spaces Folders Contracting Partner Space
- Get Spaces Folders Contractual Documents
- Post Spaces Folders Contractual Documents
- Get Spaces Folders Contractual Relationship
- Get Spaces Folders Coporate Tax Declarations
- Post Spaces Folders Coporate Tax Declarations
- Delete Spaces Folders Customer
- Get Spaces Folders Customer
- Patch Spaces Folders Customer
- Get Spaces Folders Deliveries Journal
- Get Spaces Folders Documents
- Post Spaces Folders Documents
- Patch Spaces Folders Documents Detach
- Delete Spaces Folders Employee
- Get Spaces Folders Employee
- Patch Spaces Folders Employee
- Get Spaces Folders Expense Proofs
- Post Spaces Folders Expense Proofs
- Get Spaces Folders Expense Reports
- Post Spaces Folders Expense Reports
- Get Spaces Folders Expense Reports Expense Proofs
- Delete Spaces Folders Insurance
- Get Spaces Folders Insurance
- Patch Spaces Folders Insurance
- Get Spaces Folders Invoices
- Post Spaces Folders Invoices
- Get Spaces Folders Legal Entity
- Delete Spaces Folders Loan
- Get Spaces Folders Loan
- Patch Spaces Folders Loan
- Get Spaces Folders Messages
- Post Spaces Folders Messages
- Patch Spaces Folders Messages
- Get Spaces Folders Other Taxes
- Post Spaces Folders Other Taxes
- Get Spaces Folders Passwords
- Post Spaces Folders Passwords
- Delete Spaces Folders Passwords
- Patch Spaces Folders Passwords
- Get Spaces Folders Payrolls
- Post Spaces Folders Payrolls
- Delete Spaces Folders Payrolls Nominative Social Declaration
- Post Spaces Folders Payrolls Nominative Social Declaration
- Get Spaces Folders Payslips
- Post Spaces Folders Payslips
- Delete Spaces Folders Portfolio
- Delete Spaces Folders Professional Vehicle
- Patch Spaces Folders Professional Vehicle
- Delete Spaces Folders Provider
- Get Spaces Folders Provider
- Patch Spaces Folders Provider
- Get Spaces Folders Required Documents
- Patch Spaces Folders Required Documents
- Post Spaces Folders Required Documents
- Delete Spaces Folders Required Documents Documents
- Get Spaces Folders Sections
- Get Spaces Folders Social Contracts
- Post Spaces Folders Social Contracts
- Get Spaces Folders Social Declarations
- Post Spaces Folders Social Declarations
- Delete Spaces Folders Social Regimes
- Get Spaces Folders Social Regimes
- Patch Spaces Folders Social Regimes
- Get Spaces Folders Sum Invoices
- Delete Spaces Folders Tax Contract
- Patch Spaces Folders Tax Contract
- Get Spaces Folders Vat Declarations
- Post Spaces Folders Vat Declarations
- Delete Spaces Folders
- Post Spaces Folders
- Get Spaces Legal Entities Banks
- Post Spaces Legal Entities Banks
- Get Spaces Legal Entities Banks All
- Get Spaces Legal Entities Contracts
- Get Spaces Legal Entities Contractual Relationships
- Get Spaces Legal Entities Contractual Relationships All
- Get Spaces Legal Entities Customers
- Post Spaces Legal Entities Customers
- Get Spaces Legal Entities Customers All
- Get Spaces Legal Entities Insurances
- Post Spaces Legal Entities Insurances
- Get Spaces Legal Entities Insurances All
- Get Spaces Legal Entities Loans
- Post Spaces Legal Entities Loans
- Get Spaces Legal Entities Loans All
- Get Spaces Legal Entities Providers
- Post Spaces Legal Entities Providers
- Get Spaces Legal Entities Providers All
- Get Spaces Legal Entities Social Regimes
- Post Spaces Legal Entities Social Regimes
- Get Spaces Legal Entities Social Regimes All
- Get Spaces Loans
- Get Spaces Loans All
- Patch Spaces Persons Call For Document
- Post Spaces Persons Call For Document
- Get Spaces Persons Employees
- Post Spaces Persons Employees
- Get Spaces Persons Employees All
- Get Spaces Persons Exchange
- Get Spaces Persons Follow Ups
- Delete Spaces Persons Guest In Space
- Patch Spaces Persons Guest In Space
- Post Spaces Persons Guest In Space
- Delete Spaces Persons Invitation
- Get Spaces Persons Invitation
- Patch Spaces Persons Invitation
- Post Spaces Persons Invitation
- Post Spaces Persons Invitation Send
- Patch Spaces Persons Folders
- Get Spaces Providers
- Get Spaces Providers All
- Get Spaces Search
- Get Spaces Social Regimes
- Get Spaces Social Regimes All
- Get Spaces Spaces Invoicings

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from gerermesaffaires docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official gerermesaffaires OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **gerermesaffaires** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the gerermesaffaires API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
