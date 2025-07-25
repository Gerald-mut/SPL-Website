import React from 'react';
import { Form, Input, Select, Button, message } from 'antd';

const { Option } = Select;

export default function HeroForm({ onSuccess }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    message.success('Form submitted successfully!');
    if (onSuccess) onSuccess();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px' }}
    >
      <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="service" label="Service" rules={[{ required: true }]}>
        <Select placeholder="Select a service">
          <Option value="event">Event Management & Production</Option>
          <Option value="casting">Casting</Option>
          <Option value="talent">Talent Management</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ backgroundColor: '#FF5722', border: 'none' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
