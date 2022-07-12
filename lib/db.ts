
import { Sequelize }  from 'sequelize-typescript'

const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
//   models: [__dirname + '/models']
    }
)

export default sequelize;

// const sequelize = new Sequelize(,, , {
//   host: 'localhost',
//   dialect:
// });

