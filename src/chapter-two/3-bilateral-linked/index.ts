/**
 * 双向链表头插法
 */

/**
 * 双向链表节点结构
 */
class Node<T> {
  data: T;
  prev: Node<T> | null;
  next: Node<T> | null;
  constructor(data: T, prev: Node<T> | any = null, next: Node<T> | any = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Linked {
  public head: Node<any>;
  public length: number;
  constructor() {
    this.head = new Node<any>(null);
    this.length = 0;
  }

  /**
   * 向双向链表中插入一个节点
   * @param elem
   */
  pushElem(elem: any):number {
    let p = this.head;
    if (p.next === null) {
      p.next = new Node<any>(elem, p);
    } else {

      const newNode = new Node(elem);
      p.next.prev = newNode;
      newNode.next = p.next;
      newNode.prev = p;
      p.next = newNode;
    }

    this.length++;

    return this.length;
  }

  /**
   * 双向链表的插入, 根据下标 index 插入 elem 元素
   * @param elem
   * @param index
   */
  insertElem(elem: any, index: number):boolean {
    return true;
  }
}

export default Linked;
