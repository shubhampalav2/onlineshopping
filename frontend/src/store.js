import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import {configureStore} from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer,productDetailsReducer,newReviewReducer,newProductReducer,productReducer} from "./reducers/productReducer";
import {userReducer} from "./reducers/userReducer"
import {
  allUsersReducer,
  //forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
} from "./reducers/userReducer";

import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";


const reducer = combineReducers({
products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
 profile: profileReducer,
 cart: cartReducer,
 newReview: newReviewReducer,
newProduct: newProductReducer,
product: productReducer,
newOrder:newOrderReducer,
allOrders: allOrdersReducer,
order: orderReducer,
myOrders: myOrdersReducer,
orderDetails: orderDetailsReducer,
 allUsers: allUsersReducer,
 userDetails: userDetailsReducer,

//   productReviews: productReviewsReducer,
//   review: reviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;