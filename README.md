# (Pascal|camel)Case GitHub Action

This action accepts any string, and outputs three different versions of that string:

- camelcase (`hello_world` -> `helloWorld`)
- pascalcase (`hello_world` -> `HelloWorld`)

You can access the outputted strings through the job outputs context. See docs [here](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjobs_idoutputs)

## Inputs

### `string`

**Required** The string you want manipulated

### `separator`

**Required** String separator

### `start`

**Optional** Start index (default 0)

### `end`

**Optional** End index

## Outputs

### `pascalcase`

`inputStr.toPascalCase()`

Example: `hello_world` -> `HelloWorld`

### `camelcase`

`inputStr.toCamelCase()`

Example: `hello-world` -> `helloWorld`

## Example Usage

```yaml
name: SomeWorkflow

on: [push]

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - id: string
        uses: H3aven-Labs/pascal-camel-case-action@v1.0
        with:
          string: test-hello-world
          separator: "-"
          start: 1

      - id: step2
        run: echo ${{ steps.string.outputs.camelcase }}

      - id: step3
        run: echo ${{ steps.string.outputs.pascalcase }}

```

This project is based on https://github.com/ASzc/change-string-case-action
