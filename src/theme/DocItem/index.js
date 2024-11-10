// src/theme/DocItem/index.js
import React from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import PrintToPDF from '@site/src/components/PrintToPDF';

const DocItemWrapper = (props) => {
  return (
    <>
      {/* Print to PDF button at the top */}
      <PrintToPDF />

      {/* Original Doc Content */}
      <OriginalDocItem {...props} />

      {/* Print to PDF button at the bottom */}
      <PrintToPDF />
    </>
  );
};

export default DocItemWrapper;
