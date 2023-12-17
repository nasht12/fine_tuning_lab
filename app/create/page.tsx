import React from 'react';
import JsonlForm from '../components/jsonl_form';

export default function Create() {
  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-start p-10">
      <header className="w-full text-center mb-12">
        <h1 className="text-5xl text-gray-700 font-mono font-bold tracking-wide">
          Fine Tuning Lab
        </h1>
        <p className="text-gray-500 mt-2">Generate and manage JSONL data</p>
      </header>
      <div className="w-full max-w-4xl">
        <JsonlForm />
      </div>
    </main>
  );
}

