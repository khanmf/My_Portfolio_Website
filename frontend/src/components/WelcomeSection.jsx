import React from 'react';

const WelcomeSection = ({ darkMode }) => {
  return (
    <section 
      className={`py-16 px-8 ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`}
      style={{ 
        backgroundColor: darkMode ? '#1e293b' : '#F8F9FA',
        padding: '4rem 2rem'
      }}
    >
      <div 
        className="mx-auto"
        style={{ 
          maxWidth: '900px', 
          margin: 'auto' 
        }}
      >
        <p 
          className="leading-relaxed"
          style={{ 
            fontSize: '1.25rem', 
            fontFamily: "'Inter', sans-serif", 
            lineHeight: '1.75',
            color: darkMode ? '#e2e8f0' : '#374151'
          }}
        >
          <span className="text-2xl">👋</span> <strong>Hi, I'm Dr. Mohemmed Faraz Khan — welcome to my corner of the scientific web.</strong>
          <br /><br />
          From decoding molecules to designing smarter workflows, I bring years of academic rigor and creative precision to help you write, design, and deliver scientific impact. Whether you're a student, researcher, or biotech innovator, you're in the right place for clear thinking, clean writing, and cutting-edge support. Let's build something extraordinary — from your next manuscript to your next idea.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;