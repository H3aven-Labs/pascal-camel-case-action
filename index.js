const core = require('@actions/core');

const toCamelCase = (str, separator, start, end) => {
  return str
    .split(separator)
    .slice(start || 0, end || str.split(separator).length)
    .join(separator)
    .toLowerCase()
    .replace(new RegExp(`([${separator}][a-z])`, 'g'), group =>
      group.toUpperCase().replace(separator, ''),
    );
}

const toPascalCase = (str, separator, start, end) => {
  const parsedStr = toCamelCase(str, separator, start, end);

  return `${parsedStr.slice(0, 1).toUpperCase()}${parsedStr.slice(1)}`;
}

try {
  const inputStr = core.getInput('string');
  console.log(`Manipulating string: ${inputStr}`);

  const separatorStr = core.getInput('separator');
  console.log(`Separator: ${separatorStr}`);

  const startIndex = core.getInput('start');
  console.log(`Start index: ${startIndex}`);

  const endIndex = core.getInput('end');
  console.log(`End index: ${endIndex}`);

  const camelcase = toCamelCase(inputStr, separatorStr, startIndex, endIndex);
  console.log(`camelcase: ${camelcase}`);
  core.setOutput("camelcase", camelcase);

  const pascalcase = toPascalCase(inputStr, separatorStr, startIndex, endIndex);
  console.log(`pascalcase: ${pascalcase}`);
  core.setOutput("pascalcase", pascalcase);
} catch (error) {
  core.setFailed(error.message);
}
