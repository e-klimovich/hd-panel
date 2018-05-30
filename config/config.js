const config = {};

config.redisStore = {
    url: process.env.REDIS_STORE_URI,
    secret: process.env.REDIS_STORE_SECRET
};

config.user = {
    id: 1,
    username: "Marusya",
    email: "marusia@gmail.com",
    role: "user"
};

config.admin = {
    id: 2,
    username: "Epifan",
    email: "epifan@gmail.com",
    role: "admin"
};

module.export = config;