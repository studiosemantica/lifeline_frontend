///////////////////////



//SET URL SO IT USES DEPLOYED API URL IF IT EXISTS, LOCALHOST IF IT DOESN'T
const deployedURL = "https://project2backend-mk.herokuapp.com";
// const deployedURL = "";
const URL = deployedURL ? deployedURL : "http://localhost:3003";

///////////////////////
//GLOBAL VARIABLES
//////////////////////
const $nameInput = $("#createinput");
const $pizzaSelect = $("#createselect");
const $button = $("#createbutton");
const $nameEditInput = $("#editinput");
const $pizzaEditSelect = $("#editselect");
const $editButton = $("#editbutton");
const $ul = $("ul");

//////////////////////////////
//FUNCTIONS
/////////////////////////////
//DEFINE FUNCTIONS HERE

//GET PIZZA FROM API AND POPULATE SELECTOR INPUT
  const getPizza = async () => {
  //API CALL USING ASYNC/AWAIT
  const response = await fetch(`${URL}/case`);
  const data = await response.json();

  //POPULATE SELECTOR WITH RETRIEVED DATA
  data.forEach((item) => {
    const $option = $("<option>").attr("value", item._id).text(item.type);
    $pizzaSelect.append($option);

    const $option2 = $("<option>").attr("value", item._id).text(item.type);
    $pizzaEditSelect.append($option2);
  });
};

//GET ALL RATS
const getRats = async () => {
  //gets the rats
  const response = await fetch(`${URL}/request`);
  const data = await response.json();
  console.log(data);

  //populate DOM with rats
  data.forEach((request) => {
    //create the li
    const $li = $("<li>").text(
      `${request.name} needs assistance with ${request.case.type}.`
    );
    //add a delete button for each rat
    $li.append($("<button>").text("delete").attr("id", request._id).on("click", deleteRat))

    //add an edit button for each rat
    $li.append($("<button>").text("edit").on("click", (event) => {
      $nameEditInput.val(request.name)
      $pizzaEditSelect.val(request.case._id)
      $editButton.attr("id", request._id)
    }))




    $ul.append($li);
  });
};

//CREATE A RAT
const createRat = async (event) => {
  //Create to New Rat from Form Data
  const newRat = {
    name: $nameInput.val(),
    case: $pizzaSelect.val(),
  };

  //Send request to api to create rat
  const response = await fetch(`${URL}/request`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRat),
  })
  const data = response.json();

  //update the DOM
  $ul.empty()
  $nameInput.val('');
  getRats()
};

//Delete a Rat
const deleteRat = async (event) => {
  //make request to delete rat
  const response = await fetch(`${URL}/request/${event.target.id}`, {
    method: "delete"
  })

  //update the dom
  $ul.empty()
  getRats()
}

//Update a Rat
const updateRat = async (event) => {
  //Logging the event object
  console.log(event)
  //Create Updated Rat Object
  const updatedRat = {
    name: $nameEditInput.val(),
    case: $pizzaEditSelect.val()
  }
  //make our put request
  const response = await fetch(`${URL}/request/${event.target.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedRat)
  })
  
  //update the dom
  $ul.empty();
  $nameEditInput.val('');
  getRats();
}



////////////////////////////////
// Main Application Logic
////////////////////////////////
// Start executing below

//Get the pizza for selector
getPizza();
//initially get existing rats
getRats();
//add create function to button click
$button.on('click', createRat)
// add update function to edit submit button
$editButton.on("click", updateRat)
