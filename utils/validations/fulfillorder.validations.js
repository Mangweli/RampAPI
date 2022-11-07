import { Joi } from 'express-validation'

export default {
  // POST /fulfil-order
  fulfilOrder: {
    body: Joi.object({
        cryptoUnitCount: Joi.number().required(),
        cryptoCurrencyName: Joi.string().required(),
        walletAddress: Joi.string().required()
    })
  }
};