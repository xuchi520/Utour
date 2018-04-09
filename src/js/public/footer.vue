<template>
    <div class="footer" id="about">
        <section>
           <div>
               <div>
                   <img src="../../images/cur.png">
                   <a href="https://t.me/UTourDTS"><span>Telegram</span></a>
               </div>
               <div>
                   <img src="../../images/Facebook.png">
                   <a href="https://www.facebook.com/utour.dts?ref=bookmarks"><span>Facebook</span></a>
               </div>
               <div>
                   <img src="../../images/twitter.png">
                   <a href="https://twitter.com/UTourDTS"><span>Twitter</span></a>
               </div>
               <div>
                   <img src="../../images/xl.png">
                   <a href="https://weibo.com/u/6515047685?refer_flag=1001030201_"><span>新浪微博</span></a>
               </div>
           </div>
            <div>
                <img src="../../images/yx.png">
                <span>电子邮箱:hi@utour.com</span>
            </div>
        </section>

        <div>
            <img class="weixin" src="../../images/weixin.jpg">
            <p>微信群</p>
        </div>

    </div>
</template>
<script>

    export default {
        data() {
            return {

            }
        },
        components: {}
    }
</script>
<style scoped lang="scss">
    ul>li{
        list-style: none;

    }
.footer{
    box-sizing: border-box;
    padding: 31px 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 264px;
    background-color: #000;
    width: 100%;
    >div{
        display: inline-block;
    }
    >section:nth-of-type(1){
        box-sizing: border-box;
        padding: 16px 10px 0 10px;
        a{
            color: #ffffff;
        }
        font-size: 24px;
        width: 480px;
        color: #ffffff;
      >div:nth-of-type(1){
          >div{
              width: 49%;
              line-height: 60px;
              display: inline-block;
          }
      }
    }
    >div:nth-of-type(1){
        width: 110px;
        text-align: center;
        >img{
            width: 110px;
            height: 110px;
            display: block;
        }
        >p{
            font-size: 28px;
            color: #ffffff;
        }
    }
    >div:nth-of-type(1){
        width: 140px;
        padding-top: 5px;
        text-align: center;
        >p{
            font-size: 24px;
            color: #ffffff;
        }
        >img{
            display: inline-block;
            width: 140px;
            height: 140px;
        }
    }

}
</style>
