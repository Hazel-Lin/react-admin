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

export default Logo
