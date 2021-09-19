const redis =require('redis')
const client = redis.createClient({ port: 6379, host: 'redis' })
client.on("connect", () => {console.log("📒 Redis cache is ready"); })
client.on("error", (e) => {console.log("Redis cache error:\n" + e); })
module.exports = client