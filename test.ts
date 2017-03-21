import test from 'ava'
import { renderAll } from './index'
import * as fs from 'fs'
test('no crash', t => {
	renderAll()
})

test('service.ts exist', t => {
	t.true(fs.existsSync('routes/pets/service.ts'))
})
