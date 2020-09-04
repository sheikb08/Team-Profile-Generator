module.exports = {

    manager: [
        {
            type: "input",
            name: "managerName",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "managerID",
            message: "What is your Manager ID number?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your Manager email?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your office number?",
        },
       
    ],

    employeeChoice: [
        {
            type: "list",
            name: "employeeChoice",
            message: "What role would you like to add to your team?",
            choices: [
                "Engineer",
                "Intern",
                "Done",
            ],
        },
    ],
    engineer: [
        {
            type: "input",
            name: "engineerName",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is your ID number?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your github alias?",
        },
       
    ],

    intern: [
        {
            type: "input",
            name: "internName",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "internID",
            message: "What is your Intern ID number?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of the school that you are attending?",
        },
       
    ],

};