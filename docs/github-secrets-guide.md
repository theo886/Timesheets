# Setting Up GitHub Secrets for Azure Static Web Apps

To deploy your application to Azure Static Web Apps using GitHub Actions, you'll need to add the deployment API token as a secret in your GitHub repository.

## Get the Azure Static Web Apps API Token

1. Go to the [Azure Portal](https://portal.azure.com/)
2. Navigate to your Static Web App resource
3. In the left sidebar, click on "Overview"
4. Click on "Manage deployment token" 
5. Copy the displayed token

## Add the Token as a GitHub Secret

1. Go to your GitHub repository
2. Click on "Settings" (tab in the top navigation)
3. In the left sidebar, click on "Secrets and variables" then "Actions"
4. Click on "New repository secret"
5. Set the name as `AZURE_STATIC_WEB_APPS_API_TOKEN`
6. Paste the deployment token value you copied from Azure
7. Click "Add secret"

After adding this secret, your GitHub Actions workflow will have access to the token and deployments should succeed.

## Verify the Workflow

Once you've added the secret, commit and push changes to your repository. This should trigger the GitHub Actions workflow and deploy your app to Azure Static Web Apps successfully.

You can check the progress and outcome of the workflow under the "Actions" tab in your GitHub repository.
