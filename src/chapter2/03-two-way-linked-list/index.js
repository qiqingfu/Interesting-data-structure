/**
 * Created by qiqf on 2020/9/20
 */

/**
 * 双向链表
 */

const { createAssert } = require('util/index')

const assert = createAssert('TwoWayLinkedList')

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
  if (head.next) {
    head.next.prev = newNode
  }
  newNode.prev = head
  head.next = newNode

  this.length++

  return true
}

/**
 * Based on index values
 *
 * @param {number} index
 * @return {any}
 */
TwoWayLinkedList.prototype.getElem = function getElem(index) {
  const node = this._getNode(index)

  return node ? node.data : node
}

/**
 * Does the lookup value exist
 *
 * @param {any} data
 * @return {boolean}
 */
TwoWayLinkedList.prototype.hasElem = function hasElem(data) {
  const { head } = this
  let p = head.next

  while (p && p.data !== data) {
    p = p.next
  }

  return !!p
}

/**
 * insert a new node at the specified location
 *
 * @param {number} index
 * @param {any} data
 * @return {boolean}
 */
TwoWayLinkedList.prototype.insertElem = function insertElem(index, data) {
  const { head } = this
  let p = head.next
  let j = 1

  while (p && j < index) {
    p = p.next
    j++
  }

  assert(p && index >= j, 'index illegal value. it should be 1 <= index <= n')

  // insert before p node
  const newNode = new Node(data)

  newNode.prev = p.prev
  p.prev.next = newNode
  newNode.next = p
  p.prev = newNode

  this.length++

  return true
}

/**
 * Delete the node that specified the subscript
 *
 * @param {number} index
 * @return {any}
 */
TwoWayLinkedList.prototype.deleteElem = function deleteElem(index) {
  const { head } = this
  let p = head.next
  let j = 1

  while (p && j < index) {
    p = p.next
    j++
  }

  /**
   * !p maybe index > linkedList.length
   * index < j maybe the index is 0
   */
  assert(p && index >= j, 'index illegal value. it should be 1 <= index <= n')

  // p had next node
  if (p.next) {
    p.next.prev = p.prev
  }
  p.prev.next = p.next

  this.length--

  return p.data
}

/**
 * Find nodes according to index. easier for test cases and underlying operations
 *
 * @private
 * @param {number} index
 * @return {Object}
 */
TwoWayLinkedList.prototype._getNode = function getNode(index) {
  const { head } = this
  let p = head.next
  let j = 1

  while (p && j < index) {
    p = p.next
    j++
  }

  /**
   * !p maybe index > linkedList.length
   * index < j maybe the index is 0
   */
  assert(p && index >= j, 'index illegal value. it should be 1 <= index <= n')

  return p || null
}
