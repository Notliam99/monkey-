var count = 1;
var button1prompt = 'str'
var button1resault = 'str'

document.getElementById('button').onclick = function() {
   console.log("you have liked monkeys " + count + " times")
   alert("you have liked monkeys " + (count++) + " times");
   const monkey = await fetch('api.mcverse.cf/monnkey')
   console.log(monkey)
};
document.getElementById('button1').onclick = function() {
   button1prompt = 'You Have Liked Monkeys ' + (count - 1) + ' Times. In Your Opion Are Monkeys Cool'
   button1resault = prompt(button1prompt);
   if (confirm('just to confirm you awnserd ' + button1resault + ' to the question ' + button1prompt ) == true ){
      console.log('future api post rec')
   }else{
      console.log('user cansled input');
   };
};