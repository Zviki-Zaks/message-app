const { MongoClient } = require('mongodb')

const config = require('../config')
const logger = require('./logger.service')

const dbName = 'msgs_app_db'

let dbConnection = null

module.exports = {
    getCollection,
}

async function getCollection(collectionName) {
    try {
        console.log(`trying to get collection: ${collectionName}`);
        const db = await _connect()
        console.log(`connected to: ${dbName}`);
        const collection = await db.collection(collectionName)
        console.log(`got collection: ${collectionName}`);
        return collection
    } catch (err) {
        logger.error(`Failed to get Mongo collection: ${collectionName} at: ${dbName}`, err)
        throw err
    }
}

async function _connect() {
    if (dbConnection) return dbConnection
    try {
        const mongoClient = await MongoClient.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoClient.db(dbName)
        dbConnection = db
        return db
    } catch (err) {
        console.log(`cant connect to db: ${dbName}`)
        logger.error('Cannot Connect to DB', err)
        throw err
    }
}
