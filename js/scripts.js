$(function () {
  var cardValues = ['A',"2","3",'4','5','6','7','8','9','10','J','Q','K'];
  var cardSuits = ["Clubs","Spades","Diamonds","Hearts"];
  var cardDeck = [];

  for (var suitIndex = 0 ; suitIndex < cardSuits.length ; suitIndex ++) {
    for (var valueIndex = 0 ;  valueIndex < cardValues.length ; valueIndex ++) {
      cardDeck.push(cardValues[valueIndex]+" of "+cardSuits[suitIndex]);
    }
  }

  for (var deckIndex =0 ; deckIndex < cardDeck.length ; deckIndex ++) {
    document.write(deckIndex);
    document.write("<li>"+cardDeck[deckIndex]+"</li>");
  }




  // cardSuits.forEach(function(cardSuit){
  //   cardValues.forEach(function(cardValue){
  //     cardDeck.push(cardValue+" of "+cardSuit);
  //   });
  // });
  // cardDeck.forEach(function(card){
  // //   document.write("<li>"+card+"</li>");
  // });
});
