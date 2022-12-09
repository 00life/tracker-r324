import React from 'react';
import Layout from '../context/Layout';

function Request() {
  return (
    <Layout>
      <data value='/request'></data>
      <div>
        test
        <input type='button' value='Test'/>
        <input type="text" />
      </div>
    </Layout>
  )
}

export default Request