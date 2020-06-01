// components/UserInfo/UserInfo.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        openId: {
            type: String,
            value: ''
        },
        name: {
            type: String,
            value: '无'
        },
        gender: {
            type: Intl,
            value: 0
        },
        avatar: {
            type: String,
            value: ''
        },
        signature: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        openId: '9212881',
        name: '流水恋落花',
        gender: 1,
        avatar: '/media/img/1.jpg',
        signature: '我思故我在~'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // wx.getUserInfo({
        //     success: function(res) {
        //         let userInfo = res.userInfo
        //         this.name = userInfo.nickName
        //         this.avatar = userInfo.avatarUrl
        //         this.gender = userInfo.gender //性别 0：未知、 1：男、2：女
        //     }
        // })
    }
})
