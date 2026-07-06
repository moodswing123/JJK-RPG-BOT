require('dotenv').config();

module.exports = {
    // ===========================
    // BOT SETTINGS
    // ===========================
    BOT_NAME: process.env.BOT_NAME || "JJK RPG BOT",
    PREFIX: process.env.PREFIX || ".",
    OWNER_NUMBER: process.env.OWNER_NUMBER,

    // ===========================
    // DATABASE
    // ===========================
    MONGO_URI: process.env.MONGO_URI,

    // ===========================
    // PLAYER STARTER STATS
    // ===========================
    STARTER: {
        YEN: 5000,
        BANK: 0,
        LEVEL: 1,
        XP: 0,
        HP: 1000,
        MAX_HP: 1000,
        CE: 500,
        MAX_CE: 500,
        GRADE: "Grade 4",
        CLAN: "None",
        CHARACTER: "Starter Sorcerer"
    },

    // ===========================
    // GAME SETTINGS
    // ===========================
    GAME: {
        MAX_LEVEL: 100,
        MAX_BACKPACK_SLOTS: 100,
        MAX_INVENTORY_SLOTS: 50,
        MAX_CURSED_TOOLS: 10
    },

    // ===========================
    // ECONOMY
    // ===========================
    ECONOMY: {
        DAILY_REWARD: 5000,
        WEEKLY_REWARD: 25000,
        WORK_MIN: 1000,
        WORK_MAX: 5000
    },

    // ===========================
    // TRAINING
    // ===========================
    TRAINING: {
        COOLDOWN: 10 * 60 * 1000,
        XP_REWARD: 100
    },

    // ===========================
    // PVP
    // ===========================
    BATTLE: {
        CHALLENGE_TIMEOUT: 60000,
        TURN_TIMEOUT: 30000,
        MAX_ROUNDS: 50
    }
};