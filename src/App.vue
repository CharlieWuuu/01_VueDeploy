<template>
    <nav>
        <router-link to="/">首頁</router-link>
        <router-link to="/CreateVue">創建 Vue 專案</router-link>
        <router-link to="/DeployOnGit">在 Git 上部屬 Vue</router-link>
        <router-link to="/VueChartJs">在 Vue 用 Chart.js</router-link>
        <router-link to="/VueRouter">Vue 路由</router-link>
    </nav>
    <div class="page">
        <router-view />
    </div>
</template>

<style lang="scss">
* {
    box-shadow: inset 0 0 1px 0 #000;
}
body {
    margin: 0;
    padding: 0;
}
#app {
    height: 100vh;
    max-height: 100vh;
    display: flex;
    nav {
        padding: 20px;
        display: flex;
        flex-direction: column;
        a {
            font-weight: bold;
            color: #2c3e50;
            text-wrap: nowrap;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    .page {
        flex-grow: 1;
        padding: 28px;
        h1 {
            margin: 0;
        }
    }
}
</style>
