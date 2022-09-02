var count = 1;
document.getElementById('button').onclick = function() {
   console.log("you have liked monkeys " + count + " times")
   alert("you have liked monkeys " + (count++) + " times");
};