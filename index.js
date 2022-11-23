//import necessary classes/functions

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const html = require("./src/html_template");


const write_file_async = util.promisify(fs.writeFile);
const append_file_async = util.promisify(fs.appendFile);


console.log(Manager.title);

let team_array =[];
let team_string='';

async function prompt() {
    let stop_questions ="";

    do {
        try {

            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is employee's name?",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter employee's ID: ",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter employee's email address: ",
                    // validation using email-validator
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is the employee's role: ",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);
            let response2 = ""

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is the employee's github username?: ",
                    validate: function validateName(name) {
                        return name !== "";
                    },
                },]);

                // add to team Arr
                const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                team_array.push(engineer);

            } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What is the employee's office number?: ",
                    validate: function validateName(name) {
                        return name !== "";
                    },
                },]);

                // add to team Arr
                const manager = new Manager(response.name, response.id, response.email, response2.x);
                team_array.push(manager);

            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "What school is employee attending: ",
                    validate: function validateName(name) {
                        return name !== "";
                    },
                },]);

                // add to team Arr
                const intern = new Intern(response.name, response.id, response.email, response2.x);
                team_array.push(intern);
            }

        }
        catch (err) {
            return console.log(err);
        }
        stop_questions = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you want to continue?: ",
            choices: [
                "Yes",
                "No"
            ]
        },]);
    } while (stop_questions.finish === "Yes");



}

async function main() {
    try {
        await prompt()

        for (let i = 0; i < team_array.length; i++) {
            team_string = team_string + html.generate_card(team_array[i]);

        }

        let final_html = html.generate_html(team_string)

        console.clear();
        console.log("---------------------------------------------");
        console.log("Generating index.html file....");
        console.log("---------------------------------------------");

        write_file_async("./dist/index.html", final_html);

        console.clear();
        console.log("---------------------------------------------");
        console.log("index.html file created successfully");
        console.log("---------------------------------------------");

    } catch (err) {
        return console.log(err);
    }
}

// initial program
main();



