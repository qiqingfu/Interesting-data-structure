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

  describe('findIndex', () => {
    let sequenceList
    const createSeq = () => {
      sequenceList = new SequenceList()
      const lists = ['a', 'b', 'c', 'd', 'e', 'f']

      for (let i = 0; i < lists.length; i++) {
        const val = lists[i]
        sequenceList.pushElem(val)
      }
    }

    beforeEach(() => {
      createSeq()
    })

    test('findIndex 获取 a 元素的位序', () => {
      expect(sequenceList.findIndex('a')).toBe(1)
    })

    test('findIndex 获取 f 元素的位序', () => {
      expect(sequenceList.findIndex('f')).toBe(6)
    })

    test('findIndex 查询不存在的元素时, 位序返回 -1', () => {
      expect(sequenceList.findIndex('y')).toBe(-1)
    })
  })

  describe('insertElem', () => {
    let sequenceList
    const createSeq = () => {
      sequenceList = new SequenceList()
      const lists = ['a', 'b', 'c']

      for (let i = 0; i < lists.length; i++) {
        const val = lists[i]
        sequenceList.pushElem(val)
      }
    }

    beforeEach(() => {
      createSeq()
    })

    test('insertElem 插入元素的位序小于1时, 报错', () => {
      expect(() => {
        sequenceList.insertElem('d', 0)
      }).toThrowError('[SequenceList] bit sequence beyond length range.')
    })

    test('insertElem 插入元素的位序大于顺序表的长度时, 报错', () => {
      expect(() => {
        sequenceList.insertElem('d', sequenceList.length + 1)
      }).toThrowError('[SequenceList] bit sequence beyond length range.')
    })

    test('insertElem 在位序1插入元素 d', () => {
      expect(sequenceList.insertElem('d', 1)).toBeTruthy()
      expect(sequenceList.length).toBe(4)
      expect(sequenceList.elem).toEqual(['d', 'a', 'b', 'c'])
    })

    test('insertElem 在位序3插入元素 d', () => {
      expect(sequenceList.insertElem('d', 3)).toBeTruthy()
      expect(sequenceList.length).toBe(4)
      expect(sequenceList.elem).toEqual(['a', 'b', 'd', 'c'])
    })
  })

  describe('deleteElem', () => {
    let sequenceList
    const createSeq = () => {
      sequenceList = new SequenceList()
      const lists = ['a', 'b', 'c']

      for (let i = 0; i < lists.length; i++) {
        const val = lists[i]
        sequenceList.pushElem(val)
      }
    }

    beforeEach(() => {
      createSeq()
    })

    test('deleteElem 删除的位序小于1时, 报错', () => {
      expect(() => {
        sequenceList.deleteElem(0)
      }).toThrowError('[SequenceList] bit sequence beyond length range.')
    })

    test('deleteElem 删除的位序大于顺序表的长度时, 报错', () => {
      expect(() => {
        sequenceList.deleteElem(sequenceList.length + 1)
      }).toThrowError('[SequenceList] bit sequence beyond length range.')
    })

    test('deleteElem 位序为 1 的元素', () => {
      expect(sequenceList.deleteElem(1)).toBe('a')
      expect(sequenceList.length).toBe(2)
      expect(sequenceList.elem[0]).toEqual('b')
      expect(sequenceList.elem[1]).toEqual('c')
    })
  })
})
