//instructions
//create a loop to "print out" all elements in the DOM
//1. how to figure out the LENGTH, i.e., the number if iterations of my loop
//2. how do I access and element from my page... then ALL elements?
//3. how do I want to print them out? Start on the console.

var allDOMElements = document.gtElementByTagName("*"); 


for (var i = 0; i < allDOMElements.length; i++){
  console.log(allDOMElements[i].innerHTML);
}