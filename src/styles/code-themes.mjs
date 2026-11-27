// Syntax themes for code blocks, drawn from the brand palette only.
// landing/DESIGN.md allows three hues, so highlighting uses azure for
// structure, coral for literals and tints of the surface text for the rest.
// Contrast: every token colour is at least 4.5:1 on its code background.

const scopes = (dark) => {
  const text = dark ? "#EEF2FF" : "#010511";
  const soft = dark ? "#B0B4C1" : "#3F434F"; // punctuation, operators
  const quiet = dark ? "#8A8E9B" : "#5B5F6B"; // comments
  const structure = dark ? "#8FB0FF" : "#0046DE"; // keywords, constants
  const literal = dark ? "#FE8192" : "#A8283B"; // strings, numbers
  return [
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: quiet } },
    { scope: ["keyword", "storage", "storage.type", "storage.modifier"], settings: { foreground: structure } },
    { scope: ["constant.language", "constant.other", "support.constant"], settings: { foreground: structure } },
    { scope: ["string", "string.quoted", "punctuation.definition.string"], settings: { foreground: literal } },
    { scope: ["constant.numeric", "constant.character.escape"], settings: { foreground: literal } },
    { scope: ["entity.name.function", "support.function", "meta.function-call"], settings: { foreground: text, fontStyle: "bold" } },
    { scope: ["entity.name.type", "entity.name.class", "support.class", "support.type"], settings: { foreground: text } },
    { scope: ["variable", "variable.other", "variable.parameter"], settings: { foreground: text } },
    { scope: ["variable.other.property", "meta.object-literal.key", "support.type.property-name"], settings: { foreground: text } },
    { scope: ["keyword.operator", "punctuation", "meta.brace"], settings: { foreground: soft } },
    { scope: ["markup.heading"], settings: { foreground: structure, fontStyle: "bold" } },
    { scope: ["markup.inline.raw", "markup.fenced_code"], settings: { foreground: literal } },
  ];
};

const theme = (dark) => ({
  name: dark ? "mist-midnight" : "mist-fog",
  type: dark ? "dark" : "light",
  colors: {
    "editor.background": dark ? "#060F2A" : "#F7F9FF",
    "editor.foreground": dark ? "#EEF2FF" : "#010511",
  },
  settings: [
    { settings: { foreground: dark ? "#EEF2FF" : "#010511", background: dark ? "#060F2A" : "#F7F9FF" } },
    ...scopes(dark),
  ],
  tokenColors: scopes(dark),
});

export const mistMidnight = theme(true);
export const mistFog = theme(false);
