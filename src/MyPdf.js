// MyPdf.js
import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const MyPdf = ({ option, checked }) => (
  <Document>
    <Page>
      <Text>Selected Option: {option}</Text>
      <Text>Checked: {checked ? 'Yes' : 'No'}</Text>
    </Page>
  </Document>
);

export default MyPdf;
