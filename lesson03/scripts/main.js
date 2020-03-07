"use strict"

/**
	1. Посмотрите видео в папке «дополнительные видео», которые вы найдете при скачивании материалов урока. Смотрите
	в том порядке, в каком пронумерованы файлы. Исходный код найдете в примерах к уроку, ищите папки с пометкой «(в
	Видеозаписи, как решались задания, ищите в папке «решение ДЗ».
 */





/**
	2. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
	0 – это ноль
	1 – нечетное число
	2 – четное число
	3 – нечетное число
	10 – четное число
  */
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + ' – это ноль');
    } else if ((i % 2) == 0) {
        console.log(i + ' – четное число');
    } else {
        console.log(i + ' – нечетное число');
    }

}
/**
  	Результат 
 	0 – это ноль main.js:20:11
	1 – нечетное число main.js:24:17
	2 – четное число main.js:22:17
	3 – нечетное число main.js:24:17
	4 – четное число main.js:22:17
	5 – нечетное число main.js:24:17
	6 – четное число main.js:22:17
	7 – нечетное число main.js:24:17
	8 – четное число main.js:22:17
	9 – нечетное число main.js:24:17
	10 – четное число main.js:22:17
 */





/**
	3. Выведите в консоль значения, указанные рядом с комментариями:
 */
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
/**
	Результат 
	John main.js:95:9
	2 main.js:96:9
	5 main.js:97:9
	lorem ipsum 2 main.js:98:9
 */





/**
	4. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
	15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
 */
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function callback(currentValue, index, array) {
    array[index].price = currentValue.price - currentValue.price * 0.15;
});

console.log(products);
/**
 	Результат
	const products = [{
	        id: 3,
	        price: 170,
	    },
	    {
	        id: 4,
	        price: 765,
	    },
	    {
	        id: 1,
	        price: 850,
	    },
	];
 */





/**
	5. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
	1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
	2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
	https://mzl.la/2Y79hbZ
 */
const products1 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithImages = products1.filter(product => (product.photos !== undefined && product.photos.length > 0));
console.log(productsWithImages);
/**
 	Результат
	const productsWithImages = [{
	        id: 3,
	        price: 127,
	        photos: [
	            "1.jpg",
	            "2.jpg",
	        ]
	    },
	    {
	        id: 10,
	        price: 26,
	        photos: [
	            "3.jpg"
	        ]
	    }
	];
 */

products1.sort(function(el1, el2) {
    if (el1.price < el2.price) {
        return -1;
    }
    if (el1.price > el2.price) {
        return 1;
    }
    return 0;
});
console.log(products1);
/**
	Результат
	const products1 = [{
	        id: 10,
	        price: 26,
	        photos: [
	            "3.jpg"
	        ]
	    },
	    {
	        id: 8,
	        price: 78,
	    },
	    {
	        id: 3,
	        price: 127,
	        photos: [
	            "1.jpg",
	            "2.jpg",
	        ]
	    },
	    {
	        id: 5,
	        price: 499,
	        photos: []
	    }
	];
 */





/**
	6. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
	НЕ используя тело цикла. То есть выглядеть должно примерно так:
  */
for (let i = 0; i < 10; console.log(i), i++) {/* здесь пусто */}
/**
	Результат
	0 main.js:238:33
	1 main.js:238:33
	2 main.js:238:33
	3 main.js:238:33
	4 main.js:238:33
	5 main.js:238:33
	6 main.js:238:33
	7 main.js:238:33
	8 main.js:238:33
	9 main.js:238:33
 */





/**
	7. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
	только у вашей горки должно быть 20 рядов, а не 5:
 */
for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}
/**
	Результат
	x main.js:252:11
	xx main.js:252:11
	xxx main.js:252:11
	xxxx main.js:252:11
	xxxxx main.js:252:11
	xxxxxx main.js:252:11
	xxxxxxx main.js:252:11
	xxxxxxxx main.js:252:11
	xxxxxxxxx main.js:252:11
	xxxxxxxxxx main.js:252:11
	xxxxxxxxxxx main.js:252:11
	xxxxxxxxxxxx main.js:252:11
	xxxxxxxxxxxxx main.js:252:11
	xxxxxxxxxxxxxx main.js:252:11
	xxxxxxxxxxxxxxx main.js:252:11
	xxxxxxxxxxxxxxxx main.js:252:11
	xxxxxxxxxxxxxxxxx main.js:252:11
	xxxxxxxxxxxxxxxxxx main.js:252:11
	xxxxxxxxxxxxxxxxxxx main.js:252:11
	xxxxxxxxxxxxxxxxxxxx main.js:252:11	
 */