/**
 * 单链表节点类
 */
class Elem<T> {
  data: T;
  next: Elem<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

/**
 * 单向链表 尾插法
 */
class Linked {
  private head: any;
  private length: number;
  private pointer: any;
  constructor() {
    this.head = new Elem(null);
    this.head.next = null;
    this.length = 0;
    this.pointer = null;
  }

  /**
   * 向单链表中增加一个节点
   * @param elem
   */
  pushElem(elem: any): number {
    const newNode = new Elem(elem);
    if (this.pointer === null) {
      this.head.next = newNode;
    } else {
      this.pointer.next = newNode;
    }
    this.pointer = newNode;
    this.length++;

    return this.length;
  }

  /**
   * 根据下标获取一个元素
   * @param index
   */
  getElem(index: number): any {
    let p = this.head.next;
    let i = 0;

    while (p && i < index) {
      p = p.next;
      i++
    }

    if (!p || i > index) {
      return null;
    }

    return p.data;
  }

  /**
   * 查找一个元素的所在单向表中的下标位置
   * 如果没有找到则返回 -1
   * @param val
   */
  indexOf(val: any):number {
    let p = this.head.next;
    let i = 0;

    while (p && p.data !== val) {
      p = p.next;
      i++
    }

    return !p ? -1 : i;
  }

  /**
   * 向单链表中向 index 下标插入 val 元素
   * @param val
   * @param index
   */
  appendElem(val: any, index: number):boolean {
    let p = this.head;
    let i = 0;

    if (index < 0 || index > this.length - 1) {
      throw new Error(`下标 ${index} 范围错误, 应该在 0 - ${ this.length - 1 }区间`);
    }

    while (p && i < index) {
      p = p.next;
      i++;
    }

    const newNode = new Elem(val);
    newNode.next = p.next;
    p.next = newNode;

    this.length++;

    return true;
  }

  /**
   * 根据下标从单向链表中删除节点
   * @param index
   */
  removeElem(index: number) {
    if (index < 0 || index > this.length - 1) {
      throw new Error(`${index} 已超出链表下标范围`);
    }

    let p = this.head;
    let i = 0;

    while (p && i < index) {
      p = p.next;
      i++
    }

    let delNode = p.next;
    let val = delNode.data;
    p.next = delNode.next;

    delNode = null;
    this.length--;

    return val;
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

  /**
   * 获取单链表元素的长度
   */
  getSize():number {
    return this.length;
  }

  /**
   * 单链表是否为空
   */
  isEmpty():boolean {
    return this.length === 0;
  }
}

export default Linked;
