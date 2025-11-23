import React, { useState } from 'react';
import { Layout, Menu, Input, Badge, Button, Card, Tag } from 'antd';
import {
  AppstoreOutlined,
  SearchOutlined,
  SwapOutlined,
  BuildOutlined,
  LinkOutlined,
  AimOutlined,
  RightOutlined,
  DownOutlined,
  PlayCircleOutlined,
  SyncOutlined,
  CloudUploadOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  EditOutlined,
  CodeOutlined,
  FileTextOutlined,
  BarChartOutlined,
  PaperClipOutlined,
} from '@ant-design/icons';

const { Sider, Content, Header } = Layout;

interface FlowNodeProps {
  children?: React.ReactNode;
  color?: 'purple' | 'teal' | 'brown' | 'white' | 'blue';
  icon?: React.ReactNode;
  label?: string;
  size?: 'sm' | 'md';
}

const FlowNode: React.FC<FlowNodeProps> = ({ 
  children, 
  color = 'purple', 
  icon, 
  label, 
  size = 'md' 
}) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: size === 'sm' ? '6px 12px' : '10px 16px',
    background: 
      color === 'purple' ? '#722ed1' : 
      color === 'teal' ? '#13c2c2' : 
      color === 'brown' ? '#8c6239' : 
      color === 'white' ? '#fff' : 
      '#1890ff',
    color: color === 'white' ? '#333' : '#fff',
    borderRadius: '8px',
    border: color === 'white' ? '2px solid #d9d9d9' : 'none',
    fontSize: size === 'sm' ? '13px' : '14px',
    fontWeight: 500,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    whiteSpace: 'nowrap' as const,
  }}>
    {icon}
    {label || children}
  </div>
);

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: 'campilation',
      icon: <RightOutlined />,
      label: 'Campilation',
    },
    {
      key: 'basic',
      icon: <RightOutlined />,
      label: 'Basic',
    },
    {
      key: 'redirections',
      icon: <DownOutlined />,
      label: 'Redirections',
      children: [
        {
          key: 'prescribing',
          icon: <CodeOutlined />,
          label: 'Prescribing',
        },
        {
          key: 'swapping',
          icon: <SwapOutlined />,
          label: 'Swapping',
        },
        {
          key: 'building-blocks',
          icon: <BuildOutlined />,
          label: 'Building blocks',
        },
        {
          key: 'magnet-link',
          icon: <LinkOutlined />,
          label: 'Magnet link',
        },
        {
          key: 'retargeting',
          icon: <AimOutlined />,
          label: 'Retargeting',
        },
      ],
    },
    {
      key: 'telephony',
      icon: <RightOutlined />,
      label: 'Telephony',
    },
    {
      key: 'coding',
      icon: <RightOutlined />,
      label: 'Coding',
    },
    {
      key: 'file-managing',
      icon: <DownOutlined />,
      label: 'File managing',
      children: [
        {
          key: 'primary-entry',
          icon: <FileTextOutlined />,
          label: 'Primary entry',
        },
        {
          key: 'file-analysis',
          icon: <BarChartOutlined />,
          label: 'File analysis',
        },
        {
          key: 'attachment',
          icon: <PaperClipOutlined />,
          label: 'Attachment',
        },
      ],
    },
  ];

  return (
    <Layout style={{ height: '100vh', width: '100%' }}>
      <Header 
        style={{ 
          background: '#001529', 
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        <div style={{ 
          color: '#fff', 
          fontSize: '18px', 
          fontWeight: 600, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>
          <AppstoreOutlined />
          logflow
        </div>

        
        {/* Window Controls - Right Side */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0' }}>
          <Button 
            type="text" 
            icon={<span style={{ fontSize: '16px' }}>−</span>}
            style={{ 
              color: '#fff', 
              width: 46, 
              height: 64,
              borderRadius: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          />
          <Button 
            type="text" 
            icon={<span style={{ fontSize: '16px' }}>□</span>}
            style={{ 
              color: '#fff', 
              width: 46, 
              height: 64,
              borderRadius: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          />
          <Button 
            type="text" 
            icon={<span style={{ fontSize: '16px' }}>×</span>}
            style={{ 
              color: '#fff', 
              width: 46, 
              height: 64,
              borderRadius: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#e81123'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          />
        </div>
      </Header>
      
      <Layout>
        {/* Left Vertical Toolbar */}
        <Sider
          width={50}
          style={{
            background: '#001529',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px 0',
            gap: '16px'
          }}
          collapsible={false}
        >
          <Button 
            type="text" 
            icon={<AppstoreOutlined />} 
            style={{ color: '#fff', width: 40, height: 40 }}
          />
          <Button 
            type="text" 
            icon={<BuildOutlined />} 
            style={{ color: '#fff', width: 40, height: 40 }}
          />
          <Button 
            type="text" 
            icon={<FileTextOutlined />} 
            style={{ color: '#fff', width: 40, height: 40 }}
          />
          <Button 
            type="text" 
            icon={<MessageOutlined />} 
            style={{ color: '#fff', width: 40, height: 40 }}
          />
          <Button 
            type="text" 
            icon={<BarChartOutlined />} 
            style={{ color: '#fff', width: 40, height: 40 }}
          />
          <Button 
            type="text" 
            icon={<CodeOutlined />} 
            style={{ color: '#fff', width: 40, height: 40 }}
          />
        </Sider>

        {/* Left Side Panel */}
        <Sider 
          width={300} 
          style={{ 
            background: '#fff', 
            borderRight: '1px solid #f0f0f0',
            overflow: 'auto' 
          }}
          collapsible={false}
        >
          <div style={{ padding: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <Button type="text">OBJECTIVES</Button>
              <Button type="primary">ASSETS</Button>
              <Button type="text">
                1 <DownOutlined />
              </Button>
            </div>
            
            <Input 
              prefix={<SearchOutlined />} 
              placeholder="Find..." 
              style={{ marginBottom: '16px' }}
            />
            
            <Menu
              mode="inline"
              defaultSelectedKeys={['primary-entry']}
              defaultOpenKeys={['redirections', 'file-managing']}
              items={menuItems}
              style={{ border: 'none' }}
            />
          </div>
        </Sider>
        
        <Content 
          style={{ 
            padding: '24px', 
            background: '#f5f5f7',
            overflow: 'auto',
            position: 'relative'
          }}
        >
          {/* Empty Canvas - Add your content here */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;