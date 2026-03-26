---
name: React JSX Coding Standards
description: Guidelines for the AI to enforce React coding standards during tab completion and code generation in .jsx and .js files.
---

# React Coding Standards

When generating or completing React code in this workspace, strictly adhere to the following standards:

## 1. Component Structure
- Write functional components using arrow functions.
- Always `export default ComponentName` at the bottom of the file to keep components clean.
- Destructure props directly in the functioning arguments (e.g., `const MyComponent = ({ title }) => { ... }`).

## 2. Styling (Tailwind V4)
- Exclusively use Tailwind CSS via the `className` attribute.
- Avoid inline styles (`style={{...}}`) unless dynamically calculating values that Tailwind cannot handle.
- Organize class names logically (e.g., layout -> sizing -> typography -> colors).

## 3. React Hooks & State
- Always use hooks (`useState`, `useEffect`, etc.) over class-based state.
- Keep `useEffect` dependencies accurate and minimal.

## 4. JSX Details
- Ensure all tags are properly closed.
- Treat JSX properties consistently (use camelCase for event listeners like `onClick`, `onChange`).
- Use self-closing tags when there are no children (e.g., `<img src="..." />`).
- Prefer using explicit element tags over generic `<div>` tags where accessible (e.g., `<header>`, `<main>`, `<footer>`, `<section>`).

## 5. Clean Code
- Ensure returned JSX is simple and readable; extract complex subcomponents or rendering logic if necessary.
- Return early when conditionally rendering different major UI states (e.g., loading spinners, error messages).
