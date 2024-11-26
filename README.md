# Donor Blood Management App

A web application built with **Next.js**, **Zod**, **Axios**, and **Tanstack Query**. The app allows users to manage blood donations, including scheduling a day to reserve a donor and receiving notifications about their schedules.

## Features
- Schedule blood donations
- Reserve donor appointments on selected dates
- Get notifications about scheduled donations
- Data caching and state management with **Tanstack Query**
- Form validation using **Zod**
- HTTP requests with **Axios**

## Tech Stack
- **Next.js**: React framework for building static and server-rendered applications
- **Zod**: TypeScript-first schema validation library for validating user input
- **Axios**: Promise-based HTTP client for the browser and Node.js
- **Tanstack Query**: Data fetching, caching, synchronization, and state management library

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/donor-blood-management.git
   cd donor-blood-management
   ```
2. Install the dependencies:

```bash
npm install
```
### Development
To start the development server:

```bash
npm run dev
```
This will start the app at http://localhost:3000.

### Features Breakdown
1. Donor Scheduling
Users can select a day and reserve a donor for blood donation. The app will check for available slots and allow users to confirm their schedule.

2. Notifications
Users will be notified when their scheduled blood donation is approaching. Notifications are sent based on the timing of the schedule.

3. Data Fetching and Caching
Tanstack Query is used to manage API requests and cache responses. This minimizes unnecessary data fetching and ensures the app is responsive.

4. Fetching Data: Tanstack Query helps in fetching donor schedules, available slots, and managing other stateful data.
Caching: Responses from the API are cached to optimize performance.
State Management: Managing the donor's schedule and notification states.

5. Validation with Zod
Zod is used for input validation, especially for scheduling and reservation forms, ensuring that the data entered by users is correct.

6. Axios for HTTP Requests
Axios is used to make HTTP requests to the backend API. It is responsible for handling communication with the server to fetch data and post new schedules.

### Usage
Scheduling a Donation
Visit the app's homepage.
Choose the date and time for the donation.
Fill out the donor details (e.g., blood type, contact info).
Submit the form to confirm the reservation.
Receive notifications when the donation is near.
Notifications
Notifications about your upcoming donation schedule will be sent via in-app alerts.

### Environment Variables
Make sure to set up the following environment variables in your .env.local file:

```arduino
NEXT_PUBLIC_API_URL=<value>
```
### Dependencies
- next: The React framework for building the app.
- axios: HTTP client for making API requests.
- zod: For input validation.
- @tanstack/react-query: For data fetching and caching.

### Deployment
You can deploy this app using Vercel, Netlify, or any platform that supports Next.js.

### Contributing
Feel free to fork the repository, open issues, and submit pull requests. Contributions are always welcome!

### License
This project is licensed under the **MIT License**.

Built with ❤️ by **TEAM Digital Factory 2** at ALU
