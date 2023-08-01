# tcc_automation_challenge

# Project README

## Environment Setup

Before running the Cypress project, please make sure you have the following software installed:

1. Node.js - You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)
2. Visual Studio Code (VS Code) - You can download and install VS Code from the official website: [https://code.visualstudio.com](https://code.visualstudio.com)
3. Git Bash - You can download and install Git Bash from the official website: [https://gitforwindows.org](https://gitforwindows.org)
4. Google Chrome - You can download and install Google Chrome from the official website: [https://www.google.com/chrome](https://www.google.com/chrome)

Please ensure that the above software is properly installed and configured on your system before proceeding.


## Cloning the repo

To clone the repository, follow these steps
1. Open a terminal or command prompt.
2. Navigate to the project directory using the `cd` command.
3.  Execute the following command:
   ```bash
   git clone https://github.com/paulbt94/tcc_automation_challenge.git
   ```

## Project setup and running Cypress Tests

To set up the project and run Cypress tests, follow these steps:

1. Open the Visual Studio Code application.
2. From VSCode open the folder that contains the project.
3. Open a terminal and make sure it's pointing to the project directory.
4. Switch from the main to the master branch.
5. Initialize a new Node.js project by running the following command:
   ```bash
   npm init -y
   ```
6. Install Cypress as a development dependency by running the following command:
   ```bash
   npm install cypress --save-dev
   ```
7. Execute the following command to run the test directly on Chrome:
   ```bash
   npm run testOnChrome
   ```

That's it! You should now be able to see Cypress executing the test on Chrome and the results are displayed on the terminal.
