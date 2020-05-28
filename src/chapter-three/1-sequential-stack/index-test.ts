import SequentialStack from "./index";

const stack = new SequentialStack(5);
console.log("栈的最大容量为", stack.size);

console.log("入栈一个元素 1", stack.push(1));
console.log("入栈一个元素 2", stack.push(2));
console.log("入栈一个元素 3", stack.push(3));
console.log("入栈一个元素 4", stack.push(4));
console.log("入栈一个元素 5", stack.push(5));
console.log("入栈一个元素 6", stack.push(6));

console.log("从栈顶出栈一个元素", stack.pop());
console.log("从栈顶出栈一个元素", stack.pop());

console.log("获取栈顶的一个元素", stack.getTop());

console.log("从栈顶出栈一个元素", stack.pop());
console.log("从栈顶出栈一个元素", stack.pop());
console.log("从栈顶出栈一个元素", stack.pop());
console.log("从栈顶出栈一个元素", stack.pop());

console.log("获取栈中的所有元素", stack.getElems());
