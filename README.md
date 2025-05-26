# Claims Tracker – Frontend

This is the frontend interface for the Claims Tracker application, built with **React**, **Tailwind CSS**, and **Vite**. It allows users to submit insurance claims and view/manage their status in a dynamic UI. Designed to be paired with a Spring Boot backend API.

---

## Features

- Submit new insurance claims
- View a table of submitted claims
- Update claim statuses (Pending, In Review, Approved, Denied)
- Modern UI with Tailwind CSS styling
- Real-time data updates via REST API
- Responsive layout with dropdown status coloring

---

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (useState, useEffect)
- **API Communication:** Fetch API

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ericlopardi/claims-tracker-frontend.git
cd claims-tracker-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## Folder Structure

```
src/
├── components/
│   ├── ClaimForm.jsx
│   └── ClaimTable.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## API Endpoint Reference

| Method | Endpoint         | Description            |
|--------|-----------------|------------------------|
| POST   | `/claims`       | Submit a new claim     |
| GET    | `/claims`       | Fetch all claims       |
| PUT    | `/claims/{id}`  | Update claim status    |

---
## Screenshot 
![Screenshot 2025-05-26 at 12 26 25 AM](https://github.com/user-attachments/assets/0d248b14-225c-4e9e-af0a-11c8e2496f0f)

