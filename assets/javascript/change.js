(function(){
    let amount = 99;

    let twentyCount = Math.floor(amount/20)
    amount = amount - (twentyCount*20)
    
    let tencount = Math.floor(amount/10)
    amount = amount - (tencount*10)

    let fivecount = Math.floor(amount/5)
    amount = amount - (fivecount*5)

    let oneCount = Math.floor(amount/1)
    amount = amount - (oneCount*1)

    
    let billsArray = [twentyCount,tencount,fivecount,oneCount]
    
    console.log(billsArray)
    

})();