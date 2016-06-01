# IoT Joystick!

This simple setup will get you driving your IoT items from miles away in no time!

## Requirements

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Setup

1. open up [`/public/index.html`](https://github.com/camilo86/IoT-joystick/blob/master/public/index.html#L52-L56) and fill out the `config` object with all of your [Firebase](http://firebase.google.com) credentials. If you do not have any credentials, create a project at [Firebase](http://firebase.google.com) and follow the setup guide (It will give you your credentials)
2. Open up terminal (or Command Prompt), and `cd` insdie the IoT-joystick folder
3. Once you are inside the project, run `npm install`
4. Open your Firebase project and add two childs:
  - joystick_x
  - joystick_y
5. Run `node app.js` and profit

At this point you should be able to click and drag anywhere on the screen to move the joystick. If you look at your firebase database, you will notice that both of your childs (joystick_x and joystick_y) are updating live. Use the firebase api to access this database from some other device to put the joystick into some good use!
