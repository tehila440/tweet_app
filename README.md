# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## React Project 2 - Micro Blog

#### Milestone 1 - Mock up

Figma design (first line of screens):
https://www.figma.com/file/KQsukwnsiYo01g7Id1m11Q/ITC-Micro-blogging-Project?node-
id=0%3A1
Features:

- Main screen with two parts: create tweet, and tweets list
- Create tweet should block the tweet creation if there are more than 140 chars (need
  to make the button disabled)
- The tweets should be saved locally, so if I refresh the page they won’t be deleted
- the tweet list should be sorted in descending order, the latest tweet should appear
  first (the order should remain after refreshing the page)
- The username should be saved hard-coded for now (so you will be able to add it to
  each tweet you create)

#### Milestone 2 - Server connection

Features:

- Move the local app data (for keeping the data between each refresh), to a server:
  https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/
- The server has one resource exposed: “/tweet”, make requests to presenting the list
  of tweets, and to create a new tweet
- The tweet object is as follows: { content: string, userName: string, date: string (ISO
  date) }
- Save the tweet to the server on tweet post, and show the list of tweets from the
  server
- Show loading indicator, and prevent from adding a new tweet when adding
  request is in the background
- Do not forget to remove the code from the first milestone that saves the data
  locally, you don’t want to have them both
- Display server errors to the user if the tweet is not added

#### Milestone 3 - User page

Features:

- Add another page that presents the current user username (which should be hard
  coded until now), and has a form to change the username.
- You should save the new username locally whenever changed, and send it to the
  server when creating a new tweet.
- Add a navbar to the top of the screen that keeps its position no matter which page
  you are at, with “Home” and “Profile” links.
- The design is in the second line of screen in figma:
  https://www.figma.com/file/KQsukwnsiYo01g7Id1m11Q/ITC-Micro-blogging-
  Project?node-id=0%3A1

#### Milestone 4 - Context

Features:

- Instead of using state and props, use context for the tweets list and creating new
  tweet
- When creating new tweet, do not refresh the list, but add the tweet to the existing
  local list

- Instead set an interval that gets updates from the server of tweets, in
  case someone else added a tweet (to keep the list updated)
