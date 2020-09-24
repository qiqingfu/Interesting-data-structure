/**
 * Created by qiqf on 2020/9/23
 */

/**
 * 顺序栈，只有入栈、出栈和取栈顶元素操作
 */

/**
 * export SequentialStack
 *
 * @type {SequentialStack}
 */
module.exports = SequentialStack

/**
 * SequentialStack Constructor
 *
 * @param {number} maxSize
 * @constructor
 */
function SequentialStack(maxSize) {
  if (!(this instanceof SequentialStack)) {
    return new SequentialStack(maxSize)
  }

  this.maxSize = maxSize || 100
  this.stack = new Array(maxSize)
  this.top = 0
  this.base = 0
}

/**
 * an element into the stack
 *
 * @param {number} data
 * @return {boolean}
 */
SequentialStack.prototype.push = function push(data) {
  /**
   * if the stack is full
   */
  if (this.top - this.base === this.maxSize) {
    return false
  }

  this.stack[this.top++] = data

  return true
}

/**
 * out of the stack an element
 *
 * @returns {any|null}
 */
SequentialStack.prototype.pop = function pop() {
  if (this.top !== this.base) {
    return this.stack[--this.top]
  }

  return null
}

/**
 * gets the top stack element
 *
 * @returns {any|number}
 */
SequentialStack.prototype.getTop = function getTop() {
  if (this.top !== this.base) {
    return this.stack[this.top - 1]
  }

  return -1
}
