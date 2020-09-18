/**
 * Created by qiqf on 2020/9/18
 */

/**
 * 单向链表
 */

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
OneWayLinkedList.prototype.create = function createNode(data) {
  if (Array.isArray(data)) {
    data.forEach(this.create.bind(this))
    return true
  }

  const { head } = this
  head.next = new Node(data, head.next)

  return true
}
