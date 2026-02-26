---
title: Unique 参数
---

# Unique 参数

本页包含 Uniques 中使用的所有不同参数的概述，以及可以填充的值。每种不同的参数类型都在下面描述，包括所有可能的值。

这些分为两类：

- 描述：例如，"任何单位的名称"
- `像这样的文本`。这最后一个必须完全相同

请注意，所有这些都是**大小写敏感**的！

## 通用过滤器规则

除了 `populationFilter` 和 `resourceFilter` 之外的所有过滤器都接受多个值，格式为：`{A} {B} {C}` 等，意味着"对象必须匹配所有这些过滤器"

**示例**：`[{Military} {Water}] units`、`[{Wounded} {Armor}] units` 等。

在 `[` 和第一个 `{` 之间，或者最后一个 `}` 和结束的 `]` 之间不允许有空格或其他文本。但是 `} {` 中的空格是必需的。

所有过滤器都接受 `non-[filter]` 作为可能的值

**示例**：`[non-[Wounded]] units`

这些可以通过嵌套来组合，但有一个例外：一个"ALL"过滤器不能包含另一个"ALL"过滤器，即使中间有 NON 过滤器。

**示例**：
- `[{non-[Wounded]} {Armor}] units` 意味着单位是装甲类型且生命值全满
- `[non-[{Wounded} {Armor}]] units` 意味着单位既不受伤也不是装甲单位

`[{non-[{Wounded} {Armor}]} {Embarked}] units` **将会失败**，因为游戏会同时处理两个"} {"并看到 `non-[{Wounded` 和 `Armor}]`，两者都无效。

Civilopedia 中复杂过滤器的显示可能会变得不可读。如果是这样，考虑隐藏该 unique 并使用 `Comment []` unique 单独提供更好的措辞。

## civFilter

允许过滤特定文明。

允许的值：

