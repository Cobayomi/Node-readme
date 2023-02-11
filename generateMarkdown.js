const generateMarkdown = (data) => {
    console.log(data)
    return``
}   
function renderLicenseBadge(license) {
    if (license != "unlicense") {
        return `![license](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
      }
}
function renderLicenseLink(license) {
    if (license != "unlicense") {
        return `(https://opensource.org/licenses/${license})`;
      }
}
function renderLicenseSection(license) {}
function generateMarkdown(data) {
return`# ${data.title} 
    ${renderLicenseBadge(data.license)}
`};

module.exports = generateMarkdown;