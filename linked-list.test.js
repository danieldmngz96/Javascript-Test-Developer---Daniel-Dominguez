const LinkedList = require('./linked-list');
const link = ["A", "B","C"];

test('getElement gets the elements at the expected position', () => {
  const linkedList = new LinkedList();

  // null

 linkedList.getElement(link,2)

  linkedList.pushFront('a');
  // {value: 'a', next: null}
  linkedList.pushFront('b');
  // {value: 'b', next: {value: 'a', next: null}} 
  linkedList.pushFront('c');
  // {value: 'c', next: {value: 'b', next: {value: 'a', next: null}} }

  // 0, 1, 2
  // C, B, A
  linkedList.getElement(0);
  //expect(linkedList.getElement(0)).toBe('c');
  //expect(linkedList.getElement(1)).toBe('b');
  //expect(linkedList.getElement(2)).toBe('a');
});

test('count', () => {
  const linkedList = new LinkedList();

  // null

  linkedList.pushFront('a');
  // {value: 'a', next: null}
  linkedList.pushFront('b');
  // {value: 'b', next: {value: 'a', next: null}} 
  linkedList.pushFront('c');
  // {value: 'c', next: {value: 'b', next: {value: 'a', next: null}} }

  // 0, 1, 2
  // C, B, A

  linkedList.count(link);

  linkedList.popFront(link);

  linkedList.insertAfter(link, 0, '3') ;

  linkedList.removeElement(link, 1);
  
  //expect(linkedList.count()).toBe(3);

});