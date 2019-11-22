<template>
  <view class='main'>
    <text>题目编号：{{qid}}</text>
    <view class='grids'>
      <view v-for='(r, i) in board' :key='i' class='row'>
        <view class='cell' v-for='(c, j) in r' :key='j' :class="{empty: board[i][j] === '', selected: i === selectedX && j === selectedY,gray: initPos.includes(`${i},${j}`)}"
          @click='clickGrid(i, j)'>
          {{c}}
        </view>
      </view>
    </view>

    <view class='input-row'>
      <view class='input-num' v-for='(i, k) in numbers' :key='k' @click='handleNumBtn(i)'>{{i}}</view>
    </view>
    <image src="../../static/restart.png" mode="aspectFill" class='restartBtn' @click='restart()'></image>
    <button class='shareBtn' open-type="share">分享</button>
  </view>
</template>

<script>
  const sample = require('lodash.sample')
  const MAXN = 4;
  const quections = require('data/quections').data

  export default {
    data() {
      return {
        qid: 10001,
        board: [],
        initPos: [],
        numbers: [1, 2, 3, 4, "X"],
        selectedX: -1,
        selectedY: -1,
      };
    },
    methods: {
      initData(qid) {
        this.selectedX = -1
        this.selectedY = -1
        this.board = this.getBoard(qid)
        this.initPos = []
        for (let i = 0; i < this.board.length; i++) {
          for (let j = 0; j < this.board[i].length; j++) {
            if ((this.board[i][j]) !== '') {
              this.initPos.push(`${i},${j}`)
            }
          }
        }
        this.qid = qid
      },
      getBoard(qid) {
        console.log(quections, qid, quections['' + qid])
        let tt = quections['' + qid]
        let res = []
        for (let i = 0; i < MAXN; i++) {
          let row = []
          for (let j = 0; j < MAXN; j++) {
            row.push(tt[i][j] === '.' ? '' : tt[i][j])
          }
          res.push(row)
        }
        return res
      },
      clickGrid(i, j) {
        console.log(i, j)
        if (this.initPos.includes(`${i},${j}`)) {
          return
        }
        this.selectedX = i
        this.selectedY = j
      },
      handleNumBtn(i) {
        if (this.selectedX === -1 || this.selectedY === -1) {
          return
        }
        this.board[this.selectedX][this.selectedY] = i === 'X' ? '' : '' + i
        this.checkIsPassGame(this.selectedX, this.selectedY, this.board[this.selectedX][this.selectedY])
        this.selectedX = -1
        this.selectedY = -1
      },
      checkIsPassGame(row, col, _text) {
        let _row = this.selectedX,
          _col = this.selectedY;
        this.curRow = '';
        this.curCol = '';
        this.isErr = false;
        this.optionNow = {
          x: '',
          y: '',
        }
        this.optionNowInRow = {
          x: '',
          y: '',
        }
        this.optionNowInCol = {
          x: '',
          y: '',
        }
        //*****************************检查行
        //根据当前格子进行赋值
        this.board[_row][_col] = _text;
        let rowCheck = Object.assign([], this.board[_row]);
        this.checkShow = false;
        for (let i = 0, len = rowCheck.length; i < len; i++) {
          //如果值一样，但是坐标不一样，就是填写错误
          if (_text === rowCheck[i] && _col !== i) {
            this.isErr = true;
            //记录当前格子的信息
            this.optionNow = {
              x: _row,
              y: _col,
            }
            //记录和当前格子同一行，以及同一个值的格子的坐标
            this.optionNowInRow = {
              x: _row,
              y: i,
            }
          }
        }
        //*****************************检查列
        let colCheck = [];
        //首先把每一行的那一列的数值保存起来
        for (let i = 0, len = this.board.length; i < len; i++) {
          colCheck.push(this.board[i][_col]);
        }
        //遍历检查
        for (let i = 0, len = colCheck.length; i < len; i++) {
          //如果值一样，但是坐标不一样，就是填写错误
          if (_text === colCheck[i] && _row !== i) {
            this.isErr = true;
            this.isShake = true;
            //记录和当前格子同一列，以及同一个值的格子的坐标
            this.optionNowInCol = {
              x: i,
              y: _col,
            }
          }
        }
        let gridCheck = []
        for (let i = parseInt(_row / 2) * 2; i < parseInt(_row / 2) * 2 + 2; i++) {
          for (let j = parseInt(_col / 2) * 2; j < parseInt(_col / 2) * 2 + 2; j++) {
            gridCheck.push(this.board[i][j]);
          }
        }
        // console.log(gridCheck)
        //如果发现的同样的
        if (this.isErr) {
          return
        }
        for (let i = 0; i < MAXN; i++) {
          let r = this.board[i]
          console.log(r)
          let s = new Set([...r])
          console.log(s)
          if (s.size < MAXN || s.has('')) {
            console.log('行没完成', i);
            return
          }
        }
        for (let i = 0; i < MAXN; i++) {
          let c = []
          for (let j = 0; j < MAXN; j++) {
            c.push(this.board[j][i])
          }
          console.log(c)
          let s = new Set([...c])
          console.log(s)
          if (s.size < MAXN || s.has('')) {
            console.log('列没完成', i);
            return
          }
        }
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            let r = [this.board[i * 2][j * 2], this.board[i * 2 + 1][j * 2],
              this.board[i * 2][j * 2 + 1], this.board[i * 2 + 1][j * 2 + 1]
            ]
            console.log(r)
            let s = new Set([...r])
            console.log(s)
            if (s.size < MAXN || s.has('')) {
              console.log('行没完成', i);
              return
            }
          }
        }

        console.log('all complete')
        this.playAudio('static/audios/victory.wav')

        uni.showModal({
          title: '成功',
          content: `恭喜您成功通关!`,
          showCancel: true,
          cancelText: '取消',
          confirmText: '下一题',
          success: res => {
            if (res.confirm) {
              this.initData(this.qid + 1)
            } else {
              this.initData(this.qid)
            }
          }
        });
      },
      restart() {
          uni.showModal({
          title: '',
          content: `您确定要重新开始？`,
          showCancel: true,
          cancelText: '取消',
          confirmText: '确定',
          success: res => {
            if (res.confirm) {
             this.initData(this.qid)
            } 
          }
        });
      },
      playAudio(src) {
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true
        innerAudioContext.src = src
      }
    },
    onLoad() {
      this.opType = this.$mp.query.qid
      console.log(this.$mp.query.qid)
      if (this.$mp.query.qid) {
        this.qid = parseInt(this.$mp.query.qid)
        console.log('xxg', this.qid)
      }
      this.initData(this.qid)
    },
    onShareAppMessage: function(options) {
      console.log('分享的代码！！')
      return {
        path: `pages/sudoku/sudoku?qid=${this.qid}`,
        title: '来比比谁更聪明？'
      }
    }
  }
