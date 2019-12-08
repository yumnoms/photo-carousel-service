const faker = require('faker');
const db = require('./index.js');

const seed = {
  users: [],
  businesses: [],
  images: []
};

const url = 'https://gpksingh.s3.us-east-2.amazonaws.com/';
photoArray = [];

for (var i = 0; i < 11; i++) {
  photoArray.push(`${url}${i}.jpg`);
}

const shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};


for (let i = 0; i < 100; i += 1) {

  const users = {
    name: faker.name.firstName(),
    stars: faker.random.number(30),
    reviews: faker.random.number(20)
  };
  photos = shuffle(photoArray);
  const businesses = {
    name: faker.company.companyName(),
  };
  for (var j = 0; j < 10; j++) {
    const images = {
      imageUrl: photoArray[faker.random.number(10)],
      helpFullCount: faker.random.number(10),
      notHelpfullCount: faker.random.number(10),
      description: faker.random.alphaNumeric(30),
      date: faker.date.past(2),
      businessId: i, //Hardcoded for now, will change once I have foreign key references working.
      usersId: faker.random.number(10)
    };
    seed.images.push(images);
  }

  seed.users.push(users);
  seed.businesses.push(businesses);
}

db.Users.sync({ force: false }).then(() => {
  db.Users.bulkCreate(seed.users, { logging: false });
});
db.Businesses.sync({ force: false }).then(() => {
  db.Businesses.bulkCreate(seed.businesses, { logging: false });
});
db.Images.sync({ force: false }).then(() => {
  db.Images.bulkCreate(seed.images, { logging: false });
});
module.exports.seed = seed;

