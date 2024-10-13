# Overreaderr

Overreaderr is a self-hosted web app for you & your users to request audiobooks and e-books from Readarr

## Features

- Add books to Readerr by pasting the desired book’s Goodreads page to Overreaderr
- Request either audiobooks **or** ebooks from Readarr by connecting with a single Readarr instance...
  - ... Or request both audiobooks **AND** ebooks from Readarr by connecting with two Readarr instances (one for eBooks, one for Audiobooks)
- Has the ability to support creation of multiple users, giving friends & family the ability to request books as well.
- Built as a Progressive Web App that can be installed directly onto your phone through Chrome or Safari, so you can request books on the move!

## Getting Started

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to Overreaderr.

#### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (We recommend using the LTS version – see `.nvmrc` file for the specific version)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

#### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Use the correct Node.js version with [nvm](https://github.com/nvm-sh/nvm)

   ```bash
   nvm use
   ```

3. Install the dependencies:

   ```bash
   npm ci
   ```

4. Obtain a Google Books API key from [Google Cloud Console](https://console.cloud.google.com/apis/credentials) and add it to a `.env.local` file in the root of the project:

   ```bash
   GOOGLE_BOOKS_API_KEY=your-api-key
   ```

#### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

\*\* TODO dockerize

#### Linting and Formatting

To check for linting errors, run:

```bash
npm run lint
```

To format your code, run:

```bash
npm run prettier:write
```

See https://mantine.dev/getting-started/#set-up-vs-code for setting up VSCode for Mantine and PostCSS.

### Stack

This project uses [Next.JS](https://nextjs.org/docs/getting-started) (with [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) and [Mantine](https://mantine.dev/)).

Here's a decent tutorial for learning React: [https://www.taniarascia.com/getting-started-with-react/](https://www.taniarascia.com/getting-started-with-react/).

And here's a React "cheatsheet": [https://www.freecodecamp.org/news/the-react-cheatsheet/](https://www.freecodecamp.org/news/the-react-cheatsheet/).
