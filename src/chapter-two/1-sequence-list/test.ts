import SequenceList from "./index";

const sequencelist = new SequenceList(10);

console.log(sequencelist.getSize());
console.log(sequencelist.isEmpty());
// 新增
sequencelist.pushElem(1);
sequencelist.pushElem(2);
sequencelist.pushElem(3);
sequencelist.pushElem(4);
sequencelist.pushElem(5);
sequencelist.pushElem(6);
console.log(sequencelist.getSize());
console.log(sequencelist.isEmpty());

// 根据下标获取元素
console.log('根据下标 2 获取元素',sequencelist.getElem(2));
console.log('根据下标 1 获取元素',sequencelist.getElem(1));

// 查找元素所在的下标
console.log('查找元素 2 所在的下标',sequencelist.indexOf(2));
console.log('查找元素 1 所在的下标',sequencelist.indexOf(1));

// 根据下标向顺序表插入元素
console.log('根据下标 2 向顺序表插入元素 7 ', sequencelist.appendElem(7, 2));
console.log('查找元素 7 所在的下标',sequencelist.indexOf(7));
console.log('顺序表中全部值', sequencelist.getArray());
