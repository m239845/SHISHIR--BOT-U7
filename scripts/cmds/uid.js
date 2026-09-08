const { findUid } = global.utils;
const regExCheckURL = /^(http|https):\/\/[^ "]+$/;

module.exports = {
	config: {
		name: "uid",
		aliases: ["id", "getid"],
		version: "2.0.0",
		author: "shishir	: 5,
		role: 0,
		description: { en: "ɢᴇᴛ ꜰᴀᴄᴇʙᴏᴏᴋ ᴜꜱᴇʀ ɪᴅ" },
		category: "utility",
		guide: {
			en: "   {pn} — ʏᴏᴜʀ ɪᴅ\n   {pn} @ᴛᴀɢ — ᴛᴀɢɢᴇᴅ ᴜꜱᴇʀ\n   {pn} <ᴜʀʟ> — ꜰʀᴏᴍ ᴘʀᴏꜰɪʟᴇ ᴋ\n   ʀᴇcountDown: 5,
		rolangs: {
		en: {
			syntaxError: "⌀ ᴛᴀɢ ᴀ ᴜꜱᴇʀ ᴏʀ ꜱᴇɴᴅ ᴇᴍᴘᴛʏ"
		}
	},

	onStart: async function ({ message, event, args, api, getLang }) {
		if (event.)
			return .reply(`◈ ᴜꜱᴇʀ ɪᴅ:\n${..}`);

		if (!args[0])
			return message.reply(`◈ ʏᴏᴜʀ ɪᴅ:\n${event.senderID}`);

		if (args[0].match(regExCheckURL)) {
			let msg = "";
			 ( link of ) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				cat,
		description: { en: "ɢᴇᴛ ꜰᴀᴄᴇʙᴏᴏᴋ ᴜꜱᴇʀ ɪᴅ" },
		category: "utility",
		guide: {
			en: "   {pn} — ʏᴏᴜʀ ɪᴅ\n   {pn} @ᴛᴀɢ — ᴛᴀɢɢᴇᴅ ᴜꜱᴇʀ\n   {pn} <ᴜʀʟ> — ꜰʀᴏᴍ ᴘʀᴏꜰɪʟᴇ ᴋʟʏ — ꜱᴇɴᴅᴇʀ ɪᴅ"
		}
	},

	langs: {
		en: {
			syntaxError: "⌀ ᴛᴀɢ ᴀ ᴜꜱᴇʀ ᴏʀ ꜱᴇɴᴅ ᴇᴍᴘᴛʏ"
		}
	},

	onStart: async function ({ message, event, args, api, getLang }) {
		if (event.)
			returmessage.reply(`◈ ᴜꜱᴇʀ ɪᴅ:\n${..}`);

		if (!args[0])
			return message.reply(`◈ ʏᴏᴜʀ ɪᴅ:\n${event.senderID}`);

		if (args[0].match(regExCheckURL)) {
			let msg = "";
			 ( link of ) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				catch (e) { msg += `◈ ${link}\n  ⌀ ${e.message}\n`; }
			}
			return message.reply(msg.trim());
		}

		const { mentions } = event;
		if (!Object.keys(mentions).length) return message.reply(getLang("syntaxError"));
		let msg = "";
		for (const id in mentions) msg += `◈ ${mentions[id].replace("@", "")}: ${id}\n`;
		return mege.reply(`◈ ᴜꜱᴇʀ ɪᴅ:\n${..}`);

		if (!args[0])
			return message.reply(`◈ ʏᴏᴜʀ ɪᴅ:\n${event.senderID}`);

		if (args[0].match(regExCheckURL)) {
			let msg = "";
			 ( link of ) {
				try {   ʀᴇᴘʟ	countDown: 5,
		role: 0,
		description: { en: "ɢᴇᴛ ꜰᴀᴄᴇʙᴏᴏᴋ ᴜꜱᴇʀ ɪᴅ" },
		category: "utility",
		guide: {
			en: "   {pn} — ʏᴏᴜʀ ɪᴅ\n   {pn} @ᴛᴀɢ — ᴛᴀɢɢᴇᴅ ᴜꜱᴇʀ\n   {pn} <ᴜʀʟ> — ꜰʀᴏᴍ ᴘʀᴏꜰɪʟᴇ",
		countDown: 5,
		role: 0,
		description: { en: "ɢᴇᴛ ꜰᴀᴄᴇʙᴏᴏᴋ ᴜꜱᴇʀ ɪᴅ" },
		category: "utility",
		guide: {
			en: "   {pn} — ʏᴏᴜʀ ɪᴅ\n   {pn} @ᴛᴀɢ — ᴛᴀɢɢᴇᴅ ᴜꜱᴇʀ\n   {pn} <ᴜʀʟ> — ꜰʀᴏᴍ ᴘʀᴏ",
		countDown: 5,
		role: 0,
		description: { en: "ɢᴇᴛ ꜰᴀᴄᴇʙᴏᴏᴋ ᴜꜱᴇʀ ɪᴅ" },
		category: "utility",
		guide: {
			en: "   {pn} — ʏᴏᴜʀ ɪᴅ\n   {pn} @ᴛᴀɢ — ᴛᴀɢɢᴇᴅ ᴜꜱᴇʀ\n   {pn} <ᴜʀʟ> — ꜰʀᴏᴍ ᴘʀᴏꜰɪʟᴇ ʟɪɴᴋ\n   ʀᴇᴘʟʏ — ꜱᴇɴᴅᴇʀ ɪᴅ"
		}
	},

	langs: {
		en: {
			syntaxError: "⌀ ᴛᴀɢ ᴀ ᴜꜱᴇʀ ᴏʀ ꜱᴇɴᴅ ᴇᴍᴘᴛʏ"
		}
	},

	onStart: async function ({ message, event, args, api, getLang }) {
		if (evemessageReply)
			return message.reply(`◈ event..}`);

		if (!args[0])
			return message.reply(`◈ ʏᴏᴜʀ ɪᴅ:\n${event.senderID}`);

		if (args[0].match(regExCheckURL)) {
			let msg = "";
			 ( link of ) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				catch (e) { msg += `◈ ${link}\n  ⌀ ${e.message}\n`; }
			}
			return message.reply(msg.trim());
		}

		const { mentions } = event;
		if (!Object.keys(mentions).length) return message.reply(getLang("syntaxError"));
		let msg = "";
		for (const id in mentions) msg += `◈ ${mentions[id].replace("@", "")}: ${id}\n`;
		return message.reply(msg.trim());
	}
};
ɪmessageReply.}`);

		if (!args[0])
			return message.reply(`◈ ʏᴏᴜʀ ɪᴅ:\n${event.senderID}`);

		if (args[0].match(regExCheckURL)) {
			let msg = "";
		args) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				catch (e) { msg += `◈ ${link}\n  ⌀ ${e.message}\n`; }
			}
			return message.reply(msg.trim());
		}

		const { mentions } = event;
		if (!Object.keys(mentions).length) return message.reply(getLang("syntaxError"));
		let msg = "";
		for (const id in mentions) msg += `◈ ${mentions[id].replace("@", "")}: ${id}\n`;
		return message.reply(msg.trim());
	}
};
link of args) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				catch (e) { msg += `◈ ${link}\n  ⌀ ${e.message}\n`; }
			}
			return message.reply(msg.trim());
		}

		const { mentions } = event;
		if (!Object.keys(mentions).length) return message.reply(getLang("syntaxError"));
		let msg = "";
		for (const id in mentions) msg += `◈ ${mentions[id].replace("@", "")}: ${id}\n`;
		return message.reply(msg.trim());
	}
};
msenderID}`);

		if (!args[0])
			return message.reply(`◈ ʏᴏᴜʀ ɪᴅ:\n${event.senderID}`);

		if (args[0].match(regExCheckURL)) {
			let msg = "const link of args) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				catch (e) { msg += `◈ ${link}\n  ⌀ ${e.message}\n`; }
			}
			return message.reply(msg.trim());
		}

		const { mentions } = event;
		if (!Object.keys(mentions).length) return message.reply(getLang("syntaxError"));
		let msg = "";
		for (const id in mentions) msg += `◈ ${mentions[id].replace("@", "")}: ${id}\n`;
		return message.reply(msg.trim());
	}
};
	 (const link of args) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				catch (e) { msg += `◈ ${link}\n  ⌀ ${e.message}\n`; }
			}
			return message.reply(msg.trim());
		}

		const { mentions } = event;
		if (!Object.keys(mentions).length) return message.reply(getLang("syntaxError"));
		let msg = "";
		for (const id in mentions) msg += `◈ ${mentions[id].replace("@", "")}: ${id}\n`;
		return message.reply(msg.trim());
	}
};
ply.senderID}`);

		if (!args[0])
			return message.reply(`◈ ʏᴏᴜʀ ɪᴅ:\n${event.senderID}`);

		if (args[0].match(regExCheckURL)) {
			let mfor (const link of args) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				catch (e) { msg += `◈ ${link}\n  ⌀ ${e.message}\n`; }
			}
			return message.reply(msg.trim());
		}

		const { mentions } = event;
		if (!Object.keys(mentions).length) return message.reply(getLang("syntaxError"));
		let msg = "";
		for (const id in mentions) msg += `◈ ${mentions[id].replace("@", "")}: ${id}\n`;
		return message.reply(msg.trim());
	}
};
= "";
			for (const link of args) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				catch (e) { msg += `◈ ${link}\n  ⌀ ${e.message}\n`; }
			}
			return message.reply(msg.trim());
		}

		const { mentions } = event;
		if (!Object.keys(mentions).length) return message.reply(getLang("syntaxError"));
		let msg = "";
		for (const id in mentions) msg += `◈ ${mentiply)
			return message.reply(`◈ ᴜꜱᴇʀ ɪᴅ:\n${event.messageReply.senderID}`);

		if (!args[0])
			return message.reply(`◈ ʏᴏᴜʀ ɪᴅ:\n${event.senderID}`);

		if (args[0].match(regExCheckURL)) {
			leᴋ\n   ʀᴇᴘʟʏ — ꜱᴇɴᴅᴇʀ ɪᴅ"
		}
	},

	langs: {
		en: {
			syntaxError: "⌀ ᴛᴀɢ ᴀ ᴜꜱᴇʀ ᴏʀ ꜱᴇɴᴅ ᴇᴍᴘᴛʏ"
		}
	},

	onStart: async function ({ message, event, args, api, getLang }) {
		if (event.messageReply)
			return message.reply(`◈ ᴜꜱᴇʀ ɪᴅ:\n${event.messageReply.senderID}`);

		if (!args[0])
			return message.reply(`◈ ʏᴏᴜʀ ɪᴅ:\n${event.senderID}`);

		if (args[0].match(regExCheckURL)) {
			let msg = "";
			for (const link of args) {
				try { msg += `◈ ${link}\n  → ${await findUid(link)}\n`; }
				catch (e) { msg += `◈ ${link}\n  ⌀ ${e.message}\n`; }
			}
			return message.reply(msg.trim());
		}

		const { mentions } = event;
		if (!Object.keys(mentions).length) return message.reply(getLang("syntaxError"));
		let msg = "";
		for (const id in mentions) msg += `◈ ${mentions[id].replace("@", "")}: ${id}\n`;
		return message.reply(msg.trim());
	}
};
