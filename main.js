  console.log("JS Online");

function accessTile(){
console.log("block clicked");
}




function build_Calculator(){
  console.log("Calculator being built.");
// This makes the itemList node attach to the total_board element on the HTML page.
let itemList = document.querySelector( "#total_board" );
// This makes a loop to go through the memor_Options array.
  for( let i = 0; i < 18; i++ ){

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

   if( i === 1){
   li.setAttribute("class", "answer_Space");
   }
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

build_Calculator();
