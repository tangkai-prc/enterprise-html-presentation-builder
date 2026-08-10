# Samples

This directory stores git-tracked baseline samples for skill development.

Runtime inputs and outputs stay under `input/` and `outputs/`, which are ignored by git. When a runtime artifact becomes a reusable baseline, copy it into `samples/` with enough context to reproduce and review it later.

Recommended sample shape:

```text
samples/<template-id>/
  README.md
  analysis/
  prototypes/
  projects/
```

Source PPTX master files remain local and are not tracked in `samples/`.

Do not treat `samples/` as the live generation output folder. Generated user-facing presentations should still be written to `outputs/presentations/<project-id>/`.
