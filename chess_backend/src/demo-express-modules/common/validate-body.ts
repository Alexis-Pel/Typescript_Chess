import type { ValidateFunction } from 'ajv'
import type { NextFunction, Request, Response } from 'express'

export const validateBody = (ajvValidator: ValidateFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = ajvValidator(req.body)
    console.log(result)
    if (!result) {
      const errors = ajvValidator.errors
      console.log(errors)
      res.status(400).json({ error: 'Data invalid', messages: errors?.map(err => err.message) })
    }
    else {
      next()
    }
  }
}
