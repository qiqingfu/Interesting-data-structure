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
  oneWayLinked.createElem(['a', 'b', 'c', 'd'])
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

  describe('getElem', () => {
    beforeEach(beforeEachFn)

    test('获取 index 为 1 节点的值', () => {
      expect(oneWayLinked.getElem(1)).toBe('d')
    })

    test('获取 index 为 4 节点的值', () => {
      expect(oneWayLinked.getElem(4)).toBe('a')
    })

    test('当 index 小于 1 时, 抛错', () => {
      expect(() => {
        oneWayLinked.getElem(0)
      }).toThrowError(
        '[OneWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })

    test('当 index 大于单向链表长度时, 抛错', () => {
      expect(() => {
        oneWayLinked.getElem(5)
      }).toThrowError(
        '[OneWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })
  })

  describe('hasElem', () => {
    beforeEach(beforeEachFn)

    test('值 c 应该在单向链表中', () => {
      expect(oneWayLinked.hasElem('c')).toBeTruthy()
    })

    test('值 x 不应该在单向链表中', () => {
      expect(oneWayLinked.hasElem('x')).not.toBeTruthy()
    })
  })

  describe('insertElem', () => {
    beforeEach(beforeEachFn)

    test('在位置 0 插入数据时, 应报错', () => {
      expect(() => {
        oneWayLinked.insertElem(0, 'e')
      }).toThrowError(
        '[OneWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })

    test('当 index > 单链表长度时, 应报错', () => {
      expect(() => {
        oneWayLinked.insertElem(5, 'e')
      }).toThrowError(
        '[OneWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })

    test('在位置 index 为 1 时, 插入数据 e', () => {
      expect(oneWayLinked.insertElem(1, 'e')).toBeTruthy()
      expect(oneWayLinked.length).toBe(5)
      const { head } = oneWayLinked
      const p = head.next
      expect(p.data).toBe('e')
      expect(p.next.data).toBe('d')
    })

    test('在位置 index 为 4 时, 插入数据 f', () => {
      expect(oneWayLinked.insertElem(4, 'f')).toBeTruthy()
      expect(oneWayLinked.length).toBe(5)
      expect(oneWayLinked.getElem(4)).toBe('f')
      expect(oneWayLinked.getElem(5)).toBe('a')
      expect(oneWayLinked.getElem(3)).toBe('b')
    })
  })
})
