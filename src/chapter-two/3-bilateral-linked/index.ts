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

    let head = this.head.next;
    let i = 0;

    while (head && i < index) {
      head = head.next;
      i++;
    }

    if (!head || i > index) {
      return false;
    }

    const newNode = new Node(elem);
    // head 为当前节点, 不是 i - 1 个节点
    (head.prev as any).next = newNode;
    newNode.prev = head.prev;
    newNode.next = head;
    head.prev = newNode;

    this.length++;

    return true;
  }

  /**
   * 移除双向链表中第 index 个节点
   * @param index
   */
  removeItem(index: number):any|boolean {
    if (index < 0 || index > this.length - 1) {
      throw new Error(`${index} 范围错误, 应该在 0 - ${this.length - 1} 区间`);
    }

    // 删除包括双向链表中的最后一个节点
    // 且 最后一个节点的 next 为 null
    let head = this.head.next;
    let i = 0;

    while (head && i < index) {
      head = head.next;
      i++
    }

    if (!head || i > index) {
      return false;
    }

    // 如果删除的是最后一个的情况
    const delNode = head;
    (head.prev as any).next = head.next;

    if (head.next !== null)
      head.next.prev = head.prev;

    this.length--;
    return delNode.data;
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
