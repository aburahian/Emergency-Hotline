## 1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById, getElementsByClassName, and querySelector / querySelectorAll are dom selection methods.Those use for html element selection.
- getElementById use for id selector.Here we get single element.
- getElementsByClassName use for class selector.Here we get multiple html collection  in like a array.
- querySelector use for css selector.Here we get single first matching element.
- querySelectorAll use for css selector.Here we get all  matching element in node list.

## 2 How do you create and insert a new element into the DOM?

Ans: 
- First create the Element-const newDiv = document.createElement("div");
- Then inserted element- newDiv.innerHtml=" ...."
- Then get the element where to inserted in dom.
- Then inserted in dom- cardContainer.appendChild(newDiv)
