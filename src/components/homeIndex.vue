<template>
  <div class="app-container">
    <header>
      <nav>
        <div class="logo">
          <img src="../assets/new.png">
        </div>
<!--        <div class="navbar">-->
<!--          <ul>-->
<!--            <li><span>首页</span></li>-->
<!--            <li @click="gotoAllclasses"><span>全部课程</span></li>-->
<!--            <li @click="gotoCompetition"><span>编程比赛</span></li>-->
<!--          </ul>-->
<!--        </div>-->
        <div class="sousuo">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
           <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </nav>
    </header>
    <div class="banner contaier">
      <div class="banner-in">
        <el-carousel height="420px">
          <el-carousel-item  v-for="(item, index) in schna" :key="index">
            <img :src="item" alt="" style="width: 100%;height: 100%">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="yewu_intru contaier">
      <div class="yewu_head">
        <span>功能介绍</span>
      </div>
      <div class="yewu_content">
        <el-row>
          <el-col :span="6">
            <div class="yewu_item">
              <div style="width: 80%;;margin-left: 9%">
                <div class=yewu_img>
                  <img src="../assets/chengshi.jpg">
                  <div class="mask">
                    <p class="mask_title">城市管理</p>
                    <a class="mask_btn" @click="gochengshi">点击查看</a>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="yewu_item">
              <div style="width: 80%;;margin-left: 9%">
                <div class=yewu_img>
                  <img src="../assets/shengtai.jpg">
                  <div class="mask">
                    <p class="mask_title">生态监测</p>
                    <a class="mask_btn" @click="goshengtai">点击查看</a>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="yewu_item">
              <div style="width: 80%;;margin-left: 9%">
                <div class=yewu_img>
                  <img src="../assets/zhineng.jpg">
                  <div class="mask">
                    <p class="mask_title">智能应用</p>
                    <a class="mask_btn" @click="gozhineng">点击查看</a>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="yewu_item">
              <div style="width: 80%;;margin-left: 9%">
                <div class=yewu_img>
                  <img src="../assets/jishu.jpg">
                  <div class="mask">
                    <p class="mask_title">技术支持</p>
                    <a class="mask_btn" @click="goJishu">点击查看</a>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="copyrightContainer">
      <span>Copyright&nbsp;&nbsp;&nbsp;中科瑞通   ©2019</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeIndex',
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      schna: ['http://58.119.112.11:11028/picture/ai/20200114164816.jpg']
    }
  },
  methods: {
    gochengshi: function () {
      this.show1 = true
      this.show2 = false
      this.show3 = false
      this.show3 = false
      this.$router.push({
        path: '/homepage',
        query: {
          show1: this.show1,
          show2: this.show2,
          show3: this.show3,
          show4: this.show4
        }
      })
    },
    goshengtai: function () {
      this.show1 = false
      this.show2 = true
      this.show3 = false
      this.show3 = false
      this.$router.push({
        path: '/homepage',
        query: {
          show1: this.show1,
          show2: this.show2,
          show3: this.show3,
          show4: this.show4
        }
      })
    },
    gozhineng: function () {
      this.show1 = false
      this.show2 = false
      this.show3 = true
      this.show4 = false
      this.$router.push({
        path: '/homepage',
        query: {
          show1: this.show1,
          show2: this.show2,
          show3: this.show3,
          show4: this.show4
        }
      })
    },
    goJishu: function () {
      this.show1 = false
      this.show2 = false
      this.show3 = false
      this.show4 = true
      this.$router.push({
        path: '/homepage',
        query: {
          show1: this.show1,
          show2: this.show2,
          show3: this.show3,
          show4: this.show4
        }
      })
    }
  }
}
</script>

<style scoped>
  .button {
    padding: 20px;
  }
  .contaier {
    width: 75%;
    margin: 0 auto;
  }
  a {
    color: #050505;
    text-decoration: none;
  }
  header{
    height: 100px;
    /*background-color: #92D4D5;*/
    background-color: #494949;
    overflow: hidden;
  }
  nav {
    /*width: 1400px;*/
    height: 60px;
    /*background-color: white;*/
    margin: 0 auto;
    margin-top: 20px;
  }
  .logo {
    float: left;
    margin-left: 5%;
  }
  .logo img {
    height: 60px;
    width: 300px;
  }
  .banner {
    height:420px;
    background-color: hotpink;
  }
  .banner-in{
    background-color: #7F8189;
  }
  /*.el-carousel__item:nth-child(1) {*/
  /*  background-image: url("../../assets/lunboone.jpg");*/
  /*}*/
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .sousuo {
    width: 250px;
    float: right;
    margin-right: 30px;
  }
  .yewu_intru {
    margin-top: 20px;
  }
  .yewu_head {
    height: 50px;
    width: 100%;
  }
  .yewu_head span {
    display: block;
    height: 50px;
    line-height: 50px;
    border-left-style: solid;
    border-left-color: #8c8c8c;
    border-left-width: 6px;
    padding-left: 30px;
    color: #7e7f88;
    font-weight: bolder;
  }
  .yewu_content {
    width: 100%;
    position: relative;
  }
  .yewu_item {
    position: relative;
    width: 100%;
    height: 200px;
    /*background-color: #3e78d5;*/
  }
  .yewu_img {
    height: 200px;
  }
  .yewu_img img{
    width: 100%;
    height: 100%;
  }
  .mask{
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0px;
    display:none;
    background-color: rgba(0,0,0,0.5);
    color: #EEEEEE;
    font-size: 20px;
    text-align: center;
  }
  .mask_title{
    margin-top:20%;
    text-align: center;
  }
  .mask_btn{
    display: inline-block;
    text-decoration: none;
    color: #eee;
    width: 100px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    text-align: center;
    border-radius:14px;
    background: #5691fe;
    list-style: none;
    cursor: pointer;
    margin-top: 20px;
    /*margin-left: 25%;*/
  }
  .yewu_item:hover .mask{
    display: block;
  }
  .copyrightContainer {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    background-color: #999999;
    text-align: center;
    /*margin-bottom: 20px;*/
  }
  .copyrightContainer span {
    font-size: 12px;
    display: block;
    height: 50px;
    line-height: 50px;
    color: #f4f4f4;
  }
</style>
