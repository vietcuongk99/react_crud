import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
function MenuComp ({menu}) {

  const { SubMenu } = Menu;
  
  const renderMenu = (item) => {
    if (!item) return (<></>)
    if (!item.child) return (
      <Menu.Item icon={item.icon ? <FontAwesomeIcon icon={item.icon} /> : ''} key={`item-${item.key}`}>
        <Link to={item.url}>
          {item.title}
        </Link>
      </Menu.Item>
    )
    if (item.child) {
      return (
        <SubMenu icon={item.icon ? <FontAwesomeIcon icon={item.icon} /> : ''} key={`subitem-${item.key}`} mode='inline' title={item.title}>
          {item.child.map(sub => renderMenu(sub))}
        </SubMenu>
      )
    }
  }

  return (
    <Menu mode='inline'>
      {
        menu.map(sub => renderMenu(sub))
      }
    </Menu>)    
}

export default MenuComp