# Blogs App

A simple blog application built with Next.js and TypeScript that allows users to view, create, and navigate between blog posts using a local JSON data file as the data source. The app includes a responsive design, server-side rendering (SSR), dynamic routing, and basic form validation.

## Features

- **Home Page (Blog List)**
  - Displays a list of blog posts with title and content.
  - Uses Next.js's server-side rendering (SSR) or static generation to fetch blog posts.
  - "Read More" button navigates to a detailed view of each blog post.

- **Blog Post Page**
  - Uses Next.js dynamic routes (`[id]`) to render individual blog post pages.
  - Fetches and displays the full blog post content.

- **Create New Blog Post Page**
  - Form to add a new blog post with fields for title and content.
  - Basic client-side validation using `React Hook Form` and `Zod`.
  - Displays a confirmation message using `React Hot Toast` upon successful submission.
  - Saves data to a local JSON file.

- **Global Layout and Navigation**
  - A layout component with a header and footer for consistent styling.
  - Navigation links for Home (Blog List) and Create New Blog Post.

- **Responsive Design**
  - Fully responsive layout that adapts to different screen sizes (mobile, tablet, desktop).

## Tech Stack

- **Frontend**: Next.js 14 App Router (React), TypeScript
- **Styling**: Tailwind CSS
- **Form Handling and Validation**: React Hook Form, Zod
- **Icons**: Lucide-React
- **Notifications**: React Hot Toast
- **Data Storage**: Local JSON file (simulates an external API)

## Structure

├── app/                  # Next.js App Router structure <br/>
│   ├── api/              # API routes <br/>
│   │   ├── create-blog/   <br/>
│   │   │   └── route.ts   <br/>
│   ├── layout.tsx        # Global layout <br/>
│   ├── page.tsx          # Home page <br/>
│   ├── loading.tsx       # Loading page <br/>
│   ├── not-found.tsx     # Not found page <br/>
│   ├── blog/             # Blog post and create pages <br/>
│   │   ├── [id]/         # Dynamic blog post pages <br/>
│   │   │   └── page.tsx  # Blog post details <br/>
│   │   └── create-blog/  # Create new blog post page <br/>
│   │       └── page.tsx <br/>
├── components/           # Reusable components (Header, Footer, Layout, etc.) <br/>
├── public/               # Static files (e.g., images) <br/>
├── lib/                  #  <br/>
│   │   ├── actions/      # Server actions <br/>
├── data/                 # Local JSON data file <br/>
├── schema/               # Zod validation schema <br/>
├── types/                # Typescript types <br/>

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IASIKO/widgera-blogs-app.git
   cd widgera-blogs-app
2. Install dependencies:
   ```bash
   npm install
3. Run the development server:
   ```bash
   npm run dev
