function modal() {

	class Primary {
		constructor() {

			this.body = document.querySelector('body');
		}

		addElems(parent, childs) {
			if (Array.isArray(childs)) {
				childs.forEach(element => {
					parent.append(element);
				});
			} else {
				parent.append(childs);
			}
		}

		createrElems(objElems) {

			objElems.creatEl.forEach((item, index) => {
				let newEl = document.createElement(item);
				newEl.classList.add(objElems.classEl[index]);
				newEl.classList.add('mod-el');
				this.newElems.push(newEl);
			});
		}


		clsModal() {

			this.body.removeAttribute('style');

		}

		deleteElem(parent, className) {
			this.delList = parent.querySelectorAll(className);
			this.delList.forEach((item) => {
				item.remove();
			});
		}


		start() {

		}
	}

	class ModalBasicStructure extends Primary {
		constructor() {
			super();
			this.overview = document.getElementById('overview');
			this.elemlist = {
				creatEl: ['div', 'div', 'div', 'div', 'button', 'style'],
				classEl: ['modal-elem1', 'modal-elem2', 'modal-elem3', 'modal-table', 'cls-modal', 'modal-style']
			};
			this.newElems = [];
		}

		styler() {

			this.newElems[5].textContent =
				'#overview{position:fixed;top:0;width:100vw;height:100vh;' +
				'z-index:1;display:flex;flex-direction:row;' +
				'justify-content:center;align-items:center;' +
				'background-color:rgba(0,0,0,50%);}' +

				'.modal-elem1,.modal-elem3{width:30px;height:300px;}' +

				'.modal-elem2{width:300px;height:300px;border-radius:10px;' +
				'background-color:rgba(0,0,0,90%);}' +

				'.cls-modal{background-color:transparent;color:white;' +
				'border:none;cursor:pointer;}' +

				'.modal-table' +
				'{display:grid;grid-template-columns:1fr;' +
				'grid-template-rows:1fr 8fr 1fr;height:100%}';

		}

		addAtr() {
			this.newElems[4].textContent = 'X';
		}

		turnAddList() {

			this.addElems(this.overview, this.newElems[0]);
			this.addElems(this.overview, this.newElems[1]);
			this.addElems(this.overview, this.newElems[2]);
			this.addElems(this.overview, this.newElems[5]);
			this.addElems(this.newElems[1], this.newElems[3]);
			this.addElems(this.newElems[2], this.newElems[4]);

		}

		start() {
			this.createrElems(this.elemlist);
			this.turnAddList();
			this.addAtr();
			this.styler();
			this.newElems[4].addEventListener('click', (e) => {
				e.preventDefault();
				primary.deleteElem(this.overview, '.mod-el');
				primary.clsModal();
			});
		}
	}

	class ModalChoise extends Primary {
		constructor() {
			super();

			this.accounting = document.getElementById('accounting');
			this.accountingChilds = this.accounting.querySelectorAll('.accounting-container>div');
			this.category = ['.accounting-actives',
				'.accounting-passives',
				'.accounting-pay__day',
				'.accounting-total',
				'.accounting-target'
			];
		}

		openModal() {

			modalBasicStructure.start();
			this.body.style.overflow = 'hidden';

		}

		clickLogick(e) {

			this.category.forEach((item, index) => {

				if (e.target.closest(item) != null) {

					if (e.target.classList.contains('el__btn-add')) {
						this.openModal();
						insideModalBasic.start(index, 'add');
						insideModalForm.start(index);
					}

					if (e.target.classList.contains('el__btn-remove')) {
						this.openModal();
						insideModalBasic.start(index, 'remove');
						insideModalList.start(index);

					}

				}
			});

		}

		start() {
			this.accounting.addEventListener('click', (e) => {
				e.preventDefault();
				this.clickLogick(e);
			});
		}
	}

	class InsideModalBasic extends Primary {
		constructor() {
			super();

			this.elemlist = {
				creatEl: ['div', 'h3', 'div', 'div', 'btn', 'btn'],
				classEl: [
					'wrap-modal-header',
					'modal-header',
					'modal-content',
					'wrap-modal-btns',
					'modal-btn-ok',
					'modal-btn-cancel'
				]
			};
			this.newElems = [];

		}

		styler() {
			modalBasicStructure.newElems[5].textContent +=
				'.wrap-modal-header' +
				'{display:flex;justify-content:center;' +
				'align-items: center;}' +

				'.modal-header' +
				'{margin:0px 0px;}' +

				'.modal-content' +
				'{}' +

				'.wrap-modal-btns' +
				'{margin:0px 0px;display:flex;' +
				'justify-content:space-evenly;' +
				'align-items: center;}' +

				'.modal-btn-ok,.modal-btn-cancel' +
				'{background-color:transparent;' +
				'border:none;color:white;cursor:pointer;}';
		}

		addAttr(index, option) {
			console.log();
			this.newElems[1].textContent =
				modalChoise.accountingChilds[index].children[0].children[1].children[0].textContent;
			this.newElems[4].textContent = option;
			this.newElems[5].textContent = 'cancel';
		}

		turnAddList() {
			this.addElems(modalBasicStructure.newElems[3], this.newElems[0]);
			this.addElems(this.newElems[0], this.newElems[1]);
			this.addElems(modalBasicStructure.newElems[3], this.newElems[2]);
			this.addElems(modalBasicStructure.newElems[3], this.newElems[3]);
			this.addElems(this.newElems[3], this.newElems[4]);
			this.addElems(this.newElems[3], this.newElems[5]);
		}

		addEvent() {
			this.newElems[5].addEventListener('click', (e) => {
				e.preventDefault();
				primary.deleteElem(modalBasicStructure.overview, '.mod-el');
				primary.clsModal();
			});
		}




		start(index, option) {
			this.createrElems(this.elemlist);
			this.turnAddList();
			this.addAttr(index, option);
			this.styler();
			this.addEvent();

		}
	}

	class InsideModalForm extends Primary {
		constructor() {
			super();

			this.elemlist = {
				creatEl: ['form',
					'fieldset', 'legend', 'input', 'button',
					'fieldset', 'legend', 'input', 'button'
				],
				classEl: ['modal-form',
					'modal-fieldset1', 'modal-legend1', 'modal-input1', 'modal-btn-clear1',
					'modal-fieldset2', 'modal-legend2', 'modal-input2', 'modal-btn-clear2'
				]
			};
			this.newElems = [];

		}

		styler() {
			modalBasicStructure.newElems[5].textContent +=
				'.modal-fieldset1,.modal-fieldset2' +
				'{margin:20px 0px 0px 20px;' +
				'border:1px solid black;border-radius:10px;}' +

				'.modal-legend1,.modal-legend2' +
				'{margin-left:20px;}' +

				'.modal-input1,.modal-input2' +
				'{margin:10px;border-radius:5px;}' +

				'.modal-btn-clear1,.modal-btn-clear2' +
				'{background-color:transparent;' +
				'border:none;color:white;cursor:pointer;}';

		}

		modalAttr(index) {

			this.newElems[2].textContent = 'Name new ' +
				modalChoise.accountingChilds[index].querySelector('h3').textContent;
			this.newElems[6].textContent = 'Value new ' +
				modalChoise.accountingChilds[index].querySelector('h3').textContent;
			this.newElems[4].textContent = 'clear';
			this.newElems[8].textContent = 'clear';

		}

		turnAddList() {
			this.addElems(insideModalBasic.newElems[2], this.newElems[0]);
			this.addElems(this.newElems[0], this.newElems[1]);
			this.addElems(this.newElems[1], this.newElems[2]);
			this.addElems(this.newElems[1], this.newElems[3]);
			this.addElems(this.newElems[1], this.newElems[4]);
			this.addElems(this.newElems[0], this.newElems[5]);
			this.addElems(this.newElems[5], this.newElems[6]);
			this.addElems(this.newElems[5], this.newElems[7]);
			this.addElems(this.newElems[5], this.newElems[8]);

			insideModalBasic.newElems = [];
		}

		addEvent() {
			this.newElems[4].addEventListener('click', (e) => {
				e.preventDefault();
				insideModalForm.newElems[3].value = "";
			});
			this.newElems[8].addEventListener('click', (e) => {
				e.preventDefault();
				insideModalForm.newElems[7].value = "";
			});
		}

		start(index) {

			this.createrElems(this.elemlist);
			this.turnAddList();
			this.modalAttr(index);
			this.styler();
			this.addEvent();


		}
	}

	class InsideModalList extends Primary {
		constructor(index) {
			super();

			// this.elemlist = {
			// 	creatEl: [
			// 		'ul'
			// 	],
			// 	classEl: [`'list-${this.nameAsetList}'`,

			// 	]
			// };
			// this.newElems = [];




		}

		getItems(index) {
			let elemHTMLColl =
				modalChoise.accountingChilds[index].children[1].children[0].children[0].children;
			elemHTMLColl[0].parentNode.removeChild(elemHTMLColl[0]);
			console.log(elemHTMLColl);



		}





		turnAddList() {
			this.addElems(insideModalBasic.newElems[2], this.newElems[0]);

			insideModalBasic.newElems = [];
		}
		nameListLogic(index) {
			let nameAsetList =
				modalChoise.accountingChilds[index].children[0].children[1].children[0].textContent;


			this.elemlist = {
				creatEl: [
					'ul'
				],
				classEl: [`'list-${nameAsetList}'`,

				]
			};
			this.newElems = [];



		}


		start(index) {
			// this.nameListLogic(index);

			// this.createrElems(this.elemlist);
			this.getItems(index);
		}
	}


	const primary = new Primary();
	const modalBasicStructure = new ModalBasicStructure();
	const insideModalBasic = new InsideModalBasic();
	const modalChoise = new ModalChoise();
	const insideModalForm = new InsideModalForm();
	const insideModalList = new InsideModalList();
	modalChoise.start();



}



export {
	modal
};