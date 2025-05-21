# Addly Web Application

Addly is a web application designed to manage Facebook and website-related operations, as well as user management functionalities. This project utilizes TypeScript and Express.js to provide a robust and scalable solution.

## Features

- **Facebook Management**: 
  - Fetch, post, and delete Facebook data using the Facebook API.
  
- **Website Management**: 
  - Handle website data operations including fetching, posting, and deleting website information.
  
- **User Management**: 
  - Manage user data with functionalities to fetch, post, and delete user information.

## Project Structure

```
addly-webapp
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers             # Contains controllers for handling requests
│   │   ├── facebookController.ts
│   │   ├── websiteController.ts
│   │   └── userController.ts
│   ├── routes                  # Defines application routes
│   │   ├── facebookRoutes.ts
│   │   ├── websiteRoutes.ts
│   │   └── userRoutes.ts
│   ├── services                # Contains services for business logic
│   │   ├── facebookService.ts
│   │   ├── websiteService.ts
│   │   └── userService.ts
│   ├── models                  # Defines data models
│   │   ├── facebookModel.ts
│   │   ├── websiteModel.ts
│   │   └── userModel.ts
│   └── types                   # Type definitions
│       └── index.ts
├── package.json                # NPM package configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd addly-webapp
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.