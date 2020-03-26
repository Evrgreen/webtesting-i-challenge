const { repair, succeed } = require('./enhancer.js');
// test away!
describe('Repair function', () => {
  test('Should return a new item with 100 durability when original durability is less than 100', () => {
    const item = { name: 'Iron Sword', durability: 50, enhancement: 0 };
    const repaired = repair(item);
    expect(repaired.durability).toBe(100);
  });
  test('Should return the item unchanged if durability is 100', () => {
    const item = { name: 'Iron Sword', durability: 100, enhancement: 0 };
    const repaired = repair(item);
    expect(repaired.item).toBe(item);
    expect(repaired.message).toBe("This item doesn't need to be repaired");
  });

  test('Should reject any object without a name,durability,enhancment property', () => {
    const items = [
      { name: 'Iron Sword' },
      { enhancement: 0 },
      { durability: 50 },
      { enhancement: 0, durability: 50 },
      { name: 'Iron Sword', durability: 50 },
      { enhancement: 0, name: 'Iron Sword' },
    ];
    for (item in items) {
      const repaired = repair(item);
      expect(repaired.message).toBe("That isn't a repairable item");
    }
  });
  test('Should only accept objects', () => {
    const item = ['name', 'enhancement', 'durability', 'Iron Sword', 0, 90];
    const repaired = repair(item);
    expect(repaired.message).toBe("That isn't a repairable item");
  });
});

describe('Succeed Function', () => {
  test('Should increase enhancement level by 1', () => {
    const item = { name: 'Iron Sword', enhancement: 0, durability: 100 };
    console.log(item.enhancement);

    const enhanced = succeed(item);
    console.log(item.enhancement);
    expect(enhanced.enhancement).toBe(item.enhancement + 1);
  });
});
test('Should not increase enhancement above 20', () => {
  const item = { name: 'Iron Sword', enhancement: 20, durability: 50 };
  const enhanced = succeed(item);
  expect(enhanced.enhancement).toBe(20);
});
test('Should not affect durability', () => {
  const items = [
    { name: 'Iron Sword', durability: 20, enhancement: 0 },
    { name: 'Iron Sword', durability: 0, enhancement: 0 },
    { name: 'Iron Sword', durability: 100, enhancement: 0 },
    { name: 'Iron Sword', durability: 75, enhancement: 0 },
    { name: 'Iron Sword', durability: 45, enhancement: 0 },
  ];
  for (item in items) {
    const enhanced = succeed(item);
    expect(enhanced.durability).toEqual(item.durability);
  }
});
