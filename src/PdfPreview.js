// PdfPreview.js
import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Document as PdfDoc, Page as PdfPage } from 'react-pdf';
import MyPdf from './MyPdf';

function PdfPreview({ data }) {
  const [blobUrl, setBlobUrl] = useState(null);

  useEffect(() => {
    let url;
    const generatePdf = async () => {
      const blob = await pdf(<MyPdf {...data} />).toBlob();
      url = URL.createObjectURL(blob);
      setBlobUrl(url);
    };
    generatePdf();
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [data]);

  return blobUrl ? (
    <PdfDoc file={blobUrl}>
      <PdfPage pageNumber={1} />
    </PdfDoc>
  ) : (
    <div>Loading preview…</div>
  );
}

export default PdfPreview;
