// import COUPON_DATA from "./mockdata_coupon.json";
const INITIAL_STATE = {
  "couponCode": "",
  "assignDate": "",
  "autoUse": "",
  "couponGroup": "",
  "createDate": "",
  "expiryDate": "",
  "lockOnFirstUse": "",
  "memberLimit": "",
  "startDate": "",
  "memberId": "",
  "totalLimit": ""
}
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "COUPON_LIST" : return state
    default:
      return state;
  }
}