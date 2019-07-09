/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Mine': '挖矿',
    'All done': '全部完成',
    'Fixed.': '已修复',
    'Hide': '隐藏',
    'Test': '测试',
    'sounds good!': '声音不错！',
    'Send': '发送',
    'Yes': '确定',
    'SORRY': '抱歉',
    'thank you': '感谢你',
    'You haven\'t learned the inscription skill yet': '你还没有学会铭文技能',
    'Name': '名称',
    'Room': '房间',
    'Defeat': '失败',
    'Tower': '塔楼',
    'Consumables': '消耗品',
    'Combat Levels': '战斗等级',
    'Cancel': '取消',
    'Can join me if you like': '如果你愿意，可以加入我',
    'Can you re-invite?': '你可以重新邀请吗？',
    'Hidden': '隐藏',
    'Unhidden': '未隐藏',
    'Achievements': '成就',
    'Adventures': '冒险',
    'Farm Plots': '农田',
    'Info & Data': '信息&数据',
    'Shop': '商店',
    'Sign Out': '退出登录',
    'Updates': '更新',
    'WARNING': '警告',
    'You are currently on a guest account, if you sign off before setting a username and password you will not be able to access your account again': '您目前使用的是游客帐户，如果您在设置用户名和密码之前注销，则无法再次访问您的帐户',
    'Guest Account Deletion': '游客帐户删除',
    'Inscription Workbench': '铭文工作台',
    'F.A.Q.': '常见问题',
    'Empty': '空',
    'Crafting Workbench': '制作工作台',
    'Profile': '个人资料',
    'Reforging': '重铸',
    'So many names!': '这么多名字！',
    'Sure': '当然',
    'sure': '当然',
    'Thanks!': '感谢!',
    'I\'ll go': '我会去',
    'New Updates!': '有更新！',
    'No adventures for this category': '没有这一类的冒险',
    'Empty Plot': '空地块',
    'Locked Plot': '未解锁地块',
    'Mining Summary': '采矿摘要',
    'potato is gone': '土豆不见了',
    'Loadout': '备战',
    'Skins': '皮肤',
    'Back to lobby': '回到大厅',
    'Available as an afk body if anyone wants me in their group': '如果有人想让我加入他们的团体，我可以加入afk',
    'Any tips*': '一些提示*',
    'any rabbit will work': '任何兔子都会工作',
    'Box Of Gems': '一箱宝石',
    'Bunch Of Gems': '一些宝石',
    'Can only be applied to an item once': '只能应用于一个项目一次',
    'Champion = ?': '冠军 = ?',
    'Charm': '魅力',
    'Come get me :D': '快来找我 :D',
    'Crafting: Inactive': '工艺:空闲中',
    'Cupid': '丘比特',
    'Edit': '修改',
    'Energy Use': '能源使用',
    'enhancer key': '增强键',
    'Enhancer Key': '增强键',
    'Floor': '层',
    'Free Gems': '免费宝石',
    'Books': '书',
    'Paper': '纸',
    'Pigments': '颜料',
    'Crafting': '工艺',
    'All': '全部',
    'Mining': '采矿',
    'Woodcutting': '伐木',
    'Combat': '战斗',
    'Astronomy': '天文学',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '↵          Off Hand↵       ': '副手',
    '↵          Neck↵       ': '脖子',
    '↵          Legs↵       ': '腿部',
    '↵          Head↵       ': '头部',
    '↵          Fought↵       ': '战斗',
    '↵          Chest↵       ': '胸部',
    '↵      Abilities↵     ': '能力',
    '\n          Main Hand\n       ': '主手',
    '\n              No contributions\n           ': '没有贡献',
    '\n              Level': '等级',
    '\n            Battle\n         ': '战斗',
    '\n          Visit the shop to become a member.\n       ': '访问商店查看如何成为会员。',
    '\n          Eternity Tower\n       ': '永恒之塔',
    '\n                  Battle\n                 ': '战斗',
    '\n                    Disable floating text\n                 ': '禁用浮动文本',
    '\n                    Disable number shorthand\n                 ': '禁用数字速记',
    '\n                    Enable summary list\n                 ': '启用摘要列表',
    '\n                    Hide recipe consumables\n                 ': '隐藏配方耗材',
    '\n                    Load More\n                 ': '加载更多',
    '\n                    Need/Greed: auto-greed\n                 ': '需求/贪婪：自动贪婪',
    '\n                    Rankings\n                 ': '排行榜',
    '\n                  Chat\n               ': '聊天',
    '\n                  Craft\n               ': '工艺',
    '\n                  Farm\n               ': '农场',
    '\n                  Inscribe\n               ': '铭文',
    '\n                  Magic\n               ': '魔法',
    '\n                  Mine\n               ': '采矿',
    '\n                  Server: Seasonal\n               ': '服务器：季节性',
    '\n                  Town\n               ': '小镇',
    '\n                  Woodcut\n               ': '木刻',
    '\n                Add\n             ': '添加',
    '\n                Announcements\n             ': '通告',
    '\n                Game\n             ': '游戏',
    '\n                General\n             ': '常规',
    '\n                Help\n             ': '帮助',
    '\n                LFG\n             ': '',
    '\n                Party\n             ': '队伍',
    '\n                Server\n             ': '服务器',
    '\n              Announcements\n           ': '通告',
    '\n              Game\n           ': '游戏',
    '\n              General\n           ': '常规',
    '\n              Help\n           ': '帮助',
    '\n              LFG\n           ': 'LFG',
    '\n              Party\n           ': '队伍',
    '\n              Server\n           ': '服务器',
    '\n            Friends\n           ': '朋友',
    '\n            General\n         ': '常规',
    '\n            Set username and password now\n         ': '现在设置用户名和密码',
    '\n            You have no friends\n         ': '你没有朋友',
    '\n          General\n       ': '常规',
    '\n      Sign Out\n   ': '退出登录',
    '\n          You can plant seeds here': '你可以在这里播种',
    '\n          Unlock this plot by becoming a member.': '通过成为会员来解锁这个地块。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//逗号：([\d\.,:]+)
