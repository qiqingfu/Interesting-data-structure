import Linked from "./index";

const linked = new Linked();

// 向链表中添加一个元素
console.log('向链表中添加一个元素 1');
linked.pushElem(1);
console.log('向链表中添加一个元素 2');
linked.pushElem(2);
console.log('向链表中添加一个元素 3');
linked.pushElem(3);
console.log('向链表中添加一个元素 4');
linked.pushElem(4);
console.log('向链表中添加一个元素 5');
linked.pushElem(5);


// 向双向链表中指定下标插入一个元素
console.log('向双向链表中指定下标 2 插入一个元素 6', linked.insertElem(6, 2));
console.log('向双向链表中指定下标 2 插入一个元素 6', linked.insertElem(7, 0));
console.log('向双向链表中指定下标 2 插入一个元素 6', linked.insertElem(8, 6));

console.log(linked.getAllElem());
console.log(linked);
