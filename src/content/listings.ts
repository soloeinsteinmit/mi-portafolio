export type Kind = "kw" | "com" | "str" | "num" | "fn" | "type";
export type Token = { t: string; k?: Kind };

export type Listing = {
  /** Shown on the editor tab. */
  file: string;
  lang: string;
  /** The quotation this file is an implementation of. */
  quote: string;
  who: string;
  where: string;
  lines: Token[][];
};

/**
 * Epigraphs, compiled.
 *
 * Each file is one real quotation written as a program in the language it
 * belongs in — the comment carries the words, the code carries the argument.
 * Add one by appending here; tabs, numbering and ordering follow.
 */
export const listings: Listing[] = [
  {
    file: "simplicity.py",
    lang: "Python 3.11",
    quote: "Simplicity is prerequisite for reliability.",
    who: "Edsger W. Dijkstra",
    where: "EWD498, 1975",
    lines: [
      [{ t: "# Simplicity is prerequisite for reliability.", k: "com" }],
      [{ t: "#   — Edsger W. Dijkstra, EWD498, 1975", k: "com" }],
      [],
      [
        { t: "from ", k: "kw" },
        { t: "systems " },
        { t: "import ", k: "kw" },
        { t: "Reliability, Simplicity" },
      ],
      [],
      [
        { t: "def ", k: "kw" },
        { t: "build", k: "fn" },
        { t: "(system: " },
        { t: "System", k: "type" },
        { t: ") -> " },
        { t: "Reliability", k: "type" },
        { t: ":" },
      ],
      [
        { t: "    if ", k: "kw" },
        { t: "Simplicity " },
        { t: "not in ", k: "kw" },
        { t: "system:" },
      ],
      [
        { t: "        raise ", k: "kw" },
        { t: "Unreliable", k: "type" },
        { t: "(" },
        { t: '"you cannot add it later"', k: "str" },
        { t: ")" },
      ],
      [],
      [
        { t: "    return ", k: "kw" },
        { t: "Reliability", k: "type" },
        { t: "(system)" },
      ],
    ],
  },
  {
    file: "testing.cpp",
    lang: "C++20",
    quote:
      "Program testing can be used to show the presence of bugs, but never to show their absence.",
    who: "Edsger W. Dijkstra",
    where: "Notes on Structured Programming, 1970",
    lines: [
      [
        {
          t: "// Testing shows the presence of bugs, never their absence.",
          k: "com",
        },
      ],
      [
        {
          t: "//   — Edsger W. Dijkstra, Notes on Structured Programming, 1970",
          k: "com",
        },
      ],
      [],
      [
        { t: "std::optional<", k: "type" },
        { t: "Bug", k: "type" },
        { t: "> ", k: "type" },
        { t: "test", k: "fn" },
        { t: "(" },
        { t: "const ", k: "kw" },
        { t: "Program", k: "type" },
        { t: "& p) {" },
      ],
      [
        { t: "    for ", k: "kw" },
        { t: "(" },
        { t: "const auto", k: "kw" },
        { t: "& c : cases(p))" },
      ],
      [
        { t: "        if ", k: "kw" },
        { t: "(" },
        { t: "auto ", k: "kw" },
        { t: "bug = run(p, c)) " },
        { t: "return ", k: "kw" },
        { t: "bug;" },
        { t: "   // presence: proven", k: "com" },
      ],
      [],
      [
        { t: "    return ", k: "kw" },
        { t: "std::nullopt;" },
        { t: "                        // absence: never", k: "com" },
      ],
      [{ t: "}" }],
    ],
  },
  {
    file: "Computing.java",
    lang: "Java 21",
    quote: "The purpose of computing is insight, not numbers.",
    who: "Richard W. Hamming",
    where: "Numerical Methods for Scientists and Engineers, 1962",
    lines: [
      [{ t: "// The purpose of computing is insight, not numbers.", k: "com" }],
      [
        {
          t: "//   — Richard W. Hamming, Numerical Methods, 1962",
          k: "com",
        },
      ],
      [],
      [
        { t: "public final class ", k: "kw" },
        { t: "Computing", k: "type" },
        { t: " {" },
      ],
      [],
      [
        { t: "    public static ", k: "kw" },
        { t: "Insight", k: "type" },
        { t: " " },
        { t: "purpose", k: "fn" },
        { t: "(" },
        { t: "Stream", k: "type" },
        { t: "<" },
        { t: "Number", k: "type" },
        { t: "> numbers) {" },
      ],
      [
        { t: "        return ", k: "kw" },
        { t: "numbers.map(Computing::compute)" },
      ],
      [
        { t: "                      .reduce(Insight.none(), Insight::merge);" },
      ],
      [],
      [
        {
          t: "        // returning the numbers would also have compiled.",
          k: "com",
        },
      ],
      [{ t: "    }" }],
      [{ t: "}" }],
    ],
  },
  {
    file: "models.ts",
    lang: "TypeScript",
    quote: "All models are wrong, but some are useful.",
    who: "George E. P. Box",
    where: "1976",
    lines: [
      [{ t: "// All models are wrong, but some are useful.", k: "com" }],
      [{ t: "//   — George E. P. Box, 1976", k: "com" }],
      [],
      [
        { t: "type ", k: "kw" },
        { t: "Model", k: "type" },
        { t: "<" },
        { t: "T", k: "type" },
        { t: "> = {" },
      ],
      [
        { t: "  wrong: " },
        { t: "true", k: "kw" },
        { t: ";" },
        { t: "                  // not a field. an invariant.", k: "com" },
      ],
      [
        { t: "  useful: " },
        { t: "boolean", k: "type" },
        { t: ";" },
        { t: "              // this is the one you get to change", k: "com" },
      ],
      [
        { t: "  predict(x: " },
        { t: "T", k: "type" },
        { t: "): " },
        { t: "T", k: "type" },
        { t: ";" },
      ],
      [{ t: "};" }],
      [],
      [
        { t: "const ", k: "kw" },
        { t: "keep", k: "fn" },
        { t: " = <" },
        { t: "T", k: "type" },
        { t: ">(ms: " },
        { t: "Model", k: "type" },
        { t: "<" },
        { t: "T", k: "type" },
        { t: ">[]) => ms.filter((m) => m.useful);" },
      ],
    ],
  },
  {
    file: "Market.mq5",
    lang: "MQL5",
    quote:
      "The most damaging phrase in the language is: “We've always done it this way.”",
    who: "Grace Hopper",
    where: "US Navy, 1976",
    lines: [
      [
        {
          t: "//--- The most damaging phrase in the language is:",
          k: "com",
        },
      ],
      [{ t: '//---   "We\'ve always done it this way."', k: "com" }],
      [{ t: "//---   — Grace Hopper, US Navy, 1976", k: "com" }],
      [],
      [
        { t: "input double ", k: "kw" },
        { t: "RiskPercent = " },
        { t: "1.0", k: "num" },
        { t: ";" },
      ],
      [],
      [
        { t: "void ", k: "kw" },
        { t: "OnTick", k: "fn" },
        { t: "()" },
      ],
      [{ t: "  {" }],
      [
        { t: "   if", k: "kw" },
        { t: "(Reason(signal) == " },
        { t: '"it worked last quarter"', k: "str" },
        { t: ")" },
      ],
      [
        { t: "      return", k: "kw" },
        { t: ";" },
        { t: "                   // habit is not an edge", k: "com" },
      ],
      [],
      [
        { t: "   if", k: "kw" },
        { t: "(!Backtested(signal) || Drawdown() > Limit()) " },
        { t: "return", k: "kw" },
        { t: ";" },
      ],
      [{ t: "   Trade.Buy(Lots(RiskPercent));" }],
      [{ t: "  }" }],
    ],
  },
];
