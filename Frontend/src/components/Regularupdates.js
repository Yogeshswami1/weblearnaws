// import React, { useState } from 'react';
// import axios from 'axios';
// import { Modal, Form, Input, Button, message, Upload } from 'antd';
// import { InboxOutlined } from '@ant-design/icons';
// import './Regularupdates.css'; // Import your custom CSS

// const { Dragger } = Upload;

// const Regularupdates = () => {
//   const [form] = Form.useForm();
//   const [updateForm] = Form.useForm();
//   const [updateMessage, setUpdateMessage] = useState('');
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [fileList, setFileList] = useState([]);

//   const handleRegister = async (values) => {
//     try {
//       await axios.post('http://localhost:8000/api/register', values);
//       message.success('Registration successful');
//       setShowRegisterModal(false); // Close the modal after successful registration
//     } catch (error) {
//       message.error('Registration failed');
//     }
//   };

//   const handleUpdate = async (values) => {
//     try {
//       // You may want to include fileList with other form data when posting to the server
//       await axios.post('http://localhost:8000/api/updates', { ...values, images: fileList });
//       setUpdateMessage('Update added and emails sent successfully');
//     } catch (error) {
//       setUpdateMessage('Failed to add update');
//     }
//   };

//   const handleFileChange = ({ fileList }) => {
//     setFileList(fileList);
//   };

//   return (
//     <div className="regular-updates">
//       <h1>Regular Updates</h1>

//       <Button type="primary" onClick={() => setShowRegisterModal(true)}>
//         Show Registration Form
//       </Button>

//       <Modal
//         title="Registration Form"
//         visible={showRegisterModal}
//         onCancel={() => setShowRegisterModal(false)}
//         footer={null}
//       >
//         <Form
//           form={form}
//           onFinish={handleRegister}
//           layout="vertical"
//           initialValues={{ remember: true }}
//         >
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: 'Please enter your email!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             label="Name"
//             name="name"
//             rules={[{ required: true, message: 'Please enter your name!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Register
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>

//       <h2>Update Form</h2>
//       <Form
//         form={updateForm}
//         onFinish={handleUpdate}
//         layout="vertical"
//         initialValues={{ remember: true }}
//       >
//         <Form.Item
//           label="Update Content"
//           name="updateContent"
//           rules={[{ required: true, message: 'Please enter update content!' }]}
//         >
//           <Input.TextArea />
//         </Form.Item>
//         <Form.Item
//           label="Upload Images"
//           name="images"
//         >
//           <Dragger
//             fileList={fileList}
//             onChange={handleFileChange}
//             beforeUpload={() => false} // To prevent default upload behavior
//             multiple
//           >
//             <p className="ant-upload-drag-icon">
//               <InboxOutlined />
//             </p>
//             <p className="ant-upload-text">Click or drag file to this area to upload</p>
//           </Dragger>
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Add Update
//           </Button>
//         </Form.Item>
//       </Form>

//       {updateMessage && <p>{updateMessage}</p>}
//     </div>
//   );
// };

// export default Regularupdates;


import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Form, Input, Button, message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './Regularupdates.css'; // Import your custom CSS

const { Dragger } = Upload;

const Regularupdates = ({ userRole }) => {
  const [form] = Form.useForm();
  const [updateForm] = Form.useForm();
  const [updateMessage, setUpdateMessage] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleRegister = async (values) => {
    try {
      await axios.post('https://web.api.saumic.com/api/register', values);
      message.success('Registration successful');
      form.resetFields(); // Reset the registration form fields
      setShowRegisterModal(false); // Close the modal after successful registration
    } catch (error) {
      message.error('Registration failed');
    }
  };

  const handleUpdate = async (values) => {
    try {
      await axios.post('https://web.api.saumic.com/api/updates', { ...values, images: fileList });
      message.success('Update added and emails sent successfully');
      updateForm.resetFields(); // Reset the update form fields
      setShowUpdateModal(false); // Close the modal after successful update
    } catch (error) {
      message.error('Failed to add update');
      setUpdateMessage('Failed to add update');
    }
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <div className="regular-updates">
      <div className="header">
        <h1>Regular Updates</h1>
        <div className="button-group">
          <Button type="primary" onClick={() => setShowRegisterModal(true)}>
            Show Registration Form
          </Button>
          {userRole === 'admin' && (
            <Button type="primary" onClick={() => setShowUpdateModal(true)}>
              Add Update
            </Button>
          )}
        </div>
      </div>

      <Modal
        title="Registration Form"
        visible={showRegisterModal}
        onCancel={() => setShowRegisterModal(false)}
        footer={null}
        afterClose={() => form.resetFields()} // Reset form fields when modal is closed
      >
        <Form
          form={form}
          onFinish={handleRegister}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Update Form"
        visible={showUpdateModal}
        onCancel={() => setShowUpdateModal(false)}
        footer={null}
        afterClose={() => updateForm.resetFields()} // Reset form fields when modal is closed
      >
        <Form
          form={updateForm}
          onFinish={handleUpdate}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Update Content"
            name="updateContent"
            rules={[{ required: true, message: 'Please enter update content!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
};

export default Regularupdates;
