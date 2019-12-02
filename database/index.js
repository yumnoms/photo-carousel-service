const Sequelize = require('sequelize');
const seed = require('./seed.js');

console.log(seed.seed)

// Option 1: Passing parameters separately
const sequelize = new Sequelize('yelpPhotoGallery', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
    // This was true by default, but now is false by default
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Users = sequelize.define('users', {
    name: { type: Sequelize.STRING },
    stars: { type: Sequelize.INTEGER },
    reviews: { type: Sequelize.INTEGER }
  });

  const Businesses = sequelize.define('businesses', {
    name: { type: Sequelize.STRING }
  });

  const Images = sequelize.define('images', {
    image_url: { type: Sequelize.STRING },
    helpfull_count: { type: Sequelize.INTEGER },
    not_helpfull_Count: { type: Sequelize.INTEGER },
    description: { type: Sequelize.STRING },
    date: { type: Sequelize.DATEONLY },
    business_id: { type: Sequelize.INTEGER}, //This needs to be foreign key refference
    users_id: { type: Sequelize.INTEGER } //This needs to be foreign key refference
  });


  Users.sync({ force: true }).then(() => {
    Users.bulkCreate(seed.seed.users, { logging: false })
  });
  Businesses.sync({ force: true }).then(() => {
    Businesses.bulkCreate(seed.seed.businesses, { logging: false })
  });
  Images.sync({ force: true }).then(() => {
    Images.bulkCreate(seed.seed.images,{ logging: false})
  });

