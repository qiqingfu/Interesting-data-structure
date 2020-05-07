class SequenceList {
  private length: number;
  private readonly array: any[];

  constructor(size: number) {
    this.array = new Array(size);
    this.length = 0;
  }

  /**
   * 向顺序表中顺序新增一个元素
   * @param elem
   */
  pushElem(elem: any):number {
    const i:number = this.length;
    this.array[i] = elem;
    this.length++;

    return this.length;
  }

  /**
   * 根据下标获取元素
   * @param index
   */
  getElem(index: number): any {
    if (index < 0 || index > this.array.length - 1) {
      throw new Error(`${index}错误, 范围仅限 0 - ${this.array.length - 1} 区间`);
    }

    return this.array[index];
  }

  /**
   * 查找一个元素在顺序表中的下标
   * 如果没有找到则返回 -1
   * @param val
   */
  indexOf(val: any):number {
    let index = -1;
    for (let i = 0; i < this.array.length; i++) {
      if (val === this.array[i]) {
        index = i;
        break;
      }
    }

    return index;
  }

  /**
   * 根据下标向顺序表插入元素
   * @param val
   * @param index
   */
  appendElem(val:any, index: number): boolean {
    if (index < 0 || index > this.array.length - 1) {
      throw new Error(`${index}错误, 范围仅限 0 - ${this.array.length - 1} 区间`);
    }

    for (let i = this.array.length - 1; i >= index; i--) {
      this.array[i + 1] = this.array[i];
    }
    this.array[index] = val;
    this.length++;
    return true;
  }

  /**
   * 获取顺序表的长度
   */
  getSize():number {
    return this.length
  }

  /**
   * 获取顺序表中所有项
   */
  getArray():any[] {
    let array = [];
    for (let i = 0; i < this.array.length; i++) {
      this.array[i] && (array[i] = this.array[i] )
    }

    return array;
  }

  /**
   * 顺序表是否为空
   */
  isEmpty():boolean {
    return this.length === 0;
  }
}

export default SequenceList;
