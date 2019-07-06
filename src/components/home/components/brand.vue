<template>
    <div class="ms">
        <div class="mspro">
            <ul class="product" ref="myul">
                <li ref="myli" v-for="(product,index) in productList" :key="index">
                    <img v-lazy="product.img"/>
                    <p class="content">{{product.content}}</p>
                    <p class="nprice">￥{{product.newprice}}</p>
                    <p class="oprice">￥{{product.oldprice}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
