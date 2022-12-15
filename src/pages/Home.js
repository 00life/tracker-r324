import React from 'react';
import Layout from '../context/Layout';
import { Link } from 'react-router-dom';


function Home() {
  
  return (
    <Layout>
      <data value='/'></data>
      <div>
        test
        <input type='button' value='Test'/>
        <input type="text" />
        <Link to='/request'>REQUEST</Link>
        <input type="file" />
      </div>
    </Layout>
  )
}

export default Home