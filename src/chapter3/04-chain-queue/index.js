/**
 * Created by qiqf on 2020/10/27
 */

/**
 * 链队列
 */

/**
 * export ChainQueue
 * @type {ChainQueue}
 */
module.exports = ChainQueue

/**
 * Node of the chain queue
 * @constructor
 */
function Node(data, next) {
  this.data = data
  this.next = next || null
}

/**
 * ChainQueue Constructor
 * @constructor
 */
function ChainQueue() {
  if (!(this instanceof ChainQueue)) {
    return new ChainQueue()
  }

  this.base = new Node('__head__')
  this.front = this.base
  this.rear = this.base
  this.length = 0
}

/**
 * an element into the queue
 *
 * @param {number} data
 * @return {boolean}
 */
ChainQueue.prototype.push = function push(data) {
  const newNode = new Node(data)
  this.rear.next = newNode
  this.rear = newNode
  this.length++

  return true
}

/**
 * out of the queue an element
 *
 * @returns {any|null}
 */
ChainQueue.prototype.shift = function shift() {
  if (this.front === this.rear) return null
  const p = this.front.next
  const { data } = p
  this.front.next = p.next
  /**
   * 当链队列中只有一个节点时
   */
  if (this.rear === p) {
    this.front = this.base
    this.rear = this.base
  }
  this.length--

  return data
}

/**
 * gets the top queue element
 * @returns {any|number}
 */
ChainQueue.prototype.getTop = function getTop() {
  if (this.front !== this.rear) {
    return this.front.next.data
  }
  return -1
}
