
import React from 'react';
import { Button, Form, Input } from 'antd';

import './Form.css';



const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
};

const validateMessages = {
    required: '${name} is required!',
};

const onFinish = (values, handleSubmit) => {
    handleSubmit(values)
};

function BoxForm(props) {
    const { handleSubmit, text } = props
    return (
        <div>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={(values) => onFinish(values.text, handleSubmit)}
                validateMessages={validateMessages}
                className='Form-margin-top Form-margin-bottom'
            >

                <Form.Item name={'text'} wrapperCol={{ ...layout.wrapperCol }} rules={[{ required: true }, { min: 4, max:500 }]}>
                    <Input.TextArea rows={4} value={text} />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                    <Button type="primary" htmlType="submit" block>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default BoxForm;