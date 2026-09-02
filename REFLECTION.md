Reflection — Git Vyuh
What was hardest, and why

The hardest part wasn't any single piece of syntax or a specific framework feature — it was learning to distrust my own assumptions and verify things directly, over and over, across completely different layers of the stack.

The clearest example was building buildFolderTree, the function that converts GitHub's flat list of file paths into a real nested tree. The recursion itself, once I understood it, wasn't the hard part. The hard part was everything AROUND it going wrong in ways that looked unrelated: using the wrong GitHub API endpoint entirely (/contents instead of /git/trees?recursive=1) and getting a response shape that looked plausible but wasn't what the code expected; a function returning a wrapper object instead of the array inside it, causing a flatList is not iterable crash three files away from the actual mistake. None of these were hard to fix once found — they were hard to find, because the error message always pointed somewhere downstream of the real problem.

The same pattern showed up later with the AI integration. Getting Gemini to reliably return "ScoreCard" instead of "ScoreCardData" wasn't a prompting trick — it was catching that I had written the wrong word in the prompt itself, and the model had faithfully followed a mistaken instruction. It looked like "the AI isn't listening," but it was really "I wasn't precise."

What I'd do differently next time

I'd write the test suite earlier, not at the end. Several of the bugs I hit — the wrong GitHub endpoint, the Feedback/feedback capitalization mismatch, the score-scale ambiguity — would have been caught immediately by a test comparing real output against the expected type, instead of being discovered by manually reading JSON on a health-check page and eyeballing it for mismatches. Manual verification worked, but it was slow, and it depended entirely on me happening to notice something looked slightly off.

I'd also decide the design system (colors, fonts, card style) before building all six components individually, rather than building them plainly first and restyling everything in one large pass afterward. The restyle pass was fun, but it re-touched every single file at once, which is exactly the kind of large, tangled change that's easy to introduce small mistakes in (and did — a missing className, an emptied-out <span>, a missing key prop all came from that phase).

One thing that surprised me

How much of "AI integration" actually comes down to being an unusually precise technical writer, not a prompting trick or a clever model choice. The single most important file in the whole project — the prompt inside buildPrompt — is just plain English, and every real bug in the AI pipeline traced back to that plain English being slightly imprecise: an ambiguous "number" with no stated range, a component name that didn't exactly match the type definition, a missing instruction about markdown code fences. The model itself was consistently reasonable and consistently followed instructions correctly — it just followed exactly what was written, which meant every mismatch was mine to find, not the model's to blame.