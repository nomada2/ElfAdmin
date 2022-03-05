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

1. Navigate to the [Azure portal](https://portal.azure.com) and select the **Azure AD** service.
2. Select **New registration**.
3. In the **Register an application page** that appears, enter your application's registration information:
   - In the **Name** section, enter a meaningful application name that will be displayed to users of the app, for example `elf-admin`.
   - Under **Supported account types**, select **Accounts in this organizational directory only**.
   - In the **Redirect URI (optional)** section, select **Single-page application** in the combo-box and enter the following redirect URI: `http://localhost:4200/` for local debug and whatever URL you use in production.
4. Select **Register** to create the application.
5. In the app's registration screen, find and note the **Application (client) ID**. You use this value in your app's configuration file(s) later in your code.
6. In the app's registration screen, click on the **API permissions** blade in the left to open the page where we add access to the APIs that your application needs.
   - Click the **Add a permission** button and then,
   - Ensure that the **My APIs** tab is selected.
   - In the list of APIs, select the API you created in [Elf](https://github.com/EdiWang/Elf) project.
   - In the **Delegated permissions** section, select the **access_as_user** in the list. Use the search box if necessary.
   - Click on the **Add permissions** button at the bottom.

7. Open `./elf-admin/src/app/auth-config.ts`

8. Replace `clientId`, `authority`, `scopes` with your own values.

### Configure API endpoint

Open `./elf-admin/src/environments/environment.ts` or `./elf-admin/src/environments/environment.prod.ts`

Replace `elfApiBaseUrl` with your own values.

### Run

```bash
cd elf-admin
npm install
ng serve
```
