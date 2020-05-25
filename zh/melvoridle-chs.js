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
    'Browse Dungeons': '访问地牢',
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
    'Start Dungeon': '进入地牢',
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
    'Water God Dungeon': '水神地牢',
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
    'Max Hit': '最大伤害',
    'Max Scores': '最高分',
    'Dmg Reduction': '伤害降低',
    'Defensive': '防御性',
    'Easy Mode': '简单模式',
    'Elder Chest': '上古胸甲',
    'Enemy': '敌人',
    'Enemy Combat Level': '敌人战斗等级',
    'Enemy Special Attacks': '敌人特殊攻击',
    'Equipment': '装备',
    'Evasion': '闪避',
    'Fire Status': '火堆状态',
    'Food Efficiency': '食物效果',
    'Unlock': '解锁',
    'Start Fishing': '开始钓鱼',
    'Longbows': '长弓',
    'Magic Skillcape': '魔术技能斗篷',
    'Empty': '空',
    'Maple Logs': '枫树原木',
    'Miss!': '未命中!',
    'Moist Monster': '潮湿的怪物',
    'Moss Giant': '苔藓巨人',
    'Normal': '普通',
    'Normal Logs': '普通原木',
    'Normal Mode': '普通模式',
    'Not Active': '未激活',
    'Oak Cooking Fire': '橡木烹饪火',
    'Offensive Stats': '进攻统计',
    'Open Easter Shop': '打开复活节商店',
    'Plant All for': '全部种植花费',
    'Plant a Seed': '播种',
    'Prayer Points': '祈祷点数',
    'Raw Blowfish': '生河豚',
    //5.25云汉化↓
    'Adamantite  Bar': '精金锭',
    'Air God  Dungeon': '风神殿',
    'Air Rune': '风之符文',
    'Allotments': '分配',
    'Amulet  of Looting': '战利品护符',
    'An Elite  CafeMedia Publisher': '精英CafeMedia出版商',
    'Arrow  Shafts': '箭杆',
    'Arrows': '箭头',
    'Art of  Control': '控制之技',
    'Attack  Skillcape': '攻击技能斗篷',
    'Auto Eat  - Tier II': '自动进餐-II级',
    'Bandit': '强盗',
    'Bandit  Base': '强盗营地',
    'Bandit  Chest': '强盗宝箱',
    'Bandit  Hideout': '强盗藏匿处',
    'Bandit  Trainee': '强盗新兵',
    'Bank  Slot': '银行槽位',
    'Bank  Space Used': '银行空间',
    'Bank  Value': '银行价值',
    'Barbarian  Fishing': '野蛮人钓鱼',
    'Base  ingredient for Potions.': '魔药的基本成分',
    'Bird  Nests Potion': '燕窝药剂',
    'Blue  Dragonhide': '蓝龙皮',
    'Bonfire  Status': '篝火状态',
    'Bowstring': '弓弦',
    'Bypass  equipment requirements for Slayer Areas': '避开杀戮地区的装备要求',
    'Capped  at 2,000 SC': '最大为2000SC',
    'Castle  of Kings': '国王的城堡',
    'Change  Character Name': '更改角色名称',
    'Chef': '厨师',
    'Collect  a random Gem for each mining action when equipped. Does not work on Rune  Essence.': '装备后,每次采矿时可获得随机宝石,对符文精华无效',
    'Confetti  Crossbow': '五彩弩',
    'Confused  Pirate': '困惑的海盗',
    'Cooking  burns no food when equipped': '装备时烹饪将不会烧焦食物',
    'Crafting  Skillcape': '工艺技能斗篷',
    'Created  by Patreon (deathbyconfetti': '创建者Patreon(deathbyconfetti',
    'Created  by Patreon (RS Wikis': '创建者Patreon（RS Wiki',
    'Created  by Patreon (Skull': '创建者Patreon（Skull',
    'Crossbows': '弩',
    'Custom  Amount': '自定义数量',
    'Cut 2  different trees simultaneously': '同时砍伐两棵不同的树',
    'Dark  Horned Elite': '黑暗巨魔',
    'Dark  Wizard': '黑巫师',
    'Decreased  Crafting Interval': '减少制作间隔',
    'Defensive': '防御',
    'Defensive  Stats': '防御值',
    'Desolate  Plains': '荒原',
    'Discord': '嘈杂声',
    'Dmg  Reduction': '伤害减少',
    'Doubles  the amount of items caught.': '使捕获的道具数量加倍',
    'Dragon  Gear': '龙族装备',
    'Dragon  Valley': '龙谷',
    'Dragonhide': '龙皮',
    'Dragonite': '龙石',
    'Dragons  Den': '龙穴',
    'Drops': '掉落物',
    'Dungeon  Difficulty': '地下城难度',
    'Dungeon  Equipment Swapping': '地下城装备交换',
    'Earth  God Dungeon': '地神殿',
    'Easy  Mode': '简单模式',
    'Egg  Chest': '蛋箱',
    'Elder  Chest': '上古之箱',
    'Elite': '精英',
    'Elite  Chest': '精英之箱',
    'Empty': '空的',
    'Enable  Equipment Swapping during dungeons.': '可在地下城中更换装备',
    'Enemy': '敌人',
    'Enemy  Combat Level': '敌人战斗等级',
    'Enemy  Special Attacks': '敌人特殊攻击',
    'Entry  Requirements': '进入要求',
    'Equipment': '装备',
    'Equipment  Sets': '装备套装 ',
    'Equipped': '装备',
    'Evasion': '闪避',
    'Expanded Knowledge': '知识拓展',
    'Extra Equipment Set': '额外装备套装',
    'Fairy': '仙女',
    'Farming Skillcape': '种植技能斗篷',
    'Fight various monsters and bosses': '与不同的怪物和领主对抗',
    'Fills Farming Compost to 100% per use. +10% Increased crop harvest.': '每次使用100%填充农业堆肥。+10%的作物收成。',
    'Fire God Dungeon': '火神殿',
    'Fire Status': '火焰状态',
    'Firemaking Skillcape': '生火技能斗篷',
    'Firemaking XP Bonus when active': '激活时的生火经验奖励',
    'Fishing Skillcape': '钓鱼技能斗篷',
    'Fletching Skillcape': '弓箭技能披风',
    'Food Efficiency': '食物的效果',
    'Food never burns': '食物永不燃烧',
    'Forest of Goo': '粘液之森',
    'from the Spider Forest Dungeon to enable auto-looting': '从蜘蛛森林地下城中启用自动拾取',
    'Frozen Cove': '冰冻海湾',
    'Frozen Mammoth': '寒冰猛犸象',
    'Furious Horned Elite': '猖狂巨魔',
    'Gain 10%-200% of damage dealt in GP based on your current GP. Capped at 50M for 200%.': '基于你的当前金币造成10％-200％的伤害。 50M金币时达到最大值，此时伤害200%',
    'Gain 50% extra XP from Smithing when equipped': '装备后，锻造获得额外50%的经验值',
    'Game Update Available': '游戏更新可用',
    'Gem-Tipped Bolts': '宝石矢',
    'General': '常规',
    'Giant Crab': '巨蟹',
    'Giant Dungeon': '巨人地牢',
    'Golbin Village': '哥布林镇',
    'Gold Ruby Necklace': '红宝石金项链',
    'Gold Ruby Ring': '红宝石金戒指',
    'Gold Sapphire Necklace': '蓝宝石金项链',
    'Gold Sapphire Ring': '蓝宝石金戒指',
    'Gold Topaz Necklace': '黄宝石金项链',
    'Gold Topaz Ring': '黄宝石金戒指',
    'Goo Monster': '软泥怪',
    'Got a potion idea? Submit it here -->': '有魔药的主意吗？ 在这里提交->',
    'Grants access to High Lands.': '可以进入高地。',
    'Grants access to Strange Cave.': '可以进入奇异洞穴。',
    'Graveyard': '墓地',
    'Great for Slayer Training': '非常适合杀戮培训',
    'Great source of food.': '重要的食物来源。',
    'Great source of XP.': '重要的经验来源。',
    'Green Dragon': '绿龙',
    'Green Dragonhide': '绿龙皮',
    'Green Goo Monster': '绿色软泥怪',
    'Griffin': '格里芬',
    'Hall of Wizards': '巫师殿',
    'Halve Coal Requirements': '将煤炭需求减半',
    'Hard Leather Boots': '硬皮靴',
    'Hard Leather Gloves': '硬皮手套',
    'Hard Mode': '困难模式',
    'Headless Arrows': '钝头箭',
    'Headless Bolts': '钝头矢',
    'Herblore Skillcape': '制药技能斗篷',
    'High Lands': '高地',
    'High value rewards found here': '在这里可以找到高价值的奖励',
    'Highest Combat Level Monster': '最高战斗等级怪物',
    'Hitpoints Skillcape': '回复技能斗篷',
    'Holy Archer': '圣射手',
    'Holy Isles': '圣岛',
    'Ice Monster': '寒冰怪物',
    'Icy Hills': '冰山',
    'Idle': '空闲',
    'In Bank': '在银行',
    'In Development': '开发中',
    'Inacitve': '不活跃',
    'Inactive': '不活跃',
    'Inherits  all Skillcape perks.': '继承所有技能斗篷特权',
    'Iron': '铁',
    'Iron 2H Sword': '铁质双手剑',
    'Iron Arrowtips': '铁质箭头',
    'Iron Bar': '铁质装备',
    'Iron Battleaxe': '铁质斧',
    'Iron Boots': '铁质靴子',
    'Iron Crossbow Head': '铁质弩头',
    'Iron Dagger': '铁质匕首',
    'Iron Gear': '铁质装备',
    'Iron Gloves': '铁质手套',
    'Iron Helmet': '铁质头盔',
    'Iron Javelin Heads': '铁质标枪头',
    'Iron Platebody': '铁质盔甲',
    'Iron Platelegs': '铁质裤子',
    'Iron Scimitar': '铁质弯刀',
    'Iron Shield': '铁质盾',
    'Iron Sword': '铁质单手剑',
    'Iron Throwing Knife': '铁质飞刀',
    'Javelins': '标枪',
    'Junior  Farmer': '初级农民',
    'Junk': '垃圾',
    'just now': '就是现在',
    'Leather Body': '皮甲',
    'Leather Chaps': '皮裤',
    'Leather Cowl': '皮兜帽',
    'Leather Vambraces': '皮手套',
    'Leech': '水蛭',
    'Lemvor Pier': '梅沃尔码头',
    'Level 10 Fishing Required': '需要10级钓鱼',
    'Level 20 Woodcutting Required': '需要20级伐木',
    'Light Bonfire (10 Logs': '点燃篝火（10根原木',
    'Login': '登录',
    'Longbows': '长弓',
    'Longrange': '长距离',
    'Loot to Collect': '收集战利品',
    'Magic Skillcape': '魔法技能斗篷',
    'Magic weapon required': '需要魔法武器',
    'Magical Ring': '魔法戒指',
    'Mahogany Logs': '桃树原木',
    'Manual': '手动',
    'Many Eyed Monster': '眼魔',
    'Maple Logs': '枫树原木',
    'Master Farmer': '农民主',
    'Master of Nature': '自然之主',
    'Mastery Level Up!': '熟练度等级提升！',
    'Materials': '材料',
    'Max Hit': '最大连击',
    'Max Scores': '最大分数',
    'Max Skillcape': '终极技能斗篷',
    'Melvor Cloud': '梅尔沃云',
    'Mind Rune': '心灵符文',
    'Mining provides x2 items per action when equipped': '装备时，每次采矿可提供x2物品',
    'Mining Skillcape': '采矿技能斗篷',
    'Mirror Shield': '镜盾',
    'Mithril 2H Sword': '秘银双手剑',
    'Mithril Arrowtips': '秘银箭头',
    'Mithril Battleaxe': '秘银斧',
    'Mithril Boots': '秘银靴子',
    'Mithril Crossbow Head': '秘银弩头',
    'Mithril Dagger': '秘银匕首',
    'Mithril Gear': '秘银装备',
    'Mithril Gloves': '秘银手套',
    'Mithril Helmet': '秘银头盔',
    'Mithril Javelin Heads': '秘银标枪头',
    'Mithril Knight': '秘银骑士',
    'Mithril Platebody': '秘银盔甲',
    'Mithril Platelegs': '秘银裤子',
    'Mithril Scimitar': '秘银弯刀',
    'Mithril Shield': '秘银盾',
    'Mithril Sword': '秘银单手剑',
    'Mithril Throwing Knife': '秘银飞刀',
    'Moist  Monster': '水怪',
    'Monster  Difficulty': '怪物难度',
    'Moss  Giant': '泥沼巨人',
    'Multi-Tree': '多叉树',
    'Mummy': '木乃伊',
    'Name': '名称',
    'Necklaces': '项链',
    'Normal  Cooking Fire': '普通烹饪火',
    'Normal  Logs': '普通日志',
    'Normal  Mode': '正常模式',
    'Offensive  Stats': '进攻值',
    'Offline': '离线',
    'Open  Easter Shop': '打开复活节商店',
    'Patreon': '众筹网站',
    'Pegasus': '飞马座',
    'Penumbra': '半影',
    'Perpetual  Haste': '永恒的渴望',
    'Pickpocket': '扒手',
    'Pirate  Booty': '海盗藏宝',
    'Please  Export your save prior to refreshing.': '请先导出您的存档，然后再刷新。',
    'Prayer  Point cost reduced by': '祈祷点成本降低了',
    'Prayer  Points': '祈祷点数',
    'Prayer  Skillcape': '祷告技能斗篷',
    'Privacy  Policy': '隐私政策',
    'Produce  2x items per action': '每个动作产生2倍物品',
    'Produce  2x Potions': '生产2x魔药',
    'Purple  Goo Monster': '紫色软泥怪',
    'Raging  Horned Elite': '狂暴巨魔',
    'Ranged  Golbin': '哥布林射手',
    'Ranged  Skillcape': '远程技能斗篷',
    'Raw  Sardine': '沙丁鱼',
    'Raw  Shrimp': '活虾',
    'Ready to  harvest': '可收获',
    'Receive  1x Coal per Mining Action': '每次开采可获取1倍矿石',
    'Red  Dragon': '红龙',
    'Red  Dragonhide': '红龙皮',
    'Reddit': 'Reddit论坛',
    'Redwood  Logs': '红杉木',
    'Register': '注册',
    'Remaining  Actions': '剩余动作',
    'Rerolling  existing Slayer Tasks cost 5% of your SC': '重新刷新现有的杀戮任务会花费您SC的5％',
    'Run /  Area Select': '运行/区域选择',
    'Rune  Pickaxe': '符文鹤嘴锄',
    'Runecrafting  Skillcape': '符文技能斗篷',
    'Sandy  Shores': '桑迪海岸',
    'Scattered  Goo Monster': '零散的食尸鬼怪物',
    'Secret  Area': '秘密区域',
    'Shrapnel  River': '弹片河',
    'Silver  Ruby Necklace': '红宝石银项链',
    'Silver  Ruby Ring': '红宝石银戒指',
    'Silver  Sapphire Necklace': '蓝宝石银项链',
    'Silver  Sapphire Ring': '蓝宝石银戒指',
    'Silver  Topaz Necklace': '黄宝石银项链',
    'Silver  Topaz Ring': '黄宝石银戒指',
    'Skeleton': '骷髅',
    'Skillcapes': '技能斗篷',
    'Skull  Cape': '骷髅披风',
    'Slayer Cowl (Basic': '杀戮兜帽（基本',
    'Slayer Cowl (Elite': '杀戮兜帽（精致',
    'Slayer Cowl (Strong': '杀戮兜帽（强力',
    'Slayer exclusive Armour.': '杀戮专用盔甲',
    'Slayer Helmet (Basic': '杀戮头盔（基本',
    'Slayer Helmet (Elite': '杀戮头盔（精致',
    'Slayer Helmet (Strong': '杀戮头盔（强力',
    'Slayer Leather Body (Basic': '杀戮皮甲（基本',
    'Slayer Leather Body (Elite': '杀戮皮甲（精致',
    'Slayer Leather Body (Strong': '杀戮皮甲（强力',
    'Slayer Platebody (Basic': '杀戮盔甲（基本',
    'Slayer Platebody (Elite': '杀戮盔甲（精致',
    'Slayer Platebody (Strong': '杀戮盔甲（强力',
    'Slayer Skillcape': '杀戮技能斗篷',
    'Slayer Wizard Hat (Basic': '杀戮巫师帽（基本',
    'Slayer Wizard Hat (Elite': '杀戮巫师帽（精致',
    'Slayer Wizard Hat (Strong': '杀戮巫师帽（强力',
    'Slayer Wizard Robes (Basic': '杀戮巫师长袍（基本',
    'Slayer Wizard Robes (Elite': '杀戮巫师长袍（精致',
    'Slayer Wizard Robes (Strong': '杀戮巫师长袍（强力',
    'Smithing  Gloves': '锻造手套',
    'Smithing  Skillcape': '锻造技能斗篷',
    'Special': '特殊',
    'Special  Attack Desciption': '特殊攻击说明',
    'Spider  Chest': '蜘蛛箱子',
    'Spider  Forest': '蜘蛛森林',
    'Standard  Chest': '标准箱子',
    'Standard  Combat Training': '标准战斗训练',
    'Start  Fishing': '开始钓鱼',
    'Steel 2H  Sword': '钢制双手剑',
    'Steel  Arrowtips': '钢制箭头',
    'Steel  Battleaxe': '钢制战斧',
    'Steel  Boots': '钢制长靴',
    'Steel  Crossbow Head': '钢制弩箭头',
    'Steel  Gloves': '钢制手套',
    'Steel  Helmet': '钢制头盔',
    'Steel  Javelin Heads': '钢制标枪头',
    'Steel  Platebody': '钢制盔甲',
    'Steel  Platelegs': '钢制护腿',
    'Steel  Scimitar': '钢制弯刀',
    'Steel  Shield': '钢制盾牌',
    'Strength  Skillcape': '力量技能斗篷',
    'Tentacle': '触手',
    'The  Mastery System is in very early stages of Alpha development. It will be  constantly updated and changed alongside the game.': '精通系统处于Alpha开发的早期阶段。 它将随着游戏不断更新和更改。',
    'Thieving  Gloves': '盗贼手套',
    'Thieving  Skillcape': '盗贼技能斗篷',
    'Toggle  Auto-Reuse': '切换 自动重复',
    'Toggle  Dropdown': '切换 掉落列表',
    'Toggle  Skill Progress': '切换 技能进展',
    'Total  Eggs': '鸡蛋总数',
    'Trench  of Despair': '绝望战壕',
    'Unlimited  Air, Water, Earth & Fire Runes': '无限的风，水，土和火符文',
    'Variety  of monsters and drops': '各种各样的怪物和掉落物',
    'View  Equipment Stats': '查看装备属性',
    'Water  Rune': '水之符文',
    'Woodcutting  Skillcape': '伐木技能斗篷',
    'Works  with Combat & Thieving.': '与战斗和偷窃配合使用。',
    'Yep,  still undefined': '是的，仍然不确定',
    'You can  click and drag to rearrange bank items.': '您可以单击并拖动以重新排列银行项目。',
    //5.25云汉化↑
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
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
    [/^Loot to Collect (.+)$/, '收集战利品 $1'],
    [/^Logs Burnt\n(.+)$/, '烧焦的原木'],
    [/^Deaths\n(.+)$/, '死亡'],
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