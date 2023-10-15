# Railroad Device Monitoring Dashboard

Welcome to the Railroad Device Monitoring Dashboard repository. This project provides a user-friendly interface for monitoring and visualizing data from devices located along the railway network in the Netherlands. This README will guide you through the setup and provide insights into the project's features and development.

## Getting Started

To run the Railroad Device Monitoring Dashboard, follow these steps:

1.  Ensure you have Node.js and npm (or Yarn) installed on your machine.

2.  Navigate to the root folder of the project (railroad-device-monitoring-dashboard) and run the following command to install dependencies for both the app and the API:

    ```
        npm install
    ```

3.  After installing the dependencies, start the project using:

    ```
        npm run start:project
    ```

#### This command runs both the API and the front-end application together.

## About the Application and Approach

In this project, we've created a user-friendly Railroad Device Monitoring Dashboard to visualize device data efficiently. Here are some key points about the application and our approach:

- **Data Visualization**: To provide a clear and organized way to visualize device data, we chose a table format. The main data, including Barrier ID, Uplink Frame Counter, Battery, Latitude, and Longitude, is presented in a table for easy sorting and analysis.

- **DataGrid Component**: For the table implementation, we used the DataGrid component from Material-UI (MUI). It streamlines the setup process and provides built-in features such as pagination, filtering, and list settings.

- **Action Row**: The action row allows users to interact with the data. Clicking on the icons within the row changes the state and passes the ID of the selected object to the application for further processing.

- **Additional Properties**: Device-specific additional properties are displayed in a modal for detailed examination. For styling, we utilized Tailwind CSS, and for managing fetched data, we employed Recoil.
