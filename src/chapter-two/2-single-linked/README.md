## 单向链表(单链表)

插入数据方式为 `头插法` 和 `尾插法`。

头插法和尾插法的区别在于 单向链表中数据的排列顺序是相反的

链表节点的结构为: 
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```
