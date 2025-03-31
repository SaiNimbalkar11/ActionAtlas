import React from "react";
import { Typography, Form, Input, Button, Radio, Card } from 'antd';

const { Title } = Typography;

function ToDoForm({ onFinish }) {
  const formStyle = {
    border: '1px solid #d9d9d9',
    borderRadius: '8px',
    padding: '24px',
    width: '300px',
    margin: '20px auto',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  };

  const radioGroupStyle = {
    width: '100%',
  };

  const radioStyle = {
    display: 'block',
    height: '36px',
    lineHeight: '36px',
    marginBottom: '8px',
  };

  const buttonStyle = {
    width: '100px',
  };

  return (
    <Card>
      <Title level={3} style={{ textAlign: 'center' }}>Add ToDo</Title>
      <Form
        style={formStyle}
        name="basic"
        autoComplete="off"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label={<span style={{ fontWeight: 600 }}>Description</span>}
          name="description"
          rules={[{ required: true, message: 'Please write the description!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<span style={{ fontWeight: 600 }}>Priority</span>}
          name="priority"
          rules={[{ required: true, message: 'Please select a priority!' }]}
        >
          <Radio.Group style={radioGroupStyle}>
            <Radio style={radioStyle} value="IU">Important & Urgent</Radio>
            <Radio style={radioStyle} value="INU">Important, Not Urgent</Radio>
            <Radio style={radioStyle} value="UNI">Urgent, Not Important</Radio>
            <Radio style={radioStyle} value="NINU">Not Important, Not Urgent</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button
            type="primary"
            shape="round"
            htmlType="submit"
            style={buttonStyle}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default ToDoForm;