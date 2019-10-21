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
    'Seeds': '种子',
    'Server status': '服务器状态',
    'Teams': '队伍',
    'Total Kills': '总计杀死',
    'Top Players': '玩家排行榜',
    'Total Food Eaten': '总计吃掉的食物',
    'Trees': '树',
    'Tree seeds': '树种子',
    'Unlock all Skills': '解锁所有技能',
    'Upgrade Hammer': '升级锤子',
    'UPDATE HISTORY': '更新历史',
    'Upgrade Pickaxe': '升级镐子',
    'User': '用户',
    'Username': '用户名',
    'XP': '经验',
    'xp\n': '经验',
    'Woodcutting Axe': '伐木斧',
    'Undo': '撤销',
    'Skirt': '短裙',
    'Set an Email Address': '设置电子邮件地址',
    'Server Info': '服务器信息',
    'Fail chance': '失败几率',
    'Farming Level': '农业等级',
    'Fishing Bait': '鱼饵',
    'fishing bait\n': '鱼饵',
    'Fishing level': '钓鱼等级',
    'You lack the materials to craft this item.': '您缺乏制作该物品的材料。',
    'A bug where players can\'t use a piece of content (example: can\'t drink new potion), not abusable': '玩家无法使用某内容（例如：不能喝新药）的错误，不可滥用',
    'A new section for mining has been added.': '添加了一个新的采矿部分。',
    'Ability to team up with others.': '与他人合作的能力。',
    'Ability to trade': '交易能力',
    'About': '关于',
    'Account type': '账号类型',
    'Account Type': '账号类型',
    'Achievement Book': '成就书',
    'Add bones': '加入骨头',
    'Add Heat': '加热',
    'Add Workers': '添加工人',
    'Amount': '数量',
    'ANY': '任意',
    'Arrows': '箭',
    'Ashes': '灰烬',
    'Becomes Untradable in Player Market': '在玩家市场变得不可交易',
    'Bind': '绑定',
    'Blood Key': '血钥匙',
    'Blue Axe Orb': '蓝斧宝珠',
    'Blue Chisel Orb': '',
    'Blue Fishing Rod Orb': '蓝鱼竿宝珠',
    'Blue Hammer Orb': '蓝锤宝珠',
    'Blue Meditation Orb': '蓝色冥想宝珠',
    'Blue Oilpipe Orb': '蓝色油管宝珠',
    'Blue Orbs': '蓝宝珠',
    'Blue Pickaxe Orb': '蓝镐宝珠',
    'Blue Rake Orb': '蓝耙宝珠',
    'Blue Shovel Orb': '蓝铲宝珠',
    'Blue Trowel Orb': '蓝抹子宝珠',
    'Boat': '船',
    'Boat Loot': '船战利品',
    'Bob the Farmer': '农夫鲍勃',
    'Bobette the Gardener': '园丁博贝特',
    'Body': '身体',
    'Bonemeal Bin': '骨头盒',
    'Bonus Fish': '奖励鱼',
    'Bonus logs': '奖励木头',
    'Boots': '靴子',
    'Bound rocket orb': '绑定火箭宝珠',
    'Brewing Ingredient': '酿造原料',
    'Brewing ingredients': '酿造原料',
    'Broadcast Message in Chat\n': '在聊天室广播消息',
    'Burn Rate': '燃烧率',
    'Buy Keys': '购买钥匙',
    'Can convert to regular account anytime.': '可以随时转换为普通帐户。',
    'Cannot change account type.': '无法更改帐户类型。',
    'causing server crashes, abusable bug, free xp etc.': '导致服务器崩溃，滥用错误，免费XP等。',
    'Caution': '警告',
    'Chance': '几率',
    'Chicken': '鸡',
    'Chisel': '凿子',
    'Choose a username': '选择一个用户名',
    'Click to bind to your account': '点击绑定到您的帐户',
    'Click to bind to your account (Requires previous oil storage': '点击绑定到您的帐户（需要先前的储油空间',
    'Click to bind to your account.': '单击以绑定到您的帐户。',
    'Click to operate': '点击操作',
    'Click to use.': '点击使用',
    'Coins': '金币',
    'Competitive': '竞争力',
    'Completed All Robot Waves': '完成所有机器人浪潮',
    'Convert Mould': '转换模具',
    'Cook food': '烹饪食物',
    'Cooked food': '烹饪食物',
    'Cooking Level': '烹饪等级',
    'Cost': '成本',
    'Costs': '成本',
    'Cow': '牛',
    'Craft Keys': '工艺钥匙',
    'Crafting Arrows': '制作箭',
    'Crafting Level': '工艺等级',
    'Create a Team': '创建队伍',
    'Create Account': '创建账号',
    'Current bonus stardust': '当前奖励星尘',
    'Current Workers': '当前工人',
    'Currently Active': '目前有效',
    'Currently chopping': '目前正在砍',
    'Dark Giant Saw Blades': '黑暗巨人锯片',
    'Dark Mushrooms': '黑蘑菇',
    'Dark Potion': '黑暗药水',
    'Description': '描述',
    'Dev': '开发人员',
    'Diamond Hunt Mobile': '钻石狩猎手机版',
    'Diamond Key': '钻石钥匙',
    'Diamond Saw Blades': '钻石锯片',
    'Distribute what to gather': '分发收集的东西',
    'Do not use a sensitive pin (such as your bank accounts pin etc.': '请勿使用敏感的密码（例如您的银行帐户密码等）。',
    'Double Gold Ore': '双倍金矿石',
    'Double Marble': '双倍大理石',
    'Double Promethium': '双倍炔',
    'Double Quartz': '双倍石英',
    'Double Runite': '双倍符文',
    'each': '每个',
    'Effect': '效果',
    'eg': '例如',
    'Eggs': '蛋',
    'Emerald Crusher Containers': '翡翠破碎机容器',
    'Emerald Key': '翡翠钥匙',
    'Empty Orb Spell': '空宝珠法术',
    'Energy': '能量',
    'Energy Cost': '能量成本',
    'Episode': '插曲',
    'Event Sigils': '活动标志',
    'Extract power from essence': '',
    'Fail chance': '失败几率',
    'Faradox': '法拉多',
    'Farming Level': '农业等级',
    'Fast': '快',
    'Feed': '饲料',
    'Final chance': '最终几率',
    'Fire Arrows': '火箭',
    'Fire Ball': '火宝珠',
    'Fire Chicken': '火鸡',
    'Fish': '鱼',
    'Fishing Bait': '鱼饵',
    'fishing bait\n': '鱼饵',
    'Fishing level': '钓鱼等级',
    'Fishing Rod': '钓竿',
    'For': '',
    'gargie': '',
    'Gem': '宝石',
    'get a dialogue popup whenever one of your achievement perks toggle.\n	': '只要您的一项成就特权发生切换，就会弹出一个对话框。',
    'get a loot dialogue popup whenever chopping trees.	': '每当砍树时都会收到战利品对话弹出窗口。',
    'get a loot dialogue popup whenever harvesting crops.\n	': '每当收获农作物时，都会弹出一个战利品对话弹出窗口。',
    'Get Code': '',
    'Gift': '礼物',
    'Gift Donor Coins.': '礼物捐赠者硬币。',
    'Give How many?': '给多少？',
    'Give Leader': '给领导',
    'Give to Bob the Farmer': '给农夫鲍勃',
    'Give to Lumberjack': '给伐木工人',
    'Give to Miners': '给矿工',
    'Global Level': '全局等级',
    'Gloves': '手套',
    'Gold Key': '金钥匙',
    'Grass': '草',
    'Green Empowered Rock Orb': '绿色赋能的岩石宝珠',
    'Green Orbs': '绿宝珠',
    'Grow time': '成长时间',
    'Hardcore': '铁杆',
    'Has no extra effects.': '没有额外的效果。',
    'Hat': '帽子',
    'Head': '头部',
    'Healing Potion': '治疗药水',
    'Heat': '热量',
    'Helmet': '',
    'High': '高',
    'Hiscores': '组队',
    'Holiday Sigils': '假日纹章',
    'How many logs?': '多少个木头？',
    'How many to bind?': '绑定多少个？',
    'How many to buy?': '买多少个？',
    'How many to cook?': '要煮多少?',
    'How many?': '多少个?',
    'I cannot use this in combat.\n	': '我不能在战斗中使用它。',
    'Ice Arrows': '冰箭',
    'Ice Bones': '冰骨',
    'Ice Chicken': '冰鸡',
    'Icon': '图标',
    'Icons': '图标',
    'Important Notes': '重要提示',
    'Increases your horse\'s combat cooldown reduction from 20% to': '将您的马匹的战斗冷却时间从20％增加到',
    'Increases your horse\'s combat cooldown reduction from 20% to 55%, but has a 50% chance of ignoring you after a fight.': '使您的马匹的战斗冷却时间从20％增加到55％，但是有50％的机会在战斗后无视您。',
    'Invite a Player': '邀请玩家',
    'IP Mute\n': 'IP静音',
    'It takes 7 days to remove your pin if requested.': '如果需要，则需要7天时间才能删除您的密码。',
    'Item': '物品',
    'item directly with your team.': '直接与您的队伍联系。',
    'Kick': '踢',
    'Kill': '杀死',
    'Lava': '熔岩',
    'Lava Cow': '熔岩牛',
    'Left click': '左键单击',
    'Legs': '腿部',
    'lennart': '伦纳特',
    'Level': '等级',
    'Level Required': '需求等级',
    'LOAD': '加载',
    'Loading...': '加载中...',
    'Login': '登录',
    'LOGIN': '登录',
    'Logs': '日志',
    'Low': '低',
    'Lower': '降低',
    'Magic Page': '',
    'Make': '制作',
    'Manage Presets': '',
    'Mask': '面具',
    'Materials': '材料',
    'Medium': '',
    'Milk': '牛奶',
    'Miner': '矿工',
    'Mining Unlocked': '',
    'Moderator': '',
    'Monster Loot': '',
    'Moon Bones': '',
    'Mute IP \n': '',
    'Mute List': '',
    'no longer': '',
    'No restrictions': '',
    'nogresh': '',
    'Note': '',
    'Nothing is growing here.': '',
    'Oak Tree': '橡树',
    'Off': '关闭',
    'Oil': '石油',
    'Oil Storage': '石油存储',
    'Online': '在线',
    'Open': '打开',
    'Ores': '矿石',
    'Other Games': '',
    'Oven': '',
    'Oven Heat': '',
    'Owned': '',
    'Oxygen Potion Needed': '',
    'per worker.\n': '',
    'Pig': '',
    'Pin has been requested to be removed.': '',
    'Pirate': '',
    'pkennedy': '',
    'Planter': '',
    'PLAY AS GUEST': '',
    'Play Diamond Hunt': '',
    'Play Diamond Hunt Offline': '',
    'Player market disabled.': '',
    'Players Online': '',
    'Players Signed up': '',
    'Podcasts': '',
    'Promethium Key': '',
    'Promethium Soul': '',
    'pweq': '',
    'Quest Book': '',
    'quest point(s': '',
    'Recommended': '',
    'Red Orbs': '',
    'Reddit': '',
    'regular': '',
    'Regular': '',
    'Remove Icon': '',
    'Requirements': '',
    'Requires All Elite Achievements Completed': '',
    'Requires All Master Achievements Completed': '',
    'Requires All Quests Completed': '',
    'Requires Global Level': '',
    'Requires Hardcore account': '',
    'Requires level 1 mining to obtain.': '',
    'Requires Level 100 Brewing': '',
    'Requires Level 100 Combat': '',
    'Requires Level 100 Cooking': '',
    'Requires Level 100 Crafting': '',
    'Requires Level 100 Farming': '',
    'Requires Level 100 Fishing': '',
    'Requires Level 100 Magic': '',
    'Requires Level 100 Mining': '',
    'Requires Level 100 Woodcutting': '',
    'Requires Maxed DH1 Account': '',
    'Requires Mining Skill': '',
    'Requires Sigil': '',
    'Requires Team account': '',
    'Reset Password': '',
    'Rewards': '',
    'ridaren': '里达伦',
    'Right click': '右击',
    'Right click factory to remove charcoal.': '右键单击工厂以除去木炭。',
    'Robetop': '睡袍',
    'Rocket': '火箭',
    'Ruby Drill Heads': '红宝石钻头',
    'Ruby Key': '红宝石钥匙',
    'RULES': '规则',
    'Runite Key': '符文钥匙',
    'Runite Soul': '符文之魂',
    'Sapphire Drill Tips': '蓝宝石钻头',
    'Sapphire Key': '蓝宝石钥匙',
    'Select 2 orbs to sacrifice': '选择2个要牺牲的宝珠',
    'Select 5 items in order to impress the vendor.': '',
    'Select a color': '',
    'Select a Function': '',
    'Select a gem': '',
    'Select a key to use': '',
    'Select a log to burn into charcoal': '',
    'Select a new mould': '',
    'Select a skill': '',
    'Select an enemy to fight': '',
    'Select an item': '选择一个物品',
    'Select an option': '选择一个选项',
    'Select an Orb': '选择一个宝珠',
    'Select Empty Farming Patch To use Fertilizer on': '',
    'Select Farming Patch': '',
    'Select the type of arrows you wish to use': '',
    'Send Code': '',
    'Send Hero': '',
    'Send Hero to Fight': '',
    'Send Miners to Mars': '',
    'Send Miners to Moon': '',
    'Send to Barn': '',
    'Send To Intersteller Space': '',
    'Server Info': '',
    'sharker': '',
    'Sheep': '绵羊',
    'Shooting Star': '',
    'Snowman Sigil': '',
    'Stardust Box I': '',
    'Stardust Crystals': '',
    'Status': '',
    'Strange Leaf': '',
    'Submit a bug': '',
    'Tags': '',
    'Team name': '',
    'Team type': '',
    'Teams of 8.': '',
    'Telescope Lens': '',
    'The creator of the game. (Smitty': '',
    'The mods of the game.\n': '',
    'This type of arrow increases your bow damage by 2, and is doubled in cold environments.': '',
    'This type of arrow increases your bow damage by 3, and is doubled in hot environments.': '',
    'Throw In Cold Lake': '',
    'Throw In Volcano': '扔进火山',
    'to  only harvest.\n	': '只收获。',
    'to automatically harvest and replant a seed.': '自动收获并重新播种种子。',
    'to fight, this does not change based on the length of the fight.': '战斗，这不会根据战斗时间的长短而改变。',
    'Total Reproductions': '总复制品',
    'Total XP': '总经验',
    'Total Yields': '总产量',
    'Touch a tomb?': '触摸坟墓？',
    'Trawler Loot': '拖网渔船战利品',
    'Treasure Chest': '百宝箱',
    'Treasure Chest Key': '',
    'Treasure Map': '',
    'Turns this into snow.': '',
    'Typo\'s, not game breaking, not urgent': '',
    'Upgrade with': '',
    'Upgrading your chisel will yield more stardust when breaking stardust crystals.': '',
    'Upper': '',
    'Username will be set to all lowercase.': '',
    'Vendor': '',
    'Vial of Water': '',
    'Who do you want to mute?': '',
    'Will remain Unbound and Tradable.': '',
    'Woodcutting Level Required': '',
    'Workers': '',
    'You can convert your team to casual at any time.': '',
    'You do not have anyone muted.': '',
    'You may leave/join as many teams as you wish only if you unlist yourself from leaderboards permanently.': '',
    'You may only have 1 map at a time, however you may have an infinite amount of chests.': '',
    'You will have to enter this pin everytime you login from a new location and after server reboots.': '',
    'Your pin must be 4 numbers long.': '',
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
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.+) Hours$/, '$1 小时'],
    [/^(.+) charcoal$/, '$1 木炭'],
    [/^(.+) Quest Points$/, '$1 任务点'],
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
