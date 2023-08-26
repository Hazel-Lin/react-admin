import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'

interface FieldType {
  username?: string
  password?: string
  remember?: string
}

function LoginForm() {
  const navigate = useNavigate()

  function onFinish(values: FieldType) {
    message.success('登录成功！')
    // 页面跳转
    navigate('/home/index')
  }
  function onFinishFailed(errorInfo: any) {
    console.log('Failed:', errorInfo)
  }
  return (
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
    <Form.Item<FieldType>
      label="用户名"
      name="username"
      rules={[{ required: true, message: '请输入用户名' }]}
    >
      <Input placeholder="用户名：admin / user"/>
    </Form.Item>

    <Form.Item<FieldType>
      label="密码"
      name="password"
      rules={[{ required: true, message: '请输入密码' }]}
    >
      <Input.Password placeholder="密码：1234"/>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button className="login-btn" type="primary" htmlType="submit">
        登录
      </Button>
    </Form.Item>
  </Form>
  )
}

export default LoginForm
