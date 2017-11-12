var cardDeck = new Array(54);
var cardTemplate = {
    suitValue : [0,1,2,3],
    suitStr : ['S', '2','C','3'],
    faceValue : [2,3,4,5,6,7,8,9,10,11,12,13,14],
    faceStr : ['2','3','4','5','6','7','8','9','10', 'J', 'Q', 'K', 'A'],
}
var defaultCardObj = {
    suitValue : '',
    suitStr : '',
    faceValue : '',
    faceStr :'',
}
var cardDeckD1= new Array();
var userSelection = [];
var formCard = {};
var cardIndex = 0;




window.onload = function(){
    var cardFaceValue = new Array(13);
    for(var i=0;i < cardTemplate.suitStr.length; i++){
        var x = document.getElementById('cardSuit').appendChild(document.createElement("li"));
        x.className += ' suit-inner';
        x.innerHTML = cardTemplate.suitStr[i];
        x.value = cardTemplate.suitStr[i];
        x.id = 'suit' + cardTemplate.suitStr[i];
        document.getElementById(x.id).setAttribute('suit-name', x.value);
        if(cardTemplate.suitStr[i] == '2' || cardTemplate.suitStr[i] ==  '3'){
           x.className +=' color-red' ;
        }
        document.getElementById(x.id).addEventListener('click', handleClickOnCardSuit, true);
    }   
    for(var i=0;i < cardTemplate.faceStr.length; i++){
        var fvalue = document.getElementById('cardFaceValue').appendChild(document.createElement("li"));
        fvalue.innerHTML = cardTemplate.faceStr[i];
        fvalue.value = cardTemplate.faceStr[i];
        fvalue.id = 'faceValue'+cardTemplate.faceStr[i];
        document.getElementById(fvalue.id).setAttribute('suit-value', fvalue.value);
        document.getElementById(fvalue.id).addEventListener('click', handleClickOnFaceValue, true);              
    }
    
    createCardDeck();
    
}

function handleClickOnCardSuit(e){
    userSelection[cardIndex] = defaultCardObj;
    userSelection[cardIndex].suitValue = e.target.value;
    userSelection[cardIndex].suitStr = cardTemplate.suitStr[parseInt(e.target.value)]; 
}

function handleClickOnFaceValue(e){
    userSelection[cardIndex].faceValue = e.target.value;
    userSelection[cardIndex].faceStr = userSelection[cardIndex].faceValue.toString();    
}



function createCardDeck() {
    var cardNo = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 13; j++) {
            cardDeckD1[cardNo] = {
                suitValue: cardTemplate.suitValue[i],
                suitStr: cardTemplate.suitStr[i],
                faceValue: cardTemplate.faceValue[j],
                faceStr: cardTemplate.faceStr[j],
                index: cardNo,
            }
            cardNo++;

        }

    }
}

function abc(obj){
    if(userSelection[cardIndex].suitValue == obj.suitValue && userSelection[cardIndex].faceValue == obj.faceValue){
        console.log("object fount from deck:::",obj)
        return true;
    }
    
 }


function createCrdsCombinations(){
    console.log("USer selected Card",userSelection);   
    var x = cardDeckD1.filter(abc);
    
    console.log("card deck::::",x);
    cardDeckD1.splice(x[0].index,1);
    console.log("card deck splice::::",cardDeckD1);
    cardIndex++;
    
}

