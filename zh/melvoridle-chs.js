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
    'Black Knight': '黑骑士',
    'Black Dragon': '黑龙',
    'Blue Dragon': '蓝龙',
    'Black Axe': '黑斧',
    'Brew': '酿造',
    'Bronze Arrows': '青铜箭',
    'Bronze 2H Sword': '青铜2H剑',
    'Bronze Arrowtips': '青铜箭头',
    'Bronze Bar': '青铜锭',
    'Bronze Battleaxe': '青铜战斧',
    'Bronze Boots': '青铜靴',
    'Bronze Crossbow Head': '青铜弩头',
    'Bronze Dagger': '青铜匕首',
    'Bronze Gear': '青铜装备',
    'Bronze Gloves': '青铜手套',
    'Bronze Helmet': '青铜头盔',
    'Bronze Javelin Heads': '青铜标枪头',
    'Bronze Platebody': '青铜板甲',
    'Bronze Platelegs': '青铜板腿',
    'Bronze Scimitar': '青铜弯刀',
    'Bronze Shield': '青铜盾',
    'Bronze Sword': '青铜剑',
    'Bronze Throwing Knife': '青铜飞刀',
    'Browse Combat Areas': '访问战斗区域',
    'Browse Dungeons': '访问地下城',
    'Browse Slayer Areas': '访问杀手领域',
    'Burn': '燃烧',
    'Zombie': '僵尸',
    'Zombie Hand': '僵尸之手',
    'You Have': '你拥有',
    'You have': '你拥有',
    'Wet Forest': '潮湿森林',
    'Very Easy': '很简单',
    'Very hard': '很困难',
    'Very Hard': '很困难',
    'Trees': '树',
    'Start Dungeon': '启动地下城',
    'Smith': '锻造',
    'Fish': '鱼',
    'Fisherman': '渔夫',
    'Fishing': '钓鱼',
    'Food': '食物',
    'Fletching': '造箭',
    'Fletch': '造箭',
    'Fire Cape': '火斗篷',
    'Cow': '牛',
    'Copper': '铜',
    'Combat Level': '战斗等级',
    'Combat': '战斗',
    'Combat Options': '战斗选项',
    'Combat Potions': '战斗药剂',
    'Cook': '烹饪',
    'Completion Log': '完成记录',
    'Current Axe': '当前斧子',
    'Current Fire': '当前篝火',
    'Current Rod': '当前鱼竿',
    'Current Pickaxe': '当前镐子',
    'Current Tier': '当前层',
    'Cook': '烹饪',
    'Cooking': '烹饪',
    'Cooking Gloves': '烹饪手套',
    'Frozen Archer': '冰霜射手',
    'Frozen Chest': '冰霜胸甲',
    'Tin': '锡',
    'Willow Logs': '柳树原木',
    'Wizard': '巫师',
    'View Item Stats': '查看物品属性',
    'View Monster Drops': '查看怪物掉落',
    'Volcanic Cave': '火山洞穴',
    'Wet Monster': '潮湿的怪物',
    'Wizard Tower': '巫师塔',
    'Woodcutting': '伐木',
    'Unequip': '卸下',
    'Undead Graveyard': '亡灵墓地',
    'Undead Werewolf': '亡灵狼人',
    'Unique monsters and drops': '独特的怪物和掉落',
    'Unlock an extra equipment set for combat.': '解锁额外的战斗装备。',
    'Total Mining Mastery Level of 270 required to mine.': '采矿所需的总采矿精通等级为270。',
    'Test Environment': '测试环境',
    'Skill Potions': '技能药水',
    'Scroll of Aeris': '艾瑞斯卷轴',
    'Scroll of Glacia': '冰川卷轴',
    'Scroll of Ragnar': '拉格纳卷轴',
    'Scroll of Terran': '人族卷轴',
    'Seagull': '海鸥',
    'Shop': '商店',
    'Shallow Shores': '浅海岸',
    'Silver': '银',
    'Settings': '设置',
    'Seething Horned Elite': '沸腾的有角精英',
    'Smithing': '锻造',
    'Stab': '刺',
    'Status': '状态',
    'Steel': '钢',
    'Steel Bar': '钢锭',
    'Steel Dagger': '钢匕首',
    'Steel Fishing Rod': '钢钓鱼竿',
    'Steel Gear': '钢制装备',
    'Steel Knight': '钢骑士',
    'Steel Sword': '钢剑',
    'Steel Throwing Knife': '钢飞刀',
    'Stone Snake': '石蛇',
    'Strange Cave': '奇怪的洞穴',
    'Strange Eyed Monster': '奇怪的多眼怪物',
    'Strength': '力量',
    'SUBMIT IDEA': '提交想法',
    'Success Rate': '成功率',
    'Sweaty Monster': '满身是汗的怪物',
    'Angel': '天使',
    'Bank': '仓库',
    'Bars': '金属锭',
    'Black': '黑',
    'Changelog': '更新日志',
    'Chicken': '鸡',
    'Click to Activate': '点击激活',
    'Craft': '制造',
    'Crafting': '工艺',
    'Create': '创建',
    'Attack': '攻击',
    'Attack Speed': '攻击速度',
    'Attack Type': '攻击类型',
    'Attack Style': '方式',
    'Defence': '防御',
    'Eyes': '眼睛',
    'Farmer': '农民',
    'Farming': '种植',
    'Farmlands': '农田',
    'Fight': '战斗',
    'Loot All': '全部拿走',
    'Lots of Eyes': '很多眼睛',
    'Magic': '魔法',
    'Man': '人',
    'Mastery': '专精',
    'Medium': '中等',
    'Melvor Idle': '梅尔沃放置',
    'Menu': '菜单',
    'Mine': '矿山',
    'Mining': '采矿',
    'Miner': '矿工',
    'Mining Gloves': '采矿手套',
    'Mithril': '秘银',
    'Mithril Bar': '秘银锭',
    'Monsters': '怪物',
    'No potion active': '没有使用药水',
    'New Task': '新任务',
    '"Name': '名称',
    'Fierce Devil': '凶恶魔鬼',
    'Firemaking': '生火',
    'Force Save': '强制保存',
    'Gems Gloves': '宝石手套',
    'Ghost': '幽灵',
    'Golbin': '哥布林',
    'Gloves': '手套',
    'Gold Bar': '金锭',
    'Gold': '黄金',
    'Hard': '困难',
    'Herbs': '草药',
    'Herblore': '制药',
    'Hill Giant': '山丘巨人',
    'Hitpoints': '生命值',
    'Level': '等级',
    'Light a Fire': '生火',
    'Locked': '未解锁',
    'Loading...': '加载中...',
    'Magic Chest': '魔法胸甲',
    'Magic Logs': '魔法原木',
    'Active': '活动',
    'Actions': '动作',
    'Accurate': '精准',
    'Accuracy Rating': '精准率',
    'Active Prayers': '祈祷活动',
    'Buy': '购买',
    'Coal': '煤',
    'Compost': '堆肥',
    'Cut': '砍',
    'Cooking XP Bonus': '烹饪经验值奖励',
    'Easy': '简单',
    'Cooking Skillcape': '烹饪技能斗篷',
    'Vampire': '吸血鬼',
    'Valkyrie': '瓦尔基里',
    'Yew Logs': '紫杉原木',
    '20% Faster Mining': '提升20%采矿速度',
    '4% Chance for 2x Ores': '4%的几率获得2倍矿石',
    'Adamant Axe': '精金斧',
    'Adamant Gear': '精金装备',
    'Adamant Knight': '精金骑士',
    'Adamantite': '精金',
    'Adult Farmer': '成年农民',
    'Silver Bar': '银锭',
    'Show All': '全部显示',
    'Skills': '技能',
    'Skill Upgrades': '技能升级',
    'Items': '物品',
    'Knight': '骑士',
    'Leather': '皮革',
    'Leather Armour': '皮甲',
    'Leather Boots': '皮靴',
    'Leather Gloves': '皮手套',
    'Prayer': '祈祷',
    'Potions': '药水',
    'PROGRESS': '进度',
    'Produces': '生产',
    'Progress': '进度',
    'Quick Sort Bank': '快速仓库排序',
    'Ranged': '远程',
    'Rapid': '迅速',
    'Rings': '戒指',
    'Runes': '符文',
    'Runite': '符文',
    'Reward': '奖励',
    'Rune Knight': '符文骑士',
    'Runecrafting': '符文制作',
    'Rune Gear': '符文装备',
    'Rune Essence': '符文精华',
    'Other': '其它',
    'Options': '选项',
    'Open Waters': '开阔水域',
    'Online': '在线',
    'Oak Logs': '橡木原木',
    'Master Wizard': '精灵法师',
    'Socials': '社交',
    'Teak Logs': '柚木原木',
    'Type': '类型',
    'Alpha v0.': '公测版 v0.',
    'Requires': '要求',
    'Unlocked at': '解锁于',
    'Used to Fletch Bows': '用来造羽毛弓',
    'Used to Craft Red Dragonhide Armour': '用来制作红龙皮盔甲',
    'Used to Craft Leather Armour': '用来制作皮革盔甲',
    'Used to Craft Green Dragonhide Armour': '用于制作绿龙皮盔甲',
    'Used to Craft Blue Dragonhide Armour': '用来制作蓝龙皮盔甲',
    'UNLOCKS': '解锁',
    'General Upgrades': '普通升级',
    'Shortbows': '短弓',
    'Slayer Task': '杀手任务',
    'Slayer': '杀手',
    'Slash': '砍',
    'Block': '格挡',
    'Change Equipment Set': '切换装备设置',
    'Change Password': '修改密码',
    'Current Eggs': '当前蛋',
    'View All Equipment Stats': '查看所有装备状态',
    'Water God Dungeon': '水神地下城',
    'Weird Gloop': '怪异的格洛普',
    'Thieving': '偷窃',
    'Lumberjack': '伐木工人',
    'Milestones': '里程碑',
    'Statue': '雕像',
    'Stats': '属性',
    'Statistics': '统计',
    'Statistic': '统计',
    'Spellbook': '法术书',
    'Equip the': '装备',
    'Donate': '捐赠',
    'Deep Sea Ship': '深海沉船',
    'Defence Skillcape': '防御技能斗篷',
    'Chicken Coop': '鸡舍',
    'Chance to Hit': '命中率',
    'Barren Ocean': '贫瘠海洋',
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
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^\n(.+)Select Smithing Category\n(.+)$/, '选择锻造类别'],
    [/^\n(.+)Select Herblore Category\n(.+)$/, '选择制药类别'],
    [/^\n(.+)Select Fletching Category\n(.+)$/, '选择箭羽类别'],
    [/^\n(.+)Select Crafting Category\n(.+)$/, '选择工艺分类'],
    [/^\n(.+)Select Shop Category\n(.+)$/, '选择商店分类'],
    [/^\n(.+)Select your Logs\n(.+)$/, '选择你的木头'],
    [/^\n(.+)Select your Food\n(.+)$/, '选择你的食物'],
    [/^Weird Gloop used\n(.+)$/, '怪异的格洛普使用'],
    [/^Magic Tree\n(.+)$/, '魔法树'],
    [/^Maple Tree\n(.+)$/, '枫树'],
    [/^Mahogany Tree\n(.+)$/, '桃花心树'],
    [/^Teak Tree\n(.+)$/, '柚树'],
    [/^Yew Tree\n(.+)$/, '紫杉树'],
    [/^Normal Tree\n(.+)$/, '普通树'],
    [/^Oak Tree\n(.+)$/, '橡树'],
    [/^Materials\n(.+)$/, '物料'],
    [/^Willow Tree\n(.+)$/, '柳树'],
    [/^General Upgrades\n(.+)$/, '普通升级'],
    [/^Gloves\n(.+)$/, '手套'],
    [/^(.+) Bank Capacity$/, '$1 仓库容量'],
    [/^(.+) HP$/, '$1 生命值'],
    [/^(.+) HP Regen per interval$/, '每次恢复 $1 生命值'],
    [/^(.+) charcoal$/, '$1 木炭'],
    [/^(.+) XP \/ (.+) seconds$/, '$1 经验 \/ $2 秒'],
    [/^(.+) Quest Points$/, '$1 任务点'],
    [/^Skill Upgrades(.+)$/, '技能升级'],
    [/^Requires level (.+) mining to obtain.$/, '需要$1级采矿才能获得。'],
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
