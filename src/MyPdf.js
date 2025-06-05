import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 14 },
  heading: { fontSize: 18, marginBottom: 10 },
  label: { marginBottom: 4, fontWeight: 'bold' },
  value: { marginBottom: 10 },
  section: { marginBottom: 12 },
});

const MyPdf = ({ orderNo, weight, dimension, material }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Packaging Order Summary</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Order No.</Text>
        <Text style={styles.value}>{orderNo || '—'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Dimensions (in inches)</Text>
        <Text style={styles.value}>{dimension || '—'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Weight</Text>
        <Text style={styles.value}>{weight ? `${weight} ECT` : '—'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Material</Text>
        <Text style={styles.value}>{material || '—'}</Text>
      </View>
    </Page>
  </Document>
);

export default MyPdf;
