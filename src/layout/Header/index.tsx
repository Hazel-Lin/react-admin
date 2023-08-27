import { Button, Layout, theme } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { updateCollapse } from '@/redux/modules/menu/actions'

const { Header } = Layout
function LayoutHeader(props: any) {
  const { isCollapse, updateCollapse } = props
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => updateCollapse(!isCollapse)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
}
function mapStateToProps(state: any) {
  return {
    isCollapse: state.isCollapse,
  }
}
const mapDispatchToProps = { updateCollapse }
export default connect(mapStateToProps, mapDispatchToProps)(LayoutHeader)
