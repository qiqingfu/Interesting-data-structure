/**
 * Created by qiqf on 2020/9/15
 */
import SequenceList from '@/chapter2/first-sequence-list/index'
import { describe, test, expect, beforeEach } from '@jest/globals'

describe('SequenceList', () => {
  describe('SequenceList 非实例', () => {
    test('不使用 new SequenceList 也可以创建实例对象', () => {
      const sequenceList = SequenceList(5)
      expect(typeof sequenceList.pushElem).toBe('function')
    })
  })

  describe('pushElem', () => {
    test('pushElem 加入元素后, 顺序表的长度增加', () => {
      const sequenceList = new SequenceList(5)
      sequenceList.pushElem(1)
      sequenceList.pushElem(2)
      sequenceList.pushElem(3)

      expect(sequenceList.length).toBe(3)
    })

    test('pushElem 加入元素后, elem 存储存储新增的值', () => {
      const sequenceList = new SequenceList()
      const lists = [1, 2, 3, 4, 5, 6]

      for (let i = 0; i < lists.length; i++) {
        const val = lists[i]
        sequenceList.pushElem(val)
      }

      expect(sequenceList.elem).toEqual(lists)
    })

    test('pushElem 超出指定大小时, 报错', () => {
      const sequenceList = new SequenceList(3)
      const lists = [1, 2, 3]

      for (let i = 0; i < lists.length; i++) {
        const val = lists[i]
        sequenceList.pushElem(val)
      }

      expect(() => {
        sequenceList.pushElem(4)
      }).toThrowError('[SequenceList] the sequence list is full.')
    })
  })

  describe('getElem', () => {
    let sequenceList
    const createSeq = () => {
      sequenceList = new SequenceList()
      const lists = [1, 2, 3, 4, 5, 6]

      for (let i = 0; i < lists.length; i++) {
        const val = lists[i]
        sequenceList.pushElem(val)
      }
    }

    beforeEach(() => {
      createSeq()
    })

    /**
     * 测试内部函数抛出指定的错误
     */
    test('getElem 获取位序如果小于1时, 报错', () => {
      expect(() => {
        sequenceList.getElem(0)
      }).toThrowError('[SequenceList] bit sequence beyond length range.')
    })

    test('getElem 获取位序如果大于顺序表的长度时, 报错', () => {
      expect(() => {
        sequenceList.getElem(sequenceList.length + 1)
      }).toThrowError('[SequenceList] bit sequence beyond length range.')
    })

    test('getElem 根据位序 1 获取对应的值', () => {
      expect(sequenceList.getElem(1)).toBe(1)
    })

    test('getElem 获取 elem 最后一个值', () => {
      expect(sequenceList.getElem(sequenceList.length)).toBe(6)
    })
  })
})
