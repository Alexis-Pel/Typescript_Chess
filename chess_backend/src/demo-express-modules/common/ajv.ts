import AJV from 'ajv'
import addFormat from 'ajv-formats'
import allErrors from 'ajv-errors'

export const ajv = new AJV({ allErrors: true })
addFormat(ajv)
allErrors(ajv)
