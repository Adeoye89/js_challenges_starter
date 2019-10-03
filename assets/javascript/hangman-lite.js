(function () {
    let word = "vanilladafaga"
    let letter = "z"
    let count = word.split(letter).length - 1

    if (count < 1) {
        console.log("Nope, that letter doesn't exist in my word.");
    }
    else {
        console.log("Yeah, the letter " + letter + " exists " + count + " times in my word")

    }




})();