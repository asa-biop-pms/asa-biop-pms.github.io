# How to edit the PMS website

The site (<https://asa-biop-pms.github.io/>) is updated by editing a few text files directly
on GitHub. Every saved change ("commit") republishes the site automatically within 1–2 minutes.

## Which file to edit

| To change | File in the repository |
|---|---|
| Team members (Team page) | `_data/members.yml` |
| Webinars (Activities page) | `_data/webinars.yml` |
| Publications (Achievement page) | `_data/publications.yml` |
| Conference presentations (Achievement page) | `_data/presentations.yml` |
| Upcoming collaborative projects (Activities page) | `activities.html` |
| LinkedIn link, contact email (footer) | `_config.yml` |
| Home page introduction text | `index.html` |

## Editing a file on GitHub

1. Go to <https://github.com/asa-biop-pms/asa-biop-pms.github.io> and click into the file
   (e.g. `_data` → `webinars.yml`).
2. Click the **pencil icon** (Edit this file) at the top right of the file.
3. Make your change.
4. Click **Commit changes…**, type a short note (e.g. "Add Feb 2027 webinar"), and click
   **Commit changes** again.
5. Open the **Actions** tab. When the newest "pages build and deployment" run shows a green
   check, refresh the website (Ctrl+F5 if you still see the old version).

**Editing several files at once:** on the repository page, press the **`.`** key. A browser
version of VS Code opens; edit as many files as needed, then use the source-control icon on
the left to commit them together.

## Common edits

### Add a registration link to a webinar (`_data/webinars.yml`)

```yaml
  links:
    registration: "https://tinyurl.com/your-link"
```

### Add a new webinar (`_data/webinars.yml`)

Copy an existing block (starting at its `- title:` line), paste it anywhere in the file, and
edit it. Webinars are sorted by date automatically, and an "Upcoming" badge is shown until the
webinar date passes.

```yaml
- title: "Title of the Talk"
  date: 2027-02-19
  time: "1:00 – 2:00 PM ET"
  format: Invited talk
  partner: SSGG
  summary: >-
    One or two sentences describing the talk.
  people:
    - { name: "Jane Doe, PhD", role: Speaker, position: "Director, Company" }
    - { name: "Kui Shen, PhD", role: Host, position: "Bayer" }
  links:
    registration: ""
    slides: ""
    recording: ""
```

### Add a member or fill in an affiliation (`_data/members.yml`)

```yaml
    - { name: Jane Doe, affiliation: Pfizer, role: Member }
```

`role` is one of `Chair`, `Co-Chair`, or `Member`. For a new year, copy the whole
`- year: 2026` block, paste it at the top of the file, change the year, and edit the names.

### Add a conference item (`_data/presentations.yml`)

Add it under the right year (create a new `- year:` block at the top for a new year):

```yaml
    - conference: JSM 2027
      full_name: Joint Statistical Meetings
      type: Invited session
      title: "Session title"
      presenters: ["Jane Doe", "Kui Shen"]
      description: One sentence about the session.
      link: "https://..."
```

Only `conference` is required; leave out any field you don't need.

To list several sessions or short courses under one conference, add `sessions:`:

```yaml
      sessions:
        - title: "SC03: Short course title"
          people: "Short course taught by Jane Doe and Kui Shen"
          link: "https://..."
```

### Add a publication (`_data/publications.yml`)

Add it at the top of the file (newest first):

```yaml
- title: "Title of the Paper"
  authors: ["Jane Doe", "Kui Shen"]
  journal: Statistics in Biopharmaceutical Research
  year: 2027
  topic: Companion diagnostics
  summary: >-
    One or two sentences describing the paper.
  link: "https://doi.org/..."
```

Only `title` is required; leave out any field you don't need.

### Upload slides (PDF)

1. Open the `assets` folder and click **Add file → Upload files**.
2. Change the folder path on the upload page to `assets/files/`, drag in the PDF, and commit.
3. Link it in the webinar entry: `slides: "/assets/files/My_Slides.pdf"`.

For recordings, paste the YouTube or Zoom link into `recording:`.

## Rules that prevent most errors

- **Indent with spaces, never tabs.** New lines must line up exactly with the lines around them.
- **Use quotes** around text containing a colon (`title: "Part 1: Overview"`) or starting with a
  special character.
- **Dates** are written as `YYYY-MM-DD`.
- **To leave a value empty**, use `""` rather than deleting the line.

## If something goes wrong

- A broken edit shows a **red ✗** in the Actions tab, and GitHub emails whoever made the commit.
  The live site keeps showing the previous version, so visitors never see a broken page.
- Fix it by opening the file again and correcting the line (usually a tab character or
  misaligned indentation).
- To undo a change completely: open the file, click **History**, open the previous version,
  copy its content, and paste it back via the pencil editor.

## Editing on your own computer

If you keep a local copy (Cursor, VS Code, or GitHub Desktop), always pull the latest version
first (`git pull`, or **Fetch/Pull** in GitHub Desktop) so you don't overwrite edits made on
GitHub, then commit and push your changes as usual.
