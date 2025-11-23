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
import './App.css';

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
  <div className={`flow-node flow-node-${color} flow-node-${size}`}>
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
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="app-logo">
          <AppstoreOutlined />
          Semibot
        </div>
 
        
        {/* Window Controls - Right Side */}
        <div className="window-controls">
          <Button 
            type="text" 
            icon={<span className="window-icon">−</span>}
            className="window-btn window-minimize"
          />
          <Button 
            type="text" 
            icon={<span className="window-icon">□</span>}
            className="window-btn window-restore"
          />
          <Button 
            type="text" 
            icon={<span className="window-icon">×</span>}
            className="window-btn window-close"
          />
        </div>
      </Header>
      
      <Layout>
        {/* Left Vertical Toolbar */}
        <Sider className="vertical-toolbar" width={50} collapsible={false}>
          <Button type="text" icon={<AppstoreOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<BuildOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<FileTextOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<MessageOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<BarChartOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<CodeOutlined />} className="toolbar-btn" />
        </Sider>

        {/* Left Side Panel */}
        <Sider className="side-panel" width={300} collapsible={false}>
          <div className="side-panel-content">

            <Input 
              prefix={<SearchOutlined />} 
              placeholder="Find..." 
              className="search-input"
            />
            
            <Menu
              mode="inline"
              defaultSelectedKeys={['primary-entry']}
              defaultOpenKeys={['redirections', 'file-managing']}
              items={menuItems}
              className="side-menu"
            />
          </div>
        </Sider>
        
        <Content className="main-content">
          {/* Empty Canvas - Add your content here */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;