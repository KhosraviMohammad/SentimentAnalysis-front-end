import { Col, Row } from 'antd';

import Box from './Component/Box/Box'
import './App.css';

function App() {
  return (
    <Row>
      <Col xs={2}>
        <div className='App'>
          <Box />
        </div>
      </Col>

    </Row>
  );
}

export default App;
