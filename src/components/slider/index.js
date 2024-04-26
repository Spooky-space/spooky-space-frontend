// parent component
import Slider from "./Slider"
// child component
import Item from "./Item"
// attaches the child component to the parent so you can access it simply be importing the parent
Slider.Item = Item
// allows access to item when importing Slider making related components easier to read and maintain
export default Slider
