import { Layout, Menu, theme } from 'antd'
import './index.less'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'

import {
  AppstoreOutlined,
  FormOutlined,
  HomeOutlined,
  TableOutlined,
} from '@ant-design/icons'
import Logo from './Side/logo'
import LayoutHeader from './Header'
import { updateCollapse } from '@/redux/modules/menu/actions'

const { Sider, Content } = Layout

function LayoutIndex(props: any) {
  const { isCollapse } = props

  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <section className="container">
      <Sider className = "side" width={220} trigger={null} collapsed={isCollapse}>
        <Logo></Logo>
        <Menu
          className="menu"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['homepage']}
          items={[
            {
              key: 'homepage',
              icon: <HomeOutlined />,
              label: '首页',
            },
            {
              key: 'form',
              icon: <FormOutlined />,
              label: '表单',
            },
            {
              key: 'table',
              icon: <TableOutlined />,
              label: '表格',
            },
            {
              key: 'component',
              icon: <AppstoreOutlined />,
              label: '常用组件',
            },
          ]}
        />
      </Sider>
      <Layout>
       <LayoutHeader></LayoutHeader>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </section>
  )
}
function mapStateToProps(state: any) {
  return {
    isCollapse: state.isCollapse,
  }
}
const mapDispatchToProps = { updateCollapse }
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex)
