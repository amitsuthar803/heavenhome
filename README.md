Heaven Home

Heaven Home is a React project aimed at providing users with a platform to book cabins, manage bookings, and access additional features such as meal dashboard integration. This project utilizes various React features including React Query, custom hooks, Supabase for database management, and Context API for state management.
Features

    Cabin Booking: Users can browse available cabins and book them for their desired dates.
    Booking Management: Users can view their booked cabins and manage their bookings.
    Meal Dashboard: Integration with a meal dashboard allows users to add meals to their bookings.
    React Query: Efficient data fetching with React Query for improved performance.
    Custom Hooks: Utilization of custom hooks for reusable logic across components.
    Supabase: Database management powered by Supabase, offering scalability and reliability.
    Context API: State management using Context API for global state access.

Getting Started

To get started with Heaven Home, follow these steps:

    Clone the repository:

    bash

git clone <repository-url>

Install dependencies:

bash

cd heaven-home
npm install

Set up environment variables:

Create a .env file in the root directory and add your Supabase credentials:

makefile

REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_KEY=your-supabase-key

Run the application:

bash

    npm start

    The application will be running at http://localhost:3000 by default.

Folder Structure

heaven-home/
│
├── public/
└── src/
├── components/
├── contexts/
├── hooks/
├── pages/
├── services/
├── styles/
├── utils/
├── App.js
├── index.js
└── ...

Contributors

    Your Name - Project Lead & Developer

License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

    React Query
    Supabase
    Context API
