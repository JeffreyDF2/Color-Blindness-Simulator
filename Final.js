window.addEventListener("DOMContentLoaded", domLoaded);
let prot
let deut
let trit

function changeProt() {
  //Change Color
  let redBox = document.querySelector("#square");
  let blueBox = document.querySelector("#square2");
  let greenBox = document.querySelector("#square3");
  redBox.style.background = "rgb(143,126,30)"; 
  blueBox.style.background = "rgb(0,76,157)";
  greenBox.style.background = "rgb(203,180,0)";
  //Change Descriptions
  let descrition = document.querySelector("#description");
  descrition.innerHTML="<strong>Protanopia</strong> occurs when all the L-cones in the eye are missing. This causes the person to be unable to perceive the colors red and green. Normal vision see with 3 different types of cones whereas people with protanopia can only see with 2 types of cones.";
}
function changeDeut() {
  //Change Color
  let redBox = document.querySelector("#square");
  let blueBox = document.querySelector("#square2");
  let greenBox = document.querySelector("#square3");
  redBox.style.background = "rgb(161,120,0)"; 
  blueBox.style.background = "rgb(0,80,131)";
  greenBox.style.background = "rgb(255,213,153)";
  //Change Descriptions
  let descrition = document.querySelector("#description");
  descrition.innerHTML="<strong>Deuteranopia</strong> is the most common form of color blindness. People with this can only see 2-3 different hues. Red and green are the hardest to perceive, along with gray, purple, and several others.";
}
function changeTrit() {
  //Change Color
  let redBox = document.querySelector("#square");
  let blueBox = document.querySelector("#square2");
  let greenBox = document.querySelector("#square3");
  redBox.style.background = "rgb(253,23,0)"; 
  blueBox.style.background = "rgb(0,86,89)";
  greenBox.style.background = "rgb(117,236,255)";
  //Change Descriptions
  let descrition = document.querySelector("#description");
  descrition.innerHTML="<strong>Tritanopia</strong> occurs when all the S-cones in the eye are missing. While Deuteranopia and Protanopia are sex-linked traits, Tritanopia is not. This makes Tritanopia much rarer. Blues and yellows are heavily affected, causing these colors to appear as greens and violets.";
}
function changeNormal() {
  //Change Color
  let redBox = document.querySelector("#square");
  let greenBox = document.querySelector("#square2");
  let blueBox = document.querySelector("#square3");
  redBox.style.background = "red"; 
  blueBox.style.background = "blue";
  greenBox.style.background = "green";
  //Change Descriptions
  let descrition = document.querySelector("#description");
  descrition.innerHTML="People with <strong>Normal Vision</strong> view the world through 3 different types of cones and with 7 different hues. Everything we use on a daily basis is centered around this color scheme.";
}
function protTest() {
  let sen1 = document.querySelector("#sentence1");
  let sen2 = document.querySelector("#sentence2");
  let sen3 = document.querySelector("#sentence3");
  let sen4 = document.querySelector("#sentence4");
  let sen5 = document.querySelector("#sentence5");
  sen1.innerHTML = "Hang on, my kittens are scratching at the bathtub and they'll upset by the lack of biscuits.";
  sen2.innerHTML = "Her daily goal was to improve on yesterday.";
  sen3.innerHTML = "Charles ate the french fries knowing they would be his last meal.";
  sen4.innerHTML = "Yeah, I think it's a good environment for learning English.";
  sen5.innerHTML = "As he entered the church he could hear the soft voice of someone whispering into a cell phone.";
  sen1.style.color = "green";
  sen2.style.color = "blue";
  sen3.style.color = "rgba(209, 196, 12, 0.856)";
  sen4.style.color = "gold";
  sen5.style.color = "rgb(112, 146, 241)";
  sen1.style.background = "red";
  sen2.style.background = "green";
  sen3.style.background ="blue";
  sen4.style.background ="rgb(24, 251, 97)";
  sen5.style.background = "rgb(250, 0, 255)";
  document.querySelector("#test").style.display = "unset";
  document.querySelector("#boring2").style.display ="none";
  //Rules and stuff
  document.querySelector("#testText").innerHTML ="Round 1!"
  document.querySelector("#instructions").innerHTML ="<strong>How this works-</strong> This is a quiz that will show the difficulty people with <strong>protanopia</strong> have differentiating between colors that are easy for those with <strong>normal vision</strong> to differentiate. You will be presented with several sentences with text and backgrounds of various color. In the first round, you will take the quiz through the eyes of someone with normal vision, so the text backround and the text itself will contrast agianst each other very well. In round 2 everything stays the same except for the background color, which will change to be how someone with <strong>protanopia</strong> would see the background color from the previous round."
  document.querySelector("#instructions2").innerHTML ="<strong>Rules-</strong> Do your best to type out the sentence as perfectly as possible. DO NOT highlight or zoom in. Once you finish the quiz you can view how many words you missed."
  //Shows correct buttons
  document.querySelector("#protSubmit").style.display = "unset";
  document.querySelector("#duetSubmit").style.display = "none";
  document.querySelector("#tritSubmit").style.display = "none";
}
function deutTest() {
  let sen1 = document.querySelector("#sentence1");
  let sen2 = document.querySelector("#sentence2");
  let sen3 = document.querySelector("#sentence3");
  let sen4 = document.querySelector("#sentence4");
  let sen5 = document.querySelector("#sentence5");
  sen1.innerHTML ="Joe made the sugar cookies; Susan decorated them.";
  sen2.innerHTML ="The dead trees waited to be ignited by the smallest spark and seek their revenge.";
  sen3.innerHTML ="He was 100% into fasting with her until he understood that meant he couldn't eat.";
  sen4.innerHTML ="Dolores wouldn't have eaten the meal if she had known what it actually was.";
  sen5.innerHTML ="The golden retriever loved the fireworks each Fourth of July.";
  sen1.style.color = "grey";
  sen2.style.color = "pink";
  sen3.style.color = "forestgreen";
  sen4.style.color = "rgb(250, 230, 220)";
  sen5.style.color = "rgb(245, 210, 160)";
  sen1.style.background = "rgb(255, 0, 168)";
  sen2.style.background = "rgb(3, 239, 230)";
  sen3.style.background = "rgb(255, 0, 0)";
  sen4.style.background = "yellow";
  sen5.style.background = "rgb(0, 255, 72)";
  document.querySelector("#test").style.display = "unset";
  document.querySelector("#boring2").style.display ="none";
  //Rules and stuff
  document.querySelector("#testText").innerHTML ="Round 1!"
  document.querySelector("#instructions").innerHTML ="<strong>How this works-</strong> This is a quiz that will show the difficulty people with <strong>deuteranopia</strong> have differentiating between colors that are easy for those with <strong>normal vision</strong> to differentiate. You will be presented with several sentences with text and backgrounds of various color. In the first round, you will take the quiz through the eyes of someone with normal vision, so the text backround and the text itself will contrast agianst each other very well. In round 2 everything stays the same except for the background color, which will change to be how someone with <strong>deuteranopia</strong> would see the background color from the previous round."
  document.querySelector("#instructions2").innerHTML ="<strong>Rules-</strong> Do your best to type out the sentence as perfectly as possible. DO NOT highlight or zoom in. Once you finish the quiz you can view how many words you missed."
  //Shows correct buttons
  document.querySelector("#protSubmit").style.display = "none";
  document.querySelector("#duetSubmit").style.display = "unset";
  document.querySelector("#tritSubmit").style.display = "none";
}
function tritTest() {
  let sen1 = document.querySelector("#sentence1");
  let sen2 = document.querySelector("#sentence2");
  let sen3 = document.querySelector("#sentence3");
  let sen4 = document.querySelector("#sentence4");
  let sen5 = document.querySelector("#sentence5");
  sen1.innerHTML ="Red is greener than purple, for sure.";
  sen2.innerHTML ="The clock within this blog and the clock on my laptop are 1 hour different from each other.";
  sen3.innerHTML ="The beauty of the African sunset disguised the danger lurking nearby.";
  sen4.innerHTML ="Sometimes it is better to just walk away from things.";
  sen5.innerHTML ="You have every right to be angry, but that doesn't give you the right to be mean.";
  sen1.style.color = "rgb(10, 90, 90)";
  sen2.style.color = "rgb(195, 186, 201)";
  sen3.style.color = "rgb(125, 225, 255)";
  sen4.style.color = "rgb(250, 230, 220)";
  sen5.style.color = "rgb(245, 210, 160)";
  sen1.style.background = "green";
  sen2.style.background = "rgb(179, 202, 6)";
  sen3.style.background = "blue";
  sen4.style.background = "rgb(243, 217, 88)";
  sen5.style.background = "rgb(79, 139, 255)"
  document.querySelector("#test").style.display = "unset";
  document.querySelector("#boring2").style.display ="none";
  //Rules and stuff
  document.querySelector("#testText").innerHTML ="Round 1!"
  document.querySelector("#instructions").innerHTML ="<strong>How this works-</strong> This is a quiz that will show the difficulty people with <strong>tritanopia</strong> have differentiating between colors that are easy for those with <strong>normal vision</strong> to differentiate. You will be presented with several sentences with text and backgrounds of various color. In the first round, you will take the quiz through the eyes of someone with normal vision, so the text backround and the text itself will contrast agianst each other very well. In round 2 everything stays the same except for the background color, which will change to be how someone with <strong>tritanopia</strong> would see the background color from the previous round."
  document.querySelector("#instructions2").innerHTML ="<strong>Rules-</strong> Do your best to type out the sentence as perfectly as possible. DO NOT highlight or zoom in. Once you finish the quiz you can view how many words you missed."
  //Shows correct buttons
  document.querySelector("#protSubmit").style.display = "none";
  document.querySelector("#duetSubmit").style.display = "none";
  document.querySelector("#tritSubmit").style.display = "unset";
}
function switchProt() {
  let input1 = document.querySelector("#input1");
  let input2 = document.querySelector("#input2");
  let input3 = document.querySelector("#input3");
  let input4 = document.querySelector("#input4");
  let input5 = document.querySelector("#input5");
  input1.value="";
  input2.value="";
  input3.value="";
  input4.value="";
  input5.value="";
  let sen1 = document.querySelector("#sentence1");
  let sen2 = document.querySelector("#sentence2");
  let sen3 = document.querySelector("#sentence3");
  let sen4 = document.querySelector("#sentence4");
  let sen5 = document.querySelector("#sentence5");
  sen1.innerHTML ="I received a heavy fine but it failed to crush my spirit.";
  sen2.innerHTML ="Sarah ran from the serial killer holding a jug of milk.";
  sen3.innerHTML ="The clouds formed beautiful animals in the sky that eventually created a tornado to wreak havoc.";
  sen4.innerHTML ="She always speaks to him in a loud voice.";
  sen5.innerHTML ="Not all people who wander are lost.";
  sen1.style.background = "rgb(143,126,30)";
  sen2.style.background = "rgb(0,76,157)";
  sen3.style.background = "rgb(203,180,0)";
  sen4.style.background = "rgb(243, 217, 88)";
  sen5.style.background = "rgb(79, 139, 255)";
  //show result buttons
  document.querySelector("#protResult").style.display = "unset";
  document.querySelector("#duetResult").style.display = "none";
  document.querySelector("#tritResult").style.display = "none";
  // hide first button
  document.querySelector("#protSubmit").style.display = "none";
  //chance rules and stuff again
  document.querySelector("#testText").innerHTML ="Round 2!";
  document.querySelector("#instructions").innerHTML ="Having fun yet?";
  document.querySelector("#instructions2").innerHTML ="Remember, the only thing that has changed is the background color";
}
function switchDuet() {
  let input1 = document.querySelector("#input1");
  let input2 = document.querySelector("#input2");
  let input3 = document.querySelector("#input3");
  let input4 = document.querySelector("#input4");
  let input5 = document.querySelector("#input5");
  input1.value="";
  input2.value="";
  input3.value="";
  input4.value="";
  input5.value="";
  let sen1 = document.querySelector("#sentence1");
  let sen2 = document.querySelector("#sentence2");
  let sen3 = document.querySelector("#sentence3");
  let sen4 = document.querySelector("#sentence4");
  let sen5 = document.querySelector("#sentence5");
  sen1.innerHTML ="Nothing seemed out of place except the washing machine in the bar.";
  sen2.innerHTML ="I'm not a party animal, but I do like animal parties.";
  sen3.innerHTML ="She hadn't had her cup of coffee, and that made things all the worse.";
  sen4.innerHTML ="She discovered van life is difficult with 2 cats and a dog.";
  sen5.innerHTML ="Written warnings in instruction manuals are worthless since rabbits can't read.";
  sen1.style.background = "rgb(140, 130, 149)";
  sen2.style.background = "rgb(221, 208, 241)";
  sen3.style.background = "rgb(161, 120, 0)";
  sen4.style.background = "rgb(255, 242, 228)";
  sen5.style.background = "rgb(255, 213, 158)";
  //show result buttons
  document.querySelector("#protResult").style.display = "none";
  document.querySelector("#duetResult").style.display = "unset";
  document.querySelector("#tritResult").style.display = "none";
  // hide first button
  document.querySelector("#duetSubmit").style.display = "none";
  //chance rules and stuff again
  document.querySelector("#testText").innerHTML ="Round 2!";
  document.querySelector("#instructions").innerHTML ="Having fun yet?";
  document.querySelector("#instructions2").innerHTML ="Remember, the only thing that has changed is the background color";
}
function switchTrit() {
  let input1 = document.querySelector("#input1");
  let input2 = document.querySelector("#input2");
  let input3 = document.querySelector("#input3");
  let input4 = document.querySelector("#input4");
  let input5 = document.querySelector("#input5");
  input1.value="";
  input2.value="";
  input3.value="";
  input4.value="";
  input5.value="";
  let sen1 = document.querySelector("#sentence1");
  let sen2 = document.querySelector("#sentence2");
  let sen3 = document.querySelector("#sentence3");
  let sen4 = document.querySelector("#sentence4");
  let sen5 = document.querySelector("#sentence5");
  sen1.innerHTML ="After coating myself in vegetable oil I found my success rate skyrocketed.";
  sen2.innerHTML ="He set out for a short walk, but now all he could see were mangroves and water were for miles.";
  sen3.innerHTML ="The irony of the situation wasn't lost on anyone in the room.";
  sen4.innerHTML ="The tortoise jumped into the lake with dreams of becoming a sea turtle.";
  sen5.innerHTML ="He was willing to find the depths of the rabbit hole in order to be with her.";
  sen1.style.background = "rgb(0, 86, 89)";
  sen2.style.background = "rgb(226, 226, 65)";
  sen3.style.background = "rgb(117, 236, 255)";
  sen4.style.background = "rgb(255, 242, 228)";
  sen5.style.background = "rgb(255, 213, 158)";
  //show result buttons
  document.querySelector("#protResult").style.display = "none";
  document.querySelector("#duetResult").style.display = "none";
  document.querySelector("#tritResult").style.display = "unset";
  // hide first button
  document.querySelector("#tritSubmit").style.display = "none";
  //chance rules and stuff again
  document.querySelector("#testText").innerHTML ="Round 2!";
  document.querySelector("#instructions").innerHTML ="Having fun yet?";
  document.querySelector("#instructions2").innerHTML ="Remember, the only thing that has changed is the background color";
}
function resultsProt() {
  document.querySelector("#resultButtons").style.display = "none";
  document.querySelector("#boring").style.display="none";
  document.querySelector("#final").style.visibility="visible";
  document.querySelector("#testText").innerHTML ="All done";
  document.querySelector("#instructions").innerHTML ="Results show how many words you missed.";
  document.querySelector("#instructions2").style.display="none";

}
function resultsDuet() {
  document.querySelector("#resultButtons").style.display = "none";
  document.querySelector("#boring").style.display="none";
  document.querySelector("#final").style.visibility="visible";
  document.querySelector("#testText").innerHTML ="All done";
  document.querySelector("#instructions").innerHTML ="Results show how many words you missed.";
  document.querySelector("#instructions2").style.display="none";

}
function resultsTrit() {
  document.querySelector("#resultButtons").style.display = "none";
  document.querySelector("#boring").style.display="none";
  document.querySelector("#final").style.visibility="visible";
  document.querySelector("#testText").innerHTML ="All done";
  document.querySelector("#instructions").innerHTML ="Results show how many words you missed.";
  document.querySelector("#instructions2").style.display="none";

}
function test() {
  let originalSen = [document.querySelector("#sentence1").textContent,document.querySelector("#sentence2").textContent,document.querySelector("#sentence3").textContent,document.querySelector("#sentence4").textContent,document.querySelector("#sentence5").textContent];
  let inputedAns = [document.querySelector("#input1").value,document.querySelector("#input2").value,document.querySelector("#input3").value,document.querySelector("#input4").value,document.querySelector("#input5").value];
  let table = [document.querySelector("#score1-1"),document.querySelector("#score2-1"),document.querySelector("#score3-1"),document.querySelector("#score4-1"),document.querySelector("#score5-1")];
  
  for (let i=0; i < originalSen.length; i++) {
    let senctence = originalSen[i];
    let answer = inputedAns[i];
    let sentA = senctence.split(" ");
    let ansA = answer.split(" ");
    let number = 0;
    for (let i=0; i < sentA.length; i++) {
      try {
        ansA[i];
      }
      catch {
        break;
      }
      if (sentA[i]!= ansA[i]) {
        number++;
      }
    }
    table[i].innerHTML = number;
  }
}
function test2() {
  let originalSen = [document.querySelector("#sentence1").textContent,document.querySelector("#sentence2").textContent,document.querySelector("#sentence3").textContent,document.querySelector("#sentence4").textContent,document.querySelector("#sentence5").textContent];
  let inputedAns = [document.querySelector("#input1").value,document.querySelector("#input2").value,document.querySelector("#input3").value,document.querySelector("#input4").value,document.querySelector("#input5").value];
  let table2 = [document.querySelector("#score1-2"),document.querySelector("#score2-2"),document.querySelector("#score3-2"),document.querySelector("#score4-2"),document.querySelector("#score5-2")];
  
  for (let i=0; i < originalSen.length; i++) {
    let senctence = originalSen[i];
    let answer = inputedAns[i];
    let sentA = senctence.split(" ");
    let ansA = answer.split(" ");
    let number = 0;
    for (let i=0; i < sentA.length; i++) {
      try {
        ansA[i];
      }
      catch {
        break;
      }
      if (sentA[i]!= ansA[i]) {
        number++;
      }
    }
    table2[i].innerHTML = number;
  }
}
function reloadPage() {
  window.location.reload();
}
function domLoaded() {
  prot = document.querySelector("#protanopia");
  deut = document.querySelector("#deuteranopia");
  trit = document.querySelector("#tritanopia");
  norm = document.querySelector("#normalB")

  prot.addEventListener("click" , changeProt);
  deut.addEventListener("click" , changeDeut);
  trit.addEventListener("click" , changeTrit);
  norm.addEventListener("click" , changeNormal);
  //Hides buttons
  document.querySelector("#test").style.display = "none";
  document.querySelector("#protSubmit").style.display = "none";
  document.querySelector("#duetSubmit").style.display = "none";
  document.querySelector("#tritSubmit").style.display = "none";
  document.querySelector("#protResult").style.display = "none";
  document.querySelector("#duetResult").style.display = "none";
  document.querySelector("#tritResult").style.display = "none";
  //Hides last page
  document.querySelector("#final").style.visibility ="hidden";
  
  let protB = document.querySelector("#protChange");
  let duetB = document.querySelector("#DeutChange");
  let tritB = document.querySelector("#tritChange");
  protB.addEventListener("click", protTest);
  duetB.addEventListener("click", deutTest);
  tritB.addEventListener("click", tritTest);
  //round 1 submit
  document.querySelector("#protSubmit").addEventListener("click",test);
  document.querySelector("#protSubmit").addEventListener("click",switchProt);
  
  document.querySelector("#duetSubmit").addEventListener("click",test);
  document.querySelector("#duetSubmit").addEventListener("click",switchDuet);
  
  document.querySelector("#tritSubmit").addEventListener("click",test);
  document.querySelector("#tritSubmit").addEventListener("click",switchTrit);

  //round 2 buttons
  document.querySelector("#protResult").addEventListener("click",test2);
  document.querySelector("#protResult").addEventListener("click",resultsProt);

  document.querySelector("#duetResult").addEventListener("click",test2);
  document.querySelector("#duetResult").addEventListener("click",resultsDuet);

  document.querySelector("#tritResult").addEventListener("click",test2);
  document.querySelector("#tritResult").addEventListener("click",resultsTrit);

  //reload page
  document.querySelector("#reload").addEventListener("click",reloadPage);
}