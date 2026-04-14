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

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 📂 Project Structure

```text
├── app/
│   ├── poke/               # Main application route
│   │   ├── loading.jsx     # Sleek skeleton loading UI
│   │   ├── error.jsx       # Custom error boundary
│   │   ├── layout.jsx      # Nested layout wrapper
│   │   └── page.jsx        # Data fetching and parent layout composition
│   ├── globals.css         # Global Tailwind directives and custom variables
│   ├── layout.js           # Root HTML and font definitions
│   └── page.js             # Root redirect to /poke
├── components/
│   ├── PokemonView.jsx     # Main interactive view coordinating table and details
│   ├── PokemonTable.jsx    # Paginated table display component
│   ├── PokemonDetails.jsx  # Rich detail view for the active selection
│   ├── TypeTabs.jsx        # Segmented control for Pokémon types
│   └── Pagination.jsx      # Pagination controls for the table
├── public/                 # Static assets
└── package.json            # Project dependencies & scripts
```

## 💡 Implementation Highlights

- **Server-Side & Client-Side Architectures**: Uses App Router paradigms to intelligently separate UI interactiveness (Client Components) from UI skeletons and routing logic.
- **Efficient State Management**: Clean hierarchical state architecture handling active Pokémon selection without unnecessary external libraries.
- **Fully Responsive Structure**: Utilizing specialized Flexbox methodologies and responsive Tailwind utility classes to adapt from mobile vertically-stacked views to a powerful side-by-side desktop view.

---

*This application was built to demonstrate robust frontend capabilities—showcasing advanced API integration, engaging dynamic UI, and modern Next.js/React development practices.*