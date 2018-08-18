<template>
    <div>
        <h2>Clock</h2>
        <div>{{display}}</div>
    </div>
</template>
<script>
    import moment from 'moment';

    export default {
        data() {
            return {
                time: Date.now()
            }
        },
        computed: {
            display() {
                return moment(this.time).format("HH:mm:ss");
            }
        },
        created() {
            setInterval(() => {
                this.time = Date.now();
            }, 1000);
        }
    }
</script>