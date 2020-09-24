/**
 * Created by qiqf on 2020/9/20
 */

/**
 * 双向链表
 */

/**
 * export TwoWayLinkedList
 *
 * @type {TwoWayLinkedList}
 */
module.exports = TwoWayLinkedList

/**
 * nodes of the linked list
 *
 * @param {any?} data
 * @param {Object|null?} prev
 * @param {Object|null?} next
 * @constructor
 */
function Node(data, prev, next) {
  this.data = data || null
  this.prev = prev || null
  this.next = next || null
}

/**
 * The Constructor of this TwoWayLinkedList
 *
 * @param {object} options
 * @param {string} options.insertWay. default head
 * @constructor
 */
function TwoWayLinkedList(options = {}) {
  if (!(this instanceof TwoWayLinkedList)) {
    return new TwoWayLinkedList(options)
  }

  this.insertWay = options.insertWay || 'head'
  this.length = 0
  this.head = new Node()
}

/**
 * Create a node
 *
 * @param {any|Array} data
 * @return {boolean}
 */
TwoWayLinkedList.prototype.createElem = function createElem(data) {
  if (Array.isArray(data)) {
    data.forEach(this.createElem.bind(this))
    return true
  }

  const { head } = this
  const newNode = new Node(data)

  newNode.next = head.next
  head.next.prev = newNode
  newNode.prev = head
  head.next = newNode

  return true
}
