let shoppingList = [
  "milk",
  "eggs",
  "bread",
  "apples",
  "white sugar",
  "tomatoes",
];

shoppingList.push("Orange Juice", "Chicken Breast");
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

function checkShoppingList(list) {
  if (list.length > 5) {
    console.log("你的购物车满了");
  }
}
checkShoppingList(shoppingList);

for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`);
}

function checkItemInShoppingList(item, list) {
  if (list.includes(item)) {
    console.log(`${item} 在购物清单中`);
  } else {
    console.log(`${item} 不在购物清单中`);
  }
}
checkItemInShoppingList("milk", shoppingList);
checkItemInShoppingList("lettuce", shoppingList);

const item = {
  name: "milk",
  price: "4.5",
  quantity: 1,
  category: "dairy",
  content: "3 liters",
};

