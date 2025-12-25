# Feedback Widget - Sip Happens Café

A React application for collecting customer feedback for Sip Happens Café.

## Features

- Track feedback in three categories: Good, Neutral, Bad
- Display feedback statistics including:
  - Individual category counts
  - Total feedback count
  - Positive feedback percentage
- Persist feedback data between page reloads using localStorage
- Reset functionality to clear all feedback
- Responsive design with CSS Modules

## Technologies Used

- React 19.2.0
- Vite 7.2.4
- CSS Modules
- ESLint

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Description/
│   │   ├── Description.jsx
│   │   └── Description.module.css
│   ├── Options/
│   │   ├── Options.jsx
│   │   └── Options.module.css
│   ├── Feedback/
│   │   ├── Feedback.jsx
│   │   └── Feedback.module.css
│   └── Notification/
│       ├── Notification.jsx
│       └── Notification.module.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Assignment Requirements

This project was created as part of the GoIT Neo React course, Module 2 homework assignment.
