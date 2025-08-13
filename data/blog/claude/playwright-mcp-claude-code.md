Alright — here’s a crisp, self-contained blog post capturing **your actual goals**, the **minimum working steps** you followed, and the **outcomes** you saw along the way. I’ve included the two screenshots you shared to visually ground the story.

---

# Getting Playwright Working Globally with Claude Code’s MCP on macOS

In this quick guide, I’ll walk through exactly what I needed to do to get **Playwright with Chromium** running globally on my MacBook **and** usable inside **Claude Code** via the Playwright MCP server — with no wasted steps, no duplicate browser downloads, and a working result.

---

## My Requirements

- **Global install** of Playwright so it works across multiple projects.
- Install Chromium **once** and share it across all Playwright uses to save disk space.
- Connect Playwright to **Claude Code** as an MCP server so Claude can drive Chromium.
- Prove it works by automating a browser action inside Claude Code.
- Bonus: be able to **move screenshots** taken by Claude’s Playwright MCP to my Desktop.

---

## Step 1 — Install Playwright Globally and Chromium Once

From the terminal:

```bash
npm install -g @playwright/test
playwright install chromium
```

This gave me:

- A **global Playwright CLI** (`playwright`) available anywhere.
- Chromium installed **once** in the shared browser cache (`~/Library/Caches/ms-playwright`), so no duplicates later.

---

## Step 2 — Add Playwright MCP to Claude Code (Global Scope)

To make Claude Code aware of Playwright:

```bash
claude mcp add playwright -s user -- npx -y @playwright/mcp@latest
```

- `-s user` means it’s available in **all projects**.
- `npx` here only installs the MCP package — it doesn’t redownload Chromium.

Checking the connection:

```bash
claude mcp list
```

Claude confirmed:

```
playwright: npx -y @playwright/mcp@latest - ✓ Connected
```

![Claude MCP connection confirmation](/static/images/claude/manage-mcp-server.webp)

---

## Step 3 — Sanity Test Inside Claude Code

I told Claude:

> Use playwright mcp to open `https://apimagic.ai`, tell me the page title, take a screenshot, and close the browser.

Claude:

- Launched Chromium.
- Navigated to the site.
- Returned the title.
- Saved a screenshot (in a sandboxed temp directory).

---

## Step 4 — Finding and Moving the Screenshot

When I asked:

> Tell me the exact temp file path where it's saved in the MCP environment

Claude gave me:

```
/var/folders/.../playwright-mcp-output/2025-08-13T03-28-39.793Z/-Desktop-apimagic.png
```

Then:

> Move the screenshot to my Desktop

Claude ran:

```
Bash(cp "/var/folders/.../-Desktop-apimagic.png" ~/Desktop/apimagic.png)
```

and confirmed:

```
Screenshot moved to ~/Desktop/apimagic.png
```

Now the screenshot was on my Desktop:

![apimagic screenshot](/static/images/claude/apimagic.webp)

---

## Step 5 — Final Working Flow

At this point, my goals were met:

- **One** Chromium install shared everywhere.
- Playwright globally installed.
- Connected to Claude Code via MCP.
- Able to navigate, interact, and screenshot sites from Claude.
- Screenshots can be located and moved to my Desktop.

---

### Final Notes

The key to avoiding duplicate installs was:

- **Global Playwright CLI** + `playwright install chromium` before adding MCP.
- Adding MCP with `-s user` scope to avoid per-project duplication.
- Letting Claude handle browser automation through the MCP, but explicitly requesting file paths when needed.

---

Do you want me to also turn this into a **ready-to-publish Markdown blog post** with headings, code formatting, and image embeds exactly suited for your site’s theme? That way you can paste it straight into your CMS.
