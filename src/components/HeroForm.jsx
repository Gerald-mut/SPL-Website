import React from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

export default function HeroForm({ onSuccess }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const { name, email, phone, service, message } = values;

    const text = `Hello, I'm ${name}. I'd like a quote for *${service}*.\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message || "N/A"}`;
    const encoded = encodeURIComponent(text);
    const clientPhone = "+254787005003"; 

    window.open(`https://wa.me/${clientPhone}?text=${encoded}`, "_blank");

    if (onSuccess) onSuccess(); 
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: '1rem',
        borderRadius: '10px'
      }}
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
          <Option value="Event Management & Production">Event Management & Production</Option>
          <Option value="Casting">Casting</Option>
          <Option value="Talent Management">Talent Management</Option>
        </Select>
      </Form.Item>

      <Form.Item name="message" label="Message (Optional)">
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: '#FF5722',
            border: 'none',
            width: '100%'
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
