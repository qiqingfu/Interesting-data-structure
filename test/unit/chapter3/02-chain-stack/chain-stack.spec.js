/**
 * Created by qiqf on 2020/10/26
 */
import ChainStack from '@/chapter3/02-chain-stack/index'
import { describe, test, expect } from '@jest/globals'

describe('ChainStack', () => {
  describe('ChainStack 非实例', () => {
    test('不使用 new ChainStack 也可以创建实例对象', () => {
      const chainStack = ChainStack(6)
      expect(typeof chainStack.push).toBe('function')
    })
  })

  describe('ChainStack 默认属性', () => {
    test('new ChainStack 默认的maxSize 为 100', () => {
      const chainStack = ChainStack()
      expect(chainStack.maxSize).toBe(100)
      expect(chainStack.length).toBe(0)
    })
  })

  describe('push', () => {
    test('ChainStack.push 入栈一个元素 a', () => {
      const chainStack = ChainStack()
      expect(chainStack.push('a')).toBeTruthy()
      expect(chainStack.top.data).toBe('a')
      expect(chainStack.top.next.data).toBe('__root__')
      expect(chainStack.length).toBe(1)
    })
  })

  describe('pop', () => {
    test('ChainStack.pop 出栈栈顶的一个元素 c', () => {
      const chainStack = ChainStack(10)
      chainStack.push(1)
      chainStack.push(2)
      chainStack.push(3)

      expect(chainStack.pop()).toBe(3)
      expect(chainStack.top.data).toBe(2)
      expect(chainStack.length).toBe(2)
    })

    test('SequentialStack.pop 当栈空时出栈一个元素 c, 返回结果为 null', () => {
      const chainStack = ChainStack()
      expect(chainStack.pop()).toBeNull()
      expect(chainStack.base).toEqual(chainStack.top)
    })
  })

  describe('getTop', () => {
    test('ChainStack.getTop 获取栈顶元素, 栈顶指针并不变化', () => {
      const chainStack = ChainStack(10)
      chainStack.push(1)
      chainStack.push(2)
      chainStack.push(3)

      expect(chainStack.getTop()).toBe(3)
      expect(chainStack.top.data).toBe(3)
    })

    test('SequentialStack.getTop 当为空栈时, 获取栈顶元素返回 -1', () => {
      const chainStack = ChainStack()
      expect(chainStack.getTop()).toBe(-1)
      expect(chainStack.top.data).toBe('__root__')
      expect(chainStack.base.data).toBe('__root__')
    })
  })
})
