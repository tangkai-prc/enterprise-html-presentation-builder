# CodexSkills Project Rules

This repository is a sandbox for developing Codex skills.

## Safety rules

- Do not modify files outside this repository.
- Do not write to `~/.agents/skills` unless explicitly requested.
- Do not modify `~/.codex/config.toml` unless explicitly requested.
- Do not modify installed system, curated, or third-party skills.
- Do not install npm, Python, Homebrew, or system dependencies unless explicitly approved.
- Do not run destructive commands such as `rm -rf`, `git clean -fdx`, or `brew uninstall`.
- Do not access external network resources unless explicitly approved.
- Keep temporary files under `tmp/`.
- Keep generated prototypes under `outputs/prototypes/`.
- Keep analysis outputs under `outputs/analysis/`.

## Skill development rules

- Prefer project-level skills under `.agents/skills/`.
- Start with instruction-only skills.
- Put long rules in `references/`.
- Put reusable templates in `assets/`.
- Add scripts only after the workflow is stable.
- Do not generate final HTML unless explicitly requested.
- Do not promise perfect PPTX-to-HTML conversion.
- Treat PPTX templates as visual/style references, not as exact conversion sources.
- Use Simplified Chinese by default.

## Current target skill

Develop `enterprise-html-presentation-builder`.

This skill builds a reusable workflow for creating enterprise-style single-file HTML browser presentations from PowerPoint templates.

The first stage should extract:

- style tokens
- layout taxonomy
- asset sourcing rules
- asset placement rules
- single-file HTML constraints
- information gaps
