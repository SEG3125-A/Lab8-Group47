This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Database Setup

This application uses a PostgreSQL database, managed through the Prisma ORM. For everything to run properly, you'll need to download [PostgreSQL](https://www.postgresql.org/) and complete the following steps.

1. Once the PostgreSQL installer is downloaded, install using the defualt configurations. See [this guide](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database#setting-up-postgresql-on-windows) for more details.
2. Using pgAdmin4 (which is installed alongside PostgreSQL by default), create a database called "SEG3125-G47-Lab8" on the default "PostgreSQL 16" server.
3. Run `npm i` to ensure all the latest project dependencies are installed.
4. Run `npx prisma migrate dev --name init` to create the required tables in the "SEG3125-G47-Lab8" database.
5. Run `npx prisma generate` to generate a prisma client that is tailored to our database. Along with simply being a requirement for the ORM to work, this is what provides us with code-completion that is specific to the structure of our database.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
