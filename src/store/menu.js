const menu = [
    {
        id:0,
        name:'首页',
        route:'/',
        subMenu:[]
    },{
        id:1,
        name:'关于我们',
        route:'/about',
        subMenu:[{
            id:'100',
            name:'公司简介',
            tab:'introduce',
        },{
            id:'102',
            name:'企业文化',
            tab:'culture',
        },{
            id:'103',
            name:'公司资质',
            tab:'certificate'
        }]
    },{
        id:2,
        name:'服务项目',
        route:'/service',
        subMenu:[{
            id:'200',
            name:'礼仪服务',
            tab:'etiquette ',
        },{
            id:'201',
            name:'模特服务',
            tab:'model',
        },{
            id:'202',
            name:'会展服务',
            tab:'exhibition',
        },{
            id:'203',
            name:'乐器服务',
            tab:'musical ',
        },{
            id:'204',
            name:'歌手演出',
            tab:'singer',
        },{
            id:'205',
            name:'人偶装扮',
            tab:'puppet',
        },{
            id:'206',
            name:'化妆培训',
            tab:'makeup',
        },{
            id:'207',
            name:'文艺演出',
            tab:'literature',
        },{
            id:'208',
            name:'舞蹈演出',
            tab:'dance',
        },{
            id:'209',
            name:'广告代言',
            tab:'advertisement',
        },{
            id:'210',
            name:'主持讲解',
            tab:'host',
        },{
            id:'211',
            name:'双语礼仪',
            tab:'ceremony',
        },]
    },{
        id:3,
        name:'客户案例',
        route:'/case',
        subMenu:[{
            id:'301',
            name:'案例展示',
            tab:'case',
        }]
    },{
        id:4,
        name:'设备展示',
        route:'/show',
        subMenu:[{
            id:'401',
            name:'灯光设备',
            tab:'lighting',
        },{
            id:'402',
            name:'音响设备',
            tab:'sound',
        },{
            id:'403',
            name:'舞台设备',
            tab:'stage',
        }]
    },{
        id:5,
        name:'最新活动',
        route:'/active',
        subMenu:[{
            id:'500',
            name:'招聘兼职',
            tab:'recruit',
        },{
            id:'501',
            name:'行业资讯',
            tab:'information',
        }]
    },{
        id:6,
        name:'招聘兼职',
        route:'/resume',
        subMenu:[{
            id:'600',
            name:'礼仪模特',
            tab:'lymt',
        },{
            id:'601',
            name:'活动充场',
            tab:'hdcc',
        },{
            id:'602',
            name:'平拍网拍',
            tab:'ppwp',
        },{
            id:'603',
            name:'局部模特',
            tab:'jbmt',
        },{
            id:'604',
            name:'书画展',
            tab:'shz',
        },{
            id:'605',
            name:'人偶装扮',
            tab:'information',
        },{
            id:'606',
            name:'COSPLAY装扮',
            tab:'cosplay',
        },{
            id:'607',
            name:'群众演员',
            tab:'qzyy',
        },{
            id:'608',
            name:'平面模特',
            tab:'pmmt',
        },{
            id:'609',
            name:'影视演员',
            tab:'ysyy',
        },{
            id:'610',
            name:'现场协助',
            tab:'xcxz',
        },{
            id:'611',
            name:'舞蹈演员',
            tab:'wdyy',
        },{
            id:'612',
            name:'摄影化妆',
            tab:'syhz',
        },{
            id:'613',
            name:'单双语礼仪',
            tab:'dsyly',
        },{
            id:'614',
            name:'演唱会及粉丝',
            tab:'ychjfs',
        },{
            id:'615',
            name:'演出歌手',
            tab:'ycgs',
        }]
    },{
        id:7,
        name:'在线留言',
        route:'/message'
    },{
        id:8,
        name:'联系我们',
        route:'/contact'
    }
]

export default menu