**PREPARE BLOG COMMAND**

**Variables:**
raw_blog: $ARGUMENTS

**ARGUMENTS PARSING:**
Parse the following arguments from "$ARGUMENTS":

1. `raw_blog` - Path to the file which contains the raw blog in markdown.
2. `cover_image` - Path to the cover image.

**ADD FRONTMATTER**

- Read the raw blog file at `raw_blog`. Then add the following frontmatter fields to the raw blog.

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

- Add a frequently asked questions, by thinking through step by step through the `raw_blog`. A minimum of 5 Faqs should be added with a maximum of 15.

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

**ADD UNIQUE INSIGHT BLOG**

- Read the raw blog file at `raw_blog`. Then think step-by-step to add a unique insight to the blog based on the `raw_blog`, the unique insight should not change the meaning of the raw blog.

**FINAL POLISH**
Balance technical precision with plain language so non-experts can follow.
