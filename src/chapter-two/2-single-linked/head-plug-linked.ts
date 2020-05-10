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
 * 头插法单链表
 */
class Linked {
  head: any;
  length: number;
  constructor() {
    // 空的头指针
    const head = new Elem<any>(null);
    head.next = null;
    this.head = head;
    this.length = 0;
  }

  /**
   * 向单链表中增加一个节点
   * @param elem
   */
  pushElem(elem: any): number {
    const node = new Elem<any>(elem);
    const head = this.head;
    if (head.next === null) {
      head.next = node;
    } else {
      node.next = head.next;
      head.next = node;
    }

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
    if (index === 0) {
      this.pushElem(val);
      return true;
    }

    let p = this.head.next;
    let i = 0;

    while (p && i < index - 1) {
      p = p.next;
      i++
    }

    if (!p.next || i > index - 1) {
      return false;
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
