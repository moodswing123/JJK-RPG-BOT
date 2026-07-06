require("dotenv").config();

const fs = require("fs");

const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");

const { handleCommand } = require("./handlers/commandHandler");

// 🧠 DATABASE SYSTEM (PHASE 2)
const { getUser } = require("./utils/db");

// ⚔️ GLOBAL BATTLE STORAGE
global.activeBattles = new Map();

async function startBot() {

    const { state, saveCreds } = await useMultiFileAuthState("auth_info");

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("messages.upsert", async (m) => {

        const msg = m.messages[0];

        if (!msg.message) return;
        if (msg.key.fromMe) return;

        const sender = msg.key.remoteJid;

        // 🧠 Get real persistent user from database
        const user = getUser(sender);

        const text =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text ||
            "";

        const message = {
            text,
            sender,
            message: msg.message
        };

        // ⚙️ Run command system
        const result = await handleCommand(message, user);

        // 💬 Reply system
        if (result?.reply) {
            await sock.sendMessage(sender, { text: result.reply });
        }
    });

    console.log("⚡ JJK RPG BOT ONLINE (PHASE 2)");

    // 📦 Show Baileys version
    const baileysVersion = require("@whiskeysockets/baileys/package.json").version;
    console.log("📦 Baileys Version:", baileysVersion);
}

startBot();