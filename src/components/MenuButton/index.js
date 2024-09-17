import './index.css'

const MenuButton = props => {
  const {details, updateActiveMenuCategoryId, isActive} = props
  const {menuCategory, menuCategoryId} = details
  const onClickButton = () => {
    updateActiveMenuCategoryId(menuCategoryId)
  }
  const colorstyle = isActive ? 'color' : ''
  return (
    <li>
      <button
        type='button'
        onClick={onClickButton}
        className={`menu-button ${colorstyle}`}
      >
        {menuCategory}
      </button>
    </li>
  )
}
export default MenuButton
