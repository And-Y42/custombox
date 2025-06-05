import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import box_6x6x4 from './box_layouts/6x6x4.png';

const boxLayoutPaths = {
  '6x6x6': '/box_layouts/6x6x6.png',
  '8x8x8': '/box_layouts/8x8x8.png',
  '8x6x4': '/box_layouts/8x6x4.png',
  '10x8x6': '/box_layouts/10x8x6.png',
  '12x12x12': '/box_layouts/12x12x12.png',
  '6x6x4': box_6x6x4,
  '10x10x10': '/box_layouts/10x10x10.png',
  '12x6x6': '/box_layouts/12x6x6.png',
  '8x8x4': '/box_layouts/8x8x4.png',
  '14x14x14': '/box_layouts/14x14x14.png',
};

// PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 18,
    fontFamily: 'Helvetica',
    fontSize: 10,
    backgroundColor: '#fff',
  },
  thankYou: {
    fontSize: 11,
    marginBottom: 5,
    padding: 6,
    backgroundColor: '#f5f5f5',
    border: '1pt solid #aaa',
    borderRadius: 2,
  },
  orderInfoBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    border: '1pt solid #222',
    borderRadius: 2,
    backgroundColor: '#fafbfc',
    padding: '4 2',
  },
  orderInfoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2 4',
    borderRight: '1pt solid #ddd',
  },
  lastOrderInfoItem: {
    borderRight: 0,
  },
  label: {
    fontSize: 9,
    color: '#666',
    marginRight: 3,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#222',
  },
  sustainability: {
    fontSize: 9,
    color: '#444',
    marginBottom: 12,
    marginTop: 2,
    textAlign: 'right',
  },
  section: {
    flex: 1,
    padding: 8,
    border: '1pt solid #bbb',
    borderRadius: 3,
    minHeight: 70,
    height: 90,
    marginRight: 0, // You can use 'gap' instead now
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'uppercase',
    color: '#222',
    borderBottom: '0.5pt solid #e0e0e0',
    paddingBottom: 2,
  },
  placeholder: {
    color: '#bbb',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
  },
  rowSections: {
  flexDirection: 'row',
  gap: 8,
  marginTop: 12,
  marginBottom: 10,
},
});

const MyPdf = ({ orderNo, dimension, weight, material }) => (
  <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
      {/* Top thank you bar */}
      <View style={styles.thankYou}>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>Thanks for your order! </Text>
          This is your digital preview. Let us know if you request any edits or would like additional upgrades. Your logo may be screen resolution. If our production team has concerns about the quality of your artwork file, we will be in touch.
        </Text>
      </View>
      
      {/* Order Info Bar */}
      <View style={styles.orderInfoBar}>
        <View style={styles.orderInfoItem}>
          <Text style={styles.label}>ORDER NO.</Text>
          <Text style={styles.value}>{orderNo || '____'}</Text>
        </View>
        <View style={styles.orderInfoItem}>
          <Text style={styles.label}>DIMENSIONS</Text>
          <Text style={styles.value}>{dimension || '____'}</Text>
        </View>
        <View style={styles.orderInfoItem}>
          <Text style={styles.label}>WEIGHT</Text>
          <Text style={styles.value}>{weight ? `${weight} ECT` : '____'}</Text>
        </View>
        <View style={[styles.orderInfoItem, styles.lastOrderInfoItem]}>
          <Text style={styles.label}>MATERIAL</Text>
          <Text style={styles.value}>{material || '____'}</Text>
        </View>
      </View>
      
      {/* Sustainability/Note */}
      <Text style={styles.sustainability}>
        Sustainable, black ink printed on biodegradable materials.
      </Text>

      {/* Section placeholders */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Print Safe Area in Green</Text>
        {boxLayoutPaths[dimension] ? (
          <Image
            src={boxLayoutPaths[dimension]}
            style={{ width: '90%', height: '90%', margin: '10 auto', objectFit: 'contain' }}
          />
        ) : (
          <Text style={styles.placeholder}>
            [Box layout preview will appear here when dimension is selected]
          </Text>
        )}
      </View>

      <View style={styles.rowSections}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dynamic QR Codes, Landing Page and Scan Tracking</Text>
          <Text style={styles.placeholder}>
            [QR code and info section placeholder]
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping + Handling, Social Icons</Text>
          <Text style={styles.placeholder}>
            [Shipping/social icons section placeholder]
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Upgrades</Text>
          <Text style={styles.placeholder}>
            [Upgrades info section placeholder]
          </Text>
        </View>
      </View>

    </Page>
  </Document>
);

export default MyPdf;
