export default {
  async nuxtServerInit({ dispatch }) {
    await dispatch('GET_NAV')
    await dispatch('GET_WEBSITE')
  },
  GET_NAV(store) { // 获取导航信息
    return new Promise((resolve, reject) => {
      store.state.navList = [
        {
          id: '1064696486139854849',
          navTitle: '首页',
          navUrl: '/index',
          target: '_self'
        },
        {
          id: '1064696486139854850',
          navTitle: '课程中心',
          navUrl: '/list',
          target: '_self'
        },
        {
          id: '1064696486139854851',
          navTitle: '个人中心',
          navUrl: '/account'
        }
      ]
      resolve([
        {
          id: '1064696486139854849',
          navTitle: '首页',
          navUrl: '/index',
          target: '_self'
        },
        {
          id: '1064696486139854850',
          navTitle: '课程中心',
          navUrl: '/list',
          target: '_self'
        },
        {
          id: '1064696486139854851',
          navTitle: '个人中心',
          navUrl: '/account',
          target: '_self'
        }
      ])
    })
  },
  GET_WEBSITE(store) { // 获取网站信息`
    return new Promise((resolve, reject) => {
      store.state.websiteInfo = {
        websiteDomain: '',
        websiteName: '学院-致力于打造一个各行业都适用的分布式在线教育系统',
        websiteDesc: '致力于打造一个各行业都适用的分布式在线教育系统。',
        websiteLogo: 'https://static.roncoos.com/os/10.png',
        websiteIcon: '',
        websiteIcp: '粤ICP备485615615号 -1',
        websitePrn: '粤公网安备却8484848484号',
        websitePrnNo: '44010602005928',
        websiteCopyright: '© 2016-现在 网络 All Rights Reserved',
        websiteUserAgreement: ''
      }
      resolve({
        websiteDomain: '',
        websiteName: '学院-致力于打造一个各行业都适用的分布式在线教育系统',
        websiteDesc: '致力于打造一个各行业都适用的分布式在线教育系统。',
        websiteLogo: 'https://static.roncoos.com/os/10.png',
        websiteIcon: '',
        websiteIcp: '粤ICP备485615615号 -1',
        websitePrn: '粤公网安备却8484848484号',
        websitePrnNo: '44010602005928',
        websiteCopyright: '© 2016-现在 网络 All Rights Reserved',
        websiteUserAgreement: ''
      })
    })
  },
  GET_USERINFO(store, cb) {
    store.commit('SET_USER', {})
    cb(store)
  },
  REDIRECT_LOGIN(store, codeNo) {
    store.commit('SET_TEMPORARYURL')
    store.commit('SIGN_OUT')
    this.$router.push({ name: 'login' })
  }
}
