// get-Element
function getElement(id){
            return document.getElementById(id)
}
// heart click count
 getElement("cards-container").addEventListener("click",function(e){
            if(e.target.className.includes("fa-heart")){
                getElement("heart-count").innerText++
                
            }
})
// coin cut,history
getElement("cards-container").addEventListener("click",function(e){
    if(e.target.className.includes("call-btn")){
        const time=new Date().toLocaleTimeString()
        const serviceName=e.target.parentNode.children[0].innerText
        const serviceNumber=e.target.parentNode.children[2].innerText
        const totalCoin=Number(getElement("total-coin").innerText)
        if(totalCoin<20){
            alert("You have enough coin..🥲")
            getElement("total-coin").innerText=0
            return
        }
        alert(`📞 Calling ${serviceName} ${serviceNumber} ..`)
        getElement("total-coin").innerText=totalCoin-20
        const newDiv=document.createElement("div")
        newDiv.innerHTML=`
            <div class="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-xl mt-4">
                            <div>
                                <h1 class="text-lg font-bold">${serviceName}</h1>
                                <p class="text-[#5C5C5C]"><span>${serviceNumber}</span></p>
                            </div>
                            <div>
                                <p>${time}</p>
                            </div>
                       </div>
        `
        getElement("history-container").appendChild(newDiv)
        
    }
    
})
// clear history
getElement("clear-btn").addEventListener("click",function(){
    getElement("history-container").innerHTML=""
})
// copy
getElement("cards-container").addEventListener("click",function(e){
    if(e.target.className.includes("copy-btn")){
        getElement("copy-count").innerText++
        const serviceNumber=e.target.parentNode.children[2].children[0].innerText
        navigator.clipboard.writeText(serviceNumber)
        alert(`Service Number Copied ${serviceNumber} ✅`)
    }
})

// for responsive 

getElement("history-btn").addEventListener("click",function(){
    getElement("cards-container").classList.add("hidden")
    getElement("aside").classList.remove("hidden")
    getElement("home-btn").classList.remove("hidden")
    getElement("history-btn").classList.add("hidden")  
})
getElement("home-btn").addEventListener("click",function(){
    getElement("aside").classList.add("hidden")
    getElement("cards-container").classList.remove("hidden")
    getElement("home-btn").classList.add("hidden")
    getElement("history-btn").classList.remove("hidden")  
})