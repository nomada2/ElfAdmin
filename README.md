# ElfAdmin

Admin portal for [Elf](https://github.com/EdiWang/Elf), the .NET 6 link forward service runs on Microsoft Azure.

## Features

- Manage Links
- View Reports

## Build and Run

### Pre-requests

- Node.js 16.x LTS
- VSCode or any editor you like
### Configure Azure AD

Open `./elf-admin/src/app/auth-config.ts`

Replace `clientId`, `authority`, `scopes` with your own values.

### Configure API endpoint

Open `./elf-admin/src/environments/environment.ts` or `./elf-admin/src/environments/environment.prod.ts`

Replace `elfApiBaseUrl` with your own values.

### Run

```bash
cd elf-admin
npm install
ng serve
```