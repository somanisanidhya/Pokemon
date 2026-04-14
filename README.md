# Pokémon Data Explorer 🌟

**🚀 Live Demo:** [https://pokemon-ecru-one.vercel.app/](https://pokemon-ecru-one.vercel.app/)

A modern, responsive, and interactive web application built with Next.js to explore Pokémon data using the [PokéAPI](https://pokeapi.co/).

## 📖 Overview

The **Pokémon Data Explorer** serves as a comprehensive tool to browse through the vast world of Pokémon. It features a carefully designed side-by-side layout that allows users to simultaneously scroll through a list of Pokémon and view detailed statistics of a selected Pokémon without navigating away from the main view.

## ✨ Features

- **Interactive Pokémon Data Grid**: Browse Pokémon with a paginated, clearly structured table.
- **Side-by-Side Detail View**: Click on any Pokémon to instantly view its details alongside the table on large screens.
- **Detailed Pokémon Statistics**: 
  - View explicit typings via elegant interactive tabs.
  - Explore total game indices and move counts curated for each specific type.
- **Modern UI/UX**: 
  - Beautiful, responsive design using Tailwind CSS.
  - High-quality loading states with skeletons, and seamless error handling for robust UX.
  - Crisp hover effects, clean typography, and seamless layout transitions.
- **Pagination Controls**: Easily navigate forward and backward through the entire Pokédex.

## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Source**: [PokéAPI](https://pokeapi.co/docs/v2)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd tecstuff
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## Project Requirements

The project is structured into three progressive levels, each building upon the previous one.

### Level 1: Pokémon Table with Pagination

**Requirements:**
1. Create a table displaying Pokémon data from `https://pokeapi.co/api/v2/pokemon`
   - Columns: Sr. Number, Poke Name
   - Implement at `/poke` route using Next.js App Router

2. Pagination Implementation
   - Add Previous/Next navigation controls
   - Display total page count
   - Implement proper button states (disabled when appropriate)
   - Handle data fetching for page navigation

### Level 2: Interactive Pokémon Details

**Requirements:**
1. Clickable Pokémon Names
   - Fetch and display detailed information on click
   - Show Pokémon types as tabs on the right side

2. Type-Specific Information
   - Display relevant data under each type tab:
     - Game Indices count
     - Total moves count
   - Implement smooth tab switching with data updates

### Level 3: Enhanced User Experience

**Requirements:**
1. Error Handling
   - Implement comprehensive error handling for API calls
   - Display user-friendly error messages
   - Handle edge cases gracefully

2. Loading States
   - Add loading indicators during data fetching
   - Ensure smooth transitions between states

## Project Layout

The wireframe below represents the basic layout structure. You have creative freedom for the final design implementation.

![Wireframe](./public/Wireframe_Assessment-2.jpg)

## Development Guidelines

1. **Code Quality**
   - Follow React best practices
   - Break down components logically
   - Implement effective prop and state management
   - Write clean, maintainable code

2. **Git Practices**
   - Maintain a clean and meaningful commit history
   - Write descriptive commit messages
   - Your git history will be reviewed to understand your development process

## Important Notes

1. **Time Management**
   - Take sufficient time to demonstrate best practices
   - Focus on code quality and architecture
   - Don't rush the implementation

2. **Allowed Resources**
   - ✅ Google search
   - ✅ Third-party UI libraries
   - ✅ NPM packages for functionality

3. **Restrictions**
   - ❌ AI tools (ChatGPT, GitHub Copilot, etc.)
   - Note: Submissions will be verified using zerogpt.com
   - AI usage will lead to disqualification

## Evaluation Criteria

1. **Functionality**
   - Completion of all three levels
   - Accurate API integration
   - Proper error handling

2. **Code Quality**
   - Component reusability
   - Code organization
   - Best practices implementation

3. **Development Process**
   - Git commit history
   - Problem-solving approach
   - Code structure decisions

## Submission

1. Ensure all features are working as expected
2. Verify your git history is clean and meaningful
3. Make sure the code runs without any errors
4. Double-check the implementation against all requirements

---

Good luck with your assessment! If you have any questions, please reach out to the hiring team.