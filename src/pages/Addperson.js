import React from 'react';
import Layout from '../context/Layout';

function Addperson() {
  return (
    <Layout>
      <data value='/addperson'></data>
      <div>
        test
        <input type='button' value='Test'/>
        <input type="text" />
      </div>
    </Layout>
  )
}

export default Addperson