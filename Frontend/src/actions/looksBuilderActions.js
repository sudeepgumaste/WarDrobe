export const togglePopUpState = () => ({
  type: "TOGGLE_POP_UP_STATE"
})

export const addURLToCatalogue = (url) => ({
  type: "ADD_URL_TO_CATALOGUE",
  url
})

export const setSelectedItem = (item) => ({
  type: "SET_SELECTED_ITEM",
  item
})

export const setSelectedCategory = (selectedWear) => ({
  type: "SET_SELECTED_WEAR",
  selectedWear
})

export const removeItem = (id) => ({
  type: "REMOVE_ITEM",
  id
})