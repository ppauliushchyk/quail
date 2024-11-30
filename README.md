# Quail

## Description

See a list of countries filtered by code using a GraphQL query.

## Installation

1. **Prerequisites:**

   - Ensure you have Node.js and npm installed on your system. Refer to [Next.js Installation Guide](https://nextjs.org/docs/app/getting-started/installation) for detailed instructions:

2. **Clone or Download the Repository:**

   - Clone the repository using Git:

     ```bash
     git clone https://github.com/ppauliushchyk/quail.git
     ```

   - Download the repository as a ZIP file.

3. **Install Dependencies:**

   - Navigate to the project directory:

     ```bash
     cd quail
     ```

   - Install project dependencies:

     ```bash
     npm install --force
     ```

> [!IMPORTANT]  
> If you see a peer dependencies warning, you need to use the --force or --legacy-peer-deps flag to ignore the warning. This won't be necessary once both Next.js 15 and React 19 are stable.

## Development

1. **Start Development Server:**

   - Run the following command to start the development server and access the application at `http://localhost:3000`:

     ```bash
     npm run dev
     ```

2. **Build for Production:**

   - Create an optimized production build for deployment using:

     ```bash
     npm run build
     ```

   - Start the production server by running:

     ```bash
     npm run start
     ```

## Testing

1. **End-to-End (E2E) Tests:**

   - Run E2E tests using Cypress with:

     ```bash
     npm run test:e2e
     ```

2. **Component Tests:**

   - Run unit tests for individual components with:

     ```bash
     npm run test:component
     ```
