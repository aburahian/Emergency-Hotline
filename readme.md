## 1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById, getElementsByClassName, and querySelector / querySelectorAll are dom selection methods.Those use for html element selection.
- getElementById used for the ID selector. Here we get a single element.
- getElementsByClassName used for class selector.Here we get multiple html collection  in like an array.
- querySelector used for CSS selector.Here we get single first matching element.
- querySelectorAll used for CSS selectors. Here we get all  matching element in node list.

## 2 How do you create and insert a new element into the DOM?

Ans: 
- First create the Element-const newDiv = document.createElement("div");
- Then inserted element- newDiv.innerHtml=" ...."
- Then get the element where to insert in the DOM.
- Then inserted in the dom- cardContainer.appendChild(newDiv)
