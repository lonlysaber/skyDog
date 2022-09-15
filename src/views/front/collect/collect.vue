<template>
    <div>
        <el-input-number v-model="num10" @change="handleChange" :min="1" label="hehe" size="mini">
        </el-input-number>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 1
        };

    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
    }

}
</script>

<style scoped>

</style>