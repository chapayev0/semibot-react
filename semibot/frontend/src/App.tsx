import React, { useState } from 'react';
import { Layout, Menu, Input, Badge, Button, Card, Tag } from 'antd';
import * as Icons from '@ant-design/icons';
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
  const [activePage, setActivePage] = useState<string>('page1');

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
        <Sider className="vertical-toolbar" width={72} collapsible={false}>
          <div className="toolbar-column">
            <Button
            name='homebtn'
              type="text"
              icon={<Icons.AppstoreOutlined className="toolbar-icon"/>}
              className={`toolbar-btn ${activePage === 'page1' ? 'active' : ''}`}
              onClick={() => setActivePage('page1')}
            />
            <Button
            name='deskautomationbtn'
              type="text"
              icon={<Icons.BuildOutlined className="toolbar-icon"/>}
              className={`toolbar-btn ${activePage === 'page2' ? 'active' : ''}`}
              onClick={() => setActivePage('page2')}
            />
            <Button
            name='n8nbtn'
              type="text"
              icon={<Icons.PartitionOutlined className="toolbar-icon"/>}
              className={`toolbar-btn ${activePage === 'page3' ? 'active' : ''}`}
              onClick={() => setActivePage('page3')}
            />
            <Button
            name='schedulebtn'
              type="text"
              icon={<Icons.ScheduleOutlined className="toolbar-icon"/>}
              className={`toolbar-btn ${activePage === 'page4' ? 'active' : ''}`}
              onClick={() => setActivePage('page4')}
            />
            <Button
            name='settingsbtn'
              type="text"
              icon={<Icons.SettingOutlined className="toolbar-icon" />}
              className={`toolbar-btn ${activePage === 'page5' ? 'active' : ''}`}
              onClick={() => setActivePage('page5')}
            />
    
          </div>
        </Sider>

        {/* Left Side Panel */}
        <Sider className="side-panel" width={300} collapsible={false}>
          <div className="side-panel-content">

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
          {/* Central canvas: render different widgets depending on activePage */}
          {activePage === 'page1' && (
            <div className="canvas-page">
              <Card title="Page 1 - Overview" style={{ width: 600 }}>
                <p>This is page 1. Use the toolbar to switch pages.</p>
                <Tag color="blue">Widget A</Tag>
                <Tag color="green">Widget B</Tag>
              </Card>
            </div>
          )}

          {activePage === 'page2' && (
            <div className="canvas-page">
              <Card title="Page 2 - Build" style={{ width: 600 }}>
                <p>This is page 2. Build related widgets go here.</p>
                <Button type="primary">Run build</Button>
              </Card>
            </div>
          )}

          {activePage === 'page3' && (
            <div className="canvas-page">
              <Card title="Page 3 - Documents" style={{ width: 600 }}>
                <p>List of documents and entries.</p>
              </Card>
            </div>
          )}

          {activePage === 'page4' && (
            <div className="canvas-page">
              <Card title="Page 4 - Messages" style={{ width: 600 }}>
                <p>Message center widget.</p>
              </Card>
            </div>
          )}

          {activePage === 'page5' && (
            <div className="canvas-page">
              <Card title="Page 5 - Analytics" style={{ width: 600 }}>
                <p>Analytics charts and KPIs.</p>
              </Card>
            </div>
          )}

          {activePage === 'page6' && (
            <div className="canvas-page">
              <Card title="Page 6 - Code" style={{ width: 600 }}>
                <pre style={{ whiteSpace: 'pre-wrap' }}>{`// sample code widget\nconsole.log('Page 6');`}</pre>
              </Card>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;