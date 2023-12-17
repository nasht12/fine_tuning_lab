import React from "react";

const BestPracticesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100 overflow-auto">
      <div className="max-w-3xl mx-auto">
        {" "}
        {/* Add a container to center the content */}
        <h1 className="text-3xl font-bold mb-4">
          Best Practices for Fine Tuning
        </h1>
        <ol className="list-decimal pl-6">
          <li className="mb-2">
            <strong>Data Quality:</strong> Ensure that your training data is
            accurate and aligned correctly. When fine-tuning a sentiment
            analysis model, make sure that the sentiment labels are correctly
            assigned to the corresponding text examples.
            <pre className="bg-gray-200 p-4 rounded text-xs">
              {`{"review": "The ambiance was wonderful and our waiter was incredibly attentive.", "label": "positive"}
{"review": "Fantastic experience - the steak was cooked to perfection!", "label": "positive"}
{"review": "Had to wait over an hour for our food, which was just mediocre.", "label": "negative"}
{"review": "Very disappointed. The food was cold and the service was rude.", "label": "negative"}
{"review": "Pasta dish was average, nothing special. But the dessert was delightful.", "label": "positive"}
{"review": "I loved the vibrant atmosphere and the live music added a great touch.", "label": "positive"}
{"review": "Terrible experience. The restaurant was too noisy and food was overpriced.", "label": "negative"}
{"review": "Delicious sushi and the presentation was stunning!", "label": "positive"}`}
            </pre>
          </li>
          <li className="mb-2">
            <strong>Data Balance:</strong> When fine-tuning a multi-class
            classification model, ensure that you have a balanced distribution
            of examples across different classes. For instance, if you have a
            dataset for classifying news articles into categories like sports,
            politics, and entertainment, aim for a similar number of examples
            for each category.
          </li>
          <li className="mb-2">
            <strong>Data Augmentation:</strong> To augment your training data,
            you can apply techniques like data rotation, flipping, or adding
            noise. For image classification, you can use libraries like imgaug
            or Albumentations to perform data augmentation on your image
            dataset.
          </li>
          <li className="mb-2">
            <strong>Data Preprocessing:</strong> Depending on the task, you may
            need to preprocess your data. You can tokenize the text data using
            libraries like spaCy or NLTK, and perform tasks like stemming or
            lemmatization.
          </li>
          <li className="mb-2">
            <strong>Data Split:</strong> Split your dataset into training,
            validation, and testing sets. For example, you can use the
            train_test_split function from the scikit-learn library to split
            your data into a 70-15-15 ratio for training, validation, and
            testing respectively.
          </li>
          <li className="mb-2">
            <strong>Model Selection:</strong> Choose the appropriate base model
            for your task. For instance, you can consider using models like
            BERT, GPT, or RoBERTa, depending on the specific requirements of
            your project.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BestPracticesPage;
