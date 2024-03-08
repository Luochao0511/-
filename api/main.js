// 分类列表
export const categoryList = () => {
  return Promise.resolve([
    {
      'id': '1080747124211781634',
      'parentId': '0',
      'categoryName': 'IT互联网',
      'remark': '一级',
      'list': [
        {
          'id': '1080759411039473666',
          'parentId': '1080747124211781634',
          'categoryName': '后端开发',
          'remark': '',
          'list': [
            {
              'id': '1579638587542495234',
              'parentId': '1080759411039473666',
              'categoryName': 'Spring Cloud',
              'remark': null,
              'list': []
            },
            {
              'id': '1579638531066191873',
              'parentId': '1080759411039473666',
              'categoryName': 'Spring Boot',
              'remark': null,
              'list': []
            },
            {
              'id': '1579638443468152833',
              'parentId': '1080759411039473666',
              'categoryName': 'Java',
              'remark': null,
              'list': []
            }
          ]
        },
        {
          'id': '1080747249965404161',
          'parentId': '1080747124211781634',
          'categoryName': '前端开发',
          'remark': '',
          'list': [
            {
              'id': '1579638646355025922',
              'parentId': '1080747249965404161',
              'categoryName': 'Vue',
              'remark': null,
              'list': []
            },
            {
              'id': '1579638630504751105',
              'parentId': '1080747249965404161',
              'categoryName': 'Css',
              'remark': null,
              'list': []
            },
            {
              'id': '1579638617917644801',
              'parentId': '1080747249965404161',
              'categoryName': 'Html',
              'remark': null,
              'list': []
            }
          ]
        },
        {
          'id': '1573280633505021954',
          'parentId': '1080747124211781634',
          'categoryName': '测试运维',
          'remark': null,
          'list': []
        }
      ]
    },
    {
      'id': '1579636915634200577',
      'parentId': '0',
      'categoryName': '运营管理',
      'remark': null,
      'list': [
        {
          'id': '1579637181070729217',
          'parentId': '1579636915634200577',
          'categoryName': '股权激励',
          'remark': null,
          'list': []
        },
        {
          'id': '1579637132446162945',
          'parentId': '1579636915634200577',
          'categoryName': '经营管理',
          'remark': null,
          'list': []
        },
        {
          'id': '1579637053723271170',
          'parentId': '1579636915634200577',
          'categoryName': '运营模式',
          'remark': null,
          'list': []
        }
      ]
    },
    {
      'id': '1579637958925377537',
      'parentId': '0',
      'categoryName': '安全生产',
      'remark': null,
      'list': [
        {
          'id': '1579638340888059906',
          'parentId': '1579637958925377537',
          'categoryName': '规范制度',
          'remark': null,
          'list': []
        },
        {
          'id': '1579638207052013569',
          'parentId': '1579637958925377537',
          'categoryName': '制度宣贯',
          'remark': null,
          'list': []
        }
      ]
    },
    {
      'id': '1080387521456295937',
      'parentId': '0',
      'categoryName': '职场技能',
      'remark': '一级',
      'list': [
        {
          'id': '1579380998581805058',
          'parentId': '1080387521456295937',
          'categoryName': '职场素养',
          'remark': null,
          'list': []
        },
        {
          'id': '1573552178374705153',
          'parentId': '1080387521456295937',
          'categoryName': '家政服务',
          'remark': '3',
          'list': []
        },
        {
          'id': '1248247267194343426',
          'parentId': '1080387521456295937',
          'categoryName': '办公软件',
          'remark': null,
          'list': []
        }
      ]
    },
    {
      'id': '1080744766018883585',
      'parentId': '0',
      'categoryName': '智能制造',
      'remark': '一级',
      'list': [
        {
          'id': '1080752583811469314',
          'parentId': '1080744766018883585',
          'categoryName': '智能制造技术',
          'remark': '',
          'list': []
        },
        {
          'id': '1080744807735431170',
          'parentId': '1080744766018883585',
          'categoryName': '现代汽车技术',
          'remark': '',
          'list': []
        },
        {
          'id': '1080748559775240194',
          'parentId': '1080744766018883585',
          'categoryName': '工业产品设计',
          'remark': '',
          'list': []
        }
      ]
    },
    {
      'id': '1575093300918087681',
      'parentId': '0',
      'categoryName': '营销管理',
      'remark': null,
      'list': [
        {
          'id': '1575093505876946945',
          'parentId': '1575093300918087681',
          'categoryName': '市场',
          'remark': null,
          'list': []
        },
        {
          'id': '1575093528551354369',
          'parentId': '1575093300918087681',
          'categoryName': '营销',
          'remark': null,
          'list': []
        },
        {
          'id': '1575093546016436226',
          'parentId': '1575093300918087681',
          'categoryName': '产品',
          'remark': null,
          'list': []
        }
      ]
    }
  ]
  )
}
// 首页推荐课程
export const zoneList = (params = {}) => {
  return Promise.resolve([
    {
      'id': '1060472271471714305',
      'zoneName': '职场技能',
      'zoneDesc': '助你提高职场竞争力',
      'courseList': [
        {
          'id': '1579356569910927362',
          'courseName': '计算机知识培训',
          'courseLogo': 'https://file.roncoos.com/education/education/62136cd92d764362a28b8adb99acd2fe.jpg',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        },
        {
          'id': '1579363137788338177',
          'courseName': '零基础学好PPT演讲',
          'courseLogo': 'https://file.roncoos.com/education/education/bf23e504b05d41b2a691fef952c6d1dc.jpg',
          'rulingPrice': 1,
          'coursePrice': 0.1,
          'countBuy': 15,
          'countStudy': 15
        },
        {
          'id': '1579364111802195969',
          'courseName': '人际交往必备的超级读心术',
          'courseLogo': 'https://file.roncoos.com/education/education/4f53576503fd48af8da4bd9ac3943bc3.jpg',
          'rulingPrice': 1,
          'coursePrice': 0.1,
          'countBuy': 8,
          'countStudy': 8
        },
        {
          'id': '1579365153403068417',
          'courseName': '职场情商课-如何与他人建立边界感',
          'courseLogo': 'https://file.roncoos.com/education/education/1b51afcd533f45ecaef04a974444de29.jpg',
          'rulingPrice': 1,
          'coursePrice': 0.1,
          'countBuy': 11,
          'countStudy': 11
        },
        {
          'id': '1579368411496472577',
          'courseName': '新能源汽车维修-电池管理系统检修',
          'courseLogo': 'https://file.roncoos.com/education/education/886b950764104faa898a10b6f78686ca.jpg',
          'rulingPrice': 0.1,
          'coursePrice': 0.1,
          'countBuy': 0,
          'countStudy': 0
        },
        {
          'id': '1579370426691772417',
          'courseName': '消防设施操作员培训',
          'courseLogo': 'https://file.roncoos.com/education/education/a42f90cad3a747d2822982aac5927535.png',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        },
        {
          'id': '1579371195742576641',
          'courseName': '电脑手机维修培训',
          'courseLogo': 'https://file.roncoos.com/education/education/10e9878ee8f349c18f39abd6ab5b113f.jpg',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        },
        {
          'id': '1579372203667382273',
          'courseName': '光电技术培训',
          'courseLogo': 'https://file.roncoos.com/education/education/f7cfdbf22e524ee08df318b0f1194e4a.jpg',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        }
      ]
    },
    {
      'id': '1014339060298440705',
      'zoneName': '互联网技术',
      'zoneDesc': '每一门都是好课程',
      'courseList': [
        {
          'id': '1579352056844017666',
          'courseName': '程序员的进阶攻略',
          'courseLogo': 'https://file.roncoos.com/education/education/e885f83a89444228915593b29aa1b529.png',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        },
        {
          'id': '1579352890940088322',
          'courseName': '分库分表实战之SpringBoot+Sharding-JDBC',
          'courseLogo': 'https://file.roncoos.com/education/education/bb6d4e25dd354e29b94e7375bd918fe0.png',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        },
        {
          'id': '1579353591615348738',
          'courseName': '职业培训-45分钟搞懂PPT技巧',
          'courseLogo': 'https://file.roncoos.com/education/education/d4dfdb17521b4ceba33e5dc666463769.png',
          'rulingPrice': 1,
          'coursePrice': 0.01,
          'countBuy': 6,
          'countStudy': 6
        },
        {
          'id': '1579354467025313793',
          'courseName': '2022会计师考试培训',
          'courseLogo': 'https://file.roncoos.com/education/education/84677201b0e24c769b9f135d111c3c5e.png',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        }
      ]
    },
    {
      'id': '1579374707469737985',
      'zoneName': '工业制造',
      'zoneDesc': '再造业培训',
      'courseList': [
        {
          'id': '1579351271347347457',
          'courseName': '程序员进阶之路从入门到精通',
          'courseLogo': 'https://file.roncoos.com/education/education/de8c24a2dc3548049a89a43f9387617f.png',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        },
        {
          'id': '1579356569910927362',
          'courseName': '计算机知识培训',
          'courseLogo': 'https://file.roncoos.com/education/education/62136cd92d764362a28b8adb99acd2fe.jpg',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        },
        {
          'id': '1579349124530593794',
          'courseName': '轻松学编程 一线名师在线授课',
          'courseLogo': 'https://file.roncoos.com/education/education/623fb6ae52974f4a96d8dfd013ce1d6b.jpg',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        },
        {
          'id': '1579355487289761793',
          'courseName': '平面设计培训',
          'courseLogo': 'https://file.roncoos.com/education/education/e1d76f7c506a49dc809f2e0f5f5e79f8.png',
          'rulingPrice': 0,
          'coursePrice': 0,
          'countBuy': 0,
          'countStudy': 0
        }
      ]
    }
  ]
  )
}

