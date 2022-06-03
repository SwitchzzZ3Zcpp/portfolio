/* let user = {
    name: "Вася",
    surname: "Пупкин",
    get fullName() {
        return `${this.name} ${this.surname}`
    },
    set fullName(value) {
        let split = value.split(" ");
        this.name = split[0];
        this.surname = split[1]
    }
}

console.log(user);
user.fullName = "Петя Петров";
console.log(user); */

const product = {
    plainBurger: {
        name: "Гамбургер простой",
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: "Гамбургер FRESH",
        price: 20500,
        kcall: 500,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        kcall: 700,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    }
}

const extraProduct = {
    doubleMayonnaise: {
        name: "Двойной майонез",
        price: 500,
        kcall: 50
    },
    lettuce: {
        name: "Салатный лист",
        price: 300,
        kcall: 10
    },
    cheese: {
        name: "Сыр",
        price: 400,
        kcall: 30
    }
}

// кнопки + и -
const btnPlusOrMinus = document.querySelectorAll('.main__product-btn');
// console.log(btnPlusOrMinus);
for (let i = 0; i < btnPlusOrMinus.length; i++) {
    const element = btnPlusOrMinus[i];
    element.addEventListener("click", function () {
        plusOrMinus(this)
    })
}
// функция работ кнопок + и -
function plusOrMinus(element) {
    const parent = element.closest(".main__product");
    // .getAttribute("name") - возвращает значение атрибута
    // .setAttribute("name", "value") - добавляет атрибут со значением
    // .removeAttribute("name") - удаляет атрибут
    // .hasAttribute("name") - возвращает true если атрибут есть
    const parentId = parent.getAttribute("id"); // получаем значение атрибута "id"
    const elementData = element.getAttribute("data-symbol") // получаем символ + или -
    if (elementData == "+" && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if(product[parentId].amount > 0 && elementData == "-") {
        product[parentId].amount--
    }
    const out = parent.querySelector(".main__product-num");
    const price = parent.querySelector(".main__product-price span");
    const kcall = parent.querySelector(".main__product-kcall span");
    // console.dir(out);
    out.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].Summ;
    kcall.innerHTML = product[parentId].Kcall;
}

// чекбоксы ингредиентов
const checkExtraProduct = document.querySelectorAll('.main__product-checkbox');


for (let i = 0; i < checkExtraProduct.length; i++) {
    const element = checkExtraProduct[i];
    element.addEventListener("click", function () {
        addExtraProduct(this)
    })
}

function addExtraProduct(element) {
    const parent = element.closest(".main__product");
    const parentId = parent.getAttribute("id");
    const elAtr = element.getAttribute("data-extra");
    product[parentId][elAtr] = element.checked;
    console.dir(product[parentId]);

    if (product[parentId][elAtr] === true) {
        // product[parentId].price = product[parentId].price + extraProduct[elAtr].price
        product[parentId].price += extraProduct[elAtr].price
        product[parentId].kcall += extraProduct[elAtr].kcall
    } else {
        product[parentId].price -= extraProduct[elAtr].price
        product[parentId].kcall -= extraProduct[elAtr].kcall
    }
    
    const price = parent.querySelector(".main__product-price span");
    const kcall = parent.querySelector(".main__product-kcall span");
    // console.dir(out);
   
    price.innerHTML = product[parentId].Summ;
    kcall.innerHTML = product[parentId].Kcall;

}