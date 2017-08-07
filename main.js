  console.log("JS Online");


let blocks_Clicked = 0;


function accessTile(){
console.log("block clicked");

blocks_Clicked++;
console.log("blocks clicked: " + blocks_Clicked);
let liText = blocks_Clicked;
// This moves the text to the H2.
    liH2.innerHTML = liText ;
// This adds the H2 to the li tile.
    answer_Box.appendChild( liH2 );
// This adds the li to the itemList.
    clockSpot.appendChild( answer_Box );
}
let clockSpot = document.querySelector( "#top_board" );
let answer_Box       = document.createElement( "li" );
answer_Box.setAttribute("class", "answer_Space");
let liH2     = document.createElement( "h2" );






// This places the clear box.
let attach = document.querySelector( "#top_board" );
let form       = document.createElement( "li" );
// This creates an H2 element.
let form_H2     = document.createElement( "h2" );
// This places the random_Set text into the liText.
let form_Text = document.createTextNode( "Clear" );
// This makes the tile respond to being clicked.
form.addEventListener('click', accessTile);
// This creates a class for the tile and set it to hide.
form.setAttribute("class", "clear");
form.addEventListener('click', accessTile);
// form.setAttribute("class", "answer_Space");
// This moves the text to the H2.
  form_H2.appendChild( form_Text );
// This adds the H2 to the li tile.
  form.appendChild( form_H2 );
// This adds the li to the itemList.
  attach.appendChild( form );


let hold       = document.createElement( "div" );
hold.setAttribute("id", "hold_This");

  accessTile();






// This places the rest of the buttons.
function build_Calculator1(){
  console.log("Calculator being built 1.");
// This makes the itemList node attach to the total_board element on the HTML page.
let itemList = document.querySelector( "#total_board" );
// This makes a loop to go through the memor_Options array.
  for( let i = 0; i < 16; i++ ){

// This creates an li value to act as a tile.
    let li       = document.createElement( "li" );

// This creates an H2 element.
    let liH2     = document.createElement( "h2" );

// This places the random_Set text into the liText.
    let liText = document.createTextNode( i );

// This makes the tile respond to being clicked.
  li.addEventListener('click', accessTile);

// This creates a class for the tile and set it to hide.
   li.setAttribute("class", "hide");

  //  if( i === 1){
  //  li.setAttribute("class", "answer_Space");
  //  }

// This sets each tile with an id based on position on the game board AND the card value.
   li.setAttribute("id", "card" + i);
// This moves the text to the H2.
    liH2.appendChild( liText );
// This adds the H2 to the li tile.
    li.appendChild( liH2 );
// This adds the li to the itemList.
    itemList.appendChild( li );
  }
}



// function build_Calculator2(){
//   console.log("Calculator being built 2.");
// // This makes the itemList node attach to the total_board element on the HTML page.
// let itemList = document.querySelector( "#total_board" );
// // This makes a loop to go through the memor_Options array.
//   for( let i = 0; i < 16; i++ ){
//
// // This creates an li value to act as a tile.
//     let li       = document.createElement( "li" );
//
// // This creates an H2 element.
//     let liH2     = document.createElement( "h2" );
//
// // This places the random_Set text into the liText.
//     let liText = document.createTextNode( i );
//
// // This makes the tile respond to being clicked.
//   li.addEventListener('click', accessTile);
//
// // This creates a class for the tile and set it to hide.
//    li.setAttribute("class", "hide");
//
//   //  if( i === 1){
//   //  li.setAttribute("class", "answer_Space");
//   //  }
//
// // This sets each tile with an id based on position on the game board AND the card value.
//    li.setAttribute("id", "card" + i);
// // This moves the text to the H2.
//     liH2.appendChild( liText );
// // This adds the H2 to the li tile.
//     li.appendChild( liH2 );
// // This adds the li to the itemList.
//     itemList.appendChild( li );
//   }
// }

build_Calculator1();
// build_Calculator2();
