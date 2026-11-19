# ASA BIOP Precision Medicine Statistics (PMS) Working Group website

Static website built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.
GitHub builds the site automatically on every push; no local tooling is required.

Live site: <https://asa-biop-pms.github.io/>

## GitHub Pages settings

In the repository, **Settings > Pages** should have **Source** set to *Deploy from a branch*,
with the `main` branch and the `/ (root)` folder. Every commit to `main` republishes the site
within a minute or two; progress is shown in the **Actions** tab.

Because the repository is named `asa-biop-pms.github.io`, `baseurl` in `_config.yml` is `""`.

## Updating content

See **[EDITING.md](EDITING.md)** for step-by-step instructions and examples.

All content lives in YAML files under `_data/`; edit them directly on GitHub or locally.

| What | File |
| --- | --- |
| Team members by year (Team page) | `_data/members.yml` |
| Webinars, with registration/slides/recording links (Activities page) | `_data/webinars.yml` |
| Publications (Achievement page) | `_data/publications.yml` |
| Conference presentations and short courses (Achievement page) | `_data/presentations.yml` |
| LinkedIn page, contact email, site links | `_config.yml` |
| Home page introduction | `index.html` |

- **New year's roster:** copy the latest year block in `members.yml` to the top and edit it.
- **New webinar:** add an entry to `webinars.yml`. Webinars are sorted by date, and an
  "Upcoming" badge is shown automatically until the webinar date passes.
- **Slides or recordings:** put files in `assets/files/` and link them as
  `/assets/files/<name>.pdf`, or paste an external URL (e.g. YouTube).

## Local preview (optional)

Requires Ruby: `gem install bundler jekyll`, then run `jekyll serve` in this folder.
