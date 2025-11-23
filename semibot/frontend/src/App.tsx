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
  const [activePage, setActivePage] = useState<string>('page1');

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
        <Sider className="vertical-toolbar" width={56} collapsible={false}>
          <div className="toolbar-column">
            <Button
              type="text"
              icon={<AppstoreOutlined />}
              className={`toolbar-btn ${activePage === 'page1' ? 'active' : ''}`}
              onClick={() => setActivePage('page1')}
            />
            <Button
              type="text"
              icon={<BuildOutlined />}
              className={`toolbar-btn ${activePage === 'page2' ? 'active' : ''}`}
              onClick={() => setActivePage('page2')}
            />
            <Button
              type="text"
              icon={<FileTextOutlined />}
              className={`toolbar-btn ${activePage === 'page3' ? 'active' : ''}`}
              onClick={() => setActivePage('page3')}
            />
            <Button
              type="text"
              icon={<MessageOutlined />}
              className={`toolbar-btn ${activePage === 'page4' ? 'active' : ''}`}
              onClick={() => setActivePage('page4')}
            />
            <Button
              type="text"
              icon={<BarChartOutlined />}
              className={`toolbar-btn ${activePage === 'page5' ? 'active' : ''}`}
              onClick={() => setActivePage('page5')}
            />
            <Button
              type="text"
              icon={<CodeOutlined />}
              className={`toolbar-btn ${activePage === 'page6' ? 'active' : ''}`}
              onClick={() => setActivePage('page6')}
            />
          </div>
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