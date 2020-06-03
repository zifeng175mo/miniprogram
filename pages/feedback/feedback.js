// pages/feedback/feedback.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

const message = '代码是写出来给人看的，附带能在机器上运行';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: '',
        radio1: '1',
        title: '确认',
        message: '您确认要提交这个反馈吗？'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // wx.request({
        //   url: '',
        //   data: {
        //     openid: '',
        //     type: 'cardlist'
        //   },
        //   method: 'POST',
        //   header: {
        //     'content-type': 'application/json' //默认值
        //   },
        //   success: res=> {
        //     this.setData({
        //
        //     })
        //
        //   },
        //   fail: res=> {
        //   }
        // })
    },

    onChange(event) {
        const { key } = event.currentTarget.dataset;
        this.setData({
           [key]: event.detail
        });
    },

    onClickConfirm() {
        Dialog.confirm({
            title: '标题',
            message
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
