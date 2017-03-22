import test from 'ava'
import render from '../index'
import * as fs from 'fs'
test('no crash', t => {
	render()
})

test('service.ts exist', t => {
	t.true(fs.existsSync('routes/pets/service.ts'))
})
