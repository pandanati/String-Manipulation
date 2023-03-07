let button = document.getElementById("manipulatestring");
let stringList = document.getElementById("list")
let listItemList = document.getElementsByTagName("li")

button.addEventListener("click", addstring);

function addstring(){
    let idNumber = stringList.childElementCount;
    let inputText = document.createTextNode(document.getElementById("textbox").value)
    let inputString = inputText.wholeText;

    if (!inputString)
    {
        alert("You have to input some letters");
        
    }
    else
    {
        
        let newListItem = document.createElement("li");
        stringList.appendChild(newListItem);
        newListItem.appendChild(inputText).innerHTLM;
        newListItem.setAttribute("id", idNumber);

        let newListItemReverse = document.createElement("li")
        reversedString = reverseString(inputString);
        stringList.appendChild(newListItemReverse);
        newListItemReverse.appendChild(document.createTextNode(reversedString)).innerHTLM;
        newListItemReverse.setAttribute("id", idNumber);
        
        let newListItemUpperCase = document.createElement("li");
        uppercaseString = inputString.toUpperCase();
        stringList.appendChild(newListItemUpperCase);
        newListItemUpperCase.appendChild(document.createTextNode(uppercaseString)).innerHTLM;
        newListItemUpperCase.setAttribute("id", idNumber);

        let newListItemLowercase = document.createElement("li");
        lowercaseString = inputString.toLowerCase();
        stringList.appendChild(newListItemLowercase);
        newListItemLowercase.appendChild(document.createTextNode(lowercaseString)).innerHTLM;
        newListItemLowercase.setAttribute("id", idNumber);

        let newListItemCapitalizedFirstLetter = document.createElement("li")
        CapitalizedFirstString = capitalizeFirstLetter(inputString);
        stringList.appendChild(newListItemCapitalizedFirstLetter);
        newListItemCapitalizedFirstLetter.appendChild(document.createTextNode(CapitalizedFirstString)).innerHTLM;
        newListItemCapitalizedFirstLetter.setAttribute("id", idNumber);

        let newListItemCapitalizedLastLetter = document.createElement("li")
        CapitalizedLastString = capitalizeLastLetter(inputString);
        stringList.appendChild(newListItemCapitalizedLastLetter);
        newListItemCapitalizedLastLetter.appendChild(document.createTextNode(CapitalizedLastString)).innerHTLM;
        newListItemCapitalizedLastLetter.setAttribute("id", idNumber);
        
    }
}

function reverseString(string){
    var splitString = string.split("")

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("")

    return joinArray;
}

function capitalizeFirstLetter(string){

    var capitalizeFirstLetterString = string.charAt(0).toUpperCase() + string.slice(1)

    return capitalizeFirstLetterString;
}

function capitalizeLastLetter(string){

    var capitalizeLastLetterString = string.slice(0,-1) + string.charAt(string.length-1).toUpperCase()

    return capitalizeLastLetterString;
}
