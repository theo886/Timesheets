# Build Troubleshooting Guide

## OpenSSL Error in Node.js 17+

When building React applications created with older versions of create-react-app in Node.js 17+, you might encounter this error:

```
Error: error:0308010C:digital envelope routines::unsupported
```

### Cause

This error occurs because Node.js 17+ uses OpenSSL 3.0, which removes support for older algorithms used by webpack 4 (which older versions of create-react-app use).

### Solutions

1. **Set OpenSSL Legacy Provider (Temporary Fix)**

   Add the `NODE_OPTIONS` environment variable in your package.json build script:
   
   ```json
   "scripts": {
     "build": "NODE_OPTIONS=--openssl-legacy-provider react-scripts build"
   }
   ```
   
   For GitHub Actions workflows, also set it in the workflow file:
   
   ```yaml
   env:
     NODE_OPTIONS: --openssl-legacy-provider
   ```

2. **Use Node.js 16.x (Alternative)**

   Specify Node.js 16.x in your workflow if OpenSSL legacy provider doesn't work:
   
   ```yaml
   - name: Setup Node.js
     uses: actions/setup-node@v2
     with:
       node-version: '16'
   ```

3. **Update your project (Recommended Long-term Fix)**

   Consider updating your project to use newer versions of React and webpack that support OpenSSL 3.0:
   
   ```bash
   npm install react-scripts@latest
   ```

## Other Common Build Issues

### Environment Variables

Make sure environment variables are properly set for your target platform. For example:
- Windows: `set NODE_OPTIONS=--openssl-legacy-provider`
- Linux/macOS: `export NODE_OPTIONS=--openssl-legacy-provider`
- In scripts: `NODE_OPTIONS=--openssl-legacy-provider react-scripts build`
