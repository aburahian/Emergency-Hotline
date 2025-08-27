## 1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById, getElementsByClassName, and querySelector / querySelectorAll are dom selection methods.Those use for html element selection.
- getElementById used for the ID selector. Here we get a single element.
- getElementsByClassName used for class selector. Here we get multiple html collection  in like an array.
- querySelector used for CSS selector. Here we get single first matching element.
- querySelectorAll used for CSS selector. Here we get all  matching element in node list.


## 2 How do you create and insert a new element into the DOM?

Ans: 
- First create the Element-const newDiv = document.createElement("div");
- Then inserted element- newDiv.innerHtml=" ...."
- Then get the element where to insert in dom.
- Then inserted in dom- cardContainer.appendChild(newDiv)
  
## 3 What is Event Bubbling and how does it work?
- Event Bubbling is a default dom  event propagation behavior. Where an event is triggered, it  automatically propagates upward through its parent elements in the dom tree.


## 4 What is Event Delegation in JavaScript? Why is it useful? 
- In the event delegation event add in the parent element and control all the children. It is very easy to use.

## 5 What is the difference between preventDefault( ) and stopPropagation() methods?
- preventDefault() is used to stop submitting the form and reload the page.
- stopPropagation() is used to stop bubbling up to parent elements .

 
