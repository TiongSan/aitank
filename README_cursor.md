<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Region Tank Wars (Pixel)

一款高強度的像素風格坦克對戰遊戲，各個區域爭奪霸權。具有 AI 講評和復古音效合成功能。

## 🎮 功能特色

- **多人對戰**：使用 PeerJS 進行即時點對點多人連線。
- **像素藝術圖形**：復古風格的視覺效果，帶來懷舊感。
- **跨平台控制**：支援鍵盤 (WASD/方向鍵) 和行動裝置觸控控制。
- **AI 講評**：整合由 Google GenAI 驅動的 AI 講評功能。
- **主機/客戶端架構**：建立房間主持遊戲或加入現有房間。

## 🛠️ 技術堆疊

- **前端**：[React](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **網路**：[PeerJS](https://peerjs.com/) (WebRTC)
- **AI**：[Google GenAI SDK](https://ai.google.dev/)

## 🚀 本地執行

本專案包含您在本地執行應用程式所需的一切。

**在 AI Studio 中檢視您的應用程式：** [https://ai.studio/apps/drive/1c93cNa3W-5kN6RK7ZmVXe2AsBELJXMd5](https://ai.studio/apps/drive/1c93cNa3W-5kN6RK7ZmVXe2AsBELJXMd5)

### 先決條件

- **Node.js**：確保您已安裝 Node.js。

### 安裝與執行

1. **安裝依賴套件：**
   ```bash
   npm install
   ```

2. **設定環境變數：**
   在 [.env.local](.env.local) 中設定您的 Gemini API 金鑰 `GEMINI_API_KEY`。

3. **執行應用程式：**
   ```bash
   npm run dev
   ```

## 🕹️ 操作控制

| 動作 | 鍵盤 | 行動裝置 |
|--------|----------|--------|
| **移動** | WASD / 方向鍵 | 螢幕虛擬方向鍵 |
| **射擊** | 空白鍵 (Space) | 射擊按鈕 |

---

*Original README content preserved above.*
