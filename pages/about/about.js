
Page({

    /**
     * 页面的初始数据
     */
    data: {
        about_content: "YXDZTHZ",
        version: 'V1.0',
        img: '/media/img/1.jpg',
        title: 'WaterDrop--一款可定制化的打卡小程序',
        content: '【WaterDrop】是一款用户定制化的打卡小程序，在这里你可以发挥你的想象，实现你的创意，打造你的专属卡片，' +
            '还可以在卡片市场中找寻各种独特的、充满创意的卡片。' +
            '每完成一个卡片，它都会给你祝贺哦~' +
            '它也会持续更新换代，满足您的各种需求~',
        screen_height: 10,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getSystemInfo({
            success(res) {
                this.screen_height = res.screen_height;
                this.screen_width = res.screen_width;
                this.screen_height = 750/this.screen_width*this.screen_height;
            }
        })
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
