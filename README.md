# README.md

# Timesheets App

This project is a Weekly Percentage Tracker built with React and TypeScript. It allows users to track their weekly project allocations and submit timesheets for review.

## Project Structure

The project is organized as follows:

- **public/**: Contains static files such as the favicon, HTML entry point, and manifest.
- **src/**: Contains the source code for the application, including components, hooks, types, and utilities.
- **.github/**: Contains GitHub workflows for CI/CD.
- **staticwebapp.config.json**: Configuration for Azure Static Web Apps.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: NPM configuration file.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd timesheets-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Build the application for production**:
   ```
   npm run build
   ```

## Deployment

This application can be deployed as a static web app on Azure. The deployment configuration is located in the `.github/workflows/azure-static-web-apps.yml` file.

## Usage

Once the application is running, you can:

- Add projects and allocate percentages for the week.
- Submit your timesheet for review.
- Navigate between weeks to view or edit previous entries.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.