// 判断是否有权限
// 实现仅有admin角色有权限，其他任意角色都没有权限
export function checkArray(key) {
  const permarr = ['admin']
  const index = permarr.indexOf(key())
  if (index > -1) {
    return true
  } else {
    return false
  }
}
