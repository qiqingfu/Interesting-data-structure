class Elem<T> {
  data: T;
  next: Elem<T> | null;
  constructor(val: T) {
    this.data = val;
    this.next = null;
  }
}

/**
 * 链表, 头插法
 */
class ChainStack {
  protected p:any = null; // 指向栈顶的节点指针
  private size:number;
  constructor() {
    this.size = 0;
  }

  /**
   * 入栈一个元素
   * @param elem Any
   */
  push(elem:any):boolean {
    let newNode = new Elem(elem);
    newNode.next = this.p;
    this.p = newNode;
    this.size++;
    return true;
  }

  /**
   * 栈顶元素出栈
   */
  pop():any {
    if (this.p === null) return false;
    let e = this.p.data;
    this.p = this.p.next;
    this.size--;
    return e;
  }

  /**
   * 获取栈顶的节点
   */
  getTop():any {
    if (this.p !== null)
      return this.p.data;
    else
      return -1;
  }

  /**
   * 获取栈中的所有节点数据
   */
  getAllElem():any[] {
    let res:any[] = [], i = this.size - 1, p = this.p;

    while (p) {
      res[i--] = p.data;
      p = p.next;
    }

    return res;
  }
}

export default ChainStack;
