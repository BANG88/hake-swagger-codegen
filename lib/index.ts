// tslint:disable-next-line:variable-name
var Handlebars = require('handlebars')
require('handlebars-helpers')({
	handlebars: Handlebars
})
import * as fs from 'fs'

import { getSwagger } from './swagger'

/**
 * templates base path
 */
const basePath = __dirname + '/../templates/'

/**
 * render a single route
 * @param param0
 */
export const renderService = ({ key, methods }) => Handlebars.compile(fs.readFileSync(basePath + 'service.mustache', 'utf-8'))({
	data: {
		key,
		methods
	}
})
/**
 * mkdir route path
 * @param routePath route path
 * @returns {string}
 */
export const mkdir = routePath => {
	if (!fs.existsSync('routes')) {
		fs.mkdirSync('routes')
	}
	const routeDir = `routes/${routePath}/`
	if (!fs.existsSync(routeDir)) {
		fs.mkdirSync(routeDir)
	}
	return routeDir
}

/**
 * render all
 * @param result
 */
export const renderAll = (swaggerFile?: string) => {
	const result = getSwagger(swaggerFile)
	result.forEach(r => {
		const renderData = renderService(r)
		const routeDir = mkdir(r.key)
		fs.writeFileSync(`${routeDir}/service.ts`, renderData)
	})
}