</script>

<style lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  // flex flex-direction align-center padding justify-center
  page {
    padding-top: 40px;
  }

  .grids {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .cell {
    // background: #e5e5e5;
    // /* 长宽超过此值，在ide中的ipad机型上以及真机的荣耀8手机上，会出现整体高度不足的问题，某些cell就会被压缩导致框线丢失和方框变扁 */
    width: 108rpx;
    height: 108rpx;
    line-height: 104rpx;
    font-size: 20px;
    font-color: blue;
    text-align: center;
    border: 2rpx solid lightgray;
  }

  .empty {
    background: white;
  }

  .selected {
    background: pink;
  }
  
  .gray{
    background: lightgray;
  }
  
  .cell:first-child {
    border-left: solid;
  }

  .cell:nth-child(2n) {
    border-right: solid;
  }

  .row:first-child {
    border-top: solid;
  }

  .row:nth-child(2n) {
    border-bottom: solid;
  }

  /*============================================*/
  .btn {
    background: white;
    border-radius: 10rpx;
    border-width: 0;
    padding: 0;
    margin: 0;
    width: 150rpx;
    height: 80rpx;
    /*text-align: center;*/
    display: inline-block;
  }

  .btn-hover {
    background: #bbbbbb;
    color: white;
  }

  .head {
    display: flex;
    justify-content: space-between;
    padding-top: 25rpx;
    padding-bottom: 25rpx;
  }

  .input-row {
    display: flex;
    justify-content: space-around;
    margin-top: 25rpx;
    width: 80vw;
  }

  .input-num {
    display: inline-block;
    width: 100rpx;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    border: 2rpx solid skyblue;
  }

  .input-num.red {
    color: red;
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    padding-top: 25rpx;
    margin-bottom: 25rpx;
  }
  .restartBtn {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
  }
</style>
