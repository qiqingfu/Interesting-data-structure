/**
 * Created by qiqf on 2020/9/18
 */

import TwoWayLinkedList from '@/chapter2/03-two-way-linked-list/index'
import { describe, test, expect, beforeEach } from '@jest/globals'

/**
 * hook
 */
let twoWayLinked
const beforeEachFn = () => {
  twoWayLinked = new TwoWayLinkedList()
  twoWayLinked.createElem(['a', 'b', 'c', 'd'])
}

describe('TwoWayLinkedList', () => {
  describe('TwoWayLinkedList 非实例', () => {
    test('不使用 new TwoWayLinkedList 也可以创建实例对象', () => {
      const twoWayLinkedList = TwoWayLinkedList()
      expect(typeof twoWayLinkedList.createElem).toBe('function')
    })
  })

  describe('createElem', () => {
    beforeEach(beforeEachFn)

    test('头插法添加一个 e 数据', () => {
      expect(twoWayLinked.createElem('e')).toBeTruthy()
      const { head } = twoWayLinked
      const p = head.next
      expect(p.data).toBe('e')
      expect(p.prev.data).toBeNull()
      expect(p.prev.next).toEqual(p)
      expect(twoWayLinked.length).toBe(5)
    })

    test('头插法添加一组数据 [x, y, z]', () => {
      const arr = ['x', 'y', 'z']
      expect(twoWayLinked.createElem(arr)).toBeTruthy()
      expect(twoWayLinked.length).toBe(7)
      const { head } = twoWayLinked
      const p = head.next
      expect(p.data).toBe('z')
      expect(p.next.data).toBe('y')
      expect(p.prev.data).toBeNull()
      expect(p.prev.next).toEqual(p)
    })
  })

  describe('getElem', () => {
    beforeEach(beforeEachFn)

    test('获取 index 为 1 节点的值', () => {
      expect(twoWayLinked.getElem(1)).toBe('d')
    })

    test('获取 index 为 4 节点的值', () => {
      expect(twoWayLinked.getElem(4)).toBe('a')
    })

    test('当 index 小于 1 时, 抛错', () => {
      expect(() => {
        twoWayLinked.getElem(0)
      }).toThrowError(
        '[TwoWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })

    test('当 index 大于双向链表长度时, 抛错', () => {
      expect(() => {
        twoWayLinked.getElem(5)
      }).toThrowError(
        '[TwoWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })
  })

  describe('hasElem', () => {
    beforeEach(beforeEachFn)

    test('值 c 应该在双向链表中', () => {
      expect(twoWayLinked.hasElem('c')).toBeTruthy()
    })

    test('值 x 不应该在双向链表中', () => {
      expect(twoWayLinked.hasElem('x')).not.toBeTruthy()
    })
  })

  describe('insertElem', () => {
    beforeEach(beforeEachFn)

    test('在位置 0 插入数据时, 应报错', () => {
      expect(() => {
        twoWayLinked.insertElem(0, 'e')
      }).toThrowError(
        '[TwoWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })

    test('当 index > 双向链表长度时, 应报错', () => {
      expect(() => {
        twoWayLinked.insertElem(5, 'e')
      }).toThrowError(
        '[TwoWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })

    test('在位置 index 为 1 时, 插入数据 e', () => {
      expect(twoWayLinked.insertElem(1, 'e')).toBeTruthy()
      expect(twoWayLinked.length).toBe(5)
      const { head } = twoWayLinked
      const p = head.next
      expect(p.data).toBe('e')
      expect(p.prev.data).toBeNull()
      expect(p.next.data).toBe('d')
    })

    test('在位置 index 为 4 时, 插入数据 f', () => {
      expect(twoWayLinked.insertElem(4, 'f')).toBeTruthy()
      expect(twoWayLinked.length).toBe(5)
      const insertedNode = twoWayLinked._getNode(4)
      expect(insertedNode.data).toBe('f')
      expect(insertedNode.next.data).toBe('a')
      expect(insertedNode.prev.data).toBe('b')
    })
  })

  describe('deleteElem', () => {
    beforeEach(beforeEachFn)

    test('删除的 index 小于 1 时, 报错', () => {
      expect(() => {
        twoWayLinked.deleteElem(0)
      }).toThrowError(
        '[TwoWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })

    test('删除的 index 大于双向链表长度时, 报错', () => {
      expect(() => {
        twoWayLinked.deleteElem(5)
      }).toThrowError(
        '[TwoWayLinkedList] index illegal value. it should be 1 <= index <= n'
      )
    })

    test('删除的 index 为 1 的节点数据', () => {
      expect(twoWayLinked.deleteElem(1)).toBe('d')
      expect(twoWayLinked.length).toBe(3)
      const { head } = twoWayLinked
      const p = head.next
      // h - d - c - b - a
      expect(p.data).toBe('c')
      expect(p.prev.data).toBeNull()
      expect(p.next.data).toBe('b')
    })

    test('删除的 index 为 4 的节点数据', () => {
      expect(twoWayLinked.deleteElem(4)).toBe('a')
      expect(twoWayLinked.length).toBe(3)
      const node = twoWayLinked._getNode(3)
      expect(node.data).toBe('b')
      expect(node.next).toBeNull()
      expect(node.prev.data).toBe('c')
    })
  })
})
