import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { environment } from '../../../environments/environment';
import { DefaultLayout } from '@brik-base/components';
import { userStore } from '@brik-base/store';
import { UserState } from '@brik-base/interfaces';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const Login = props => {
  const dispatch = useDispatch();
  const onFinish = (formValues = {}) => {
    const email = get(formValues, 'email');
    const password = get(formValues, 'password');
    dispatch(userStore.action.login(email, password, environment.apiUrl, '/api/login'));
  };

  const { data = {}, loading = false } = useSelector((state: UserState) => state.user);

  return (
    <DefaultLayout>
      <div className="login">
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
        >
          <Form.Item
            label="email"
            name="email"
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

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default Login;
