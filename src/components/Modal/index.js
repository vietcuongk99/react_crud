
// import { Modal } from 'react-bootstrap';
import { useEffect } from 'react'
import { Modal, Form, Input, Button, Checkbox } from 'antd';
function CustomModal ({user, toggle, setCurrentUser, submit, show}) {

  const [form] = Form.useForm();

  const closeModal = () => {
    toggle(false)
    setCurrentUser({firstName: '', lastName: '', userName: ''})
  }

  const onFinish = (values) => {
    let {firstName, lastName, userName} = {...values}
    submit({firstName, lastName, userName})
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    form.setFieldsValue({ firstName: user.firstName, lastName: user.lastName, userName: user.userName })
    return () => {
      form.resetFields()
    }
  })

  return (
      <Modal
        title="User Information"
        visible={show}
        onOk={onFinish}
        onCancel={closeModal}
        forceRender={true}
        getContainer={false}
        footer={(
          <>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button form="userForm" variant="primary" htmlType="submit">
              Save Changes
            </Button>
          </>
        )}
      >
        <Form
          id='userForm'
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Firstname"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
          </Form.Item>
        </Form>
      </Modal>
  );
}

export default CustomModal