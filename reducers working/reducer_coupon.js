import COUPON_DATA from "./mockdata_coupons.json";
const INITIAL_STATE = COUPON_DATA;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
