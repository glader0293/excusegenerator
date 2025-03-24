import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    const excuseSentence = () =>{
      let finalSentence = [];
      const randomNumberWho = Math.floor(Math.random() * who.length);
      const randomNumberAction = Math.floor(Math.random() * action.length);
      const randomNumberWhat = Math.floor(Math.random() * what.length);
      const randomNumberWhen = Math.floor(Math.random() * when.length) ;
      
      let whoPush = finalSentence.push(who[randomNumberWho])
      let actionPush = finalSentence.push(action[randomNumberAction])
      let whatPush = finalSentence.push(what[randomNumberWhat])
      let whenPush = finalSentence.push(when[randomNumberWhen])
      
      let joinedSentence = finalSentence.join(" ")
      document.getElementById("excuse").innerHTML = joinedSentence;
      
      }
  excuseSentence();
};


