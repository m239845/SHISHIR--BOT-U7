// ╭──────────────────────────────────╮
// │       𓆩⚡ SHISHIR PROFILE ⚡𓆪     │
// ╰──────────────────────────────────╯

const PROFILE = {
  name: "𝑺𝑯𝑰'𝑺𝑯𝑰𝑹",
  nickname: "Your abbu",
  country: "𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇 🇧🇩",
  home: "𝐒𝐈𝐑𝐀𝐉𝐆𝐀𝐍𝐉",
  district: "𝐒𝐈𝐑𝐀𝐉𝐆𝐀𝐍𝐉",
  education: "𝐃𝐈𝐏𝐋𝐎𝐌𝐀 𝐈𝐍 𝐀𝐆𝐑𝐈𝐂𝐔𝐋𝐓𝐔𝐑𝐄",
  age: "𝟏𝟕",
  relationship: "𝐒𝐈𝐍𝐆𝐋𝐄",
  colour: "𝐁𝐋𝐀𝐂𝐊 🖤"
};

const makeProfile = () => `
╭━━━━━━━━━━━━━━━━━━━━━━╮
      𓆩⚡𓆪 𝑺𝑯𝑰'𝑺𝑯𝑰𝑹 𓆩⚡𓆪
          𝐈𝐍𝐅𝐎
╰━━━━━━━━━━━━━━━━━━━━━━╯

  𓆩♛𓆪 𝐍𝐀𝐌𝐄
  ╰➤ ${PROFILE.name}

  𓆩☻𓆪 𝐍𝐈𝐂𝐊𝐍𝐀𝐌𝐄
  ╰➤ ${PROFILE.nickname}

  𓆩🇧🇩𓆪 𝐂𝐎𝐔𝐍𝐓𝐑𝐘
  ╰➤ ${PROFILE.country}

  𓆩📍𓆪 𝐇𝐎𝐌𝐄
  ╰➤ ${PROFILE.home}

  𓆩🏛️𓆪 𝐃𝐈𝐒𝐓𝐑𝐈𝐂𝐓
  ╰➤ ${PROFILE.district}

  𓆩🎓𓆪 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍
  ╰➤ ${PROFILE.education}

  𓆩⌛𓆪 𝐀𝐆𝐄
  ╰➤ ${PROFILE.age}

  𓆩♡𓆪 𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏
  ╰➤ ${PROFILE.relationship}

  𓆩🖤𓆪 𝐅𝐀𝐕𝐎𝐔𝐑𝐈𝐓𝐄 𝐂𝐎𝐋𝐎𝐔𝐑
  ╰➤ ${PROFILE.colour}

╭──────────────────────╮
       𓆩♚𓆪 𝐒𝐇𝐈𝐒𝐇𝐈𝐑
       𝐘𝐎𝐔𝐑 𝐁𝐁𝐙
╰──────────────────────╯
`;

module.exports = {
  config: {
    name: "shishir",
    version: "3.0.0",
    author: "𝑺𝑯𝑰'𝑺𝑯𝑰𝑹",
    role: 0,
    shortDescription: "Unique Shishir Profile",
    category: "Information",
    guide: {
      en: "shishir | saju"
    }
  },

  onStart: async () => {},

  onChat: async ({ api, event }) => {
    const input = event.body?.trim().toLowerCase();

    if (!["shishir", "saju"].includes(input)) return;

    return api.sendMessage(
      makeProfile(),
      event.threadID,
      event.messageID
    );
  }
};
