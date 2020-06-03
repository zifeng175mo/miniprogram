// pages/help/help.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        radio1: '1',
        icon: {
            normal:
                'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
            active:
                'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onChange(event) {
        console.log('onchange');
        const { key } = event.currentTarget.dataset;
        this.setData({ [key]: event.detail });
    }
});
