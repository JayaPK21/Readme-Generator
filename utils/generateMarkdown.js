// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    license,
    description,
    installation,
    usage,
    contributing,
    tests,
    emailID
  } = data;

  const markdownText = 
  `# ${title}

## Description
  
${description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License 

${license}

## Contributing

${contributing}

## Tests 

${tests}

## Questions

For further questions relating to this project and application, please contact on the following address: ${emailID}`;

  return markdownText;
}

module.exports = generateMarkdown;
