// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === "APCHE2.0"){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if ( license === "BSD-3"){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if ( license === "ISC"){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === "APCHE2.0"){
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if ( license === "BSD-3"){
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if ( license === "ISC"){
    return '(https://opensource.org/licenses/ISC)';
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const icon = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  if (license !== "NONE"){
    return `This project is covered under ${icon} Information regarding this license can be found at ${link}`
  } else{
    return "No license has been chosen for this project"
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
 
## Description

  ${data.description}

  ## Table Of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Contact](#contact)

  


  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

## Tests

${data.test}

  ## Contact

  ${data.githubname}

  ${data.githublink}

  ${data.email}

`;
}

module.exports = generateMarkdown;
