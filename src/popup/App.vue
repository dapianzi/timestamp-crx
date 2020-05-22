<template>
    <div style="width:320px;">
        <a-card title="Unix Timestamp Converter">
            <a-form>
                <a-form-item label="Time Picker">
                    <a-checkbox @change="onChange">
                        Show Time-Picker
                    </a-checkbox>
                </a-form-item>
                <a-form-item label="Chose A Date">
                    <a-date-picker
                        :showTime="showTime"
                        
                        placeholder="YYYY-MM-DD"
                        v-model="date"
                    />
                </a-form-item>
                <a-form-item label="Convert to TimeStamp" style="width:174px;">
                    <a-input placeholder="stamp" v-model="stamp" />
                </a-form-item>
            </a-form>
            <!-- <a-divider>Dapianzi Carl · <a target="__blank" href="https://github.com/dapianzi/timestamp-crx">Github</a></a-divider> -->
        </a-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: "",
            showTime: false
        };
    },
    computed: {
        stamp: function() {
            if (this.date) {
                let d = new Date(this.date);
                if (!this.showTime) {
                    d.setSeconds(0);
                    d.setMinutes(0);
                    d.setHours(0);
                }
                // d.setMilliseconds(0);
                return Math.trunc(d.getTime() / 1000);
            } else {
                return "";
            }
        },
    },
    methods: {
        onChange: function(e) {
            this.showTime = e.target.checked;
        }
    }
};
</script>

<style lang="scss" scoped>
p {
    font-size: 20px;
}
</style>
