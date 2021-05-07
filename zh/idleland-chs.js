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
    'Gold Boost': '金币提升',
    'HP': '生命值',
    'IdleLands': '放置大陆',
    'DEX': '命中',
    'CON': '体质',
    'INT': '智力',
    'AGI': '敏捷',
    'It': '它',
    'Fish': '鱼',
    'XP': '经验',
    'XP Boost': '经验提升',
    'Vital Stats': '生命属性',
    'STR': '力量',
    'Stats': '统计',
    'LUK': '幸运',
    'Logout': '退出登录',
    'Map': '地图',
    'Mic': '杂项',
    'Milky': '乳白色',
    'Me': '我',
    'Manly Danger': '',
    'Chat': '聊天',
    'Gear': '装备',
    'Settings': '设置',
    'Support IdleLands on Patreon!': '支持本游戏通过Patreon',
    'until next stamina': '到下一点耐力',
    'Equipment': '装备',
    'feet': '脚部',
    'GOLD': '金币',
    'hands': '手部',
    'head': '头部',
    'body': '身体',
    'Inventory': '库存',
    'legs': '腿部',
    'neck': '脖子',
    'Premium': '高级',
    'Active Pet': '活跃宠物',
    'Active Pet Gear': '活跃宠物装备',
    'Active Pet Stats': '活跃宠物属性',
    'Adventures': '冒险',
    'All Pets': '所有宠物',
    'Attribute: Cursed': '属性:诅咒',
    'Accomplishments': '成就',
    'Item Find % Boost': '找到物品提升%',
    'Item Find Level Boost': '找到物品等级提升',
    'Item Find Quality Boost': '找到物品质量提升',
    'offhand': '副手',
    'Pets': '宠物',
    'Pet Enhancement Materials': '宠物增强材料',
    'Wilderness': 'Norkos /荒野',
    'Orange Crystal (': '橙色水晶（',
    'Blue Crystal (': '蓝色水晶（',
    'Green Crystal (': '绿色水晶（',
    'Materials & Scrolls': '材料&卷轴',
    'Moderation': '适度',
    'astronomical entity': '天文单位',
    'ILP Purchases': 'ILP 购买',
    'male': '男',
    'Max Stamina Boost': '最大耐力提升',
    'Stamina': '耐力',
    'Astral Gate': '星界之门',
    'Adventure Log': '冒险日志',
    'Character': '角色',
    'Choices': '选择',
    'Guild': '公会',
    'Guilds': '公会',
    'Gain XP based on your LUK.': '根据您的幸运值获得经验。',
    'female': '女',
    'In Party': '队伍',
    'Matrim': '马特里姆',
    'Newbie': '新手',
    'Leave': '离开',
    'Logged In': '已登录',
    'Special Action': '特别行动',
    'Spike': '穿透',
    'Anten': '经商',
    'ChocoHouse': '巧克力屋',
    'Quests': '任务',
    'Rekinn': '雷金',
    'Rocketfish': '火箭鱼',
    'Salvage Boost': '销毁增强',
    'Shorttooth': '短牙',
    'soap': '肥皂',
    'Sarimash': '萨里玛什',
    'Salvage This': '销毁',
    'charm': '手镯',
    'finger': '手指',
    'mainhand': '主手',
    'trinket': '饰品',
    'Equip Something Else': '更换装备',
    'Equip charm': '装备手镯',
    'Make a Guild': '成立公会',
    'Join': '加入',
    'Apply': '申请',
    'Create': '创建',
    'Primary Stats': '主要属性',
    'Shunamaji': '顺马治',
    'soul': '灵魂',
    'Gather Time': '收集时间',
    'Gold Storage': '金币存储',
    'Stronger Soul': '更强的灵魂',
    'Take': '收集',
    'Upgrade': '升级',
    'Upgrades': '升级',
    'Attacker': '攻击者',
    'Total': '总计',
    'ILP Gather Quantity': 'ILP收集数量',
    'depressy': '压抑',
    'boozle': '笨蛋',
    'Pet Ability': '宠物能力',
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
    'Activate a random Forsake event.': '激活随机的抛弃事件。',
    'Battle Join Percent': '加入战斗几率',
    'Family Photo': '家庭照片',
    'Close': '关闭',
    'Chunk of Rust': '大块铁锈',
    'Butter Knife': '黄油刀',
    'Actions': '动作',
    'Leaf': '叶子',
    'Lock This': '锁定',
    'Unequip This': '脱下',
    'Winter Gloves': '冬季手套',
    'Would you like to ascend?': '你想转生吗？',
    'Checking to see if you have a character...': '正在检查您是否有角色...',
    'Play IdleLands!': '玩放置大陆！',
    'Personalities': '人物',
    'No players here... that means you\'re offline.': '这里没有玩家……这意味着你离线了。',
    'It\'s an idling game like you\'ve never seen. Or maybe you have, if you\'ve been here before.': '这是一款你从未见过的放置游戏。也许你有，如果你以前来过的话。',

    //原样
    'no title': '无标题',
    'not maximosa': '不是马克西莫萨',
    'not a bear': '不是熊',
    'Bieco Tartufi': '比科·塔尔图菲',
    'Gubloth': '古布洛斯',
    'Chromordax': '色杆菌',
    'Kryba': '克雷巴',
    'Audrisy': 'Audrisy',
    'axirr': 'axirr',
    '': '',
    'Dangerous Cave Area': '危险洞穴地区',
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

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    ": ": "： ",
    " ": "",
    "Players (": "玩家 (",
    "Welcome to IdleLands": "欢迎来到 放置大陆",
    "Level ": "等级 ",
    "Found ": "获得于 ",
    "You have no more ": "没有更多的 ",
    "Curse (": "诅咒（",
    "Soul Share": "灵魂分享",
    "Upgrade Cost:": "升级成本:",
    "Affinity: ": "亲和力：",
    "Buff Scroll Duration": "增益卷轴持续时间",
    "Max Upgrade Level (": "最高升级级别（",
    "Stat Trail (": "属性跟踪 (",
    "Norkos / ": "诺科斯 / ",
    "Attacker: Base / Lv. (": "攻击者: 基础 / 等级 (",
    "Reroll Affinity (": "冲洗亲和力 (",
    "Reroll Attribute (": "冲洗属性 (",
    "Reroll Gender (": "冲洗性别 (",
    "Reroll Name (": "冲洗名字 (",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    " ": " ",
    'Archer': '射手',
    'Barbarian': '野蛮人',
    'Bard': '诗人',
    'Bitomancer': '占星家',
    'Cleric': '牧师',
    'Fighter': '战士',
    'Generalist': '全能',
    'Jester': '小丑',
    'Mage': '法师',
    'MagicalMonster': '魔法怪兽',
    'Monster': '怪物',
    'Necromancer': '巫师',
    'Pirate': '海盗',
    'Rogue': '流氓',
    'SandwichArtist': '神学家',
    'Beanie': '无檐小便帽',
    'Butter Knife': '黄油刀',
    'Chunk of Rust': '锈块',
    'Family Photo': '全家福',
    'Keyboard Cat Tie': '键盘猫领带',
    'Leaf': '叶子',
    'nothing': '什么都没有',
    'Sandals With Built-in Socks': '内置袜子凉鞋',
    'Tattered Shirt': '破烂的衬衫',
    'Twisted Wire': '绞线',
    'Winter Gloves': '冬季手套',
    " Gold": " 金币",
    " XP": " 经验",
    " Stamina": " 耐力",
    " in your inventory.": "在你的库存中。",
    "Loading...": "加载中...",
    "[Ardil]": "[诡计]",
    "[ATOMY]": "[矮人]",
    "[Bear]": "[熊]",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^You are a level (\d+)\/(\d+) Generalist. Your adventure will begin in Norkos.$/, '您是一个$1\/$2级的全能玩家。 您的冒险之旅将在诺科斯开始。'],
    [/^Generalize \((\d+) Stamina$/, '一般化 \($1 耐力'],
    [/^Current\: (\d+) ILP \/ Next\: (\d+) ILP$/, '当前\: $1 ILP / 下一个\: $2 ILP'],
    [/^Current\: (\d+)q \/ Next\: (\d+)q$/, '当前\: $1q / 下一个\: $2q'],
    [/^Current\: (.+)s \/ Next\: (.+)s$/, '当前\: $1s / 下一个\: $2s'],
    [/^Current\: (\d+) Lv. \/ Next\: (\d+) Lv.$/, '当前\: $1 级 / 下一个\: $2 级'],
    [/^Current\: (.+)\% \/ Next\: (.+)$/, '当前\: $1\% \/ 下一个\: $2'],
    [/^You can make a guild for (.+) gold.$/, '您可以花费 $1 金币建立1个公会。'],
]);

