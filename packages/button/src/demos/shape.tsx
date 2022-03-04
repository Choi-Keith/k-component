import React from 'react';
import Button from '@keith/button';

const Basic: React.FC<any> = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div style={{ marginRight: '20px' }}>
        round: <Button size="middle">click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        <Button size="middle" shape="circle">
          K
        </Button>
      </div>
    </div>
  );
};

export default Basic;
