// src/components/PrintToPDF.js
import React from 'react';
import { AiOutlinePrinter } from 'react-icons/ai'; // Import the print icon
import styles from './PrintToPDF.module.css'; // Import custom CSS for styling

const PrintToPDF = () => {
  const handlePrint = () => {
    window.print(); // Trigger print functionality
  };

  return (
    <div className={styles.printButtonContainer}>
      <button
        onClick={handlePrint}
        className={styles.printButton}
        aria-label="Print to PDF"
        title="Print to PDF" // Tooltip for better UX
      >
        <AiOutlinePrinter size={24} /> {/* Print icon with size */}
      </button>
    </div>
  );
};

export default PrintToPDF;
