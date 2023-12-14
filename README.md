## Fine Tuning Lab

This is a NextJS project to create JSONL file to fine tune the data. A basic web interface to create training data in JSONL format that could be used in fine tuning base models on either google or open ai ecosystem.

For base model training in google the JOSNL would be in the format of input_text and output_text.
```
{"input_text": "Classify the following text into one of the following classes:
[business, entertainment] Text: 5 stocks to buy now",
"output_text": "business"}
```
The general structure for OpenAI JOSNL would be prompt and completion.

```
{"prompt": "your input text here", "completion": " expected output text here"}
```

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
