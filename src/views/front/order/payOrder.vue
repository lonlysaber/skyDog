<template>
    <div class="payOrder">
        <div class="top">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="step">
                <div class="one">
                    <div class="item">
                        1
                    </div>
                    <div class="stepItem">
                        拍下商品
                    </div>
                </div>
                <div class="two">
                    <div class="item">
                        2
                    </div>
                    <div class="stepItem">
                        付款到支付宝
                    </div>
                </div>
                <div class="thr">
                    <div class="item">
                        3
                    </div>
                    <div class="stepItem">
                        确认收货
                    </div>
                </div>
                <div class="four">
                    <div class="item">
                        4
                    </div>
                    <div class="stepItem">
                        评价
                    </div>
                </div>
            </div>
        </div>
        <div class="addressdiv">
            <div class="heard">
                <h4>选择收货地址</h4>
            </div>
            <div class="adds">
                <div class="address"
                v-for="item in adds"
                :key="item.key">

                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    name: "",
    data() {
        return {
            productId:'',
            scale:'',
            feature:''
        }
    },
    created(){
        this.productId = this.$route.query.productId || '10001';
        this.scale = this.$route.query.scale
        this.feature = this.$route.query.feature
        console.log(this.productId,this.scale,this.feature)
    }
}
</script>

<style scoped>

</style>
