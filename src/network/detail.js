import {request} from "./request";

export function getDetailData(iid) {
  return request({
    url: '/api/v1/detail',
    params: {
      iid
    }
  })
}