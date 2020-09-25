/**
 * Created by qiqf on 2020/9/25
 */
import SequentialStack from '@/chapter3/01-sequential-stack/index'
import { describe, test, expect } from '@jest/globals'

describe('SequentialStack', () => {
  describe('SequentialStack 非实例', () => {
    test('不使用 new SequentialStack 也可以创建实例对象', () => {
      const sequentialStack = SequentialStack(10)
      expect(typeof sequentialStack.push).toBe('function')
    })
  })

  describe('SequentialStack 默认属性', () => {
    test('new SequentialStack 默认的maxSize 为 100', () => {
      const sequentialStack = SequentialStack()
      expect(sequentialStack.maxSize).toBe(100)
    })
  })

  describe('push', () => {
    test('SequentialStack.push 入栈一个元素 a', () => {
      const sequentialStack = SequentialStack()
      expect(sequentialStack.push('a')).toBeTruthy()
      expect(sequentialStack.top).toBe(1)
      expect(sequentialStack.base).toBe(0)
      expect(sequentialStack.stack[0]).toBe('a')
    })

    test('SequentialStack.push 栈满时, 入栈失败', () => {
      const sequentialStack = SequentialStack(10)
      const listElems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      for (let i = 0; i < listElems.length; i++) {
        sequentialStack.push(listElems[i])
      }
      expect(sequentialStack.stack.length).toBe(10)
      expect(sequentialStack.push(11)).toBeFalsy()
      expect(sequentialStack.stack.length).toBe(10)
    })
  })

  describe('pop', () => {
    test('SequentialStack.pop 出栈栈顶的一个元素 c', () => {
      const sequentialStack = SequentialStack(10)
      sequentialStack.push(1)
      sequentialStack.push(2)
      sequentialStack.push(3)

      expect(sequentialStack.pop()).toBe(3)
      expect(sequentialStack.top).toBe(2)
    })

    test('SequentialStack.pop 当栈空时出栈一个元素 c, 返回结果为 null', () => {
      const sequentialStack = SequentialStack()
      expect(sequentialStack.pop()).toBeNull()
      expect(sequentialStack.top).toBe(0)
      expect(sequentialStack.base).toBe(0)
    })
  })

  describe('getTop', () => {
    test('SequentialStack.getTop 获取栈顶元素, 栈顶指针并不变化', () => {
      const sequentialStack = SequentialStack(10)
      sequentialStack.push(1)
      sequentialStack.push(2)
      sequentialStack.push(3)

      expect(sequentialStack.getTop()).toBe(3)
      expect(sequentialStack.top).toBe(3)
    })

    test('SequentialStack.getTop 当为空栈时, 获取栈顶元素返回 -1', () => {
      const sequentialStack = SequentialStack()
      expect(sequentialStack.getTop()).toBe(-1)
      expect(sequentialStack.top).toBe(0)
      expect(sequentialStack.base).toBe(0)
    })
  })
})
