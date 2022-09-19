<template>
    <div>
        <form name="punchout_form" method="post"
	action="https://openapi.alipay.com/gateway.do?charset=UTF-8&method=alipay.trade.page.pay&sign=VHZaMBROmWjjVOASo3jEomk2zdvStllkqPAr2Zmf8S49VgZUgkuKCnKqlcnRD0gXENrsDCB2EoVaT7z0yIjxbkKybA64mv%2FL91MyeoSXS9b15276VGLkGdoxIKWp0lm6ApWAkNfStQfm9Z965wkNN7LIIyVvxv1nP70t6rBM%2BFBcudpTrehxLxOWRd9BEZwZSfb5vgja1Thsm9dn98C498mSM2twCS%2FbweEvhWtXfc3aplptuyiXXq%2BdZk0XnHZZaQD7xvbmvjAtR9NpsEdpOYbFlMehZm04ZiawwQO4M2v7loEqzTKBo4aX0qMojWoAEyEWTpHqlWvwG21aM8qB%2FQ%3D%3D&return_url=http%3A%2F%2Fxxx.xxx.com%2Falipay%2Freturn&notify_url=http%3A%2F%2Fxxx.xxx.com%2Falipay%2Fnotify&version=1.0&app_id=xxxxxxxxxx&sign_type=RSA2&timestamp=2020-10-26+19%3A08%3A19&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json">
	<input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:&quot;20201023175135&quot;,&quot;total_amount&quot;:&quot;0.05&quot;,&quot;subject&quot;:&quot;支付&quot;,&quot;timeout_express&quot;:&quot;10m&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;,&quot;body&quot;:&quot;支付&quot;}">
	<input type="submit" value="立即支付" style="display:none" >
</form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },methods: {
            
        },
    }
</script>

<style lang="scss" scoped>

</style>