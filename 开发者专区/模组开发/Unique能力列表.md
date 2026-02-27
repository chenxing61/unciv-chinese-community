---
title: Unique 能力列表
---

# Unique 能力列表

Uniques 概述可以在[这里](../Developers/Uniques.md)找到。

简单的 Unique 参数可以通过鼠标悬停查看说明。复杂的参数在[Unique 参数类型](Unique-parameters.md)中说明。

## 可触发的 Uniques

<details>
<summary>说明</summary>

具有即时、一次性效果的 Uniques。这些可以添加到科技中，在研究时触发；添加到政策中，在采用时触发；添加到时代中，在到达时触发；添加到建筑中，在建造时触发。或者，你可以为它们添加 触发条件，使其成为在特定事件时激活的全局 Uniques。它们也可以添加到单位中，赋予它们触发此效果作为行动的能力，这可以通过 单位行动Modifier 和 Unit触发条件 条件进行修改。

</details>

<details>
<summary>Gain a free [buildingName] [cityFilter]</summary>

免费建筑不能自我移除——这会导致尝试添加建筑的无限循环

示例："Gain a free [Library] [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>Remove [buildingFilter] [cityFilter]</summary>

示例："Remove [Culture] [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>Sell [buildingFilter] buildings [cityFilter]</summary>

示例："Sell [Culture] buildings [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>Free [unit] appears</summary>

示例："Free [Musketman] appears"

适用范围：可触发

</details>

<details>
<summary>[positiveAmount] free [unit] 单位 appear</summary>

示例："[3] free [Musketman] 单位 appear"

适用范围：可触发

</details>

<details>
<summary>A [unit] rebels</summary>

示例："A [Musketman] rebels"

适用范围：可触发

</details>

<details>
<summary>[positiveAmount] [unit]s rebel</summary>

示例："[3] [Musketman]s rebel"

适用范围：可触发

</details>

<details>
<summary>Free Social Policy</summary>

适用范围：可触发

</details>

<details>
<summary>[positiveAmount] Free Social Policies</summary>

示例："[3] Free Social Policies"

适用范围：可触发

</details>

<details>
<summary>Empire enters golden age</summary>

适用范围：可触发

</details>

<details>
<summary>Empire enters a [positiveAmount]-turn Golden Age</summary>

示例："Empire enters a [3]-turn Golden Age"

适用范围：可触发

</details>

<details>
<summary>Free Great Person</summary>

适用范围：可触发

</details>

<details>
<summary>[amount] population [cityFilter]</summary>

示例："[3] population [in all cities]"

适用范围：可触发

</details>

<details>
<summary>[amount] population in a random city</summary>

示例："[3] population in a random city"

适用范围：可触发

</details>

<details>
<summary>Discover [tech]</summary>

示例："Discover [Agriculture]"

适用范围：可触发

</details>

<details>
<summary>Adopt [policy/belief]</summary>

示例："Adopt [Oligarchy]"

适用范围：可触发

</details>

<details>
<summary>Remove [policyFilter]</summary>

示例："Remove [Oligarchy]"

适用范围：可触发

</details>

<details>
<summary>Remove [policyFilter] and refund [amount]% of its cost</summary>

示例："Remove [Oligarchy] and refund [3]% of its cost"

适用范围：可触发

</details>

<details>
<summary>Free Technology</summary>

适用范围：可触发

</details>

<details>
<summary>[positiveAmount] Free Technologies</summary>

示例："[3] Free Technologies"

适用范围：可触发

</details>

<details>
<summary>[positiveAmount] free random researchable Tech(s) from the [eraFilter]</summary>

示例："[3] free random researchable Tech(s) from the [Ancient era]"

适用范围：可触发

</details>

<details>
<summary>Reveals the entire map</summary>

适用范围：可触发

</details>

<details>
<summary>Gain a free [beliefType] belief</summary>

示例："Gain a free [Follower] belief"

适用范围：可触发

</details>

<details>
<summary>Triggers voting for the Diplomatic Victory</summary>

适用范围：可触发

</details>

<details>
<summary>Instantly consumes [positiveAmount] [stockpiledResource]</summary>

示例："Instantly consumes [3] [Mana]"

适用范围：可触发

</details>

<details>
<summary>Instantly provides [positiveAmount] [stockpiledResource]</summary>

示例："Instantly provides [3] [Mana]"

适用范围：可触发

</details>

<details>
<summary>Set [stockpile] to [countable]</summary>

示例："Set [Mana] to [1000]"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：可触发

</details>

<details>
<summary>Instantly gain [amount] [stockpile]</summary>

示例："Instantly gain [3] [Mana]"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：可触发

</details>

<details>
<summary>Gain [amount] [stat]</summary>

示例："Gain [3] [Culture]"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：可触发

</details>

<details>
<summary>Gain [amount]-[amount] [stat]</summary>

示例："Gain [3]-[3] [Culture]"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：可触发

</details>

<details>
<summary>Gain enough Faith for a Pantheon</summary>

适用范围：可触发

</details>

<details>
<summary>Gain enough Faith for [positiveAmount]% of a Great Prophet</summary>

示例："Gain enough Faith for [3]% of a Great Prophet"

适用范围：可触发

</details>

<details>
<summary>Research [relativeAmount]% of [tech]</summary>

示例："Research [+20]% of [Agriculture]"

适用范围：可触发

</details>

<details>
<summary>Gain control over [tileFilter] 地块 in a [nonNegativeAmount]-tile radius</summary>

示例："Gain control over [Farm] 地块 in a [3]-tile radius"

适用范围：可触发

</details>

<details>
<summary>Gain control over [positiveAmount] 地块 [cityFilter]</summary>

示例："Gain control over [3] 地块 [in all cities]"

适用范围：可触发

</details>

<details>
<summary>Reveal up to [positiveAmount/'all'] [tileFilter] within a [positiveAmount] tile radius</summary>

示例："Reveal up to [3] [Farm] within a [3] tile radius"

适用范围：可触发

</details>

<details>
<summary>Triggers the following global alert: [comment]</summary>

支持用于政策和科技。

对于其他目标，生成的通知可能无法正常显示，且可能不支持翻译。原因：您的 [comment] 会得到一个生成的引言，其他触发器通常通知 _你_，而不是 _其他人_，这种区别目前是通过映射文本处理的。

条件在拥有此 unique 的文明上下文中评估，而不是警报接收者的上下文中。

示例："Triggers the following global alert: [comment]"

适用范围：可触发

</details>

<details>
<summary>Promotes all spies [positiveAmount] time(s)</summary>

示例："Promotes all spies [3] time(s)"

适用范围：可触发

</details>

<details>
<summary>Gain an extra spy</summary>

适用范围：可触发

</details>

<details>
<summary>Turn this tile into a [terrainName] tile</summary>

示例："Turn this tile into a [Forest] tile"

适用范围：可触发

</details>

<details>
<summary>Remove [resourceFilter] resources from this tile</summary>

示例："Remove [Strategic] resources from this tile"

适用范围：可触发

</details>

<details>
<summary>Remove [improvementFilter] improvements from this tile</summary>

示例："Remove [All Road] improvements from this tile"

适用范围：可触发

</details>

<details>
<summary>[mapUnitFilter] 单位 gain the [promotion] promotion</summary>

仅对单位类型有效的晋升有效——或不指定任何类型的晋升也有效。

示例："[Wounded] 单位 gain the [Shock I] promotion"

适用范围：可触发

</details>

<details>
<summary>Provides the cheapest [stat] building in your first [positiveAmount] cities for free</summary>

示例："Provides the cheapest [Culture] building in your first [3] cities for free"

适用范围：可触发

</details>

<details>
<summary>Provides a [buildingName] in your first [positiveAmount] cities for free</summary>

示例："Provides a [Library] in your first [3] cities for free"

适用范围：可触发

</details>

<details>
<summary>Triggers a [event] event</summary>

示例："Triggers a [Inspiration] event"

适用范围：可触发

</details>

<details>
<summary>Mark tutorial [comment] complete</summary>

示例："Mark tutorial [comment] complete"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发

</details>

<details>
<summary>Play [comment] sound</summary>

有关可用声音列表，请参见 [图片和音频](Images-and-Audio.md#sounds)。

示例："Play [comment] sound"

此 unique 对用户自动隐藏。

适用范围：可触发

</details>

<details>
<summary>Get the leader title of [leaderTitle]</summary>

示例："Get the leader title of [Sovereign [leaderName] the Great]"

此 unique 对用户自动隐藏。

适用范围：可触发

</details>

<details>
<summary>Suppress warning [validationWarning]</summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。注意：这可以在 模组选项 中使用，在警告涉及的 uniques 中，或作为触发警告的 unique 的修饰符——但您仍然需要具体指定。即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、速度、模组选项、元修饰符

</details>

## 单位可触发的 Uniques

<details>
<summary>说明</summary>

Uniques that have immediate, one-time effects on a unit.They can be added to 单位 (on unit, unit type, or promotion) to grant them the ability to trigger this effect as an action, which can be modified with 单位行动Modifier and Unit触发条件 conditionals.

</details>

<details>
<summary>[unitTriggerTarget] heals [positiveAmount] HP</summary>

示例："[This Unit] heals [3] HP"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] takes [positiveAmount] damage</summary>

示例："[This Unit] takes [3] damage"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] gains [amount] XP</summary>

示例："[This Unit] gains [3] XP"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] upgrades for free</summary>

示例："[This Unit] upgrades for free"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] upgrades for free including special upgrades</summary>

示例："[This Unit] upgrades for free including special upgrades"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] gains the [promotion] promotion</summary>

示例："[This Unit] gains the [Shock I] promotion"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] loses the [promotion] promotion</summary>

示例："[This Unit] loses the [Shock I] promotion"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] gains [positiveAmount] movement</summary>

示例："[This Unit] gains [3] movement"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] loses [positiveAmount] movement</summary>

示例："[This Unit] loses [3] movement"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] gains the [promotion] status for [positiveAmount] turn(s)</summary>

状态是临时晋升。它们不堆叠，重新应用特定状态会取最大值——因此在 1 回合上重新应用 3 回合会变成 3，但反之亦然。状态剩余的回合数在*回合开始时*减少，因此为 1 回合应用的加成在其他人回合期间仍然适用。

示例："[This Unit] gains the [Shock I] status for [3] turn(s)"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] loses the [promotion] status</summary>

示例："[This Unit] loses the [Shock I] status"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] is destroyed</summary>

示例："[This Unit] is destroyed"

适用范围：单位可触发

</details>

<details>
<summary>[unitTriggerTarget] gets a name from the [unitNameGroup] group</summary>

示例："[This Unit] gets a name from the [Scientist] group"

适用范围：单位可触发

</details>

## 全局 Uniques

<details>
<summary>说明</summary>

Uniques that apply globally. Civs gain the abilities of these uniques from nation uniques, reached eras, researched techs, adopted policies, built buildings, religion 'founder' uniques, owned resources, and ruleset-wide global uniques.

</details>

<details>
<summary>[stats]</summary>

示例："[+1 Gold, +2 Production]"

适用范围：全局、地形、改良设施

</details>

<details>
<summary>[stats] [cityFilter]</summary>

示例："[+1 Gold, +2 Production] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stats] from every specialist [cityFilter]</summary>

示例："[+1 Gold, +2 Production] from every specialist [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stats] per [positiveAmount] population [cityFilter]</summary>

示例："[+1 Gold, +2 Production] per [3] population [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stats] per [positiveAmount] social policies adopted</summary>

仅适用于文明范围的属性

示例："[+1 Gold, +2 Production] per [3] social policies adopted"

适用范围：全局

</details>

<details>
<summary>[stats] per every [positiveAmount] [civWideStat]</summary>

示例："[+1 Gold, +2 Production] per every [3] [Gold]"

适用范围：全局

</details>

<details>
<summary>[stats] in cities on [terrainFilter] 地块</summary>

示例："[+1 Gold, +2 Production] in cities on [Fresh Water] 地块"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stats] from all [buildingFilter] buildings</summary>

示例："[+1 Gold, +2 Production] from all [Culture] buildings"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stats] from [tileFilter] 地块 [cityFilter]</summary>

示例："[+1 Gold, +2 Production] from [Farm] 地块 [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stats] from [tileFilter] 地块 without [tileFilter] [cityFilter]</summary>

示例："[+1 Gold, +2 Production] from [Farm] 地块 without [Farm] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stats] from every [tileFilter/specialist/buildingFilter]</summary>

示例："[+1 Gold, +2 Production] from every [Farm]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stats] from each Trade Route</summary>

示例："[+1 Gold, +2 Production] from each Trade Route"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% [stat]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% [Culture]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% [stat] [cityFilter]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% [stat] from every [tileFilter/buildingFilter]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% [Culture] from every [Farm]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% Yield from every [tileFilter/buildingFilter]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% Yield from every [Farm]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% [stat] from 城邦</summary>

