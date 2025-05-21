# Addly Web App

Addly is a web application designed to provide a comprehensive interface for Facebook functionalities, similar to popular Chrome extensions. This project aims to enhance user experience by integrating various features that facilitate interaction with Facebook.

## Features

- User authentication with Facebook
- Fetch user data and display it in a user-friendly manner
- Navigation bar for easy access to different sections
- Home page showcasing key functionalities
- Utility functions for data handling and formatting

## Project Structure

```
addly-webapp
├── public
│   └── index.html          # Main HTML file for the web application
├── src
│   ├── components
│   │   └── Navbar.tsx      # Navigation bar component
│   ├── pages
│   │   └── Home.tsx        # Home page component
│   ├── services
│   │   └── facebookApi.ts   # Functions to interact with the Facebook API
│   ├── utils
│   │   └── helpers.ts       # Utility functions for the application
│   └── App.tsx              # Main application component
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Getting Started

To get started with the Addly web app, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/addly-webapp.git
   ```

2. Navigate to the project directory:
   ```
   cd addly-webapp
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.