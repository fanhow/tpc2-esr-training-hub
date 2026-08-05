# 產生圖片化 PTW PDF｜5 步完成

一次執行兩輪檢查：處理新的 PTW，並重新檢查既有的 `-CHK.pdf`。

<div class="oaic-visual-steps" markdown>

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">1</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🖱️</div>
  <div>
    <h2>確認檔案後，雙擊 .cmd</h2>
    <code>Process Cancelled PTW - Run.cmd</code>
  </div>
</section>

![執行前：一般 PTW 及待重新檢查的 CHK 檔案](assets/ptw/09-files-before.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

![PTW 資料夾中的執行檔位置](assets/ptw/01-run-command.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">2</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🔎</div>
  <div>
    <h2>等待第一輪檢查新 PTW</h2>
    <p>畫面會顯示檔名、進度及 Status。</p>
  </div>
</section>

![程式逐份掃描 PTW Status](assets/ptw/02-status-scan.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step">
  <div class="oaic-visual-step__number">3</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">✅</div>
  <div>
    <h2>查看第一輪結果</h2>
    <p><strong>Cancelled</strong> → 建立 <code>-PRT.pdf</code><br><strong>其他狀態</strong> → 改名為 <code>-CHK.pdf</code></p>
  </div>
</section>

![PTW 表單中的已取消 Cancelled 狀態](assets/ptw/03-cancelled-status.png){ .oaic-step-shot loading=lazy }

![PTW Status 處理中](assets/ptw/04-processing.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step oaic-visual-step--check">
  <div class="oaic-visual-step__number">4</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">🔁</div>
  <div>
    <h2>第二輪會重新檢查 -CHK.pdf</h2>
    <p><strong>已改為 Cancelled</strong> → 恢復原檔名並建立 <code>-PRT.pdf</code><br><strong>尚未 Cancelled</strong> → 保留 <code>-CHK.pdf</code></p>
  </div>
</section>

![第二輪重新檢查 CHK Status](assets/ptw/07-chk-recheck.png){ .oaic-step-shot loading=lazy }

<section class="oaic-visual-step oaic-visual-step--check">
  <div class="oaic-visual-step__number">5</div>
  <div class="oaic-visual-step__icon" aria-hidden="true">📋</div>
  <div>
    <h2>查看摘要，再按任意鍵關閉</h2>
    <p><strong>[DONE]</strong> = 已完成｜<strong>[CHECK]</strong> = 尚待完成<br>視窗會停留，不會自動消失。</p>
  </div>
</section>

![第一輪及第二輪處理結果摘要](assets/ptw/08-final-summary.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

![執行後：原始 PTW 與新建立的 PRT 檔案](assets/ptw/10-files-after.png){ .oaic-step-shot .oaic-step-shot--tall loading=lazy }

</div>

<details class="oaic-compact-details" markdown>
<summary>處理規則與選用功能</summary>

- 第一輪：檢查沒有同編號 exact `-PRT.pdf` 的 `TWSHXHV-PTW-####.pdf`。
- 第一輪 `Cancelled`：保留原始 PDF，另建影像化 `-PRT.pdf`。
- 第一輪其他狀態：保留內容，只將檔名改為 `-CHK.pdf`。
- 第二輪：重新檢查全部 `TWSHXHV-PTW-####-CHK.pdf`。
- `-CHK.pdf` 已改為 `Cancelled`：恢復原檔名並建立影像化 `-PRT.pdf`。
- `-CHK.pdf` 尚未 `Cancelled`：檔名不變，列於 `[CHECK]`。
- 不覆寫既有檔案。
- 中間 PNG 存於 Windows `%TEMP%`，完成後自動清理。
- 如需逐份開啟，可執行 PowerShell 程式並加上 `-OpenEach`。

</details>
