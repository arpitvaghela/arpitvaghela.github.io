# arpitvaghela.github.io

Personal site. Jekyll, no CSS framework — `assets/css/site.css` is hand-written and
shares its design system with my project pages: paper ground, Literata for prose,
Inter for interface, a periwinkle accent.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Editing

Content lives in `_data` and `_config.yml`; `index.html` is the only template.

| File | Holds |
| --- | --- |
| `_config.yml` | Name, position, bio, social handles |
| `_data/publications.yml` | Publication list, newest first |
| `_data/authors.yml` | Co-author names and homepages, keyed by id |
| `_data/news.yml` | Optional; the News section only renders when non-empty |
| `_includes/icons.html` | Inline SVG sprite, referenced as `<use href="#i-name">` |

A publication entry supports `title`, `venue`, `awards`, `description`,
`project_page`, `pdf`, `arxiv`, `github`, `image`, and `image_mouseover` (a video
that plays on hover). Every field is optional except `title` and `authors` — the
template omits any link whose field is absent, so leave out what does not apply.
Thumbnails go in `images/`; an entry without one gets a dashed placeholder so the
column keeps its rhythm.

Quote `arxiv` ids (`arxiv: "2404.10540"`). Unquoted, YAML reads them as floats and
silently drops a trailing zero, which breaks the link.

Set `is_me: true` on exactly one author in `authors.yml` to get the bold,
unlinked treatment.

## Open items

- `syntrac` has no thumbnail. It previously pointed at `camp_before.jpg`, which was
  never committed, so the image rendered broken; the entry now shows the dashed
  placeholder instead. Add a file to `images/` and set `image:` to replace it.
- `egdr` has no `arxiv` id yet; the arXiv pill stays hidden until one is set.

Built from a [template by Keunhong Park](https://github.com/keunhong/keunhong.github.io),
licensed [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).
