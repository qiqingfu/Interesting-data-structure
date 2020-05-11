import Linked from "./tail-plug-linked";

const linked = new Linked();

// 向单向链表尾插法中添加一个元素
console.log('向单向链表尾插法中添加一个元素 1');
linked.pushElem(1);
console.log('向单向链表尾插法中添加一个元素 2');
linked.pushElem(2);
console.log('向单向链表尾插法中添加一个元素 3');
linked.pushElem(3);
console.log('向单向链表尾插法中添加一个元素 4');
linked.pushElem(4);
console.log('向单向链表尾插法中添加一个元素 5');
linked.pushElem(5);

// 根据下标查找元素
console.log('根据下标 0 查找元素', linked.getElem(0));
console.log('根据下标 4 查找元素', linked.getElem(4));
console.log('根据下标 5 查找元素', linked.getElem(5));

// 根据元素查找顺序表中的下标位置
console.log('根据元素 2 查找顺序表中的下标位置', linked.indexOf(2));
console.log('根据元素 1 查找顺序表中的下标位置', linked.indexOf(1));
console.log('根据元素 6 查找顺序表中的下标位置', linked.indexOf(6));

// 根据下标插入元素
console.log('根据下标 3 插入元素 6', linked.appendElem(6, 3));
console.log('根据下标 4 插入元素 7', linked.appendElem(7, 4));
console.log('根据下标 0 插入元素 8', linked.appendElem(8, 0));
console.log('根据下标 7 插入元素 9', linked.appendElem(9, 7));

// 删除指定下标的元素
console.log('删除指定下标的元素', linked.removeElem(3));
console.log('删除指定下标的元素', linked.removeElem(2));
console.log('删除指定下标的元素', linked.removeElem(0));
console.log('删除指定下标的元素', linked.removeElem(0));
console.log('删除指定下标的元素', linked.removeElem(3));
console.log('删除指定下标的元素', linked.removeElem(1));
console.log('删除指定下标的元素', linked.removeElem(1));
console.log('删除指定下标的元素', linked.removeElem(0));
console.log('删除指定下标的元素', linked.removeElem(0));

console.log('所有的链表元素', linked.getAllElem());
