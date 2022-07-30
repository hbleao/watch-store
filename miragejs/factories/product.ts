/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import { faker } from '@faker-js/faker';

export default {
  product: Factory.extend({
    _id() {
      return faker.database.mongodbObjectId();
    },
    title() {
      return faker.commerce.product();
    },
    image() {
      return faker.image.cats(800, 800);
    },
    price() {
      return faker.finance.amount();
    },
  }),
};

