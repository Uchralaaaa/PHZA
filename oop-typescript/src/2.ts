import { EventEmitter } from 'events';
import { cart, Item } from './data';

class CartEvents extends EventEmitter {}
const bus = new CartEvents();

// 🔹 Listeners
bus.on('ITEM_ADDED', (it: Item) =>
  console.log('Нэмэгдсэн:', it.name)
);

bus.on('ITEM_REMOVED', (it: Item) =>
  console.log('Устгагдсан:', it.name)
);

bus.on('CHECKOUT', (total: number) =>
  console.log('Нийт checkout:', total)
);

bus.on('CART_EMPTY', () =>
  console.log('Сагс хоосорлоо')
);

//  Шинэ event listener-үүд
bus.on('PAYMENT_SUCCESS', (total: number) =>
  console.log('Төлбөр амжилттай. Нийт төлбөр:', total)
);

bus.on('PAYMENT_FAILED', (reason: string) =>
  console.log('Төлбөр амжилтгүй:', reason)
);

bus.on('ITEM_OUT_OF_STOCK', (it: Item) =>
  console.log('Дууссан бараа:', it.name)
);

// 🔹 Cart logic
let items: Item[] = [...cart];

function addItem(it: Item) {
  // Жишээ: хэрвээ item-д qty=0 бол out of stock
  if (it.qty <= 0) {
    bus.emit('ITEM_OUT_OF_STOCK', it);
    return;
  }

  items = [...items, it];
  bus.emit('ITEM_ADDED', it);
}

function removeItem(name: string) {
  const removedItem = items.find(i => i.name === name);
  if (!removedItem) return;

  items = items.filter(i => i.name !== name);
  bus.emit('ITEM_REMOVED', removedItem);
}

function checkout(givenMoney: number) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  bus.emit('CHECKOUT', total);

  if (givenMoney >= total) {
    bus.emit('PAYMENT_SUCCESS', total);
    items = [];
    bus.emit('CART_EMPTY');
  } else {
    bus.emit('PAYMENT_FAILED', `Өгсөн мөнгө ${givenMoney}₮ хүрэлцэхгүй`);
    // items хэвээр үлдэнэ
  }

  return total;
}

// 🔹 Run examples
addItem({ name: 'Chocolate', price: 4200, qty: 3, category: 'food' });
addItem({ name: 'Yogurt', price: 4200, qty: 3, category: 'food' });

addItem({ name: 'Milk', price: 3500, qty: 0, category: 'food' }); // out of stock
removeItem('Chocolate');
//checkout(true);   // амжилттай төлбөр
checkout(200000);  // амжилтгүй төлбөр
