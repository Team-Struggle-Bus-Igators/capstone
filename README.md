
Things you may want to cover:

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)



# Learify

## Overview

  We believe everyone who has gone through learn Academy can relate to the feelings of home fried brains! Which is what drove our team to come up with an application that can help future peers spend less time in the frying pan. With that goal in mind we created Learnify, A safe space where future, present, and past students can come to share their experiences, thoughts, and projects during each unit at Learn. This will help future students attending Learn better grasp the content for each unit and alleviate the feeling of being the only one lost in the sauce.

  ### LiveLink: [Learnify]()
  
## Features 

  - ### Homepage:
    - On our homepage the user will be greeted by a picture and with buttons below it that say Learnify youself and Learnify other. Learnify Yourself will bring you to the index page where you can view all of the users posts. Learnify Others, if signed in will allow you to post to the index and share your advice and experiences with others. Below the button is a description about why we decided to create this app. Our home page can always be accessed either in the nav bar clicking on our logo, or in the footer by clicking on the back home button.

  - ### Index:
    - On the index page you will see cards with a brief description of all of the users helpful posts with the most recent posts showing first. On the top left there is a drop down bar which will allow the user to select the specific unit that they would like information on and it will show them all of the posts relevant to that unit. The user can click on the "more info" button located on each card which will bring them to the show component presenting all the info about that post.

  - ### Protected Index (my posts):
    - can be accessed when a user is signed, located in the nav bar labeled as "my posts". Once the user clicked on the button it will bring them to a page where they can see all of the posts that have contributed to Learnify. The user can click on the more info button of each post which will bring them to the protected show page.

  - ### Show:
    - The Show page will give the user all the information that author of the post decided to share such as: topic, their name, cohort, date of post, an image related to their post, and the contents description. 

  - ### Protected Show (my posts):
    - Allows a logged in user to edit or delete an existing post that they created. By clicking on the edit button it will redirect the user to a page where they can update or change the current information that they provided. Clicking the delete button will delete their post from the application.

  - ### New Post:
    - Can only be accessed by signed in users when clicking on "new post" in the nav bar or "learnify others" on the home page. Brings the user to a page where they fill out a form with all the necessary information to create a post on the website.

  - ### About Us:
    - Accessed by clicking the "about us" button in the footer. Presents the user with a small biography about each team member and links to there LinkedIn and GitHub profiles.

## Dependecies
  
  - [React 18.2.0](https://github.com/facebook/react/blob/main/CHANGELOG.md#1820-june-14-2022)
  - [React-DOM 18.2.0](https://github.com/facebook/react/blob/main/CHANGELOG.md#1820-june-14-2022)
  - [Reactstrap 9.1.1](https://libraries.io/npm/reactstrap)
  - [Rails 7](https://rubyonrails.org/)
  - [Webpack 4.46.0](https://www.npmjs.com/package/webpack/v/4.46.0)
  - [Enzyme 3.11.0](https://enzymejs.github.io/enzyme/)
  - [Jest 28.1.3](https://jestjs.io/)

## How to run project locally
  - Clone this project locally
  - Run rails db setup
  - Install Yarn 
  - Add Bundle 

## How to run the test suite

## Deployment

1. Add the Heroku tools to your computer.
```bash
$ brew tap heroku/brew && brew install heroku
```

2. Verify your installation.
```bash
$ heroku --version
```

3. Now we can login to Heroku from the command line. Enter your email and password for your group Heroku account.
```bash
$ heroku login -i
```

4. Create a new app on Heroku. The url will be printed in the command line.
```bash
$ heroku create
```

5. Ensure that the remote git repo on Heroku was added to your local git config.
```bash
$ git config --list | grep heroku
```

6. We need to add the `master.key` that your app uses to decrypt your `credentials.yml.enc` file.  Copy the value in `/config/master.key`, and use it in the following command:
```bash
$ heroku config:set RAILS_MASTER_KEY=<your-master-key-here>
```

7. Finally, we're ready to push our code.
```bash
$ git push heroku main:main
```

8. And once that is done, we can migrate.
```bash
$ heroku run rails db:migrate
```

9. You can find your URL to paste into your browser with this command:
```bash
$ heroku apps:info
```

10. Afterwards, you can follow your logs, and navigate to your application:
```bash
$ heroku logs --tail
```
