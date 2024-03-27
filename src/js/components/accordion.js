document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.questions__item');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.questions__btn');
			const content = self.querySelector('.questions__inner');

      self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
			}
		});
	});
});


// class PageAccordion {
//   constructor(selector, options) {
//     let defaultOptions = {
//       isOpen: () => {},
// 			isClose: () => {},
// 			speed: 300
//     };

//     this.options = Object.assign(defaultOptions, options);
// 		this.accordion = document.querySelector(selector);
// 		this.control = this.accordion.querySelector('.accordion-question-control');
// 		this.content = this.accordion.querySelector('.accordion-question-content');
// 		this.event();
//   }

//   event() {
//     if (this.accordion) {
//       this.accordion.addEventListener('click', (e) => {
//         this.accordion.classList.toggle('open');

//         if (this.accordion.classList.contains('open')) {
//           this.open();
//         } else {
//           this.close();
//         }
//       });
//     }
//   }

//   open() {
//     this.content.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
//     const test = this.content;
//     const styles = window.getComputedStyle(test);
//     console.log(styles.transition);
//     this.accordion.classList.add('open');
//     this.control.setAttribute('aria-expanded', true);
// 		this.content.setAttribute('aria-hidden', false);
//     this.content.style.maxHeight = this.content.scrollHeight + 'px';
//     this.options.isOpen(this);
//   }

//   close() {
//     this.accordion.classList.remove('open');
// 	  this.content.setAttribute('aria-hidden', true);
//     this.control.setAttribute('aria-expanded', false);
//     this.content.style.maxHeight = null;
//     this.options.isClose(this);
//   }
// }


// const accordion1 = new PageAccordion('.accordion-question-item', {
//   isOpen: (acc) => {
//     console.log(acc);
//   },
//   isClose: (acc) => {
//     console.log(acc);
//   }
// });
