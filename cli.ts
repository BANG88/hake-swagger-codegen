// #!/usr/bin/env node
// 'use strict'
// const meow = require('meow')
// import codegen from './index'
// import * as fs from 'fs';

// const cli = meow(`
// 	Usage
// 	  $ hake-swagger-codegen [input]

// 	Options
// 	  --foo  Lorem ipsum [Default: false]

// 	Examples
// 	  $ hake-swagger-codegen
// 	  unicorns & rainbows
// 	  $ hake-swagger-codegen ponies
// 	  ponies & rainbows
// `)
// const file = cli.flags.input || 'swagger.json'
// let swagger = fs.readFileSync(file, 'UTF-8')

// if (swagger) {
// 	swagger = JSON.parse(swagger)
// }
// const ts = codegen.getTypescriptCode({
// 	swagger
// })
// fs.writeFileSync('api.ts', ts)
// // console.log(hakeSwaggerCodegen(cli.input[0] || 'unicorns'))
