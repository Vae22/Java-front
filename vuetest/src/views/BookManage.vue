<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="realName"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="userName"
                    label="账号"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="passWord"
                    label="密码"
                    width="120">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" size="small">修改</el-button>
                    <el-button type="primary" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--分页控件-->
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="2"
                :total="total"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
/*            page(currentPage){
                const _this=this
                axios.get('http://localhost:8181/book/findAll/'+currentPage+'/3').then(function (resp) {
                    _this.tableData = resp.data.content
                    _this.total= resp.data.totalElements
                })
            }*/
            page(currentPage){
                const _this=this
                axios.get('http://localhost:8181/testBoot/selectAll').then(function (resp) {
                    _this.tableData = resp.data
                })
            }
        },
        created() {
            const _this=this
            axios.get('http://localhost:8181/testBoot/selectAll').then(function (resp) {
              console.log(resp)
/*                _this.tableData = resp.data.content
                _this.total= resp.data.totalElements*/
                _this.tableData = resp.data
            })
        },
        data() {
            return {
                total: null,
                tableData: null
            }
        }
    }
</script>