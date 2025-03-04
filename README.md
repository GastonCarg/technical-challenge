# PinApp technical challenge
The main purpose of this project is to demonstrate my knowledge, where I focus on covering the requirements given by PinApp.

NOTE: The following project simulates only a part of an E-commerce platform.
Upon entering the first screen, some products will be displayed with the necessary information to encourage the user to view the details of the offered products. On this same screen, users can search using a filter field by product name or SKU. Additionally, they can scroll down to load more products using infinite scrolling, which will display 10 products at a time per loaded page. Then, by clicking the "View details" button, a new screen will appear, showing more details about the selected product.

## How to access to the web?
The project is deployed on Vercel, and you can access it by clicking in the next link:
[Vercel](https://pinapp-technical-challenge.vercel.app/)

## Prerequisites
Ensure that you have installed Node +v20.11.1.
[Check the documentation for downloading and installing it](https://nodejs.org/es)

## Installation process
Clone the repository

```bash
git clone https://github.com/GastonCarg/technical-challenge.git
```

Navigate to the project folder:

```bash
cd technical-challenge
```

Install the necessary libraries to run the project:

```bash
npm install
```

Start the project:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a web browser to see the web running on your local machine.

## Libraries and tools used
This project was developed using Next.js and Typescript.

1. Tanstack/react-query: To fetch and send data to the server, using cache strategies.
2. React-infinite-scroll-component: To have the infinite scrolling behavior in the product list.
3. Tailwindcss: To style the UI of platform.
4. Eslint: To check code improvements and get cleaner code like detecting unused variables.
5. Prettier: To get the code style unified, which will help when multiple developers collaborate on this project.

## Tools and libraries I would have used

In addition to the libraries and tools I used, I would have implemented the following tools, but due to time constraints, I didn't:

1. `Jest` to test the SPA by simulating user interactions and verifying the expected results.
2. `i18n` to manage text translations based on the user's settings.
3. `CI/CD` pipelines to build and deploy the new versions of the application
4. `eslint` and `prettier` configuration files defines simple rules. They should be modified according to the team specifications.

