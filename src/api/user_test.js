import request from '@/utils/request'

export function getUserList(params) {
  return request({
    url: '/vue-element-admin/user_test/User_list',
    method: 'get',
    params
  })
}
