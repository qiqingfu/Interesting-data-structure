/**
 * Created by qiqf on 2020/10/26
 */

/**
 * 链栈，只有入栈、出栈和取栈顶元素操作
 */

/**
 * export ChainStack
 * @type {ChainStack}
 */
module.exports = ChainStack

/**
 * Node of the chain stack
 * @constructor
 */
function Node(data, next) {
  this.data = data
  this.next = next || null
}

/**
 * ChainStack Constructor
 * @param {number} maxSize
 * @constructor
 */
function ChainStack(maxSize) {
  if (!(this instanceof ChainStack)) {
    return new ChainStack(maxSize)
  }

  this.maxSize = maxSize
  this.base = new Node()
  this.top = this.base
  this.length = 0
}

/**
 * an element into the chain stack
 *
 * @param {number} data
 * @return {boolean}
 */
ChainStack.prototype.push = function push(data) {
  this.top = new Node(data, this.top)
  this.length++
}

/**
 * out of the chain stack an element
 *
 * @returns {any|null}
 */
ChainStack.prototype.pop = function pop() {
  if (this.top === this.base) return false

  const p = this.top
  this.top = this.top.next
  this.length--

  return p.data
}

/**
 * gets the top chain stack element
 *
 * @returns {any|number}
 */
ChainStack.prototype.getTop = function getTop() {
  if (this.top === this.base) return -1

  return this.top.data
}
