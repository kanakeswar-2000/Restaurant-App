import './index.css'

const MenuButton = props => {
  const {details, updateActiveMenuCategoryId, isActive} = props
  const {menuCategory, menuCategoryId} = details
  const onClickButton = () => {
    updateActiveMenuCategoryId(menuCategoryId)
  }
  const colorstyle = isActive ? 'color' : ''
  return (
    <button onClick={onClickButton} className={`menu-button ${colorstyle}`}>
      {menuCategory}
    </button>
  )
}
export default MenuButton
