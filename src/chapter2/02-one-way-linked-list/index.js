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
function OneWayLinkedList(options = {}) {
  if (!(this instanceof OneWayLinkedList)) {
    return new OneWayLinkedList(options)
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
OneWayLinkedList.prototype.createElem = function createElem(data) {
  if (Array.isArray(data)) {
    data.forEach(this.createElem.bind(this))
    return true
  }

  const { head } = this
  head.next = new Node(data, head.next)
  this.length++

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

/**
 * insert a new node at the specified location
 *
 * @param {number} index
 * @param {any} data
 * @return {boolean}
 * [head] -> [a] -> [b] -> [c] -> [d]
 * index = 3
 * find b(3 - 1)
 */
OneWayLinkedList.prototype.insertElem = function insertElem(index, data) {
  const { head } = this
  let p = head
  let j = 0

  while (p && j < index - 1) {
    p = p.next
    j++
  }

  /**
   * !p maybe index > linkedList.length
   * j > index - 1 maybe the index is 0
   */
  assert(p && j > index - 1, 'index illegal value. it should be 1 <= index < n')

  head.next = new Node(data, head.next)
  this.length++

  return true
}

/**
 * Delete the node that specified the subscript
 *
 * @param {number} index
 * @return {any}
 * [head] -> [a] -> [b] -> [c] -> [d]
 * index = 3
 * find b(3 - 1) node
 */
OneWayLinkedList.prototype.deleteElem = function deleteElem(index) {
  const { head } = this
  let p = head
  let j = 0

  while (p.next && j < index - 1) {
    p = p.next
    j++
  }

  assert(
    p.next && j > index - 1,
    'index illegal value. it should be 1 <= index < n'
  )

  const delNode = p.next
  p.next = delNode.next
  this.length--

  return delNode.data
}
