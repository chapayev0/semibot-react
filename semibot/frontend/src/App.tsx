import React, { useState } from 'react';
import { Layout, Menu, Input, Badge, Button, Card, Tag } from 'antd';
import * as Icons from "@ant-design/icons";
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
      icon: <Icons.RightOutlined />,
      label: 'Campilation',
    },
    {
      key: 'basic',
      icon: <Icons.RightOutlined />,
      label: 'Basic',
    },
    {
      key: 'redirections',
      icon: <Icons.DownOutlined />,
      label: 'Redirections',
      children: [
        {
          key: 'prescribing',
          icon: <Icons.CodeOutlined />,
          label: 'Prescribing',
        },
        {
          key: 'swapping',
          icon: <Icons.SwapOutlined />,
          label: 'Swapping',
        },
        {
          key: 'building-blocks',
          icon: <Icons.BuildOutlined />,
          label: 'Building blocks',
        },
        {
          key: 'magnet-link',
          icon: <Icons.LinkOutlined />,
          label: 'Magnet link',
        },
        {
          key: 'retargeting',
          icon: <Icons.AimOutlined />,
          label: 'Retargeting',
        },
      ],
    },
    {
      key: 'telephony',
      icon: <Icons.RightOutlined />,
      label: 'Telephony',
    },
    {
      key: 'coding',
      icon: <Icons.RightOutlined />,
      label: 'Coding',
    },
    {
      key: 'file-managing',
      icon: <Icons.DownOutlined />,
      label: 'File managing',
      children: [
        {
          key: 'primary-entry',
          icon: <Icons.FileTextOutlined />,
          label: 'Primary entry',
        },
        {
          key: 'file-analysis',
          icon: <Icons.BarChartOutlined />,
          label: 'File analysis',
        },
        {
          key: 'attachment',
          icon: <Icons.PaperClipOutlined />,
          label: 'Attachment',
        },
      ],
    },
  ];

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="app-logo">
          <Icons.AppstoreOutlined />
          logflow
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
        <Sider className="vertical-toolbar" width={60} collapsible={false}>
          <Button type="text" icon={<Icons.AppstoreOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<Icons.BuildOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<Icons.FileTextOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<Icons.MessageOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<Icons.BarChartOutlined />} className="toolbar-btn" />
          <Button type="text" icon={<Icons.CodeOutlined />} className="toolbar-btn" />
        </Sider>

        {/* Left Side Panel */}
        <Sider className="side-panel" width={300} collapsible={false}>
          <div className="side-panel-content">
            <div className="side-panel-header">
              <Button type="text">OBJECTIVES</Button>
              <Button type="primary">ASSETS</Button>
              <Button type="text">1 <Icons.DownOutlined /></Button>
            </div>
            
            <Input 
              prefix={<Icons.SearchOutlined />} 
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