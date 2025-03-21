# Made with React + Vite

# Socially App

A React-based web app for the Socially platform, allowing users to choose between creating a regular or volunteer account. This project includes responsive design for both desktop and mobile views, with routing to navigate between the Welcome, Register, and Volunteer pages.

## Features

- _Responsive Design_: Adapts to desktop and mobile screens (mobile view optimized for max-width 480px).
- _Routing_: Uses react-router-dom for navigation between pages (/socially, /socially/register, /socially/volunteer).
- _Reusable Components_: Includes reusable Bg and Button components for consistent UI across pages.

## Project Structure

# Reusable background :

src/ components/ Bg.jsx

# Styles for the Bg:

component Bg.css

# Reusable button component:

component Button.jsx

# Styles for the Button component pages/ :

Button.css

# Welcome page with account selection:

Welcome.jsx

# Styles for the Welcome page:

Welcome.css

# Register page for regular accounts:

Register.jsx (To be edit, create a div that houses the left background and the create account page, then import the reusable background )

# Register page for volunteer accounts:

Volunteer.jsx

# Images for desktop and mobile views

assets/

# Main app:

App.jsx

with routing App.css

# Global styles index.js

# Entry point index.css

# Minimal global styles

# Setup Instructions

1. Clone the Repository:
   BASH
   git clone https://github.com/organization-name/repository-name.git
   cd repository-name
2. Install Dependencies:
   BASH
   npm install (if it throws error use npm install --force)
3. Run the App:
   BASH
   npm run dev
   The app will start on http : // localhost: 3000. Access
   App. jsx.
