import React, { useState } from 'react';
import dArrow from '../icons/down arrow.png';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1);

  const faqItems: FAQItem[] = [
    {
      question: "Lorem Ipsum Dolor Sit Amet Consectetur?",
      answer: "This is the answer to the first question."
    },
    {
      question: "Benefits Of Golden Visa?",
      answer: "With our extensive experience, we assist investors in securing UAE Golden Visas, offering a pathway to long-term residency, creating more value from your investment."
    },
    {
      question: "Lorem Ipsum Dolor Sit Amet?",
      answer: "This is the answer to the third question."
    },
    {
      question: "Lorem Ipsum Dolor Sit Amet?",
      answer: "This is the answer to the fourth question."
    }
  ];

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-12 px-4 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-8">
        Frequently Asked Questions?
      </h1>
      
      <div className="border-t border-gray-700">
      {faqItems.map((item, index) => (
  <div key={index} className="border-b border-gray-700">
    <div 
      className="py-5 flex items-center cursor-pointer"
      onClick={() => toggleQuestion(index)}
    >
      <h2 className={`text-xl ${index === 1 ? 'text-amber-400' : 'text-gray-300'}`}>
        {item.question}
      </h2>
      
      <div className="ml-auto text-amber-400 w-[500px] flex justify-end">
        {expandedIndex === index ? (
          <div className="bg-gray-900 border border-amber-700/30 rounded p-4 text-gray-300">
            {item.answer}
          </div>
        ) : (
          <img src={dArrow} alt="Down Arrow" className="w-8 h-8" />
        )}
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default FAQSection;