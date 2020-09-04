const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const prompts = require("./prompts");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


let teamArray = [];

async function init() {
    try {
        const managerAnswers = await inquirer.prompt(prompts.manager);

        const manager = new Manager(
            managerAnswers.managerName,
            managerAnswers.managerID,
            managerAnswers.managerEmail,
            managerAnswers.managerOfficeNumber,
        )
        teamArray.push(manager);
        addMember();
    } catch (err) {
        console.log("Unable to store manager details.")
    }
}

init();

async function addMember() {

    const choice = await inquirer.prompt(prompts.employeeChoice);

    switch (choice.employeeChoice) {
        case "Engineer":
            await addEngineer();
            break;
        case "Intern":
            await addIntern();
            break;
        default:
            buildTeam();
    }
}

async function addEngineer() {
    try {
        const engineerAnswers = await inquirer.prompt(prompts.engineer);

        const engineer = new Engineer(
            engineerAnswers.engineerName,
            engineerAnswers.engineerID,
            engineerAnswers.engineerEmail,
            engineerAnswers.github,
        )
        teamArray.push(engineer);
        addMember();
    } catch (err) {
        console.log("Unable to store engineer details.")
    }
}

async function addIntern() {
    try {
        const internAnswers = await inquirer.prompt(prompts.intern);

        const intern = new Intern(
            internAnswers.internName,
            internAnswers.internID,
            internAnswers.internEmail,
            internAnswers.school,
        )
        teamArray.push(intern);
        addMember();
    } catch (err) {
        console.log("Unable to store intern details.")
    }
}

function buildTeam() {
        const renderHTML = render(teamArray);
        writeToFile(renderHTML);
}

function writeToFile(renderHTML) {

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
        console.log("Your output folder is ready.")
    }
    fs.writeFile("./output/team.html", renderHTML, function (err) {
        if (err) {
            throw err;
        }
        console.log("Your team display is ready!");
    });
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
