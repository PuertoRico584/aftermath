# Aftermath - A multimedia project of the UNC School of Media and Journalism
From Cuba's News Wave - Node App written by Lindsay Carbonell & Kate Boyd
This App is perfect for longform multimedia projects.

## Installation

1. Install these dependencies if you don't already have them:
  - [Git](https://sourceforge.net/projects/git-osx-installer/)
  - [NodeJS](https://nodejs.org/en/download/)
  - Gulp CLI
    - to install, run ``npm install -g gulp-cli`` AFTER you install NodeJS

2. Open terminal and `cd` into the folder of your choosing. For instance, if you start at root (~), to get to your Desktop, you would run:
  `cd Desktop`
  Or for your Documents folder, just replace `Desktop` with `Documents`.

3. Clone this repository by running:

  `git clone https://github.com/PuertoRico584/aftermath`

  And then cd into that folder:

  `cd aftermath`

4. Install the NodeJS packages by running:

  `npm install`

You are now set up to run the project locally, and unless you delete this folder on your computer, you won't have to follow these instructions again. If you want to set up your computer to also be able to use the Google Docs implementation, read on:

5. Retrieve a client_secret.json file from the Slack (you'll have to change the file extension to .json when you download it) to put in your directory.

6. Log in to your gmail account in your browser.

7. Run:

  ``node parse.js``

  And follow the instructions.

## Running the site locally

1. In the main-site directory, run:

  `gulp`
  
  This command will automatically run the local server and compile your Sass as you save your .scss files. Note that you will have to refresh your browser after your save your files to see your changes.

2. Open the browser of your choice and navigate to:

  `localhost:8080`

## Updating Articles

1. In the main-site directory, run:
  `node parse.js`

2. Add, commit and push the new JSON files:

  `git add data/`

  `git commit -m "updated articles"`

  `git push origin master`
  
## Updating Navigation Labels

- In the gulpfile and in index.js, change the arrays at the top of the file to the proper titles in English and Spanish.

## Adding new inner pages

1. Create a new Google Doc for the page content and make sure it's shared publicly. Then go to File -> Publish to the web... and click the "Publish" button

2. Copy the doc id from the doc URL, between /d/ and /edit. (ex: "1K1u7fOcFDjG3hpQ7J89BO-m23ihIpZJYM-cU5_ztwi0")

3. On line 11 of parse.js, add a new key value pair to fileIds for your document.

4. On line 9 of index.js, add the key from step 3.

5. Follow the "Updating Articles" instructions.

## Editing CSS and running Sass

Sass (.scss) files are stored in the sass/ directory. Compiled CSS is in the public/stylesheets/ directory.
The .scss files will compile into CSS files with matching names, so to create a new CSS file, just create a new .scss in the sass/ directory and run one of the compiling scripts from below.

To compile all the files from the sass/ directory, run:
  `gulp sass`

## Media Queries

We're setting breakpoints in `_include-media.scss` on line 34-40. Global breakpoints will make sure that breakpoints are consistent across the site. If there's a special case where you need to make a manual breakpoint, you can add it to the $breakpoints list. Make a media query like this: 

` @include media("screen", "<=sm"){} `

More documentation for `_include-media.scss` can be found on [their website](http://include-media.com/).
  
## Retrieving site assets

Assets are on the master branch. If you need to change assets from the Drive, just push up to master when you're done.

### Site asset locations and naming conventions
  - **Cinemagraphs** 
    - Drive: FOR WEBSITE > Video. Naming conventions are detailed in that folder. File names (without full path) and attributions are referenced in the Google Doc for that page in the cinemagraph template item.
    - Site: Public > Assets > Video. Rename the cinemagraph to be _slug.mp4_ (ex: _dorian.mp4_). Path is in article.ejs.
 - **Feature Video**
   - Drive: Story template will reference the id of the Vimeo video.
   - Site: Vimeo embed code in article.ejs.
 - **Images**
   - Drive: FOR WEBSITE > Images. Naming conventions are detailed in that folder and are separated by inline or slideshow. Photogs write their photo page templates in the instructions doc to be put into the main story doc.
   - Site: Public > Assets > Images. Paths will need to be put into article.ejs.
 - **Slider Images**
    - Drive: FOR WEBSITE > Stories (text). The placement of the slider within the page is determined by placing an empty slider object into the document (ex: {.slider}{}  ). The slider images and their metadata is written at the bottom of each document in a section called [slider-images]. Each photo's data must be written with the src as the first piece of information. 
   - Site: Public > Assets > Images > Photo-Gallery > {story slug}. Path is in article.ejs
 - **360 Video**
   - TBD
 - **Story text**
   - Drive: FOR WEBSITE > Stories (text). Instructions for reporters in that folder. Spanish version instructions TBD.
   - Site: All styling in main.scss and article.ejs.
  
## Notes for the developers
- Remember that you can add specific files to the tree! Do not `git add -A` unless you're sure that you didn't change anything on your branch that will conflict with someone else's branch.
- Make it a habit to run `git status` before you commit to see peruse the changes you've made and make sure you're not committing something you don't want to.
- If you push to the `master` branch, **you will be deploying those changes to the site**, so do not push to this branch unless you know it's ready for deployment!

## Dependencies

- This site was build up from the [tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs) for how to get started with NodeJS and Heroku. You can find the example code [here](https://github.com/heroku/node-js-getting-started).

- We are using Google Docs to pull in article content, through an [ArchieML](http://archieml.org/) [boilerplate by stuartathompson](https://github.com/stuartathompson/node-archieml-boilerplate).

- We are also using [node-sass](https://github.com/sass/node-sass), a library that integrates node with LibSass.

- We are using [Gulp](http://gulpjs.com/) for automating development actions.
