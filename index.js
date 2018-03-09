function getFirstSelector(selector) {
  const selectorVar = document.querySelector(selector)
  return selectorVar
}

 function nestedTarget() {
  const target = document.querySelector('main #nested .target')
  return target
 }

 function increaseRankBy(n) {
   const rankedListsItems = document.querySelectorAll('.ranked-list li')

   for (let i = 0; i < rankedListsItems.length; i++) {
       rankedListsItems[i].innerHTML = parseInt(rankedListsItems[i].innerHTML) + n
   }
 }

/*Define a function deepestChild() that pulls out the most deeply
nested child from div#grand-node. (Remember, you can iterate over
elements and call querySelector() and querySelectorAll() on them.
This is challenging to implement correctly, but not beyond your ability!)*/

function deepestChild() {
  
}
