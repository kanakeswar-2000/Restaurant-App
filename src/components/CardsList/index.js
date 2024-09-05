import './index.css'
import {Component} from 'react'
import Header from '../Header'
import MenuButton from '../MenuButton'
import Eachcard from '../Eachcard'

class CardsList extends Component {
  state = {
    activeMenuCategoryId: '',
    tableMenusList: [],
  }

  updateActiveMenuCategoryId = id => {
    this.setState({activeMenuCategoryId: id})
  }

  componentDidMount() {
    this.gettablemenuslist()
  }

  gettablemenuslist = async () => {
    const response = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )
    const data = await response.json()

    if (response.ok === true) {
      const fetchedData = data[0].table_menu_list.map(eachmenu => ({
        menuCategory: eachmenu.menu_category,
        menuCategoryId: eachmenu.menu_category_id,
        categoryDishes: eachmenu.category_dishes.map(eachitem => ({
          dishId: eachitem.dish_id,
          dishName: eachitem.dish_name,
          dishPrice: eachitem.dish_price,
          dishImage: eachitem.dish_image,
          dishDescription: eachitem.dish_description,
          dishCalories: eachitem.dish_calories,
          dishAvailability: eachitem.dish_Availability,
          addonCat: eachitem.addonCat,
          dishCurrency: eachitem.dish_currency,
        })),
      }))

      this.setState({
        tableMenusList: fetchedData,
        activeMenuCategoryId: fetchedData[0].menuCategoryId,
      })
    }
  }

  filteredData = () => {
    const {tableMenusList, activeMenuCategoryId} = this.state
    if (tableMenusList.length === 0) {
      return []
    }
    const filtereditem = tableMenusList.filter(
      each_menu => each_menu.menuCategoryId === activeMenuCategoryId,
    )
    return filtereditem
  }

  render() {
    const {tableMenusList, activeMenuCategoryId} = this.state
    const activeMenu = this.filteredData()

    return (
      <div className='home-container'>
        <Header />
        <div className='menu-buttons-container'>
          {tableMenusList.map(eachitem => (
            <MenuButton
              details={eachitem}
              key={eachitem.menuCategoryId}
              updateActiveMenuCategoryId={this.updateActiveMenuCategoryId}
              isActive={activeMenuCategoryId === eachitem.menuCategoryId}
            />
          ))}
        </div>
        {activeMenu.length > 0 &&
          activeMenu[0].categoryDishes.map(eachitem => (
            <Eachcard details={eachitem} key={eachitem.dishId} />
          ))}
      </div>
    )
  }
}
export default CardsList