//2.采集新词
//20190320@JAR

var CNITEM_DEBUG = 0;
function cnItemByTag(text, itemgroup, node, textori){
	for (let i in itemgroup){
		if (i[0] == '.') { //匹配节点及其父节点的class
			let current_node = node;
			while (current_node){
				if ( current_node.classList && current_node.classList.contains(i.substr(1)) ){
					return itemgroup[i];
				}
				else if( current_node.parentElement && current_node.parentElement != document.documentElement ) {
					current_node = current_node.parentElement;
				}
				else {
					break;
				}
			}
		}
		else if (i[0] == '#'){ //匹配节点及其父节点的id
			let current_node = node;
			while (current_node){
				if ( current_node.id == i.substr(1) ){
					return itemgroup[i];
				}
				else if( current_node.parentElement && current_node.parentElement != document.documentElement ) {
					current_node = current_node.parentElement;
				}
				else {
					break;
				}
			}
		}
		else if (i[0] == '$'){	//执行document.querySelector
			if (document.querySelector(i.substr(1)) != null){
				return itemgroup[i];
			}
		}
		else if (i[0] == '*'){	//搜索原始文本
			if ( textori.includes(i.substr(1)) ){
				return itemgroup[i];
			}
		}
		// and more ...
		else{
			CNITEM_DEBUG && console.log({text, itemgroup, dsc:"不识别的标签" + i})
		}
	}
	return null;
}

