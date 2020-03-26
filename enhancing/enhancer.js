module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancePlus = 0;
  if (item.enhancement !== 20) {
    enhancePlus = item.enhancement + 1;
  }
  return { ...item, enhancement: enhancePlus || item.enhancement };
}

function fail(item) {
  let { enhancement, durability } = item;
  durability -= enhancement >= 15 ? 10 : 5;
  enhancement = enhancement >= 16 ? enhancement - 1 : enhancement;
  console.log(enhancement, durability);
  return { ...item, durability, enhancement };
}

function repair(item) {
  const newItem = validateRepair(item);
  // console.log(newItem);
  if (newItem.message) {
    return newItem;
  } else {
    return { ...item, durability: 100 };
  }
}

function validateRepair(item) {
  if (
    !item.name ||
    !item.durability ||
    (!item.enhancement && item.enhancement != 0)
  ) {
    return { message: `That isn't a repairable item`, item };
  } else if (item.durability === 100) {
    return { message: "This item doesn't need to be repaired", item };
  } else {
    return item;
  }
}

function get(item) {
  let { name, enhancement } = item;
  if (enhancement > 0) {
    name = `[+${item.enhancement}]${item.name}`;
  }
  return { ...item, name };
}

// console.log(repair({ durability: 50, name: 'iron' }));
// console.log(succeed({ durability: 100, name: 'iron', enchancement: 0 }));
// console.log(repair({ durability: 50, name: 'iron', enchancement: 0 }));
