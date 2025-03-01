export const msalConfig = {
  auth: {
    clientId: 02d8296f-9b9c-4133-b1ed-e65284068e54, // Replace with your actual Client ID
    authority: "https://login.microsoftonline.com/common",
    redirectUri: https://green-field-06d6c3d1e.6.azurestaticapps.net, // This will use your app's domain
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  }
};

// Add the API scopes you want to request
export const loginRequest = {
  scopes: ["User.Read"]
};

// Add API endpoints for your backend if needed
export const apiConfig = {
  timeSheetEndpoint: "https://your-api-url/api/timesheet",
};