const arr = ["Computer Science Undergrad" , "Web-Developer", "Competitive Programmer"];
var word = 0;
var count = 0;
let curr = ""; let letter = "";

(function typing() {
   if(word === arr.length) word=0;
   curr = arr[word];
   letter = curr.slice(0, count++);
   document.querySelector(".typewritter").textContent = letter;
   if (letter.length === curr.length){
       word++;
       count = 0;
       setTimeout(typing, 2000);
   }
   else{
       setTimeout(typing, 150);
   }
})();