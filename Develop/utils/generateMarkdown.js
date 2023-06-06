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
    `# ${data.project_title} 
  ${renderLicenseBadge(data.project_license)}

  ## Description 
  ${data.project_description}
  ---
  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.project_license)}

## Installation

To install necessary dependencies, run the following command:

` +
    "```" +
    `${data.project_install}` +
    "```" +
    `

## Usage
${data.project_usage}

## Contributing
${data.project_contribution}

## Tests
${data.project_test}

## Questions
GitHub profile: [${data.owner_username}](https://github.com/${
      data.owner_username
    })

For questions, please email at ${data.owner_email}

${renderLicenseSection(data.project_license)}

`
  );
}

module.exports = generateMarkdown;
