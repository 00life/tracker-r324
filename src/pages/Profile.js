import React from 'react';
import Layout from '../context/Layout';

function Profile() {
  return (
    <Layout>
      <data value='/profile'></data>
      <div>
        test
        <input type='button' value='Test'/>
        <input type="text" />
      </div>
    </Layout>
  )
}

export default Profile