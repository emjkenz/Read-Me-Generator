const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Whats the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your product:',
    },
];


inquirer.prompt(questions).then((answers) => {
    const readme = (
`# ${answers.title}

${answers.description}`)

    fs.writeFileSync('YOUR-README.md', readme);
});
