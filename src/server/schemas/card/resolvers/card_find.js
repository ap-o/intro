const logger = require('minilog')('card gql');
const { SevenBoom } = require('graphql-apollo-errors');

module.exports = async (root, { _id }, ctx) => {

  // get model
  const Card = ctx.db.model('Card');

  // find card
  const result = await Card.findOne({ _id });

  // return if found
  if (result) return result;

  // throw 404
  const errorMessage = `Card with id: ${ _id } not found`;
  const errorData = { _id };
  const errorName = 'CARD_NOT_FOUND';
  const err = SevenBoom.notFound(errorMessage, errorData, errorName);
  throw err;
};
