# Let's get started with "Bonik": 
Bonik is a university web project. We have tried to learn how to make and utilize an api through this project.

## **How to RUN this project:** 

We have used YARN instead of NPM as YARN installs dependency packages in parallel, whereas NPM installs them sequentially. So YARN is faster than NPM for large projects. 

## Installing 'yarn' :
For Ubuntu: 
Run the following command in your terminal: 

    sudo apt update && sudo apt upgrade

    sudo apt install curl

    curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

    sudo apt install yarn

For Windows: 

1. Download the [Yarn installation file](https://github.com/yarnpkg/yarn/releases/download/v1.22.4/yarn-1.22.4.msi) from GitHub.

2. Run the installation file and click Next to proceed.

3. Check the box to accept the license agreement and click Next to continue.

4. Select the destination where you want to install Yarn and click Next to proceed.

5. Click Install to start the installation process.

6. Once the installation is complete, click Finish to exit the installation wizard.

7. Run the following command in the PowerShell to verify the installation:
    
        yarn --version



In the project directory, you can run:


 

    yarn start

It runs bonik in the development mode.\
You can view bonik in this address: [http://localhost:3000](http://localhost:3000) in the browser.

The page will reload if there is any edits.\
If there are any lint errors then those will be viewed in the console.

    yarn test

It launches the test runner in the interactive watch mode.

    yarn build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


    yarn eject

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.


## **Other Dependencies that need to be installed to RUN the project perfectly:**
    
## Initilizing the project: 

    npm init -y 

## Installing express, mongoDB, dotenv and Nodemon

    yarn add express mongoose dotenv nodemon

## Creating index.js 


    node index.js 

## Installing Json Web Token

    yarn add jsonwebtoken

## Installing crypto-js for password security in mongoDB

    yarn add crypto-js

    sudo snap install postman


## Installing Postman for api testing: 

For Windows: 

*  Visit [this site](https://www.geeksforgeeks.org/how-to-download-and-install-postman-on-windows/) using any web browser and install the postman in your windows machine.


For Ubuntu: 
* Visit [this site](https://linuxhint.com/set-up-postman-ubuntu/) using any web browser and install the postman in your Ubuntu machine.


## Installing Redux:

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

Redux Toolkit:

    yarn add @reduxjs/toolkit

Redux Core:

    yarn add redux

Complimentary:

    npm install react-redux
    npm install --save-dev @redux-devtools/core

