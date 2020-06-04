// Задача 1

let conteiner = document.getElementById('conteiner');

conteiner.addEventListener('click', event, false);

function event(e) {
    let clickElem = e.target;	
    let color = clickElem.dataset.color;
	
	if(color) {		
        clickElem.innerText = color;
        clickElem.classList.toggle("color");
        clickElem.classList.toggle("");
	} 
};


// Задача 2

