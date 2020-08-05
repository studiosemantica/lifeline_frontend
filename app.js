///////////////////////



//SET URL SO IT USES DEPLOYED API URL IF IT EXISTS, LOCALHOST IF IT DOESN'T
const deployedURL = "https://project2backend-mk.herokuapp.com";
// const deployedURL = "";
const URL = deployedURL ? deployedURL : "http://localhost:3003";

///////////////////////
//GLOBAL VARIABLES
//////////////////////
const $nameInput = $("#createinput");
const $caseSelect = $("#createselect");
const $button = $("#createbutton");
const $nameEditInput = $("#editinput");
const $caseEditSelect = $("#editselect");
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
    $caseSelect.append($option);

    const $option2 = $("<option>").attr("value", item._id).text(item.type);
    $caseEditSelect.append($option2);
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
    const $li = $("<p>").addClass("card-text mb-3").text(`${request.name} needs assistance with ${request.case.type}.`).append($('<hr>'));
    // const $li2 = $("<p>").addClass("card-text mb-3").text(`${request.name} needs assistance with ${request.case.type}.`).append($('<hr>'));
    //add a delete button for each rat
    $li.append($("<button>").text("delete").attr("id", request._id).on("click", deleteRat))

    //add an edit button for each rat
    $li.append($("<button>").text("edit").on("click", (event) => {
      $nameEditInput.val(request.name)
      $caseEditSelect.val(request.case._id)
      $editButton.attr("id", request._id)
    }))

  

  // make bootstrap div for grid column of each card
  const $gridDiv = $('<div>').addClass("col-md-4 mb-4")
  // add card div
  const $cardDiv = $('<div>').addClass("card")
  // add card content div
  const $cardBodyDiv = $('<div>').addClass("card-body")


  //CODE Block to assign color tag to each Badge
  let $badge = $('')
  if ( request.case.type === "Accident") {
    $badge = $('<a>').addClass("badge badge-secondary").text(`${request.case.type}`)
  } else if ( request.case.type === "Mental Health Crisis"){
    $badge = $('<a>').addClass("badge badge-warning").text(`${request.case.type}`)
  } else if ( request.case.type === "Potential Overdose"){
    $badge = $('<a>').addClass("badge badge-danger").text(`${request.case.type}`)
  } else if ( request.case.type === "Seeking Safety"){
    $badge = $('<a>').addClass("badge badge-success").text(`${request.case.type}`)
  } else if ( request.case.type === "Seeking Resources"){
    $badge = $('<a>').addClass("badge badge-primary").text(`${request.case.type}`)
  }

  
  // define spacer
  const $spacer = $('<hr>')
  // define cardTitle
  const $cardTitle = $('<h4>').addClass("card-title").append($('<strong>').text(`${request.location}`).append($('<hr>')))


  //create each card 
  $('.row').append($($gridDiv).append($($cardDiv).append($($cardBodyDiv).append($badge).append($spacer).append($cardTitle).append($li))))

  // $('.wiz').append($($li2))
  console.log('hellow world');
  console.log(request.case.type);

  });
};




//CREATE A REQUEST
const createRequest = async (event) => {
  //Create to New Rat from Form Data
  const newRequest = {
    name: $nameInput.val(),
    case: $caseSelect.val(),
  };

  //Send request to api to create rat
  const response = await fetch(`${URL}/request`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRequest),
  })
  const data = response.json();

  //update the DOM
  $('.row').empty();
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
  $('.row').empty();
  getRats()
}

//Update a Rat
const updateRequest = async (event) => {
  //Logging the event object
  console.log(event)
  //Create Updated Rat Object
  const updatedRequest = {
    name: $nameEditInput.val(),
    case: $caseEditSelect.val()
  }
  //make our put request
  const response = await fetch(`${URL}/request/${event.target.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedRequest)
  })
  
  //update the dom

  $nameEditInput.val('');
  $('.row').empty();
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
$button.on('click', createRequest)
// add update function to edit submit button
$editButton.on("click", updateRequest)
