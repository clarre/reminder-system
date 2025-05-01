const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

(async () => {
  const number = await ask("ADR number (e.g. 0005): ");
  const title = await ask("ADR title (e.g. Use Postgres for reminders): ");
  const date = new Date().toISOString().split("T")[0];
  const slug = title.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");

  const filename = `${number}-${slug}.md`;
  const filepath = path.join(__dirname, "..", "docs", "adr", filename);

  const content = `# ADR ${number}: ${title}

## Status
Proposed

## Date
${date}

## Context
[Explain the situation and reasoning behind this decision.]

## Decision
[State the decision that was made.]

## Consequences
### Pros
- [First advantage]
- [Second advantage]

### Cons
- [First disadvantage]
- [Second disadvantage]

## Alternatives Considered
- [Alternative 1 and why it was not chosen]
- [Alternative 2, if any]

## Notes
[Additional notes, links, or related ADRs]
`;

  fs.writeFileSync(filepath, content);
  console.log(`✅ Created ADR: docs/adr/${filename}`);
  rl.close();
})();