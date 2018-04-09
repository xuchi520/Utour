<template lang="html">
    <div>
        <div class="row"></div>
        <div class="header">
        <span class="left">
            <em>UTour</em>
            <span @click="add">首页 <b  class="iconfont icon-xia"></b></span>
        </span>
        </div>
        <div class="tiaozhuan" id="dianji" v-show="isShow">
            <ul>
                <li @click="tab">
                    <a href="#xianzhuang"></a>
                    现状
                </li>
                <li @click="tab">
                    <a href="#xiangmu"></a>
                    项目
                </li>
                <li @click="tab">
                    <a href="#about"></a>
                    关于我们
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow:false,
                taba:false
            }
        },
        methods: {
            add(){
                this.isShow=!this.isShow
            },
            tab(){
                this.isShow=!this.isShow
            }
        },
        components: {}
    }
</script>

<style lang="scss">
    .row{
        height: 95px;
    }
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        background: #000;
        height: 100px;
        .left {
            line-height: 40px;
            em {
                font-size: 35px;
                color: #fff;
                position: absolute;
                left: 310px;
                top: 32px;
            }
            span {
                color: #fff;
                position: absolute;
                left: 570px;
                top: 35px;
                font-size: 32px;
                display: block;
                height: 120px;
                line-height: 30px;
            }
        }
    }
    .tiaozhuan{
        width: 100%;height: 150px;background: #000;position:fixed;top: 100px;z-index: 1000;

        border-bottom: 1px solid #ccc;
        ul{
            text-align: center;
            color: #fff;
            font-size: 24px;
            li{
                font-size: 24px;
                width: 100%;height: 50px;position:relative;
                a{
                    position:absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 2
                }
            }
        }
    }
</style>
