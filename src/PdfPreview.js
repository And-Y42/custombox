// PdfPreview.js
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyPdf from './MyPdf';

function PdfPreview({ data }) {
  return (
    <PDFViewer width={400} height={600}>
      <MyPdf {...data} />
    </PDFViewer>
  );
}

export default PdfPreview;
