// 判断是否有权限
export function checkArray(key) {
  const permarr = ['admin']
  console.log(permarr)
  const index = permarr.indexOf(key)
  if (index > -1) {
    return true
  } else {
    return false
  }
}
