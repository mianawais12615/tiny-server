import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();


const redisClient = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
    },
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

export const connectRedis = async () => {
    if (!redisClient.isOpen) {
        await redisClient.connect();
    }
    console.log("Connect to Redis")
};


export const setcache = async (Key, value, exprieSeconds = 3600) => {
    await redisClient.set(Key, JSON.stringify(value), {
        EX: exprieSeconds,
    });
};

export const getCache = async (key) => {
    const data = await redisClient.get
        (key);
    return data ? JSON.parse(data) : null;
};

export default redisClient;