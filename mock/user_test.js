const User_list = [
  {
    nick: 'wl',
    phone: 15811111111,
    name: 'weilei',
    subject: '前端',
    job: '前端',
    year: 3,
    updateTime: '2019-12-28'
  },
  {
    nick: 'wl2',
    phone: 15822222222,
    name: 'weilei2',
    subject: '后端',
    job: '后端',
    year: 3,
    updateTime: '2019-12-28'
  }, {
    nick: 'wl3',
    phone: 15833333333,
    name: 'weilei3',
    subject: '客户端',
    job: '客户端',
    year: 3,
    updateTime: '2019-12-28'
  }
]

module.exports = [
  // user list
  {
    url: '/vue-element-admin/user_test/User_list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: User_list.length,
          items: User_list
        }
      }
    }
  }
]