// 首页轮播图
export const carouselList = () => {
  return Promise.resolve(
    [
      {
        'id': '1',
        'gmtCreate': '1899-12-30 01:00:00',
        'gmtModified': '1899-12-30 01:00:00',
        'statusId': 1,
        'sort': 1,
        'carouselTitle': '教育系统',
        'carouselImg': 'https://file.roncoos.com/education/education/6c0a7343c74b4d8eacc134564f665241.jpg',
        'carouselUrl': 'https://www.roncoo.net/education/?from=eduos',
        'carouselTarget': '_blank',
        'beginTime': '2019-01-01 08:00:00',
        'endTime': '2029-12-31 08:00:00'
      },
      {
        'id': '3',
        'gmtCreate': '1899-12-30 01:00:00',
        'gmtModified': '1899-12-30 01:00:00',
        'statusId': 1,
        'sort': 2,
        'carouselTitle': '龙果支付系统',
        'carouselImg': 'https://file.roncoos.com/education/education/3bd5c5eedbd84484b689b98b0b12ff09.jpg',
        'carouselUrl': 'https://www.roncoo.net/enterprise/?from=eduos',
        'carouselTarget': '_blank',
        'beginTime': '2019-01-01 10:02:02',
        'endTime': '2029-12-31 08:00:00'
      }
    ]
  )
}
// 友情链接
export const linkList = () => {
  return Promise.resolve([
    {
      'id': '1143825091871023106',
      'linkName': '在线网络',
      'linkUrl': '',
      'linkTarget': '_blank'
    },
    {
      'id': '1141615695317078018',
      'linkName': '龙果学院',
      'linkUrl': '',
      'linkTarget': '_blank'
    }
  ]
  )
}

