// Javascriptによる自作関数
// function関数名(引数1,引数2,...){
// 	実行したい処理
// 	return 戻り値;
// }
// 引数と戻り値は省略可能

function hello(){
console.log('Hello,JavaScript!');
window.alert('Hello!');
}

function change_text(change_id,change_word){
	document.getElementById(change_id).textContent = change_word;
}

function plus(){
	var n1 = document.getElementById('number1').value;
	var n2 = document.getElementById('number2').value;
	var result = parseInt(n1) + parseInt(n2);
	console.log(result);
	return result;
}

function red(){
console.log('Red');
window.alert('赤です');
}

function blue(){
console.log('Blue');
window.alert('蒼です');
}

function yellow(){
console.log('Yellow');
window.alert('黄色です');
}
