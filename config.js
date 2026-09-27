// 財務規劃整合工作台：部署設定（和 index.html 放在 GitHub repo 同一層）
// 之後更新工作台只要覆蓋 index.html，這個檔不要動。
window.FPW_CONFIG = {
  mode: "drive",                       // "local"＝存在瀏覽器；"drive"＝Google 雲端硬碟
  driveClientId: "501528187851-fjcms86u7uduvouo7mtqo1563bg08rgh.apps.googleusercontent.com",
  driveRootName: "財務規劃工作台",       // 雲端硬碟根資料夾名稱（主管第一次登入時自動建立）
  managers: ["b0987597583@gmail.com"]  // 主管帳號：可看「全部」；要新增主管就在這裡加一行
};
