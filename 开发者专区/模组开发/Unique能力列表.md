---
title: Unique 能力列表
---

# Unique 能力列表

> 由于此网站的主题插件的限制，本文的所有unique语句无法直接复制。如果你使用的是Edge浏览器，可以使用[Allow copy](https://microsoftedge.microsoft.com/addons/detail/allow-copy/ijekdgpkaednghahipmbbacnabibojeh)插件来强制复制；对于其他浏览器，请自行搜索相关插件。

Uniques 概述可以在[这里](../代码贡献/Uniques 机制.md)找到。

简单的 Unique 参数在此文章末尾。复杂的参数在[Unique 参数类型](Unique参数详解.md)中说明。

## 可触发的 Uniques

> 具有即时、一次性效果的 Uniques。这些可以添加到科技中，在研究时触发；添加到政策中，在采用时触发；添加到时代中，在到达时触发；添加到建筑中，在建造时触发。或者，你可以为它们添加触发条件（TriggerConditions），使其成为在特定事件时激活的全局 Uniques。它们也可以添加到单位中，赋予它们触发此效果作为行动的能力，这可以通过单位行动修饰符（UnitActionModifiers）和单位触发条件（UnitTriggerConditions）条件进行修改。

<details>
<summary>Gain a free <span title="任何建筑的名称">[buildingName]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

免费建筑不能自我移除——这会导致尝试添加建筑的无限循环

示例："Gain a free [Library] [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>Remove <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Remove [Culture] [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>Sell <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Sell [Culture] buildings [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>Free <span title="任何单位的名称">[unit]</span> appears</summary>

示例："Free [Musketman] appears"

适用范围：可触发

</details>

<details>
<summary><span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> free <span title="任何单位的名称">[unit]</span> units appear</summary>

示例："[3] free [Musketman] units appear"

适用范围：可触发

</details>

<details>
<summary>A <span title="任何单位的名称">[unit]</span> rebels</summary>

示例："A [Musketman] rebels"

适用范围：可触发

</details>

<details>
<summary><span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> <span title="任何单位的名称">[unit]</span>s rebel</summary>

示例："[3] [Musketman]s rebel"

适用范围：可触发

</details>

<details>
<summary>Free Social Policy</summary>

适用范围：可触发

</details>

<details>
<summary><span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> Free Social Policies</summary>

示例："[3] Free Social Policies"

适用范围：可触发

</details>

<details>
<summary>Empire enters golden age</summary>

适用范围：可触发

</details>

<details>
<summary>Empire enters a <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span>-turn Golden Age</summary>

示例："Empire enters a [3]-turn Golden Age"

适用范围：可触发

</details>

<details>
<summary>Free Great Person</summary>

适用范围：可触发

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> population <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[3] population [in all cities]"

适用范围：可触发

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> population in a random city</summary>

示例："[3] population in a random city"

适用范围：可触发

</details>

<details>
<summary>Discover <span title="任何科技的名称">[tech]</span></summary>

示例："Discover [Agriculture]"

适用范围：可触发

</details>

<details>
<summary>Adopt <span title="政策或信仰名称">[policy/belief]</span></summary>

示例："Adopt [Oligarchy]"

适用范围：可触发

</details>

<details>
<summary>Remove <span title="任何政策名称、过滤 Unique、任何分支（仅匹配分支本身）、附加 &quot; Completed&quot; 的分支名称（如果分支已完成则匹配），或作为 `[branchName] branch` 的政策分支（匹配该分支中的所有政策）">[policyFilter]</span></summary>

示例："Remove [Oligarchy]"

适用范围：可触发

</details>

<details>
<summary>Remove <span title="任何政策名称、过滤 Unique、任何分支（仅匹配分支本身）、附加 &quot; Completed&quot; 的分支名称（如果分支已完成则匹配），或作为 `[branchName] branch` 的政策分支（匹配该分支中的所有政策）">[policyFilter]</span> and refund <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% of its cost</summary>

示例："Remove [Oligarchy] and refund [3]% of its cost"

适用范围：可触发

</details>

<details>
<summary>Free Technology</summary>

适用范围：可触发

</details>

<details>
<summary><span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> Free Technologies</summary>

示例："[3] Free Technologies"

适用范围：可触发

</details>

<details>
<summary><span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> free random researchable Tech(s) from the <span title="时代名称，`any era`（任何时代）、`Starting Era`（起始时代）、`pre-[era]`（[时代]之前）、`post-[era]`（[时代]之后）">[eraFilter]</span></summary>

示例："[3] free random researchable Tech(s) from the [Ancient era]"

适用范围：可触发

</details>

<details>
<summary>Reveals the entire map</summary>

适用范围：可触发

</details>

<details>
<summary>Gain a free <span title="'Pantheon'（泛灵论）、'Follower'（追随者）、'Founder'（创立者）或 'Enhancer'（强化者）">[beliefType]</span> belief</summary>

示例："Gain a free [Follower] belief"

适用范围：可触发

</details>

<details>
<summary>Triggers voting for the Diplomatic Victory</summary>

适用范围：可触发

</details>

<details>
<summary>Instantly consumes <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span></summary>

示例："Instantly consumes [3] [Mana]"

适用范围：可触发

</details>

<details>
<summary>Instantly provides <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span></summary>

示例："Instantly provides [3] [Mana]"

适用范围：可触发

</details>

<details>
<summary>Set <span title="任何储存资源的名称">[stockpile]</span> to <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span></summary>

示例："Set [Mana] to [1000]"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

适用范围：可触发

</details>

<details>
<summary>Instantly gain <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何储存资源的名称">[stockpile]</span></summary>

示例："Instantly gain [3] [Mana]"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

适用范围：可触发

</details>

<details>
<summary>Gain <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span></summary>

示例："Gain [3] [Culture]"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

适用范围：可触发

</details>

<details>
<summary>Gain <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>-<span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span></summary>

示例："Gain [3]-[3] [Culture]"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

适用范围：可触发

</details>

<details>
<summary>Gain enough Faith for a Pantheon</summary>

适用范围：可触发

</details>

<details>
<summary>Gain enough Faith for <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span>% of a Great Prophet</summary>

示例："Gain enough Faith for [3]% of a Great Prophet"

适用范围：可触发

</details>

<details>
<summary>Research <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% of <span title="任何科技的名称">[tech]</span></summary>

示例："Research [+20]% of [Agriculture]"

适用范围：可触发

</details>

<details>
<summary>Gain control over <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles in a <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span>-tile radius</summary>

示例："Gain control over [Farm] tiles in a [3]-tile radius"

适用范围：可触发

</details>

<details>
<summary>Gain control over <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> tiles <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Gain control over [3] tiles [in all cities]"

适用范围：可触发

</details>

<details>
<summary>Reveal up to [positiveAmount/'all'] <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> within a <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> tile radius</summary>

示例："Reveal up to [3] [Farm] within a [3] tile radius"

适用范围：可触发

</details>

<details>
<summary>Triggers the following global alert: <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

支持用于政策和科技。

对于其他目标，生成的通知可能无法正常显示，且可能不支持翻译。原因：您的 <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> 会得到一个生成的引言，其他触发器通常通知 _你_，而不是 _其他人_，这种区别目前是通过映射文本处理的。

条件在拥有此 unique 的文明上下文中评估，而不是警报接收者的上下文中。

示例："Triggers the following global alert: <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：可触发

</details>

<details>
<summary>Promotes all spies <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> time(s)</summary>

示例："Promotes all spies [3] time(s)"

适用范围：可触发

</details>

<details>
<summary>Gain an extra spy</summary>

适用范围：可触发

</details>

<details>
<summary>Turn this tile into a <span title="地形名称">[terrainName]</span> tile</summary>

示例："Turn this tile into a [Forest] tile"

适用范围：可触发

</details>

<details>
<summary>Remove <span title="资源名称、类型、'all'（所有），或资源 improvementStats 中列出的属性">[resourceFilter]</span> resources from this tile</summary>

示例："Remove [Strategic] resources from this tile"

适用范围：可触发

</details>

<details>
<summary>Remove <span title="改良设施过滤器，可以是改良设施名称、过滤 Unique，或 'All Road'（所有道路）等">[improvementFilter]</span> improvements from this tile</summary>

示例："Remove [All Road] improvements from this tile"

适用范围：可触发

</details>

<details>
<summary><span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units gain the <span title="任何晋升的名称">[promotion]</span> promotion</summary>

仅对单位类型有效的晋升有效——或不指定任何类型的晋升也有效。

示例："[Wounded] units gain the [Shock I] promotion"

适用范围：可触发

</details>

<details>
<summary>Provides the cheapest <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> building in your first <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> cities for free</summary>

示例："Provides the cheapest [Culture] building in your first [3] cities for free"

适用范围：可触发

</details>

<details>
<summary>Provides a <span title="任何建筑的名称">[buildingName]</span> in your first <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> cities for free</summary>

示例："Provides a [Library] in your first [3] cities for free"

适用范围：可触发

</details>

<details>
<summary>Triggers a <span title="任何事件的名称">[event]</span> event</summary>

示例："Triggers a [Inspiration] event"

适用范围：可触发

</details>

<details>
<summary>Mark tutorial <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> complete</summary>

示例："Mark tutorial <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> complete"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发

</details>

<details>
<summary>Play <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> sound</summary>

有关可用声音列表，请参见 [图片和音频](/开发者专区/模组开发/图像和音频资源.md#sounds)。

示例："Play <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> sound"

此 unique 对用户自动隐藏。

适用范围：可触发

</details>

<details>
<summary>Get the leader title of <span title="提供包含领袖名称的领袖头衔">[leaderTitle]</span></summary>

示例："Get the leader title of [Sovereign <span title="领袖名称">[leaderName]</span> the Great]"

此 unique 对用户自动隐藏。

适用范围：可触发

</details>

<details>
<summary>Suppress warning <span title="抑制一个特定的规则集验证警告。可以指定完整的文本（包括正确的大小写），也可以是以星号（'*'）开头和结尾的通配符不区分大小写的简单模式。如果在对象内或作为修饰符（非模组选项）使用抑制 unique，则可以省略通配符符号，因为由于范围有限，选择性更好">[validationWarning]</span></summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。注意：这可以在 模组选项 中使用，在警告涉及的 uniques 中，或作为触发警告的 unique 的修饰符——但您仍然需要具体指定。即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、速度、模组选项、元修饰符

</details>

## 单位可触发的 Uniques

> 具有即时、一次性效果的 Uniques。这些可以添加到 单位（on unit, unit type, or promotion）中，赋予它们触发此效果作为行动的能力，这可以通过 单位行动修饰符（UnitActionModifiers）和 单位触发条件（UnitTriggerConditions）条件进行修改。

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> heals <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> HP</summary>

示例："[This Unit] heals [3] HP"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> takes <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> damage</summary>

示例："[This Unit] takes [3] damage"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> gains <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> XP</summary>

示例："[This Unit] gains [3] XP"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> upgrades for free</summary>

示例："[This Unit] upgrades for free"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> upgrades for free including special upgrades</summary>

示例："[This Unit] upgrades for free including special upgrades"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> gains the <span title="任何晋升的名称">[promotion]</span> promotion</summary>

示例："[This Unit] gains the [Shock I] promotion"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> loses the <span title="任何晋升的名称">[promotion]</span> promotion</summary>

示例："[This Unit] loses the [Shock I] promotion"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> gains <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> movement</summary>

示例："[This Unit] gains [3] movement"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> loses <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> movement</summary>

示例："[This Unit] loses [3] movement"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> gains the <span title="任何晋升的名称">[promotion]</span> status for <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> turn(s)</summary>

状态是临时晋升。它们不堆叠，重新应用特定状态会取最大值——因此在 1 回合上重新应用 3 回合会变成 3，但反之亦然。状态剩余的回合数在*回合开始时*减少，因此为 1 回合应用的加成在其他人回合期间仍然适用。

示例："[This Unit] gains the [Shock I] status for [3] turn(s)"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> loses the <span title="任何晋升的名称">[promotion]</span> status</summary>

示例："[This Unit] loses the [Shock I] status"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> is destroyed</summary>

示例："[This Unit] is destroyed"

适用范围：单位可触发

</details>

<details>
<summary><span title="`This Unit`（此单位）或 `Target Unit`（目标单位）">[unitTriggerTarget]</span> gets a name from the <span title="在 UnitNameGroups.json 中找到的单位名称组名称，或其唯一标签">[unitNameGroup]</span> group</summary>

示例："[This Unit] gets a name from the [Scientist] group"

适用范围：单位可触发

</details>

## 全局 Uniques

> 全局生效的 Uniques。文明从国家 Uniques、到达的时代、研究的科技、采用的政策、建造的建筑、宗教"创建者" Uniques、拥有的资源以及规则集范围内的全局 Uniques 中获得这些 Uniques 的能力。

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span></summary>

示例："[+1 Gold, +2 Production]"

适用范围：全局、地形、改良设施

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from every specialist <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] from every specialist [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> per <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> population <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] per [3] population [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> per <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> social policies adopted</summary>

仅适用于文明范围的属性

示例："[+1 Gold, +2 Production] per [3] social policies adopted"

适用范围：全局

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> per every <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> <span title="以下属性具有文明范围的字段：`Gold`（金币）、`Science`（科技）、`Culture`（文化）、`Faith`（信仰）">[civWideStat]</span></summary>

示例："[+1 Gold, +2 Production] per every [3] [Gold]"

适用范围：全局

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> in cities on [terrainFilter] tiles</summary>

示例："[+1 Gold, +2 Production] in cities on [Fresh Water] tiles"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from all <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings</summary>

示例："[+1 Gold, +2 Production] from all [Culture] buildings"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] from [Farm] tiles [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles without <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] from [Farm] tiles without [Farm] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from every [tileFilter/specialist/buildingFilter]</summary>

示例："[+1 Gold, +2 Production] from every [Farm]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from each Trade Route</summary>

示例："[+1 Gold, +2 Production] from each Trade Route"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span></summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% [Culture]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> from every [tileFilter/buildingFilter]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% [Culture] from every [Farm]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Yield from every [tileFilter/buildingFilter]</summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% Yield from every [Farm]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> from City States</summary>

示例："[+20]% [Culture] from City States"

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> from Trade Routes</summary>

示例："[+20]% [Culture] from Trade Routes"

适用范围：全局

</details>

<details>
<summary>Nullifies <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Nullifies [Culture] [in all cities]"

适用范围：全局

</details>

<details>
<summary>Nullifies Growth <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Nullifies Growth [in all cities]"

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Production when constructing <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% Production when constructing [Culture] buildings [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Production when constructing <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% Production when constructing [Melee] units [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Production when constructing <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> wonders <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[+20]% Production when constructing [Culture] wonders [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Production towards any buildings that already exist in the Capital</summary>

示例："[+20]% Production towards any buildings that already exist in the Capital"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Yield from pillaging tiles</summary>

示例："[+20]% Yield from pillaging tiles"

适用范围：全局、单位

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Health from pillaging tiles</summary>

示例："[+20]% Health from pillaging tiles"

适用范围：全局、单位

</details>

<details>
<summary>Military Units gifted from City States start with <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> XP</summary>

示例："Military Units gifted from City States start with [3] XP"

适用范围：全局

</details>

<details>
<summary>Militaristic City States grant units <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> times as fast when you are at war with a common nation</summary>

示例："Militaristic City States grant units [3] times as fast when you are at war with a common nation"

适用范围：全局

</details>

<details>
<summary>Gifts of Gold to City States generate <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% more Influence</summary>

示例："Gifts of Gold to City States generate [+20]% more Influence"

适用范围：全局

</details>

<details>
<summary>Can spend Gold to annex or puppet a City-State that has been your Ally for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> turns</summary>

示例："Can spend Gold to annex or puppet a City-State that has been your Ally for [3] turns"

适用范围：全局

</details>

<details>
<summary>City-State territory always counts as friendly territory</summary>

适用范围：全局

</details>

<details>
<summary>Allied City States will occasionally gift Great People</summary>

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% City-State Influence degradation</summary>

示例："[+20]% City-State Influence degradation"

适用范围：全局

</details>

<details>
<summary>Resting point for Influence with City States is increased by <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span></summary>

示例："Resting point for Influence with City States is increased by [3]"

适用范围：全局

</details>

<details>
<summary>Allied City States provide <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> equal to <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% of what they produce for themselves</summary>

示例："Allied City States provide [Culture] equal to [+20]% of what they produce for themselves"

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% resources gifted by City States</summary>

示例："[+20]% resources gifted by City States"

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Happiness from luxury resources gifted by City States</summary>

示例："[+20]% Happiness from luxury resources gifted by City States"

适用范围：全局

</details>

<details>
<summary>City-State Influence recovers at twice the normal rate</summary>

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% growth <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% growth [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% Food is carried over after population increases <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加：+50% + +50% = +100%

示例："[3]% Food is carried over after population increases [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Food consumption by <span title="人口过滤器，例如 'Followers of this Religion'（此宗教的追随者）等">[populationFilter]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% Food consumption by [Followers of this Religion] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% unhappiness from the number of cities</summary>

示例："[+20]% unhappiness from the number of cities"

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Unhappiness from <span title="人口过滤器，例如 'Followers of this Religion'（此宗教的追随者）等">[populationFilter]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% Unhappiness from [Followers of this Religion] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Happiness from each type of luxury resource</summary>

示例："[3] Happiness from each type of luxury resource"

适用范围：全局

</details>

<details>
<summary>Retain <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% of the happiness from a luxury after the last copy has been traded away</summary>

示例："Retain [+20]% of the happiness from a luxury after the last copy has been traded away"

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% of excess happiness converted to <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span></summary>

示例："[+20]% of excess happiness converted to [Culture]"

适用范围：全局

</details>

<details>
<summary>Cannot build <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units</summary>

示例："Cannot build [Melee] units"

适用范围：全局

</details>

<details>
<summary>Enables construction of Spaceship parts</summary>

适用范围：全局

</details>

<details>
<summary>May buy <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> at an increasing price (<span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>)</summary>

示例："May buy [Melee] units for [3] [Culture] [in all cities] at an increasing price ([3])"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> at an increasing price (<span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>)</summary>

示例："May buy [Culture] buildings for [3] [Culture] [in all cities] at an increasing price ([3])"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："May buy [Melee] units for [3] [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："May buy [Culture] buildings for [3] [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："May buy [Melee] units with [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："May buy [Culture] buildings with [Culture] [in all cities]"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> times their normal Production cost</summary>

示例："May buy [Melee] units with [Culture] for [3] times their normal Production cost"

适用范围：全局、追随者信仰

</details>

<details>
<summary>May buy <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> times their normal Production cost</summary>

示例："May buy [Culture] buildings with [Culture] for [3] times their normal Production cost"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> cost of purchasing items in cities <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

多个加成叠加相乘：+50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing items in cities [+20]%"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> cost of purchasing <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

多个加成叠加相乘：+50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing [Culture] buildings [+20]%"

适用范围：全局、追随者信仰

</details>

<details>
<summary><span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> cost of purchasing <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

多个加成叠加相乘：+50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing [Melee] units [+20]%"

适用范围：全局、追随者信仰

</details>

<details>
<summary>Enables conversion of city production to <span title="以下属性具有文明范围的字段：`Gold`（金币）、`Science`（科技）、`Culture`（文化）、`Faith`（信仰）">[civWideStat]</span></summary>

示例："Enables conversion of city production to [Gold]"

适用范围：全局

</details>

<details>
<summary>Production to <span title="以下属性具有文明范围的字段：`Gold`（金币）、`Science`（科技）、`Culture`（文化）、`Faith`（信仰）">[civWideStat]</span> conversion in cities changed by <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

示例："Production to [Gold] conversion in cities changed by [+20]%"

适用范围：全局

</details>

<details>
<summary>Improves movement speed on roads</summary>

适用范围：全局

</details>

<details>
<summary>Roads connect tiles across rivers</summary>

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% maintenance on road & railroads</summary>

多个加成叠加相乘：+50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance on road & railroads"

适用范围：全局

</details>

<details>
<summary>No Maintenance costs for improvements in <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles</summary>

示例："No Maintenance costs for improvements in [Farm] tiles"

适用范围：全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% construction time for <span title="改良设施过滤器，可以是改良设施名称、过滤 Unique，或 'All Road'（所有道路）等">[improvementFilter]</span> improvements</summary>

示例："[+20]% construction time for [All Road] improvements"

适用范围：全局、单位

</details>

<details>
<summary>Can build <span title="改良设施过滤器，可以是改良设施名称、过滤 Unique，或 'All Road'（所有道路）等">[improvementFilter]</span> improvements at a <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% rate</summary>

示例："Can build [All Road] improvements at a [+20]% rate"

适用范围：全局、单位

</details>

<details>
<summary>Gain a free <span title="任何建筑的名称">[buildingName]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

免费建筑不能自我移除——这会导致尝试添加建筑的无限循环

示例："Gain a free [Library] [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% maintenance cost for <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance cost for [Culture] buildings [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Remove <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Remove [Culture] [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary>Sell <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Sell [Culture] buildings [in all cities]"

适用范围：可触发、全局

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Culture cost of natural border growth <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Culture cost of natural border growth [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Gold cost of acquiring tiles <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Gold cost of acquiring tiles [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Each city founded increases culture cost of policies <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% less than normal</summary>

示例："Each city founded increases culture cost of policies [+20]% less than normal"

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Culture cost of adopting new Policies</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Culture cost of adopting new Policies"

适用范围：Global

</details>

<details>
<summary>Each city founded increases Science cost of Technologies <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% less than normal</summary>

示例："Each city founded increases Science cost of Technologies [+20]% less than normal"

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Science cost of researching new Technologies</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Science cost of researching new Technologies"

适用范围：Global

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> for every known Natural Wonder</summary>

示例："[+1 Gold, +2 Production] for every known Natural Wonder"

适用范围：Global

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> for discovering a Natural Wonder (bonus enhanced to <span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> if first to discover it)</summary>

示例："[+1 Gold, +2 Production] for discovering a Natural Wonder (bonus enhanced to [+1 Gold, +2 Production] if first to discover it)"

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Great Person generation <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% Great Person generation [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Gold from Great Merchant trade missions</summary>

示例："[+20]% Gold from Great Merchant trade missions"

适用范围：全局， Unit

</details>

<details>
<summary>Great General provides double combat bonus</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Receive a free Great Person at the end of every <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> (every 394 years), after researching <span title="任何科技的名称">[tech]</span>. Each bonus person can only be chosen once.</summary>

示例："Receive a free Great Person at the end of every <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> (every 394 years), after researching [Agriculture]. Each bonus person can only be chosen once."

适用范围：Global

</details>

<details>
<summary>Once The Long Count activates, the year on the world screen displays as the traditional Mayan Long Count.</summary>

适用范围：Global

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Unit Supply</summary>

示例："[3] Unit Supply"

适用范围：Global

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Unit Supply per <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> population <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[3] Unit Supply per [3] population [in all cities]"

适用范围：Global

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Unit Supply per city</summary>

示例："[3] Unit Supply per city"

适用范围：Global

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> units cost no maintenance</summary>

示例："[3] units cost no maintenance"

适用范围：Global

</details>

<details>
<summary>Units in cities cost no Maintenance</summary>

适用范围：Global

</details>

<details>
<summary>Enables embarkation for land units</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Global

</details>

<details>
<summary>Enables <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units to enter ocean tiles</summary>

示例："Enables [Wounded] units to enter ocean tiles"

适用范围：Global

</details>

<details>
<summary>Land units may cross <span title="地形名称">[terrainName]</span> tiles after the first <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> is earned</summary>

示例："Land units may cross [Forest] tiles after the first [Melee] is earned"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Global

</details>

<details>
<summary>Enemy <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units must spend <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> extra movement points when inside your territory</summary>

示例："Enemy [Wounded] units must spend [3] extra movement points when inside your territory"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Global

</details>

<details>
<summary>New <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units start with <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> XP <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："New [Melee] units start with [3] XP [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>All newly-trained <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> receive the <span title="任何晋升的名称">[promotion]</span> promotion</summary>

示例："All newly-trained [Melee] units [in all cities] receive the [Shock I] promotion"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> Units adjacent to this city heal <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> HP per turn when healing</summary>

示例："[Wounded] Units adjacent to this city heal [3] HP per turn when healing"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% XP required for promotions</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% XP required for promotions"

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% City Strength from defensive buildings</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% City Strength from defensive buildings"

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Strength for cities</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Strength for cities"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Provides <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何资源的名称">[resource]</span></summary>

示例："Provides [3] [Iron]"

适用范围：全局， 追随者信仰、改良设施

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="资源名称、类型、'all'（所有），或资源 improvementStats 中列出的属性">[resourceFilter]</span> resource production</summary>

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
<summary>Science gained from research agreements <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

示例："Science gained from research agreements [+20]%"

适用范围：Global

</details>

<details>
<summary>Enables Defensive Pacts</summary>

适用范围：Global

</details>

<details>
<summary>When declaring friendship, both parties gain a <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% boost to great person generation</summary>

示例："When declaring friendship, both parties gain a [+20]% boost to great person generation"

适用范围：Global

</details>

<details>
<summary>影响力 of all other civilizations with all city-states degrades <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% faster</summary>

示例："影响力 of all other civilizations with all city-states degrades [+20]% faster"

适用范围：Global

</details>

<details>
<summary>Gain <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> 影响力 with a <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> gift to a City-State</summary>

示例："Gain [3] 影响力 with a [Melee] gift to a City-State"

适用范围：Global

</details>

<details>
<summary>Resting point for Influence with City States following this religion <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span></summary>

示例："Resting point for Influence with City States following this religion [3]"

适用范围：Global

</details>

<details>
<summary>Notified of new Barbarian encampments</summary>

适用范围：Global

</details>

<details>
<summary>Receive <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Gold from Barbarian encampments and pillaging Cities</summary>

示例："Receive [+20]% Gold from Barbarian encampments and pillaging Cities"

适用范围：Global

</details>

<details>
<summary>When conquering an encampment, earn <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Gold and recruit a Barbarian unit</summary>

示例："When conquering an encampment, earn [3] Gold and recruit a Barbarian unit"

适用范围：Global

</details>

<details>
<summary>When defeating a <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit, earn <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Gold and recruit it</summary>

示例："When defeating a [Wounded] unit, earn [3] Gold and recruit it"

适用范围：Global

</details>

<details>
<summary>May choose <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> additional <span title="'Pantheon'（泛灵论）、'Follower'（追随者）、'Founder'（创立者）或 'Enhancer'（强化者）">[beliefType]</span> beliefs when <span title="`founding`（建立）或 `enhancing`（强化）">[foundingOrEnhancing]</span> a religion</summary>

示例："May choose [3] additional [Follower] beliefs when [founding] a religion"

适用范围：Global

</details>

<details>
<summary>May choose <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> additional belief(s) of any type when <span title="`founding`（建立）或 `enhancing`（强化）">[foundingOrEnhancing]</span> a religion</summary>

示例："May choose [3] additional belief(s) of any type when [founding] a religion"

适用范围：Global

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> when a city adopts this religion for the first time</summary>

示例："[+1 Gold, +2 Production] when a city adopts this religion for the first time"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Natural religion spread <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Natural religion spread [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Religion naturally spreads to cities <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> tiles away</summary>

示例："Religion naturally spreads to cities [3] tiles away"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May not generate great prophet equivalents naturally</summary>

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Faith cost of generating Great Prophet equivalents</summary>

示例："[+20]% Faith cost of generating Great Prophet equivalents"

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% spy effectiveness <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% spy effectiveness [in all cities]"

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% enemy spy effectiveness <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% enemy spy effectiveness [in all cities]"

适用范围：Global

</details>

<details>
<summary>New spies start with <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> level(s)</summary>

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
<summary>Cities are razed <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> times as fast</summary>

示例："Cities are razed [3] times as fast"

适用范围：Global

</details>

<details>
<summary>Receive a tech boost when scientific buildings/wonders are built in capital</summary>

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Golden Age length</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Golden Age length"

适用范围：Global

</details>

<details>
<summary>Population loss from nuclear attacks <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Population loss from nuclear attacks [+20]% [in all cities]"

适用范围：Global

</details>

<details>
<summary>Damage to garrison from nuclear attacks <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Damage to garrison from nuclear attacks [+20]% [in all cities]"

适用范围：Global

</details>

<details>
<summary>Rebel units may spawn</summary>

适用范围：Global

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Strength</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Strength"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span> Strength</summary>

示例："[+20] Strength"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Strength decreasing with distance from the capital</summary>

示例："[+20]% Strength decreasing with distance from the capital"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% to Flank Attack bonuses</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% to Flank Attack bonuses"

适用范围：全局， Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> additional attacks per turn</summary>

示例："[3] additional attacks per turn"

适用范围：全局， Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Movement</summary>

示例："[3] Movement"

适用范围：全局， Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Sight</summary>

示例："[3] Sight"

适用范围：全局， 单位， 地形， Improvement

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Range</summary>

示例："[3] Range"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span> Air Interception Range</summary>

示例："[+20] Air Interception Range"

适用范围：全局， Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> HP，当恢复时</summary>

示例："[3] HP，当恢复时"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Spread Religion Strength</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Spread Religion Strength"

适用范围：全局， Unit

</details>

<details>
<summary>When spreading religion to a city, gain <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> times the amount of followers of other religions as <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span></summary>

示例："When spreading religion to a city, gain [3] times the amount of followers of other religions as [Culture]"

适用范围：全局， Unit

</details>

<details>
<summary>Ranged attacks may be performed over obstacles</summary>

适用范围：全局， Unit

</details>

<details>
<summary>No defensive terrain bonuses</summary>

适用范围：全局， Unit

</details>

<details>
<summary>No defensive terrain penalty</summary>

适用范围：全局， Unit

</details>

<details>
<summary>No damage penalty for wounded units</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Unable to capture cities</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Unable to pillage tiles</summary>

适用范围：全局， Unit

</details>

<details>
<summary>No movement cost to pillage</summary>

适用范围：全局， Unit

</details>

<details>
<summary>May heal outside of friendly territory</summary>

适用范围：全局， Unit

</details>

<details>
<summary>All healing effects doubled</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Heals <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> damage if it kills a unit</summary>

示例："Heals [3] damage if it kills a unit"

适用范围：全局， Unit

</details>

<details>
<summary>Can only heal by pillaging</summary>

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% maintenance costs</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance costs"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Gold cost of upgrading</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Gold cost of upgrading"

适用范围：全局， Unit

</details>

<details>
<summary>Earn <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% of the damage done to <span title="指示战斗者，可以是单位或城市（轰炸时）。必须是 `City` 或 `mapUnitFilter`">[combatantFilter]</span> units as <span title="任何储存资源的名称">[stockpile]</span></summary>

示例："Earn [3]% of the damage done to [City] units as [Mana]"

适用范围：全局， Unit

</details>

<details>
<summary>Upon capturing a city, receive <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> times its <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> production as <span title="任何储存资源的名称">[stockpile]</span> immediately</summary>

示例："Upon capturing a city, receive [3] times its [Culture] production as [Mana] immediately"

适用范围：全局， Unit

</details>

<details>
<summary>Earn <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% of killed <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit's <span title="`Cost`（成本）或 `Strength`（强度）">[costOrStrength]</span> as <span title="任何储存资源的名称">[stockpile]</span></summary>

示例："Earn [3]% of killed [Wounded] unit's [Cost] as [Mana]"

适用范围：全局， Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> XP gained from combat</summary>

示例："[3] XP gained from combat"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% XP gained from combat</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% XP gained from combat"

适用范围：全局， Unit

</details>

<details>
<summary>[greatPerson] is earned <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% faster</summary>

示例："[Great General] is earned [+20]% faster"

适用范围：全局， Unit

</details>

<details>
<summary><span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> 下船的移动力成本</summary>

示例："[3] 下船的移动力成本"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：全局， Unit

</details>

<details>
<summary><span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> 乘船的移动力成本</summary>

示例："[3] 乘船的移动力成本"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：全局， Unit

</details>

## 文明 Uniques
<details>
<summary>Starts with <span title="任何科技的名称">[tech]</span></summary>

示例："Starts with [Agriculture]"

适用范围：Nation

</details>

<details>
<summary>Starts with <span title="任何政策的名称">[policy]</span> adopted</summary>

示例："Starts with [Oligarchy] adopted"

适用范围：Nation

</details>

<details>
<summary>All units move through Forest and Jungle Tiles in friendly territory as if they have roads. These tiles can be used to establish City Connections upon researching the Wheel.</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

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

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

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
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% weight to this choice for AI decisions</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 政策 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% weight to this choice for AI decisions</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 创立者信仰 Uniques

> 适用于 创始者（Founder）和 增强者（Enhancer）类型信仰的 Uniques，将应用于此宗教的创始人

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> for each global city following this religion</summary>

示例："[+1 Gold, +2 Production] for each global city following this religion"

适用范围：创立者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from every <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> global followers <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] from every [3] global followers [in all cities]"

适用范围：创立者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> from every follower, up to <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

示例："[+20]% [Culture] from every follower, up to [+20]%"

适用范围：创立者信仰, 追随者信仰

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% weight to this choice for AI decisions</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 追随者信仰 Uniques

> 适用于 万神殿（Pantheon）和 追随者（Follower）类型信仰的 Uniques，将应用于此宗教为多数宗教的每个城市

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from every specialist <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] from every specialist [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> per <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> population <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] per [3] population [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> in cities on [terrainFilter] tiles</summary>

示例："[+1 Gold, +2 Production] in cities on [Fresh Water] tiles"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from all <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings</summary>

示例："[+1 Gold, +2 Production] from all [Culture] buildings"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] from [Farm] tiles [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles without <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+1 Gold, +2 Production] from [Farm] tiles without [Farm] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from every [tileFilter/specialist/buildingFilter]</summary>

示例："[+1 Gold, +2 Production] from every [Farm]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from each Trade Route</summary>

示例："[+1 Gold, +2 Production] from each Trade Route"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span></summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% [Culture]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> from every [tileFilter/buildingFilter]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% [Culture] from every [Farm]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Yield from every [tileFilter/buildingFilter]</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Yield from every [Farm]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> from every follower, up to <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

示例："[+20]% [Culture] from every follower, up to [+20]%"

适用范围：创立者信仰, 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Production when constructing <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Production when constructing [Culture] buildings [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Production when constructing <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Production when constructing [Melee] units [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Production when constructing <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> wonders <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Production when constructing [Culture] wonders [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Production towards any buildings that already exist in the Capital</summary>

示例："[+20]% Production towards any buildings that already exist in the Capital"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% growth <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% growth [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% Food is carried over after population increases <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[3]% Food is carried over after population increases [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Food consumption by <span title="人口过滤器，例如 'Followers of this Religion'（此宗教的追随者）等">[populationFilter]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% Food consumption by [Followers of this Religion] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Unhappiness from <span title="人口过滤器，例如 'Followers of this Religion'（此宗教的追随者）等">[populationFilter]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% Unhappiness from [Followers of this Religion] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> at an increasing price (<span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>)</summary>

示例："May buy [Melee] units for [3] [Culture] [in all cities] at an increasing price ([3])"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> at an increasing price (<span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>)</summary>

示例："May buy [Culture] buildings for [3] [Culture] [in all cities] at an increasing price ([3])"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："May buy [Melee] units for [3] [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："May buy [Culture] buildings for [3] [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："May buy [Melee] units with [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："May buy [Culture] buildings with [Culture] [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> times their normal Production cost</summary>

示例："May buy [Melee] units with [Culture] for [3] times their normal Production cost"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>May buy <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> times their normal Production cost</summary>

示例："May buy [Culture] buildings with [Culture] for [3] times their normal Production cost"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> cost of purchasing items in cities <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing items in cities [+20]%"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> cost of purchasing <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing [Culture] buildings [+20]%"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> cost of purchasing <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[Culture] cost of purchasing [Melee] units [+20]%"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% maintenance cost for <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> buildings <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance cost for [Culture] buildings [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Culture cost of natural border growth <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Culture cost of natural border growth [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Gold cost of acquiring tiles <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Gold cost of acquiring tiles [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Great Person generation <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："[+20]% Great Person generation [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>New <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units start with <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> XP <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："New [Melee] units start with [3] XP [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>All newly-trained <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> units <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> receive the <span title="任何晋升的名称">[promotion]</span> promotion</summary>

示例："All newly-trained [Melee] units [in all cities] receive the [Shock I] promotion"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> Units adjacent to this city heal <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> HP per turn when healing</summary>

示例："[Wounded] Units adjacent to this city heal [3] HP per turn when healing"

适用范围：全局， 追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Strength for cities</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Strength for cities"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Provides <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何资源的名称">[resource]</span></summary>

示例："Provides [3] [Iron]"

适用范围：全局， 追随者信仰、改良设施

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Natural religion spread <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Natural religion spread [in all cities]"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Religion naturally spreads to cities <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> tiles away</summary>

示例："Religion naturally spreads to cities [3] tiles away"

适用范围：全局， 追随者信仰

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Earn <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% of <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit's <span title="`Cost`（成本）或 `Strength`（强度）">[costOrStrength]</span> as <span title="任何储存资源的名称">[stockpile]</span> when killed within 4 地块 of a city following this religion</summary>

示例："Earn [3]% of [Wounded] unit's [Cost] as [Mana] when killed within 4 地块 of a city following this religion"

适用范围：追随者信仰

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% weight to this choice for AI decisions</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 建筑 Uniques
<details>
<summary><span title="正整数，大于零，'+' 号可选">[positiveAmount]</span>% of <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> from every [improvementFilter/buildingFilter] in the city added to <span title="任何资源的名称">[resource]</span></summary>

示例："[3]% of [Culture] from every [All Road] in the city added to [Iron]"

适用范围：Building

</details>

<details>
<summary>Consumes <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何资源的名称">[resource]</span></summary>

示例："Consumes [3] [Iron]"

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span></summary>

These resources are removed *when work begins* on the construction. Do not confuse with "costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span>" (lowercase 'c'), the Unit Action Modifier.

示例："Costs [3] [Mana]"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

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
<summary>Can be purchased with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Can be purchased with [Culture] [in all cities]"

适用范围：Building、单位

</details>

<details>
<summary>Can be purchased for <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Can be purchased for [3] [Culture] [in all cities]"

适用范围：Building、单位

</details>

<details>
<summary>Limited to <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> per Civilization</summary>

示例："Limited to [3] per Civilization"

适用范围：Building、单位

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

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
<summary>Requires at least <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> population</summary>

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
<summary>Cost increases by <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> per owned city</summary>

示例："Cost increases by [3] per owned city"

适用范围：Building、单位

</details>

<details>
<summary>Cost increases by <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> when built</summary>

示例："Cost increases by [3] when built"

适用范围：Building、单位

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% production cost</summary>

Intended to be used with conditionals to dynamically alter construction costs. 多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[3]% production cost"

适用范围：Building、单位

</details>

<details>
<summary>Can only be built</summary>

Meant to be used together with conditionals, like "Can only be built &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also NOT block Upgrade and Transform actions. See also OnlyAvailable.

适用范围：Building、单位

</details>

<details>
<summary>Must have an owned <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> within <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> tiles</summary>

示例："Must have an owned [Farm] within [3] tiles"

适用范围：Building

</details>

<details>
<summary>Enables nuclear weapon</summary>

适用范围：Building

</details>

<details>
<summary>Must be on <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span></summary>

示例："Must be on [Farm]"

适用范围：Building

</details>

<details>
<summary>Must not be on <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span></summary>

示例："Must not be on [Farm]"

适用范围：Building

</details>

<details>
<summary>Must be next to <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span></summary>

示例："Must be next to [Farm]"

适用范围：Building、改良设施

</details>

<details>
<summary>Must not be next to <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span></summary>

示例："Must not be next to [Farm]"

适用范围：Building

</details>

<details>
<summary>Unsellable</summary>

适用范围：Building

</details>

<details>
<summary>Obsolete with <span title="任何科技的名称">[tech]</span></summary>

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
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Gold given to enemy if city is captured</summary>

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
<summary>Creates a <span title="任何改良设施的名称，不包括 'Cancel improvement order'">[improvementName]</span> improvement on a specific tile</summary>

当选择建造此建筑时，玩家必须选择一个可以建造改良设施的地块。建筑完成后，该地块将获得此改良设施。每个建筑限一个。

示例："Creates a [Trading Post] improvement on a specific tile"

此 unique 不支持条件。

适用范围：Building

</details>

<details>
<summary>Can carry <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> extra <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units</summary>

对于建筑，支持使用 `Air` 作为 `mapUnitFilter` 来增加城市空中单位容量。

示例："Can carry [3] extra [Wounded] units"

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
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% weight to this choice for AI decisions</summary>

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
<summary>Shown while unbuilable</summary>

此 unique 对用户自动隐藏。

适用范围：Building、单位

</details>

<details>
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 单位行动 Uniques

> 影响单位行动的 Uniques，可以被 单位行动修饰符（UnitActionModifiers）修改

<details>
<summary>Founds a new city</summary>

适用范围：单位行动

</details>

<details>
<summary>Founds a new puppet city</summary>

适用范围：单位行动

</details>

<details>
<summary>Can instantly construct a <span title="改良设施过滤器，可以是改良设施名称、过滤 Unique，或 'All Road'（所有道路）等">[improvementFilter]</span> improvement</summary>

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
<summary>Can transform to <span title="任何单位的名称">[unit]</span></summary>

默认消耗所有移动力

示例："Can transform to [Musketman]"

适用范围：单位行动

</details>

## 单位 Uniques

> 可以添加到 单位、单位类型或晋升中的 Uniques

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Yield from pillaging tiles</summary>

示例："[+20]% Yield from pillaging tiles"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Health from pillaging tiles</summary>

示例："[+20]% Health from pillaging tiles"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% construction time for <span title="改良设施过滤器，可以是改良设施名称、过滤 Unique，或 'All Road'（所有道路）等">[improvementFilter]</span> improvements</summary>

示例："[+20]% construction time for [All Road] improvements"

适用范围：全局， Unit

</details>

<details>
<summary>Can build <span title="改良设施过滤器，可以是改良设施名称、过滤 Unique，或 'All Road'（所有道路）等">[improvementFilter]</span> improvements at a <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% rate</summary>

示例："Can build [All Road] improvements at a [+20]% rate"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Gold from Great Merchant trade missions</summary>

示例："[+20]% Gold from Great Merchant trade missions"

适用范围：全局， Unit

</details>

<details>
<summary>Great General provides double combat bonus</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Consumes <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何资源的名称">[resource]</span></summary>

示例："Consumes [3] [Iron]"

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span></summary>

These resources are removed *when work begins* on the construction. Do not confuse with "costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span>" (lowercase 'c'), the Unit Action Modifier.

示例："Costs [3] [Mana]"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

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
<summary>Can be purchased with <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Can be purchased with [Culture] [in all cities]"

适用范围：Building、单位

</details>

<details>
<summary>Can be purchased for <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span></summary>

示例："Can be purchased for [3] [Culture] [in all cities]"

适用范围：Building、单位

</details>

<details>
<summary>Limited to <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> per Civilization</summary>

示例："Limited to [3] per Civilization"

适用范围：Building、单位

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

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
<summary>Requires at least <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> population</summary>

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
<summary>Cost increases by <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> per owned city</summary>

示例："Cost increases by [3] per owned city"

适用范围：Building、单位

</details>

<details>
<summary>Cost increases by <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> when built</summary>

示例："Cost increases by [3] when built"

适用范围：Building、单位

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% production cost</summary>

Intended to be used with conditionals to dynamically alter construction costs. 多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[3]% production cost"

适用范围：Building、单位

</details>

<details>
<summary>Can only be built</summary>

Meant to be used together with conditionals, like "Can only be built &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also NOT block Upgrade and Transform actions. See also OnlyAvailable.

适用范围：Building、单位

</details>

<details>
<summary>May create improvements on water resources</summary>

适用范围：Unit

</details>

<details>
<summary>Can build [improvementFilter/terrainFilter] improvements on tiles</summary>

示例："Can build [All Road] improvements on tiles"

适用范围：Unit

</details>

<details>
<summary>Can be added to <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> in the Capital</summary>

示例："Can be added to <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> in the Capital"

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
<summary>May Paradrop to <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles up to <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> tiles away</summary>

示例："May Paradrop to [Farm] tiles up to [3] tiles away"

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
<summary>Can speed up the construction of a wonder</summary>

适用范围：Unit

</details>

<details>
<summary>Can hurry technology research</summary>

适用范围：Unit

</details>

<details>
<summary>Can generate a large amount of culture</summary>

适用范围：Unit

</details>

<details>
<summary>Can undertake a trade mission with City-State, giving a large sum of gold and <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Influence</summary>

示例："Can undertake a trade mission with City-State, giving a large sum of gold and [3] Influence"

适用范围：Unit

</details>

<details>
<summary>Automation is a primary action</summary>

此 unique 对用户自动隐藏。

适用范围：Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Strength</summary>

多个加成叠加相加： +50% + +50% = +100%

示例："[+20]% Strength"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span> Strength</summary>

示例："[+20] Strength"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Strength decreasing with distance from the capital</summary>

示例："[+20]% Strength decreasing with distance from the capital"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% to Flank Attack bonuses</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% to Flank Attack bonuses"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Strength for enemy <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units in adjacent <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles</summary>

示例："[+20]% Strength for enemy [Wounded] units in adjacent [Farm] tiles"

适用范围：Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Strength bonus for <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units within <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> tiles</summary>

示例："[+20]% Strength bonus for [Wounded] units within [3] tiles"

适用范围：Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> additional attacks per turn</summary>

示例："[3] additional attacks per turn"

适用范围：全局， Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Movement</summary>

示例："[3] Movement"

适用范围：全局， Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Sight</summary>

示例："[3] Sight"

适用范围：全局， 单位， 地形， Improvement

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Range</summary>

示例："[3] Range"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span> Air Interception Range</summary>

示例："[+20] Air Interception Range"

适用范围：全局， Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> HP，当恢复时</summary>

示例："[3] HP，当恢复时"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Spread Religion Strength</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Spread Religion Strength"

适用范围：全局， Unit

</details>

<details>
<summary>When spreading religion to a city, gain <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> times the amount of followers of other religions as <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span></summary>

示例："When spreading religion to a city, gain [3] times the amount of followers of other religions as [Culture]"

适用范围：全局， Unit

</details>

<details>
<summary>Can only attack <span title="指示战斗者，可以是单位或城市（轰炸时）。必须是 `City` 或 `mapUnitFilter`">[combatantFilter]</span> units</summary>

示例："Can only attack [City] units"

适用范围：Unit

</details>

<details>
<summary>Can only attack <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles</summary>

示例："Can only attack [Farm] tiles"

适用范围：Unit

</details>

<details>
<summary>Cannot attack</summary>

适用范围：Unit

</details>

<details>
<summary>Must set up to ranged attack</summary>

适用范围：Unit

</details>

<details>
<summary>Self-destructs when attacking</summary>

适用范围：Unit

</details>

<details>
<summary>Eliminates combat penalty for attacking across a coast</summary>

适用范围：Unit

</details>

<details>
<summary>May attack when embarked</summary>

适用范围：Unit

</details>

<details>
<summary>Eliminates combat penalty for attacking over a river</summary>

适用范围：Unit

</details>

<details>
<summary>Blast radius <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span></summary>

示例："Blast radius [3]"

适用范围：Unit

</details>

<details>
<summary>Ranged attacks may be performed over obstacles</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Nuclear weapon of Strength <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span></summary>

示例："Nuclear weapon of Strength [3]"

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
<summary>Unable to pillage tiles</summary>

适用范围：全局， Unit

</details>

<details>
<summary>Destroys <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> cities instead of capturing</summary>

The unit will destroy <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> cities instead of capturing them, also allows non-melee 单位 to destroy cities.Capital cities (including city states) are immune to this effect.

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
<summary>Transfer Movement to <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span></summary>

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
<summary>恢复 <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> 伤害，如果它杀死了一个单位</summary>

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
<summary>所有相邻单位恢复 <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> HP，当恢复时</summary>

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
<summary>Can carry <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units</summary>

示例："Can carry [3] [Wounded] units"

适用范围：Unit

</details>

<details>
<summary>Can carry <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> extra <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units</summary>

对于建筑，支持使用 `Air` 作为 `mapUnitFilter` 来增加城市空中单位容量。

示例："Can carry [3] extra [Wounded] units"

适用范围：Building、单位

</details>

<details>
<summary>Cannot be carried by <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units</summary>

示例："Cannot be carried by [Wounded] units"

适用范围：Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% chance to intercept air attacks</summary>

示例："[+20]% chance to intercept air attacks"

适用范围：Unit

</details>

<details>
<summary>Damage taken from interception reduced by <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

示例："Damage taken from interception reduced by [+20]%"

适用范围：Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Damage when intercepting</summary>

示例："[+20]% Damage when intercepting"

适用范围：Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> extra interceptions may be made per turn</summary>

示例："[3] extra interceptions may be made per turn"

适用范围：Unit

</details>

<details>
<summary>Cannot be intercepted</summary>

适用范围：Unit

</details>

<details>
<summary>Cannot intercept <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units</summary>

示例："Cannot intercept [Wounded] units"

适用范围：Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Strength when performing Air Sweep</summary>

示例："[+20]% Strength when performing Air Sweep"

适用范围：Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% maintenance costs</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% maintenance costs"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% Gold cost of upgrading</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% Gold cost of upgrading"

适用范围：全局， Unit

</details>

<details>
<summary>Earn <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% of the damage done to <span title="指示战斗者，可以是单位或城市（轰炸时）。必须是 `City` 或 `mapUnitFilter`">[combatantFilter]</span> units as <span title="任何储存资源的名称">[stockpile]</span></summary>

示例："Earn [3]% of the damage done to [City] units as [Mana]"

适用范围：全局， Unit

</details>

<details>
<summary>Upon capturing a city, receive <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> times its <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> production as <span title="任何储存资源的名称">[stockpile]</span> immediately</summary>

示例："Upon capturing a city, receive [3] times its [Culture] production as [Mana] immediately"

适用范围：全局， Unit

</details>

<details>
<summary>Earn <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% of killed <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit's <span title="`Cost`（成本）或 `Strength`（强度）">[costOrStrength]</span> as <span title="任何储存资源的名称">[stockpile]</span></summary>

示例："Earn [3]% of killed [Wounded] unit's [Cost] as [Mana]"

适用范围：全局， Unit

</details>

<details>
<summary>May capture killed <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units</summary>

示例："May capture killed [Wounded] units"

适用范围：Unit

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> XP gained from combat</summary>

示例："[3] XP gained from combat"

适用范围：全局， Unit

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% XP gained from combat</summary>

多个加成叠加相乘： +50% + +50% = x1.5 * x1.5 = +125%

示例："[+20]% XP gained from combat"

适用范围：全局， Unit

</details>

<details>
<summary>Can be earned through combat</summary>

适用范围：Unit

</details>

<details>
<summary>[greatPerson] is earned <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% faster</summary>

示例："[Great General] is earned [+20]% faster"

适用范围：全局， Unit

</details>

<details>
<summary>Invisible to others</summary>

适用范围：Unit

</details>

<details>
<summary>Invisible to non-adjacent units</summary>

适用范围：Unit

</details>

<details>
<summary>可以看到隐形的 <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units</summary>

示例："可以看到隐形的 [Wounded] units"

适用范围：Unit

</details>

<details>
<summary>可以升级到 <span title="任何单位的名称">[unit]</span> 通过类似废墟的效果</summary>

示例："可以升级到 [Musketman] 通过类似废墟的效果"

适用范围：Unit

</details>

<details>
<summary>Can upgrade to <span title="任何单位的名称">[unit]</span></summary>

示例："Can upgrade to [Musketman]"

适用范围：Unit

</details>

<details>
<summary>Destroys tile improvements when attacking</summary>

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
<summary>All tiles cost 1 movement</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>May travel on Water tiles without embarking</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>Can pass through impassable tiles</summary>

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
<summary>Can enter ice tiles</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>Cannot embark</summary>

适用范围：Unit

</details>

<details>
<summary>Cannot enter ocean tiles</summary>

适用范围：Unit

</details>

<details>
<summary>May enter foreign tiles without open borders</summary>

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary>May enter foreign tiles without open borders, but loses <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> religious strength each turn it ends there</summary>

示例："May enter foreign tiles without open borders, but loses [3] religious strength each turn it ends there"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：Unit

</details>

<details>
<summary><span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> Movement point cost to disembark</summary>

示例："[3] Movement point cost to disembark"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：全局， Unit

</details>

<details>
<summary><span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> Movement point cost to embark</summary>

示例："[3] Movement point cost to embark"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

适用范围：全局， Unit

</details>

<details>
<summary>Never appears as a Barbarian unit</summary>

此 unique 对用户自动隐藏。

适用范围：Unit

</details>

<details>
<summary>Religious Unit</summary>

适用范围：Unit

</details>

<details>
<summary>Spaceship part</summary>

适用范围：Building、单位

</details>

<details>
<summary>Takes your religion over the one in their birth city</summary>

适用范围：Unit

</details>

<details>
<summary>伟人 - <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

示例："伟人 - <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：Unit

</details>

<details>
<summary>属于伟人组 <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

Great people in the same group increase teach other's costs when gained. Gaining one will make all others in the same group cost more GPP.

示例："属于伟人组 <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：Unit

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Shown while unbuilable</summary>

此 unique 对用户自动隐藏。

适用范围：Building、单位

</details>

<details>
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 单位类型 Uniques
<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 晋升 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

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
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% weight to this choice for AI decisions</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 地形 Uniques
<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span></summary>

示例："[+1 Gold, +2 Production]"

适用范围：全局， 地形， Improvement

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Sight</summary>

示例："[3] Sight"

适用范围：全局， 单位， 地形， Improvement

</details>

<details>
<summary>Must be adjacent to <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> [simpleTerrain] tiles</summary>

示例："Must be adjacent to [3] [Elevated] tiles"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Must be adjacent to <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> to <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> [simpleTerrain] tiles</summary>

示例："Must be adjacent to [3] to [3] [Elevated] tiles"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Must not be on <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> largest landmasses</summary>

示例："Must not be on [3] largest landmasses"

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Must be on <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> largest landmasses</summary>

示例："Must be on [3] largest landmasses"

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Occurs on latitudes from <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> to <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> percent of distance equator to pole</summary>

示例："Occurs on latitudes from [3] to [3] percent of distance equator to pole"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Occurs in groups of <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> to <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> tiles</summary>

示例："Occurs in groups of [3] to [3] tiles"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Neighboring tiles will convert to [baseTerrain/terrainFeature]</summary>

支持仅需要地块作为上下文而不需要其他内容的条件，如 `<with [n]% chance>`，并按邻居应用它们。

如果您的模组重命名了海岸或湖泊，请勿将这些作为参数使用，因为防止工件的代码将不起作用。

示例："Neighboring tiles will convert to [Grassland]"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Grants <span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> to the first civilization to discover it</summary>

示例："Grants [+1 Gold, +2 Production] to the first civilization to discover it"

适用范围：Terrain

</details>

<details>
<summary>在此地形上结束回合的单位受到 <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> 伤害</summary>

示例："Units ending their turn on this terrain take [3] damage"

出于性能考虑，此 unique 已缓存，因此可能在回合内更改的条件可能不起作用。

此 unique 不支持条件。

适用范围：Terrain

</details>

<details>
<summary>Grants <span title="任何晋升的名称">[promotion]</span> (<span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>) to adjacent <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> 单位 for the rest of the game</summary>

示例："Grants [Shock I] (<span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>) to adjacent [Wounded] 单位 for the rest of the game"

适用范围：Terrain

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Strength for cities built on this terrain</summary>

示例："[3] Strength for cities built on this terrain"

适用范围：Terrain

</details>

<details>
<summary>砍伐时为最近城市提供一次性的 <span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> 加成</summary>

示例："Provides a one-time bonus of [+1 Gold, +2 Production] to the closest city when cut down"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

This unique's effect can be modified with &lt;(modified by game progress up to <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%)&gt;

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
<summary>此地块上只能建造 <span title="改良设施过滤器，可以是改良设施名称、过滤 Unique，或 'All Road'（所有道路）等">[improvementFilter]</span> 改良设施</summary>

示例："Only [All Road] improvements may be built on this tile"

适用范围：Terrain

</details>

<details>
<summary>Blocks line-of-sight from tiles at same elevation</summary>

适用范围：Terrain

</details>

<details>
<summary>Has an elevation of <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> for visibility calculations</summary>

示例："Has an elevation of [3] for visibility calculations"

适用范围：Terrain

</details>

<details>
<summary>Always Fertility <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> for Map Generation</summary>

示例："Always Fertility [3] for Map Generation"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> to Fertility for Map Generation</summary>

示例："[3] to Fertility for Map Generation"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>A Region is formed with at least <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% [simpleTerrain] tiles, with priority <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span></summary>

示例："A Region is formed with at least [3]% [Elevated] tiles, with priority [3]"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>A Region is formed with at least <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% [simpleTerrain] tiles and [simpleTerrain] tiles, with priority <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span></summary>

示例："A Region is formed with at least [3]% [Elevated] tiles and [Elevated] tiles, with priority [3]"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>A Region can not contain more [simpleTerrain] tiles than [simpleTerrain] tiles</summary>

示例："A Region can not contain more [Elevated] tiles than [Elevated] tiles"

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Base Terrain on this tile is not counted for Region determination</summary>

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Starts in regions of this type receive an extra <span title="任何资源的名称">[resource]</span></summary>

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
<summary>Becomes <span title="地形名称">[terrainName]</span> when adjacent to [terrainFilter]</summary>

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
<summary>Occurs at temperature between <span title="指示分数，可以是负数">[fraction]</span> and <span title="指示分数，可以是负数">[fraction]</span> and humidity between <span title="指示分数，可以是负数">[fraction]</span> and <span title="指示分数，可以是负数">[fraction]</span></summary>

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
<summary>Every <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> tiles with this terrain will receive a major deposit of a strategic resource.</summary>

示例："Every [3] tiles with this terrain will receive a major deposit of a strategic resource."

此 unique 对用户自动隐藏。

适用范围：Terrain

</details>

<details>
<summary>Rare feature</summary>

适用范围：Terrain

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span>% Chance to be destroyed by nukes</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Suppress warning <span title="抑制一个特定的规则集验证警告。可以指定完整的文本（包括正确的大小写），也可以是以星号（'*'）开头和结尾的通配符不区分大小写的简单模式。如果在对象内或作为修饰符（非模组选项）使用抑制 unique，则可以省略通配符符号，因为由于范围有限，选择性更好">[validationWarning]</span></summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。 Note that this can be used in 模组选项, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. 即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、游戏速度, 模组选项, 元修饰符

</details>

## 改良 Uniques
<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span></summary>

示例："[+1 Gold, +2 Production]"

适用范围：全局， 地形， Improvement

</details>

<details>
<summary>Consumes <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何资源的名称">[resource]</span></summary>

示例："Consumes [3] [Iron]"

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Provides <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何资源的名称">[resource]</span></summary>

示例："Provides [3] [Iron]"

适用范围：全局， 追随者信仰、改良设施

</details>

<details>
<summary>Costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span></summary>

These resources are removed *when work begins* on the construction. Do not confuse with "costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span>" (lowercase 'c'), the Unit Action Modifier.

示例："Costs [3] [Mana]"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Unbuildable</summary>

Blocks from being built, possibly by conditional. However it can still appear in the menu and be bought with other means such as Gold or Faith

适用范围：建筑， 单位， Improvement

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Must be next to <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span></summary>

示例："Must be next to [Farm]"

适用范围：Building、改良设施

</details>

<details>
<summary>Obsolete with <span title="任何科技的名称">[tech]</span></summary>

示例："Obsolete with [Agriculture]"

适用范围：Building、改良设施、资源

</details>

<details>
<summary><span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Sight</summary>

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
<summary>Can also be built on tiles adjacent to fresh water</summary>

适用范围：Improvement

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> from <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles</summary>

示例："[+1 Gold, +2 Production] from [Farm] tiles"

适用范围：Improvement

</details>

<details>
<summary><span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> for each adjacent <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span></summary>

示例："[+1 Gold, +2 Production] for each adjacent [Farm]"

适用范围：Improvement

</details>

<details>
<summary>Ensures a minimum tile yield of <span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span></summary>

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
<summary>Can only be built on <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles</summary>

示例："Can only be built on [Farm] tiles"

适用范围：Improvement

</details>

<details>
<summary>Cannot be built on <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles</summary>

示例："Cannot be built on [Farm] tiles"

适用范围：Improvement

</details>

<details>
<summary>Can only be built to improve a resource</summary>

适用范围：Improvement

</details>

<details>
<summary>Does not need removal of <span title="根据 JSON 文件定义的任何地形特征的名称">[terrainFeature]</span></summary>

示例："Does not need removal of [Hill]"

适用范围：Improvement

</details>

<details>
<summary>Removes removable features when built</summary>

适用范围：Improvement

</details>

<details>
<summary>Gives a defensive bonus of <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%</summary>

不接受基于单位的条件

示例："Gives a defensive bonus of [+20]%"

适用范围：Improvement

</details>

<details>
<summary>Costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> per turn when in your territory</summary>

示例："Costs [3] [Culture] per turn when in your territory"

适用范围：Improvement

</details>

<details>
<summary>Costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！">[stat]</span> per turn</summary>

示例："Costs [3] [Culture] per turn"

适用范围：Improvement

</details>

<details>
<summary>Adjacent enemy units ending their turn take <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> damage</summary>

示例："Adjacent enemy units ending their turn take [3] damage"

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
<summary>Pillaging this improvement yields approximately <span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span></summary>

示例："Pillaging this improvement yields approximately [+1 Gold, +2 Production]"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

This unique's effect can be modified with &lt;(modified by game progress up to <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%)&gt;

适用范围：Improvement

</details>

<details>
<summary>Pillaging this improvement yields <span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span></summary>

示例："Pillaging this improvement yields [+1 Gold, +2 Production]"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

This unique's effect can be modified with &lt;(modified by game progress up to <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%)&gt;

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
<summary>Will not be replaced by automated units</summary>

适用范围：Improvement

</details>

<details>
<summary>Improves <span title="资源名称、类型、'all'（所有），或资源 improvementStats 中列出的属性">[resourceFilter]</span> resource in this tile</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 资源 Uniques
<details>
<summary>Obsolete with <span title="任何科技的名称">[tech]</span></summary>

示例："Obsolete with [Agriculture]"

适用范围：Building、改良设施、资源

</details>

<details>
<summary>Must not be on <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> largest landmasses</summary>

示例："Must not be on [3] largest landmasses"

此 unique 对用户自动隐藏。

适用范围：地形， Resource

</details>

<details>
<summary>Must be on <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> largest landmasses</summary>

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
<summary>Occurs at temperature between <span title="指示分数，可以是负数">[fraction]</span> and <span title="指示分数，可以是负数">[fraction]</span> and humidity between <span title="指示分数，可以是负数">[fraction]</span> and <span title="指示分数，可以是负数">[fraction]</span></summary>

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
<summary>Deposits in <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles always provide <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> resources</summary>

示例："Deposits in [Farm] tiles always provide [3] resources"

适用范围：Resource

</details>

<details>
<summary>Can only be created by Mercantile City States</summary>

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
<summary>Generated with weight <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span></summary>

选择此资源的概率是 (此资源权重) / (所有合格资源的权重总和)。没有 unique 的资源的权重为 `1`

示例："Generated with weight [3]"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>Minor deposits generated with weight <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span></summary>

选择此资源的概率是 (此资源权重) / (所有合格资源的权重总和)。没有 unique 的资源不会作为小型矿床生成。

示例："Minor deposits generated with weight [3]"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>Generated near City States with weight <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span></summary>

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
<summary>Generated on every <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> tiles</summary>

示例："Generated on every [3] tiles"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>Guaranteed with Strategic Balance resource option</summary>

适用范围：Resource

</details>

<details>
<summary>AI will sell at <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Gold</summary>

示例："AI will sell at [3] Gold"

此 unique 对用户自动隐藏。

适用范围：Resource

</details>

<details>
<summary>AI will buy at <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Gold</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 遗迹 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Free <span title="任何单位的名称">[unit]</span> found in the ruins</summary>

示例："Free [Musketman] found in the ruins"

适用范围：Ruins

</details>

<details>
<summary>From a randomly chosen tile <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> tiles away from the ruins, reveal tiles up to <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> tiles away with <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span>% chance</summary>

示例："From a randomly chosen tile [3] tiles away from the ruins, reveal tiles up to [3] tiles away with [3]% chance"

适用范围：Ruins

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 游戏速度 Uniques

> 游戏速度 Uniques 将被视为游戏中选择的游戏速度的 全局 Uniques（GlobalUniques）的一部分

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Suppress warning <span title="抑制一个特定的规则集验证警告。可以指定完整的文本（包括正确的大小写），也可以是以星号（'*'）开头和结尾的通配符不区分大小写的简单模式。如果在对象内或作为修饰符（非模组选项）使用抑制 unique，则可以省略通配符符号，因为由于范围有限，选择性更好">[validationWarning]</span></summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。 Note that this can be used in 模组选项, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. 即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、游戏速度, 模组选项, 元修饰符

</details>

## 难度 Uniques

> 难度 Uniques 将被视为游戏中选择的难度的 全局 Uniques（GlobalUniques）的一部分

<details>
<summary>Will not be displayed in Civilopedia</summary>

此 unique 对用户自动隐藏。

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

<details>
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 教程 Uniques
## 城邦 Uniques
<details>
<summary>Provides military units every ≈<span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> turns</summary>

示例："Provides military units every ≈[3] turns"

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
<summary>Allow City States to spawn with additional units</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Can trade civilization introductions for <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> Gold</summary>

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
<summary>Allow cities to claim tiles</summary>

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Suppress warning <span title="抑制一个特定的规则集验证警告。可以指定完整的文本（包括正确的大小写），也可以是以星号（'*'）开头和结尾的通配符不区分大小写的简单模式。如果在对象内或作为修饰符（非模组选项）使用抑制 unique，则可以省略通配符符号，因为由于范围有限，选择性更好">[validationWarning]</span></summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。 Note that this can be used in 模组选项, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. 即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、游戏速度, 模组选项, 元修饰符

</details>

<details>
<summary>Mod is incompatible with <span title="模组名称（区分大小写）或简单的通配符过滤器（以星号开头和结尾，不区分大小写）。注意：必须使用 Unciv 显示的模组名称，而不是存储库名称。有一个影响连字符和前导/尾随空格的转换，请确保不要混淆">[modFilter]</span></summary>

Specifies that your Mod is incompatible with another. Always treated symmetrically, and cannot be overridden by the Mod you are declaring as incompatible.

示例："Mod is incompatible with [DeCiv Redux]"

此 unique 不支持条件。

适用范围：模组选项

</details>

<details>
<summary>Mod requires <span title="模组名称（区分大小写）或简单的通配符过滤器（以星号开头和结尾，不区分大小写）。注意：必须使用 Unciv 显示的模组名称，而不是存储库名称。有一个影响连字符和前导/尾随空格的转换，请确保不要混淆">[modFilter]</span></summary>

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
<summary>Mod preselects map <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

Only meaningful for Mods containing several maps. When this mod is selected on the new game screen's custom maps mod dropdown, the named map will be selected on the map dropdown. Also disables selection by recently modified. Case insensitive.

示例："Mod preselects map <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

此 unique 不支持条件。

适用范围：模组选项

</details>

## 事件 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

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

Meant to be used together with conditionals, like "Only available &lt;after adopting <span title="任何政策的名称">[policy]</span>&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

适用范围：科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

适用范围：科技， 政策， 建筑， 单位， Promotion、改良设施、遗迹、事件, 事件选择

</details>

<details>
<summary><span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>% weight to this choice for AI decisions</summary>

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
<summary>Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span></summary>

允许在 Unique 列表中显示任意文本。仅 '[]' 括号内的文本将被显示，其余部分用于允许规则集验证识别意图。

示例："Comment <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span>"

适用范围：民族， 科技， 政策， 创立者信仰, 追随者信仰、建筑, 单位， 单位类型、晋升、地形、改良设施、资源、遗迹、游戏速度、难度, 事件选择

</details>

## 条件 Uniques

> 可以添加到其他 uniques 以限制其何时激活的修饰符

<details>
<summary>&lt;every <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> turns&gt;</summary>

示例："&lt;every [3] turns&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;before turn number <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span>&gt;</summary>

示例："&lt;before turn number [3]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;after turn number <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span>&gt;</summary>

示例："&lt;after turn number [3]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on <span title="任何游戏速度的名称">[speed]</span> game speed&gt;</summary>

示例："&lt;on [Quick] game speed&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on <span title="任何难度的名称">[difficulty]</span> difficulty&gt;</summary>

示例："&lt;on [Prince] difficulty&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on <span title="任何难度的名称">[difficulty]</span> difficulty or higher&gt;</summary>

示例："&lt;on [Prince] difficulty or higher&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on <span title="任何难度的名称">[difficulty]</span> difficulty or lower&gt;</summary>

示例："&lt;on [Prince] difficulty or lower&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when <span title="任何胜利类型的名称：'Cultural'（文化）、'Diplomatic'（外交）、'Domination'（统治）、'Scientific'（科技）、'Time'（时间）或您的模组 VictoryTypes.json 中的名称">[victoryType]</span> Victory is enabled&gt;</summary>

示例："&lt;when [Domination] Victory is enabled&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when <span title="任何胜利类型的名称：'Cultural'（文化）、'Diplomatic'（外交）、'Domination'（统治）、'Scientific'（科技）、'Time'（时间）或您的模组 VictoryTypes.json 中的名称">[victoryType]</span> Victory is disabled&gt;</summary>

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
<summary>&lt;with <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span>% chance&gt;</summary>

示例："&lt;with [3]% chance&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if tutorials are enabled&gt;</summary>

此 unique 对用户自动隐藏。

适用范围：条件

</details>

<details>
<summary>&lt;if tutorial <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> is completed&gt;</summary>

示例："&lt;if tutorial <span title="自由文本注释，用于提供额外信息或显示消息">[comment]</span> is completed&gt;"

此 unique 对用户自动隐藏。

适用范围：条件

</details>

<details>
<summary>&lt;for [civFilter] Civilizations&gt;</summary>

示例："&lt;for [City States] Civilizations&gt;"

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
<summary>&lt;during the <span title="任何时代的名称">[era]</span>&gt;</summary>

示例："&lt;during the [Ancient era]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;before the <span title="任何时代的名称">[era]</span>&gt;</summary>

示例："&lt;before the [Ancient era]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;starting from the <span title="任何时代的名称">[era]</span>&gt;</summary>

示例："&lt;starting from the [Ancient era]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if starting in the <span title="任何时代的名称">[era]</span>&gt;</summary>

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
<summary>&lt;if no Civilization has adopted <span title="政策或信仰名称">[policy/belief]</span>&gt;</summary>

示例："&lt;if no Civilization has adopted [Oligarchy]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;after adopting <span title="政策或信仰名称">[policy/belief]</span>&gt;</summary>

示例："&lt;after adopting [Oligarchy]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;before adopting <span title="政策或信仰名称">[policy/belief]</span>&gt;</summary>

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
<summary>&lt;if <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> is constructed&gt;</summary>

示例："&lt;if [Culture] is constructed&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> is not constructed&gt;</summary>

示例："&lt;if [Culture] is not constructed&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> is constructed in all <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> cities&gt;</summary>

示例："&lt;if [Culture] is constructed in all [in all cities] cities&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> is constructed in at least <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> of <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> cities&gt;</summary>

示例："&lt;if [Culture] is constructed in at least [3] of [in all cities] cities&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> is constructed by anybody&gt;</summary>

示例："&lt;if [Culture] is constructed by anybody&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> is not constructed by anybody&gt;</summary>

示例："&lt;if [Culture] is not constructed by anybody&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;with <span title="任何资源的名称">[resource]</span>&gt;</summary>

示例："&lt;with [Iron]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;without <span title="任何资源的名称">[resource]</span>&gt;</summary>

示例："&lt;without [Iron]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when above <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> [stat/resource]&gt;</summary>

属性指的是累积属性，而不是每回合属性。因此，不支持幸福度——为此请使用 .当幸福度高于 <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> 时.

示例："&lt;when above [3] [Culture]&gt;"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

适用范围：条件

</details>

<details>
<summary>&lt;when below <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> [stat/resource]&gt;</summary>

Stats refers to the accumulated stat, not stat-per-turn. Therefore, does not support Happiness - for that use 'when below <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> Happiness'

示例："&lt;when below [3] [Culture]&gt;"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

适用范围：条件

</details>

<details>
<summary>&lt;when between <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> and <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> [stat/resource]&gt;</summary>

Stats refers to the accumulated stat, not stat-per-turn. Therefore, does not support Happiness. 'between' 是包含的——因此 'between 1 and 5' 包含 1 和 5。

示例："&lt;when between [3] and [3] [Culture]&gt;"

此 unique 的效果可被 &lt;(modified by game speed)&gt; 修改

适用范围：条件

</details>

<details>
<summary>&lt;in this city&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;in <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span> cities&gt;</summary>

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
<summary>&lt;in cities with a <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span>&gt;</summary>

示例："&lt;in cities with a [Culture]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities without a <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span>&gt;</summary>

示例："&lt;in cities without a [Culture]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities with at least <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> <span title="人口过滤器，例如 'Followers of this Religion'（此宗教的追随者）等">[populationFilter]</span>&gt;</summary>

示例："&lt;in cities with at least [3] [Followers of this Religion]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities with <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> <span title="人口过滤器，例如 'Followers of this Religion'（此宗教的追随者）等">[populationFilter]</span>&gt;</summary>

示例："&lt;in cities with [3] [Followers of this Religion]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities with between <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> and <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="人口过滤器，例如 'Followers of this Religion'（此宗教的追随者）等">[populationFilter]</span>&gt;</summary>

'between' 是包含的——因此 'between 1 and 5' 包含 1 和 5。

示例："&lt;in cities with between [3] and [3] [Followers of this Religion]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in cities with less than <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="人口过滤器，例如 'Followers of this Religion'（此宗教的追随者）等">[populationFilter]</span>&gt;</summary>

示例："&lt;in cities with less than [3] [Followers of this Religion]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;with a garrison&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;for <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units&gt;</summary>

示例："&lt;for [Wounded] units&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span>&gt;</summary>

示例："&lt;when [Wounded]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;for units with <span title="任何晋升的名称">[promotion]</span>&gt;</summary>

也适用于具有临时状态的单位

示例："&lt;for units with [Shock I]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;for units without <span title="任何晋升的名称">[promotion]</span>&gt;</summary>

也适用于具有临时状态的单位

示例："&lt;for units without [Shock I]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;vs cities&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;vs <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units&gt;</summary>

示例："&lt;vs [Wounded] units&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;vs <span title="指示战斗者，可以是单位或城市（轰炸时）。必须是 `City` 或 `mapUnitFilter`">[combatantFilter]</span>&gt;</summary>

示例："&lt;vs [City]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when fighting units from a Civilization with more Cities than you&gt;</summary>

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
<summary>&lt;when fighting in <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles&gt;</summary>

示例："&lt;when fighting in [Farm] tiles&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;on foreign continents&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when adjacent to a <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit&gt;</summary>

示例："&lt;when adjacent to a [Wounded] unit&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when above <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> HP&gt;</summary>

示例："&lt;when above [3] HP&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when below <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> HP&gt;</summary>

示例："&lt;when below [3] HP&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if it hasn't used other actions yet&gt;</summary>

适用范围：条件

</details>

<details>
<summary>&lt;when stacked with a <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit&gt;</summary>

示例："&lt;when stacked with a [Wounded] unit&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when not stacked with a <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit&gt;</summary>

示例："&lt;when not stacked with a [Wounded] unit&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;with <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> to <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> neighboring <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles&gt;</summary>

示例："&lt;with [3] to [3] neighboring [Farm] tiles&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles&gt;</summary>

示例："&lt;in [Farm] tiles&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in tiles without <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span>&gt;</summary>

示例："&lt;in tiles without [Farm]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;within <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> tiles of a <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span>&gt;</summary>

示例："&lt;within [3] tiles of a [Farm]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in tiles adjacent to <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles&gt;</summary>

示例："&lt;in tiles adjacent to [Farm] tiles&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;in tiles not adjacent to <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tiles&gt;</summary>

示例："&lt;in tiles not adjacent to [Farm] tiles&gt;"

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
<summary>&lt;when number of <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span> is equal to <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span>&gt;</summary>

示例："&lt;when number of [1000] is equal to [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when number of <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span> is different than <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span>&gt;</summary>

示例："&lt;when number of [1000] is different than [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when number of <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span> is more than <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span>&gt;</summary>

示例："&lt;when number of [1000] is more than [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when number of <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span> is less than <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span>&gt;</summary>

示例："&lt;when number of [1000] is less than [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when number of <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span> is between <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span> and <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span>&gt;</summary>

'between' 是包含的——因此 'between 1 and 5' 包含 1 和 5。

示例："&lt;when number of [1000] is between [1000] and [1000]&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;when carried by <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> units&gt;</summary>

示例："&lt;when carried by [Wounded] units&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if <span title="模组名称（区分大小写）或简单的通配符过滤器（以星号开头和结尾，不区分大小写）。注意：必须使用 Unciv 显示的模组名称，而不是存储库名称。有一个影响连字符和前导/尾随空格的转换，请确保不要混淆">[modFilter]</span> is enabled&gt;</summary>

示例："&lt;if [DeCiv Redux] is enabled&gt;"

适用范围：条件

</details>

<details>
<summary>&lt;if <span title="模组名称（区分大小写）或简单的通配符过滤器（以星号开头和结尾，不区分大小写）。注意：必须使用 Unciv 显示的模组名称，而不是存储库名称。有一个影响连字符和前导/尾随空格的转换，请确保不要混淆">[modFilter]</span> is not enabled&gt;</summary>

示例："&lt;if [DeCiv Redux] is not enabled&gt;"

适用范围：条件

</details>

## 触发条件 Uniques

> 特殊条件，可以添加到 可触发的 Uniques（Triggered uniques）中，使其在特定行动时激活。

<details>
<summary>&lt;upon discovering [techFilter] technology&gt;</summary>

示例："&lt;upon discovering [Agriculture] technology&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon entering the <span title="任何时代的名称">[era]</span>&gt;</summary>

示例："&lt;upon entering the [Ancient era]&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon entering a new era&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon adopting <span title="政策或信仰名称">[policy/belief]</span>&gt;</summary>

示例："&lt;upon adopting [Oligarchy]&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon declaring war on [civFilter] Civilizations&gt;</summary>

示例："&lt;upon declaring war on [City States] Civilizations&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon being declared war on by [civFilter] Civilizations&gt;</summary>

示例："&lt;upon being declared war on by [City States] Civilizations&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon entering a war with [civFilter] Civilizations&gt;</summary>

示例："&lt;upon entering a war with [City States] Civilizations&gt;"

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
<summary>&lt;upon building a <span title="改良设施过滤器，可以是改良设施名称、过滤 Unique，或 'All Road'（所有道路）等">[improvementFilter]</span> improvement&gt;</summary>

示例："&lt;upon building a [All Road] improvement&gt;"

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon discovering a Natural Wonder&gt;</summary>

适用范围：触发条件

</details>

<details>
<summary>&lt;upon constructing <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span>&gt;</summary>

示例："&lt;upon constructing [Culture]&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon constructing <span title="建筑名称、过滤 Unique、或 'all'（所有）">[buildingFilter]</span> <span title="城市过滤器，例如 'in all cities'（所有城市）、'in capital'（首都）、'in this city'（此城市）等">[cityFilter]</span>&gt;</summary>

示例："&lt;upon constructing [Culture] [in all cities]&gt;"

适用范围：触发条件

</details>

<details>
<summary>&lt;upon gaining a <span title="基本单位过滤器，可以是单位类型（如 'Melee' 近战）、单位名称，或过滤 Unique">[baseUnitFilter]</span> unit&gt;</summary>

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
<summary>&lt;upon expending a <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit&gt;</summary>

示例："&lt;upon expending a [Wounded] unit&gt;"

适用范围：触发条件

</details>

## 单位触发条件 Uniques

> 特殊条件，可以添加到 单位可触发的 Uniques（Unit-triggered uniques）中，使其在特定行动时激活。

<details>
<summary>&lt;upon conquering a city&gt;</summary>

适用范围：触发条件、单位触发条件

</details>

<details>
<summary>&lt;upon building a <span title="改良设施过滤器，可以是改良设施名称、过滤 Unique，或 'All Road'（所有道路）等">[improvementFilter]</span> improvement&gt;</summary>

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
<summary>&lt;upon damaging a <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit&gt;</summary>

> 可以将触发器应用于受伤单位，方法是将第一个参数设置为'Target Unit'

示例："&lt;upon damaging a [Wounded] unit&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon defeating a <span title="地图单位过滤器，可以是单位名称、过滤 Unique，或特定状态（如 'Wounded' 受伤单位）">[mapUnitFilter]</span> unit&gt;</summary>

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
<summary>&lt;upon gaining the <span title="任何晋升的名称">[promotion]</span> promotion&gt;</summary>

示例："&lt;upon gaining the [Shock I] promotion&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon losing the <span title="任何晋升的名称">[promotion]</span> promotion&gt;</summary>

示例："&lt;upon losing the [Shock I] promotion&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon gaining the <span title="任何晋升的名称">[promotion]</span> status&gt;</summary>

示例："&lt;upon gaining the [Shock I] status&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon losing the <span title="任何晋升的名称">[promotion]</span> status&gt;</summary>

示例："&lt;upon losing the [Shock I] status&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon losing at least <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> HP in a single attack&gt;</summary>

示例："&lt;upon losing at least [3] HP in a single attack&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon ending a turn in a <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tile&gt;</summary>

示例："&lt;upon ending a turn in a [Farm] tile&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon discovering a <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tile&gt;</summary>

示例："&lt;upon discovering a [Farm] tile&gt;"

适用范围：Unit触发条件

</details>

<details>
<summary>&lt;upon entering a <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span> tile&gt;</summary>

示例："&lt;upon entering a [Farm] tile&gt;"

适用范围：Unit触发条件

</details>

## 单位行动修饰符 Uniques

> 可以添加到 单位行动 uniques 作为条件的修饰符

<details>
<summary>&lt;by consuming this unit&gt;</summary>

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;for <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> movement&gt;</summary>

执行时最多消耗 <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> 移动力

示例："&lt;for [3] movement&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;for all movement&gt;</summary>

执行时消耗所有移动力

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;requires <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> movement&gt;</summary>

执行需要 <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> 移动力。单位的移动力向上取整

示例："&lt;requires [3] movement&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;costs <span title="例如：`+2 Production, +3 Food`。注意属性名称需要大写！">[stats]</span> stats&gt;</summary>

正整数值将从您的库存中减去。食物和生产力将从最近城市的当前库存中移除

示例："&lt;costs [+1 Gold, +2 Production] stats&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span>&gt;</summary>

A positive Integer value will be subtracted from your stock. Do not confuse with "Costs <span title="整数，可能有正负号，例如 `2`、`+13` 或 `-3`">[amount]</span> <span title="任何储存资源的名称">[stockpiledResource]</span>" (uppercase 'C') for Improvements、建筑s, and Units.

示例："&lt;costs [3] [Mana]&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;removing the <span title="任何晋升的名称">[promotion]</span> promotion/status&gt;</summary>

从单位移除晋升/状态——这不是成本，即使没有晋升/状态，单位也能激活该行动。要限制，请使用 <带有 <span title="任何晋升的名称">[promotion]</span> 晋升> 条件

示例："&lt;removing the [Shock I] promotion/status&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;once&gt;</summary>

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;<span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> times&gt;</summary>

示例："&lt;[3] times&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;<span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> additional time(s)&gt;</summary>

示例："&lt;[3] additional time(s)&gt;"

适用范围：单位行动Modifier

</details>

<details>
<summary>&lt;after which this unit is consumed&gt;</summary>

适用范围：单位行动Modifier

</details>

## 元修饰符 Uniques

> 可以添加到其他 uniques 以改变用户体验，而不是其行为的修饰符

<details>
<summary>&lt;for <span title="非负整数，大于或等于零，'+' 号可选">[nonNegativeAmount]</span> turns&gt;</summary>

将此 unique 转换为触发器，作为*全局* unique 激活此 unique 若干回合

示例："&lt;for [3] turns&gt;"

适用范围：元修饰符

</details>

<details>
<summary>&lt;hidden from users&gt;</summary>

适用范围：元修饰符

</details>

<details>
<summary>&lt;for every <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span>&gt;</summary>

仅适用于正数

示例："&lt;for every [1000]&gt;"

适用范围：元修饰符

</details>

<details>
<summary>&lt;for every adjacent <span title="任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良）">[tileFilter]</span>&gt;</summary>

仅适用于正数

示例："&lt;for every adjacent [Farm]&gt;"

适用范围：元修饰符

</details>

<details>
<summary>&lt;for every <span title="正整数，大于零，'+' 号可选">[positiveAmount]</span> <span title="指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable &quot;[Iron]+2&quot;`">[countable]</span>&gt;</summary>

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
<summary>&lt;(modified by game progress up to <span title="数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分）">[relativeAmount]</span>%)&gt;</summary>

只能应用于某些 uniques，具体情况请参阅每个 unique 的详细信息

示例："&lt;(modified by game progress up to [+20]%)&gt;"

适用范围：元修饰符

</details>

<details>
<summary>&lt;Suppress warning <span title="抑制一个特定的规则集验证警告。可以指定完整的文本（包括正确的大小写），也可以是以星号（'*'）开头和结尾的通配符不区分大小写的简单模式。如果在对象内或作为修饰符（非模组选项）使用抑制 unique，则可以省略通配符符号，因为由于范围有限，选择性更好">[validationWarning]</span>&gt;</summary>

允许抑制特定的验证警告。错误、弃用警告或关于无类型和非过滤 uniques 的警告应予以注意，而不是抑制，因此不予接受。 Note that this can be used in 模组选项, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. 即使在修饰符情况下，您也需要指定警告文本的足够选择性部分作为参数。

示例："&lt;Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]&gt;"

此 unique 不支持条件。

此 unique 对用户自动隐藏。

适用范围：可触发、地形、游戏速度, 模组选项, 元修饰符

</details>

## Unique 参数说明参考表

| 参数 | 说明 |
|------|------|
| `[amount]` | 整数，可能有正负号，例如 `2`、`+13` 或 `-3` |
| `[baseTerrain]` | 根据 JSON 文件定义的任何基本地形的名称 |
| `[belief]` | 任何信仰的名称 |
| `[beliefType]` | 'Pantheon'（泛灵论）、'Follower'（追随者）、'Founder'（创立者）或 'Enhancer'（强化者） |
| `[buildingName]` | 任何建筑的名称 |
| `[civWideStat]` | 以下属性具有文明范围的字段：`Gold`（金币）、`Science`（科技）、`Culture`（文化）、`Faith`（信仰） |
| `[combatantFilter]` | 指示战斗者，可以是单位或城市（轰炸时）。必须是 `City` 或 `mapUnitFilter` |
| `[costOrStrength]` | `Cost`（成本）或 `Strength`（强度） |
| `[countable]` | 指示数字或数值变量。可以在开发者控制台中使用 `civ checkcountable` 测试，例如 `civ checkcountable "[Iron]+2"` |
| `[difficulty]` | 任何难度的名称 |
| `[era]` | 任何时代的名称 |
| `[eraFilter]` | 时代名称，`any era`（任何时代）、`Starting Era`（起始时代）、`pre-[era]`（[时代]之前）、`post-[era]`（[时代]之后） |
| `[event]` | 任何事件的名称 |
| `[foundingOrEnhancing]` | `founding`（建立）或 `enhancing`（强化） |
| `[fraction]` | 指示分数，可以是负数 |
| `[improvementName]` | 任何改良设施的名称，不包括 'Cancel improvement order' |
| `[leaderTitle]` | 提供包含领袖名称的领袖头衔 |
| `[modFilter]` | 模组名称（区分大小写）或简单的通配符过滤器（以星号开头和结尾，不区分大小写）。注意：必须使用 Unciv 显示的模组名称，而不是存储库名称。有一个影响连字符和前导/尾随空格的转换，请确保不要混淆 |
| `[nonNegativeAmount]` | 非负整数，大于或等于零，'+' 号可选 |
| `[policy]` | 任何政策的名称 |
| `[policyFilter]` | 任何政策名称、过滤 Unique、任何分支（仅匹配分支本身）、附加 " Completed" 的分支名称（如果分支已完成则匹配），或作为 `[branchName] branch` 的政策分支（匹配该分支中的所有政策） |
| `[positiveAmount]` | 正整数，大于零，'+' 号可选 |
| `[promotion]` | 任何晋升的名称 |
| `[relativeAmount]` | 数字，通常带有 + 或 - 号，例如 `+25`（此类参数通常后跟 '%'，但 '%' 不属于值的一部分） |
| `[resource]` | 任何资源的名称 |
| `[resourceFilter]` | 资源名称、类型、'all'（所有），或资源 improvementStats 中列出的属性 |
| `[specialist]` | 任何专家的名称 |
| `[speed]` | 任何游戏速度的名称 |
| `[stat]` | 游戏中的 7 个主要属性之一 - `Gold`（金币）、`Science`（科技）、`Production`（生产力）、`Food`（食物）、`Happiness`（快乐）、`Culture`（文化）和 `Faith`（信仰）。注意属性名称需要大写！ |
| `[stats]` | 例如：`+2 Production, +3 Food`。注意属性名称需要大写！ |
| `[stockpile]` | 任何储存资源的名称 |
| `[stockpiledResource]` | 任何储存资源的名称 |
| `[tech]` | 任何科技的名称 |
| `[terrainFeature]` | 根据 JSON 文件定义的任何地形特征的名称 |
| `[tileFilter]` | 任何可以在 improvementFilter 或 terrainFilter 中使用的内容都可以在这里使用，加上 'unimproved'（未改良） |
| `[unitNameGroup]` | 在 UnitNameGroups.json 中找到的单位名称组名称，或其唯一标签 |
| `[unitTriggerTarget]` | `This Unit`（此单位）或 `Target Unit`（目标单位） |
| `[unitType]` | 可以是 'Land'（陆地）、'Water'（水域）、'Air'（空中）、任何单位类型、单位类型上的过滤 Unique，或这些的多重过滤器 |
| `[validationWarning]` | 抑制一个特定的规则集验证警告。可以指定完整的文本（包括正确的大小写），也可以是以星号（'*'）开头和结尾的通配符不区分大小写的简单模式。如果在对象内或作为修饰符（非模组选项）使用抑制 unique，则可以省略通配符符号，因为由于范围有限，选择性更好 |
| `[victoryType]` | 任何胜利类型的名称：'Cultural'（文化）、'Diplomatic'（外交）、'Domination'（统治）、'Scientific'（科技）、'Time'（时间）或您的模组 VictoryTypes.json 中的名称 |

**提示**：简单的参数说明如上。对于更复杂的参数说明，请参阅 [Unique 参数类型详解](Unique参数详解.md)。




