type Lang = "en" | "hy"

export function getLang(i18nLang?: string): Lang {
  if (!i18nLang) return "en"
  return i18nLang.split("-")[0] as Lang
}