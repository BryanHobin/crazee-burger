import { createContext } from "react";

export default createContext({
 isAdminMode: false,
 setIsAdminMode: () => { },

 isCollapsed: false,
 setIsCollapsed: () => { },

 isAddSelected: true,
 setIsAddSelected: () => { },

 isEditSelected: false,
 setIsEditSelected: () => { },

 currentTab: "",
 setCurrentTab: () => { },

 handleAddProduct: () => { },

 menu: [],
 setMenu: () => { },

 handleDelete: () => { },

 resetMenu: () => { },


 newProduct: {},
 setNewProduct: () => { },


 productSelected: {},
 setProductSelected: () => { },

 handleEdit: () => { },

 titleEditRef: {},

 basket: [],
 setBasket: () => { },

 handleDeleteBasketCard: () => { },

 handleAddToBasket: () => { },

 handleProductSelected: () => { }

})