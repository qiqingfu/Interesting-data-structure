import SequentialQueue from '../src/chapter-three/3-sequential-queue/index';

jest.mock('../src/chapter-three/3-sequential-queue/index')


/**
 * 测试实例
 */
 test("new SequentialQueue", () => {
     const sequentialQueue = new SequentialQueue(10);
     expect(SequentialQueue).toHaveBeenCalledTimes(1)
 })

 test("入栈元素", () => {
     const sequentialQueue = new SequentialQueue(10);
     const pushFn = jest.fn(sequentialQueue.push);

     const calledLen = 5;
     for (let i = 1; i <= calledLen; i++) {
        pushFn(1)
     }

     // 入栈函数被调用了 calledLen 次
     expect(pushFn.mock.calls.length).toBe(calledLen);
     expect(pushFn.mock.results[0].value).toBe(true);
 })