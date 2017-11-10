var cardDeck = new Array(54);
var cardTemplate = {
    suitValue : [0,1,2,3],
    suitStr : ['S', '2','C','3'],
    faceValue : [2,3,4,5,6,7,8,9,10,11,12,13,14],
    faceStr : ['2','3','4','5','6','7','8','9','10', 'J', 'Q', 'K', 'A'],
}
var cardDeckD1 = {
    suitValue : '',
    suitStr : '',
    faceValue : '',
    faceStr :'',
};
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
        document.getElementById(fvalue.id).setAttribute('card-value', fvalue.value);
        document.getElementById(fvalue.id).addEventListener('click', handleClickOnFaceValue, true);              
    }
    
    createCardDeck();
    
}

function handleClickOnFaceValue(e){
    console.log("btn is click",e.target);
}

function handleClickOnCardSuit(e){
    console.log("btn is click",e.target);
}

function createCardDeck(){
     var cardNo = 0;
    for (var i = 0; i < 4; i++) {
        for( var j=0; j<13; j++){
           cardDeckD1[cardNo] = {
            suitValue: cardTemplate.suitValue[i],
            suitStr: cardTemplate.suitStr[i],
            faceValue: cardTemplate.faceValue[j],
            faceStr: cardTemplate.faceStr[j],
           } 
           cardNo++;
        }
    }
    console.log("Card Deck::::",cardDeckD1);
}