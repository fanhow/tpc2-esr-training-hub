# PTW Cancelled PDF｜4 steps

The tool checks each PTW Status: `Cancelled` creates `-PRT.pdf`; every other status is renamed to `-CHK.pdf` for review.

<div class="oaic-visual-steps" markdown>

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">1</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🖱️</div>
  <div>
    <h2>Double-click the .cmd file in the PTW folder</h2>
    <code>Process Cancelled PTW - Run.cmd</code>
  </div>
</section>

![Run command in the PTW folder](assets/ptw/01-run-command.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">2</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🔎</div>
  <div>
    <h2>Wait while the tool checks each Status</h2>
    <p>The window shows the file name, progress and detected status.</p>
  </div>
</section>

![The tool scans each PTW Status](assets/ptw/02-status-scan.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">3</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">✅</div>
  <div>
    <h2>Cancelled creates -PRT.pdf</h2>
    <p>The original PDF is kept; the new file is an image-only PDF.</p>
  </div>
</section>

![Cancelled status shown on a PTW form](assets/ptw/03-cancelled-status.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step oaic-visual-step--check">
  <div class="oaic-visual-step__number">4</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">📁</div>
  <div>
    <h2>Check [DONE], [CHECK] and the output files</h2>
    <p><strong>[DONE]</strong> = <code>-PRT.pdf</code> created｜<strong>[CHECK]</strong> = renamed to <code>-CHK.pdf</code></p>
  </div>
</section>

![PTW Status processing in progress](assets/ptw/04-processing.png){ .oaic-step-shot loading=lazy }

![PTW processing summary with DONE and CHECK lists](assets/ptw/05-processing-summary.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

!!! warning "Known issue in this example"
    The screenshot ends with `Failed`; the program is still being adjusted. For now, verify the `[DONE]` / `[CHECK]` lists and the actual `-PRT` / `-CHK` files.

![PRT and CHK files after PTW processing](assets/ptw/06-output-files.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

</div>

<details class="oaic-compact-details" markdown>
<summary>Processing rules and optional mode</summary>

- Processes only `TWSHXHV-PTW-####.pdf` files without an exact matching `-PRT.pdf`.
- `Cancelled`: keeps the original PDF and creates an image-only `-PRT.pdf`.
- Other statuses: keeps the content and renames the file to `-CHK.pdf` for manual review.
- Existing files are never overwritten.
- Temporary PNG files use Windows `%TEMP%` and are removed when processing finishes.
- To open files one by one, run the PowerShell script with `-OpenEach`.

</details>
