const fs = require('fs');
const inquirer = require('inquirer');

const licenseBadges = {
    "MIT License": {
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        link: "https://opensource.org/licenses/MIT"
    },
    "GNU GPLv3": {
        badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        link: "https://www.gnu.org/licenses/gpl-3.0"
    },
    "Apache License 2.0": {
        badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        link: "https://opensource.org/licenses/Apache-2.0"
    },
    "BSD 3-Clause License": {
        badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        link: "https://opensource.org/licenses/BSD-3-Clause"
    }
};

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
    {
        type: 'input',
        name: 'installation',
        message: 'Write some Installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give an example of its usage:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write testing instructions:',
    },
    {
        type: 'list',
        name: 'licence',
        message: 'Choose a licence:',
        choices: Object.keys(licenseBadges),
    },
    {
        type: 'input',
        name: 'github',
        message: 'Add your github username so users can contact you with questions:',
    },
    {
        type: 'email',
        name: 'email',
        message: 'Add your email so users can contact you with questions:',
    },
];

inquirer.prompt(questions).then((answers) => {
    const {title, description, installation, usage, contribution, tests, licence, github, email} = answers;
    const readme = (
`# ${title}
${licenseBadges[licence].badge}

${description}

## Table of contents

1) [Installation](#installation)
2) [Usage](#usage)
3) [Contributing](#contributing)
4) [Tests](#tests)
5) [Licence](#licence)
6) [FAQ](#faq)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${tests}

## Licence
This project is licenced under ${licence}

## FAQ
If you have any questions contact me on:

Github - [${github}](https://github.com/${github.toLowerCase()})

Email - [${email}](mailto:${email})
`)

    fs.writeFileSync('YOUR-README.md', readme);

    console.log("YOUR-README.md has been created");
});
