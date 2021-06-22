//menentukan color yang ada dalam array
const colors = ["green", "red","#f15025","#F22464"];
//inisiasi btn dan color class
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//membuat event listener untuk fungsi dari btn 
btn.addEventListener("click", function () {
	const randomNumber = getRandomNum();
	console.log(randomNumber);
	document.body.style.backgroundColor = colors[randomNumber];
});
//fungsi random number
function getRandomNum(){
	return Math.floor(Math.random() * colors.length);
}