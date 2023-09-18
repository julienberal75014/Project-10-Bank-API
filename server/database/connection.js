const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect("mongodb+srv://hiwawk:unjcMcttAWn4w5tN@cluster0.mtrqw.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
