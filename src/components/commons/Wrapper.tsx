import React from 'react';

const Wrapper = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className='bg-background-secondary columns-5xl p-6'>
      { children }
    </div>
  );
};

export default Wrapper;