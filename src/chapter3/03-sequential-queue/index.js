/**
 * Created by qiqf on 2020/10/26
 */

/**
 * 顺序队列也可以称为循环队列
 */

/**
 * export SequentialQueue
 * @type {SequentialQueue}
 */
module.exports = SequentialQueue

/**
 * ChainStack Constructor
 * @param {number} maxSize
 * @constructor
 */
function SequentialQueue(maxSize) {
  if (!(this instanceof SequentialQueue)) {
    return new SequentialQueue(maxSize)
  }

  this.maxSize = maxSize || 100
  this.base = new Array(this.maxSize)
  this.front = 0
  this.rear = 0
}

/**
 * an element into the queue
 *
 * @param {number} data
 * @return {boolean}
 */
SequentialQueue.prototype.push = function push(data) {
  this.base[this.rear] = data

  /**
   * 队列已满的情况
   */
  if ((this.rear + 1) % this.maxSize === this.front) return false

  /**
   * 防止超出队列的最大长度
   */
  this.rear = (this.rear + 1) % this.maxSize

  return true
}

/**
 * out of the queue an element
 *
 * @returns {any|null}
 */
SequentialQueue.prototype.shift = function shift() {
  /**
   * 栈空的情况
   */
  if (this.front === this.rear) return null

  const val = this.base[this.front]
  this.front = (this.front + 1) % this.maxSize

  return val
}

/**
 * Get the length of the queue
 * @return {number}
 */
SequentialQueue.prototype.getLength = function getLength() {
  return (this.rear - this.front + this.maxSize) % this.maxSize
}

/**
 * gets the top queue element
 * @returns {any|number}
 */
SequentialQueue.prototype.getTop = function getTop() {
  if (this.front === this.rear) return -1

  return this.base[this.front]
}
