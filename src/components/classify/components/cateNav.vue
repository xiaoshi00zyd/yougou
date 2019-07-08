<template>
    <div class="search">
        <img class="img1" src="../imgs/leftarrow.png" alt="" @click="$router.back(-1)">
        <div>
            <img src="../imgs/search.png" alt="">
            <input type="text" placeholder="搜索商品/店铺/种类">
        </div>
        <img class="img2" src="../imgs/elisp.png" alt="">
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.search {
    z-index: 99999;
    background: white;
    height: 44px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
}
.search .img1 {
    width: 26px;
    height: 26px;
}

.search div  {
    flex:1;
    background: #E8ECF0;
    height: 32px;
    border-radius: 16px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin: 0 8px;
}

.search div img {
    width: 16px;
    margin-left: 10px;
}

.search div input {
    border: none;
    margin-left: 10px;
    flex:1;
    height: 32px;
    background: transparent;
    font-size: 14px;
}

.search .img2 {
    width: 30px;
    height: 30px;
}

</style>
