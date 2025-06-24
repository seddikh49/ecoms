import { Sequelize } from 'sequelize'



const sequelize = new Sequelize('ecommerce', 'postgres', 'halflife123', {
  host: 'localhost',
  dialect:  'postgres' 
});


const connect = async() => {
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

export { connect, sequelize }


// import { Sequelize } from 'sequelize'



// const sequelize = new Sequelize('kamsed49_ecom', 'kamsed49_seddik', 'halflife123--**//$$', {
//   host: '157.90.66.113',
//   dialect:  'postgres' ,
//    port: 5432,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       }
//     }
// });


// const connect = async() => {
//     try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
// }

// export { connect, sequelize }