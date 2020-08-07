

# Project 2

## Lifeline mutual aid network app - FRONTEND - Project 2 General Assembly

(https://lifeline-responsenetwork.netlify.app)

Magdalena Krzyzanowski

# Project Overview

## Project Schedule

This schedule will be used to keep track of progress throughout the week and align with expectations.  

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / backend and frontend | Complete
|Day 2| Link to Custom Domain / Early test of deployment and Collection of Typeface Google Fonts and Website Assets + Data Modeling | Complete
|Day 3| Working RestAPI | Complete
|Day 4| Core Application Structure (HTML, CSS, etc.)| Complete
|Day 5| MVP | Complete
|Day 6| Present | Incomplete



## Project Description

For our second General Assembly project, we are creating RESTful CRUD applications that have the ability to let a user create, read, update and delete data in an application. I am planning to create a an application that will serve a mutual aid network by creating a request system, that functionally works like an alert board. This app aims to bridge the connection between mutual aid volunteers and those in need of assistance by allowing an alternative to disenfranchising carceral agents to respond to alerts concerning emergencies, suspected drug overdoses, mental health crises and requests for other help in the form of resources. For the minimum viable product within the timeframe allotted for this project, the app will include the ability for users to view post, edit and delete various types of alerts, as well as browse links to resources for both users and volunteers. For the post-MVP, the app will have the ability to create verified and unverified volunteer profiles and potentially a forum where these profiles could interact and share information. 

## Google Sheet

(https://docs.google.com/spreadsheets/d/1DRhpnHYU-LVnRYKSALXm_xbMCZ3FsTs6Zl-VJ1MU49E/edit#gid=0) 

## User Stories

As a user of this app, I can either be requesting assistance or responding to requests. 

If users are witnessing an emergency, suspected overdose, a mental health crisis, need to connect someone with resources or experiencing any of these circumstances as the user, users could submit a request that will be immediately posted to the alert board. 

Users can provide optional contact or location information as well as a description depending on the situation and its urgency. 

After submitting requests,  requests will display as alerts on the app in sequential order and will have the functionality of being updated and deleted once posted. 

Users who are responding to requests can view the alerts posted and choose to respond and act in assistance based on the information provided.

Visitors to the site may also access a menu that will provide links to external organizations providing various resources and training.

In the post-MVP application, users would be able to register profiles as unverified or verified volunteers and have access to a forum. Also could implement functionality that marks request as pending or indicates that someone is on the way and tending to the situation and other volunteers could contact others who are assisting the request and join.

## Related Apps

https://www.pulsepoint.org/ (Volunteer-based response network)
https://www.mutualaidhub.org/ (Location-oriented database of mutual aid groups)


## Wireframes

- [Mobile, Tablet, Desktop](https://res.cloudinary.com/dinqukx6a/image/upload/v1596217007/Project%202/Wireframes/WIREFRAMES_qcnzja.jpg)



## Time/Priority Matrix 

[Time and Priority Matrix](https://res.cloudinary.com/dinqukx6a/image/upload/v1596217042/Project%202/TPM/TPM-FRONTEND_lamayw.jpg)



### MVP

- Drop Down Menu with Links
- Site Title Section and Tagline
- Desktop Menu
- Hero Text Intro Section / Site Description
- Request Assistance Button
- Drop Down User Post Form
- Alert Cards Section
- Individual Alert Cards with Update and Delete Functionality
- Hamburger
- Responsive
- Backend Connection & jQuery



### PostMVP 

- Color-Coded Alerts
- Volunteer Profile Design
- Volunteers Page
- Forum Design

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Writing HTML and Basic CSS structure | H | 3hr | 3hr | 4 hr|
| Drop Down Menu with Links | M | 1hr | 1.5hr | 1.75 hr|
| Site Title Section and Tagline | M | 1 hr | 1.5 hr | .25 hr|
| Desktop Menu | M | 1 hr | 1 hr | .25 hr|
| Hero Text Intro Section / Site Description | L | 45 min | 1 hr | 0.25 hr|
| Request Assistance Button | H | 1 hr | 1.5hr | .25 hr|
| Drop Down User Post Form | H | 3hr | 3hr | 3 hr|
| Alert Cards Section | M | 1hr | 1.5hr | .50 hr|
| Individual Alert Cards with Update and Delete Functionality | H | 3hr| 3.5hr | 5 hr|
| Hamburger | L | 1 hr  | 1.5 hr | .25 hr|
| Responsive | M | 3 hr | 3.5hr | .25 hr|
| Deployment(Domain Mapping, Netlify, Heroku, Troubleshooting, testing) | H | 5hr | 6.5hr | 4.5 hr|
| Research (Planning, Referencing libraries, codes, and writing pseudocode) | H | 8hr | 9hr | 6hr|
| Backend Connection & jQuery | H | 6hr | 7 hr | 3 hr|
| Total | H | 39.5 hrs| 3 hrs | 28.75 hr|

#### PostMVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Color-Coded Alerts | H | 3hr | 3.5hr | .75 hr |
| Volunteer Profile Design | M | 16 hr | 1.5hr | 0 hr |
| Volunteers Page | M | 10 hr | 1.5hr | 0 hr |
| Forum Design | M | 40 hr | 45 hr | 0 hr |
| Footer | L | 1hr | 1.5hr | 0 hr |
| Total | H | 70 hrs| 76 hrs | .75 hr |

## Additional Libraries

Various Front-End Elements created with 

jQuery
(https://jquery.com/)

BOOTSTRAP CDN
(https://getbootstrap.com/)

Responsive Bootstrap Cards
(https://mdbootstrap.com/snippets/jquery/marta-szymanska/1349788)

Collapsible Card Content
(https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_collapsible&stacked=h)


## Code Snippet

The following code snippet is a if/else statement block that assigns a different color to a badge that is assigned to and describes each incident and invidual request in order to provide color classification and easier identification when using the app. Special thanks to Professor Suresh Sigera for assistance with this code block.

```
  //CODE Block to assign color tag to each Badge indicating Incident Type
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

```  



## Issues and Resolutions

I had a few minor issues when working with jQuery and front-end development.

The first issue that had occurred was when I was attempting to use the same modal form to act as both the mechanism to create requests and to edit them as well. 


```
      //add an EDIT button for each request
      const $edit = $("<button>").addClass("btn btn-dark btn-sm ml-4").text("Edit Post").on("click", (event) => {
        
        $edit.attr('href', "").attr('data-toggle',"modal").attr("data-target", "#modalContactForm")
        
        $nameInput.val(request.name)
        $caseSelect.val(request.case._id)
        $phoneInput.val(request.phone),
        $emailInput.val(request.email),
        $locationInput.val(request.location),
        $descriptionInput.val(request.description),
        $button.text("Save Changes")
        $button.attr("id",request._id)
        $button.off()
        $button.on("click", updateRequest)
      })
```

In order to use the same form, I created a function to target the drop-down modal form and reassign the functionality of the buttons:

```
  const $edit = $("<button>").addClass("btn btn-dark btn-sm ml-4").text("Edit Post").on("click", (event) => {
        
        $edit.attr('href', "").attr('data-toggle',"modal").attr("data-target", "#modalContactForm") 


        ....

```
 I was encountering an issue where the existing buttons on the modal forms was triggering the createRequest function in my code, when I wanted it to trigger the updateRequest function instead. In addition to triggering the modal form by reassigning attributes, I had to additionally change the use the existing button and its functionality with a few helper functions to help redirect it to be targeting the updateRequest function as desired:

 ```
        . 
        .
        .
        .
        $button.text("Save Changes")
        $button.attr("id",request._id)
        $button.off()
        $button.on("click", updateRequest)
      })

```

Another issue that came up was when I was applying bootstrap collapse functinality to my alert cards. I wanted the UI to be such that the alert cards would appear in the same uniform width and height on the page with room accounted for longer addresses provided in the location title by users. I wanted the descriptive requests and contact information to not be immediately visible to the user so people could choose which alert cards to show more information about. The badges at the top of the cards give the user an idea of what the incident is and this serves as both a way to provide a content-warning and to not display cards in various sizes all at once, disrupting a uniformity in design. When I implemented the bootstrap, the collapse function was targeting each cards at the same time because it was targeting a shared ID of the targeted element. My professor Alex Merced advised to use a method called 'interpolation' that would assign unique classes to each card I was targeting. What this does is attach the first half of the ID and appends a string interpolation of each request's ID so that each collapse target would function individually.

```
   const $collapseDivButton = $('<button>').addClass("btn btn-secondary btn-sm").attr("data-toggle","collapse").attr("data-target",`#collapse${request._id}`).text('Show Details')
      const $collapseDiv = $('<div>').addClass("collapse").attr("id", `collapse${request._id}`)

```