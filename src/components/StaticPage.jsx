// src/components/StaticPage.js
import React from 'react';

const StaticPage = ({ title, content }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default StaticPage;