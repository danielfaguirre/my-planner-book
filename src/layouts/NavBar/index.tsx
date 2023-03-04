import { Menu } from "antd"

const NavBar = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={[
        {
          key: 0,
          label: 'Test'
        },
        {
          key: 1,
          label: 'Test 2'
        }
      ]}
    />
  )
}

export default NavBar
