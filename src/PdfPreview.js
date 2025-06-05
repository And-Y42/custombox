// PdfPreview.js
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyPdf from './MyPdf';

function PdfPreview({ data }) {
  return (
    <PDFViewer width={700} height={400}>
      <MyPdf {...data} />
    </PDFViewer>
  );
}

export default PdfPreview;
