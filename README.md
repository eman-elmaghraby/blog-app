# Blog App - Next.js with TypeScript and Tailwind CSS

This is a simple blog application built using **Next.js**, **TypeScript**, and **Tailwind CSS**. It fetches blog posts from the **JSONPlaceholder API** and displays them on the homepage. Users can search blog posts and view detailed information, including comments, on individual post pages.

## Project Structure

- **/app**: Contains the main app components and pages.
  - **/layout.tsx**: The root layout of the application that wraps the entire page.
  - **/page.tsx**: The homepage that fetches and displays a list of blog posts.
- **/components**: Contains reusable components.
  - **/PostCard.tsx**: A card component that displays an individual blog post preview.
  - **/SearchBar.tsx**: A search bar component that allows users to filter posts by title.
- **/pages**: Contains page-specific files.
  - **/post/[id].tsx**: The post details page that displays full post information and comments.
- **/styles**: Contains the global CSS files, including Tailwind CSS setup.
- **/types**: Contains TypeScript types for posts and comments.
- **/utils**: Contains utility functions for fetching data from APIs.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **next.config.js**: Next.js configuration file.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Project dependencies and scripts.



## GitHub Repository

The source code is available on GitHub: [GitHub Repository](https://github.com/eman-elmaghraby/blog-app.git)