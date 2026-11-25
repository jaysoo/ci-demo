import assert from 'node:assert/strict'
import { sum } from '../src/lib/sum.mjs'

assert.equal(sum(2, 3), 5, 'sum(2, 3) should be 5')
console.log('sum checks passed')
