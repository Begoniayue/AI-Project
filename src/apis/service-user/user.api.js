
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Auto generated 
import { request } from '../request'

export const serviceUserUserGetUserInfoApi = (params) =>
  request({
    url: `service-user/user/getUserInfo`,
    method: 'GET',
    data: params,
    requestType: 'String',
    responseType: 'JSON',
    isAuth: true,
  })
export const serviceUserUserGetUserListApi = (params) =>
  request({
    url: `service-user/user/getUserList`,
    method: 'GET',
    data: params,
    requestType: 'String',
    responseType: 'JSON',
    isAuth: true,
  })
export const serviceUserUserGetUserListByPageApi = (params) =>
  request({
    url: `service-user/user/getUserListByPage`,
    method: 'GET',
    data: params,
    requestType: 'String',
    responseType: 'JSON',
    isAuth: true,
  })
