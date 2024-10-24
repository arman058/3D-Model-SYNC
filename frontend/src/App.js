import React from 'react';
import { InboxOutlined, ScanOutlined,AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BellOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button, Upload, message} from 'antd';

const { Dragger } = Upload;
const { Header, Content, Footer } = Layout;
const items = new Array(4).fill(null).map((_, index) => ({
  key: index + 1,
  label: `Home ${index + 1}`,
}));

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgb(2, 0, 36)',
        }}
      >
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        /> */}
      </Header>
      <Content
        style={{
          height: '523px',
          marginTop: '70px',
          padding: '0 48px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            // height: '450px',
            backgroundColor: 'rgb(2,0,36)',
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
            // display: 'flex',
            // flexDirection: 'column',
          }}
        >
          <h1 style={{color:'white'}}>"Bring Your 3D Models to Life with QR Codes"</h1>
          <p style={{color:'white'}}>Scan a QR code and explore interactive 3D models in augmented reality. Upload your own models and share them with ease.</p>
          <p style={{color:'white'}}>Scan QR Code</p>
          <Button>{<ScanOutlined/>}</Button>
          <p style={{color:'white'}}>Upload 3D Model</p>
          <Dragger {...props}>
          {/* style={{width:'303px'}} */}
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text" style={{color:'white'}}>Click or drag file to this area to upload</p>
    <p className="ant-upload-hint" style={{color:'white'}}>
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '18px'
        }}
      >
        3D PRODUCT SYNC ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};
export default App;