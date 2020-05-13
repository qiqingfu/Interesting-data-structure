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
    if (index < 0 || index > this.length - 1) {
      throw new Error(`${index} 范围错误, 应该在 0 - ${this.length - 1} 区间`);
    }

    if (index === 0) {
      this.pushElem(elem);
      return true;
    }

    let head = this.head;
    let i = 0;

    while (head && i < index) {
      head = <any>head.next;
      i++
    }

    if (!head || i > index) {
      return false;
    }

    const newNode = new Node(elem);
    (head.next as Node<any>).prev = newNode;
    newNode.next = head.next;
    newNode.prev = head;
    head.next = newNode;

    this.length++;

    return true;
  }

  /**
   * 获取单向链表中所有项
   */
  getAllElem():any[] {
    let p = this.head.next;
    let result = [];
    let i = 0;

    while (p) {
      result[i] = p.data;
      p = p.next;
      i++;
    }

    return result;
  }
}

export default Linked;
