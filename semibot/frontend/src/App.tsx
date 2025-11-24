import React, { useState, useEffect } from 'react';
import { Layout, Menu, Input, Badge, Button, Card, Tag, Radio, Carousel, Divider, Segmented } from 'antd';
import * as Icons from '@ant-design/icons';
import './App.css';
import FlowCanvas from "./components/FlowCanvas";
import { ReactFlowProvider } from '@xyflow/react';


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

  // Theme settings state
  const defaultTheme = {
    primaryColor: '#1677FF',
    borderRadius: 6,
    compact: false,
    preset: 'default',
  } as const;

  type ThemeState = {
    primaryColor: string;
    borderRadius: number;
    compact: boolean;
    preset: string;
  };

  const [theme, setTheme] = useState<ThemeState>(() => {
    try {
      const raw = localStorage.getItem('appTheme');
      return raw ? JSON.parse(raw) : defaultTheme;
    } catch (e) {
      return defaultTheme;
    }
  });

  useEffect(() => {
    applyTheme(theme);
    try { localStorage.setItem('appTheme', JSON.stringify(theme)); } catch { }
  }, [theme]);

  function applyTheme(t: ThemeState) {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', t.primaryColor);
    root.style.setProperty('--border-radius', `${t.borderRadius}px`);
    if (t.compact) root.classList.add('compact'); else root.classList.remove('compact');
    // small derived variables
    root.style.setProperty('--primary-color-alpha', hexToRgba(t.primaryColor, 0.12));
  }

  function hexToRgba(hex: string, alpha = 1) {
    const h = hex.replace('#', '');
    const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const presets: Record<string, { primaryColor: string; borderRadius: number; compact: boolean }> = {
    default: { primaryColor: '#1677FF', borderRadius: 6, compact: false },
    dark: { primaryColor: '#22272B', borderRadius: 6, compact: false },
    document: { primaryColor: '#17a589', borderRadius: 8, compact: false },
    blossom: { primaryColor: '#ffb6c1', borderRadius: 10, compact: false },
    v4: { primaryColor: '#1296db', borderRadius: 6, compact: false },
  };

  // Window control handlers
  const handleMinimize = () => {
    (window as any).electronAPI?.minimize();
  };

  const handleMaximize = () => {
    (window as any).electronAPI?.maximize();
  };

  const handleClose = () => {
    (window as any).electronAPI?.close();
  };

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
            onClick={handleMinimize}
          />
          <Button
            type="text"
            icon={<span className="window-icon">□</span>}
            className="window-btn window-restore"
            onClick={handleMaximize}
          />
          <Button
            type="text"
            icon={<span className="window-icon">×</span>}
            className="window-btn window-close"
            onClick={handleClose}
          />
        </div>
      </Header>

      <Layout>
        {/* Left Vertical Toolbar */}
        <Sider className="vertical-toolbar" width={72} collapsible={false}>
          <Segmented
            className="toolbar-segment"
            orientation="vertical"
            value={activePage}
            onChange={(val) => setActivePage(val)}
            options={[
              { value: 'page1', icon: <Icons.AppstoreOutlined /> },
              { value: 'page2', icon: <Icons.BuildOutlined /> },
              { value: 'page3', icon: <Icons.PartitionOutlined /> },
              { value: 'page4', icon: <Icons.ScheduleOutlined /> },
              { value: 'page5', icon: <Icons.SettingOutlined /> },
            ]}
          />
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
            <div className="wiget-page" style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 24 }}>

                <Card style={{ width: 600 }}>
                  <p>This is page 1. Use the toolbar to switch pages.</p>
                  <Tag color="blue">Widget A</Tag>
                  <Tag color="green">Widget B</Tag>
                </Card>

                <Card title={<span><Icons.NotificationOutlined /> <Divider orientation="vertical" /> News and Updates</span>} style={{ width: 600 }}>
                  <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
                    <div>
                      <h3 >1</h3>
                    </div>
                    <div>
                      <h3 >2</h3>
                    </div>
                    <div>
                      <h3 >3</h3>
                    </div>
                    <div>
                      <h3 >4</h3>
                    </div>
                  </Carousel>
                </Card>

              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 24 }}>
                <Card title={<span><Icons.FireOutlined /> <Divider orientation="vertical" /> Start</span>} style={{ width: 450 }}>
                  <p>This is page 1. Use the toolbar to switch pages.</p>
                  <Tag color="blue">Widget A</Tag>
                  <Tag color="green">Widget B</Tag>
                </Card>

                <Card title={<span><Icons.HistoryOutlined /> <Divider orientation="vertical" /> Recent Files</span>} style={{ width: 450 }}>
                  <p>This is page 1. Use the toolbar to switch pages.</p>
                  <Tag color="blue">Widget A</Tag>
                  <Tag color="green">Widget B</Tag>
                </Card>

              </div>


            </div>
          )}

          {activePage === 'page2' && (
            <div className="canvas-page" style={{ width: '100%', height: '100%' }}>
              <ReactFlowProvider>
                <FlowCanvas />
              </ReactFlowProvider>
            </div>
          )}

          {activePage === 'page3' && (
            <div className="canvas-page" style={{ width: '100%', height: '100%' }}>
              <ReactFlowProvider>
                <FlowCanvas />
              </ReactFlowProvider>
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
              <Card title="Page 5 - Settings" style={{ width: 760 }}>
                <div style={{ display: 'flex', gap: 24 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', marginBottom: 8 }}>Theme Preset</label>
                      <div style={{ display: 'flex', gap: 12 }}>
                        {Object.keys(presets).map((p) => (
                          <Button
                            key={p}
                            onClick={() => setTheme(prev => ({ ...prev, ...presets[p], preset: p }))}
                            style={{
                              border: theme.preset === p ? `2px solid var(--primary-color)` : undefined,
                              padding: 12,
                              minWidth: 96,
                              background: theme.preset === p ? 'rgba(0,0,0,0.03)' : undefined,
                            }}
                          >
                            {p}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', marginBottom: 8 }}>Primary Color</label>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <input
                          type="color"
                          value={theme.primaryColor}
                          onChange={(e) => setTheme(prev => ({ ...prev, primaryColor: e.target.value, preset: 'custom' }))}
                          style={{ width: 48, height: 36, border: 'none', padding: 0 }}
                        />
                        <Input value={theme.primaryColor} onChange={(e) => setTheme(prev => ({ ...prev, primaryColor: e.target.value }))} />
                      </div>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', marginBottom: 8 }}>Border Radius</label>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <Input style={{ width: 80 }} value={`${theme.borderRadius}px`} onChange={(e) => {
                          const v = parseInt(String(e.target.value).replace(/[^0-9]/g, '') || '0', 10);
                          setTheme(prev => ({ ...prev, borderRadius: Number.isFinite(v) ? v : prev.borderRadius }));
                        }} />
                        <input type="range" min={0} max={24} value={theme.borderRadius} onChange={(e) => setTheme(prev => ({ ...prev, borderRadius: Number(e.target.value) }))} />
                      </div>
                    </div>


                  </div>


                </div>
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