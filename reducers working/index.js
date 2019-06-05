import { combineReducers } from "redux";
import CouponReducer from "./reducer_coupon";

const rootReducer = combineReducers({
  coupons: CouponReducer,
});

export default rootReducer;