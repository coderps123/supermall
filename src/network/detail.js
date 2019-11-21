import {request} from "./request";

export function getDetailData(iid) {
  return request({
    url: '/api/v1/detail',
    params: {
      iid
    }
  })
}

export class baseInfo {
  constructor (columns, itemInfo, shopInfo) {
    this.columns = columns

    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.title = itemInfo.title

    this.services = shopInfo.services
  }
}