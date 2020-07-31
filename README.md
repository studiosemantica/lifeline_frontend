

# Project 2

## Lifeline mutual aid network app - FRONTEND - Project 2 General Assembly

[]

Magdalena Krzyzanowski

# Project Overview

## Project Schedule

This schedule will be used to keep track of progress throughout the week and align with expectations.  

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Link to Custom Domain / Early test of deployment and Collection of Typeface Google Fonts and Website Assets | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| Contact Form and Drop Down Menu Working | Complete
|Day 5| MVP | Complete
|Day 6| Present | Complete


## Project Description

For our first General Assembly project, we are creating portfolio websites to showcase our work. I want to have a minimal and clean design, that accentuates flow and design trends. I want to create sections that will describe the disciplines I specialize in addition to showcasing my projects. I hope to additionally incorporate a technical skills section that will detail my knowledge of tech tools beyond the project requirements.

## Google Sheet

(https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0) 

## Wireframes

- [Mobile](https://res.cloudinary.com/dinqukx6a/image/upload/v1594621147/Portfolio%20Project/Mobile_x8e5f4.png)
- [Tablet](https://res.cloudinary.com/dinqukx6a/image/upload/v1594621147/Portfolio%20Project/Tablet_h5sjgb.png)
- [Desktop](https://res.cloudinary.com/dinqukx6a/image/upload/v1594621147/Portfolio%20Project/Desktop_j5nkkh.png)


## Time/Priority Matrix 

[Time and Priority Matrix](https://res.cloudinary.com/dinqukx6a/image/upload/v1594644452/Portfolio%20Project/Time-Complexity-Graph/IMG-0557_hoeaiy.jpg)



### MVP

- Drop Down Menu
- Title Section
- Desktop Menu Icon
- Hero Text Intro Section
- About Me Section
- Project Previews
- Project Titles
- Adding Contact Form
- Pull data with API
- 5 Project Features Grid
- Git / Demo Buttons
- Hamburger
- Responsive
- Specialties Card Grid
- Specialties Cards
- Footer
- Social Media Icons

### PostMVP 

- Technical Skills Section + Cards
- Resume Button
- Animated Site Title
- Make Select Sections have Diagonal Dividers
- Animated Section Backgrounds


## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Writing HTML and Basic CSS structure | H | 3hr | 3.5hr | 2hr|
| Drop Down Menu | H | 1hr | 1.5hr | 1.10 hr|
| Title Section | H | 20 min | 30 min | .5hr|
| Desktop Menu Icon | H | 20 min | 30 min | .5hr|
| Hero Text Intro Section | H | 30 min | 45 min | .25hr|
| About Me Section | H | 1hr | 1.5hr | 2hr|
| Project Previews | H | 2.5hr | 3hr | 2.5hr|
| Project Titles | H | 1hr | 1.5hr | .5hr|
| Adding Contact Form | H | 2hr| 2.5hr | 3 hr |
| Working with API | H | 3hrs| 2hr | 1hr |
| 5 Project Features Grid | H | 1hr | 1.5hr | 2.75 hr|
| Git / Demo Buttons | H | 1hr | 1.5hr | 2.5hr|
| Hamburger | H | 45 min | 1 hr | .25 hr|
| Responsive | H | 3hr | 3.5hr | 6 hr|
| Deployment(Domain Mapping, Troubleshooting, testing) | H | 6hr | 6.5hr | 4 hr|
| Research (Referencing libraries, codes, and writing pseudocode) | H | 10hr | 10hr | 5 hr|
| Specialty Cards | L | 1hr | 1.5hr | 1.5hr|
| Design Specialty Card Grid | L | 1hr | 1.5hr | 1hr|
| Footer | L | 1hr | 1.5hr | 2hr|
| Social Media Icons | L | 1hr | -hr | 3hr|
| Total | H | 39.5 hrs| 48.25 hrs | 41.35 hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Technical Skills Section + Cards | H | 3hr | 3.5hr | 3.5hr|
| Animated Site Title | M | 1hr | 1.5hr | -hr|
| Animated Drop Down Menu | M | 1hr | 1.5hr | .75hr|
| Make Select Sections have Diagonal Dividers | M | 2hr | 2.5hr | 2hr|
| Animated Section Backgrounds | L | 2hr | 2.5hr | -hr|
| Resume Button | L | 1hr | 1.5hr | -hr|
| Total | H | 9hrs| 11.5hrs | 6.25hrs |

## Additional Libraries
The following resources/Libraries were referenced in order to create the listed elements.

DROP DOWN MENU:
https://ga-students.slack.com/archives/G017CL81YD7/p1594663469010400

HOW TO STYLE GOOGLE FORMS:
https://blog.webjeda.com/google-form-customize/

//I researched the topic below as it allowed for me to experiment with running certain jQuery functions depending on screen size / media queries that were checked in Javascript. 
HOW TO USE MEDIA QUERIES IN JAVASCRIPT:
https://stackoverflow.com/questions/31511001/is-there-a-javascript-equivalent-to-using-media-query

SLOPED EDGE DIV ELEMENT WITH CONSISTENT ANGLES:
https://kilianvalkhof.com/2017/design/sloped-edges-with-consistent-angle-in-css/


ICONS:

FONTAWESOME V.4 & V.5

Icon8

FONTS:

-Google Fonts



## Code Snippet

For the follow piece of code, I created a function that performed the logic of applying particular template style to each Project JSON object I was pulling in, separating the first in the list to always display in an enlarged feature format when in Desktop view and the rest to display in a flex grid underneath the main project preview. 

```
    // for desktop view: for each project in the array
    projects.forEach((project,index) => {
        //if the project in the array is the first one (Index 0) 
        // then append the project to the template I have made for the big feature Project
        if (index === 0) {
        const $bigFeatureDiv = featuredProjectDiv(project)
        $('#feature').append($bigFeatureDiv)
        }

        //if the project is in the rest of the array
        // then append the project to the grid template I have made for the rest of the features
        else {
        const $projectDiv = createProjectElement(project)
        $('#desktop').append($projectDiv)
        }
    })
```

## Issues and Resolutions

 This section will list of all major issues encountered and their resolution.