示例："[+20]% [Culture] from 城邦"

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% [stat] from Trade Routes</summary>

示例："[+20]% [Culture] from Trade Routes"

适用范围：全局

</details>

<details>
<summary>Nullifies [stat] [cityFilter]</summary>

示例："Nullifies [Culture] [in all cities]"

适用范围：全局

</details>

<details>
<summary>Nullifies Growth [cityFilter]</summary>

示例："Nullifies Growth [in all cities]"

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% Production when constructing [buildingFilter] buildings [cityFilter]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% Production when constructing [Culture] buildings [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% Production when constructing [baseUnitFilter] 单位 [cityFilter]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% Production when constructing [Melee] 单位 [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% Production when constructing [buildingFilter] wonders [cityFilter]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% Production when constructing [Culture] wonders [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% Production towards any buildings that already exist in the Capital</summary>

示例："[+20]% Production towards any buildings that already exist in the Capital"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% Yield from pillaging 地块</summary>

示例："[+20]% Yield from pillaging 地块"

适用范围：全局、单位

</details>

<details>
<summary>[relativeAmount]% Health from pillaging 地块</summary>

示例："[+20]% Health from pillaging 地块"

适用范围：全局、单位

</details>

<details>
<summary>Military Units gifted from 城邦 start with [positiveAmount] XP</summary>

示例："Military Units gifted from 城邦 start with [3] XP"

适用范围：全局

</details>

<details>
<summary>Militaristic 城邦 grant 单位 [positiveAmount] times as fast when you are at war with a common nation</summary>

示例："Militaristic 城邦 grant 单位 [3] times as fast when you are at war with a common nation"

适用范围：全局

</details>

<details>
<summary>Gifts of Gold to 城邦 generate [relativeAmount]% more 影响力</summary>

示例："Gifts of Gold to 城邦 generate [+20]% more 影响力"

适用范围：全局

</details>

<details>
<summary>Can spend Gold to annex or puppet a City-State that has been your Ally for [nonNegativeAmount] turns</summary>

示例："Can spend Gold to annex or puppet a City-State that has been your Ally for [3] turns"

适用范围：全局

</details>

<details>
<summary>City-State territory always counts as friendly territory</summary>

适用范围：全局

</details>

<details>
<summary>Allied 城邦 will occasionally gift Great People</summary>

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% City-State 影响力 degradation</summary>

示例："[+20]% City-State 影响力 degradation"

适用范围：全局

</details>

<details>
<summary>Resting point for 影响力 with 城邦 is increased by [amount]</summary>

示例："Resting point for 影响力 with 城邦 is increased by [3]"

适用范围：全局

</details>

<details>
<summary>Allied 城邦 provide [stat] equal to [relativeAmount]% of what they produce for themselves</summary>

示例："Allied 城邦 provide [Culture] equal to [+20]% of what they produce for themselves"

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% resources gifted by 城邦</summary>

示例："[+20]% resources gifted by 城邦"

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% Happiness from luxury resources gifted by 城邦</summary>

示例："[+20]% Happiness from luxury resources gifted by 城邦"

适用范围：全局

</details>

<details>
<summary>City-State 影响力 recovers at twice the normal rate</summary>

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% growth [cityFilter]</summary>

示例："[+20]% growth [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[amount]% Food is carried over after population increases [cityFilter]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[3]% Food is carried over after population increases [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% Food consumption by [populationFilter] [cityFilter]</summary>

示例："[+20]% Food consumption by [Followers of this Religion] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[relativeAmount]% unhappiness from the number of cities</summary>

示例："[+20]% unhappiness from the number of cities"

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% Unhappiness from [populationFilter] [cityFilter]</summary>

示例："[+20]% Unhappiness from [Followers of this Religion] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[amount] Happiness from each type of luxury resource</summary>

示例："[3] Happiness from each type of luxury resource"

适用范围：全局

</details>

<details>
<summary>Retain [relativeAmount]% of the happiness from a luxury after the last copy has been traded away</summary>

示例："Retain [+20]% of the happiness from a luxury after the last copy has been traded away"

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% of excess happiness converted to [stat]</summary>

示例："[+20]% of excess happiness converted to [Culture]"

适用范围：全局

</details>

<details>
<summary>Cannot build [baseUnitFilter] 单位</summary>

示例："Cannot build [Melee] 单位"

适用范围：全局

</details>

<details>
<summary>Enables construction of 飞船部件s</summary>

适用范围：全局

</details>

<details>
<summary>May buy [baseUnitFilter] 单位 for [nonNegativeAmount] [stat] [cityFilter] at an increasing price ([amount])</summary>

示例："May buy [Melee] 单位 for [3] [Culture] [in all cities] at an increasing price ([3])"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy [buildingFilter] buildings for [nonNegativeAmount] [stat] [cityFilter] at an increasing price ([amount])</summary>

示例："May buy [Culture] buildings for [3] [Culture] [in all cities] at an increasing price ([3])"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy [baseUnitFilter] 单位 for [nonNegativeAmount] [stat] [cityFilter]</summary>

示例："May buy [Melee] 单位 for [3] [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy [buildingFilter] buildings for [nonNegativeAmount] [stat] [cityFilter]</summary>

示例："May buy [Culture] buildings for [3] [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy [baseUnitFilter] 单位 with [stat] [cityFilter]</summary>

示例："May buy [Melee] 单位 with [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy [buildingFilter] buildings with [stat] [cityFilter]</summary>

示例："May buy [Culture] buildings with [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy [baseUnitFilter] 单位 with [stat] for [nonNegativeAmount] times their normal Production cost</summary>

示例："May buy [Melee] 单位 with [Culture] for [3] times their normal Production cost"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy [buildingFilter] buildings with [stat] for [nonNegativeAmount] times their normal Production cost</summary>

示例："May buy [Culture] buildings with [Culture] for [3] times their normal Production cost"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stat] cost of purchasing items in cities [relativeAmount]%</summary>

多个加成叠加相乘：+50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing items in cities [+20]%"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stat] cost of purchasing [buildingFilter] buildings [relativeAmount]%</summary>

多个加成叠加相乘：+50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing [Culture] buildings [+20]%"

适用范围：全局、追随者信仰

</details>

<details>
<summary>[stat] cost of purchasing [baseUnitFilter] 单位 [relativeAmount]%</summary>

多个加成叠加相乘：+50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing [Melee] 单位 [+20]%"

适用范围：全局、追随者信仰

</details>

<details>
<summary>Enables conversion of city production to [civWideStat]</summary>

示例："Enables conversion of city production to [Gold]"

适用范围：全局

</details>

<details>
<summary>Production to [civWideStat] conversion in cities changed by [relativeAmount]%</summary>

示例："Production to [Gold] conversion in cities changed by [+20]%"

适用范围：全局

</details>

<details>
<summary>Improves movement speed on roads</summary>

适用范围：全局

</details>

<details>
<summary>Roads connect 地块 across rivers</summary>

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% maintenance on road & railroads</summary>

多个加成叠加相乘：+50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance on road & railroads"

适用范围：全局

</details>

<details>
<summary>No Maintenance costs for improvements in [tileFilter] 地块</summary>

示例："No Maintenance costs for improvements in [Farm] 地块"

适用范围：全局

</details>

<details>
<summary>[relativeAmount]% construction time for [improvementFilter] improvements</summary>

示例："[+20]% construction time for [All Road] improvements"

适用范围：全局、单位

</details>

<details>
<summary>Can build [improvementFilter] improvements at a [relativeAmount]% rate</summary>

示例："Can build [All Road] improvements at a [+20]% rate"

适用范围：全局、单位

</details>

<details>
<summary>Gain a free [buildingName] [cityFilter]</summary>

免费建筑不能自我移除——这会导致尝试添加建筑的无限循环

示例："Gain a free [Library] [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>[relativeAmount]% maintenance cost for [buildingFilter] buildings [cityFilter]</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance cost for [Culture] buildings [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Remove [buildingFilter] [cityFilter]</summary>

示例："Remove [Culture] [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>Sell [buildingFilter] buildings [cityFilter]</summary>

示例："Sell [Culture] buildings [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>[relativeAmount]% Culture cost of natural border growth [cityFilter]</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Culture cost of natural border growth [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Gold cost of acquiring 地块 [cityFilter]</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Gold cost of acquiring 地块 [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Each city founded increases culture cost of policies [relativeAmount]% less than normal</summary>

示例："Each city founded increases culture cost of policies [+20]% less than normal"

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% Culture cost of adopting new Policies</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Culture cost of adopting new Policies"

适用范围：Global

</details>

<details>
<summary>Each city founded increases Science cost of Technologies [relativeAmount]% less than normal</summary>

示例："Each city founded increases Science cost of Technologies [+20]% less than normal"

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% Science cost of researching new Technologies</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Science cost of researching new Technologies"

适用范围：Global

</details>

<details>
<summary>[stats] for every known Natural Wonder</summary>

示例："[+1 Gold, +2 Production] for every known Natural Wonder"

适用范围：Global

</details>

<details>
<summary>[stats] for discovering a Natural Wonder (bonus enhanced to [stats] if first to discover it)</summary>

示例："[+1 Gold, +2 Production] for discovering a Natural Wonder (bonus enhanced to [+1 Gold, +2 Production] if first to discover it)"

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% Great Person generation [cityFilter]</summary>

示例："[+20]% Great Person generation [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Gold from Great Merchant trade missions</summary>

示例："[+20]% Gold from Great Merchant trade missions"

适用范围：全局， Unit

</details>

<details>
<summary>Great General provides double combat bonus</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Receive a free Great Person at the end of every [comment] (every 394 years), after researching [tech]. Each bonus person can only be chosen once.</summary>

示例："Receive a free Great Person at the end of every [comment] (every 394 years), after researching [Agriculture]. Each bonus person can only be chosen once."

适用范围：Global

</details>

<details>
<summary>Once The Long Count activates, the year on the world screen displays as the traditional Mayan Long Count.</summary>

适用范围：Global

</details>

<details>
<summary>[amount] Unit Supply</summary>

示例："[3] Unit Supply"

适用范围：Global

</details>

<details>
<summary>[amount] Unit Supply per [positiveAmount] population [cityFilter]</summary>

示例："[3] Unit Supply per [3] population [in all cities]"

适用范围：Global

</details>

<details>
<summary>[amount] Unit Supply per city</summary>

示例："[3] Unit Supply per city"

适用范围：Global

</details>

<details>
<summary>[amount] 单位 cost no maintenance</summary>

示例："[3] 单位 cost no maintenance"

适用范围：Global

</details>

<details>
<summary>Units in cities cost no Maintenance</summary>

适用范围：Global

</details>

<details>
<summary>Enables embarkation for land 单位</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Global

</details>

<details>
<summary>Enables [mapUnitFilter] 单位 to enter ocean 地块</summary>

示例："Enables [Wounded] 单位 to enter ocean 地块"

适用范围：Global

</details>

<details>
<summary>Land 单位 may cross [terrainName] 地块 after the first [baseUnitFilter] is earned</summary>

示例："Land 单位 may cross [Forest] 地块 after the first [Melee] is earned"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Global

</details>

<details>
<summary>Enemy [mapUnitFilter] 单位 must spend [positiveAmount] extra movement points when inside your territory</summary>

示例："Enemy [Wounded] 单位 must spend [3] extra movement points when inside your territory"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Global

</details>

<details>
<summary>New [baseUnitFilter] 单位 start with [amount] XP [cityFilter]</summary>

示例："New [Melee] 单位 start with [3] XP [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>All newly-trained [baseUnitFilter] 单位 [cityFilter] receive the [promotion] promotion</summary>

示例："All newly-trained [Melee] 单位 [in all cities] receive the [Shock I] promotion"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[mapUnitFilter] Units adjacent to this city heal [amount] HP per turn when healing</summary>

示例："[Wounded] Units adjacent to this city heal [3] HP per turn when healing"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% XP required for promotions</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% XP required for promotions"

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% City Strength from defensive buildings</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% City Strength from defensive buildings"

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% Strength for cities</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Strength for cities"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Provides [amount] [resource]</summary>

示例："Provides [3] [Iron]"

适用范围：全局， 追随者信仰、改良设施

</details>

<details>
<summary>[relativeAmount]% [resourceFilter] resource production</summary>

示例："[+20]% [Strategic] resource production"

适用范围：Global

</details>

<details>
<summary>Requires establishing embassies to conduct advanced diplomacy</summary>

适用范围：Global

</details>

<details>
<summary>Enables Open Borders agreements</summary>

适用范围：Global

</details>

<details>
<summary>Enables Research agreements</summary>

适用范围：Global

</details>

<details>
<summary>Science gained from research agreements [relativeAmount]%</summary>

示例："Science gained from research agreements [+20]%"

适用范围：Global

</details>

<details>
<summary>Enables Defensive Pacts</summary>

适用范围：Global

</details>

<details>
<summary>When declaring friendship, both parties gain a [relativeAmount]% boost to great person generation</summary>

示例："When declaring friendship, both parties gain a [+20]% boost to great person generation"

适用范围：Global

</details>

<details>
<summary>影响力 of all other civilizations with all city-states degrades [relativeAmount]% faster</summary>

示例："影响力 of all other civilizations with all city-states degrades [+20]% faster"

适用范围：Global

</details>

<details>
<summary>Gain [amount] 影响力 with a [baseUnitFilter] gift to a City-State</summary>

示例："Gain [3] 影响力 with a [Melee] gift to a City-State"

适用范围：Global

</details>

<details>
<summary>Resting point for 影响力 with 城邦 following this religion [amount]</summary>

示例："Resting point for 影响力 with 城邦 following this religion [3]"

适用范围：Global

</details>

<details>
<summary>Notified of new Barbarian encampments</summary>

适用范围：Global

</details>

<details>
<summary>Receive [relativeAmount]% Gold from Barbarian encampments and pillaging Cities</summary>

示例："Receive [+20]% Gold from Barbarian encampments and pillaging Cities"

适用范围：Global

</details>

<details>
<summary>When conquering an encampment, earn [amount] Gold and recruit a Barbarian unit</summary>

示例："When conquering an encampment, earn [3] Gold and recruit a Barbarian unit"

适用范围：Global

</details>

<details>
<summary>When defeating a [mapUnitFilter] unit, earn [amount] Gold and recruit it</summary>

示例："When defeating a [Wounded] unit, earn [3] Gold and recruit it"

适用范围：Global

</details>

<details>
<summary>May choose [amount] additional [beliefType] beliefs when [foundingOrEnhancing] a religion</summary>

示例："May choose [3] additional [Follower] beliefs when [founding] a religion"

适用范围：Global

</details>

<details>
<summary>May choose [amount] additional belief(s) of any type when [foundingOrEnhancing] a religion</summary>

示例："May choose [3] additional belief(s) of any type when [founding] a religion"

适用范围：Global

</details>

<details>
<summary>[stats] when a city adopts this religion for the first time</summary>

示例："[+1 Gold, +2 Production] when a city adopts this religion for the first time"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% Natural religion spread [cityFilter]</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Natural religion spread [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Religion naturally spreads to cities [amount] 地块 away</summary>

示例："Religion naturally spreads to cities [3] 地块 away"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May not generate great prophet equivalents naturally</summary>

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% Faith cost of generating Great Prophet equivalents</summary>

示例："[+20]% Faith cost of generating Great Prophet equivalents"

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% spy effectiveness [cityFilter]</summary>

示例："[+20]% spy effectiveness [in all cities]"

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% enemy spy effectiveness [cityFilter]</summary>

示例："[+20]% enemy spy effectiveness [in all cities]"

适用范围：Global

</details>

<details>
<summary>New spies start with [amount] level(s)</summary>

示例："New spies start with [3] level(s)"

适用范围：Global

</details>

<details>
<summary>Triggers victory</summary>

适用范围：Global

</details>

<details>
<summary>Triggers a Cultural Victory upon completion</summary>

适用范围：Global

</details>

<details>
<summary>May buy items in puppet cities</summary>

适用范围：Global

</details>

<details>
<summary>May not annex cities</summary>

适用范围：Global

</details>

<details>
<summary>Borrows" city names from other civilizations in the game</summary>

适用范围：Global

</details>

<details>
<summary>Cities are razed [amount] times as fast</summary>

示例："Cities are razed [3] times as fast"

适用范围：Global

</details>

<details>
<summary>Receive a tech boost when scientific buildings/wonders are built in capital</summary>

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% Golden Age length</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Golden Age length"

适用范围：Global

</details>

<details>
<summary>Population loss from nuclear attacks [relativeAmount]% [cityFilter]</summary>

示例："Population loss from nuclear attacks [+20]% [in all cities]"

适用范围：Global

</details>

<details>
<summary>Damage to garrison from nuclear attacks [relativeAmount]% [cityFilter]</summary>

示例："Damage to garrison from nuclear attacks [+20]% [in all cities]"

适用范围：Global

</details>

<details>
<summary>Rebel 单位 may spawn</summary>

适用范围：Global

</details>

<details>
<summary>[relativeAmount]% Strength</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Strength"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount] Strength</summary>

示例："[+20] Strength"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% Strength decreasing with distance from the capital</summary>

示例："[+20]% Strength decreasing with distance from the capital"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% to Flank Attack bonuses</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% to Flank Attack bonuses"

适用范围：全局， Unit

</details>

<details>
<summary>[amount] additional attacks per turn</summary>

示例："[3] additional attacks per turn"

适用范围：全局， Unit

</details>

<details>
<summary>[amount] Movement</summary>

示例："[3] Movement"

适用范围：全局， Unit

</details>

<details>
<summary>[amount] Sight</summary>

示例："[3] Sight"

适用范围：全局， 单位， 地形， Improvement

</details>

<details>
<summary>[amount] Range</summary>

示例："[3] Range"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount] Air Interception Range</summary>

示例："[+20] Air Interception Range"

适用范围：全局， Unit

</details>

<details>
<summary>[amount] HP，当恢复时</summary>

示例："[3] HP，当恢复时"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% Spread Religion Strength</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Spread Religion Strength"

适用范围：全局， Unit

</details>

<details>
<summary>When spreading religion to a city, gain [amount] times the amount of followers of other religions as [stat]</summary>

示例："When spreading religion to a city, gain [3] times the amount of followers of other religions as [Culture]"

适用范围：全局， Unit

</details>

<details>
<summary>可以越过障碍物进行远程攻击</summary>

适用范围：全局， Unit

</details>

<details>
<summary>无防御地形加成</summary>

适用范围：全局， Unit

</details>

<details>
<summary>无防御地形惩罚</summary>

适用范围：全局， Unit

</details>

<details>
<summary>受伤单位无伤害惩罚</summary>

适用范围：全局， Unit

</details>

<details>
<summary>无法占领城市</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Unable to pillage 地块</summary>

适用范围：全局， Unit

</details>

<details>
<summary>掠夺无移动力成本</summary>

适用范围：全局， Unit

</details>

<details>
<summary>可以在友好领土外恢复</summary>

适用范围：全局， Unit

</details>

<details>
<summary>所有恢复效果翻倍</summary>

适用范围：全局， Unit

</details>

<details>
<summary>恢复 [amount] 伤害，如果它杀死了一个单位</summary>

示例："恢复 [3] 伤害，如果它杀死了一个单位"

适用范围：全局， Unit

</details>

<details>
<summary>只能通过掠夺恢复</summary>

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% maintenance costs</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance costs"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% Gold cost of upgrading</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Gold cost of upgrading"

适用范围：全局， Unit

</details>

<details>
<summary>Earn [amount]% of the damage done to [combatantFilter] 单位 as [stockpile]</summary>

示例："Earn [3]% of the damage done to [City] 单位 as [Mana]"

适用范围：全局， Unit

</details>

<details>
<summary>Upon capturing a city, receive [amount] times its [stat] production as [stockpile] immediately</summary>

示例："Upon capturing a city, receive [3] times its [Culture] production as [Mana] immediately"

适用范围：全局， Unit

</details>

<details>
<summary>Earn [amount]% of killed [mapUnitFilter] unit's [costOrStrength] as [stockpile]</summary>

示例："Earn [3]% of killed [Wounded] unit's [Cost] as [Mana]"

适用范围：全局， Unit

</details>

<details>
<summary>[amount] XP gained from combat</summary>

示例："[3] XP gained from combat"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% XP gained from combat</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% XP gained from combat"

适用范围：全局， Unit

</details>

<details>
<summary>[greatPerson] is earned [relativeAmount]% faster</summary>

示例："[Great General] is earned [+20]% faster"

适用范围：全局， Unit

</details>

<details>
<summary>[nonNegativeAmount] 下船的移动力成本</summary>

示例："[3] 下船的移动力成本"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：全局， Unit

</details>

<details>
<summary>[nonNegativeAmount] 乘船的移动力成本</summary>

示例："[3] 乘船的移动力成本"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：全局， Unit

</details>

## 文明 Uniques
<details>
<summary>Starts with [tech]</summary>

示例："Starts with [Agriculture]"

适用范围：Nation

</details>

<details>
<summary>Starts with [policy] adopted</summary>

示例："Starts with [Oligarchy] adopted"

适用范围：Nation

</details>

<details>
<summary>All 单位 move through Forest and Jungle Tiles in friendly territory as if they have roads. These 地块 can be used to establish City Connections upon researching the Wheel.</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Nation

</details>

<details>
<summary>Units ignore terrain costs when moving into any tile with Hills</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Nation

</details>

<details>
<summary>Excluded from map editor</summary>

此 unique 对用户自动隐藏。

适用范围：Nation、地形、改良设施、资源

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Will not be chosen for new games</summary>

适用范围：Nation

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 性格 Uniques
<details>
<summary>Will not build [baseUnitFilter/buildingFilter]</summary>

示例："Will not build [Melee]"

适用范围：性格

</details>

## 时代 Uniques
<details>
<summary>Starting in this era disables religion</summary>

适用范围：Era

</details>

<details>
<summary>Every major Civilization gains a spy once a civilization enters this era</summary>

适用范围：Era

</details>

## 科技 Uniques
<details>
<summary>Enables establishment of embassies</summary>

适用范围：Tech

</details>

<details>
<summary>Starting tech</summary>

适用范围：Tech

</details>

<details>
<summary>Can be continually researched</summary>

适用范围：Tech

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Cannot be hurried</summary>

适用范围：科技， Building

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

示例："[+20]% weight to this choice for AI decisions"

此 unique 对用户自动隐藏。

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑、晋升, 事件选择

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 政策 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

示例："[+20]% weight to this choice for AI decisions"

此 unique 对用户自动隐藏。

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑、晋升, 事件选择

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 创立者信仰 Uniques

<details>
<summary>说明</summary>

Uniques for Founder and Enhancer type Beliefs, that will apply to the founder of this religion

</details>

<details>
<summary>[stats] for each global city following this religion</summary>

示例："[+1 Gold, +2 Production] for each global city following this religion"

适用范围：创立者信仰

</details>

<details>
<summary>[stats] from every [positiveAmount] global followers [cityFilter]</summary>

示例："[+1 Gold, +2 Production] from every [3] global followers [in all cities]"

适用范围：创立者信仰

</details>

<details>
<summary>[relativeAmount]% [stat] from every follower, up to [relativeAmount]%</summary>

示例："[+20]% [Culture] from every follower, up to [+20]%"

适用范围：创立者信仰, 追随者信仰

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

示例："[+20]% weight to this choice for AI decisions"

此 unique 对用户自动隐藏。

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑、晋升, 事件选择

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 追随者信仰 Uniques

<details>
<summary>说明</summary>

Uniques for Pantheon and Follower type beliefs, that will apply to each city where the religion is the majority religion

</details>

<details>
<summary>[stats] [cityFilter]</summary>

示例："[+1 Gold, +2 Production] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stats] from every specialist [cityFilter]</summary>

示例："[+1 Gold, +2 Production] from every specialist [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stats] per [positiveAmount] population [cityFilter]</summary>

示例："[+1 Gold, +2 Production] per [3] population [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stats] in cities on [terrainFilter] 地块</summary>

示例："[+1 Gold, +2 Production] in cities on [Fresh Water] 地块"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stats] from all [buildingFilter] buildings</summary>

示例："[+1 Gold, +2 Production] from all [Culture] buildings"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stats] from [tileFilter] 地块 [cityFilter]</summary>

