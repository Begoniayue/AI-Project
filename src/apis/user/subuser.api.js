
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Auto generated 
import { request } from '../request'

export const userSubuserListApi = (params) =>
  request({
    url: `user/subuser/list`,
    method: 'GET',
    data: params,
    requestType: 'String',
    responseType: 'Blob',
    isAuth: true,
  })
