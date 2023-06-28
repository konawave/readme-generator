// Function to render License badge
// If there is no license, function returns an empty string
function renderLicenseBadge(license) {
  return license !== "No license"
    ? `![License Badge](https://img.shields.io/badge/License-${license}-green)`
    : "";
}

//Function to render License link for Table of content section
// If there is no license, function returns an empty string
function renderLicenseLink(license) {
  return license !== "No license" ? "- [License](#license)" : "";
}

//Function to render License Section
//If there is no license, function returns an empty string
function renderLicenseSection(license) {
  return license !== "No license"
    ? `## License 
  License: ${license}`
    : "";
}

// function to generate markdowns for README using answers passed from the user
function generateMarkdown(data) {
  return (
    `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}
  ---
  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

To install necessary dependencies, run the following command:

` +
    "```" +
    `${data.install}` +
    "```" +
    `

## Usage
${data.usage}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
GitHub profile: [${data.username}](https://github.com/${
      data.username
    })

For questions, please email at ${data.email}

${renderLicenseSection(data.license)}

`
  );
}

module.exports = generateMarkdown;
