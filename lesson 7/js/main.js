/* ====== События, связанные с мышью ===== */

$('button').click(function() {
	console.log('Приветствую, пользователь!');
}); // Клик мышью

$('button').dblclick(function() {
	$(this).toggleClass('active')
}); // Двойной клик мышью

$('ul').mouseenter(function(event) {
	$(this).css('display', 'block');
}); // Наведение мыши на элемент

$('ul li').mousedown(function(event) {
	$(this).css('color', 'red');
}); // Момент нажатия кнопки мыши

$('ul li').mouseup(function(event) {
	$(this).css('color', '#333');
}); // Момент "отжатия" кнопки мыши :)

$('ul li').mouseover(function(event) {
	$(this).css('color', 'blue');
});  // Мышь наезжает на площадь элемента

$('ul li').mouseout(function(event) {
	$(this).css('color', 'black');
}); // Мышь покидает площадь элемента

$('ul li').mousemove(function(event) {
	$(this).toggleClass('blue');
}); // Движение мыши над элементом