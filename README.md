# Syed Affan - Personal Portfolio

[![Portfolio Screenshot](https://ik.imagekit.io/affan/portfolio-screenshot.png)](https://affan.io) <!-- Optional: Replace with an actual screenshot URL -->

Welcome to the codebase for my personal portfolio website! This project showcases my skills, experience, and projects as a Full Stack Developer and IT Professional. It's built with modern web technologies, featuring an interactive design and smooth animations.

**Live Demo:** [https://affan.io](https://affan.io) <!-- Replace with your actual live URL if different -->

## ✨ Features

*   **Interactive UI:** Engaging user interface with animations and effects (e.g., 3D card tilt, particle background, custom cursor).
*   **Responsive Design:** Fully responsive layout optimized for all screen sizes (desktop, tablet, mobile).
*   **Skills Showcase:** Dedicated sections displaying technical skills with categorization and visualizations.
    *   `Skills.tsx`: Category-based skill listing.
    *   `SkillVisualization.tsx`: Interactive skill proficiency bars.
*   **Experience Timeline:** Professional experience displayed in an interactive tabbed format.
*   **Project Gallery:** Detailed showcase of personal and professional projects with descriptions, tech stacks, and links.
*   **Working Contact Form:** Integrated with Formspree for easy message handling.
*   **Dark/Light Mode:** Theme toggling for user preference.
*   **Built with Modern Tech:** Leveraging the latest features of Next.js, React, and Tailwind CSS.

## 🚀 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) 13+ (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Feather Icons)
*   **Form Handling:** [Formspree](https://formspree.io/)
*   **Deployment:** [Vercel](https://vercel.com/) (or your preferred platform)

## 🔧 Getting Started

Follow these instructions to get a local copy up and running for development or testing purposes.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm, yarn, or pnpm package manager

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/affan880/portfolio.git # Replace with your repo URL
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **(Optional) Environment Variables:**
    *   This project uses Formspree for the contact form, which requires a Form ID. The ID (`xldjzvya`) is currently hardcoded in `src/components/Contact.tsx`. If you plan to use your own Formspree form, update the ID there or consider moving it to an environment variable (`.env.local`).
    *   Example `.env.local` if you move the ID:
        ```
        NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
        ```
    *   If you add environment variables, update the fetch URL in `Contact.tsx` accordingly:
        ```javascript
        fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, { ... })
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio running locally.

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets (images, fonts, favicon)
├── src/
│   ├── app/             # Next.js App Router (pages, layout, global styles)
│   ├── components/      # Reusable React components (About, Contact, Skills, etc.)
│   ├── contexts/        # React Context API (if any)
│   ├── hooks/           # Custom React hooks (if any)
│   ├── styles/          # Styled-components or CSS modules (if used)
│   └── utils/           # Utility functions, data (aboutMe, projects)
├── .env.local           # Environment variables (optional, gitignored)
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## 🚢 Deployment

This application is ready for deployment on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

*   **Vercel:** Connect your Git repository directly to Vercel for seamless automatic deployments upon pushes.
*   **Netlify:** Similar process, connect your Git repository. If using Netlify Forms *instead* of Formspree, ensure the form attributes are correctly set in `Contact.tsx` as shown in the component's comments/history.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details (You might need to create this file if it doesn't exist).

## 📧 Contact

Syed Affan
*   Email: [syedaffan880@gmail.com](mailto:syedaffan880@gmail.com)
*   LinkedIn: [https://www.linkedin.com/in/syed-affan](https://www.linkedin.com/in/syed-affan)
*   GitHub: [https://github.com/affan880](https://github.com/affan880)

---

_This README was generated with assistance from AI._
