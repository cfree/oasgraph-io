// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Start our app!
const app = require('./app');

app.set('port', process.env.PORT || 3001);

const server = app.listen(
  app.get('port'),
  () => {
    console.log(`Express running in ${process.env.NODE_ENV} → PORT ${server.address().port}`);
  }
);
