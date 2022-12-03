import React from 'react';
import { useAuth } from '../context/AuthContext';
import Layout from '../context/Layout';

function Home() {
  const {func_test} = useAuth();

  return (
    <Layout>
      <div>
        test
        <input type='button' value='Test' onClick={()=>func_test()}/>
        <input type="text" />
      
      </div>
    </Layout>
  )
}

export default Home