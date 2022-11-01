const statusEmojis = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️ ",
};

type Status = keyof typeof statusEmojis;

function logCLI(message: any, status?: Status, module?: string) {
  const emoji = statusEmojis[status || "info"];

  const prefix = module
    ? `[${emoji}  in \x1b[33m${module}\x1b[0m]`
    : `[${emoji}]`;

  console.log(`${prefix}`, message);
}

export default logCLI;
