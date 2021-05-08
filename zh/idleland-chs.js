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
    'In Party': '组队中',
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
    'Salvage Boost': '打捞增强',
    'Shorttooth': '短牙',
    'soap': '肥皂',
    'Sarimash': '萨里玛什',
    'Salvage This': '打捞',
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
    'Assisting Hippos': '协助河马',
    'Buff Duration': '增益持续时间',
    'Buy': '购买',
    'Buy ILP!': '购买 ILP!',
    'Log': '日志',
    'Cooldown Reset': '冷却重置',
    'Enchant Cap': '附魔上限',
    'Festivals': '节日',
    'Global Quests': '全局任务',
    'Gold': '金币',
    'Guardian Ruins': '守护废墟',
    'Cancel': '取消',
    'Yes, ascend!': '是的, 转生!',
    'Change Gender': '更改性别',
    'glowcloud': '发光云',
    'Goldsent': '散财童子',
    'Achievements': '成就',
    'Update': '更新',
    'Unsync': '取消同步',
    'UI Settings': '界面设置',
    'Want to submit some custom items, events and strings? Head on over to': '是否要提交一些自定义项目，事件和字符串？ 前往',
    'You can also unsync your account, if you want. If you do this, and you lose access to your original account (clearing cache, etc), your account will vanish into the abyss. Not recommended, obviously.': '您还可以根据需要取消同步帐户。 如果这样做，您将失去对原始帐户的访问权限（清除缓存等），您的帐户将消失在深渊中。 不推荐，显然。',
    'Gain +1% XP for touching 10 collectibles.': '接触10个收藏品可获得+ 1％经验值。',
    'Gain +15% more XP and GOLD +1 Adventure Log Size for leveling 75 time(s).': '升级75次获得+15%经验值和+1冒险日志容量',
    'Gain +18% AGI for gaining and losing a total of 64,000,000 gold. Personality: Greedy. Title: Golden Child. Pet Attribute: Golden.': '因获得和失去总计64,000,000金币而获得+ 18％的AGI。 性格：贪婪。 标题：金童。 宠物属性：金色。',
    'Gain +30% GOLD for ascending with a total of 64,000,000 gold. Title: Goldsent.': '转生获得+30%金币，总计64,000,000金币。 标题：散财童子。',
    'Gain +3 XP and +3 GOLD for walking 1,000 steps. Personality: ScaredOfTheDark/Delver. Personality: Camping.': '行走1000步获得+3经验和+3黄金个性:黑暗之惧 /探索者。个性:露营。',
    'Gain +2% XP for upgrading your pets 10 time(s).': '升级宠物10次，获得的经验值提升2%。',
    'Gain +2 stamina for moving divinely 100 times.': '神圣移动100次时，获得+2耐力。',
    'Collectibles': '收藏品',
    'Statistics': '统计',
    'Gain the Drunk personality.': '获得醉鬼性格。',
    'Norkos Fisheries Area': '诺科斯渔业区',
    'Creating a guild will cost 100m gold. Enter the guild name and tag below!': '建立公会将花费100m金币。 在下面输入行会名称和标签！',
    'Create Guild': '创建公会',
    'Whosyourdaddy': '你爸爸是谁',
    'Guild Overview': '公会概览',
    'Gold (x': '金币 (x',
    'Alxas': '阿拉善',
    'Buildings': '建筑',
    'Donate gold': '捐赠黄金',
    'Donate Resource': '捐赠资源',
    'Donate': '捐赠',
    'Members': '成员',
    'Mittens': '连指手套',
    'Need help? There\'s a lot of docs on idle.land, check them out!': '需要帮忙？ idle.land上有很多文档，请看一下！',
    'Overview': '概览',
    'Pieper': '蜂鸣器',
    'Please check out the New Player Guide!': '请查看《新玩家指南》！',
    'Recruiting Guilds': '公会招募',
    'Recruitment Mode': '招募方式',
    'Resources': '资源',
    'Taxes': '税金',
    'Your max stamina increases by 5.': '你的最大耐力上限提高5点。',
    'Withdraw': '收回',
    'View URL': '查看链接',
    'View Combat': '查看战斗',
    'SALVAGE': '打捞',
    'Greedy': '贪婪',
    'Affirmer': '确认',
    'All incoming choices will automatically be denied with the \"No\" action.': '使用“否”操作将自动拒绝所有传入的选择。',
    'All incoming choices will automatically be chosen randomly.': '所有传入的选项将自动随机选择。',
    'All incoming choices will automatically be affirmed with the \"Yes\" action.': '所有进入的选择将通过“是”操作自动得到确认。',
    'trumpet': '喇叭',
    'love-colored Goblin Lord Shortsword': '爱情色的地精领主短剑',
    'Equip mainhand': '装备主手',
    'dart': '飞镖',
    'Dean': '院长',
    'Compare': '比较',
    'Cardboard Shoes': '纸板鞋',
    'Candy Necklace': '糖果项链',
    'Chocolate Drumstick': '巧克力鼓槌',
    'You have no choices to make.': '您别无选择。',
    'You will take a break and go camping, not moving until you stop.': '您将休息一下，去露营，直到停下来再动。',
    'You will step around perfectly randomly, as a proper drunk would.': '您将像随意喝醉的酒一样随意地随意走动。',
    'You will only delve deeper into the dark dungeons.': '您只会更深入地探索黑暗的地牢。',
    'You will never step down the stairs because it\'s spooky and scary down there.': '您永远不会下楼梯，因为那儿令人毛骨悚然和令人恐惧。',
    'You will automatically purchase items, double down on gambling events,\n and sell found items. Any Yes/No choices will be be chosen randomly.': '您将自动购买物品，加倍下注赌博事件，\n和出售发现的物品。任何 是/否 选项将被随机选择。',
    'Would you like to equip \"love-colored Goblin Lord Shortsword\" (Score: 1,550, Type: mainhand)?': '你想装备“爱情色的地精领主短剑”吗(评分:1550，类型:主手)?',
    'Indecisive': '优柔寡断',
    'Gain 15% more GOLD at the cost of 15% XP.': '以15％的经验为代价，获取额外的15％的金币。',
    'Fancypants': '花哨的裤子',
    'Change Title': '更换标题',
    'Camping': '露营',
    'ScaredOfTheDark': '黑暗之惧',
    'Yes': '是',
    'No': '否',
    'Sell': '出售',
    'OK': '确定',
    'Gubloth, the Cursed Attacker': '古布洛斯, 被诅咒的攻击者',
    'Undertaken by: Gubloth (': '宠物: 古布洛斯(',
    'Hunt down pet enhancement materials.': '寻找宠物增强材料。',
    'Done in': '距离完成还有',
    'Embark': '出发',
    'Idle Adventure': '放置冒险',
    'Wilderness': '荒野',
    'Goblin Ruins': '哥布林遗址',
    'Pet Boulder': '宠物巨石',
    'Pet Enhancement Material Search': '宠物增强材料搜索',
    'Pet Mountain': '宠物山',
    'Purchaseable Pets': '可购买的宠物',
    'Send your pets off to buy and sell items from the Merchant Guild.': '让你的宠物去商业公会购买和出售物品。',
    'Set sail on the winds of adventure.': '乘着冒险之风扬帆起航。',
    'Trip to the Merchant Guild': '前往商人公会',
    'Miniature Top Hat': '微型礼帽',
    'Ancient Bracelet': '古代手链',
    'Hero Academy Graduation Ring': '英雄学院毕业戒指',
    'Ascended': '已转生',
    'Norkos Town': '诺科斯镇',
    'Party: Three Colorful Darkness Towards Water': '队伍：向着水的三种色彩的黑暗',
    "Golden Child": "金童子",
    'Consumerist': '消费主义',
    'Ascend': '转生',
    'providence': '天意',
    'Minotaur Horn': '牛头角',
    'Equip finger': '装备手指',
    'Canadian Man': '加拿大人',
    'Salvaged Resources': '打捞的资源',
    'Step 10,000 times in The Water Plane -2.': '在“水上飞机-2”中步进10000次。',
    'Helping Turtles': '帮助海龟',
    'Olde Minotaur Forest': '奥尔德牛头怪森林',
    'Your adventure log size goes up by 1.': '您的冒险日志大小增加了1。',
    'Your buff scroll duration goes up by 1 hour.': '您的增益卷轴持续时间增加1小时。',
    'Your choice log size goes up by 1.': '您的选择日志大小增加1。',
    'Your enchant cap goes up by 1.': '附魔上限提高1。',
    'Your inventory size goes up by 1.': '您的库存量增加了1。',
    'Your max item boost % goes up by 10%.': '您的最大物品提升百分比提高10％。',
    'The number of pet missions you have goes up by 1.': '您执行的宠物任务数量增加了1。',
    'Solo-step 1,000 times.': '单步执行1000次。',
    'Reset your boss, event, and treasure chest cooldowns.': '重置Boss，事件和宝箱的冷却时间。',
    'Premium Upgrades': '高级升级',
    'Pet Mission Cap': '宠物任务上限',
    'Other Purchases': '其它购买',
    'Permanent Upgrades': '永久升级',
    'Personal Quests': '个人任务',
    'Item Stat Cap': '物品状态上限',
    'Inventory Size': '库存量',
    'Increase XP gain by +20% for all players for 3 days.': '3天之内所有玩家的经验获取增加 +20％。',
    'Increase STR, DEX, CON, AGI, INT, LUK by +20% for all players for 3 days.': '3天之内使所有玩家的力量，命中，体质，敏捷，智力，幸运增加 +20％。',
    'Increase SALVAGE gain by +20% for all players for 3 days.': '3天之内使所有玩家的打捞增益提高 +20％。',
    'Increase GOLD gain by +20% for all players for 3 days.': '3天之内使所有玩家的金币获得量增加 +20％。',
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
    'Personalities': '性格',
    'No players here... that means you\'re offline.': '这里没有玩家……这意味着你离线了。',
    'It\'s an idling game like you\'ve never seen. Or maybe you have, if you\'ve been here before.': '这是一款你从未见过的放置游戏。也许你有，如果你以前来过的话。',
    'Theme': '主题',
    'the Custom Assets repo': '自定义资产回购',
    'Sync': '同步',
    'Submit': '提交',
    'Rainbowroad': '彩虹之路',
    'Push Notifications': '推送通知',
    'Please do this to ensure your account is not lost.': '请执行此操作，以确保您的帐户不会丢失。',
    'Pasture': '牧场',
    'Notification Settings': '通知设置',
    'mindrage': '心智',
    'Item String': '项目字符串',
    'Integrations': '整合方式',
    'Integrate IdleLands with other services like': '将放置大陆与其他服务集成',
    'If you really, really, for some reason want to delete your character, you can do that! You will have to go through a few dialogs, and then it will be confirmed. I\'m not gonna beg you or anything, b-b-b-baka, but know that no data will be retained if you choose to go through with it.': '如果您确实真的出于某种原因想要删除您的角色，则可以这样做！ 您将不得不通过几个对话框，然后将其确认。 我不会求你，b-b-b-baka，但请注意，如果您选择不进行处理，将不会保留任何数据。',
    'Idle Itemgen': '放置物品产生',
    'help': '帮助',
    'for various enhanced features.': '各种增强功能。',
    'Dimocean': '昏暗的海洋',
    'Default': '默认',
    'Delete Character': '删除角色',
    'Dark': '深色',
    'Danger Zone': '危险区',
    'Brightsun': '灿烂的阳光',
    'Custom Submissions': '自定义提交',
    'Bloodmoon': '血月',
    'Available Services': '可用服务',
    'and make a few items, enter them here (one at a time), and hit submit! We also accept direct submissions via GitHub on': '并制作一些项目，在此处输入它们（一次输入一个），然后点击“提交”！ 我们也接受GitHub上的直接提交',
    'Account Backup': '账号备份',
    'Moon Claw': '月亮爪',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
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
    'no title': '无标题',
    'not maximosa': '不是马克西莫萨',
    'not a bear': '不是熊',
    'Bieco Tartufi': '比科·塔尔图菲',
    'Gubloth': '古布洛斯',
    'Chromordax': '色杆菌',
    'Kryba': '克雷巴',
    'Delver': '德尔佛',
    'Audrisy': 'Audrisy',
    'axirr': 'axirr',
    'AMOLED': 'AMOLED',
    'Ömölèt Dû FrÖmàgè': 'Ömölèt Dû FrÖmàgè',
    'Dangerous Cave Area': '危险洞穴地区',
    'Denier': '丹尼尔',
    'Drunk': '醉鬼',
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
    "Reroll Affinity (": "重洗亲和力 (",
    "Reroll Attribute (": "重洗属性 (",
    "Reroll Gender (": "重洗性别 (",
    "Reroll Name (": "重洗名字 (",
    "Buy (": "购买 (",
    "You have no items": "你没有物品",
    "Orange Crystal": "橘色水晶",
    "Green Crystal": "绿色水晶",
    "Purple Crystal": "紫色水晶",
    "Red Crystal": "红色水晶",
    "Yellow Crystal": "黄色水晶",
    "Blue Crystal": "蓝色水晶",
    "Astral Crystal": "星芒水晶",
    "Clay": "粘土",
    "Wood": "木头",
    "Stone": "石头",
    "Astralium": "星体",
    "Player:": "玩家:",
    "Collectible: ": "收藏品：",
    "Generalize (": "归纳 (",
    "Are you sure you want to ascend?": "您确定要转生吗？",
    "You last ascended on ": "你的上次转生时间是 ",
    "/ Requires ": "/ 需要 ",
    "Pet Rock Soul (": "宠物石灵魂 (",
    "Norkos Dungeon -1 / ": "诺科斯地牢-1 /",
    "Attacker Mult. (": "攻击者加成 (",
    "Choice ": "选择 ",
    "Generalist HP / CON (": "全能生命值 / 体质（",
    "Generalist Mult. (": "全能倍数 (",
    "Generalist: Base / Lv. (": "全能: 基础 / 等级 (",
    "Item: ": "物品: ",
    "Golden (": "金色 (",
    "Goldsent (": "散财童子 (",
    "Leveler (": "升级狂魔 (",
    "Muscled (": "肌肉发达 (",
    "Newbie (": "新手 (",
    "PetUpgrader (": "宠物升级达人 (",
    "Tired (": "疲倦 (",
    "Ascended (": "转生 (",
    "Fool (": "愚蠢 (",
    "Consumerist (": "消费主义 (",
    "Touchy (": "敏感 (",
    "Synced (": "已同步（",
    "Achieved ": "达成于 ",
    "": "",
    'Back up your account with a different login mechanism. You can only sync to one service at a time': '使用其他登录机制备份您的帐户。 您一次只能同步到一项服务',
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
    "Pet Rock": "宠物石",
    "Items Equipped": "物品已装备",
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
    /^(\d+)\:(\d+)\:(\d+)$/,
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
    [/^\n(.+)You and your pets will lose their equipment.\n(.+)$/, '您和您的宠物将丢失他们的装备。'],
    [/^\n(.+)You will go back to level 1 and your level cap will go up.\n(.+)$/, '您将回到第1级，并且您的等级上限将提高。'],
    [/^\n(.+)You will lose access to pets that are not bought.\n(.+)$/, '您将无法使用未购买的宠物。'],
    [/^\n(.+)Would you like to buy \"dart\" \(Score\: 40, Type\: mainhand\) for 280 gold?\n(.+)$/, '您是否愿意用 280金币 购买“飞镖”\(评分:40，类型:主手\)?'],
    [/^\n(.+)Would you like to buy \"pants\" \(Score\: 36, Type\: legs\) for 252 gold?\n(.+)$/, '您想花费 252金 购买“裤子”吗 \(评分:36，类型:腿\)?'],
    [/^\n(.+)Would you like to buy \"trumpet\" \(Score\: 120, Type\: mainhand\) for 840 gold?\n(.+)$/, '您是否愿意用840金购买“喇叭” \(评分:120，类型:主手\)?'],
    [/^\n(.+)You will lose some level-based achievements.\n(.+)$/, '您将失去一些基于等级的成就。'],
    [/^\n(.+)You will return to Norkos.\n(.+)$/, '您将返回到诺科斯。'],
    [/^\n(.+)Your boosters and injuries will expire.\n(.+)$/, '您的助推器和伤害将过期。'],
    [/^\n(.+)You\'re probably going to do this anyway.$/, '无论如何，您可能都会这样做。'],
    [/^\n(.+)You will lose all collectibles, but retain the number of times you found them previously.\n(.+)$/, '您将丢失所有收藏品，但保留之前找到它们的次数。'],
    [/^(\d+) hours$/, '$1 小时'],
    [/^You are a level (.+) Generalist. Your adventure will begin in Norkos Dungeon -1.$/, '您是一个 $1 级的通才。 您的冒险之旅将从诺科斯地牢-1开始。'],
    [/^You have (.+) ILP$/, '你有 $1 ILP'],
    [/^Buy for (.+) gold$/, '购买需要 $1 金币'],
    [/^(.+) has (.+) stamina$/, '$1 有 $2 耐力'],
    [/^Your next upgrade costs (.+) ILP. Total upgrades\: (.+).$/, '您的下一次升级费用为 $1 ILP。 升级总数：$2。'],
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
