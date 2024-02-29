Vue CLI 使用 deploy.sh 上傳 github page

前置

1. 安裝 node.js
2. 安裝 vue/cli：npm install -g @vue/cli

步驟

1. 安裝 vue 專案：vue create [專案名稱]，參考：https://book.vue.tw/CH3/3-1-vue-cli-introduction.html
2. 在專案根目錄建立檔案：deploy.sh，檔案內容見專案，參考：https://hackmd.io/@SkT7-27LSWWQi5G2DJBLkw/rJ_GdPqLq
3. 在 git Bash 裡面執行指令：sh deploy.sh，即上傳部屬檔到 github
