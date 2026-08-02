# PTW Cancelled PDF｜4 步完成

自動檢查 PTW Status：`Cancelled` 產出 `-PRT.pdf`，其他狀態改為 `-CHK.pdf` 待確認。

<div class="oaic-visual-steps" markdown>

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">1</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🖱️</div>
  <div>
    <h2>在 PTW 資料夾雙擊 .cmd</h2>
    <code>Process Cancelled PTW - Run.cmd</code>
  </div>
</section>

![PTW 資料夾中的執行檔位置](assets/ptw/01-run-command.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">2</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🔎</div>
  <div>
    <h2>等待程式逐份檢查 Status</h2>
    <p>畫面會顯示檔名、進度及目前狀態。</p>
  </div>
</section>

![程式逐份掃描 PTW Status](assets/ptw/02-status-scan.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">3</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">✅</div>
  <div>
    <h2>Cancelled 會建立 -PRT.pdf</h2>
    <p>原始 PDF 保留；新檔為影像化 PDF。</p>
  </div>
</section>

![PTW 表單中的已取消 Cancelled 狀態](assets/ptw/03-cancelled-status.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step oaic-visual-step--check">
  <div class="oaic-visual-step__number">4</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">📁</div>
  <div>
    <h2>查看 [DONE]、[CHECK] 及輸出檔案</h2>
    <p><strong>[DONE]</strong> = 已建立 <code>-PRT.pdf</code>｜<strong>[CHECK]</strong> = 已改名為 <code>-CHK.pdf</code></p>
  </div>
</section>

![PTW Status 處理中](assets/ptw/04-processing.png){ .oaic-step-shot loading=lazy }

![PTW 處理結果摘要及 DONE CHECK 清單](assets/ptw/05-processing-summary.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

!!! warning "目前已知狀況"
    圖中最後出現 `Failed`，程式仍在調整。請先依 `[DONE]`／`[CHECK]` 清單及實際 `-PRT`／`-CHK` 檔案確認結果。

![PTW 處理後的 PRT 及 CHK 檔案](assets/ptw/06-output-files.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

</div>

<details class="oaic-compact-details" markdown>
<summary>處理規則與選用功能</summary>

- 只處理 `TWSHXHV-PTW-####.pdf` 且沒有同編號 exact `-PRT.pdf` 的檔案。
- `Cancelled`：保留原始 PDF，另建影像化 `-PRT.pdf`。
- 其他狀態：保留內容，只將檔名改為 `-CHK.pdf` 待人工檢查。
- 不覆寫既有檔案。
- 中間 PNG 存於 Windows `%TEMP%`，完成後自動清理。
- 如需逐份開啟，可執行 PowerShell 程式並加上 `-OpenEach`。

</details>
