(function(){


    let word = "racecar"

    let letterArray = word.split('')
    // console.log(letterArray)
    
    
    
    
    let reversedArray = letterArray.reverse()
    // console.log(reversedArray)
    let reversedWord = reversedArray.join('')
    // console.log(reversedString)

    // if word is equal to reversedWord then console.log true
    // else console.log false

    if (reversedWord === word) { console.log(true)

    }

    else {
        console.log(false)
    }


})();