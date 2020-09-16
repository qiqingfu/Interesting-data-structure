/**
 * Created by qiqf on 2020/9/12
 */

const { createAssert } = require('util/index')

const assert = createAssert('SequenceList')

/**
 *
 * export SequenceList
 *
 * @type {SequenceList}
 */
module.exports = SequenceList

/**
 *
 * Constructors of sequence list
 *
 * @param {number} size
 * @constructor
 */
function SequenceList(size) {
  if (!(this instanceof SequenceList)) {
    return new SequenceList(size)
  }

  this.maxSize = size || 100
  this.length = 0
  this.elem = []
}

/**
 *
 * create an elem
 *
 * @param {number} elem
 * @return {boolean}
 */
SequenceList.prototype.pushElem = function pushElem(elem) {
  assert(this.length !== this.maxSize, 'the sequence list is full.')
  this.elem[this.length] = elem
  this.length++

  return true
}

/**
 *
 * find the elements in the table below
 *
 * @param {number} index
 * @return {any}
 */
SequenceList.prototype.getElem = function getElem(index) {
  assert(
    !(index < 1 || index > this.length),
    'bit sequence beyond length range.'
  )
  return this.elem[index - 1]
}

/**
 *
 * find the ordinal location of the element
 *
 * @param {any} elem
 * @return {number}
 */
SequenceList.prototype.findIndex = function findIndex(elem) {
  let i = 0
  for (let j = 0; j < this.length; j++) {
    if (this.elem[j] === elem) {
      i = j + 1
      break
    }
  }
  return i || -1
}

/**
 *
 * insert an element in the index position
 *
 * @param {any} elem
 * @param {number} index
 * @return {boolean}
 */
SequenceList.prototype.insertElem = function insertElem(elem, index) {
  assert(
    !(index < 1 || index > this.length),
    'bit sequence beyond length range.'
  )
  assert(this.length !== this.maxSize, 'the sequence list is full.')

  for (let i = this.length; i >= index; i--) {
    this.elem[i] = this.elem[i - 1]
  }
  this.elem[index - 1] = elem
  this.length++

  return true
}

/**
 *
 * delete an element accord to index location
 *
 * @param {number} index
 * @return {boolean}
 */
SequenceList.prototype.deleteElem = function deleteElem(index) {
  assert(
    !(index < 1 || index > this.length),
    'bit sequence beyond length range.'
  )

  const elem = this.elem[index - 1]
  for (let i = index; i <= this.length; i++) {
    this.elem[i - 1] = this.elem[i]
  }
  this.length--

  return elem
}