示例："[+1 Gold, +2 Production] from [Farm] 地块 [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stats] from [tileFilter] 地块 without [tileFilter] [cityFilter]</summary>

示例："[+1 Gold, +2 Production] from [Farm] 地块 without [Farm] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stats] from every [tileFilter/specialist/buildingFilter]</summary>

示例："[+1 Gold, +2 Production] from every [Farm]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stats] from each Trade Route</summary>

示例："[+1 Gold, +2 Production] from each Trade Route"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% [stat]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% [Culture]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% [stat] [cityFilter]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% [stat] from every [tileFilter/buildingFilter]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% [Culture] from every [Farm]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Yield from every [tileFilter/buildingFilter]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Yield from every [Farm]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% [stat] from every follower, up to [relativeAmount]%</summary>

示例："[+20]% [Culture] from every follower, up to [+20]%"

适用范围：创立者信仰, 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Production when constructing [buildingFilter] buildings [cityFilter]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Production when constructing [Culture] buildings [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Production when constructing [baseUnitFilter] 单位 [cityFilter]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Production when constructing [Melee] 单位 [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Production when constructing [buildingFilter] wonders [cityFilter]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Production when constructing [Culture] wonders [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Production towards any buildings that already exist in the Capital</summary>

示例："[+20]% Production towards any buildings that already exist in the Capital"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% growth [cityFilter]</summary>

示例："[+20]% growth [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[amount]% Food is carried over after population increases [cityFilter]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[3]% Food is carried over after population increases [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Food consumption by [populationFilter] [cityFilter]</summary>

示例："[+20]% Food consumption by [Followers of this Religion] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Unhappiness from [populationFilter] [cityFilter]</summary>

示例："[+20]% Unhappiness from [Followers of this Religion] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy [baseUnitFilter] 单位 for [nonNegativeAmount] [stat] [cityFilter] at an increasing price ([amount])</summary>

示例："May buy [Melee] 单位 for [3] [Culture] [in all cities] at an increasing price ([3])"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy [buildingFilter] buildings for [nonNegativeAmount] [stat] [cityFilter] at an increasing price ([amount])</summary>

示例："May buy [Culture] buildings for [3] [Culture] [in all cities] at an increasing price ([3])"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy [baseUnitFilter] 单位 for [nonNegativeAmount] [stat] [cityFilter]</summary>

示例："May buy [Melee] 单位 for [3] [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy [buildingFilter] buildings for [nonNegativeAmount] [stat] [cityFilter]</summary>

示例："May buy [Culture] buildings for [3] [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy [baseUnitFilter] 单位 with [stat] [cityFilter]</summary>

示例："May buy [Melee] 单位 with [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy [buildingFilter] buildings with [stat] [cityFilter]</summary>

示例："May buy [Culture] buildings with [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy [baseUnitFilter] 单位 with [stat] for [nonNegativeAmount] times their normal Production cost</summary>

示例："May buy [Melee] 单位 with [Culture] for [3] times their normal Production cost"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy [buildingFilter] buildings with [stat] for [nonNegativeAmount] times their normal Production cost</summary>

示例："May buy [Culture] buildings with [Culture] for [3] times their normal Production cost"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stat] cost of purchasing items in cities [relativeAmount]%</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing items in cities [+20]%"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stat] cost of purchasing [buildingFilter] buildings [relativeAmount]%</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing [Culture] buildings [+20]%"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[stat] cost of purchasing [baseUnitFilter] 单位 [relativeAmount]%</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing [Melee] 单位 [+20]%"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% maintenance cost for [buildingFilter] buildings [cityFilter]</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance cost for [Culture] buildings [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Culture cost of natural border growth [cityFilter]</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Culture cost of natural border growth [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Gold cost of acquiring 地块 [cityFilter]</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Gold cost of acquiring 地块 [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Great Person generation [cityFilter]</summary>

示例："[+20]% Great Person generation [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>New [baseUnitFilter] 单位 start with [amount] XP [cityFilter]</summary>

示例："New [Melee] 单位 start with [3] XP [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>All newly-trained [baseUnitFilter] 单位 [cityFilter] receive the [promotion] promotion</summary>

示例："All newly-trained [Melee] 单位 [in all cities] receive the [Shock I] promotion"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[mapUnitFilter] Units adjacent to this city heal [amount] HP per turn when healing</summary>

示例："[Wounded] Units adjacent to this city heal [3] HP per turn when healing"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>[relativeAmount]% Strength for cities</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Strength for cities"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Provides [amount] [resource]</summary>

示例："Provides [3] [Iron]"

适用范围：全局， 追随者信仰、改良设施

</details>

<details>
<summary>[relativeAmount]% Natural religion spread [cityFilter]</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Natural religion spread [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Religion naturally spreads to cities [amount] 地块 away</summary>

示例："Religion naturally spreads to cities [3] 地块 away"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Earn [amount]% of [mapUnitFilter] unit's [costOrStrength] as [stockpile] when killed within 4 地块 of a city following this religion</summary>

示例："Earn [3]% of [Wounded] unit's [Cost] as [Mana] when killed within 4 地块 of a city following this religion"

适用范围：追随者信仰

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

示例："[+20]% weight to this choice for AI decisions"

此 unique 对用户自动隐藏。

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑、晋升, 事件选择

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 建筑 Uniques
<details>
<summary>[positiveAmount]% of [stat] from every [improvementFilter/buildingFilter] in the city added to [resource]</summary>

示例："[3]% of [Culture] from every [All Road] in the city added to [Iron]"

适用范围：Building

</details>

<details>
<summary>Consumes [amount] [resource]</summary>

示例："Consumes [3] [Iron]"

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Costs [amount] [stockpiledResource]</summary>

These resources are removed *when work begins* on the construction. Do not confuse with "costs [amount] [stockpiledResource]" (lowercase 'c'), the Unit Action Modifier.

示例："Costs [3] [Mana]"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Unbuildable</summary>

Blocks from being built, possibly by conditional. However it can still appear in the menu and be bought with other means such as Gold or Faith

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Cannot be purchased</summary>

适用范围：Building、单位

</details>

<details>
<summary>Can be purchased with [stat] [cityFilter]</summary>

示例："Can be purchased with [Culture] [in all cities]"

适用范围：Building、单位

</details>

<details>
<summary>Can be purchased for [amount] [stat] [cityFilter]</summary>

示例："Can be purchased for [3] [Culture] [in all cities]"

适用范围：Building、单位

</details>

<details>
<summary>Limited to [amount] per Civilization</summary>

示例："Limited to [3] per Civilization"

适用范围：Building、单位

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Excess Food converted to Production when under construction</summary>

适用范围：Building、单位

</details>

<details>
<summary>Requires at least [amount] population</summary>

示例："Requires at least [3] population"

适用范围：Building、单位

</details>

<details>
<summary>Triggers a global alert upon build start</summary>

适用范围：Building、单位

</details>

<details>
<summary>Triggers a global alert upon completion</summary>

适用范围：Building、单位

</details>

<details>
<summary>Cost increases by [amount] per owned city</summary>

示例："Cost increases by [3] per owned city"

适用范围：Building、单位

</details>

<details>
<summary>Cost increases by [amount] when built</summary>

示例："Cost increases by [3] when built"

适用范围：Building、单位

</details>

<details>
<summary>[amount]% production cost</summary>

Intended to be used with conditionals to dynamically alter construction costs. 多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[3]% production cost"

适用范围：Building、单位

</details>

<details>
<summary>Can only be built</summary>

Meant to be used together with conditionals, like "Can only be built &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also NOT block Upgrade and Transform actions. See also OnlyAvailable.

适用范围：Building、单位

</details>

<details>
<summary>Must have an owned [tileFilter] within [amount] 地块</summary>

示例："Must have an owned [Farm] within [3] 地块"

适用范围：Building

</details>

<details>
<summary>Enables nuclear weapon</summary>

适用范围：Building

</details>

<details>
<summary>Must be on [tileFilter]</summary>

示例："Must be on [Farm]"

适用范围：Building

</details>

<details>
<summary>Must not be on [tileFilter]</summary>

示例："Must not be on [Farm]"

适用范围：Building

</details>

<details>
<summary>Must be next to [tileFilter]</summary>

示例："Must be next to [Farm]"

适用范围：Building、改良设施

</details>

<details>
<summary>Must not be next to [tileFilter]</summary>

示例："Must not be next to [Farm]"

适用范围：Building

</details>

<details>
<summary>Unsellable</summary>

适用范围：Building

</details>

<details>
<summary>Obsolete with [tech]</summary>

示例："Obsolete with [Agriculture]"

适用范围：Building、改良设施、资源

</details>

<details>
<summary>Indicates the capital city</summary>

适用范围：Building

</details>

<details>
<summary>Moves to new capital when capital changes</summary>

适用范围：Building

</details>

<details>
<summary>Provides 1 extra copy of each improved luxury resource near this City</summary>

适用范围：Building

</details>

<details>
<summary>Destroyed when the city is captured</summary>

适用范围：Building

</details>

<details>
<summary>Never destroyed when the city is captured</summary>

适用范围：Building

</details>

<details>
<summary>[relativeAmount]% Gold given to enemy if city is captured</summary>

示例："[+20]% Gold given to enemy if city is captured"

适用范围：Building

</details>

<details>
<summary>Removes extra unhappiness from annexed cities</summary>

适用范围：Building

</details>

<details>
<summary>Connects trade routes over water</summary>

适用范围：Building

</details>

<details>
<summary>Automatically built in all cities where it is buildable</summary>

适用范围：Building

</details>

<details>
<summary>Creates a [improvementName] improvement on a specific tile</summary>

当选择建造此建筑时，玩家必须选择一个可以建造改良设施的地块。建筑完成后，该地块将获得此改良设施。每个建筑限一个。

示例："Creates a [Trading Post] improvement on a specific tile"

此 unique 不支持条件。

适用范围：Building

</details>

<details>
<summary>Can carry [amount] extra [mapUnitFilter] 单位</summary>

对于建筑，支持使用 `Air` 作为 `mapUnitFilter` 来增加城市空中单位容量。

示例："Can carry [3] extra [Wounded] 单位"

适用范围：Building、单位

</details>

<details>
<summary>飞船部件</summary>

适用范围：Building、单位

</details>

<details>
<summary>Cannot be hurried</summary>

适用范围：科技， Building

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

示例："[+20]% weight to this choice for AI decisions"

此 unique 对用户自动隐藏。

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑、晋升, 事件选择

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>不可建造时显示</summary>

此 unique 对用户自动隐藏。

适用范围：Building、单位

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 单位行动 Uniques

<details>
<summary>说明</summary>

Uniques that affect a unit's actions, and can be modified by 单位行动Modifiers

</details>

<details>
<summary>Founds a new city</summary>

适用范围：单位行动

</details>

<details>
<summary>Founds a new puppet city</summary>

适用范围：单位行动

</details>

<details>
<summary>Can instantly construct a [improvementFilter] improvement</summary>

示例："Can instantly construct a [All Road] improvement"

适用范围：单位行动

</details>

<details>
<summary>Can Spread Religion</summary>

适用范围：单位行动

</details>

<details>
<summary>Can remove other religions from cities</summary>

适用范围：单位行动

</details>

<details>
<summary>May found a religion</summary>

适用范围：单位行动

</details>

<details>
<summary>May enhance a religion</summary>

适用范围：单位行动

</details>

<details>
<summary>Can transform to [unit]</summary>

默认消耗所有移动力

示例："Can transform to [Musketman]"

适用范围：单位行动

</details>

## 单位 Uniques

<details>
<summary>说明</summary>

Uniques that can be added to 单位, unit types, or promotions

</details>

<details>
<summary>[relativeAmount]% Yield from pillaging 地块</summary>

示例："[+20]% Yield from pillaging 地块"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% Health from pillaging 地块</summary>

示例："[+20]% Health from pillaging 地块"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% construction time for [improvementFilter] improvements</summary>

示例："[+20]% construction time for [All Road] improvements"

适用范围：全局， Unit

</details>

<details>
<summary>Can build [improvementFilter] improvements at a [relativeAmount]% rate</summary>

示例："Can build [All Road] improvements at a [+20]% rate"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% Gold from Great Merchant trade missions</summary>

示例："[+20]% Gold from Great Merchant trade missions"

适用范围：全局， Unit

</details>

<details>
<summary>Great General provides double combat bonus</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Consumes [amount] [resource]</summary>

示例："Consumes [3] [Iron]"

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Costs [amount] [stockpiledResource]</summary>

These resources are removed *when work begins* on the construction. Do not confuse with "costs [amount] [stockpiledResource]" (lowercase 'c'), the Unit Action Modifier.

示例："Costs [3] [Mana]"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Unbuildable</summary>

Blocks from being built, possibly by conditional. However it can still appear in the menu and be bought with other means such as Gold or Faith

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Cannot be purchased</summary>

适用范围：Building、单位

</details>

<details>
<summary>Can be purchased with [stat] [cityFilter]</summary>

示例："Can be purchased with [Culture] [in all cities]"

适用范围：Building、单位

</details>

<details>
<summary>Can be purchased for [amount] [stat] [cityFilter]</summary>

示例："Can be purchased for [3] [Culture] [in all cities]"

适用范围：Building、单位

</details>

<details>
<summary>Limited to [amount] per Civilization</summary>

示例："Limited to [3] per Civilization"

适用范围：Building、单位

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Excess Food converted to Production when under construction</summary>

适用范围：Building、单位

</details>

<details>
<summary>Requires at least [amount] population</summary>

示例："Requires at least [3] population"

适用范围：Building、单位

</details>

<details>
<summary>Triggers a global alert upon build start</summary>

适用范围：Building、单位

</details>

<details>
<summary>Triggers a global alert upon completion</summary>

适用范围：Building、单位

</details>

<details>
<summary>Cost increases by [amount] per owned city</summary>

示例："Cost increases by [3] per owned city"

适用范围：Building、单位

</details>

<details>
<summary>Cost increases by [amount] when built</summary>

示例："Cost increases by [3] when built"

适用范围：Building、单位

</details>

<details>
<summary>[amount]% production cost</summary>

Intended to be used with conditionals to dynamically alter construction costs. 多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[3]% production cost"

适用范围：Building、单位

</details>

<details>
<summary>Can only be built</summary>

Meant to be used together with conditionals, like "Can only be built &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also NOT block Upgrade and Transform actions. See also OnlyAvailable.

适用范围：Building、单位

</details>

<details>
<summary>May create improvements on water resources</summary>

适用范围：Unit

</details>

<details>
<summary>Can build [improvementFilter/terrainFilter] improvements on 地块</summary>

示例："Can build [All Road] improvements on 地块"

适用范围：Unit

</details>

<details>
<summary>Can be added to [comment] in the Capital</summary>

示例："Can be added to [comment] in the Capital"

适用范围：Unit

</details>

<details>
<summary>Prevents spreading of religion to the city it is next to</summary>

适用范围：Unit

</details>

<details>
<summary>Removes other religions when spreading religion</summary>

适用范围：Unit

</details>

<details>
<summary>May Paradrop to [tileFilter] 地块 up to [positiveAmount] 地块 away</summary>

示例："May Paradrop to [Farm] 地块 up to [3] 地块 away"

适用范围：Unit

</details>

<details>
<summary>Can perform Air Sweep</summary>

适用范围：Unit

</details>

<details>
<summary>Can speed up construction of a building</summary>

适用范围：Unit

</details>

<details>
<summary>可以加速奇迹建造</summary>

适用范围：Unit

</details>

<details>
<summary>可以加速科技研究</summary>

适用范围：Unit

</details>

<details>
<summary>可以产生大量文化</summary>

适用范围：Unit

</details>

<details>
<summary>可以与城邦进行贸易任务，给予大量金币和 [amount] 影响力</summary>

示例："可以与城邦进行贸易任务，给予大量金币和 [3] 影响力"

适用范围：Unit

</details>

<details>
<summary>自动化是主要行动</summary>

此 unique 对用户自动隐藏。

适用范围：Unit

</details>

<details>
<summary>[relativeAmount]% Strength</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Strength"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount] Strength</summary>

示例："[+20] Strength"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% Strength decreasing with distance from the capital</summary>

示例："[+20]% Strength decreasing with distance from the capital"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% to Flank Attack bonuses</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% to Flank Attack bonuses"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% Strength for enemy [mapUnitFilter] 单位 in adjacent [tileFilter] 地块</summary>

示例："[+20]% Strength for enemy [Wounded] 单位 in adjacent [Farm] 地块"

适用范围：Unit

</details>

<details>
<summary>[relativeAmount]% Strength bonus for [mapUnitFilter] 单位 within [amount] 地块</summary>

示例："[+20]% Strength bonus for [Wounded] 单位 within [3] 地块"

适用范围：Unit

</details>

<details>
<summary>[amount] additional attacks per turn</summary>

示例："[3] additional attacks per turn"

适用范围：全局， Unit

</details>

<details>
<summary>[amount] Movement</summary>

示例："[3] Movement"

适用范围：全局， Unit

</details>

<details>
<summary>[amount] Sight</summary>

示例："[3] Sight"

适用范围：全局， 单位， 地形， Improvement

</details>

<details>
<summary>[amount] Range</summary>

示例："[3] Range"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount] Air Interception Range</summary>

示例："[+20] Air Interception Range"

适用范围：全局， Unit

</details>

<details>
<summary>[amount] HP，当恢复时</summary>

示例："[3] HP，当恢复时"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% Spread Religion Strength</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Spread Religion Strength"

适用范围：全局， Unit

</details>

<details>
<summary>When spreading religion to a city, gain [amount] times the amount of followers of other religions as [stat]</summary>

示例："When spreading religion to a city, gain [3] times the amount of followers of other religions as [Culture]"

适用范围：全局， Unit

</details>

<details>
<summary>只能攻击 [combatantFilter] 单位</summary>

示例："只能攻击 [City] 单位"

适用范围：Unit

</details>

<details>
<summary>只能攻击 [tileFilter] 地块</summary>

示例："只能攻击 [Farm] 地块"

适用范围：Unit

</details>

<details>
<summary>不能攻击</summary>

适用范围：Unit

</details>

<details>
<summary>必须设置才能进行远程攻击</summary>

适用范围：Unit

</details>

<details>
<summary>攻击时自毁</summary>

适用范围：Unit

</details>

<details>
<summary>消除跨海岸攻击的战斗惩罚</summary>

适用范围：Unit

</details>

<details>
<summary>可以乘船时攻击</summary>

适用范围：Unit

</details>

<details>
<summary>消除跨河攻击的战斗惩罚</summary>

适用范围：Unit

</details>

<details>
<summary>爆炸半径 [amount]</summary>

示例："爆炸半径 [3]"

适用范围：Unit

</details>

<details>
<summary>可以越过障碍物进行远程攻击</summary>

适用范围：全局， Unit

</details>

<details>
<summary>强度为...的核武器 [amount]</summary>

示例："强度为...的核武器 [3]"

适用范围：Unit

</details>

<details>
<summary>无防御地形加成</summary>

适用范围：全局， Unit

</details>

<details>
<summary>无防御地形惩罚</summary>

适用范围：全局， Unit

</details>

<details>
<summary>受伤单位无伤害惩罚</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Uncapturable</summary>

适用范围：Unit

</details>

<details>
<summary>Withdraws before melee combat</summary>

适用范围：Unit

</details>

<details>
<summary>无法占领城市</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Unable to pillage 地块</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Destroys [cityFilter] cities instead of capturing</summary>

The unit will destroy [cityFilter] cities instead of capturing them, also allows non-melee 单位 to destroy cities.Capital cities (including city states) are immune to this effect.

示例："Destroys [in all cities] cities instead of capturing"

适用范围：Unit

</details>

<details>
<summary>掠夺无移动力成本</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Can move after attacking</summary>

适用范围：Unit

</details>

<details>
<summary>Transfer Movement to [mapUnitFilter]</summary>

示例："Transfer Movement to [Wounded]"

适用范围：Unit

</details>

<details>
<summary>Can move immediately once bought</summary>

适用范围：Unit

</details>

<details>
<summary>可以在友好领土外恢复</summary>

适用范围：全局， Unit

</details>

<details>
<summary>所有恢复效果翻倍</summary>

适用范围：全局， Unit

</details>

<details>
<summary>恢复 [amount] 伤害，如果它杀死了一个单位</summary>

示例："恢复 [3] 伤害，如果它杀死了一个单位"

适用范围：全局， Unit

</details>

<details>
<summary>只能通过掠夺恢复</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Unit will heal every turn, even if it performs an action</summary>

适用范围：Unit

</details>

<details>
<summary>所有相邻单位恢复 [amount] HP，当恢复时</summary>

示例："所有相邻单位恢复 [3] HP，当恢复时"

适用范围：Unit

</details>

<details>
<summary>No Sight</summary>

适用范围：Unit

</details>

<details>
<summary>Can see over obstacles</summary>

适用范围：Unit

</details>

<details>
<summary>Can carry [amount] [mapUnitFilter] 单位</summary>

示例："Can carry [3] [Wounded] 单位"

适用范围：Unit

</details>

<details>
<summary>Can carry [amount] extra [mapUnitFilter] 单位</summary>

对于建筑，支持使用 `Air` 作为 `mapUnitFilter` 来增加城市空中单位容量。

示例："Can carry [3] extra [Wounded] 单位"

适用范围：Building、单位

</details>

<details>
<summary>Cannot be carried by [mapUnitFilter] 单位</summary>

示例："Cannot be carried by [Wounded] 单位"

适用范围：Unit

</details>

<details>
<summary>[relativeAmount]% chance to intercept air attacks</summary>

示例："[+20]% chance to intercept air attacks"

适用范围：Unit

</details>

<details>
<summary>Damage taken from interception reduced by [relativeAmount]%</summary>

示例："Damage taken from interception reduced by [+20]%"

适用范围：Unit

</details>

<details>
<summary>[relativeAmount]% Damage when intercepting</summary>

示例："[+20]% Damage when intercepting"

适用范围：Unit

</details>

<details>
<summary>[amount] extra interceptions may be made per turn</summary>

示例："[3] extra interceptions may be made per turn"

适用范围：Unit

</details>

<details>
<summary>Cannot be intercepted</summary>

适用范围：Unit

</details>

<details>
<summary>Cannot intercept [mapUnitFilter] 单位</summary>

示例："Cannot intercept [Wounded] 单位"

适用范围：Unit

</details>

<details>
<summary>[relativeAmount]% Strength when performing Air Sweep</summary>

示例："[+20]% Strength when performing Air Sweep"

适用范围：Unit

</details>

<details>
<summary>[relativeAmount]% maintenance costs</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance costs"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% Gold cost of upgrading</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Gold cost of upgrading"

适用范围：全局， Unit

</details>

<details>
<summary>Earn [amount]% of the damage done to [combatantFilter] 单位 as [stockpile]</summary>

示例："Earn [3]% of the damage done to [City] 单位 as [Mana]"

适用范围：全局， Unit

</details>

<details>
<summary>Upon capturing a city, receive [amount] times its [stat] production as [stockpile] immediately</summary>

示例："Upon capturing a city, receive [3] times its [Culture] production as [Mana] immediately"

适用范围：全局， Unit

</details>

<details>
<summary>Earn [amount]% of killed [mapUnitFilter] unit's [costOrStrength] as [stockpile]</summary>

示例："Earn [3]% of killed [Wounded] unit's [Cost] as [Mana]"

适用范围：全局， Unit

</details>

<details>
<summary>May capture killed [mapUnitFilter] 单位</summary>

示例："May capture killed [Wounded] 单位"

适用范围：Unit

</details>

<details>
<summary>[amount] XP gained from combat</summary>

示例："[3] XP gained from combat"

适用范围：全局， Unit

</details>

<details>
<summary>[relativeAmount]% XP gained from combat</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% XP gained from combat"

适用范围：全局， Unit

</details>

<details>
<summary>Can be earned through combat</summary>

适用范围：Unit

</details>

<details>
<summary>[greatPerson] is earned [relativeAmount]% faster</summary>

示例："[Great General] is earned [+20]% faster"

适用范围：全局， Unit

</details>

<details>
<summary>Invisible to others</summary>

适用范围：Unit

</details>

<details>
<summary>Invisible to non-adjacent 单位</summary>

适用范围：Unit

</details>

<details>
<summary>可以看到隐形的 [mapUnitFilter] 单位</summary>

示例："可以看到隐形的 [Wounded] 单位"

适用范围：Unit

</details>

<details>
<summary>可以升级到 [unit] 通过类似废墟的效果</summary>

示例："可以升级到 [Musketman] 通过类似废墟的效果"

适用范围：Unit

</details>

<details>
<summary>Can upgrade to [unit]</summary>

示例："Can upgrade to [Musketman]"

适用范围：Unit

</details>

<details>
<summary>攻击时摧毁地块改良设施</summary>

适用范围：Unit

</details>

<details>
<summary>Cannot move</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>Double movement in [terrainFilter]</summary>

示例："Double movement in [Fresh Water]"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>All 地块 cost 1 movement</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>May travel on Water 地块 without embarking</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>Can pass through impassable 地块</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>Ignores terrain cost</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>Ignores Zone of Control</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>Rough terrain penalty</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>Can enter ice 地块</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>不能乘船</summary>

适用范围：Unit

</details>

<details>
<summary>Cannot enter ocean 地块</summary>

适用范围：Unit

</details>

<details>
<summary>May enter foreign 地块 without open borders</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>May enter foreign 地块 without open borders, 但失去 [amount] 宗教力量，每回合结束时</summary>

示例："May enter foreign 地块 without open borders, 但失去 [3] 宗教力量，每回合结束时"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>[nonNegativeAmount] 下船的移动力成本</summary>

示例："[3] 下船的移动力成本"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：全局， Unit

</details>

<details>
<summary>[nonNegativeAmount] 乘船的移动力成本</summary>

示例："[3] 乘船的移动力成本"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：全局， Unit

</details>

<details>
<summary>从不作为野蛮人单位出现</summary>

此 unique 对用户自动隐藏。

适用范围：Unit

</details>

<details>
<summary>宗教单位</summary>

适用范围：Unit

</details>

<details>
<summary>飞船部件</summary>

适用范围：Building、单位

</details>

<details>
<summary>用您的宗教取代其出生城市的宗教</summary>

适用范围：Unit

</details>

<details>
<summary>伟人 - [comment]</summary>

示例："伟人 - [comment]"

适用范围：Unit

</details>

<details>
<summary>属于伟人组 [comment]</summary>

Great people in the same group increase teach other's costs when gained. Gaining one will make all others in the same group cost more GPP.

示例："属于伟人组 [comment]"

适用范围：Unit

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>不可建造时显示</summary>

此 unique 对用户自动隐藏。

适用范围：Building、单位

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 单位类型 Uniques
<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 晋升 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Not shown on world screen</summary>

此 unique 对用户自动隐藏。

适用范围：晋升， Resource

</details>

<details>
<summary>Doing so will consume this opportunity to choose a Promotion</summary>

适用范围：Promotion

</details>

<details>
<summary>This Promotion is free</summary>

适用范围：Promotion

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

示例："[+20]% weight to this choice for AI decisions"

此 unique 对用户自动隐藏。

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑、晋升, 事件选择

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 地形 Uniques
<details>
<summary>[stats]</summary>

示例："[+1 Gold, +2 Production]"

适用范围：全局， 地形， Improvement

</details>

<details>
<summary>[amount] Sight</summary>

示例："[3] Sight"

适用范围：全局， 单位， 地形， Improvement

</details>

<details>
<summary>Must be adjacent to [amount] [simpleTerrain] 地块</summary>

示例："Must be adjacent to [3] [Elevated] 地块"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Must be adjacent to [amount] to [amount] [simpleTerrain] 地块</summary>

示例："Must be adjacent to [3] to [3] [Elevated] 地块"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Must not be on [amount] largest landmasses</summary>

示例："Must not be on [3] largest landmasses"

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Must be on [amount] largest landmasses</summary>

示例："Must be on [3] largest landmasses"

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Occurs on latitudes from [amount] to [amount] percent of distance equator to pole</summary>

示例："Occurs on latitudes from [3] to [3] percent of distance equator to pole"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Occurs in groups of [amount] to [amount] 地块</summary>

示例："Occurs in groups of [3] to [3] 地块"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Neighboring 地块 will convert to [baseTerrain/terrainFeature]</summary>

支持仅需要地块作为上下文而不需要其他内容的条件，如 `<with [n]% chance>`，并按邻居应用它们。

如果您的模组重命名了海岸或湖泊，请勿将这些作为参数使用，因为防止工件的代码将不起作用。

示例："Neighboring 地块 will convert to [Grassland]"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Grants [stats] to the first civilization to discover it</summary>

示例："Grants [+1 Gold, +2 Production] to the first civilization to discover it"

适用范围：Terrain

</details>

<details>
<summary>在此地形上结束回合的单位受到 [amount] 伤害</summary>

示例："Units ending their turn on this terrain take [3] damage"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

此 unique 不支持条件。

适用范围：Terrain

</details>

<details>
<summary>Grants [promotion] ([comment]) to adjacent [mapUnitFilter] 单位 for the rest of the game</summary>

示例："Grants [Shock I] ([comment]) to adjacent [Wounded] 单位 for the rest of the game"

适用范围：Terrain

</details>

<details>
<summary>[amount] Strength for cities built on this terrain</summary>

示例："[3] Strength for cities built on this terrain"

适用范围：Terrain

</details>

<details>
<summary>砍伐时为最近城市提供一次性的 [stats] 加成</summary>

示例："Provides a one-time bonus of [+1 Gold, +2 Production] to the closest city when cut down"

此 unique 的效果可被 <（受游戏速度修改）> 修改

This unique's effect can be modified with &lt;(modified by game progress up to [relativeAmount]%)&gt;

适用范围：Terrain

</details>

<details>
<summary>Vegetation</summary>

此 unique 对用户自动隐藏。

适用范围：地形， Improvement

</details>

<details>
<summary>Tile provides yield without assigned population</summary>

适用范围：地形， Improvement

</details>

<details>
<summary>Nullifies all other stats this tile provides</summary>

适用范围：Terrain

</details>

<details>
<summary>此地块上只能建造 [improvementFilter] 改良设施</summary>

示例："Only [All Road] improvements may be built on this tile"

适用范围：Terrain

</details>

<details>
<summary>Blocks line-of-sight from 地块 at same elevation</summary>

适用范围：Terrain

</details>

<details>
<summary>Has an elevation of [amount] for visibility calculations</summary>

示例："Has an elevation of [3] for visibility calculations"

适用范围：Terrain

</details>

<details>
<summary>Always Fertility [amount] for Map Generation</summary>

示例："Always Fertility [3] for Map Generation"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>[amount] to Fertility for Map Generation</summary>

示例："[3] to Fertility for Map Generation"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>A Region is formed with at least [amount]% [simpleTerrain] 地块, with priority [amount]</summary>

示例："A Region is formed with at least [3]% [Elevated] 地块, with priority [3]"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>A Region is formed with at least [amount]% [simpleTerrain] 地块 and [simpleTerrain] 地块, with priority [amount]</summary>

示例："A Region is formed with at least [3]% [Elevated] 地块 and [Elevated] 地块, with priority [3]"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>A Region can not contain more [simpleTerrain] 地块 than [simpleTerrain] 地块</summary>

示例："A Region can not contain more [Elevated] 地块 than [Elevated] 地块"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Base Terrain on this tile is not counted for Region determination</summary>

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Starts in regions of this type receive an extra [resource]</summary>

示例："Starts in regions of this type receive an extra [Iron]"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Never receives any resources</summary>

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Becomes [terrainName] when adjacent to [terrainFilter]</summary>

示例："Becomes [Forest] when adjacent to [Fresh Water]"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Considered [terrainQuality] when determining start locations</summary>

示例："Considered [Undesirable] when determining start locations"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Doesn't generate naturally</summary>

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Occurs at temperature between [fraction] and [fraction] and humidity between [fraction] and [fraction]</summary>

示例："Occurs at temperature between [0.5] and [0.5] and humidity between [0.5] and [0.5]"

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Occurs in chains at high elevations</summary>

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Occurs in groups around high elevations</summary>

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Every [amount] 地块 with this terrain will receive a major deposit of a strategic resource.</summary>

示例："Every [3] 地块 with this terrain will receive a major deposit of a strategic resource."

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Rare feature</summary>

适用范围：Terrain

</details>

<details>
<summary>[amount]% Chance to be destroyed by nukes</summary>

示例："[3]% Chance to be destroyed by nukes"

适用范围：Terrain

</details>

<details>
<summary>Fresh water</summary>

适用范围：Terrain

</details>

<details>
<summary>Rough terrain</summary>

适用范围：Terrain

</details>

<details>
<summary>Excluded from map editor</summary>

此 unique 对用户自动隐藏。

适用范围：Nation、地形、改良设施、资源

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Suppress warning [validationWarning]</summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。 Note that this can be used in 模组选项, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. 即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、游戏速度, 模组选项, 元修饰符

</details>

## 改良 Uniques
<details>
<summary>[stats]</summary>

示例："[+1 Gold, +2 Production]"

适用范围：全局， 地形， Improvement

</details>

<details>
<summary>Consumes [amount] [resource]</summary>

示例："Consumes [3] [Iron]"

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Provides [amount] [resource]</summary>

示例："Provides [3] [Iron]"

适用范围：全局， 追随者信仰、改良设施

</details>

<details>
<summary>Costs [amount] [stockpiledResource]</summary>

These resources are removed *when work begins* on the construction. Do not confuse with "costs [amount] [stockpiledResource]" (lowercase 'c'), the Unit Action Modifier.

示例："Costs [3] [Mana]"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Unbuildable</summary>

Blocks from being built, possibly by conditional. However it can still appear in the menu and be bought with other means such as Gold or Faith

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Must be next to [tileFilter]</summary>

示例："Must be next to [Farm]"

适用范围：Building、改良设施

</details>

<details>
<summary>Obsolete with [tech]</summary>

示例："Obsolete with [Agriculture]"

适用范围：Building、改良设施、资源

</details>

<details>
<summary>[amount] Sight</summary>

示例："[3] Sight"

适用范围：全局， 单位， 地形， Improvement

</details>

<details>
<summary>Vegetation</summary>

此 unique 对用户自动隐藏。

适用范围：地形， Improvement

</details>

<details>
<summary>Tile provides yield without assigned population</summary>

适用范围：地形， Improvement

</details>

<details>
<summary>Excluded from map editor</summary>

此 unique 对用户自动隐藏。

适用范围：Nation、地形、改良设施、资源

</details>

<details>
<summary>Can also be built on 地块 adjacent to fresh water</summary>

适用范围：Improvement

</details>

<details>
<summary>[stats] from [tileFilter] 地块</summary>

示例："[+1 Gold, +2 Production] from [Farm] 地块"

适用范围：Improvement

</details>

<details>
<summary>[stats] for each adjacent [tileFilter]</summary>

示例："[+1 Gold, +2 Production] for each adjacent [Farm]"

适用范围：Improvement

</details>

<details>
<summary>Ensures a minimum tile yield of [stats]</summary>

示例："Ensures a minimum tile yield of [+1 Gold, +2 Production]"

适用范围：Improvement

</details>

<details>
<summary>Can be built outside your borders</summary>

适用范围：Improvement

</details>

<details>
<summary>Can be built just outside your borders</summary>

适用范围：Improvement

</details>

<details>
<summary>Can only be built on [tileFilter] 地块</summary>

示例："Can only be built on [Farm] 地块"

适用范围：Improvement

</details>

<details>
<summary>Cannot be built on [tileFilter] 地块</summary>

示例："Cannot be built on [Farm] 地块"

适用范围：Improvement

</details>

<details>
<summary>Can only be built to improve a resource</summary>

适用范围：Improvement

</details>

<details>
<summary>Does not need removal of [terrainFeature]</summary>

示例："Does not need removal of [Hill]"

适用范围：Improvement

</details>

<details>
<summary>Removes removable features when built</summary>

适用范围：Improvement

</details>

<details>
<summary>Gives a defensive bonus of [relativeAmount]%</summary>

不接受基于单位的条件

示例："Gives a defensive bonus of [+20]%"

适用范围：Improvement

</details>

<details>
<summary>Costs [amount] [stat] per turn when in your territory</summary>

示例："Costs [3] [Culture] per turn when in your territory"

适用范围：Improvement

</details>

<details>
<summary>Costs [amount] [stat] per turn</summary>

示例："Costs [3] [Culture] per turn"

适用范围：Improvement

</details>

<details>
<summary>Adjacent enemy 单位 ending their turn take [amount] damage</summary>

示例："Adjacent enemy 单位 ending their turn take [3] damage"

适用范围：Improvement

</details>

<details>
<summary>Great Improvement</summary>

适用范围：Improvement

</details>

<details>
<summary>Provides a random bonus when entered</summary>

适用范围：Improvement

</details>

<details>
<summary>Unpillagable</summary>

适用范围：Improvement

</details>

<details>
<summary>Pillaging this improvement yields approximately [stats]</summary>

示例："Pillaging this improvement yields approximately [+1 Gold, +2 Production]"

此 unique 的效果可被 <（受游戏速度修改）> 修改

This unique's effect can be modified with &lt;(modified by game progress up to [relativeAmount]%)&gt;

适用范围：Improvement

</details>

<details>
<summary>Pillaging this improvement yields [stats]</summary>

示例："Pillaging this improvement yields [+1 Gold, +2 Production]"

此 unique 的效果可被 <（受游戏速度修改）> 修改

This unique's effect can be modified with &lt;(modified by game progress up to [relativeAmount]%)&gt;

适用范围：Improvement

</details>

<details>
<summary>Destroyed when pillaged</summary>

适用范围：Improvement

</details>

<details>
<summary>Irremovable</summary>

适用范围：Improvement

</details>

<details>
<summary>Will not be replaced by automated 单位</summary>

适用范围：Improvement

</details>

<details>
<summary>Improves [resourceFilter] resource in this tile</summary>

这是作为资源的 improvedBy 字段的替代方案。结果将在加载游戏时缓存在资源定义中，而不知道地形、城市、文明、单位或时间。因此，大多数条件将不起作用，只有那些**不**依赖于游戏状态的条件才会起作用。

示例："Improves [Strategic] resource in this tile"

此 unique 不支持条件。

适用范围：Improvement

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 资源 Uniques
<details>
<summary>Obsolete with [tech]</summary>

示例："Obsolete with [Agriculture]"

适用范围：Building、改良设施、资源

</details>

<details>
<summary>Must not be on [amount] largest landmasses</summary>

示例："Must not be on [3] largest landmasses"

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Must be on [amount] largest landmasses</summary>

示例："Must be on [3] largest landmasses"

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Doesn't generate naturally</summary>

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Occurs at temperature between [fraction] and [fraction] and humidity between [fraction] and [fraction]</summary>

示例："Occurs at temperature between [0.5] and [0.5] and humidity between [0.5] and [0.5]"

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Excluded from map editor</summary>

此 unique 对用户自动隐藏。

适用范围：Nation、地形、改良设施、资源

</details>

<details>
<summary>Deposits in [tileFilter] 地块 always provide [amount] resources</summary>

示例："Deposits in [Farm] 地块 always provide [3] resources"

适用范围：Resource

</details>

<details>
<summary>Can only be created by Mercantile 城邦</summary>

适用范围：Resource

</details>

<details>
<summary>Stockpiled</summary>

此资源每回合累积，而不是在给定时刻有一组生产者和消费者。The current stockpiled amount can be affected with trigger uniques.

适用范围：Resource

</details>

<details>
<summary>City-level resource</summary>

此资源是按城市级别计算的，而不是按文明级别计算

适用范围：Resource

</details>

<details>
<summary>Cannot be traded</summary>

适用范围：Resource

</details>

<details>
<summary>Not shown on world screen</summary>

此 unique 对用户自动隐藏。

适用范围：晋升， Resource

</details>

<details>
<summary>Generated with weight [amount]</summary>

选择此资源的概率是 (此资源权重) / (所有合格资源的权重总和)。没有 unique 的资源的权重为 `1`

示例："Generated with weight [3]"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>Minor deposits generated with weight [amount]</summary>

选择此资源的概率是 (此资源权重) / (所有合格资源的权重总和)。没有 unique 的资源不会作为小型矿床生成。

示例："Minor deposits generated with weight [3]"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>Generated near City States with weight [amount]</summary>

The probability for this resource to be chosen is (this resource weight) / (sum weight of all eligible resources). 只能分配给奢侈品，没有 unique 的资源的权重为 `1`

示例："Generated near City States with weight [3]"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>Special placement during map generation</summary>

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>Generated on every [amount] 地块</summary>

示例："Generated on every [3] 地块"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>Guaranteed with Strategic Balance resource option</summary>

适用范围：Resource

</details>

<details>
<summary>AI will sell at [amount] Gold</summary>

示例："AI will sell at [3] Gold"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>AI will buy at [amount] Gold</summary>

示例："AI will buy at [3] Gold"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 遗迹 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Free [unit] found in the ruins</summary>

示例："Free [Musketman] found in the ruins"

适用范围：Ruins

</details>

<details>
<summary>From a randomly chosen tile [positiveAmount] 地块 away from the ruins, reveal 地块 up to [positiveAmount] 地块 away with [positiveAmount]% chance</summary>

示例："From a randomly chosen tile [3] 地块 away from the ruins, reveal 地块 up to [3] 地块 away with [3]% chance"

适用范围：Ruins

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 游戏速度 Uniques

<details>
<summary>说明</summary>

Speed uniques will be treated as part of GlobalUniques for the Speed selected in a game

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Suppress warning [validationWarning]</summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。 Note that this can be used in 模组选项, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. 即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、游戏速度, 模组选项, 元修饰符

</details>

## 难度 Uniques

<details>
<summary>说明</summary>

Difficulty uniques will be treated as part of GlobalUniques for the Difficulty selected in a game

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 教程 Uniques
## 城邦 Uniques
<details>
<summary>Provides military 单位 every ≈[positiveAmount] turns</summary>

示例："Provides military 单位 every ≈[3] turns"

适用范围：城邦

</details>

<details>
<summary>Provides a unique luxury</summary>

适用范围：城邦

</details>

## 模组选项 Uniques
<details>
<summary>Diplomatic relationships cannot change</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Can convert gold to science with sliders</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Allow City States to spawn with additional 单位</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Can trade civilization introductions for [positiveAmount] Gold</summary>

示例："Can trade civilization introductions for [3] Gold"

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Disable religion</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Can only start games from the starting era</summary>

In this case, 'starting era' means the first defined Era in the entire ruleset.

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Allow raze capital</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Allow raze holy city</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Allow cities to claim 地块</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Suppress warning [validationWarning]</summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。 Note that this can be used in 模组选项, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. 即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、游戏速度, 模组选项, 元修饰符

</details>

<details>
<summary>Mod is incompatible with [modFilter]</summary>

Specifies that your Mod is incompatible with another. Always treated symmetrically, and cannot be overridden by the Mod you are declaring as incompatible.

示例："Mod is incompatible with [DeCiv Redux]"

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Mod requires [modFilter]</summary>

Specifies that your Extension Mod is only available if any other Mod matching the filter is active.

Multiple copies of this Unique cannot be used to specify alternatives, they work as 'and' logic. If you need alternates and wildcards can't filter them well enough, please open an issue.

示例："Mod requires [DeCiv Redux]"

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Should only be used as permanent audiovisual mod</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Can be used as permanent audiovisual mod</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Cannot be used as permanent audiovisual mod</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Mod preselects map [comment]</summary>

Only meaningful for Mods containing several maps. When this mod is selected on the new game screen's custom maps mod dropdown, the named map will be selected on the map dropdown. Also disables selection by recently modified. Case insensitive.

示例："Mod preselects map [comment]"

此 unique 不支持条件。

适用范围：模组选项

</details>

## 事件 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

## 事件选择 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

示例："[+20]% weight to this choice for AI decisions"

此 unique 对用户自动隐藏。

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑、晋升, 事件选择

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment [comment]</summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment [comment]"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 条件 Uniques

<details>
<summary>说明</summary>

可以添加到其他 uniques 以限制其何时激活的修饰符

</details>

<details>
<summary>&lt;every [positiveAmount] turns&gt;</summary>

示例："&lt;every [3] turns&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;before turn number [nonNegativeAmount]&gt;</summary>

示例："&lt;before turn number [3]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;after turn number [nonNegativeAmount]&gt;</summary>

示例："&lt;after turn number [3]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on [speed] game speed&gt;</summary>

示例："&lt;on [Quick] game speed&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on [difficulty] difficulty&gt;</summary>

示例："&lt;on [Prince] difficulty&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on [difficulty] difficulty or higher&gt;</summary>

示例："&lt;on [Prince] difficulty or higher&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on [difficulty] difficulty or lower&gt;</summary>

示例："&lt;on [Prince] difficulty or lower&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when [victoryType] Victory is enabled&gt;</summary>

示例："&lt;when [Domination] Victory is enabled&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when [victoryType] Victory is disabled&gt;</summary>

示例："&lt;when [Domination] Victory is disabled&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when religion is enabled&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when religion is disabled&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when espionage is enabled&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when espionage is disabled&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when nuclear weapons are enabled&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when nuclear weapons are disabled&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;with [nonNegativeAmount]% chance&gt;</summary>

示例："&lt;with [3]% chance&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if tutorials are enabled&gt;</summary>

此 unique 对用户自动隐藏。

适用范围：条件

</details>

<details>
<summary>&lt;if tutorial [comment] is completed&gt;</summary>

示例："&lt;if tutorial [comment] is completed&gt;"

此 unique 对用户自动隐藏。

适用范围：条件

</details>

<details>
<summary>&lt;for [civFilter] Civilizations&gt;</summary>

示例："&lt;for [城邦] Civilizations&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when at war&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when not at war&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;during a Golden Age&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when not in a Golden Age&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;during We Love The King Day&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;while the empire is happy&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;during the [era]&gt;</summary>

示例："&lt;during the [Ancient era]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;before the [era]&gt;</summary>

示例："&lt;before the [Ancient era]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;starting from the [era]&gt;</summary>

示例："&lt;starting from the [Ancient era]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if starting in the [era]&gt;</summary>

示例："&lt;if starting in the [Ancient era]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if no other Civilization has researched this&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;after discovering [techFilter]&gt;</summary>

示例："&lt;after discovering [Agriculture]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;before discovering [techFilter]&gt;</summary>

示例："&lt;before discovering [Agriculture]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;while researching [techFilter]&gt;</summary>

This condition is fulfilled while the technology is actively being researched (it is the one research points are added to)

示例："&lt;while researching [Agriculture]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if no other Civilization has adopted this&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;if no Civilization has adopted [policy/belief]&gt;</summary>

示例："&lt;if no Civilization has adopted [Oligarchy]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;after adopting [policy/belief]&gt;</summary>

示例："&lt;after adopting [Oligarchy]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;before adopting [policy/belief]&gt;</summary>

示例："&lt;before adopting [Oligarchy]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;before founding a Pantheon&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;after founding a Pantheon&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;before founding a religion&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;after founding a religion&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;before enhancing a religion&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;after enhancing a religion&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;after generating a Great Prophet&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;if [buildingFilter] is constructed&gt;</summary>

示例："&lt;if [Culture] is constructed&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if [buildingFilter] is not constructed&gt;</summary>

示例："&lt;if [Culture] is not constructed&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if [buildingFilter] is constructed in all [cityFilter] cities&gt;</summary>

示例："&lt;if [Culture] is constructed in all [in all cities] cities&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if [buildingFilter] is constructed in at least [positiveAmount] of [cityFilter] cities&gt;</summary>

示例："&lt;if [Culture] is constructed in at least [3] of [in all cities] cities&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if [buildingFilter] is constructed by anybody&gt;</summary>

示例："&lt;if [Culture] is constructed by anybody&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if [buildingFilter] is not constructed by anybody&gt;</summary>

示例："&lt;if [Culture] is not constructed by anybody&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;with [resource]&gt;</summary>

示例："&lt;with [Iron]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;without [resource]&gt;</summary>

示例："&lt;without [Iron]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when above [amount] [stat/resource]&gt;</summary>

属性指的是累积属性，而不是每回合属性。因此，不支持幸福度——为此请使用 .当幸福度高于 [amount] 时.

示例："&lt;when above [3] [Culture]&gt;"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：条件

</details>

<details>
<summary>&lt;when below [amount] [stat/resource]&gt;</summary>

Stats refers to the accumulated stat, not stat-per-turn. Therefore, does not support Happiness - for that use 'when below [amount] Happiness'

示例："&lt;when below [3] [Culture]&gt;"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：条件

</details>

<details>
<summary>&lt;when between [amount] and [amount] [stat/resource]&gt;</summary>

Stats refers to the accumulated stat, not stat-per-turn. Therefore, does not support Happiness. 'between' 是包含的——因此 'between 1 and 5' 包含 1 和 5。

示例："&lt;when between [3] and [3] [Culture]&gt;"

此 unique 的效果可被 <（受游戏速度修改）> 修改

适用范围：条件

</details>

<details>
<summary>&lt;in this city&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;in [cityFilter] cities&gt;</summary>

示例："&lt;in [in all cities] cities&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities connected to the capital&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;in cities with a [religionFilter] religion&gt;</summary>

示例："&lt;in cities with a [major] religion&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities not following a [religionFilter] religion&gt;</summary>

示例："&lt;in cities not following a [major] religion&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities with a major religion&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;in cities with an enhanced religion&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;in cities following our religion&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;in cities with a [buildingFilter]&gt;</summary>

示例："&lt;in cities with a [Culture]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities without a [buildingFilter]&gt;</summary>

示例："&lt;in cities without a [Culture]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities with at least [positiveAmount] [populationFilter]&gt;</summary>

示例："&lt;in cities with at least [3] [Followers of this Religion]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities with [positiveAmount] [populationFilter]&gt;</summary>

示例："&lt;in cities with [3] [Followers of this Religion]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities with between [amount] and [amount] [populationFilter]&gt;</summary>

'between' 是包含的——因此 'between 1 and 5' 包含 1 和 5。

示例："&lt;in cities with between [3] and [3] [Followers of this Religion]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities with less than [amount] [populationFilter]&gt;</summary>

示例："&lt;in cities with less than [3] [Followers of this Religion]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;with a garrison&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;for [mapUnitFilter] 单位&gt;</summary>

示例："&lt;for [Wounded] 单位&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when [mapUnitFilter]&gt;</summary>

示例："&lt;when [Wounded]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;for 单位 with [promotion]&gt;</summary>

也适用于具有临时状态的单位

示例："&lt;for 单位 with [Shock I]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;for 单位 without [promotion]&gt;</summary>

也适用于具有临时状态的单位

示例："&lt;for 单位 without [Shock I]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;vs cities&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;vs [mapUnitFilter] 单位&gt;</summary>

示例："&lt;vs [Wounded] 单位&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;vs [combatantFilter]&gt;</summary>

示例："&lt;vs [City]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when fighting 单位 from a Civilization with more Cities than you&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when attacking&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when defending&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when fighting in [tileFilter] 地块&gt;</summary>

示例："&lt;when fighting in [Farm] 地块&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on foreign continents&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when adjacent to a [mapUnitFilter] unit&gt;</summary>

示例："&lt;when adjacent to a [Wounded] unit&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when above [positiveAmount] HP&gt;</summary>

示例："&lt;when above [3] HP&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when below [positiveAmount] HP&gt;</summary>

示例："&lt;when below [3] HP&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if it hasn't used other actions yet&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when stacked with a [mapUnitFilter] unit&gt;</summary>

示例："&lt;when stacked with a [Wounded] unit&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when not stacked with a [mapUnitFilter] unit&gt;</summary>

示例："&lt;when not stacked with a [Wounded] unit&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;with [nonNegativeAmount] to [nonNegativeAmount] neighboring [tileFilter] 地块&gt;</summary>

示例："&lt;with [3] to [3] neighboring [Farm] 地块&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in [tileFilter] 地块&gt;</summary>

示例："&lt;in [Farm] 地块&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in 地块 without [tileFilter]&gt;</summary>

示例："&lt;in 地块 without [Farm]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;within [positiveAmount] 地块 of a [tileFilter]&gt;</summary>

示例："&lt;within [3] 地块 of a [Farm]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in 地块 adjacent to [tileFilter] 地块&gt;</summary>

示例："&lt;in 地块 adjacent to [Farm] 地块&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in 地块 not adjacent to [tileFilter] 地块&gt;</summary>

示例："&lt;in 地块 not adjacent to [Farm] 地块&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on water maps&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;in [regionType] Regions&gt;</summary>

示例："&lt;in [Hybrid] Regions&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in all except [regionType] Regions&gt;</summary>

示例："&lt;in all except [Hybrid] Regions&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when number of [countable] is equal to [countable]&gt;</summary>

示例："&lt;when number of [1000] is equal to [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when number of [countable] is different than [countable]&gt;</summary>

示例："&lt;when number of [1000] is different than [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when number of [countable] is more than [countable]&gt;</summary>

示例："&lt;when number of [1000] is more than [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when number of [countable] is less than [countable]&gt;</summary>

示例："&lt;when number of [1000] is less than [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when number of [countable] is between [countable] and [countable]&gt;</summary>

'between' 是包含的——因此 'between 1 and 5' 包含 1 和 5。

示例："&lt;when number of [1000] is between [1000] and [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when carried by [mapUnitFilter] 单位&gt;</summary>

示例："&lt;when carried by [Wounded] 单位&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if [modFilter] is enabled&gt;</summary>

示例："&lt;if [DeCiv Redux] is enabled&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if [modFilter] is not enabled&gt;</summary>

示例："&lt;if [DeCiv Redux] is not enabled&gt;"

适用范围：条件

</details>

## 触发条件 Uniques

<details>
<summary>说明</summary>

Special conditionals that can be added to 可触发 uniques, to make them activate upon specific actions.

</details>

<details>
<summary>&lt;upon discovering [techFilter] technology&gt;</summary>

示例："&lt;upon discovering [Agriculture] technology&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon entering the [era]&gt;</summary>

示例："&lt;upon entering the [Ancient era]&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon entering a new era&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon adopting [policy/belief]&gt;</summary>

示例："&lt;upon adopting [Oligarchy]&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon declaring war on [civFilter] Civilizations&gt;</summary>

示例："&lt;upon declaring war on [城邦] Civilizations&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon being declared war on by [civFilter] Civilizations&gt;</summary>

示例："&lt;upon being declared war on by [城邦] Civilizations&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon entering a war with [civFilter] Civilizations&gt;</summary>

示例："&lt;upon entering a war with [城邦] Civilizations&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon declaring friendship&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon declaring a defensive pact&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon entering a Golden Age&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon ending a Golden Age&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon conquering a city&gt;</summary>

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon losing a city&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon founding a city&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon building a [improvementFilter] improvement&gt;</summary>

示例："&lt;upon building a [All Road] improvement&gt;"

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon discovering a Natural Wonder&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon constructing [buildingFilter]&gt;</summary>

示例："&lt;upon constructing [Culture]&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon constructing [buildingFilter] [cityFilter]&gt;</summary>

示例："&lt;upon constructing [Culture] [in all cities]&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon gaining a [baseUnitFilter] unit&gt;</summary>

示例："&lt;upon gaining a [Melee] unit&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon turn end&gt;</summary>

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon turn start&gt;</summary>

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon founding a Pantheon&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon founding a Religion&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon enhancing a Religion&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon expending a [mapUnitFilter] unit&gt;</summary>

示例："&lt;upon expending a [Wounded] unit&gt;"

适用范围：触发条件

</details>

## 单位触发条件 Uniques

<details>
<summary>说明</summary>

Special conditionals that can be added to Unit可触发 uniques, to make them activate upon specific actions.

</details>

<details>
<summary>&lt;upon conquering a city&gt;</summary>

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon building a [improvementFilter] improvement&gt;</summary>

示例："&lt;upon building a [All Road] improvement&gt;"

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon turn end&gt;</summary>

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon turn start&gt;</summary>

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon entering combat&gt;</summary>

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon damaging a [mapUnitFilter] unit&gt;</summary>

Can apply triggers to to damaged unit by setting the first parameter to 'Target Unit'

示例："&lt;upon damaging a [Wounded] unit&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon defeating a [mapUnitFilter] unit&gt;</summary>

示例："&lt;upon defeating a [Wounded] unit&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon being defeated&gt;</summary>

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon being promoted&gt;</summary>

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon gaining the [promotion] promotion&gt;</summary>

示例："&lt;upon gaining the [Shock I] promotion&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon losing the [promotion] promotion&gt;</summary>

示例："&lt;upon losing the [Shock I] promotion&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon gaining the [promotion] status&gt;</summary>

示例："&lt;upon gaining the [Shock I] status&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon losing the [promotion] status&gt;</summary>

示例："&lt;upon losing the [Shock I] status&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon losing at least [positiveAmount] HP in a single attack&gt;</summary>

示例："&lt;upon losing at least [3] HP in a single attack&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon ending a turn in a [tileFilter] tile&gt;</summary>

示例："&lt;upon ending a turn in a [Farm] tile&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon discovering a [tileFilter] tile&gt;</summary>

示例："&lt;upon discovering a [Farm] tile&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon entering a [tileFilter] tile&gt;</summary>

示例："&lt;upon entering a [Farm] tile&gt;"

适用范围：Unit触发条件

</details>

## 单位行动修饰符 Uniques

<details>
<summary>说明</summary>

Modifiers that can be added to 单位行动 uniques as conditionals

</details>

<details>
<summary>&lt;by consuming this unit&gt;</summary>

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;for [amount] movement&gt;</summary>

执行时最多消耗 [amount] 移动力

示例："&lt;for [3] movement&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;for all movement&gt;</summary>

执行时消耗所有移动力

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;requires [nonNegativeAmount] movement&gt;</summary>

执行需要 [nonNegativeAmount] 移动力。单位的移动力向上取整

示例："&lt;requires [3] movement&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;costs [stats] stats&gt;</summary>

正整数值将从您的库存中减去。食物和生产力将从最近城市的当前库存中移除

示例："&lt;costs [+1 Gold, +2 Production] stats&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;costs [amount] [stockpiledResource]&gt;</summary>

A positive Integer value will be subtracted from your stock. Do not confuse with "Costs [amount] [stockpiledResource]" (uppercase 'C') for Improvements、建筑s, and Units.

示例："&lt;costs [3] [Mana]&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;removing the [promotion] promotion/status&gt;</summary>

从单位移除晋升/状态——这不是成本，即使没有晋升/状态，单位也能激活该行动。要限制，请使用 <带有 [promotion] 晋升> 条件

示例："&lt;removing the [Shock I] promotion/status&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;once&gt;</summary>

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;[positiveAmount] times&gt;</summary>

示例："&lt;[3] times&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;[nonNegativeAmount] additional time(s)&gt;</summary>

示例："&lt;[3] additional time(s)&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;after which this unit is consumed&gt;</summary>

适用范围：单位行动Modifier

</details>

## 元修饰符 Uniques

<details>
<summary>说明</summary>

可以添加到其他 uniques 以改变用户体验，而不是其行为的修饰符

</details>

<details>
<summary>&lt;for [nonNegativeAmount] turns&gt;</summary>

将此 unique 转换为触发器，作为*全局* unique 激活此 unique 若干回合

示例："&lt;for [3] turns&gt;"

适用范围：元修饰符

</details>

<details>
<summary>&lt;hidden from users&gt;</summary>

适用范围：元修饰符

</details>

<details>
<summary>&lt;for every [countable]&gt;</summary>

仅适用于正数

示例："&lt;for every [1000]&gt;"

适用范围：元修饰符

</details>

<details>
<summary>&lt;for every adjacent [tileFilter]&gt;</summary>

仅适用于正数

示例："&lt;for every adjacent [Farm]&gt;"

适用范围：元修饰符

</details>

<details>
<summary>&lt;for every [positiveAmount] [countable]&gt;</summary>

仅适用于正数

示例："&lt;for every [3] [1000]&gt;"

适用范围：元修饰符

</details>

<details>
<summary>&lt;(modified by game speed)&gt;</summary>

只能应用于某些 uniques，具体情况请参阅每个 unique 的详细信息

适用范围：元修饰符

</details>

<details>
<summary>&lt;(modified by game progress up to [relativeAmount]%)&gt;</summary>

只能应用于某些 uniques，具体情况请参阅每个 unique 的详细信息

示例："&lt;(modified by game progress up to [+20]%)&gt;"

适用范围：元修饰符

</details>

<details>
<summary>&lt;Suppress warning [validationWarning]&gt;</summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。 Note that this can be used in 模组选项, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. 即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："&lt;Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]&gt;"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、游戏速度, 模组选项, 元修饰符

</details>


*[amount]: This indicates a whole number, possibly with a + or - sign, such as `2`, `+13`, or `-3`.
*[baseTerrain]: The name of any terrain that is a base terrain according to the json file.
*[belief]: The name of any belief.
*[beliefType]: 'Pantheon', 'Follower', 'Founder' or 'Enhancer'
*[buildingName]: The name of any building.
*[civWideStat]: All the following stats have civ-wide fields: `Gold`, `Science`, `Culture`, `Faith`.
*[combatantFilter]: This indicates a combatant, which can either be a unit or a city (when bombarding). Must either be `City` or a `mapUnitFilter`.
*[costOrStrength]: `Cost` or `Strength`.
*[countable]: This indicates a number or a numeric variable.They can be tested in the developer console with `civ checkcountable` - for example, `civ checkcountable "[Iron]+2"`.
*[difficulty]: The name of any difficulty.
*[era]: The name of any era.
*[eraFilter]: The name of an era, `any era`, `Starting Era`, `pre-[era]`, `post-[era]`.
*[event]: The name of any event.
*[foundingOrEnhancing]: `founding` or `enhancing`.
*[fraction]: Indicates a fractional number, which can be negative.
*[improvementName]: The name of any improvement excluding 'Cancel improvement order'
*[leaderTitle]: Provides a leader title that includes the leader's name in parameters.
*[modFilter]: A Mod name, case-sensitive _or_ a simple wildcard filter beginning and ending in an Asterisk, case-insensitive.
注意：这必须使用 Unciv 显示的模组名称，而不是存储库名称。
有一个影响连字符和前导/尾随空格的转换。请确保不要混淆。
*[nonNegativeAmount]: This indicates a non-negative whole number, larger than or equal to zero, a '+' sign is optional.
*[policy]: The name of any policy.
*[policyFilter]: The name of any policy, a filtering Unique, any branch (matching only the branch itself), a branch name with " Completed" appended (matches if the branch is completed), or a policy branch as `[branchName] branch` (matching all policies in that branch).
*[positiveAmount]: This indicates a positive whole number, larger than zero, a '+' sign is optional.
*[promotion]: The name of any promotion.
*[relativeAmount]: This indicates a number, usually with a + or - sign, such as `+25` (this kind of parameter is often followed by '%' which is nevertheless not part of the value).
*[resource]: The name of any resource.
*[resourceFilter]: A resource name, type, 'all', or a Stat listed in the resource's improvementStats.
*[specialist]: The name of any specialist.
*[speed]: The name of any speed.
*[stat]: This is one of the 7 major stats in the game - `Gold`, `Science`, `Production`, `Food`, `Happiness`, `Culture` and `Faith`. Note that the stat names need to be capitalized!
*[stats]: For example: `+2 Production, +3 Food`. Note that the stat names need to be capitalized!
*[stockpile]: The name of any stockpiled resource.
*[stockpiledResource]: The name of any stockpiled resource.
*[tech]: The name of any tech.
*[terrainFeature]: The name of any terrain that is a terrain feature according to the json file.
*[tileFilter]: Anything that can be used either in an improvementFilter or in a terrainFilter can be used here, plus 'unimproved'
*[unitNameGroup]: The name of a unit name group found in UnitNameGroups.json, or one of their unique tags.
*[unitTriggerTarget]: `This Unit` or `Target Unit`.
*[unitType]: Can be 'Land', 'Water', 'Air', any unit type, a filtering Unique on a unit type, or a multi-filter of these.
*[validationWarning]: Suppresses one specific Ruleset validation warning. This can specify the full text verbatim including correct upper/lower case, or it can be a wildcard case-insensitive simple pattern starting and ending in an asterisk ('*'). If the suppression unique is used within an object or as modifier (not 模组选项), the wildcard symbols can be omitted, as selectivity is better due to the limited scope.
*[victoryType]: The name of any victory type: 'Cultural', 'Diplomatic', 'Domination', 'Scientific', 'Time' or one of your mod's VictoryTypes.json names.

