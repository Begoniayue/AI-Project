import { request } from '../request.js'

export const enterpriseList = (params) =>
    request({
        url: `/api/enterprise/enterprise/list`,
        method: 'GET',
        data: params,
        requestBodyType: 'String',
        responseBodyType: 'JSON',
        needToken: false
    })
