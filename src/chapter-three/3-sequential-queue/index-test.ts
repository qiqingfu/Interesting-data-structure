import SequentialQueue from './index';
const sequentialQueue = new SequentialQueue<number>(10);

console.log('======= 入队元素 ============');
console.log('入栈元素 1', sequentialQueue.push(1));
console.log('入栈元素 2', sequentialQueue.push(2));
console.log('入栈元素 3', sequentialQueue.push(3));
console.log('入栈元素 4', sequentialQueue.push(4));
console.log('入栈元素 5', sequentialQueue.push(5));
console.log('入栈元素 6', sequentialQueue.push(6));


console.log('======= 出队元素 ============');
console.log('从队头出队', sequentialQueue.shift());
console.log('从队头出队', sequentialQueue.shift());
console.log('从队头出队', sequentialQueue.shift());

console.log('======= 入队元素 ============');
console.log('入栈元素 7', sequentialQueue.push(7));
console.log('入栈元素 8', sequentialQueue.push(8));
console.log('入栈元素 9', sequentialQueue.push(9));
console.log('入栈元素 10', sequentialQueue.push(10));
console.log('入栈元素 11', sequentialQueue.push(11));
console.log('入栈元素 12', sequentialQueue.push(12));
console.log('入栈元素 13', sequentialQueue.push(13));

console.log('======= 出队元素 ============');
console.log('从队头出队', sequentialQueue.shift());
console.log('从队头出队', sequentialQueue.shift());
console.log('从队头出队', sequentialQueue.shift());

console.log('======= 入队元素 ============');
console.log('入栈元素 14', sequentialQueue.push(14));
console.log('入栈元素 15', sequentialQueue.push(15));
console.log('入栈元素 16', sequentialQueue.push(16));
console.log('入栈元素 17', sequentialQueue.push(17));

console.log('======= 获取队列的元素个数 ============');
console.log('获取队列中的元素个数', sequentialQueue.getSize());
console.log(sequentialQueue);