- `Human player` - 人类玩家
- `AI player` - AI 玩家
- `Friendly` - 友好
- `Hostile` - 敌对
- `Open Borders` - 开放边界
- `Known` - 知道的文明 - 意识到相关文明的文明。包括自己
- [nationFilter](#nationfilter)

## nationFilter

允许过滤特定文明。由 [ModOptions.nationsToRemove](mod-file-structure/5-miscellaneous-json-files.md#modoptionsjson) 使用。

允许的值：

- `All`、`all` - 所有
- `City-States`、`City-State` - 城邦
- `Major` - 主要文明
- 文明名称
- 文明拥有的 unique（逐字，无占位符）

## baseUnitFilter

单位过滤器可以分为两部分：`baseUnitFilter`s 和 `mapUnitFilter`s。

前者针对 json 中出现的单位进行测试。这意味着它没有拥有的文明或它站立的地块，只有它的基础属性。

后者针对地图上出现的单位进行测试，包括它的国家、地块、生命值和所有其他属性。

允许的值：

- 单位名称
- 单位类型 - 例如 Melee、Ranged、WaterSubmarine 等
- `Land`、`Water`、`Air` - 陆地、水路、空中
- `land units`、`water units`、`air units` - 陆地单位、水路单位、空中单位
- `non-air` 用于非空中非导弹单位
- `Military`、`military units` - 军事单位
- `Civilian`、`civilian units` - 文明单位
- `All`、`all` - 所有
- `Melee` - 近战
- `Ranged` - 远程
- `Nuclear Weapon` - 核武器
- `Great Person` - 大伟人
- `Embarked` - 登船状态
- 匹配此单位所需的 [technologyfilter](#technologyfilter) - 例如 `Modern Era`
- 单位具有的任何确切 unique
- 单位类型具有的任何确切 unique
- 上述任何组合（只有在所有都匹配时才匹配）。格式为 `{filter1} {filter2}` 并且可以匹配任意数量的过滤器。例如：`[{Modern era} {Land}]` units

## mapUnitFilter

这表示地图上放置的单位。与 `baseUnitFilter` 比较。

允许的值：

- 任何匹配的 [baseUnitFilter](#baseunitfilter)
- 任何匹配拥有者的 [civFilter](#civfilter)
- 单位具有的任何 unique - 还包括 [baseUnitFilter](#baseunitfilter) 没有捕获的 uniques，例如晋升
- 任何晋升名称，或晋升具有的确切 unique
- `Wounded` - 受伤
- `Embarked` - 登船
- `City-State` - 城邦
- `Barbarians`、`Barbarian` - 野蛮人
- `Non-City` - 非城市
- 同样，也允许上述任何组合，例如 `[{Wounded} {Water}]` units。

你可以在游戏中使用控制台和 `unit checkfilter <filter>` 命令来检查这一点

## buildingFilter

允许 unique 仅对特定建筑激活。

允许的值：

- `All`、`all` - 所有
- `Buildings`、`Building` - 建筑
- `Wonder`、`Wonders` - 奇观
- `National Wonder`、`National` - 国宝
- `World Wonder`、`World` -- 所有不是国宝的奇观
- 建筑名称
- 该建筑替换的建筑的名称（因此，例如，图书馆的 uniques 也适用于造纸厂）
- 匹配此建筑所需的 [technologyfilter](#technologyfilter) - 例如 Modern Era
- 该建筑具有的确切 unique（例如：`spaceship part`）
- `Culture`、`Gold` 等，如果该建筑对于该属性是 `stat-related` 的。stat-related 建筑定义为以下之一：
    - 直接提供该属性（例如 +1 Culture）
    - 为该属性提供百分比奖励（例如 +10% Production）
    - 作为资源奖励提供该属性（例如每块小麦 +1 Food）
    - 按一定人口数量提供该属性（例如每个[城市过滤器]的 2 人口 +1 科学）
- 上述任何组合（只有在所有都匹配时才匹配）。格式为 `{filter1} {filter2}` 最多任意数量的过滤器。例如 `[{Ancient era} {Food}]` buildings。

## cityFilter

cityFilters 允许我们选择受此 unique 影响的城市范围：

- `in this city` - 在这个城市
- `in all cities`、`All`、`all` - 通常适用于相关文明拥有的所有城市
- `in your cities`、`Your` - 在你的城市
- `in all coastal cities`、`Coastal` - 在所有沿海城市
- `in capital`、`Capital` - 在首都
- `in all non-occupied cities`、`Non-occupied` - 所有不是傀儡且没有因为最近被征服而产生额外不幸的城市
- `in all cities with a world wonder` - 在所有拥有世界奇观的城市
- `in all cities connected to capital` - 在所有连接到首都的城市
- `in all cities with a garrison`、`Garrisoned` - 在所有有驻军的城市
- `in non-enemy foreign cities` - 在所有你不与之开战的其他文明拥有的城市
- `in enemy cities`、`Enemy` - 在敌方城市
- `in foreign cities`、`Foreign` - 在外国城市
- `in annexed cities`、`Annexed` - 在吞并的城市
- `in puppeted cities`、`Puppeted` - 在傀儡城市
- `in resisting cities`、`Resisting` - 在抵抗的城市
- `in cities being razed`、`Razing` - 在正在夷平的城市
- `in holy cities`、`Holy` - 在圣城
- `in City-State cities` - 在城邦城市
- `in cities following this religion` - 应仅用于宗教的万神殿/信徒 uniques
- `in cities following our religion` - 在遵循我们宗教的城市
- `in all cities in which the majority religion is a major religion` - 在大多数宗教是主要宗教的所有城市
- `in all cities in which the majority religion is an enhanced religion` - 在大多数宗教是强化宗教的所有城市
- [civFilter](#civfilter)

你可以在游戏中使用控制台和 `city checkfilter <filter>` 命令来检查这一点

## eraFilter

用于过滤特定时代。

允许的值：

- 时代名称（例如：`Modern era`）
- `any era` - 任何时代
- `Starting Era` - 游戏开始的时代
- `pre-[era]` - 出现在给定时代之前的任何时代（例如：`pre-[Modern era]`）
- `post-[era]` - 出现在给定时代之后的任何时代（例如：`post-[Ancient era]`）

## improvementFilter

用于过滤特定改良。

允许的值：

- 改良名称
- 改良具有的确切 unique（例如：`spaceship improvement`）
- `Improvement` - 改良
- `All`、`all` - 所有
- `Great Improvement`、`Great` - 大改良
- `All Road` - 用于道路和铁路

## populationFilter

确定城市一部分人口的过滤器。

允许的值：

- `Population` - 人口
- `Specialists` - 专家
- `Unemployed` - 失业
- `Followers of the Majority Religion` 或 `Followers of this Religion`，两者仅在该宗教是该城市中的多数宗教时才适用
- 专家名称

## religionFilter

用于过滤特定宗教

- `any` - 任何
- `major` - 主要
- `enhanced` - 强化
- `your` - 你的
- `foriegn` - 外国
- `enemy` - 敌对
- 宗教符号的名称
- 信仰的名称
- 宗教具有的信仰的 unique

## policyFilter

允许的值：

- `All`、`all` - 所有
- `[policyBranchName] branch` - [政策分支名称] 分支
- 政策的名称
- 政策具有的 unique（逐字，无占位符）

## combatantFilter

允许的值：

- [mapUnitFilter](#mapunitfilter)，用于单位战斗者
- `City`、`All` 或 [civFilter](#civfilter)，用于城市战斗者

由于 mapUnitFilter 包含 civFilter，这意味着可以将 civFilter 应用于单位和城市的 combatantFilter。

## regionType

用于将世界划分为区域，在每个区域开始游戏时放置单个玩家。

允许的值是 `Hybrid` 和任何具有以下两种 uniques 之一的名称的地形：

- `A Region is formed with at least [amount]% [simpleTerrain] tiles, with priority [amount]`
- `A Region is formed with at least [amount]% [simpleTerrain] tiles and [simpleTerrain] tiles, with priority [amount]`

## simpleTerrain

由 NaturalWonderGenerator 用于放置自然奇观

允许的值：

- `Land` - 陆地
- `Water` - 水域
- `Elevated` - 高地
- 任何地形的名称

## stats

这表示由特定属性组成的文本，稍微复杂一些。

每个 stats 由几个属性变化组成，每个都是 `+{amount} {stat}` 的形式，其中 'stat' 是七个主要属性之一
（例如 `Production`、`Food`、`Gold`、`Science`、`Culture`、`Happiness` 和 `Faith`）。
例如：`+1 Science`。

这些可以用 ", " 连接在一起，例如：`+2 Production, +3 Food`。

## resourceFilter

允许的值：

- 资源名称
- `any` - 任何
- `All`、`all` - 所有
- 资源类型：`Strategic`（战略）、`Luxury`（奢侈）、`Bonus`（加成）
- 改良时提供的属性（例如 `Food`）

## stockpiledResource

这表示对应于自定义 Stockpile Resource 的文本。

这些是全局文明资源，其行为类似于主要的文明范围的资源，如 `Gold` 和 `Faith`。
你可以生成它们并消费它们。如果库存不足，消费它们的行动将被阻止。

要使用，你需要先定义一个带有"Stockpiled" Unique 的 TileResources。然后你可以在其他 Uniques 中引用它们。

## Stockpile

可以添加到文明的东西

允许的值：

- stockpiled resource（见上文）
- 属性名称 - 用于全局属性，不是城市属性
- `Stored Food`（用于城市）
- `Golden Age points` - 黄金时代点数

## technologyFilter

目前仅用于 [ModOptions.techsToRemove](mod-file-structure/5-miscellaneous-json-files.md#modoptionsjson)。

允许的值：

- `All`、`all` - 所有
- 匹配科技时代的 [eraFilter](#erafilter)
- 科技的名称
- 科技具有的 unique（逐字，无占位符）

## terrainFilter

这表示单个地块上的地形。

允许的值：

- 一个过滤器命名特定的 json 属性（按名称）：
    - 基础地形
    - 地形特征
    - 基础地形 uniques
    - 地形特征 uniques
    - 资源
    - 自然奇观
    - 匹配地块所有者的 [nationFilter](#nationfilter)
- 或者过滤器是选择派生测试的常量字符串：
    - `All`、`all` - 所有
    - `Terrain` - 地形
    - `Water`、`Land` - 水域、陆地
    - `Coastal`（至少有一个直接邻居是海岸）
    - `River`（正如所有'地块上的河流'上下文，这意味着'至少一侧相邻于河流'）
    - `Open terrain`、`Rough terrain`（注意所有没有 rough unique 的地形都算作 open）
    - `Friendly Land`、`Friendly` - 属于你的陆地，或其他对你开放边界的文明
    - `Foreign Land` - 任何不是友好陆地的陆地
    - `Enemy Land`、`Enemy` - 任何属于你与之开战的文明的陆地
    - `your` - 属于你的陆地
    - `Unowned` - 不被任何文明拥有的陆地
    - `Water resource`、`Strategic resource`、`Luxury resource`、`Bonus resource`、`resource` - 水域资源、战略资源、奢侈资源、加成资源、资源
    - `Natural Wonder`（与上面不同，上面意味着通过名称测试特定的自然奇观，这测试其中任何一个）
    - `Featureless` - 无特征
    - `Fresh Water` - 淡水
    - `non-fresh water` - 非淡水
    - `Impassible` - 不可通行

请注意，所有这些都是**大小写敏感**的。

注意：资源过滤器取决于过滤运行上下文中是否知道查看文明。水域和特定测试需要查看文明，并且如果资源需要科技才能可见，该科技必须由查看文明研究。其他资源类别测试可以在不知道查看文明的情况下仅对不需要任何科技的资源成功。所以 - 测试你的模组！

例如，unique `"[stats] from [tileFilter] tiles [cityFilter]"` 可以匹配几种情况：

## tileFilter

允许的值：

- [terrainFilter](#terrainfilter) 用于此地块
- [improvementFilter](#improvementfilter) 用于此地块
- 拥有此地块的文明的 [civFilter](#civfilter)
- `Improvement` 或 `improved` 用于有任何改良的地块
- `unimproved` 用于没有改良的地块
- `pillaged` 用于被掠夺的地块
- `worked` 用于被城市工作的地块

你可以在游戏中使用控制台和 `tile checkfilter <filter>` 命令来检查这一点

## terrainQuality

用于指示在地形质量方面应该如何看待地形，以便在游戏开始时将世界划分为区域，在每个区域中放置单个玩家。

允许的值：

- `Undesirable` - 不受欢迎
- `Food` - 食物
- `Desirable` - 令人向往
- `Production` - 生产力

## countable

表示**可以计数的东西**，用于比较和乘法 uniques

允许的值：

- **整数常量** - 任何正整数或负数
  - 示例：`Only available <when number of [123] is more than [0]>`
- `turns` - 回合数
  - 示例：`Only available <when number of [turns] is more than [0]>`
  - 无论游戏速度或开始时代如何，总是从零开始
- `year` - 当前年份
  - 示例：`Only available <when number of [year] is more than [0]>`
  - 取决于游戏速度或开始时代，公元前为负数
- `Cities` - 相关文明拥有的城市数量
  - 示例：`Only available <when number of [Cities] is more than [0]>`
- `Units` - 相关文明拥有的单位数量
  - 示例：`Only available <when number of [Units] is more than [0]>`
- 属性名称（`Production`、`Food`、`Gold`、`Science`、`Culture`、`Happiness` 或 `Faith`）
  - 示例：`Only available <when number of [Science] is more than [0]>`
  - 获取属性**储备**，而不是每回合的数量（可以是城市属性或文明属性，取决于 unique 在哪里使用）
- 属性/资源每回合
  - 示例：`Only available <when number of [[Culture] Per Turn] is more than [0]>`
  - 获取文明每回合获得的属性或资源的数量
- `Completed Policy branches` - 已完成的政策分支数
  - 示例：`Only available <when number of [Completed Policy branches] is more than [0]>`
- `[cityFilter] Cities`
  - 示例：`Only available <when number of [[in all cities] Cities] is more than [0]>`
- `[mapUnitFilter] Units`
  - 示例：`Only available <when number of [[Wounded] Units] is more than [0]>`
- `Carried [mapUnitFilter] units` - 此单位携带的单位数量
  - 示例：`Only available <when number of [Carried [Air] units] is more than [0]>`
  - 仅计算匹配过滤器的运输单位。用于'when number of'条件。
- `[buildingFilter] Buildings`
  - 示例：`Only available <when number of [[Culture] Buildings] is more than [0]>`
- `[buildingFilter] Buildings by [civFilter] Civilizations`
  - 示例：`Only available <when number of [[Culture] Buildings by [City-States] Civilizations] is more than [0]>`
- `[cityFilter] Cities of [civFilter] Civilizations`
  - 示例：`Only available <when number of [[in all cities] Cities of [City-States] Civilizations] is more than [0]>`
- `Adopted [policyFilter] Policies`
  - 示例：`Only available <when number of [Adopted [Oligarchy] Policies] is more than [0]>`
- `Adopted [policyFilter] Policies by [civFilter] Civilizations`
  - 示例：`Only available <when number of [Adopted [Oligarchy] Policies by [City-States] Civilizations] is more than [0]>`
- `Researched [techFilter] Technologies`
  - 示例：`Only available <when number of [Researched [Agriculture] Technologies] is more than [0]>`
  - 计算相关文明研究过的匹配科技
  - 可重复科技，如未来科技，只计算一次
- `Remaining [civFilter] Civilizations`
  - 示例：`Only available <when number of [Remaining [City-States] Civilizations] is more than [0]>`
- `Owned [tileFilter] Tiles`
  - 示例：`Only available <when number of [Owned [Farm] Tiles] is more than [0]>`
- `[tileFilter] Tiles`
  - 示例：`Only available <when number of [[Desert] Tiles] is more than [0]>`
- 资源名称 - 来自 [TileResources.json](mod-file-structure/3-map-related-json-files.md#tileresourcesjson)
  - 示例：`Only available <when number of [Iron] is more than [0]>`
  - 可以是城市属性或文明属性，取决于 unique 在哪里使用
  - 例如：如果 unique 放在建筑上，那么检索的资源将是城市的。如果放在政策上，它们将是文明的。
  - 这可能会有所不同，例如，本地资源是按城市计数的。
- `[resourceFilter] resource of [civFilter] Civilizations`
  - 示例：`Only available <when number of [[Strategic] resource of [City-States] Civilizations] is more than [0]>`
- `Era number` - 当前玩家所在时代的数字
  - 示例：`Only available <when number of [Era number] is more than [0]>`
  - Eras.json 中时代的从零开始的索引。
- `Speed modifier for [stat]` - 特定属性的游戏速度修饰符，作为百分比
  - 示例：`Only available <when number of [Speed modifier for [Culture]] is more than [0]>`
  - 从玩家选择的 Speeds.json 条目中选择适当的字段。
  - 它返回乘以 100。
  - Food 和 Happiness 返回通用的 `modifier` 字段。
  - 其他字段如 `goldGiftModifier` 或 `barbarianModifier` 无法使用此 Countable 访问。
- **评估表达式！**
  - 示例：`Only available <when number of [[Iron] + 2] is more than [0]>`
  - 表达式支持任意数学运算，并且在被方括号包围时可以包括其他 countables。
  - 例如，由于 `Cities` 是 countable，并且 `[Melee] units` 是 countable，你可以有类似这样的东西：`([[Melee] units] + 1) / [Cities]`（空格是可选的但有助于可读性）
  - 由于在翻译时，括号被删除，表达式将显示为 `(Melee units + 1) / Cities`
  - 支持 2 个值之间的操作：+、-、*、/、%、^
  - 支持 1 个值的操作：-（否定）、√（平方根）、abs（绝对值 - 将负数变为正数）、sqrt（平方根）、floor（向下取整）、ceil（向上取整）
  - 支持的函数：
    - `max(expression,expression,...)`
    - `min(expression,expression,...)`