
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Auto generated 
import { request } from '../request'
export const GetInspirationListApi = (params) =>
    request({
        url: `/getinspirationlist`,
        method: 'GET',
        data: params,
        requestBodyType: 'String',
        responseBodyType: 'JSON',
        needToken: false
    })