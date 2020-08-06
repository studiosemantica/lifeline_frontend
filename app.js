///////////////////////



//SET URL SO IT USES DEPLOYED API URL IF IT EXISTS, LOCALHOST IF IT DOESN'T
const deployedURL = "https://project2backend-mk.herokuapp.com";
// const deployedURL = "";
const URL = deployedURL ? deployedURL : "http://localhost:3003";

///////////////////////
//GLOBAL VARIABLES
//////////////////////
const $nameInput = $("#form34");
const $caseSelect = $("#createselect");
const $button = $("#createbutton");
const $nameEditInput = $("#editinput");
const $caseEditSelect = $("#editselect");
const $editButton = $("#editbutton");
console.log($editButton);
const $emailInput = $("#form29")
const $phoneInput = $("#form30")
const $locationInput = $("#form31")
const $descriptionInput = $("#form8")
const $ul = $("ul");


//////////////////////////////
//FUNCTIONS
/////////////////////////////
//DEFINE FUNCTIONS HERE

//GET CASE FROM API AND POPULATE SELECTOR INPUT
  const getCase = async () => {
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

//GET ALL REQUESTS
const getRequests = async () => {
  //gets the rats
  const response = await fetch(`${URL}/request`);
  const data = await response.json();
  console.log(data);

  //populate DOM with rats
  data.forEach((request) => {
  

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
  // define cardLocationTitle
  const $cardLocation = $('<h4>').addClass("card-title").append($('<strong>').text(`${request.location}`).append($('<hr>')))

  const $contactDiv = $('<div>').attr('class','card text-left mb-4')
  const $contactHeader = $('<div>').addClass("card-header").attr("style","font-size: 20px;").text("Contact")
  const $contactBody = $('<div>').addClass("card-body")
  const $contactName = $('<h5>').addClass("card-title").attr("id", "name").attr("style","font-size: 16px;").text(`${request.name}`)
  const $contactPhone = $('<p>').addClass("card-text").addClass("mb-1").attr("style","font-size: 13px;").text(`${request.phone}`)
  const $contactEmail = $('<p>').addClass("card-text").attr("style","font-size: 13px;").text(`${request.email}`)
  const $break = $('<br>')


  const $contactDetails = $contactBody.append($contactName).append($contactPhone).append($contactEmail)

  const $contact = $contactDiv.append($contactHeader).append($contactDetails)
      
     //DESCRIPTION GOES HERE
      const $p = $("<p>").addClass("card-text mb-3").text(`${request.description}`).append($('<hr>'));
    
      //add a delete button for each request
      const $deleteButton = $("<button>").text("delete").attr("id", request._id).on("click", deleteRat)
  
      //add an edit button for each request
//       <div class="text-center">
//   <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm" style="background-color:black;color:white;">Request Assistance</a>
// </div>

      const $edit = $("<button>")
      // .$("<a>").attr('href', "").addClass("btn btn-default btn-rounded mb-4").attr('data-toggle',"modal").attr("data-target", "#modalContactForm")
      .text("edit").on("click", (event) => {
        
        $edit.attr('href', "")
        // .addClass("btn btn-default btn-rounded mb-4")
        .attr('data-toggle',"modal").attr("data-target", "#modalContactForm")
        
        $nameInput.val(request.name)
        $caseSelect.val(request.case._id)
        $phoneInput.val(request.phone),
        $emailInput.val(request.email),
        $locationInput.val(request.location),
        $descriptionInput.val(request.description),
        $button.attr("id",request._id)
        $button.off()
        $button.on("click", updateRequest)
        // $button.attr("id", request._id)
        // $button.attr("id",request._id)
        

      })
  

  //create each card 
  $('.row').append($($gridDiv).append($($cardDiv).append($($cardBodyDiv).append($badge).append($spacer).append($cardLocation).append($p).append($contact).append($deleteButton).append($edit))))

  // $('.wiz').append($($li2))
  console.log('hellow world');
  console.log(request.case.type);

  });
};



//////////////////////
//CREATE A REQUEST //
////////////////////
const createRequest = async (event) => {
  //Create to New Request data set from Form Data
  const newRequest = {
    name: $nameInput.val(),
    case: $caseSelect.val(),
    phone: $phoneInput.val(),
    email: $emailInput.val(),
    location: $locationInput.val(),
    description: $descriptionInput.val(),
    
  };
   console.log(newRequest);
  //Send request to api to create request
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
  $nameInput.val(''),
  $caseSelect.val(''),
  $phoneInput.val(''),
  $emailInput.val(''),
  $locationInput.val(''),
  $descriptionInput.val(''),
  getRequests()
  document.getElementById('close').click()

};

//Delete a Rat
const deleteRat = async (event) => {
  //make request to delete rat
  const response = await fetch(`${URL}/request/${event.target.id}`, {
    method: "delete"
  })

  //update the dom
  $('.row').empty();
  getRequests()
}

//Update a Rat
const updateRequest = async (event) => {
  //Logging the event object
  console.log(event)
  //Create Updated Rat Object
  const updatedRequest = {
    name: $nameInput.val(),
    case: $caseSelect.val(),
    case: $caseSelect.val(),
    phone: $phoneInput.val(),
    email: $emailInput.val(),
    location: $locationInput.val(),
    description: $descriptionInput.val(),
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

  // $nameEditInput.val('');
  $('.row').empty();
  resetForm();
  getRequests();

}

const resetForm = () => {
  $nameInput.val('')
  $caseSelect.val('')
  $caseSelect.val('')
  $phoneInput.val('')
  $emailInput.val('')
  $locationInput.val('')
  $descriptionInput.val('')
  $button.off()
  $button.on("click", createRequest)
  document.getElementById('close').click()
}


////////////////////////////////
// Main Application Logic
////////////////////////////////
// Start executing below

//Get the case for selector
getCase();
//initially get existing rats
getRequests();
//add create function to button click
$button.on('click', createRequest)
// add update function to edit submit button
$editButton.on("click", updateRequest)
