/*mdule.exports = {
    url: 'mongodb://localhost:27017/notation'
    //url: 'mongodb://cbrabez:password123456@ds343217.mlab.com:43217/notation'
}
*/
module.exports = {
  port: process.env.PORT,
  database: process.env.DB
};