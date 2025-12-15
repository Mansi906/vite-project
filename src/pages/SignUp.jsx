import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import "./SignUp.css";

const onFinish = values => {
  console.log('Success:', values);
  try {
    axios.post("http://localhost:8080/auth/signUp",values)
    
  } catch (error) {
    console.log(error)
  }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const SignUp = () => (
  <div className='signup-container'>



    <div className='signup-card'>
      
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
        <h2 className="form-title">Sign Up</h2>


    <Form.Item
      label="Username"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please enter your Email!' }]}
    >
      <Input />
    </Form.Item>

 <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit" 
      >
        SIGN UP
      </Button>
    </Form.Item>
  </Form>
  </div>
  </div>
  
);

export default SignUp;
