/**
 * Created by qiqf on 2020/9/18
 */

/**
 * 单向链表
 */

const { createAssert } = require('util/index')

const assert = createAssert('OneWayLinkedList')

/**
 * export OneWayLinkedList
 *
 * @type {OneWayLinkedList}
 */
module.exports = OneWayLinkedList

/**
 * nodes of the linked list
 *
 * @param {any?} data
 * @param {Object|null?} next
 * @constructor
 */
function Node(data, next) {
  this.data = data || null
  this.next = next || null
}

/**
 * The Constructor of this OneWayLinkedList
 *
 * @param {object} options
 * @param {string} options.insertWay. default head
 * @constructor
 */
function OneWayLinkedList(options) {
  if (!(this instanceof OneWayLinkedList)) {
    return new OneWayLinkedList(options)
  }

  this.insertWay = options.insertWay || 'head'
  this.head = new Node()
}

/**
 * Create a node
 *
 * @param {any|Array} data
 * @return {boolean}
 */
OneWayLinkedList.prototype.createElem = function createElem(data) {
  if (Array.isArray(data)) {
    data.forEach(this.createElem.bind(this))
    return true
  }

  const { head } = this
  head.next = new Node(data, head.next)

  return true
}

/**
 * Based on index values
 *
 * @param {number} index
 * @return {any}
 */
OneWayLinkedList.prototype.getElem = function getElem(index) {
  const { head } = this
  let p = head.next
  let j = 1

  while (j < index && p) {
    p = p.next
    j++
  }

  /**
   * !p maybe index > linkedList.length
   * j > index maybe the index is 0
   */
  assert(p && j > index, ' index illegal value. it should be 1 <= index < n')

  return p.data
}

/**
 * Does the lookup value exist
 *
 * @param {any} data
 * @return {boolean}
 */
OneWayLinkedList.prototype.hasElem = function hasElem(data) {
  const { head } = this
  let p = head.next

  while (p && p.data !== data) {
    p = p.next
  }

  return !!p
}
