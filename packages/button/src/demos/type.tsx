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
        default: <Button>click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        primary: <Button type="primary">click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        dashed: <Button type="dashed">click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        link: <Button type="link">click me</Button>
      </div>
      <div style={{ marginRight: '20px' }}>
        text: <Button type="text">click me</Button>
      </div>
    </div>
  );
};

export default Basic;
