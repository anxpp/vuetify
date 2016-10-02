import Alerts from './alerts/index'
import Breadcrumbs from './breadcrumbs/index'
import Buttons from './buttons/index'
import Cards from './cards/index'
import Chips from './chips/index'
import Collapsible from './collapsible/index'
import Dropdowns from './dropdowns/index'
import Footer from './footer/index'
import Forms from './forms/index'
import Grid from './grid/index'
import Icons from './icons/index'
import Lists from './lists/index'
import Modal from './modal/index'
import Navbar from './navbar/index'
import Pagination from './pagination/index'
import Parallax from './parallax/index'
import Sidebar from './sidebar/index'
import Slider from './slider/index'
import Tabs from './tabs/index'
import Toasts from './toasts/index'

function bootstrap (...components) {
  let entries = {}

  components.forEach(component => {
    Object.keys(component).forEach(key => {
      entries[`V${key}`] = component[key]
    })
  })

  return entries
}

export default bootstrap(
  Alerts,
  Breadcrumbs,
  Buttons,
  Cards,
  Chips,
  Collapsible,
  Dropdowns,
  Footer,
  Forms,
  Grid,
  Icons,
  Lists,
  Modal,
  Navbar,
  Pagination,
  Parallax,
  Sidebar,
  Slider,
  Tabs,
  Toasts
)