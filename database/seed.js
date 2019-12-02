const faker = require('faker');
const db = require('./index.js')

const seed = {
  users: [],
  businesses: [],
  images: []

}
for (let i = 0; i < 100; i += 1) {

  const users = {
    name: faker.name.firstName(),
    stars: faker.random.number(30),
    reviews: faker.random.number(20)
  };

  const images = {
    image_url: faker.image.food(),
    helpfull_count: faker.random.number(10),
    not_helpfull_Count: faker.random.number(10),
    description: faker.random.alphaNumeric(30),
    date: faker.date.past(2),
    business_id: faker.random.number(30),
    users_id: faker.random.number(10)
  };

  const businesses = {
    name: faker.company.companyName(),
  };

  seed.users.push(users),
  seed.images.push(images),
  seed.businesses.push(businesses)
}

module.exports.seed=seed;

