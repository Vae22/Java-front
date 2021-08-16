<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>图书名称</td>
                <td>作者</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Book",
        data(){
            return {
                msg:'Hello Vue',
                //假数据
                books:[
                    {
                        id:1,
                        name:'龙族',
                        author:'江南'
                    },
                    {
                        id:2,
                        name:'三重门',
                        author:'韩寒'
                    },
                    {
                        id:3,
                        name:'盗墓笔记',
                        author:'南派三叔'
                    },
                ]
            }
        },
        //初始化,then为回调，resp为结果值
        created() {
            const _this = this
            axios.get('http://localhost:8181/book/findAll').then(function (resp) {
               _this.books = resp.data
            })
        }
    }
</script>

<style scoped>

</style>