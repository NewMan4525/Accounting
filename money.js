'use strict';
let body = document.querySelector('body').style.backgroundColor = '#202124FF';
const food = {

	breackfast: {

		'Молоко ЛАТОНА паст Российское 2,5% 500мл': 87.58,

		'Творог ЛАТОНА фасованный 9% п/п 450г': 209.89,

		'Биойогу BIOMAX Клуб-земл-микс сем1,9%270': 44.99 * 2

	},

	soup: {

		'Сметана ТУЛОМА 15% стакан без змж 500г': 107.09,

		'П / ф Говядина тазобедр.часть б / к кат.А': 986.68 / 3,

		'Свекла Эконом вес 1 кг': 19.60,

		'Капуста белокочанная вес': 68.30,

		'Картофель Эконом вес 1 кг': 69.94,

		'Морковь Эконом вес 1 кг': 10.32,

		'Набор свежей зелени 250 г': 119.99 / 2,

		'Лук Эконом вес 1 кг': 6.37,

		'Томатная паста ПОМИДОРКА 270г': 74.29 / 4

	},

	dinner: {

		'Котлеты куриные Аппетитные вес': 90.51 / 4 * 7,

		'гарнир': 129.99,

		'Майонез МАХЕЕВЪ перепел яйц 67 % д / п200мл': 87.58

	},

	salad: {

		'Горошек зел BONDUELLE 425мл': 119.89,

		'Огурцы среднеплодные гладкие вес': 49.67,

		'Набор свежей зелени 250 г': 119.99 / 2,

		'Перец красный вес 1 кг': 94.82,

		'Томаты вес 1 кг': 112.72

	},

	other: {
		'Чай GREENFIELD Earl Grey Fantasy 100пак': 439 / 3,

		'Кофе JACOBS MONARCH нат раст субл пак150': 623.49 / 3,

		'Яблоки Гольден фас ун вес': 254.65,

		'Хлеб ВИКТОРИЯ Дарницкий в нар700г': 51.29 * 2,

		'Печенье сдоб KELLOGGS с шок и карам150г': 119.89,

	},

	ugli: {

		'sigarets': 150 * 7,

		'beer': 70 * 7,

	},

	overTotal: () => {
		let categories;

		const total = (obje) => {
			let total = 0;
			for (let key in obje) {
				total += obje[key];
			}
			return total;
		};

		categories = {

			breackfast: total(food.breackfast),
			soup: total(food.soup),
			dinner: total(food.dinner),
			salad: total(food.salad),
			other: total(food.other),
			//ugli: total(food.ugli),

		};

		return Math.ceil(total(categories));
	},

};

const homeSupply = {

	electroEnergy: 157.41,
	tko: 138.44,
	capitalRepear: 385.20,
	content: 1705.18,
	water: 551.68,
	heatSupply: 3396.03,
	gas: 434.04,
	tax: 0,
	enternet: 790

};

const auto = {
	petrol: 4000,
	tax: 0
};

const hobby = {
	kravMaga: 4000,
};

const entertainment = {};

const education = {};

const total = {

	inFood: food.overTotal() * 4,
	inHome: forIn(homeSupply),
	inAuto: forIn(auto),
	inHobby: forIn(hobby),
	inEntertainment: forIn(entertainment),
	inEducation: forIn(education),

};

let overPrice = forIn(total);

function forIn(redObj) {
	let sum = 0;
	for (let key in redObj) {
		sum += redObj[key];
	}
	return Math.ceil(sum);
}


// console.log(total);
// console.log('overPrice in hour   ', Math.ceil(overPrice / 4 / 7 / 24));
// console.log('overPrice in day    ', Math.ceil(overPrice / 4 / 7));
// console.log('overPrice in week   ', Math.ceil(overPrice / 4));
console.log('overPrice in month__', overPrice);
console.log('overPrice in year   ', overPrice * 12);
// console.log('overPrice in 10 year', overPrice * 12 * 10);