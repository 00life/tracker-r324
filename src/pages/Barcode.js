import React from 'react';
import Layout from '../context/Layout';

function Barcode() {
  return (
    <Layout>
      <data value='/barcode'></data>
      <div>
        test
        <input type='button' value='Test'/>
        <input type="text" />
      </div>
    </Layout>
  )
}

export default Barcode