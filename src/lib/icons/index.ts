const Logo: string = new URL(
  "~/src/assets/icons/logo.svg",
  import.meta.url
).toString();

const Bus: string = new URL(
  "~/src/assets/icons/bus.svg",
  import.meta.url
).toString();

const Cog: string = new URL(
  "~/src/assets/icons/cog.svg",
  import.meta.url
).toString();

export default { Logo, Bus, Cog };
