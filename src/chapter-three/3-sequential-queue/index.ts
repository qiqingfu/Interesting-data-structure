/**
 * 循环队列
 *
 * 队空判定: front = rear
 * 队满判定: rear + 1 % size = front
 */

class SequentialQueue<T> {
  private readonly base: T[];
  private front: number = 0;
  private rear: number = 0;
  public size: number;
  constructor(size:number = 10) {
    this.base = new Array(size);
    this.size = size;
  }

  /**
   * 入队元素
   * @param val
   */
  push(val:T): boolean {
    /**
     * 循环队列队满, 入队元素失败
     */
    if ((this.rear + 1) % this.size === this.front) return false;

    this.base[this.rear] = val;
    // 队尾指针后移
    this.rear = (this.rear + 1) % this.size;

    return true;
  }

  /**
   * 出队一个元素
   */
  shift():T | null {
    /**
     * 队空判断
     */
    if (this.front === this.rear) return null;
    const e = this.base[this.front];
    this.front = (this.front + 1) % this.size;

    return e;
  }

  /**
   * 获取队列的元素个数
   */
  getSize():number {
    return (this.rear - this.front + this.size) % this.size;
  }
}

export default SequentialQueue;
