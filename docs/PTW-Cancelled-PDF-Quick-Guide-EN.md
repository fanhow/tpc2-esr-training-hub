# Create Printed PTW PDF｜5 steps

One run performs two checks: new PTW files and existing `-CHK.pdf` files.

<div class="oaic-visual-steps" markdown>

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">1</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🖱️</div>
  <div>
    <h2>Check the files, then double-click the .cmd file</h2>
    <code>Process Cancelled PTW - Run.cmd</code>
  </div>
</section>

![Before: standard PTW and CHK files waiting for recheck](assets/ptw/09-files-before.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

![Run command in the PTW folder](assets/ptw/01-run-command.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">2</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🔎</div>
  <div>
    <h2>Wait for Step 1 to check new PTW files</h2>
    <p>The window shows each file name, progress and Status.</p>
  </div>
</section>

![The tool scans each PTW Status](assets/ptw/02-status-scan.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">3</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">✅</div>
  <div>
    <h2>Review the Step 1 result</h2>
    <p><strong>Cancelled</strong> → creates <code>-PRT.pdf</code><br><strong>Other status</strong> → renamed to <code>-CHK.pdf</code></p>
  </div>
</section>

![Cancelled status shown on a PTW form](assets/ptw/03-cancelled-status.png){ .oaic-step-shot loading=lazy }

![PTW Status processing in progress](assets/ptw/04-processing.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step oaic-visual-step--check">
  <div class="oaic-visual-step__number">4</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🔁</div>
  <div>
    <h2>Step 2 rechecks every -CHK.pdf</h2>
    <p><strong>Now Cancelled</strong> → restores the original name and creates <code>-PRT.pdf</code><br><strong>Not Cancelled</strong> → keeps <code>-CHK.pdf</code></p>
  </div>
</section>

![Step 2 rechecks each CHK Status](assets/ptw/07-chk-recheck.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step oaic-visual-step--check">
  <div class="oaic-visual-step__number">5</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">📋</div>
  <div>
    <h2>Review the summary, then press any key to close</h2>
    <p><strong>[DONE]</strong> = completed｜<strong>[CHECK]</strong> = not completed<br>The window stays open for review.</p>
  </div>
</section>

![Step 1 and Step 2 processing summary](assets/ptw/08-final-summary.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

![After: original PTW and newly created PRT files](assets/ptw/10-files-after.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

</div>

<details class="oaic-compact-details" markdown>
<summary>Processing rules and optional mode</summary>

- Step 1 checks `TWSHXHV-PTW-####.pdf` files without an exact matching `-PRT.pdf`.
- Step 1 `Cancelled`: keeps the original PDF and creates an image-only `-PRT.pdf`.
- Step 1 other status: keeps the content and renames the file to `-CHK.pdf`.
- Step 2 rechecks every `TWSHXHV-PTW-####-CHK.pdf`.
- A `-CHK.pdf` that is now `Cancelled`: restores the original name and creates an image-only `-PRT.pdf`.
- A `-CHK.pdf` that is not `Cancelled`: keeps its name and appears under `[CHECK]`.
- Existing files are never overwritten.
- Temporary PNG files use Windows `%TEMP%` and are removed when processing finishes.
- To open files one by one, run the PowerShell script with `-OpenEach`.

</details>
