import { router } from '@inertiajs/react';
import React, { useEffect } from 'react';
import Layout from '../../Components/Layout';

const Index = (props) => {
  useEffect(() => {
    console.log('hello i am comming...', props);

  }, [props])
  const handleSubmit = () => {
    router.post(route('note.store'), { 'data': 'data' })
  }
  return (


    <Layout>
      hello
      <button onClick={handleSubmit}>
        Button
      </button>
    </Layout>
  );
}

export default Index;
