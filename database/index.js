const Sequelize = require('sequelize');

const sequelize = new Sequelize('yelpPhotoGallery', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
    // This was true by default, but now is false by default
    timestamps: false
  }
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
  imageUrl: { type: Sequelize.STRING },
  helpfullCount: { type: Sequelize.INTEGER },
  notHelpfullCount: { type: Sequelize.INTEGER },
  description: { type: Sequelize.STRING },
  date: { type: Sequelize.DATEONLY },
  businessId: { type: Sequelize.INTEGER }, //This needs to be foreign key refference
  usersId: { type: Sequelize.INTEGER } //This needs to be foreign key refference
});


//This is called when server is running
module.exports = {
  initialize: () => {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.sync({ force: false });
      });
      // .then(() => {
      //   console.log('Database tables have been synced');
      // })
      // .catch(err => {
      //   console.error('Unable to connect to the database:', err);
      // });

  },
  Users,
  Businesses,
  Images,
  sequelize
};




