var hoge = 10;
window.confirm(hoge);
hoge++;
window.confirm(hoge);

window.addEventListener('load', init, false);
function init(){
	var buttons = document.getElementsByTagName('button');
	buttons.item(0).addEventListener('click', function(){
		allChange('open');
	}, false);
	buttons.item(1).addEventListener('click', function(){
		allChange('close');
	}, false);

	var questions = document.getElementsByTagName('dt');
	for(var i = 0; i < questions.length; i++){
		questions.item(i).addEventListener('click', toggleAnswer, false);
		var answer = questions.item(i).nextSibling.nextSibling;
		var links = answer.getElementsByTagName('a');
		links.item(0).addEventListener('click', addStar, false);
		links.item(1).addEventListener('click', removeStar, false);
	}
}

function allChange(mode) {
	var answers = document.getElementsByTagName('dd');
	for (var i = 0; i < answers.length; i++) {
		answers.item(i).className = mode;
	}
}

//質問をクリックすると回答が開いて表示される。もう一度質問をクリックすると今度は回答を閉じる
function toggleAnswer(event) {
	var question = event.target;
	var answer = question.nextSibling.nextSibling;
	if (answer.className === 'close') {
		answer.className = 'open';
	} else {
		answer.className = 'close';
	}
}

function addStar(event) {
	var star = document.createElement('img');
	star.src = 'star.png';
	var link = event.target;
	var elm = link.parentNode;
	elm.appendChild(star);
}

function removeStar(event) {
	var link = event.target;
	var elm = link.parentNode;
	if (elm.lastChild.nodeName === 'IMG') {//remove only 'img'.
		elm.removeChild(elm.lastChild);
	}
}
