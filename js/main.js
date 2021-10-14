$(function () {
	$('.menu-open').click(function () {
		$('.menu').toggleClass('show-menu')
	})
});

function chpok(id, id2){
    elem = document.getElementById(id);
    elem2 = document.getElementById(id2);//находим блок div по его id, который передали в функцию
    state = elem.style.display;
    state2 = elem2.style.display; //смотрим, включен ли сейчас элемент
    if (state =='') elem.style.display='none'; //если включен, то выключаем
    else elem.style.display=''; //иначе - включаем

    if (state2 =='') elem2.style.display='none';
	else elem2.style.display='';
}
