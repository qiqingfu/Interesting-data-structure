/**
 * Created by qiqf on 2020/9/15
 */
import SequenceList from '@/chapter2/first-sequence-list/index'
import { describe, it, expect } from '@jest/globals'

describe('SequenceList', () => {
  it('pushElem elem length', () => {
    const sequenceList = new SequenceList(5)
    sequenceList.pushElem(1)
    sequenceList.pushElem(2)
    sequenceList.pushElem(3)

    expect(sequenceList.length).toBe(3)
  })
})
