/**
 * Created by qiqf on 2020/9/12
 */

const { createAssert } = require("util/index")
const assert = createAssert("SequenceList")

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
 * @param {any} elem
 * @return {boolean}
 */
SequenceList.prototype.pushElem = function (elem) {
  assert((this.length !== this.maxSize), "the sequence list is full.")
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
SequenceList.prototype.getElem = function (index) {
  assert((index >= 1 || index <= this.length), "bit sequence beyond length range.")
  return this.elem[index - 1]
}

/**
 *
 * find the ordinal location of the element
 *
 * @param {any} elem
 * @return {number}
 */
SequenceList.prototype.findElem = function (elem) {
}

/**
 *
 * insert an element in the index position
 *
 * @param {any} elem
 * @return {number} index
 */
SequenceList.prototype.insertElem = function (elem, index) {
}

/**
 *
 * delete an element accord to index location
 *
 * @param {number} index
 * @return {boolean}
 */
SequenceList.prototype.deleteElem = function (index) {
}
