<template>
    <div id="wrapper">
        <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 17 }">
            <a-divider orientation="left">Unix Timestamp</a-divider>
            <a-form-item label="日期选择">
                <a-input-group compact>
                    <a-select v-model="picker" default-value="date">
                        <a-select-option value="date">
                        日期
                        </a-select-option>
                        <a-select-option value="time">
                        时间
                        </a-select-option>
                    </a-select>
                    <a-date-picker
                        :showTime="showTime"
                        placeholder="YYYY-MM-DD"
                        v-model="date"
                    />
                </a-input-group>
            </a-form-item>
            <a-form-item label="UNIX时间戳">
                <a-input placeholder="Pick a date" v-model="stamp" />
            </a-form-item>
            <a-divider orientation="left">MD5 CheckSum</a-divider>
            <a-form-item label="MD5字符串">
                <a-input placeholder="Sign String" v-model="signStr" />
            </a-form-item>
            <a-form-item label="MD5检验和">
                <a-input placeholder="MD5 Check Sum" v-model="checkSum" />
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import md5 from 'js-md5';
export default {
    data() {
        return {
            date: "",
            signStr: "",
            picker: "date",
        };
    },
    computed: {
        showTime: function() {
            return this.picker !== 'date';
        },
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
        checkSum: function() {
            if (this.signStr) {
                return md5(this.signStr);
            } else {
                return "";
            }
        }
    },
    methods: {
        onChange: function(e) {
            this.showTime = e.target.checked;
        }
    }
};
</script>

<style lang="scss" scoped>
#wrapper {
    width:480px; 
    padding: 24px;
}
</style>
