class SequentialStack {
  protected stack: any[];
  private base: number = 0;
  private top: number;
  constructor(public size: number = 10) {
    this.stack = new Array(this.size);
    this.top = this.base;
  }

  /**
   * 入栈操作
   * @param elem 入栈的元素
   */
  push(elem: any): boolean {
    if (this.top - this.base === this.size) {
      return false;
    }
    this.stack[this.top++] = elem;
    return true;
  }

  /**
   * 出栈一个元素
   */
  pop(): any {
    if (this.top === this.base) {
      return null;
    }
    return this.stack[--this.top];
  }

  /**
   * 获取栈顶的一个元素
   */
  getTop(): any {
    if (this.top !== this.base) return this.stack[this.top - 1];
    else return -1;
  }

  /**
   * 获取栈中所有的元素, 栈顶的元素排列在前
   */
  getElems(): any[] {
    const res: any[] = [];

    let p = this.base;
    while (p < this.top) {
      res[p] = this.stack[p];
      p++;
    }

    return res;
  }
}

export default SequentialStack;
