# ASA BIOP Precision Medicine Statistics (PMS) Working Group website

Static website built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.
GitHub builds the site automatically on every push; no local tooling is required.

## Publish on GitHub Pages

1. Create a public GitHub repository (for example `asa-biop-pms`) and push this folder to it.
2. In the repository, open **Settings > Pages**, set **Source** to *Deploy from a branch*,
   choose the `main` branch and the `/ (root)` folder, then save.
3. Make sure `baseurl` in `_config.yml` matches the repository name (`/asa-biop-pms`).
   Use `baseurl: ""` if the repository is named `<account>.github.io` or you use a custom domain.

The site will be live at `https://<account>.github.io/asa-biop-pms/` within a minute or two.

## Updating content

All content lives in YAML files under `_data/`; edit them directly on GitHub or locally.

| What | File |
| --- | --- |
| Team members by year (Team page) | `_data/members.yml` |
| Webinars, with registration/slides/recording links (Activities page) | `_data/webinars.yml` |
| Conference presentations and short courses (Activities page) | `_data/presentations.yml` |
| LinkedIn page, contact email, site links | `_config.yml` |
| Home page introduction | `index.html` |

- **New year's roster:** copy the latest year block in `members.yml` to the top and edit it.
- **New webinar:** add an entry to `webinars.yml`. Webinars are sorted by date, and an
  "Upcoming" badge is shown automatically until the webinar date passes.
- **Slides or recordings:** put files in `assets/files/` and link them as
  `/asa-biop-pms/assets/files/<name>.pdf`, or paste an external URL (e.g. YouTube).

## Local preview (optional)

Requires Ruby: `gem install bundler jekyll`, then run `jekyll serve` in this folder.
