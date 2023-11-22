const dts = document.querySelectorAll('dt');
const dds = document.querySelectorAll('dd');
const dts_a = document.querySelectorAll('dt>a');

dts_a.forEach((el, index) => {
	el.addEventListener('focusin', () => {
		active(dts, index);
		active(dds, index);
	});
});

dts.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();

		active(dts, index);
		active(dds, index);
	});
});

function active(list, index) {
	for (let el of list) {
		el.classList.remove('on');
	}
	list[index].classList.add('on');
}
