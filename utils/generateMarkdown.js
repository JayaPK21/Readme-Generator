// function to generate markdown for README
function generateMarkdown(data) {
  let badgeLink = '';
  let licenseLink = '';
  const {
    title,
    license,
    description,
    installation,
    usage,
    contributing,
    tests,
    emailID,
    githubUserName
  } = data;

  switch (license) {
    case 'MIT':
      
      badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseLink = "(https://opensource.org/licenses/MIT)";
      break;
  
    case 'Apache 2.0 License':

      badgeLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
      break;

    case 'Boost Software License 1.0':

      badgeLink = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)";
      break;

    case 'IBM Public License Version 1.0':

      badgeLink = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      licenseLink = "(https://opensource.org/licenses/IPL-1.0)";
      break;

    case 'ISC':

      badgeLink = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      licenseLink = "(https://opensource.org/licenses/ISC)";
      break;  

    default:
      break;
  }

  const markdownText = 
  `# ${title}

${badgeLink}

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

This project is covered under the [${license}]${licenseLink} licensce. Please follow the link to get a detailed information about the license.

## Contributing

${contributing}

## Tests 

${tests}

## Questions

For further questions relating to this project and application, please contact on the following address: ${emailID}

Visit my [GitHub](https://github.com/${githubUserName}) for other exciting projects!`;

  return markdownText;
}

module.exports = generateMarkdown;
