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
    'A bar made of copper.': '一根铜制金属锭。',
    'A bar made of gold.': '一根金制金属锭。',
    'A bar made of iron.': '一根铁制金属锭。',
    'A bar made of silver.': '一根银制金属锭。',
    'A body made from bat skin': '一个用蝙蝠皮制作的护甲',
    'A body made from bear fur.': '一个用熊皮制作的护甲。',
    'A body made from snakes found in the forest.': '一个用森林中的蛇制作的躯干。',
    'A common leaf seed used as a main ingredient for brewing.': '一种可以用来做酿酒主料的普通树叶种子。',
    'A common mushroom seed used as a secondary ingredient for brewing.': '一种可以用来做酿酒辅料的普通蘑菇种子。',
    'A common ore.': '一块普通的矿石。',
    'A common small sized fish who usually travel in groups.': '一条普通的鱼，时常成群结队行动。',
    'A fast stabbing weapon.  This was once owned by a thief.  I wonder if it was stolen?': '一把利器。曾被一名盗贼所拥有。或许这也是偷来的？',
    'A magnificent creature with deadly jaw crushing powers.': '一种颚拥有着毁灭性力量的奇伟生物。',
    'A mask made from bat skin.': '一个用蝙蝠皮制作的面具。',
    'A mask made from bear fur.': '一个用熊皮制作的面具。',
    'A mask made from snakes found in the forest.': '一个用森林中的蛇制作的面具。',
    'A mega rare leaf seed used as a main ingredient for brewing.': '一种可以用来做酿酒主料的极稀有树叶种子。',
    'A pair of boots made from bat skin.': '一双用蝙蝠皮制作的靴子。',
    'A pair of boots made from bear fur.': '一双用熊皮制作的靴子。',
    'A pair of boots made from snakes found in the forest.': '一双用森林中的蛇制作的靴子。',
    'A pair of gloves made from bat skin.': '一副用蝙蝠皮制作的手套',
    'A pair of gloves made from bear fur.': '一副用熊皮制作的手套',
    'A pair of gloves made from snakes found in the forest.': '一副用森林中的蛇制作的手套',
    'A pair of trousers made from bat skin.': '一条用蝙蝠皮制作的裤子。',
    'A pair of trousers made from bear fur.': '一条用熊皮制作的裤子。',
    'A pair of trousers made from snakes found in the forest.': '一条用森林中的蛇制作的裤子。',
    'A rare grass seed used as a secondary ingredient for brewing.': '一种可以用来做酿酒辅料的稀有青草种子。',
    'A rare leaf seed used as a main ingredient for brewing.': '一种可以用来做酿酒主料的稀有树叶种子。',
    'A semi-common leaf seed used as a main ingredient for brewing.': '一种可以用来做酿酒主料的半普通树叶种子。',
    'A shield found from a skeleton in the caves.': '一面在洞穴的骷髅处发现的盾牌。',
    'A sushi made with snakeskin instead of traditional seaweed.': '一块寿司，使用蛇皮，而不是传统海藻制作而成。',
    'A sword obtained from a skeleton in the caves.': '一把在洞穴的骷髅处发现的剑。',
    'A triangular shape-like fish.  They can reach well over 5m long!': '一条三角形的鱼。它们可以长到5米长度！',
    'A type of fish that lives in fresh water.': '一种栖息于淡水中的鱼。',
    'A very rare leaf seed used as a main ingredient for brewing.': '一种可以用来做酿酒主料的非常稀有树叶种子。',
    'A vial filled with poison from a spider.': '装满了蜘蛛毒液的一个小瓶。',
    'A vial to collect poison.': '可以采集毒液的一个小瓶。',
    'A wooden shield made from both oak and willow logs.': '一面由橡木和柳木制造而成的木盾。',
    'An uncommon leaf seed used as a main ingredient for brewing.': '一种可以用来做酿酒主料的不寻常树叶种子。',
    'An uncommon mushroom seed used as a secondary ingredient for brewing.': '一种可以用来做酿酒辅料的不寻常蘑菇种子。',
    'Anchovy': '鳀鱼',
    'ANCHOVY': '鳀鱼',
    'BAMBOO': '竹子',
    'BAMBOO TREE': '竹子',
    'Bamboo Tree Seeds': '竹子种子',
    'Bat Skin Body': '蝙蝠皮护甲',
    'Bat Skin Boots': '蝙蝠皮长靴',
    'Bat Skin Gloves': '蝙蝠皮手套',
    'Bat Skin Legs': '蝙蝠皮护腿',
    'Bat Skin Mask': '蝙蝠皮面具',
    'BATSKIN': '蝙蝠皮',
    'BATSKIN BODY': '蝙蝠皮护甲',
    'BATSKIN BOOTS': '蝙蝠皮长靴',
    'BATSKIN GLOVES': '蝙蝠皮手套',
    'BATSKIN LEGS': '蝙蝠皮护腿',
    'BEAR BOOTS': '熊皮长靴',
    'Bear Fur': '熊皮',
    'Bear Fur Body': '熊皮护甲',
    'Bear Fur Boots': '熊皮长靴',
    'Bear Fur Gloves': '熊皮手套',
    'Bear Fur Legs': '熊皮护腿',
    'Bear Fur Mask': '熊皮面具',
    'BEAR LEGS': '熊皮护腿',
    'Blewit Mushroom Seeds': '蓝白蘑菇种子',
    'Blueprints': '蓝图',
    'BLUEPRINTS': '蓝图',
    'BOB': '鲍勃',
    'Boiled oyster with melted cheese.': '奶酪焗牡蛎。',
    'Bone Amulet': '骨头盔甲',
    'BONE AMULET': '骨头盔甲',
    'BONE POTION': '骨头药剂',
    'Bonemeal': '骨粉',
    'BONEMEAL': '骨粉',
    'BONES': '骨头',
    'BREWING KIT': '酿酒工具',
    'Bronze Bar': '青铜锭',
    'BRONZE BAR': '青铜锭',
    'bronze bars.': '青铜锭。',
    'BRONZE OVEN': '铜炉',
    'Can be smelted into': '可以熔化为',
    'Can be used to convert bars into': '可以用来将金属锭变为',
    'Can be used to convert ores into': '可以用来将矿石变为',
    'Can be used with to make arrows with the crafting skill.': '可以用它使用锻造技能制作箭头。',
    'Capacity': '容量',
    'CARE PACKAGE': '护理包',
    'Chicken': '鸡',
    'CHICKEN': '鸡',
    'Click to craft arrows.': '点击来制作箭。',
    'Click to craft.': '点击来制作。',
    'Click to follow and craft.': '点击来跟随并制作',
    'COMB. COOLDOWN': '战斗冷却时间',
    'Combat Vial': '战斗小瓶',
    'CONNECTING TO SERVER': '连接至服务器',
    'COOKING BOOST': '烹饪加成',
    'Crab': '螃蟹',
    'CRAB': '螃蟹',
    'Crushers': '粉碎机',
    'CRUSHERS': '粉碎机',
    'CRYSTAL LEAF': '水晶叶',
    'Crystal Leaf Seeds': '水晶叶种子',
    'CRYSTAL SRIPED': '水晶条纹',
    'DARK CRYSTAL': '黑暗水晶',
    'DIAMOND': '钻石',
    'Difficulty': '难度',
    'Don\'t let its small size fool you with the damage it can do.  These carnivores will consume most, if not all, the flesh on its prey.': '不要因为这玩意看起来太小就觉得它打不出什么伤害。它可以将受害者身上的血肉吞食一空。',
    'Easy': '容易',
    'Eel': '鳗鱼',
    'EEL': '鳗鱼',
    'EMERALD': '绿宝石',
    'Farming Patch #': '农业补丁 #',
    'Feathers': '羽毛',
    'FEATHERS': '羽毛',
    'FIRE': '火',
    'FISHING ROD': '钓鱼竿',
    'GEM LIST': '宝石列表',
    'MUSEUM': '博物馆',
    'MUSHROOM': '蘑菇',
    'MUSHROOMS': '蘑菇',
    'OAK LOGS': '橡木原木',
    'OAK SEED': '橡子',
    'Oak Tree Seeds': '橡树种子',
    'Obtained from chopping down a bamboo tree.': '砍竹子可获得。',
    'Obtained from chopping down a maple tree.': '砍枫树可获得。',
    'Obtained from chopping down a tree.': '砍树可获得。',
    'Obtained from killing a chicken.': '杀鸡可获得。',
    'Obtained from killing a giant snake.': '杀巨蛇可获得。',
    'Oyster': '牡蛎',
    'OYSTER': '牡蛎',
    'Past 7 days': '过去七天',
    'Past Month': '过去的一个月',
    'Past Year': '过去一年',
    'Pearl': '珍珠',
    'PICKAXE': '镐',
    'Piranha': '水虎鱼',
    'PIRANHA': '水虎鱼',
    'Play as Guest': '游客模式游戏',
    'Poison Combat Vial': '战斗用毒液小瓶',
    'POISON VIAL': '毒液小瓶',
    'Rainbow Fish': '彩虹鱼',
    'RAINBOW FISH': '彩虹鱼',
    'Raw Anchovy': '生鳀鱼',
    'RAW ANCHOVY': '生鳀鱼',
    'Raw Chicken': '生鸡肉',
    'RAW CHICKEN': '生鸡肉',
    'Raw Crab': '生螃蟹',
    'RAW CRAB': '生螃蟹',
    'Raw Eel': '生鳗鱼',
    'RAW EEL': '生鳗鱼',
    'Raw Giant Snake Tail': '生巨蛇尾巴',
    'Raw Piranha': '生水虎鱼',
    'RAW PIRANHA': '生水虎鱼',
    'Raw Rainbow Fish': '生彩虹鱼',
    'RAW RAINBOW FISH': '生彩虹鱼',
    'Raw Salmon': '生大马哈鱼',
    'RAW SALMON': '生大马哈鱼',
    'Raw Sardine': '生沙丁鱼',
    'RAW SARDINE': '生沙丁鱼',
    'Raw Sea Turtle': '生海龟',
    'RAW SEA TURTLE': '生海龟',
    'Raw Shark': '生鲨鱼',
    'RAW SHARK': '生鲨鱼',
    'Raw Shrimp': '生虾',
    'RAW SHRIMP': '生虾',
    'Raw Swordfish': '生剑鱼',
    'RAW SWORDFISH': '生剑鱼',
    'Raw Trout': '生鳟鱼',
    'RAW TROUT': '生鳟鱼',
    'Raw Tuna': '生金枪鱼',
    'RAW TUNA': '生金枪鱼',
    'Raw Whale': '生鲸鱼',
    'RAW WHALE': '生鲸鱼',
    'READ ME': '自述文件',
    'Ready': '准备完毕',
    'READY (Click me': '准备完毕 (点这里',
    'Red Mushroom': '红蘑菇',
    'Red Mushroom Seeds': '红蘑菇种子',
    'Red mushrooms are typically used for making potions.': '红蘑菇一般被用于制药',
    'Release me': '相信',
    'RUBY': '红宝石',
    'Rusty Sword': '生锈的剑',
    'RUSTY SWORD': '生锈的剑',
    'Salad': '沙拉',
    'Salmon': '大马哈鱼',
    'SALMON': '大马哈鱼',
    'SAND': '沙子',
    'SAND POTION': '沙子药剂',
    'Sapphire': '蓝宝石',
    'SAPPHIRE': '蓝宝石',
    'Sardine': '沙丁鱼',
    'SARDINE': '沙丁鱼',
    'Sea Turtle': '海龟',
    'SEA TURTLE': '海龟',
    'SEED LIST': '种子列表',
    'Select an Area': '选择一个区域',
    'SELECT ITEM TO CONVERT INTO XP': '选择要转换为经验的物品',
    'SELECT OPTION': '选择物品',
    'SELECT ORE TO SMELT': '选择矿石来进行熔炼',
    'Sells for': '出售来获得',
    'Shark': '鲨鱼',
    'SHARK': '鲨鱼',
    'Shrimp': '虾',
    'SHRIMP': '虾',
    'Silver': '银',
    'SILVER': '银',
    'Silver Bar': '银锭',
    'SILVER BAR': '银锭',
    'Skeleton Shield': '骷髅盾',
    'SKELETON SHIELD': '骷髅盾',
    'Skeleton Sword': '骷髅剑',
    'SKELETON SWORD': '骷髅剑',
    'skill.': '技能。',
    'SNAKE BONES': '蛇骨',
    'Its size has been known to scare away most predators.  This includes sharks, killer whales and other large fish.': '仅凭它的大小就足够吓跑绝大部分掠食者了。其中包括鲨鱼，虎鲸及其他大型鱼类。',
    'IRON OVEN': '铁炉',
    'IDLE': '放置',
    'Iron': '铁',
    'IRON': '铁',
    'Iron Bar': '铁锭',
    'IRON BAR': '铁锭',
    'MAPLE': '枫树',
    'MAPLE TREE': '枫树',
    'Maple Tree Seeds': '枫树种子',
    'Gift for a Friend': '给一个朋友的礼物',
    'GLASS': '玻璃',
    'GLASS HAND': '玻璃手',
    'has been released after rubbing the dark crystal.': '在摩擦了黑暗水晶后就被释放了。',
    'Snakeskin': '蛇皮',
    'SNAKESKIN': '蛇皮',
    'Snakeskin Body': '蛇皮护甲',
    'SNAKESKIN BODY': '蛇皮护甲',
    'Snakeskin Boots': '蛇皮长靴',
    'SNAKESKIN BOOTS': '蛇皮长靴',
    'Snakeskin Gloves': '蛇皮手套',
    'SNAKESKIN GLOVES': '蛇皮手套',
    'Snakeskin Legs': '蛇皮护腿',
    'SNAKESKIN LEGS': '蛇皮护腿',
    'Snakeskin Mask': '蛇皮面具',
    'SNAKESKIN MASK': '蛇皮面具',
    'Some random text': '一些随机文本',
    'Special': '特别的',
    'stardust': '星尘',
    'STARDUST': '星尘',
    'STARDUST BOX I': '星尘箱子 I',
    'Stardust Hammer': '星尘锤',
    'Stardust Pickaxe': '星尘镐',
    'STARDUST POTION': '星尘药剂',
    'Stardust Seeds': '星尘种子',
    'STARDUST SEEDS': '星尘种子',
    'STARDUST TREE': '星尘树',
    'Stone': '石头',
    'STONE': '石头',
    'STRIPED CRYSTAL': '条纹水晶',
    'Striped Crystal Leaf Seeds': '条纹水晶叶种子',
    'STRIPED GOLD': '条纹金',
    'Swordfish': '剑鱼',
    'SWORDFISH': '剑鱼',
    'TELESCOPE': '望远镜',
    'The better the gem socket, the higher tier seeds bob can find.': '宝石插槽越好，鲍勃就能找到更高级别的种子。',
    'The largest creature found in the ocean.': '在海洋里找到的最大的生物',
    'Trout': '鳟鱼',
    'TROUT': '鳟鱼',
    'Tuna': '金枪鱼',
    'TUNA': '金枪鱼',
    'Uncommon': '不寻常',
    'Unlike most animals, crabs can take in oxygen both from the ocean waters and the moisture in the air.': '有别于其他动物，螃蟹既可以从水中，也可以从空气中获得氧气。',
    'Unlocks an extra farming patch.': '解锁一个额外的农业补丁。',
    'Unlocks an extra woodcutting patch.': '解锁一个额外的伐木补丁。',
    'vanilla (': '香草 (',
    'Very Common': '非常普通',
    'Very difficult to handle.  Anguilliformes are known to have slimy bodies': '极难握住。鳗类的身体通常粘乎乎的',
    'Very Rare': '非常稀有',
    'Wand': '杖',
    'WAND': '杖',
    'We call this fish a swordfish, due to its nose.  This is not a lie.': '我们管它叫剑鱼。看看它的鼻子，您就知道此言非虚了。',
    'We need to find a way to get him back into this crystal and destroy it before he destroys the world!': '我们得想办法在他毁灭世界之前，先把他封印回这块水晶内！',
    'Whale': '鲸鱼',
    'WHALE': '鲸鱼',
    'WILLOW LOGS': '柳木',
    'WILLOW SEED': '柳树种子',
    'Willow Tree Seeds': '柳树种子',
    'WOOD SHIELD': '木盾',
    'Woodcut': '伐木',
    'woodcutting': '伐木',
    'Woodcutting Patch #': '伐木补丁 #',
    'Wooden Shield': '木盾',
    'xp': '经验值',
    'XP at the cost of': '经验值，代价为',
    'Yes!  I\'ll have them on my pizza thank you!': '棒极了！我可以加一些到我的披萨上，谢谢！',
    'You may use your account on any server and switch between them.  The market is also shared between servers.': '您可以使用帐号登录任意服务器，并随意切换。市场在服务器间通用。',
    'Sorry, I\'m not interested.': '对不起，我没有兴趣',
    'Spider': '蜘蛛',
    'Stardust Box': '星尘箱',
    'STARDUST PICKAXE': '星尘镐',
    'Stardust Tree Seeds': '星尘树种',
    'Oak Logs': '橡木原木',
    'Medium': '中等',
    'Logs': '原木',
    'LOGS': '原木',
    'Made from skeleton bones.': '用骷髅骨制成',
    'lavaDungeon': '岩浆地下城',
    'Like the trout, this type of fish that lives in fresh water.  However, it contains more meat than trout.': '这种鱼像鳟鱼一样生活在淡水里，但是它比鳟鱼有更多的肉',
    'ITEMNAME': '物品名称',
    'Gem': '宝石',
    'Found': '找到',
    'Found from': '发现自',
    'Found inside of an oyster.': '从一只牡蛎里被发现',
    'Bat': '蝙蝠',
    'Bear': '熊',
    'Bees': '蜜蜂',
    'Buff': '状态',
    'chickens': '鸡',
    'Chickens': '鸡',
    'Alright, where can I find feathers?': '好吧，但是我应该在哪里找到羽毛呢？',
    'Rats': '老鼠',
    'Run': '逃跑',
    'Skeleton': '骷髅',
    'Sky Crystal': '天之水晶',
    'SKY CRYSTAL': '天之水晶',
    'TREE SEED': '树种',
    'Tree Seeds': '树种',
    'Willow Logs': '柳木',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
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
    "\n": "",
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
    "     ": "",
    " ": "",
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
    [/^(.+) - (.+) Stardust.$/, '$1 - $2 星尘.'],
    [/^([\d\.,]+) seconds$/, '$1 秒'],
    [/^([\d\.,]+) energy$/, '$1 能量'],
    [/^([\d\.,]+) APPLES$/, '$1 苹果'],
    [/^([\d\.,]+) magic required.$/, '$1 魔法需求。'],
    [/^([\d\.,]+) damage.$/, '$1 伤害。'],
    [/^([\d\.,]+) health.$/, '$1 生命。'],
    [/^([\d\.,]+) donor coins.$/, '$1 捐助硬币。'],
    [/^([\d\.,]+) coins.$/, '$1 硬币。'],
    [/^([\d\.,]+)h of Offline Time$/, '$1小时 离线时间'],
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
