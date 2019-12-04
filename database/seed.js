const faker = require('faker');
const db = require('./index.js');

const seed = {
  users: [],
  businesses: [],
  images: []
};

for (let i = 0; i < 100; i += 1) {

  const users = {
    name: faker.name.firstName(),
    stars: faker.random.number(30),
    reviews: faker.random.number(20)
  };

  const images = {
    imageUrl: faker.image.food(),
    helpFullCount: faker.random.number(10),
    notHelpfullCount: faker.random.number(10),
    description: faker.random.alphaNumeric(30),
    date: faker.date.past(2),
    businessId: 9, //Hardcoded for now, will change once I have foreign key references working.
    usersId: faker.random.number(10)
  };

  const businesses = {
    name: faker.company.companyName(),
  };

  seed.users.push(users);
  seed.images.push(images);
  seed.businesses.push(businesses);
}

db.Users.sync({ force: false }).then(() => {
  db.Users.bulkCreate(seed.users, { logging: false });
});
db.Businesses.sync({ force: false }).then(() => {
  db.Businesses.bulkCreate(seed.businesses, { logging: false });
});
db.Images.sync({ force: false }).then(() => {
  db.Images.bulkCreate(seed.images, { logging: false});
});
module.exports.seed = seed;

