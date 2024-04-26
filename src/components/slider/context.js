import React from "react"
//shares data globally with all components within the slider file.
const SliderContext = React.createContext()
// setting the current slide. allows for easier passing of data through the tree without having to manually pass props to each level
export default SliderContext
