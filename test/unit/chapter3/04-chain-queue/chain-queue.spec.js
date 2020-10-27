/**
 * Created by qiqf on 2020/10/26
 */
import ChainQueue from '@/chapter3/04-chain-queue/index'
import { describe, test, expect } from '@jest/globals'

describe('ChainQueue', () => {
  describe('ChainQueue 非实例', () => {
    test('不使用 new ChainQueue 也可以创建实例对象', () => {
      const chainQueue = ChainQueue()
      expect(typeof chainQueue.push).toBe('function')
    })
  })

  describe('push', () => {
    test('ChainQueue.push 入队一个元素 a', () => {
      const chainQueue = ChainQueue(3)
      expect(chainQueue.push('a')).toBeTruthy()
      expect(chainQueue.front.next.data).toBe('a')
    })
  })

  describe('shift', () => {
    test('ChainQueue.shift 出队一个元素 a', () => {
      const chainQueue = ChainQueue()
      const arrs = ['a', 'b', 'c']
      for (let i = 0; i < arrs.length; i++) {
        chainQueue.push(arrs[i])
      }

      expect(chainQueue.shift()).toBe('a')
      expect(chainQueue.length).toBe(2)
      expect(chainQueue.push('d')).toBeTruthy()
      expect(chainQueue.shift()).toBe('b')
      expect(chainQueue.push('e')).toBeTruthy()
      expect(chainQueue.front.next.data).toBe('c')
    })
  })

  describe('getLength', () => {
    test('ChainQueue.push 推入 4 个元素', () => {
      const chainQueue = ChainQueue(5)
      const arrs = ['a', 'b', 'c', 'd']
      for (let i = 0; i < arrs.length; i++) {
        chainQueue.push(arrs[i])
      }
      expect(chainQueue.length).toBe(4)
    })
  })

  describe('getTop', () => {
    test('获取队首元素', () => {
      const chainQueue = ChainQueue(4)
      const arrs = ['a', 'b', 'c']
      for (let i = 0; i < arrs.length; i++) {
        chainQueue.push(arrs[i])
      }
      expect(chainQueue.getTop()).toBe('a')
      expect(chainQueue.shift()).toBe('a')
      expect(chainQueue.getTop()).toBe('b')
      expect(chainQueue.shift()).toBe('b')
      expect(chainQueue.shift()).toBe('c')
      expect(chainQueue.getTop()).toBe(-1)
    })
  })
})
