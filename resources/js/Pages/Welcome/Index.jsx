import { Link } from '@inertiajs/react';
import React from 'react';

const Index = () => {
  return (
    <div>
       <Link href={route('note.index')}>Go to Dashboard</Link>
    </div>
  );
}

export default Index;
