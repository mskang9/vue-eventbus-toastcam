<template>
    <div class="test_msg">
        <div class="dimmed"></div>
        <div class="content">
            <div class="message" v-html="pMessage"></div>
            <div class="confirm_btn" v-on:click="closeDlg()">테스트 메시지 컴포넌트</div>
        </div>
    </div>
</template>
<script>
    export default {
        props : {
            pMessage: {
                type: String,
                default: ""
            }
        },
        created : function() {
        },
        beforeDestroy : function() {
        },
        methods : {
            closeDlg: function() {
                this.$emit('destroy');
                this.$destroy();
            }
        }
    }
</script>

<style lang="less">
    .test_msg {
        .content{
            position:fixed;top:30%;left:40%;width:320px;height:184px;z-index:200;background:#fff;box-sizing:border-box;
            .message {
                height:89px;
                font-size:16px;
                padding-top:50px;
                padding-left:10px;
                padding-right:10px;
                line-height:1.6;
                text-align:center;
            }
            .confirm_btn {
                width:100%;
                height:33px;
                padding-top:12px;
                color:#ffffff;
                font-size:14px;
                background:#4b96e6;
                text-align:center;
                cursor:pointer;
            }
        }
        .dimmed{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:130;display: block;}
    }
</style>