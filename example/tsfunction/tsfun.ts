// let z: string='rr';
// function add(x: number,y : number): number{
//     return x+y;
// }
// console.log(add(2,6));


// let meAdd : (x:string,y?:string) => string = function(x,y="ttt"){ 
//     return x+" "+y;
// }

// console.log(meAdd("admin"));



// let buildapp: (fri:string, ...rec:string[]) => string = function(fri,...rec){
//     return fri +" " +rec.join("kkk");
// }

// console.log(buildapp("qq","ww","eee"));


// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);



