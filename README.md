Frontend & Rendering
React 18: The core library for building the user interface using functional components and hooks.
Vite: Used as the lightning-fast build tool and development server for an optimized developer experience.
TypeScript: Ensures structural type safety across the application, from station definitions to search parameters and passenger details.
Styling & Design
Tailwind CSS: Utilized for utility-first styling, allowing for the meticulous implementation of the "Clean Minimalism" theme without writing legacy CSS.
Framer Motion (motion/react): Powers the seamless page transitions (the slide-in/out effects) and the train animations on the home page.
Lucide React: A collection of beautiful, lightweight icons used for navigation, station searching, and the ticket confirmation view.
State & Data Management
React Hooks (useState, useMemo): Manages the application's view state (Home, Results, Booking, Confirmation), search criteria, and the dynamic multi-passenger inputs.
Mock Database: A robust, structured constants.ts file that simulates a real-world railway database with complex relationships between stations and train schedules.
Design System Pattern
Minimalist UI Principles: High focus on whitespace, systematic color usage (#213d77 blue and #ef7f1a orange), and clear information hierarchy.
Grid-First Layouts: Used to ensure that complex data like train fares and multi-passenger lists remains clean and readable on any screen size.
This stack was chosen to provide a production-ready foundation that is both easy to maintain and incredibly responsive for the end-user.
<img width="1888" height="928" alt="image" src="https://github.com/user-attachments/assets/f3830517-e750-42f1-986d-e1df965221f4" />
<img width="1891" height="938" alt="image" src="https://github.com/user-attachments/assets/8566974d-998c-4946-9f59-04b1bb4b1fb7" />
<img width="1879" height="1007" alt="image" src="https://github.com/user-attachments/assets/8f06e8b5-eee9-4794-b537-a27a3a1610db" />
<img width="1883" height="943" alt="image" src="https://github.com/user-attachments/assets/47496502-6813-4802-a979-46bae4c16988" />
**Prerequisites:**  Node.js
1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
