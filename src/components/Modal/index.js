
import { Modal } from 'react-bootstrap';
import { useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
function CustomModal (props) {

  const [form] = Form.useForm();

  const closeModal = () => {
    props.toggle(false)
    props.setCurrentUser({firstName: '', lastName: '', userName: ''})
  }

  const onFinish = (values) => {
    let {firstName, lastName, userName} = {...values}
    props.submit({firstName, lastName, userName})
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    form.setFieldsValue({ firstName: props.user.firstName, lastName: props.user.lastName, userName: props.user.userName })
  })


  return (
      <Modal show={props.show}>
        <Form
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
        <Modal.Header closeButton onHide={closeModal}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" htmlType="submit">
            Save Changes
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
  );
}

export default CustomModal