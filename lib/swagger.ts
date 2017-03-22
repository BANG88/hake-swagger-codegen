// tslint:disable-next-line:variable-name
var Handlebars = require('handlebars')
require('handlebars-helpers')({
	handlebars: Handlebars
})
// var beautify = require('js-beautify').js_beautify
// var lint = require('jshint').JSHINT
import * as _ from 'lodash'

import * as fs from 'fs'

/**
 * parse Swagger to json object
 * @param swaggerFile path to swagger.json
 */
export const parseSwagger = (swaggerFile: string) => {
	const swagger = fs.readFileSync(swaggerFile, 'UTF-8')
	return JSON.parse(swagger)
}

/**
 * get swagger we will use it later
 */
export const getSwagger = (swaggerFile = 'swagger.json', array = true) => {

	const json = parseSwagger(swaggerFile)

	let pathsGroup = _.groupBy(json.paths, p => {
		for (var key in p) {
			if (p.hasOwnProperty(key)) {
				var element = p[key]
				return element.tags[0]
			}
		}
	})

	const result = _.map<{}, any>(pathsGroup, (pg, key) => {
		const methods = _.map(pg, p => {
			_.each(p, (method, verb) => {
				const res = method.responses[200]
				if (res && res.schema) {
					const schema = res.schema.$ref.split('/')
					const definition = json.definitions[schema.length === 1 ? schema[0] : schema[2]]
					method.definition = definition
				}
				method.verb = verb
				method.tag = method.tags[0]
				p = method
			})

			return p
		})
		return array ? { key, methods } : pg
	})
	return result
}
