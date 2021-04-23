import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productListReducer,
     productReviewCreateReducer, 
     productUpdateReducer, 
     productDeleteReducer, 
     productDetailsReducer,
      productCreateReducer, 
      productTopRatedReducer } from "./reducers/productReducers"
import {cardReducer } from "./reducers/cartReducers"
import { userLoginReducer,
     userRegisterReducer,
      userDetailsReducer,
      userUpdateProfileReducer,
      userUpdateReducer,
      userListReducer,
    userDeleteReducer} from  "./reducers/userReducers"
import { orderCreateReducer,
     orderDetailsReducer,
      orderPayReducer,
    orderListMyReducer,
    orderListReducer,
orderDeliverReducer } from "./reducers/orderReducers"


const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cardReducer,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    userList : userListReducer,
    orderCreate : orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay : orderPayReducer,
    userDelete : userDeleteReducer,
    userUpdate : userUpdateReducer,
    productDelete: productDeleteReducer,
    productCreate : productCreateReducer,
    productUpdate : productUpdateReducer,
    productReviewCreate : productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    orderListMy : orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(
    localStorage.getItem("userInfo")
) : null

const shippingAddressFromStorage = localStorage.getItem("shippingAddress") ? JSON.parse(
    localStorage.getItem("shippingAddress")
) : {}


const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(
    localStorage.getItem("cartItems")
) : []

const initialState = {
    cart: { cartItems : cartItemsFromStorage, shippingAddress : shippingAddressFromStorage },
    userLogin : { userInfo : userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store