"use client";
import React, { useState } from 'react';

// Define a type for the JSONL data structure
type JsonlEntry = {
  input_text: string;
  output_text: string;
};

const JsonlForm: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [jsonlData, setJsonlData] = useState<JsonlEntry[]>([]);

  const handleAdd = (): void => {
    const newEntry: JsonlEntry = { input_text: inputText, output_text: outputText };
    setJsonlData([...jsonlData, newEntry]);
    setInputText('');
    setOutputText('');
  };

  const handleCreate = (): void => {
    const blob: Blob = new Blob([jsonlData.map(entry => JSON.stringify(entry)).join('\n')], { type: 'text/plain' });
    const url: string = URL.createObjectURL(blob);
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = url;
    link.download = 'data.jsonl';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = (): void => {
    const jsonlString = jsonlData.map(entry => JSON.stringify(entry)).join('\n');
    navigator.clipboard.writeText(jsonlString);
  };

  const handleClear = (): void => {
    setJsonlData([]);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Form Section */}
      <div className="flex-1 bg-white rounded shadow-md p-6 mb-4 md:mb-0 md:mr-4 overflow-hidden">
        {/* Input Fields */}
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Input Text"
          className="border border-gray-300 p-2 rounded mb-2 w-full h-32 resize-none"
        />
        <textarea
          value={outputText}
          onChange={(e) => setOutputText(e.target.value)}
          placeholder="Output Text"
          className="border border-gray-300 p-2 rounded mb-4 w-full h-32 resize-none"
        />
        {/* Buttons */}
        <div className="flex space-x-4">
          <button onClick={handleAdd} className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add
          </button>
          <button onClick={handleCreate} className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600">
            Download
          </button>
        </div>
      </div>

      {/* Preview Section */}
      <div className="flex-1 bg-white rounded shadow-md p-6 overflow-hidden">
        <div className="flex justify-between mb-2">
          <button onClick={handleCopy} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600">
            Copy
          </button>
          <button onClick={handleClear} className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600">
            Clear
          </button>
        </div>
        <pre className="bg-gray-200 p-2 rounded overflow-auto h-96">{JSON.stringify(jsonlData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default JsonlForm;
