/**
 * Created by qiqf on 2020/9/12
 */

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

  this.maxSize = size
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
}

/**
 *
 * find the elements in the table below
 *
 * @param {number} index
 * @return {any}
 */
SequenceList.prototype.getElem = function (index) {
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