//2.采集新词
//20190320@JAR  rewrite by 麦子
var cnItem = function (text, node) {

    if (typeof (text) != "string")
        return text;
	let textori = text;
    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix += cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix] + text_postfix;
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;;
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
        if (typeof(cnItems[i]) == "string" && (text == i || text == cnItems[i])){
			return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
		} else if ( typeof(cnItems[i]) == "object" && text == i ){
			let result = cnItemByTag(i, cnItems[i], node, textori);
			if (result != null){
				return text_prefix + result + text_reg_exclude_postfix + text_postfix;
			} else {
				CNITEM_DEBUG && console.log({text:i, cnitem:cnItems[i], node});
			}
		} else {
            // continue;
        }
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : textori;
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    if (cnItems._OTHER_.length < 1000) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    //开启生词打印
        CNITEM_DEBUG && console.log(
            '有需要汉化的英文：', text
        );

    //返回生词字串
    return text_prefix + text + text_reg_exclude_postfix + text_postfix;
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
                let cnText = cnItem(text, subnode);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || subnode.childNodes.length == 0) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text, subnode);
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
            if (mutation.target.nodeName === "SCRIPT"|| mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
			if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
            } else if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent, node);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                        if (!node.childNodes || node.childNodes.length == 0) {
							if (node.innerText)
								node.innerText = cnItem(node.innerText, node);
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
