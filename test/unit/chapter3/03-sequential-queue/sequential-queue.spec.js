/**
 * Created by qiqf on 2020/10/26
 */
import SequentialQueue from '@/chapter3/03-sequential-queue/index'
import { describe, test, expect } from '@jest/globals'

describe('SequentialQueue', () => {
  describe('SequentialQueue 非实例', () => {
    test('不使用 new SequentialQueue 也可以创建实例对象', () => {
      const sequentialQueue = SequentialQueue(6)
      expect(typeof sequentialQueue.push).toBe('function')
    })
  })

  describe('SequentialQueue 默认属性', () => {
    test('new SequentialQueue 默认的maxSize 为 100', () => {
      const sequentialQueue = SequentialQueue()
      expect(sequentialQueue.maxSize).toBe(100)
    })
  })

  describe('push', () => {
    test('SequentialQueue.push 入队一个元素 a', () => {
      const sequentialQueue = SequentialQueue(3)
      expect(sequentialQueue.push('a')).toBeTruthy()
      expect(sequentialQueue.base[0]).toBe('a')
    })

    test('SequentialQueue.push 队满的情况', () => {
      const sequentialQueue = SequentialQueue(3)
      const arrs = [1, 2]
      for (let i = 0; i < arrs.length; i++) {
        sequentialQueue.push(arrs[i])
      }
      expect(sequentialQueue.push(3)).toBeFalsy()
      expect(sequentialQueue.getLength()).toBe(2)
    })
  })

  describe('shift', () => {
    test('SequentialQueue.shift 出队一个元素 a', () => {
      const sequentialQueue = SequentialQueue(4)
      const arrs = ['a', 'b', 'c']
      for (let i = 0; i < arrs.length; i++) {
        sequentialQueue.push(arrs[i])
      }

      expect(sequentialQueue.shift()).toBe('a')
      expect(sequentialQueue.push('d')).toBeTruthy()
      expect(sequentialQueue.shift()).toBe('b')
      expect(sequentialQueue.push('e')).toBeTruthy()
      expect(sequentialQueue.base[0]).toBe('e')
    })
  })

  describe('getLength', () => {
    test('SequentialQueue.push 推入 4 个元素', () => {
      const sequentialQueue = SequentialQueue(5)
      const arrs = ['a', 'b', 'c', 'd']
      for (let i = 0; i < arrs.length; i++) {
        sequentialQueue.push(arrs[i])
      }
      expect(sequentialQueue.getLength()).toBe(4)
    })
  })

  describe('getTop', () => {
    test('获取队首元素', () => {
      const sequentialQueue = SequentialQueue(4)
      const arrs = ['a', 'b', 'c']
      for (let i = 0; i < arrs.length; i++) {
        sequentialQueue.push(arrs[i])
      }
      expect(sequentialQueue.getTop()).toBe('a')
      expect(sequentialQueue.shift()).toBe('a')
      expect(sequentialQueue.getTop()).toBe('b')
      expect(sequentialQueue.shift()).toBe('b')
      expect(sequentialQueue.getLength()).toBe(1)
      expect(sequentialQueue.shift()).toBe('c')
      expect(sequentialQueue.getLength()).toBe(0)
    })
  })
})
