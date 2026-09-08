async function emojiEdit(api, threadID, emojis, delay = 700) {
  return new Promise(async (resolve) => {
    api.sendMessage(emojis[0], threadID, async (err, info) => {
      if (err) return resolve(null);

      const msgID = info.messageID;

      for (let i = 1; i < emojis.length; i++) {
        await new Promise(r => setTimeout(r, delay));
        api.editMessage(emojis[i], msgID);
      }

      resolve(msgID);
    });
  });
}

module.exports = {
  config: {
    name: "casino",
    version: "4.0.0",
    author: "Azadx69x",
    role: 0,
    category: "GAMES",
    shortDescription: "🎰 Stylish Casino Games",
    guide: "{p}casino [game] [args] [amount]"
  },

  onStart: async function ({ api, event, args, usersData }) {
    const { threadID, messageID, senderID } = event;

    const moneyUser = await usersData.get(senderID, "money") || 0;
    const prefix = global.GoatBot.config.prefix;
    const choose = (args[0] || "").toLowerCase();

    // 💰 BET LIMITS
    const MIN_BET = 50;
    const MAX_BET = 20_000_000;

    // ═══════════════════════════════
    // 🎰 CASINO MENU
    // ═══════════════════════════════
    if (!choose) {
      return api.sendMessage(
`╭━━━〔 🎰 𝐂𝐀𝐒𝐈𝐍𝐎 〕━━━╮
┃
┃ 🎲 𝟏. 𝐁𝐈𝐆 / 𝐒𝐌𝐀𝐋𝐋
┃ ➜ ${prefix}casino big [amount]
┃
┃ 🎴 𝟐. 𝐄𝐕𝐄𝐍 / 𝐎𝐃𝐃
┃ ➜ ${prefix}casino even [amount]
┃
┃ 💸 𝟑. 𝐋𝐎𝐓𝐓𝐄𝐑𝐘
┃ ➜ ${prefix}casino lottery [0-99] [amount]
┃
┃ 🎫 𝟒. 𝐃𝐈𝐅𝐅𝐄𝐑𝐄𝐍𝐂𝐄
┃ ➜ ${prefix}casino diff [1-6] [amount]
┃
┃ 🍒 𝟓. 𝐒𝐋𝐎𝐓
┃ ➜ ${prefix}casino slot [amount]
┃
┣━━━━━━━━━━━━━━━━━━
┃ 💰 𝐌𝐈𝐍 : ${MIN_BET.toLocaleString()}$
┃ 💎 𝐌𝐀𝐗 : ${MAX_BET.toLocaleString()}$
┃ 💵 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 : ${moneyUser.toLocaleString()}$
╰━━━━━━━━━━━━━━━━━━`,
        threadID,
        messageID
      );
    }

    // ───────────────────────────────
    // 🎲 BIG / SMALL
    // ───────────────────────────────
    if (choose === "big" || choose === "small") {
      const bet = parseInt(args[1]);

      if (!bet || bet < MIN_BET)
        return api.sendMessage(
          `❌ 𝐌𝐈𝐍𝐈𝐌𝐔𝐌 𝐁𝐄𝐓: ${MIN_BET}$`,
          threadID,
          messageID
        );

      if (bet > MAX_BET)
        return api.sendMessage(
          `🚫 𝐁𝐄𝐓 𝐋𝐈𝐌𝐈𝐓 𝐑𝐄𝐀𝐂𝐇𝐄𝐃!\n\n💎 Maximum bet: ${MAX_BET.toLocaleString()}$\n🎯 You tried: ${bet.toLocaleString()}$`,
          threadID,
          messageID
        );

      if (moneyUser < bet)
        return api.sendMessage(
          `❌ 𝐍𝐎𝐓 𝐄𝐍𝐎𝐔𝐆𝐇 𝐌𝐎𝐍𝐄𝐘!\n💵 Balance: ${moneyUser.toLocaleString()}$`,
          threadID,
          messageID
        );

      const loadID = await emojiEdit(
        api,
        threadID,
        ["🎲", "🎲 ➜", "🎲 ➜ 🎲"],
        500
      );

      if (!loadID) return;

      const dice = Math.floor(Math.random() * 6) + 1;
      const result = dice >= 4 ? "big" : "small";
      const win = choose === result;

      if (win) await usersData.addMoney(senderID, bet);
      else await usersData.subtractMoney(senderID, bet);

      return api.editMessage(
`╭━━〔 🎲 𝐁𝐈𝐆 / 𝐒𝐌𝐀𝐋𝐋 〕━━╮
┃
┃ 🎯 𝐂𝐇𝐎𝐈𝐂𝐄 : ${choose.toUpperCase()}
┃ 🎲 𝐃𝐈𝐂𝐄 : ${dice}
┃ 📊 𝐑𝐄𝐒𝐔𝐋𝐓 : ${result.toUpperCase()}
┃
┃ ${win ? "🎉 𝐘𝐎𝐔 𝐖𝐎𝐍!" : "💀 𝐘𝐎𝐔 𝐋𝐎𝐒𝐓!"}
┃
┃ ${win
    ? `💰 𝐏𝐑𝐎𝐅𝐈𝐓 : +${bet.toLocaleString()}$`
    : `💸 𝐋𝐎𝐒𝐒 : -${bet.toLocaleString()}$`}
┃
┃ 💵 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 : ${(moneyUser + (win ? bet : -bet)).toLocaleString()}$
╰━━━━━━━━━━━━━━━━━━`,
        loadID
      );
    }

    // ───────────────────────────────
    // 🎴 EVEN / ODD
    // ───────────────────────────────
    if (choose === "even" || choose === "odd") {
      const bet = parseInt(args[1]);

      if (!bet || bet < MIN_BET)
        return api.sendMessage(`❌ 𝐌𝐈𝐍𝐈𝐌𝐔𝐌 𝐁𝐄𝐓: ${MIN_BET}$`, threadID, messageID);

      if (bet > MAX_BET)
        return api.sendMessage(
          `🚫 𝐌𝐀𝐗 𝐁𝐄𝐓: ${MAX_BET.toLocaleString()}$`,
          threadID,
          messageID
        );

      if (moneyUser < bet)
        return api.sendMessage(
          `❌ 𝐍𝐎𝐓 𝐄𝐍𝐎𝐔𝐆𝐇 𝐌𝐎𝐍𝐄𝐘!\n💵 Balance: ${moneyUser.toLocaleString()}$`,
          threadID,
          messageID
        );

      const loadID = await emojiEdit(
        api,
        threadID,
        ["🎴", "🎴 ➜", "🎴 ➜ 🎴"],
        500
      );

      if (!loadID) return;

      const num = Math.floor(Math.random() * 100);
      const result = num % 2 === 0 ? "even" : "odd";
      const win = choose === result;

      if (win) await usersData.addMoney(senderID, bet);
      else await usersData.subtractMoney(senderID, bet);

      return api.editMessage(
`╭━━〔 🎴 𝐄𝐕𝐄𝐍 / 𝐎𝐃𝐃 〕━━╮
┃
┃ 🎯 𝐂𝐇𝐎𝐈𝐂𝐄 : ${choose.toUpperCase()}
┃ 🔢 𝐍𝐔𝐌𝐁𝐄𝐑 : ${num}
┃ 📊 𝐑𝐄𝐒𝐔𝐋𝐓 : ${result.toUpperCase()}
┃
┃ ${win ? "🎉 𝐖𝐈𝐍𝐍𝐄𝐑!" : "😢 𝐋𝐎𝐒𝐄𝐑!"}
┃
┃ ${win
    ? `💰 +${bet.toLocaleString()}$`
    : `💸 -${bet.toLocaleString()}$`}
┃
┃ 💵 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 : ${(moneyUser + (win ? bet : -bet)).toLocaleString()}$
╰━━━━━━━━━━━━━━━━━━`,
        loadID
      );
    }

    // ───────────────────────────────
    // 💸 LOTTERY
    // ───────────────────────────────
    if (choose === "lottery") {
      const guess = parseInt(args[1]);
      const bet = parseInt(args[2]);

      if (isNaN(guess) || guess < 0 || guess > 99)
        return api.sendMessage(
          `❌ 𝐆𝐔𝐄𝐒𝐒 𝐌𝐔𝐒𝐓 𝐁𝐄 𝟎–𝟗𝟗`,
          threadID,
          messageID
        );

      if (!bet || bet < MIN_BET)
        return api.sendMessage(`❌ 𝐌𝐈𝐍𝐈𝐌𝐔𝐌 𝐁𝐄𝐓: ${MIN_BET}$`, threadID, messageID);

      if (bet > MAX_BET)
        return api.sendMessage(
          `🚫 𝐌𝐀𝐗 𝐁𝐄𝐓: ${MAX_BET.toLocaleString()}$`,
          threadID,
          messageID
        );

      if (moneyUser < bet)
        return api.sendMessage(
          `❌ 𝐍𝐎𝐓 𝐄𝐍𝐎𝐔𝐆𝐇 𝐌𝐎𝐍𝐄𝐘!`,
          threadID,
          messageID
        );

      const loadID = await emojiEdit(
        api,
        threadID,
        ["💸", "💸 ➜", "💸 ➜ 💸"],
        400
      );

      if (!loadID) return;

      const result = Math.floor(Math.random() * 100);
      const win = guess === result;

      if (win) await usersData.addMoney(senderID, bet * 9);
      else await usersData.subtractMoney(senderID, bet);

      return api.editMessage(
`╭━━〔 💸 𝐋𝐎𝐓𝐓𝐄𝐑𝐘 〕━━╮
┃
┃ 🎯 𝐆𝐔𝐄𝐒𝐒 : ${guess}
┃ 🎲 𝐑𝐄𝐒𝐔𝐋𝐓 : ${result}
┃
┃ ${win ? "💎 𝐉𝐀𝐂𝐊𝐏𝐎𝐓!" : "💀 𝐁𝐄𝐓𝐓𝐄𝐑 𝐋𝐔𝐂𝐊!"}
┃
┃ ${win
    ? `💰 +${(bet * 9).toLocaleString()}$`
    : `💸 -${bet.toLocaleString()}$`}
┃
┃ 💵 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 : ${(moneyUser + (win ? bet * 9 : -bet)).toLocaleString()}$
╰━━━━━━━━━━━━━━━━━━`,
        loadID
      );
    }

    // ───────────────────────────────
    // 🎫 DIFFERENCE
    // ───────────────────────────────
    if (choose === "diff" || choose === "difference") {
      const guess = parseInt(args[1]);
      const bet = parseInt(args[2]);

      if (isNaN(guess) || guess < 1 || guess > 6)
        return api.sendMessage(
          `❌ 𝐆𝐔𝐄𝐒𝐒 𝐌𝐔𝐒𝐓 𝐁𝐄 𝟏–𝟔`,
          threadID,
          messageID
        );

      if (!bet || bet < MIN_BET)
        return api.sendMessage(`❌ 𝐌𝐈𝐍𝐈𝐌𝐔𝐌 𝐁𝐄𝐓: ${MIN_BET}$`, threadID, messageID);

      if (bet > MAX_BET)
        return api.sendMessage(
          `🚫 𝐌𝐀𝐗 𝐁𝐄𝐓: ${MAX_BET.toLocaleString()}$`,
          threadID,
          messageID
        );

      if (moneyUser < bet)
        return api.sendMessage(`❌ 𝐍𝐎𝐓 𝐄𝐍𝐎𝐔𝐆𝐇 𝐌𝐎𝐍𝐄𝐘!`, threadID, messageID);

      const loadID = await emojiEdit(
        api,
        threadID,
        ["🎫", "🎫 ➜", "🎫 ➜ 🎲"],
        500
      );

      if (!loadID) return;

      const result = Math.floor(Math.random() * 6) + 1;
      const win = guess === result;

      if (win) await usersData.addMoney(senderID, bet * 5);
      else await usersData.subtractMoney(senderID, bet);

      return api.editMessage(
`╭━━〔 🎫 𝐃𝐈𝐅𝐅𝐄𝐑𝐄𝐍𝐂𝐄 〕━━╮
┃
┃ 🎯 𝐆𝐔𝐄𝐒𝐒 : ${guess}
┃ 🎲 𝐃𝐈𝐂𝐄 : ${result}
┃
┃ ${win ? "🎉 𝐘𝐎𝐔 𝐖𝐎𝐍!" : "😢 𝐘𝐎𝐔 𝐋𝐎𝐒𝐓!"}
┃
┃ ${win
    ? `💰 +${(bet * 5).toLocaleString()}$`
    : `💸 -${bet.toLocaleString()}$`}
┃
┃ 💵 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 : ${(moneyUser + (win ? bet * 5 : -bet)).toLocaleString()}$
╰━━━━━━━━━━━━━━━━━━`,
        loadID
      );
    }

    // ───────────────────────────────
    // 🍒 SLOT
    // ───────────────────────────────
    if (choose === "slot") {
      const bet = parseInt(args[1]);

      if (!bet || bet < MIN_BET)
        return api.sendMessage(`❌ 𝐌𝐈𝐍𝐈𝐌𝐔𝐌 𝐁𝐄𝐓: ${MIN_BET}$`, threadID, messageID);

      if (bet > MAX_BET)
        return api.sendMessage(
          `🚫 𝐌𝐀𝐗 𝐁𝐄𝐓: ${MAX_BET.toLocaleString()}$`,
          threadID,
          messageID
        );

      if (moneyUser < bet)
        return api.sendMessage(
          `❌ 𝐍𝐎𝐓 𝐄𝐍𝐎𝐔𝐆𝐇 𝐌𝐎𝐍𝐄𝐘!\n💵 Balance: ${moneyUser.toLocaleString()}$`,
          threadID,
          messageID
        );

      const loadID = await emojiEdit(
        api,
        threadID,
        ["🎰", "🎰 🎲", "🎰 🎲 🎰", "🎰 🎲 🎰 🎲"],
        600
      );

      if (!loadID) return;

      const items = ["🍒", "🍉", "🍊", "🍏", "🍓", "🍌", "⭐", "💎"];

      const a = items[Math.floor(Math.random() * items.length)];
      const b = items[Math.floor(Math.random() * items.length)];
      const c = items[Math.floor(Math.random() * items.length)];

      const jackpot = a === b && b === c;
      const partial = !jackpot && (a === b || b === c || a === c);

      if (jackpot) await usersData.addMoney(senderID, bet * 4);
      else if (partial) await usersData.addMoney(senderID, bet);
      else await usersData.subtractMoney(senderID, bet);

      return api.editMessage(
`╭━━〔 🍒 𝐒𝐋𝐎𝐓 𝐌𝐀𝐂𝐇𝐈𝐍𝐄 〕━━╮
┃
┃       ${a}  ${b}  ${c}
┃
┃ ${jackpot
    ? "💎 𝐉𝐀𝐂𝐊𝐏𝐎𝐓! 𝐀𝐋𝐋 𝐌𝐀𝐓𝐂𝐇!"
    : partial
    ? "✨ 𝐏𝐀𝐑𝐓𝐈𝐀𝐋 𝐌𝐀𝐓𝐂𝐇!"
    : "💀 𝐍𝐎 𝐌𝐀𝐓𝐂𝐇!"}
┃
┃ ${jackpot
    ? `💰 +${(bet * 4).toLocaleString()}$`
    : partial
    ? `💰 +${bet.toLocaleString()}$`
    : `💸 -${bet.toLocaleString()}$`}
┃
┃ 💵 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 : ${(moneyUser + (jackpot ? bet * 4 : partial ? bet : -bet)).toLocaleString()}$
╰━━━━━━━━━━━━━━━━━━`,
        loadID
      );
    }

    return api.sendMessage(
`╭━━〔 ❌ 𝐄𝐑𝐑𝐎𝐑 〕━━╮
┃ Unknown casino game.
┃
┃ 🎲 big / small
┃ 🎴 even / odd
┃ 💸 lottery
┃ 🎫 diff
┃ 🍒 slot
┃
┃ Type ${prefix}casino
┃ to open the menu.
╰━━━━━━━━━━━━━━`,
      threadID,
      messageID
    );
  }
};
