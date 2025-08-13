**PREPARE BLOG COMMAND**

**Variables:**
raw_blog: $ARGUMENTS

**ARGUMENTS PARSING:**
Parse the following arguments from "$ARGUMENTS":

1. `raw_blog` - Path to the file which contains the raw blog in markdown.
2. `cover_image` - Path to the cover image.

**ADD FRONTMATTER**

- Read the raw blog file at `raw_blog`. Then add the following frontmatter fields to the raw blog.
- Use double quotes in the YAML frontmatter title, which properly handles the apostrophe.
- Use a maximum of three tags, not more than this.

```
---
title:
date:
tags:
draft: false
summary: ''
---
```

- Add the `cover_image` to the below images property.

```
images: ['/static/images/... update it']
```

**YAML ESCAPING RULES**

When adding frontmatter, follow these escaping rules to prevent YAML parsing errors:

1. **Apostrophes in single-quoted strings**: Escape with double single quotes

   - Wrong: `summary: 'OpenAI's new API'`
   - Correct: `summary: 'OpenAI''s new API'`

2. **Content with colons**: Wrap entire value in single quotes

   - Wrong: `answer: The setting is truncation: "auto" for this`
   - Correct: `answer: 'The setting is truncation: "auto" for this'`

3. **Mixed quotes**: Use single quotes to wrap strings containing double quotes
   - Wrong: `answer: Use "auto" for general-purpose assistants`
   - Correct: `answer: 'Use "auto" for general-purpose assistants'`

**ADD UNIQUE INSIGHT BLOG**

- Read the raw blog file at `raw_blog`. Then think step-by-step to add a unique insight to the blog based on the `raw_blog`, the unique insight should not change the meaning of the raw blog.

**ONLY ONE TITLE**
The title in the frontmatter is shown as a `h1` header in the blog. So after the frontmatter, there should be body text, not a header. If there is another header then remove that - unless absolutely needed.

**ADD FAQs**

- Read the raw blog file at `raw_blog`. Then think step-by-step to add a FAQ section. Come up with a set of faqs, a minimum of 5 faqs and a maximum of 15.
- Add the faq to the frontmatter as shown below:

```
faq:
  - question: How can ...
    answer: Focus on ...
  - question: What ...
    answer: To optimize f...
```

- Add the faq to the blog towards the end of the blog.

**ADD FAQs - FORMATTING RULES**

When adding FAQs to frontmatter, follow these critical formatting rules to prevent YAML parsing errors:

1. **Wrap ALL question and answer values in single quotes**
2. **Escape any apostrophes with double single quotes ('')**
3. **Questions with quotes: wrap the entire value in single quotes**
4. **Answers with colons: wrap the entire value in single quotes**

Example format:

```yaml
faq:
  - question: 'What''s the difference between "auto" and "required"?'
    answer: 'Use "auto" for general cases. The setting truncation: "auto" helps manage costs.'
  - question: "How does OpenAI's API handle tool calls?"
    answer: 'The API processes tool calls through a structured JSON format.'
```

**STRIP RAW BLOG**
The raw blog file at `raw_blog` would contain three parts:

Some initial conversational or instructional message(s) that are not part of the main content.

The actual content — clearly recognizable by having a title, headings, and the substantive body text.

Some closing conversational or instructional message(s) that are not part of the main content.

Your task: Extract only the actual content (part 2), preserving its formatting exactly (headings, bold, lists, code blocks, etc.).

Remove parts 1 and 3 entirely. Do not add or change any wording inside the actual content. Do not leave blank lines where removed text was.

**UPDATE VOICE**
Update the `raw_blog` with an Active Voice, which is clearer and more direct.
Keeps sentences short and readable.

**UPDATE TENSE**

- For explanations and facts use present tense.
- For case studies, historical developments, or experiments use past tense.
- For trends, predictions, and upcoming innovations use future tense.

**FINAL POLISH**
Balance technical precision with plain language so non-experts can follow.

**NO UNNECESSARY BOLD IN PARAGRAPHS**
Review the raw blog at `raw_blog` and remove unnecessary bold formatting. Keep bold only where it is essential for clarity or emphasis — for example, when naming a product, command, or unique technical term that benefits from standing out, but not more than once on the same word. Remove bold from generic words, common nouns, or phrases where it does not add value. Preserve headings, code formatting, and all other Markdown elements exactly as they are. The blog should have minimal but purposeful bold usage.

**MDX CONTENT FORMATTING**

When adding content to the blog body, follow these MDX rules to prevent parsing conflicts:

1. **JSON Objects**: Wrap in backticks to prevent MDX parsing conflicts

   - Wrong: `Set tool_choice to {"type":"function","name":"my_function"}`
   - Correct: `Set tool_choice to \`{"type":"function","name":"my_function"}\``

2. **Code with Curly Braces**: Use code blocks or inline code formatting

   - For inline code: Use backticks around `{code}`
   - For code blocks: Use triple backticks with language specification

3. **React Component Syntax**: Escape curly braces or use code formatting

   - Any `{variable}` or `{expression}` should be in backticks if meant as literal text

4. **JavaScript Objects**: Always wrap in code formatting to prevent MDX conflicts
   - Use backticks for inline: `{key: "value"}`
   - Use code blocks for multiline objects

**FINAL VALIDATION**

Before completing, verify the blog meets these requirements to prevent parsing errors:

1. **YAML Frontmatter**:

   - All apostrophes in single-quoted strings are properly escaped with double single quotes ('')
   - All FAQ answers containing colons are wrapped in single quotes
   - Summary field uses proper quote escaping for any apostrophes
   - All question and answer values in FAQ section are wrapped in single quotes

2. **MDX Content**:

   - All JSON objects in content are wrapped in backticks
   - No bare curly braces outside of code formatting
   - All code snippets with braces use proper code block or inline formatting

3. **Content Quality**:
   - Single H1 title (from frontmatter only)
   - FAQ section added both to frontmatter and blog content
   - Minimal but purposeful bold usage
   - Active voice and appropriate tense usage
