import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice"
import notificationsReducer from "./slices/notification"
import cartRedducer from "./slices/cart.slice"
import serviceCatReducer from "./slices/serviceList.slice"
import serviceSubCategoryReducer from "./slices/serviceSubCat.slice"
import appRducer from "./slices/app.slice"
import jwtReducer from './slices/jwt.slice'
export default configureStore({
    reducer : {
        user : userReducer,
        notifications : notificationsReducer,
        cart : cartRedducer,
        serviceCategory: serviceCatReducer,
        serviceSubCategory: serviceSubCategoryReducer,
        appConfig: appRducer,
        jwt : jwtReducer
    }
})