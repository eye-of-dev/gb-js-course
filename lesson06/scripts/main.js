"use strict"

/**
    3 Реализовать модуль корзины на странице. У каждого товара есть кнопка «Купить», при нажатии на
    которую происходит добавление id, имени и цены товара в блок корзины. Корзина должна уметь считать
    общую сумму заказа. Один товар можно добавить несколько раз. Товары на страницу можно добавить без
    применения js, т.е. просто сверстайте блоки на html/css.
 */
const Cart = {
    items: [],
    add: function(id, name, price) {
        /**
            Можно(нужно) сделать хранение уникальных товаров,
            а кол-во задавать в счетчике count объекта товара
         */
        this.items.push({
            id: id,
            name: name,
            price: price
        });
    },
    totals: function() {
        let price = 0;
        for (let i = 0; i < this.items.length; i++) {
            price += this.items[i].price;
        }
        return {
            qnt: this.items.length,
            price: price
        }
    },
    totalsHtml: function() {
        let totals = this.totals();
        return '<div class="simple-cart"><span>Всего тораров: ' + totals.qnt + '</span><span>На сумму: ' + totals.price + '</span></div>'
    }
}

/**
    Примеры вызова объекта корзины.
    на странице товара или каталога можно вызвать через onclick="Cart.add(1, 1000);"
    Сделал минимальный набор. Для реального проекта можно дорабатывать уже по надобности.
 */
Cart.add(1, 'Product 1', 1000);
console.log(Cart.totals());
/**
    {
      "id": 1,
      "name": "Product 1",
      "price": 1000
    }
 */
console.log(Cart.totalsHtml());
/**
 * <div class="simple-cart"><span>Всего тораров: 1</span><span>На сумму: 1000</span></div>
 */
Cart.add(2, 'Product 2', 2000);
console.log(Cart.totals());
/**
    {
      "id": 2,
      "name": "Product 2",
      "price": 3000
    }
 */
console.log(Cart.totalsHtml());
/**
 * <div class="simple-cart"><span>Всего тораров: 2</span><span>На сумму: 3000</span></div>
 */
Cart.add(3, 'Product 3', 3000);
console.log(Cart.totals());
/**
    {
      "id": 3,
      "name": "Product 3",
      "price": 6000
    }
 */
console.log(Cart.totalsHtml());
/**
 * <div class="simple-cart"><span>Всего тораров: 3</span><span>На сумму: 6000</span></div>
 */