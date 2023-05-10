import React from 'react';
import { Card } from 'antd';


import BoxForm from '../BoxForm/BoxForm';
import NumberEmoji from '../NumberEmoji/NumberEmoji';

import './Box.css';



function Box() {
  return (
    <>
      
          <Card title={<BoxForm handleSubmit={true} />} bordered={false} style={{ width: 700, height: 400 }}>
            i am too bad <NumberEmoji score={-0.9} />
          </Card>
        
    </>

  );
};
export default Box;