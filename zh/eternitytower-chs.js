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
    'karma': '业',
    'Level Up': '升级',
    'Progress': '进度',
    'Recent Battles': '最近战斗',
    'Recipes': '配方',
    'Reforge Item': '重铸物品',
    'Library': '图书馆',
    '20% chance to attack twice.': '20%几率可以攻击两次',
    'anyone around who wants to try the boss?': '周围有谁想试试Boss吗？',
    'Back to loadout': '返回备战',
    'Seeds': '种子',
    'Sell Items': '出售物品',
    'Show More': '显示更多',
    'Show Chat': '显示聊天',
    'stone furnace': '石炉',
    'stone pylon': '石塔',
    'stone wall': '石墙',
    'The books did move my xp the first time, but I wasn\'t getting bonus so I didn\'t notice the amount': '这些书确实第一次移动我的经验，但我没有得到奖金，所以我没有注意到金额',
    'The Info & Data page (link in Overview page) now has complete PQ enemy info for all levels.': '“信息和数据”页面（“概述”页面中的链接）现在具有所有级别的完整PQ敌人信息。',
    'There won\'t be any data rollbacks though and the problem has been fixed.  Happy gaming!': '不会有任何数据回滚，问题已得到解决。 游戏愉快！',
    'There\'s been a lot of changes since then :': '从那时起，发生了很多变化：',
    'Type': '类型',
    'Woodcutting Items': '伐木物品',
    'woops': '啊呀',
    'Woodcutters': '伐木工',
    'Woodcutters collect wood over time': '随着时间的推移，伐木工人收集木材',
    'Woodcutters inherit the stats from the axe given to them.': '伐木工从给予他们的斧头那里继承属性。',
    'Mine Pit': '矿井',
    'Baby tips on levelling crafting?  Daggers look like a good way to me': '关于练级制作的新手提示？ 匕首对我来说是个好方法',
    'Count': '数量',
    'Description': '描述',
    'Furnaces': '熔炉',
    'Furthest Community Floor': '社区最高层数',
    'Global buffs affect all players.': '全局增益影响所有玩家。',
    'Gold': '金子',
    'Icon': '图标',
    'Invite': '邀请',
    'Total DPH': '总DPH',
    'tin prospector': '锡勘探者',
    'tin miner': '锡矿工',
    'Requirements': '要求',
    'primitive miner': '原始矿工',
    'Miners passively collect ores for you, over time.': '随着时间的推移，矿工们会被动地收集矿石。',
    'Miners gain XP when their associated ore is mined.': '当矿石开采时，矿工会获得经验。',
    'Actions': '行动',
    'Adventure (AFK': '冒险(AFK',
    'A basic pickaxe. Used for mining': '一个基本的镐。 用于采矿',
    'Game': '游戏',
    'GAME': '游戏',
    'General': '常规',
    'Global town dwelling buff Lv.': '全局城镇住宅Buff等级。',
    'Global town library buff Lv.': '全局城镇图书馆Buff等级。',
    'Global town lumber yard buff Lv.': '全局城镇伐木场Buff等级。',
    'Global town observatory buff Lv.': '全局城镇天文台Buff等级。',
    'Gold essence can be farmed in tower or PQ or mined or crafted (inefficiently).  Each method has their own difficulty.': '金精华可以在塔或PQ中养殖或开采或制作（效率低下）。 每种方法都有自己的难度。',
    'Tower (Group': '塔 (组',
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
    '↵                                        GAME↵                                     ': '游戏',
    '↵          Prospectors (': '勘探者 (',
    '↵                    Disable condensed chat↵                 ': '禁用精简聊天',
    '↵            Idol Bonus': '偶像奖励',
    '↵            Level Bonus': '等级奖励',
    '↵          Miners (': '矿工 (',
    '\n                Fire\n             ': '辞退',
    '\n                Hire\n             ': '雇佣',
    '\n                Level': '等级',
    '\n          Confirm you want to retire?\n       ': '你确定要退休吗?',
    '\n          ago\n       ': '前',
    '\n                                      Game\n                                   ': '游戏',
    '\n          Equipment\n       ': '装备',
    '\n            Join\n         ': '加入',
    '\n            Disable Multihit\n         ': '禁用多次',
    'minutes\n             ': '分钟',
    'minutes\n         ': '分钟',
    '\n        Woodcutters\n     ': '伐木工',
    '\n        How many times a minute the woodcutter will chop wood.\n     ': '樵夫每分钟砍柴多少次。',
    '\n        No seeds, buy some in the shop.\n     ': '没有种子，去商店买一些。',
    '\n      Equipped Abilities\n   ': '装备能力',
    '\n        Slash for 100% damage.': '大幅削减100％伤害。',
    '\n        You can learn abilities by crafting tomes in inscription, then come back to this page and read it.\n     ': '你可以通过制作卷轴来学习能力，然后回到这个页面阅读它。',
    'Requires:\n       ': '需要：',
    '\n          Off Hand\n       ': '副手',
    '\n          Neck\n       ': '脖子',
    '\n          Legs\n       ': '腿部',
    '\n          Head\n       ': '头部',
    '\n          Fought\n       ': '战斗',
    '\n          Chest\n       ': '胸部',
    '\n      Abilities\n     ': '能力',
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
    '\n                  Woodcut\n               ': '伐木',
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
    '\n      Gear\n     ': '装备',
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
	[/^Level Up! You are now level (\d+) mining$/, '升级了！ 你现在达到了采矿$1级'],
    [/^Level Up! You are now level (\d+) astronomy$/, '升级了！ 你现在达到了天文学$1级'],
    [/^Level Up! You are now level (\d+) crafting$/, '升级了！ 你现在达到了工艺$1级'],
	[/^Requires level (\d+) magic$/, '需要$1级魔法'],
    [/^Requires level (\d+) attack$/, '需要$1级攻击'],
    [/^Requires level (\d+) defense$/, '需要$1级防御'],
    [/^(\d+) Battles$/, '$1 次战斗'],
    [/^(\d+) damage$/, '$1 伤害'],
    [/^([\d\.]+)\% Inscription XP$/, '$1\% 铭文经验'],
    [/^([\d\.]+)\% Astronomy XP$/, '$1\% 天文学经验'],
    [/^([\d\.]+)\% Farming XP$/, '$1\% 耕作,经验'],
    [/^([\d\.]+)\% faster woodcutters$/, '$1\% 伐木工速度'],
    [/^([\d\.]+) energy regen$/, '$1 能量回复'],
    [/^([\d\.]+) energy storage$/, '$1 能量存储'],
    [/^(\d+) damage$/, '$1 伤害'],
    [/^Mon (\d+)$/, '周一 $1'],
    [/^Tue (\d+)$/, '周二 $1'],
    [/^Wed (\d+)$/, '周三 $1'],
    [/^Thu (\d+)$/, '周四 $1'],
    [/^Fri (\d+)$/, '周五 $1'],
    [/^Sat (\d+)$/, '周六 $1'],
    [/^Sun (\d+)$/, '周日 $1'],
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
