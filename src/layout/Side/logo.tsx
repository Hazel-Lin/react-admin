import { connect } from 'react-redux'
import logo from '@/assets/images/logo.png'

function Logo(props: any) {
  const { isCollapse } = props
  return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			{!isCollapse ? <h2 className="logo-text">React Admin</h2> : null}
		</div>
  )
}

function mapStateToProps(state: any) {
  return {
    isCollapse: state.isCollapse,
  }
}
export default connect(mapStateToProps)(Logo)
