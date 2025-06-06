# REMAX_TrackingApp

## Overview

The REMAX_TrackingApp is a React-based web application designed to help users track daily activities, set goals, and monitor progress over time. Built with modern technologies like Tailwind CSS for styling, Plotly.js for data visualization, and local storage for data persistence, this app allows users to manage activities, edit goals, tally completions, and view comparisons between the current and previous months. Ideal for personal productivity or team tracking, it features a responsive design adaptable to various devices.

## User Stories

- As a user, I want to add new activities with customizable daily goals to track my progress effectively.
- As a user, I want to edit existing activities, including their names and daily goals, to reflect changes in my plans.
- As a user, I want to increment a tally for completed activities daily, with the count resetting at midnight, to monitor my achievements.
- As a user, I want to view a graph comparing my current month’s performance with the previous month to assess my progress visually.
- As a user, I want to delete activities I no longer need to keep my tracking list organized.
- As a user, I want the app to save my data locally so I can access it across sessions without losing progress.

## Installation/Use

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/DaneVN/REMAX_TrackingApp.git
   cd REMAX_TrackingApp
   ```
2. **Install Dependencies**

   ```bash
   cd app
   npm install

   ```

   This will install React, Tailwind CSS, and other dependencies listed in package.json.

3. **Run the Application**

   ```bash
   cd app
   ```

   if not already there, then

   ```bash
   npm run dev
   ```

   Open your browser and navigate to http://localhost:5173 (or other host links given in the Terminal) to view the website.

### Usage Instructions

- Adding Activities: Click the "Add New Activity" button below the Sheet Card to open the modal, enter a name, and save to start with default zero goals.
- Editing Activities: Click an activity in the Sheet Card table to open the modal, modify the name or daily goals, and save changes.
- Tallying Completions: Use the "Capture" button in the modal to increment the daily completed count, resetting at midnight.
- Viewing Progress: Check the Progress Card for weekly goal summaries and the Graph Card for monthly comparisons.
- Deleting Activities: Select an activity and click "Delete Activity" in the modal to remove it.
- Data Persistence: All changes are saved to local storage, persisting across browser sessions.

## Thanks/Credit

- xAI: For providing the Grok AI assistance in developing this README and resolving coding challenges.
- React Community: For the robust React framework that powers this app.
- Tailwind CSS: For the utility-first CSS framework enabling responsive design.
- Plotly.js: For the powerful charting library integrated via react-plotly.js.
- Open Source Contributors: For tools and libraries that made this project possible.
