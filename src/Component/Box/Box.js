import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import axios from 'axios';

import BoxForm from '../BoxForm/BoxForm';
import NumberEmoji from '../NumberEmoji/NumberEmoji';
import './Box.css';


;


function Box() {
  const [text, setText] = useState('');
  const [score, setScore] = useState();

  useEffect(() => {
    async function fetchData() {
      const respond = await axios.post('http://127.0.0.1:8000', {text: text})
      setScore(respond.data.result.compound)
      console.log(respond.data.result.compound)
    }
    fetchData();
  }, [text]);

  return (
    <>

      <Card title={<BoxForm handleSubmit={setText} text={text} />} bordered={false} style={{ width: 700, height: 400 }}>
        {text} <NumberEmoji score={score} />
      </Card>

    </>

  );
};
export default Box;