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

    'SAVE': '保存',
    'Cannot die': '不能死',
    'Cancel': '取消',
    'CHEESE': '奶酪',
    'Cheese': '奶酪',
    'Close': '关闭',
    'Combat': '战斗',
    'Completed': '已完成',
    'COMPOST POTION': '堆肥药水',
    'Confirm': '确认',
    'Confirm Password': '确认密码',
    'BEAR BODY': '熊身',
    'BEAR FUR': '熊皮',
    'BEAR GLOVES': '熊手套',
    'BATSKIN MASK': '蝙蝠皮面具',
    'BEAR MASK': '熊面具',
    'BLOOD DIAMOND': '血钻',
    'AXE': '斧子',
    'Back': '返回',
    'BANANAS': '香蕉',
    'ALL': '全部',
    'Amount Left': '剩余数量',
    'Attack': '攻击',
    'Autologin': '自动登录',
    'Autoscroll': '自动滚动',
    'Average Sold Prices': '平均售价',
    'Cooking': '烹饪',
    'APPLE': '苹果',
    'Apple': '苹果',
    'Area': '区域',
    '+10% Bonus Xp': '+10％ 奖励经验',
    'LOADING': '加载中',
    'LOADING MARKET': '加载市场',
    'Login': '登录',
    'Magic': '魔法',
    'MAGIC': '魔法',
    'MAX': '最大',
    'Logout from': '注销从',
    'MINERS': '矿工',
    'Name': '名称',
    'New Account': '新账户',
    'New updates': '新的更新',
    'New Username': '新用户名',
    'None': '无',
    'OFFLINE': '离线',
    'OPEN': '打开',
    'Password': '密码',
    'GAME SHOP': '游戏商店',
    'Fishing': '钓鱼',
    'Forest': '森林',
    'Encounters': '遭遇',
    'Energy Cost': '能量成本',
    'Create': '创建',
    'Confirm Purchase': '购买确认',
    'Brewing': '酿造',
    'Caves': '洞穴',
    'Blah': '废话',
    'Accuracy': '精准',
    'Bind for Myself': '为自己绑定',
    'ACHIEVEMENTS': '成就',
    'Add Item': '增加物品',
    'I wonder how we can charge this crystal, maybe someone can help me out with the situation.': '不知道我们怎么给这块水晶充电，也许有人能帮我解决这个问题。',
    'Hardcore Account': '核心账户',
    'Home': '家',
    'Level': '等级',
    'Locked': '未解锁',
    'Mining': '采矿',
    'Haunted Mansion': '幽灵鬼屋',
    'How many?': '多少个？',
    'Medal': '勋章',
    'Mega Rare': '超级稀有',
    'Automatically login to your account when loading the website.': '加载网站时自动登录到您的帐户。',
    'Built and compiled inside the RPG Maker engine.': '在RPG Maker引擎内部构建和编译。',
    'Chance of finding a pearl.': '发现珍珠的几率。',
    'Change Market Price Limits': '更改市场价格限制',
    'Chat is server dependent.': '聊天取决于服务器。',
    'Common': '公共',
    'Consume': '消耗',
    'Consume how many?': '消耗多少？',
    'Convert item into xp': '将物品转换为经验',
    'Convert to XP': '转换为经验',
    'Cooldown': '冷却',
    'Crafting': '工艺',
    'crafting': '工艺',
    'Defence': '防御',
    'Depleted Crystal': '枯竭的水晶',
    'Description': '描述',
    'DONOR SHOP': '捐赠商店',
    'DRILLS': '钻头',
    'Dropped by Monsters in': '怪物掉落',
    'Enter Value': '输入数值',
    'FAILED TO CONNECT': '连接失败',
    'Farming': '耕作',
    'MEDIUM': '中',
    'HUGE': '很大',
    'LARGE': '大',
    'Northern Fields': '北方领域',
    'PROFILE': '个人资料',
    'SMALL': '小',
    'Skills': '技能',
    'Shops': '商店',
    'Server': '服务器',
    'SELL': '出售',
    'Seed': '种子',
    'Title': '标题',
    'Time Left': '剩余时间',
    'Submit': '提交',
    'Speed': '速度',
    'Username': '用户名',
    'Update Log': '更新日志',
    'QUEST POINTS': '任务点',
    'Puzzle Chest': '益智箱',
    'COOKS BOOK': '烹饪书',
    'Copper': '铜',
    'COPPER': '铜',
    'gold': '黄金',
    'Gold': '黄金',
    'GOLD': '黄金',
    'Gold Bar': '金锭',
    'GOLD BAR': '金锭',
    'GOLD LEAF': '金叶子',
    'Gold Leaf Seeds': '金叶子种子',
    'GOLD STRIPED': '金色条纹',
    'HEAL': '健康',
    'HEART CRYSTAL': '生命水晶',
    'Honey': '蜂蜜',
    'HONEY': '蜂蜜',
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
    "\n": "",
    "								": "",
    "						": "",
    "			": "",
    "	": "",
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
    "							": "",
    "			": "",
    "\n": "",
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
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.+) Max Mana$/, '$1 魔力上限'],
    [/^(.+)\/(.+) online.$/, '$1\/$2 在线。'],
    [/^(.+) Quest Points$/, '$1 任务点'],
    [/^Requires level (.+) mining to obtain.$/, '需要$1级采矿才能获得。'],
    [/^Wed (\d+)$/, '周三 $1'],
    [/^Thu (\d+)$/, '周四 $1'],
    [/^Fri (\d+)$/, '周五 $1'],
    [/^Sat (\d+)$/, '周六 $1'],
    [/^Sun (\d+)$/, '周日 $1'],
    [/^([\d\.,]+) energy$/, '$1 能量'],
    [/^([\d\.,]+) xp$/, '$1 经验'],
    [/^([\d\.,]+) XP$/, '$1 经验'],
    [/^([\d\.,]+) heat$/, '$1 热'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return "";

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
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || subnode.childNodes.length == 0) {
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
            if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                mutation.target.innerText = cnItem(mutation.target.innerText);
            } else if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "TEXTAREA") {
                        if (!node.childNodes || node.childNodes.length == 0) {
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
