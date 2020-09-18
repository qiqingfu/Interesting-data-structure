/**
 * Created by qiqf on 2020/9/18
 */

import OneWayLinkedList from '@/chapter2/02-one-way-linked-list/index'
import { describe, test, expect, beforeEach } from '@jest/globals'

/**
 * hook
 */
let oneWayLinked
const beforeEachFn = () => {
  oneWayLinked = new OneWayLinkedList()
  const lists = ['a', 'b', 'c', 'd']

  for (let i = 0; i < lists.length; i++) {
    const val = lists[i]
    oneWayLinked.createElem(val)
  }
}

describe('OneWayLinkedList', () => {
  describe('OneWayLinkedList 非实例', () => {
    test('不使用 new OneWayLinkedList 也可以创建实例对象', () => {
      const oneWayLinkedList = OneWayLinkedList()
      expect(typeof oneWayLinkedList.createElem).toBe('function')
    })
  })

  describe('createElem', () => {
    beforeEach(beforeEachFn)

    test('头插法添加一个 e 数据', () => {
      expect(oneWayLinked.createElem('e')).toBeTruthy()
      const { head } = oneWayLinked
      const p = head.next
      expect(p.data).toBe('e')
      expect(p.next.data).toBe('d')
      expect(oneWayLinked.length).toBe(5)
    })

    test('头插法添加一组数据 [x, y, z]', () => {
      const arr = ['x', 'y', 'z']
      expect(oneWayLinked.createElem(arr)).toBeTruthy()
      expect(oneWayLinked.length).toBe(7)
      const { head } = oneWayLinked
      const p = head.next
      expect(p.data).toBe('z')
      expect(p.next.data).toBe('y')
    })
  })
})
