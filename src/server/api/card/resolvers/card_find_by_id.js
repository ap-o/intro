const { SevenBoom } = require('graphql-apollo-errors');

module.exports = async (root, { _id }, ctx) => {

  // get model
  const { Card } = ctx.db

  // find card
  const card = await Card.findById(_id);

  // return if found
  if (card) return card;

  // throw 404
  const errorMessage = `Card with id: ${ _id } not found`;
  const errorData = { _id };
  const errorName = 'CARD_NOT_FOUND';
  const err = SevenBoom.notFound(errorMessage, errorData, errorName);
  throw err;
};
