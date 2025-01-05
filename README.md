# To-Do App

This is a feature-rich To-Do application built with the following technologies:

- [Next.js](https://nextjs.org) – A React framework for server-rendered and static web applications.
- [TypeScript](https://www.typescriptlang.org) – A typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com) (using [shadcn](https://ui.shadcn.com)) – A utility-first CSS framework.
- [Redux Toolkit (RTK)](https://redux-toolkit.js.org) – A toolset for efficient state management.

## Features

- Add, update, and delete tasks.
- Responsive design using Tailwind CSS.
- State management with Redux Toolkit.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Run the Development Server](#run-the-development-server)
   - [Build for Production](#build-for-production)
   - [Run the Production Build](#run-the-production-build)
4. [Folder Structure](#folder-structure)
5. [Learn More](#learn-more)

---

## Getting Started

Follow the instructions below to get the project up and running on your local environment.

---

## Technologies Used

- **Next.js** for server-side rendering and static site generation.
- **Tailwind CSS** for styling, enhanced by **shadcn** components.
- **TypeScript** for static typing.
- **Redux Toolkit** for managing global state.

---

## Setup Instructions

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/designdotdevanshu/taskdefeat.git

# or with SSH

git clone git@github.com:designdotdevanshu/taskdefeat.git
```

Navigate to the project folder:

```bash
cd taskdefeat
```

---

### Install Dependencies

Install the necessary dependencies using your preferred package manager:

> Note: Make sure you have Node.js version 18 or higher installed on your machine. If not, download it from [nodejs.org](https://nodejs.org).

```bash
npm install
```

---

### Run the Development Server

To start the development server, run:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to access the application.

---

### Build for Production

To create an optimized production build, run:

```bash
npm run build
```

---

### Run the Production Build

After building the project, start the production server:

```bash
npm run start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

```plaintext
/
├── app/                # Next.js app directory
│   ├── page.tsx        # Main entry point for the application
│   ├── globals.css     # Global styles (Tailwind setup)
├── components/         # Reusable UI components
│   ├── ui/             # UI-specific components using shadcn
├── redux/              # Redux Toolkit setup
│   ├── store.ts        # Redux store configuration
│   ├── features/       # Redux slices
├── components.json     # shadcn component configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
```

---

## Learn More

To learn more about the tools and technologies used:

- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – Explore Tailwind’s utility-first CSS framework.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) – Deep dive into static typing for JavaScript.
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started) – Efficient state management.