var cnRegReplace = new Map([
	[/^requires (\d+) more research points$/, '需要$1个研究点'],
    [/^\n                                    Mon ([\d\.,:]+)am\n                                 $/, '周一 上午 $1'],
    [/^\n                                    Mon ([\d\.,:]+)pm\n                                 $/, '周一 下午 $1'],
    [/^\n                                    Tue ([\d\.,:]+)am\n                                 $/, '周二 上午 $1'],
    [/^\n                                    Tue ([\d\.,:]+)pm\n                                 $/, '周二 下午 $1'],
    [/^\n                                    Wed ([\d\.,:]+)am\n                                 $/, '周三 上午 $1'],
    [/^\n                                    Wed ([\d\.,:]+)pm\n                                 $/, '周三 下午 $1'],
    [/^\n                                    Thu ([\d\.,:]+)am\n                                 $/, '周四 上午 $1'],
    [/^\n                                    Thu ([\d\.,:]+)pm\n                                 $/, '周四 下午 $1'],
	[/^\n                                    Fri ([\d\.,:]+)am\n                                 $/, '周五 上午 $1'],
	[/^\n                                    Fri ([\d\.,:]+)pm\n                                 $/, '周五 下午 $1'],
    [/^\n                                    Sat ([\d\.,:]+)am\n                                 $/, '周六 上午 $1'],
    [/^\n                                    Sat ([\d\.,:]+)pm\n                                 $/, '周六 下午 $1'],
    [/^\n                                    Sun ([\d\.,:]+)am\n                                 $/, '周日 上午 $1'],
    [/^\n                                    Sun ([\d\.,:]+)pm\n                                 $/, '周日 下午 $1'],
	[/^The boss on floor (\d+) has been defeated!\n                Floor (\d+) is now unlocked.$/, '$1层的Boss已被击败！$2层已解锁。'],
	[/^\+ (\d+) days\n       $/, '\+ $1 天'],
	[/^workers: (\d+)\/$/, '工人：$1\/'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix];
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length - text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return arguments[0];
        }
    }

    //尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

transTaskMgr = {
    tasks: [],
    addTask: function (node, attr, text) {
        this.tasks.push({
            node,
            attr,
            text
        })
    },
    doTask: function () {
        let task = null;
        while (task = this.tasks.pop())
            task.node[task.attr] = task.text;
    },
}

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "TEXTAREA" && subnode.innerHTML && subnode.innerText) {
                if (subnode.innerHTML === subnode.innerText) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                    //console.log(subnode);
                } else {
                    TransSubTextNode(subnode);
                }
            } else {
                // do nothing;
            }
        }
    }
}

! function () {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };
    let targetNode = document.body;
    //汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();
    //监听页面变化并汉化动态内容
    let observer = new MutationObserver(function (e) {
        //window.beforeTransTime = performance.now();
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.innerHTML && mutation.target.innerText && mutation.target.innerHTML === mutation.target.innerText) {
                mutation.target.innerText = cnItem(mutation.target.innerText);
            } else if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "TEXTAREA" && node.innerHTML && node.innerText) {
                        if (node.innerHTML === node.innerText) {
                            node.innerText = cnItem(node.innerText);
                        } else {
                            TransSubTextNode(node);
                            transTaskMgr.doTask();
                        }
                    }
                }
            }
        }
        observer.observe(targetNode, observer_config);
        //window.afterTransTime = performance.now();
        //console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);
}();
