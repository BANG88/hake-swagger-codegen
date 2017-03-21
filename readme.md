# [WIP] hake-swagger-codegen [![Build Status](https://travis-ci.org/bang88/hake-swagger-codegen.svg?branch=master)](https://travis-ci.org/bang88/hake-swagger-codegen) [![Coverage Status](https://coveralls.io/repos/github/bang88/hake-swagger-codegen/badge.svg?branch=master)](https://coveralls.io/github/bang88/hake-swagger-codegen?branch=master)

> A Swagger Codegen for Frontend projects, generate everything you need from a swagger.json file

- [x] service.ts
- [ ] route
- [ ] Component based on Antd
- [ ] docs

## Install

```
$ npm install --save hake-swagger-codegen
```


## Usage

```js
import hakeSwaggerCodegen from 'hake-swagger-codegen'

hakeSwaggerCodegen('unicorns');
//=> 'unicorns & rainbows'
```


## API

### hakeSwaggerCodegen(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global hake-swagger-codegen
```

```
$ hake-swagger-codegen --help

  Usage
    hake-swagger-codegen [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ hake-swagger-codegen
    unicorns & rainbows
    $ hake-swagger-codegen ponies
    ponies & rainbows
```


## License

MIT © [bang](https://github.com/bang88)
