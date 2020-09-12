/**
 * Created by qiqf on 2020/9/12
 */

exports.createAssert = function (type) {
  return function assert (condition, msg) {
    if (!condition) throw new Error(`[${type}] ${msg}`)
  }
}
