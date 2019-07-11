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
    'Tower': '塔',
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
    'The Info & Data page (link in Overview page) now has complete PQ enemy info for all levels.': '“信息和数据”页面（“概述”页面中的链接）现在具有所有级别的完整个人任务的敌人信息。',
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
    'tin prospector': '锡探矿者',
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
    'Gold essence can be farmed in tower or PQ or mined or crafted (inefficiently).  Each method has their own difficulty.': '金精华可以在塔或个人任务中养殖或开采或制作（效率低下）。 每种方法都有自己的难度。',
    'Tower (Group': '塔 (组',
    'Inventory': '库存',
    'Gem shop for free or paid gems, since no events are ongoing.  You can buy event boxes from prior events.': '宝石商店提供免费或付费宝石，因为没有任何活动正在进行中。 您可以从之前的活动中购买活动盒。',
    'Global town quarry buff Lv.': '全局城镇采石场Buff等级。',
    'Other Battlers': '其他战士',
    'Others are free to join': '其他人可以自由加入',
    'Quick update incoming to fix the missing food descriptions on the Battle page.  :': '快速更新传入以修复“战斗”页面上缺少的食物描述。：',
    'Unless it is a woodcutting axe': '除非它是一个伐木斧',
    'Update complete.  Seeds already donated should have value as intended.  Going forward, new seed donations will not be accepted.': '更新完成。 已经捐赠的种子应该具有预期的价值。 展望未来，新的种子捐赠将不被接受。',
    'DPH Breakdown': 'DPH 衰弱',
    'Bars': '金属条',
    'Consumes': '消耗',
    'copper axe': '铜斧',
    'copper bar': '铜条',
    'copper battle axe': '铜战斧',
    'copper Chestplate': '铜胸甲',
    'copper dagger': '铜匕首',
    'copper furnace': '铜炉',
    'copper helmet': '铜头盔',
    'copper long sword': '铜长剑',
    'copper miner': '铜矿工',
    'copper mining anvil': '铜矿砧',
    'copper pickaxe': '铜镐',
    'copper plate legs': '铜板腿',
    'copper prospector': '铜探矿者',
    'copper quiver': '铜箭袋',
    'copper sculpture': '铜雕像',
    'copper shield': '铜盾',
    'copper short sword': '铜短剑',
    'copper spear': '铜矛',
    'pine bow': '松木弓',
    'pine idol': '松木雕像',
    'pine staff': '松木工',
    'polished stone': '磨制石器',
    'primitive amulet': '原始护身符',
    'primitive axe': '原始斧头',
    'primitive pickaxe': '原始镐',
    'stone prospector': '石探矿者',
    'tin bar': '锡条',
    'tin battle axe': '锡战斧',
    'tin chest plate': '锡胸板',
    'tin dagger': '锡匕首',
    'tin helmet': '锡头盔',
    'tin long sword': '锡长剑',
    'tin mining anvil': '锡矿砧',
    'tin pickaxe': '锡镐',
    'tin plate legs': '锡板腿',
    'tin quiver': '锡箭袋',
    'tin shield': '锡盾',
    'tin short sword': '锡短剑',
    'tin spear': '锡矛',
    'beech bow': '榉木弓',
    'beech staff': '榉木工',
    'bronze miner': '青铜矿工',
    'bronze prospector': '青铜探矿者',
    'level': '等级',
    'Level': '等级',
    'Items': '物品',
    'Walls & Pylons': '墙壁和塔',
    'Sculptures & Stones': '雕像与石头',
    'Weapons': '武器',
    'Staves': '法杖',
    'Amulets': '护身符',
    'An amulet with traces of magic. Click monsters to damage in combat.': '带有魔法痕迹的护身符。 点击怪物在战斗中造成伤害。',
    'Requires': '要求',
    'stone': '石头',
    'Show Stat Range': '显示属性范围',
    'Hide Stat Range': '隐藏属性范围',
    'Armor': '盔甲',
    'Visit the Click or tap stones to mine them': '进入采矿界面，点击下面的石头图标以开采石头',
    'coal': '煤',
    'Visit the Craft page': '进入工艺界面',
    'Visible Items': '可见物品',
    'crafting': '制作',
    'Crafting primitive pickaxe': '制作原始镐',
    'Equip pickaxe': '装备镐',
    'Visit the Mine page > Equipment tab': '访问采矿页面> 装备选项卡',
    'equip': '装备',
    'Equipped': '已装备',
    'Left Click': '点击鼠标左键',
    'to': '去',
    'Hire a miner': '雇一个矿工',
    'A sharp rock. Useful for mining.': '一块锋利的岩石。 可用于采矿。',
    'Hire': '雇佣',
    'Visit the Mine page > Miners tab': '访问采矿页面> 矿工选项卡',
    'stone pickaxe': '石镐',
    'mining': '采矿',
    'Hire a prospector': '雇佣探矿者',
    'Visit the Mine page > Prospectors tab': '访问采矿页面> 探矿者选项卡',
    'coal prospector': '煤探矿者',
    'Prospectors increase the speed at which ores spawn.': '探矿者提高了矿石生成的速度。',
    'Craft two primitive axes': '制作两个原始斧',
    'craft level up very slow': '工艺升级很慢',
    'Companion tokens are earned by fighting in the tower without anyone equipping a companion (even if it doesn\'t get summoned). The higher the tower floor, the more tokens can drop.': '同伴令牌是通过在塔中战斗而没有任何人装备同伴（即使它没有被召唤）而获得的。 塔楼越高，令牌就越多。',
    'Hire two woodcutters': '雇用两名伐木工',
    'Visit the Woodcut page': '访问伐木页面',
    'Abilities': '能力',
    'You haven\'t learned the woodcutting skill yet': '你还没有学过木刻技术',
    'Learn Now': '现在学习',
    'Required Items': '所需物品',
    'stone woodcutter': '石伐木工',
    'Ingredients': '材料',
    'Inscription': '铭刻',
    'inscription': '铭刻',
    'Required Skills': '所需技能',
    'woodcutting': '伐木',
    'Accuracy': '精度',
    'activate Retirement Glory': '激活退休荣耀',
    'Visit the Woodcut page > click on a woodcutter': '访问伐木页面>点击一个伐木工',
    'Retire a woodcutter': '辞退一个樵夫',
    'Confirm Activation': '确认激活',
    'Don\'t view all your items and recipes in one go': '不要一次查看所有物品和配方',
    'Farming': '耕作',
    'Confirm': '确定',
    'Craft a copper dagger (Craft page > Combat tab': '制作一个铜匕首（工艺页面 > 战斗标签',
    'You will need to craft a stone furnace and a copper ingot first': '您需要先制作石炉和铜锭',
    'You want to train astronomy because several inscription recipes and spells require it, but there are enemies that will drop them, too.': '你想训练天文学，因为有几个铭文配方和法术需要它，但是也有敌人会掉落它们。',
    'you need to farm essences and bars anyway once you hit the higher tiers, thats where you focus': '无论如何，一旦你达到更高的层次，你就需要种植香精和巧克力棒，这是你的重点',
    'to sell for': '去出售获得',
    'Usually die near end': '通常死在接近结束',
    'Used to melt ores into bars': '用于将矿石熔化成条状',
    'use it at start of fight': '在战斗开始时使用它',
    'Really sell the selected items?': '真的要卖掉所选商品吗？',
    'regroup?': '重组？',
    'This global buff can be achieved by donating items to the town armory.': '这个全局Buff可以通过向城镇军械库捐赠物品来实现。',
    'This global buff can be achieved by donating items to the town dwellings.': '这个全局Buff可以通过向城镇住宅捐赠物品来实现。',
    'This global buff can be achieved by donating items to the town library.': '这个全局Buff可以通过向城镇图书馆捐赠物品来实现。',
    'This global buff can be achieved by donating items to the town lumber yard.': '这个全局Buff可以通过向城镇木材场捐赠物品来实现。',
    'This global buff can be achieved by donating items to the town observatory.': '这个全局Buff可以通过向城镇天文台捐赠物品来实现。',
    'This global buff can be achieved by donating items to the town quarry.': '这个全局Buff可以通过向城镇采石场捐赠物品来实现。',
    'This global buff can be purchased with bought gems in the shop.': '这个全局Buff可以在商店购买宝石购买。',
    'watermelon': '西瓜',
    'A chiseled stone, suitable for crafting.': '一种轮廓分明的石头，适合制作。',
    'A chopped log from a pine tree, suitable for crafting.': '来自松树的切碎原木，适合工艺。',
    'A chopped log from an ash tree, suitable for crafting.': '从白蜡树上砍下的原木，适合工艺。',
    'Skill too low for cursed,  probably 100 needed to reforge': '技能太低而不能被诅咒，大概需要100重铸',
    'Some unprocessed copper metal ore, suitable for crafting.': '一些未经加工的铜金属矿石，适合工艺。',
    'Global Crafting Buff': '全局工艺Buff',
    'Global town armory buff Lv.': '全局城镇军械库Buff等级。',
    'Failing to reforge won\'t reduce the rarity level': '重铸失败不会降低稀有程度',
    'Have to craft armor pieces and weapons mostly.': '主要是制作盔甲和武器。',
    'Failed to craft primitive pickaxe. Your crafting queue is full.': '无法制作原始镐。 您的制作队列已满。',
    'Equip the Slash ability': '装备削减能力',
    'Crafting copper bar': '制作铜条',
    'copper': '铜',
    'Equip a copper dagger': '装备铜匕首',
    'Visit the Battle page > Loadout > Gear [edit]': '访问战斗页>备战>装备[编辑]',
    'Leggings': '绑腿',
    'Chest Gear': '胸部装备',
    'Head Gear': '头部装备',
    'Off Hand': '副手装备',
    'Visit the Battle page > Loadout > Abilities Edit': '访问战斗页面>备战>能力编辑',
    'No requirements to equip this skin': '装备这种皮肤无要求',
    'slash (': '削减 (',
    'Combat should be fine now': '战斗现在应该没问题了',
    'Complete a solo battle': '完成一次单人战斗',
    'Solo': '单人',
    'Speed': '速度',
    'Visit the Battle page > select Solo type': '访问战斗页面>选择单人类型',
    'Enemy Units': '敌方单位',
    'Buy 4 lettuce seeds': '买4颗生菜种子',
    'You haven\'t learned the farming skill yet': '你还没有学会耕作技术',
    'Food': '食物',
    'Herbs': '草药',
    'Trees': '树木',
    'XP': '经验',
    'Lemon Seed': '柠檬种子',
    'lettuce seed': '生菜种子',
    'Regenerates 9 energy over a 300s digestion period.': '在300秒的消化周期内可再生9种能量。',
    'Cost': '成本',
    'Plots': '地块',
    'Plant 4 lettuce': '种植4棵生菜',
    'Growth time is a minute': '生长时间为1分钟',
    'Visit the Farm page > Plots tab': '访问农场页面>地块选项卡',
    'Visit the Farm page > Shop tab': '访问农场页面>商店选项卡',
    'Click': '点击',
    'Plant 1 rubia flowers': '种植1株茜草花',
    'Pick 1 rubia flowers': '收获1株茜草花',
    'Pick 4 lettuce': '收获4生菜',
    'Inscribe Magenta Pigment': '铭刻洋红色素',
    'Visit the Inscribe page > Pigments tab': '访问铭刻页面> 颜料选项卡',
    'Levels': '等级',
    'Magic Codexes': '魔术法典',
    'magenta pigment': '洋红色素',
    'bright green pigment': '亮绿色素',
    'Used in inscription for marking pages': '用于标记页面的铭文',
    'Inscribing magenta pigment': '刻印的品红色颜料',
    'Inscribe pine paper': '刻上松纸',
    'Visit the Inscribe page > Paper tab': '访问铭刻页面> 纸选项卡',
    'Used in inscription with pigments to make ability books': '用于用颜料刻字，制作能力书',
    'pine paper': '松纸',
    'pine log': '松木原木',
    'Rubia Flower': '茜草花',
    'Inscribe Berserk (level': '铭刻狂暴（等级',
    'Visit the Inscribe page > Abilities tab': '访问铭刻页面> 能力选项卡',
    'Penetrating slash Lv.': '穿透削减等级.',
    'Berserk Lv.': '狂暴等级.',
    'Shield bash Lv.': '盾击等级.',
    'Slash Lv.': '削减等级.',
    'Water Dart': '水镖',
    'blade spin Lv.': '刀刃旋转等级.',
    'iron will Lv.': '钢铁意志等级.',
    'Can be consumed to learn the berserk ability.': '可以消耗学习狂暴能力。',
    'per second. (+0.1 per lvl': '每秒。(+0.1 每级',
    'damage taken. (+3% per lvl': '承受伤害。 (+3% 每级',
    'At level': '在等级',
    'taunt Lv.': '嘲讽等级.',
    'bolster Lv.': '加强等级.',
    'Learn Berserk': '学习狂暴',
    'Visit the Battle page > Loadout > Abilities [edit]': '访问战斗页面>备战>能力[编辑]',
    'Available Tomes': '可用卷轴',
    'Berserk tome Lv.': '狂暴卷轴等级.',
    'learn': '学习',
    'Successfully learnt Berserk tome Lv.': '成功地学习了狂暴卷轴等级.',
    'damage and attack speed. (+5% per lvl': '伤害和攻击速度。(+5% 每级',
    'Deals 60% weapon damage to all enemies. (+5% per lvl': '对所有敌人造成60%武器伤害。 (+5% 每级',
    'Dodge rate from defense skill won\'t fall below 35%.': '防御技能的闪避率不会低于35%。',
    'Bolster (': '加强 (',
    'Deals 10% of your accuracy as physical damage every second. (+3% per lvl': '每秒造成10％的命中作为物理伤害。（+3％ 每级',
    'You haven\'t learned the astronomy skill yet': '你尚未学习天文学技能',
    'Astronomy Items': '天文物品',
    'Mages collect magical fragments and shards over time.': '随着时间的推移，法师收集魔法碎片和碎片。',
    'Stat': '统计',
    'Spell Book': '魔法书',
    'Upgrade': '升级',
    'Upgrade Mage': '升级法师',
    'Fragments of a earth shard': '土之碎片',
    'Fragments of a fire shard': '火之碎片',
    'Fragments of a water shard': '水之碎片',
    'Fragments of an air shard': '气之碎片',
    'earth shard fragment': '土之碎片',
    'fire shard fragment': '火之碎片',
    'water shard fragment': '水之碎片',
    'air shard fragment': '气之碎片',
    'complete air shard': '完整的气之碎片',
    'complete earth shard': '完整的土之碎片',
    'complete fire shard': '完整的火之碎片',
    'complete water shard': '完整的水之碎片',
    'A complete air shard': '完整的气之碎片',
    'A complete earth shard': '完整的土之碎片',
    'A complete fire shard': '完整的火之碎片',
    'A complete water shard': '完整的水之碎片',
    'Action': '行动',
    'All fixed now': '全部修复了',
    'And have town karma': '并且拥有城镇业',
    'Allied Units': '盟军单位',
    'Victory': '胜利',
    'lemon': '柠檬',
    'lemon grass': '香茅',
    'eat': '吃掉',
    'Worm': '蠕虫',
    'Update live, enjoy': '实时更新，尽情享受',
    'Used to craft copper tools and weapons': '用于制作铜工具和武器',
    'Used to make a brown pigment.': '用于制造棕色颜料。',
    'occasionally receive free food and herbs': '偶尔会收到免费的食物和草药',
    'occasionally receive free magic codexes': '偶尔会收到免费的魔法法典',
    'better and higher quantities with higher buff levels': '更好，更高的数量与更高水平的Buff',
    'better and more frequently with higher buff levels': '更好，更频繁地使用更高级别的Buff',
    'Attack': '攻击',
    'tin woodcutter': '锡伐木工',
    'copper woodcutter': '铜伐木工',
    'to use or sell for': '使用或者出售',
    'Codex of Knowledge': '知识法典',
    'Codex of Magic': '魔法法典',
    'Codex of Tutoring': '辅导法典',
    'Crafting copper pickaxe': '制作铜镐',
    'Crafting copper mining anvil': '制作铜矿砧',
    'Crafting copper Chestplate': '制作铜胸甲',
    'Protect your heart': '保护你的心脏',
    'unequip': '卸掉',
    'Protect your head': '保护你的头部',
    'Protect your legs': '保护你的腿部',
    'A poorly made dagger.': '一把制作粗糙的匕首。',
    'A good balance between offense and defense': '进攻和防守之间的良好平衡',
    'archive': '存档',
    'xp': '经验',
    'A pure offensive weapon': '纯粹的进攻性武器',
    'A slow pure offensive weapon.': '缓慢的纯进攻性武器。',
    'Provides large defense bonuses': '提供高额防御奖励',
    'Used with a bow.': '与弓一起使用。',
    'A slow but powerful ranged weapon.  Bows are useless without quivers.': '一种缓慢但威力强大的远程武器。没有箭筒，弓是没有用的。',
    'Skills': '技能',
    'Currently online': '当前在线人数',
    'Leaderboard Rankings': '排行榜排名',
    'Show Top': '显示前',
    'Username': '用户名',
    'Total XP': '累计经验',
    'Rank': '排行',
    'nothing queued': '没有排队',
    'nothing reforging': '没有重铸',
    'Defense': '防御',
    'Total Karma From Everyone Today': '今天来自所有人的业总计',
    'Town Items Donated Today (By Everyone': '今天捐赠的城镇物品（由每个人捐赠）',
    'Daily Personal Karma Rewards': '日常个人业力奖励',
    'Daily Town Karma Overview': '日常城镇业概览',
    'Your Items (You Can Donate These': '你的物品（你可以捐赠这些物品',
    'Your Personal Karma Today': '您今日的个人业力',
    'none': '无',
    'Magic': '魔法',
    'Health': '生命',
    'Town Locations': '城镇地点',
    'Nothing yet.': '什么都没有。',
    'Donate Items': '捐赠物品',
    'Dwellings': '住宅',
    'Announcements': '通告',
    'Armory': '军械库',
    'Party': '团队',
    'Observatory': '天文台',
    'Quarry': '采石场',
    'Lumber Yard': '伐木场',
    'Pear': '梨',
    'pineapple': '菠萝',
    'potato': '土豆',
    'red apple': '红苹果',
    'lettuce': '生菜',
    'carrot': '胡萝卜',
    'Donating these will add': '每一个捐赠都将增加',
    'karma each.': '业',
    'acai berry': '巴西莓',
    'tamarind honey': '罗望子蜂蜜',
    'grapefruit': '葡萄柚',
    'Donating this will add': '捐赠这个将增加',
    'Mage': '法师',
    'Cost Per Hour': '每小时费用',
    'water': '水',
    'air': '气',
    'fire': '火',
    'earth': '土',
    'Hire Mage': '雇佣法师',
    'Remove': '移除',
    'Add': '添加',
    'Most Damage Done': '造成的最高伤害',
    'Most Damage Taken': '受到的最高伤害',
    'Most Healing Done': '最高恢复生命值',
    'Rewards': '奖励',
    'Personal Quest': '个人任务',
    'PQ': '个人任务',
    'Collect': '收集',
    'yellow green pigment': '黄绿色素',
    'You already know this': '你已经知道了这个',
    'Inscription': '铭刻',
    'Can be consumed to learn the slash ability.': '可以消耗来学习削减能力。',
    'active': '激活',
    'magic': '魔法',
    'Help': '帮助',
    'Server': '服务器',
    'SERVER': '服务器',
    'Shift Click': 'Shift \+ 点击',
    'pink rose': '粉红玫瑰',
    'pine book': '松纸书',
    'Codex of Learning': '学习法典',
    'codex of tutoring': '辅导法典',
    'astronomy': '天文学',
    'beech log': '榉木原木',
    'basil': '蓬蒿',
    'endive': '菊苣',
    'An axe forged from copper. Used for woodcutting': '用铜锻造的斧头。 用于伐木',
    'Crafting copper axe': '制作铜斧',
    'Crafting copper long sword': '制作铜长剑',
    'Crafting tin bar': '制作锡条',
    'ash log': '梣木',
    'A pickaxe forged from copper. Used for mining': '用铜锻造的镐。 用于采矿',
    'A chopped log from a beech tree, suitable for crafting.': '从山毛榉树切碎的原木，适合制作。',
    'A chopped log from an oak tree, suitable for crafting.': '橡木树上切下的原木，适合制作。',
    'A hammer forged with an anvil. Used for mining': '用铁砧锻造的锤子。 用于采矿',
    'Used to craft tin tools and weapons': '用于制作锡制工具和武器',
    'tin': '锡',
    'Some unearthed coal, suitable for crafting.': '一些出土的煤炭，用于工艺。',
    'Some unprocessed tin metal ore, suitable for crafting.': '一些未经加工的锡金属矿石，用于工艺。',
    'Some unprocessed twisted copper and tin metal ores, suitable for crafting.': '一些未加工的扭曲的铜和锡的金属矿石,用于工艺。',
    'sharp rock': '锋利的岩石',
    'Reforge': '重铸',
    'Rough': '粗糙的',
    'Total Gems': '宝石总数',
    'Tricky Step': '复杂的步骤',
    'Triple combat energy regeneration': '三重战斗能量再生',
    'Two Handed': '双手',
    'various jewels': '各种宝石',
    'Your Gems': '你的宝石',
    'Your Upgrades': '你的升级',
    '% chance to get 2x shards': '% 的几率获得 2x 碎片',
    'Bag Of Gems': '一袋宝石',
    'bronze': '青铜',
    'chance to reforge to higher rarity': '几率重铸到更高稀有性',
    'Change': '改变',
    'companion is active, just go for it': '同伴在线，去找他吧',
    'Combat: Inactive': '战斗:不活跃',
    'Crafting copper shield': '制作铜盾',
    'Crafting stone wall': '制作石墙',
    'Crafting copper plate legs': '制作铜板腿',
    'cupid\'s bow (bow weapon': '丘比特之弓(弓箭武器',
    'Deposit': '存款',
    'Deposit / Withdraw': '存款/提款',
    'did your personal buffs from store end?': '你在商店里的Buff结束了吗?',
    'Global Buffs': '全局Buff',
    'Global buffs can only be purchased with paid gems and affect all players across all servers while active.': '全球增益只能用付费宝石购买，并且影响所有服务器上的所有玩家。',
    'Paid Gems': '付费宝石',
    'Free gems will occasionally appear in your mine pit (maximum of 15 per day) and can also be earned by participating in official top-floor tower battles when the tower has not been fully cleared (seasonal server).': '免费宝石偶尔会出现在您的矿井中（每天最多15个），并且当塔尚未完全清理时（季节性服务器），也可以通过参加官方顶层塔战斗获得。',
    'gems and gold': '宝石和黄金',
    'Gathering: Inactive': '收集：无效',
    '2 farming plots': '2 农场地块',
    '2 spaces': '2 空间',
    '20% Combat XP': '20% 战斗经验',
    '20% crafting speed': '20% 工艺速度',
    '20% damage': '20% 伤害',
    '20% energy regen': '20% 能量回复',
    '20% gather speed': '20% 收集速度',
    '20% inscription speed': '20% 铭刻速度',
    '20% mining damage': '20% 采矿伤害',
    '20% speed': '20% 速度',
    '20% woodcutting speed': '20% 伐木速度',
    '2018 Holiday Gift Box': '2018 节日礼品盒',
    '2019 Lunar New Year Red Envelope': '2019 农历新年红包',
    '2019 New Year\'s Fireworks Box': '2019 新年烟花盒',
    '2019 St. Patrick\'s Day Pot of Gold': '2019 圣帕特里克节金罐',
    '2019 Valentine\'s Day Box of Chocolates': '2019 情人节盒装巧克力',
    '35% Mining XP': '35% 采矿经验',
    '35% Woodcutting XP': '35% 伐木经验',
    '50% Combat Items Drop Chance': '50％ 战斗物品掉落几率',
    'candy cane (food item': '糖果手杖（食用物品',
    'bear slippers (leg equipment': '熊拖鞋（腿部装备',
    'chocolates (food item': '巧克力（食用物品',
    'clover amulet (neck equipment, 4-8 leaves': '三叶草护身符（颈部装备，4-8片叶子',
    'decorative balloons (offhand equipment': '装饰气球（副手设备',
    'jeweled platelegs (equipment': '饰有宝石的板腿(装备',
    'lion costume body (equipment': '狮子服装身体(装备',
    'lion costume head (equipment': '狮子服装头部(装备',
    'lion claws (short sword weapon': '狮子爪(短剑武器',
    'lunar shield (offhand equipment': '月球盾（副手装备',
    'ornamental hat (head equipment': '装饰帽（头部装备',
    'Personal Astronomy Upgrade': '个人天文学升级',
    'Personal Combat Upgrade': '个人战斗升级',
    'Personal Crafting Upgrade': '个人工艺升级',
    'Personal Farming Upgrade': '个人农场升级',
    'Personal Inscription Upgrade': '个人铭刻升级',
    'Personal Mining Upgrade': '个人采矿升级',
    'Personal upgrades/buffs also let you spend more energy per fight with each upgrade you have (up to 40 energy spent with 5+ upgrades active).': '个人升级/Buff也可让您在每次升级时每次战斗消耗更多能量（激活5次升级可消耗多达40个能量）。',
    'Personal Woodcutting Upgrade': '个人木工升级',
    'Phasing Key': '相位键',
    'Raise Your Glass': '举起酒杯',
    'Randomly contains one of various goodies that were available during the Holidays': '随机包含节日期间可用的各种各样的好东西之一',
    'Randomly contains one of various goodies that were available during the Lunar New Year\'s event': '随机包含一个各种各样的糖果，可在农历新年期间的活动',
    'Randomly contains one of various goodies that were available during the New Year\'s event': '随机包含新年活动期间提供的各种好东西之一',
    'Randomly contains one of various goodies that were available during the St. Patrick\'s Day event': '随机包含圣帕特里克节活动期间提供的各种好东西之一',
    'Randomly contains one of various goodies that were available during the Valentine\'s Day event': '随机包含情人节活动期间提供的各种好东西之一',
    'Re-rolls an item entirely': '完全重抽物品',
    'Regenerate 20 combat energy instantly.': '立即回复20点战斗能量。',
    'Requires at least level 20 magic to equip': '需要至少20级的魔法装备',
    'Requires at least level 60 attack to equip': '需要至少60级的攻击装备',
    'Requires at least level 60 defense to equip': '需要至少60级防御装备',
    'rose quartz amulet (neck equipment': '玫瑰石英护身符(颈饰',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'chance the item will break and be lost entirely.  The item quality will\n          not be affected at all whether you succeed or fail.': '有可能物品会破碎并完全丢失。无论您成功或失败，产品质量都不会受到任何影响。',
    '\n        At a cost of 5 + (15% of MP) max health.': '以 5 + (15%法力) 的生命值上限为代价。',
    '\n        Heals target for 3 + (100% of MP).': '恢复目标生命值 3 +（100％法力）。',
    '\n        online\n     ': '在线',
    '\n      Buy\n   ': '购买',
    'mage\n                 ': '法师',
    'to donate to the town\n             ': '捐赠给城镇',
    'karma at this location\n           ': '业在这个地点',
    'No': '不',
    'no': '不',
    '\n                    Enable floating text\n                 ': '启用浮动文本',
    '\n                    Disable summary list\n                 ': '禁用汇总列表',
    '\n                    Show recipe consumables\n                 ': '展示配方耗材',
    '\n                    Enable number shorthand\n                 ': '启用数字速记',
    '↵              Craft': '制作',
    '\n              Craft All (': '全部制作 (',
    '\n                Craft All (': '全部制作 (',
    '\n                  Server': '服务器',
    '\n              Craft X (': '制作 X (',
    '\n                  Craft X (': '制作 X (',
    '\n        Forfeit\n     ': '放弃',
    '\n          Current Coffers': '当前库房',
    '\n                      Buy\n                   ': '购买',
    '\n      Mages\n   ': '法师',
    '\n      You have no astronomy items!\n   ': '你没有天文物品！',
    '\n        You can\'t change your active target while berserking': '在战斗时你无法改变你的活跃目标',
    '\n        Duration': '持续时间',
    '\n        You lose': '你输了',
    '\n          Still growing, please wait.\n       ': '还在成长，请稍候。',
    '\n            Max': '最大',
    '\n        Lasts 5 minutes.': '持续5分钟。',
    '\n          Your plant is still growing': '你的植物仍在生长',
    '\n                Destroy All\n             ': '全部毁灭',
    '\n                Pick All\n             ': '全部收获',
    '\n          Pickaxe\n       ': '镐子',
    '\n            Cooldown': '冷却',
    '\n                    Buy': '购买',
    '\n            Wave': '波次',
    '\n        (+20% damage per lvl': '(+20% 伤害每一级',
    '\n        Increases the chance of getting rarer logs as well as increasing the\n        quantity of more basic logs.\n     ': '增加获得更稀有原木的机会，同时增加更多基本原木的数量。',
    '\n        No chest gear\n     ': '没有胸部装备',
    '\n        No head gear\n     ': '没有头部装备',
    '\n        No leg gear\n     ': '没有腿部装备',
    '\n        No main hand gear\n     ': '没有主手装备',
    '\n        No neck gear\n     ': '没有颈部装备',
    '\n        No off hand gear\n     ': '没有副手装备',
    '\n      Equipped Gear\n   ': '已装备物品',
    '\n        copper dagger\n        \n        \n        \n     ': '铜匕首',
    '\n        copper bar\n        \n        \n        \n     ': '铜条',
    '\n            Less\n         ': '收起',
    '\n            More\n         ': '更多',
    '\n          remaining': '剩余',
    'but increase its attack speed by 1,250% for 60 seconds before it leaves.\n         ': '但在他离开之前，它的攻击速度提高1250％，持续60秒。',
    '\n        Determines the rarest wood a woodcutter can chop.\n     ': '确定伐木工人可以砍伐的最稀有的木材。',
    '\n        You have no woodcutting items!\n     ': '你有没有伐木物品！',
    '\n              Retire this woodcutter,\n           ': '辞退这个伐木工，',
    '\n            This will free up one of your woodcutter slots so you can hire a new one.\n         ': '这将释放您的一个伐木工插槽，以便您可以雇用一个新的。',
    '\n        Hire\n     ': '雇佣',
    '\n          Offhand\n       ': '副手',
    'Max pickaxe energy.\n       ': '镐子能源上限',
    'Extra passive miner damage.\n       ': '额外的被动矿工伤害',
    'Energy regen per minute.\n         ': '能量回复每分钟。',
    'Energy per click.\n       ': '能量每次点击。',
    'Damage per click.\n       ': '伤害每次点击。',
    '\n        Tip': '提示',
    '\n            Enable Multihit\n         ': '启用批量',
    '\n                    Skip Tutorial\n                 ': '跳过教程',
    '\n        Craft\n     ': '制作',
    '\n        Craft Max\n     ': '制作最大',
    '\n                                      SERVER\n                                   ': '服务器',
    '\n                    mining\n                 ': '采矿',
    '\n                                        meat\n                                     ': '肉',
    '\n        Craft Time': '制作耗时',
    '\n            Base DPS': '基础DPS',
    '\n              Miners': '矿工',
    '\n          You can only reforge one item at a time.  During a global combat buff, failing to reforge will not reduce\n          the rarity level nor have any chance to break the item.': '你一次只能重造一件物品。在全局战斗Buff中，重铸失败不会降低稀有等级，有几率损坏物品。',
    '\n        sharp rock\n        \n        \n        \n     ': '锋利的岩石',
    '\n        stone pickaxe\n        \n        \n        \n     ': '石镐',
    '\n      Level': '等级',
    '\n      Bonus XP is awarded for the player last hitting ores.\n   ': '最后一击矿石将获得额外的经验值。',
    '\n                                        GAME\n                                     ': '游戏',
    '\n          Prospectors (': '探矿者 (',
    '\n                    Disable condensed chat\n                 ': '禁用精简聊天',
    '\n            Idol Bonus': '雕像奖励',
    '\n            Level Bonus': '等级奖励',
    '\n          Miners (': '矿工 (',
    '\n                Fire\n             ': '辞退',
    '\n                Hire\n             ': '雇佣',
    '\n                Level': '等级',
    '\n          Confirm you want to retire?\n       ': '你确定要辞退吗?',
    '\n          ago\n       ': '前',
    '\n                                      Game\n                                   ': '游戏',
    '\n          Equipment\n       ': '装备',
    '\n            Join\n         ': '加入',
    '\n            Disable Multihit\n         ': '禁用批量',
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
    '\n                  Town\n               ': '城镇',
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
	[/^Level Up! You are now level (\d+) woodcutting$/, '升级了！ 你现在达到了伐木$1级'],
	[/^Level Up! You are now level (\d+) mining$/, '升级了！ 你现在达到了采矿$1级'],
    [/^Level Up! You are now level (\d+) astronomy$/, '升级了！ 你现在达到了天文学$1级'],
    [/^Level Up! You are now level (\d+) crafting$/, '升级了！ 你现在达到了工艺$1级'],
    [/^Level Up! You are now level (\d+) farming$/, '升级了！ 你现在达到了耕作$1级'],
    [/^Level Up! You are now level (\d+) inscription$/, '升级了！ 你现在达到了铭刻$1级'],
    [/^Level Up! You are now level (\d+) health$/, '升级了！ 你现在达到了生命值$1级'],
	[/^Requires level (\d+) magic$/, '需要$1级魔法'],
    [/^Requires level (\d+) attack$/, '需要$1级攻击'],
    [/^Requires level (\d+) defense$/, '需要$1级防御'],
    [/^(\d+) Battles$/, '$1 次战斗'],
    [/^([\d\.]+) health$/, '$1 生命值'],
    [/^([\d\.]+) defense$/, '$1 防御'],
    [/^([\d\.]+) armor$/, '$1 装甲'],
    [/^([\d\.]+) accuracy$/, '$1 命中'],
    [/^([\d\.]+) attack speed$/, '$1 攻击速度'],
    [/^([\d\.]+) \- ([\d\.]+) damage$/, '$1 \- $2 伤害'],
    [/^([\d\.]+) \- ([\d\.]+) attack speed$/, '$1 \- $2 攻速'],
    [/^([\d\.]+) \- ([\d\.]+) accuracy$/, '$1 \- $2 命中'],
    [/^([\d\.]+)\% faster mine pit deposits$/, '$1\% 更快的矿坑沉积'],
    [/^([\d\.]+)\% astronomy mage shards\/hour rate$/, '$1\% 天文法师碎片\/小时率'],
    [/^([\d\.]+)\% extra passive miner damage$/, '$1\% 额外的矿工被动伤害'],
    [/^([\d\.]+)\% Inscription XP$/, '$1\% 铭文经验'],
    [/^([\d\.]+)\% Astronomy XP$/, '$1\% 天文学经验'],
    [/^([\d\.]+)\% Farming XP$/, '$1\% 耕作,经验'],
    [/^([\d\.]+)\% faster woodcutters$/, '$1\% 伐木工速度'],
    [/^([\d\.]+)\% Jewel Drop Rate$/, '$1\% 宝石掉落率'],
    [/^([\d\.]+)\% Crafting XP$/, '$1\% 工艺经验'],
    [/^([\d\.]+)\% critical chance$/, '$1\% 暴击几率'],
    [/^([\d\.]+)\% higher companion stats in battle$/, '$1\% 战斗中更高的同伴属性'],
    [/^([\d\.]+)\% better chance to reforge equipment \(must still qualify to reforge to get this bonus$/, '$1\% 更好的机会重铸装备\(必须仍然有资格重铸得到这个奖励'],
    [/^([\d\.]+) energy regen$/, '$1 能量回复'],
    [/^([\d\.]+) energy storage$/, '$1 能量存储'],
    [/^([\d\.]+) damage$/, '$1 伤害'],
    [/^([\d\.]+) energy per hit$/, '$1 能量每次'],
    [/^(\d+) \/ (\d+) XP$/, '$1 \/ $2 经验'],
    [/^(\d+) xp$/, '$1 经验'],
    [/^Mined (\d+) \/ (\d+) stones$/, '开采 $1 \/ $2 石头'],
    [/^Crafted (\d+) \/ (\d+) primitive pickaxes$/, '制作 $1 \/ $2 原始镐'],
    [/^\n                  Craft X \((\d+)\)\n               $/, '制作 X \($1\)'],
    [/^\n                Craft All \((\d+)\)\n             $/, '全部制作 X \($1\)'],
    [/^\n            Out of pickaxe energy. Please wait!\n            Currently ([\d\.]+) \/$/, '镐的能量消耗完了。请耐心等待恢复！当前能量 $1 \/ '],
    [/^Heals for (\d+)hp over a (\d+)s digestion period.$/, '在 $1 秒的消化期内恢复 $2 生命值'],
    [/^Heals for (\d+)hp instantly.$/, '立即恢复 $1 生命值。'],
    [/^woodcutters can chop logs \+(\d+) tiers higher than usual$/, '伐木工人可以砍比平时高 $1 级的树木'],
    [/^consume for (\d+) Magic XP.$/, '消耗 $1 魔法经验'],
    [/^Takes (\d+)s to finish digesting.$/, '消化需要 $1 秒。'],
    [/^Reach level (\d+) in personal quest$/, '在个人任务中达到 $1 级'],
    [/^Dealt at least ([\d\.,]+) damage in one fight$/, '在一场战斗中至少造成 $1 点伤害'],
    [/^Took at least ([\d\.,]+) damage in one fight$/, '在一场战斗中至少受到 $1 点伤害'],
    [/^Deal ([\d\.,]+) Damage$/, '造成 $1 点伤害'],
    [/^Take ([\d\.,]+) Damage$/, '受到 $1 点伤害'],
    [/^Clear floor (\d+) in the tower$/, '完成清理第 $1 层塔'],
    [/^([\d\.,]+) Spellcasts$/, '施法 $1 次'],
    [/^Cast at least ([\d\.,]+) spells$/, '施放至少 $1 次法术'],
    [/^Can be consumed for ([\d\.,]+) Magic XP.$/, '消耗 $1 点魔法经验。'],
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
