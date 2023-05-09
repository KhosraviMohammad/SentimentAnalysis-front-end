
import React from 'react';
import { Input, Button, Space } from 'antd';
import { Col, Row } from 'antd';

import './Form.css';

const { TextArea } = Input;


function Form() {

    return (
        <div>
                <Row gutter={[0,20]} align="middle" wrap className='Form-margin-top Form-margin-bottom' >
                    <Col span={24}>
                        <TextArea rows={4} placeholder="maxLength is 6" maxLength={200} />
                    </Col>


                    <Col span={24}>
                        <Button type="primary" block>
                            send
                        </Button>
                    </Col>
                </Row>
        </div>
    );
};

export default Form;