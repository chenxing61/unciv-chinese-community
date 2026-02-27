---
title: Unique 能力列表
---

# Unique 能力列表

Uniques 概述可以在[这里](../Developers/Uniques.md)找到。

简单的 Unique 参数可以通过鼠标悬停查看说明。复杂的参数在[Unique 参数类型](Unique-parameters.md)中说明。

## 可触发的 Uniques

<details>
<summary>说明</summary>

具有即时、一次性效果的 Uniques。这些可以添加到科技中，在研究时触发；添加到政策中，在采用时触发；添加到时代中，在到达时触发；添加到建筑中，在建造时触发。或者，你可以为它们添加 TriggerCondition，使其成为在特定事件时激活的全局 Uniques。它们也可以添加到单位中，赋予它们触发此效果作为行动的能力，这可以通过 UnitActionModifier 和 UnitTriggerCondition 条件进行修改。

</details>

<details>
<summary>Gain a free [buildingName] [cityFilter]</summary>

Free buildings CANNOT be self-removing - this leads to an endless loop of trying to add the building

Example: "Gain a free [Library] [in all cities]"

Applicable to: Triggerable, Global

</details>

<details>
<summary>Remove [buildingFilter] [cityFilter]</summary>

Example: "Remove [Culture] [in all cities]"

Applicable to: Triggerable, Global

</details>

<details>
<summary>Sell [buildingFilter] buildings [cityFilter]</summary>

Example: "Sell [Culture] buildings [in all cities]"

Applicable to: Triggerable, Global

</details>

<details>
<summary>Free [unit] appears</summary>

Example: "Free [Musketman] appears"

Applicable to: Triggerable

</details>

<details>
<summary>[positiveAmount] free [unit] units appear</summary>

Example: "[3] free [Musketman] units appear"

Applicable to: Triggerable

</details>

<details>
<summary>A [unit] rebels</summary>

Example: "A [Musketman] rebels"

Applicable to: Triggerable

</details>

<details>
<summary>[positiveAmount] [unit]s rebel</summary>

Example: "[3] [Musketman]s rebel"

Applicable to: Triggerable

</details>

<details>
<summary>Free Social Policy</summary>

Applicable to: Triggerable

</details>

<details>
<summary>[positiveAmount] Free Social Policies</summary>

Example: "[3] Free Social Policies"

Applicable to: Triggerable

</details>

<details>
<summary>Empire enters golden age</summary>

Applicable to: Triggerable

</details>

<details>
<summary>Empire enters a [positiveAmount]-turn Golden Age</summary>

Example: "Empire enters a [3]-turn Golden Age"

Applicable to: Triggerable

</details>

<details>
<summary>Free Great Person</summary>

Applicable to: Triggerable

</details>

<details>
<summary>[amount] population [cityFilter]</summary>

Example: "[3] population [in all cities]"

Applicable to: Triggerable

</details>

<details>
<summary>[amount] population in a random city</summary>

Example: "[3] population in a random city"

Applicable to: Triggerable

</details>

<details>
<summary>Discover [tech]</summary>

Example: "Discover [Agriculture]"

Applicable to: Triggerable

</details>

<details>
<summary>Adopt [policy/belief]</summary>

Example: "Adopt [Oligarchy]"

Applicable to: Triggerable

</details>

<details>
<summary>Remove [policyFilter]</summary>

Example: "Remove [Oligarchy]"

Applicable to: Triggerable

</details>

<details>
<summary>Remove [policyFilter] and refund [amount]% of its cost</summary>

Example: "Remove [Oligarchy] and refund [3]% of its cost"

Applicable to: Triggerable

</details>

<details>
<summary>Free Technology</summary>

Applicable to: Triggerable

</details>

<details>
<summary>[positiveAmount] Free Technologies</summary>

Example: "[3] Free Technologies"

Applicable to: Triggerable

</details>

<details>
<summary>[positiveAmount] free random researchable Tech(s) from the [eraFilter]</summary>

Example: "[3] free random researchable Tech(s) from the [Ancient era]"

Applicable to: Triggerable

</details>

<details>
<summary>Reveals the entire map</summary>

Applicable to: Triggerable

</details>

<details>
<summary>Gain a free [beliefType] belief</summary>

Example: "Gain a free [Follower] belief"

Applicable to: Triggerable

</details>

<details>
<summary>Triggers voting for the Diplomatic Victory</summary>

Applicable to: Triggerable

</details>

<details>
<summary>Instantly consumes [positiveAmount] [stockpiledResource]</summary>

Example: "Instantly consumes [3] [Mana]"

Applicable to: Triggerable

</details>

<details>
<summary>Instantly provides [positiveAmount] [stockpiledResource]</summary>

Example: "Instantly provides [3] [Mana]"

Applicable to: Triggerable

</details>

<details>
<summary>Set [stockpile] to [countable]</summary>

Example: "Set [Mana] to [1000]"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Triggerable

</details>

<details>
<summary>Instantly gain [amount] [stockpile]</summary>

Example: "Instantly gain [3] [Mana]"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Triggerable

</details>

<details>
<summary>Gain [amount] [stat]</summary>

Example: "Gain [3] [Culture]"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Triggerable

</details>

<details>
<summary>Gain [amount]-[amount] [stat]</summary>

Example: "Gain [3]-[3] [Culture]"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Triggerable

</details>

<details>
<summary>Gain enough Faith for a Pantheon</summary>

Applicable to: Triggerable

</details>

<details>
<summary>Gain enough Faith for [positiveAmount]% of a Great Prophet</summary>

Example: "Gain enough Faith for [3]% of a Great Prophet"

Applicable to: Triggerable

</details>

<details>
<summary>Research [relativeAmount]% of [tech]</summary>

Example: "Research [+20]% of [Agriculture]"

Applicable to: Triggerable

</details>

<details>
<summary>Gain control over [tileFilter] tiles in a [nonNegativeAmount]-tile radius</summary>

Example: "Gain control over [Farm] tiles in a [3]-tile radius"

Applicable to: Triggerable

</details>

<details>
<summary>Gain control over [positiveAmount] tiles [cityFilter]</summary>

Example: "Gain control over [3] tiles [in all cities]"

Applicable to: Triggerable

</details>

<details>
<summary>Reveal up to [positiveAmount/'all'] [tileFilter] within a [positiveAmount] tile radius</summary>

Example: "Reveal up to [3] [Farm] within a [3] tile radius"

Applicable to: Triggerable

</details>

<details>
<summary>Triggers the following global alert: [comment]</summary>

Supported on Policies and Technologies.

For other targets, the generated Notification may not read nicely, and will likely not support translation. Reason: Your [comment] gets a generated introduction, other triggers usually notify _you_, not _others_, and that difference is currently handled by mapping text.

Conditionals evaluate in the context of the civilization having the Unique, not the recipients of the alerts.

Example: "Triggers the following global alert: [comment]"

Applicable to: Triggerable

</details>

<details>
<summary>Promotes all spies [positiveAmount] time(s)</summary>

Example: "Promotes all spies [3] time(s)"

Applicable to: Triggerable

</details>

<details>
<summary>Gain an extra spy</summary>

Applicable to: Triggerable

</details>

<details>
<summary>Turn this tile into a [terrainName] tile</summary>

Example: "Turn this tile into a [Forest] tile"

Applicable to: Triggerable

</details>

<details>
<summary>Remove [resourceFilter] resources from this tile</summary>

Example: "Remove [Strategic] resources from this tile"

Applicable to: Triggerable

</details>

<details>
<summary>Remove [improvementFilter] improvements from this tile</summary>

Example: "Remove [All Road] improvements from this tile"

Applicable to: Triggerable

</details>

<details>
<summary>[mapUnitFilter] units gain the [promotion] promotion</summary>

Works only with promotions that are valid for the unit's type - or for promotions that do not specify any.

Example: "[Wounded] units gain the [Shock I] promotion"

Applicable to: Triggerable

</details>

<details>
<summary>Provides the cheapest [stat] building in your first [positiveAmount] cities for free</summary>

Example: "Provides the cheapest [Culture] building in your first [3] cities for free"

Applicable to: Triggerable

</details>

<details>
<summary>Provides a [buildingName] in your first [positiveAmount] cities for free</summary>

Example: "Provides a [Library] in your first [3] cities for free"

Applicable to: Triggerable

</details>

<details>
<summary>Triggers a [event] event</summary>

Example: "Triggers a [Inspiration] event"

Applicable to: Triggerable

</details>

<details>
<summary>Mark tutorial [comment] complete</summary>

Example: "Mark tutorial [comment] complete"

This unique does not support conditionals.

This unique is automatically hidden from users.

Applicable to: Triggerable

</details>

<details>
<summary>Play [comment] sound</summary>

See [Images and Audio](Images-and-Audio.md#sounds) for a list of available sounds.

Example: "Play [comment] sound"

This unique is automatically hidden from users.

Applicable to: Triggerable

</details>

<details>
<summary>Get the leader title of [leaderTitle]</summary>

Example: "Get the leader title of [Sovereign [leaderName] the Great]"

This unique is automatically hidden from users.

Applicable to: Triggerable

</details>

<details>
<summary>Suppress warning [validationWarning]</summary>

Allows suppressing specific validation warnings. Errors, deprecation warnings, or warnings about untyped and non-filtering uniques should be heeded, not suppressed, and are therefore not accepted. Note that this can be used in ModOptions, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. Even in the modifier case you will need to specify a sufficiently selective portion of the warning text as parameter.

Example: "Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

This unique does not support conditionals.

This unique is automatically hidden from users.

Applicable to: Triggerable, Terrain, Speed, ModOptions, MetaModifier

</details>

## 单位可触发的 Uniques

<details>
<summary>说明</summary>

Uniques that have immediate, one-time effects on a unit.They can be added to units (on unit, unit type, or promotion) to grant them the ability to trigger this effect as an action, which can be modified with UnitActionModifier and UnitTriggerCondition conditionals.

</details>

<details>
<summary>[unitTriggerTarget] heals [positiveAmount] HP</summary>

Example: "[This Unit] heals [3] HP"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] takes [positiveAmount] damage</summary>

Example: "[This Unit] takes [3] damage"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] gains [amount] XP</summary>

Example: "[This Unit] gains [3] XP"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] upgrades for free</summary>

Example: "[This Unit] upgrades for free"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] upgrades for free including special upgrades</summary>

Example: "[This Unit] upgrades for free including special upgrades"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] gains the [promotion] promotion</summary>

Example: "[This Unit] gains the [Shock I] promotion"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] loses the [promotion] promotion</summary>

Example: "[This Unit] loses the [Shock I] promotion"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] gains [positiveAmount] movement</summary>

Example: "[This Unit] gains [3] movement"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] loses [positiveAmount] movement</summary>

Example: "[This Unit] loses [3] movement"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] gains the [promotion] status for [positiveAmount] turn(s)</summary>

Statuses are temporary promotions. They do not stack, and reapplying a specific status take the highest number - so reapplying a 3-turn on a 1-turn makes it 3, but doing the opposite will have no effect. Turns left on the status decrease at the *start of turn*, so bonuses applied for 1 turn are stll applied during other civ's turns.

Example: "[This Unit] gains the [Shock I] status for [3] turn(s)"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] loses the [promotion] status</summary>

Example: "[This Unit] loses the [Shock I] status"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] is destroyed</summary>

Example: "[This Unit] is destroyed"

Applicable to: UnitTriggerable

</details>

<details>
<summary>[unitTriggerTarget] gets a name from the [unitNameGroup] group</summary>

Example: "[This Unit] gets a name from the [Scientist] group"

Applicable to: UnitTriggerable

</details>

## 全局 Uniques

<details>
<summary>说明</summary>

Uniques that apply globally. Civs gain the abilities of these uniques from nation uniques, reached eras, researched techs, adopted policies, built buildings, religion 'founder' uniques, owned resources, and ruleset-wide global uniques.

</details>

<details>
<summary>[stats]</summary>

Example: "[+1 Gold, +2 Production]"

Applicable to: Global, Terrain, Improvement

</details>

<details>
<summary>[stats] [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from every specialist [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] from every specialist [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] per [positiveAmount] population [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] per [3] population [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] per [positiveAmount] social policies adopted</summary>

Only works for civ-wide stats

Example: "[+1 Gold, +2 Production] per [3] social policies adopted"

Applicable to: Global

</details>

<details>
<summary>[stats] per every [positiveAmount] [civWideStat]</summary>

Example: "[+1 Gold, +2 Production] per every [3] [Gold]"

Applicable to: Global

</details>

<details>
<summary>[stats] in cities on [terrainFilter] tiles</summary>

Example: "[+1 Gold, +2 Production] in cities on [Fresh Water] tiles"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from all [buildingFilter] buildings</summary>

Example: "[+1 Gold, +2 Production] from all [Culture] buildings"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from [tileFilter] tiles [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] from [Farm] tiles [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from [tileFilter] tiles without [tileFilter] [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] from [Farm] tiles without [Farm] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from every [tileFilter/specialist/buildingFilter]</summary>

Example: "[+1 Gold, +2 Production] from every [Farm]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from each Trade Route</summary>

Example: "[+1 Gold, +2 Production] from each Trade Route"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% [stat]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% [Culture]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% [stat] [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% [stat] from every [tileFilter/buildingFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% [Culture] from every [Farm]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Yield from every [tileFilter/buildingFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Yield from every [Farm]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% [stat] from City-States</summary>

Example: "[+20]% [Culture] from City-States"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% [stat] from Trade Routes</summary>

Example: "[+20]% [Culture] from Trade Routes"

Applicable to: Global

</details>

<details>
<summary>Nullifies [stat] [cityFilter]</summary>

Example: "Nullifies [Culture] [in all cities]"

Applicable to: Global

</details>

<details>
<summary>Nullifies Growth [cityFilter]</summary>

Example: "Nullifies Growth [in all cities]"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Production when constructing [buildingFilter] buildings [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Production when constructing [Culture] buildings [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Production when constructing [baseUnitFilter] units [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Production when constructing [Melee] units [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Production when constructing [buildingFilter] wonders [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Production when constructing [Culture] wonders [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Production towards any buildings that already exist in the Capital</summary>

Example: "[+20]% Production towards any buildings that already exist in the Capital"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Yield from pillaging tiles</summary>

Example: "[+20]% Yield from pillaging tiles"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Health from pillaging tiles</summary>

Example: "[+20]% Health from pillaging tiles"

Applicable to: Global, Unit

</details>

<details>
<summary>Military Units gifted from City-States start with [positiveAmount] XP</summary>

Example: "Military Units gifted from City-States start with [3] XP"

Applicable to: Global

</details>

<details>
<summary>Militaristic City-States grant units [positiveAmount] times as fast when you are at war with a common nation</summary>

Example: "Militaristic City-States grant units [3] times as fast when you are at war with a common nation"

Applicable to: Global

</details>

<details>
<summary>Gifts of Gold to City-States generate [relativeAmount]% more Influence</summary>

Example: "Gifts of Gold to City-States generate [+20]% more Influence"

Applicable to: Global

</details>

<details>
<summary>Can spend Gold to annex or puppet a City-State that has been your Ally for [nonNegativeAmount] turns</summary>

Example: "Can spend Gold to annex or puppet a City-State that has been your Ally for [3] turns"

Applicable to: Global

</details>

<details>
<summary>City-State territory always counts as friendly territory</summary>

Applicable to: Global

</details>

<details>
<summary>Allied City-States will occasionally gift Great People</summary>

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% City-State Influence degradation</summary>

Example: "[+20]% City-State Influence degradation"

Applicable to: Global

</details>

<details>
<summary>Resting point for Influence with City-States is increased by [amount]</summary>

Example: "Resting point for Influence with City-States is increased by [3]"

Applicable to: Global

</details>

<details>
<summary>Allied City-States provide [stat] equal to [relativeAmount]% of what they produce for themselves</summary>

Example: "Allied City-States provide [Culture] equal to [+20]% of what they produce for themselves"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% resources gifted by City-States</summary>

Example: "[+20]% resources gifted by City-States"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Happiness from luxury resources gifted by City-States</summary>

Example: "[+20]% Happiness from luxury resources gifted by City-States"

Applicable to: Global

</details>

<details>
<summary>City-State Influence recovers at twice the normal rate</summary>

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% growth [cityFilter]</summary>

Example: "[+20]% growth [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[amount]% Food is carried over after population increases [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[3]% Food is carried over after population increases [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Food consumption by [populationFilter] [cityFilter]</summary>

Example: "[+20]% Food consumption by [Followers of this Religion] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% unhappiness from the number of cities</summary>

Example: "[+20]% unhappiness from the number of cities"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Unhappiness from [populationFilter] [cityFilter]</summary>

Example: "[+20]% Unhappiness from [Followers of this Religion] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[amount] Happiness from each type of luxury resource</summary>

Example: "[3] Happiness from each type of luxury resource"

Applicable to: Global

</details>

<details>
<summary>Retain [relativeAmount]% of the happiness from a luxury after the last copy has been traded away</summary>

Example: "Retain [+20]% of the happiness from a luxury after the last copy has been traded away"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% of excess happiness converted to [stat]</summary>

Example: "[+20]% of excess happiness converted to [Culture]"

Applicable to: Global

</details>

<details>
<summary>Cannot build [baseUnitFilter] units</summary>

Example: "Cannot build [Melee] units"

Applicable to: Global

</details>

<details>
<summary>Enables construction of Spaceship parts</summary>

Applicable to: Global

</details>

<details>
<summary>May buy [baseUnitFilter] units for [nonNegativeAmount] [stat] [cityFilter] at an increasing price ([amount])</summary>

Example: "May buy [Melee] units for [3] [Culture] [in all cities] at an increasing price ([3])"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [buildingFilter] buildings for [nonNegativeAmount] [stat] [cityFilter] at an increasing price ([amount])</summary>

Example: "May buy [Culture] buildings for [3] [Culture] [in all cities] at an increasing price ([3])"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [baseUnitFilter] units for [nonNegativeAmount] [stat] [cityFilter]</summary>

Example: "May buy [Melee] units for [3] [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [buildingFilter] buildings for [nonNegativeAmount] [stat] [cityFilter]</summary>

Example: "May buy [Culture] buildings for [3] [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [baseUnitFilter] units with [stat] [cityFilter]</summary>

Example: "May buy [Melee] units with [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [buildingFilter] buildings with [stat] [cityFilter]</summary>

Example: "May buy [Culture] buildings with [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [baseUnitFilter] units with [stat] for [nonNegativeAmount] times their normal Production cost</summary>

Example: "May buy [Melee] units with [Culture] for [3] times their normal Production cost"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [buildingFilter] buildings with [stat] for [nonNegativeAmount] times their normal Production cost</summary>

Example: "May buy [Culture] buildings with [Culture] for [3] times their normal Production cost"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stat] cost of purchasing items in cities [relativeAmount]%</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[Culture] cost of purchasing items in cities [+20]%"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stat] cost of purchasing [buildingFilter] buildings [relativeAmount]%</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[Culture] cost of purchasing [Culture] buildings [+20]%"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stat] cost of purchasing [baseUnitFilter] units [relativeAmount]%</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[Culture] cost of purchasing [Melee] units [+20]%"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>Enables conversion of city production to [civWideStat]</summary>

Example: "Enables conversion of city production to [Gold]"

Applicable to: Global

</details>

<details>
<summary>Production to [civWideStat] conversion in cities changed by [relativeAmount]%</summary>

Example: "Production to [Gold] conversion in cities changed by [+20]%"

Applicable to: Global

</details>

<details>
<summary>Improves movement speed on roads</summary>

Applicable to: Global

</details>

<details>
<summary>Roads connect tiles across rivers</summary>

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% maintenance on road & railroads</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% maintenance on road & railroads"

Applicable to: Global

</details>

<details>
<summary>No Maintenance costs for improvements in [tileFilter] tiles</summary>

Example: "No Maintenance costs for improvements in [Farm] tiles"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% construction time for [improvementFilter] improvements</summary>

Example: "[+20]% construction time for [All Road] improvements"

Applicable to: Global, Unit

</details>

<details>
<summary>Can build [improvementFilter] improvements at a [relativeAmount]% rate</summary>

Example: "Can build [All Road] improvements at a [+20]% rate"

Applicable to: Global, Unit

</details>

<details>
<summary>Gain a free [buildingName] [cityFilter]</summary>

Free buildings CANNOT be self-removing - this leads to an endless loop of trying to add the building

Example: "Gain a free [Library] [in all cities]"

Applicable to: Triggerable, Global

</details>

<details>
<summary>[relativeAmount]% maintenance cost for [buildingFilter] buildings [cityFilter]</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% maintenance cost for [Culture] buildings [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>Remove [buildingFilter] [cityFilter]</summary>

Example: "Remove [Culture] [in all cities]"

Applicable to: Triggerable, Global

</details>

<details>
<summary>Sell [buildingFilter] buildings [cityFilter]</summary>

Example: "Sell [Culture] buildings [in all cities]"

Applicable to: Triggerable, Global

</details>

<details>
<summary>[relativeAmount]% Culture cost of natural border growth [cityFilter]</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Culture cost of natural border growth [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Gold cost of acquiring tiles [cityFilter]</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Gold cost of acquiring tiles [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>Each city founded increases culture cost of policies [relativeAmount]% less than normal</summary>

Example: "Each city founded increases culture cost of policies [+20]% less than normal"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Culture cost of adopting new Policies</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Culture cost of adopting new Policies"

Applicable to: Global

</details>

<details>
<summary>Each city founded increases Science cost of Technologies [relativeAmount]% less than normal</summary>

Example: "Each city founded increases Science cost of Technologies [+20]% less than normal"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Science cost of researching new Technologies</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Science cost of researching new Technologies"

Applicable to: Global

</details>

<details>
<summary>[stats] for every known Natural Wonder</summary>

Example: "[+1 Gold, +2 Production] for every known Natural Wonder"

Applicable to: Global

</details>

<details>
<summary>[stats] for discovering a Natural Wonder (bonus enhanced to [stats] if first to discover it)</summary>

Example: "[+1 Gold, +2 Production] for discovering a Natural Wonder (bonus enhanced to [+1 Gold, +2 Production] if first to discover it)"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Great Person generation [cityFilter]</summary>

Example: "[+20]% Great Person generation [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Gold from Great Merchant trade missions</summary>

Example: "[+20]% Gold from Great Merchant trade missions"

Applicable to: Global, Unit

</details>

<details>
<summary>Great General provides double combat bonus</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Receive a free Great Person at the end of every [comment] (every 394 years), after researching [tech]. Each bonus person can only be chosen once.</summary>

Example: "Receive a free Great Person at the end of every [comment] (every 394 years), after researching [Agriculture]. Each bonus person can only be chosen once."

Applicable to: Global

</details>

<details>
<summary>Once The Long Count activates, the year on the world screen displays as the traditional Mayan Long Count.</summary>

Applicable to: Global

</details>

<details>
<summary>[amount] Unit Supply</summary>

Example: "[3] Unit Supply"

Applicable to: Global

</details>

<details>
<summary>[amount] Unit Supply per [positiveAmount] population [cityFilter]</summary>

Example: "[3] Unit Supply per [3] population [in all cities]"

Applicable to: Global

</details>

<details>
<summary>[amount] Unit Supply per city</summary>

Example: "[3] Unit Supply per city"

Applicable to: Global

</details>

<details>
<summary>[amount] units cost no maintenance</summary>

Example: "[3] units cost no maintenance"

Applicable to: Global

</details>

<details>
<summary>Units in cities cost no Maintenance</summary>

Applicable to: Global

</details>

<details>
<summary>Enables embarkation for land units</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Global

</details>

<details>
<summary>Enables [mapUnitFilter] units to enter ocean tiles</summary>

Example: "Enables [Wounded] units to enter ocean tiles"

Applicable to: Global

</details>

<details>
<summary>Land units may cross [terrainName] tiles after the first [baseUnitFilter] is earned</summary>

Example: "Land units may cross [Forest] tiles after the first [Melee] is earned"

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Global

</details>

<details>
<summary>Enemy [mapUnitFilter] units must spend [positiveAmount] extra movement points when inside your territory</summary>

Example: "Enemy [Wounded] units must spend [3] extra movement points when inside your territory"

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Global

</details>

<details>
<summary>New [baseUnitFilter] units start with [amount] XP [cityFilter]</summary>

Example: "New [Melee] units start with [3] XP [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>All newly-trained [baseUnitFilter] units [cityFilter] receive the [promotion] promotion</summary>

Example: "All newly-trained [Melee] units [in all cities] receive the [Shock I] promotion"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[mapUnitFilter] Units adjacent to this city heal [amount] HP per turn when healing</summary>

Example: "[Wounded] Units adjacent to this city heal [3] HP per turn when healing"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% XP required for promotions</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% XP required for promotions"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% City Strength from defensive buildings</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% City Strength from defensive buildings"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Strength for cities</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Strength for cities"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>Provides [amount] [resource]</summary>

Example: "Provides [3] [Iron]"

Applicable to: Global, FollowerBelief, Improvement

</details>

<details>
<summary>[relativeAmount]% [resourceFilter] resource production</summary>

Example: "[+20]% [Strategic] resource production"

Applicable to: Global

</details>

<details>
<summary>Requires establishing embassies to conduct advanced diplomacy</summary>

Applicable to: Global

</details>

<details>
<summary>Enables Open Borders agreements</summary>

Applicable to: Global

</details>

<details>
<summary>Enables Research agreements</summary>

Applicable to: Global

</details>

<details>
<summary>Science gained from research agreements [relativeAmount]%</summary>

Example: "Science gained from research agreements [+20]%"

Applicable to: Global

</details>

<details>
<summary>Enables Defensive Pacts</summary>

Applicable to: Global

</details>

<details>
<summary>When declaring friendship, both parties gain a [relativeAmount]% boost to great person generation</summary>

Example: "When declaring friendship, both parties gain a [+20]% boost to great person generation"

Applicable to: Global

</details>

<details>
<summary>Influence of all other civilizations with all city-states degrades [relativeAmount]% faster</summary>

Example: "Influence of all other civilizations with all city-states degrades [+20]% faster"

Applicable to: Global

</details>

<details>
<summary>Gain [amount] Influence with a [baseUnitFilter] gift to a City-State</summary>

Example: "Gain [3] Influence with a [Melee] gift to a City-State"

Applicable to: Global

</details>

<details>
<summary>Resting point for Influence with City-States following this religion [amount]</summary>

Example: "Resting point for Influence with City-States following this religion [3]"

Applicable to: Global

</details>

<details>
<summary>Notified of new Barbarian encampments</summary>

Applicable to: Global

</details>

<details>
<summary>Receive [relativeAmount]% Gold from Barbarian encampments and pillaging Cities</summary>

Example: "Receive [+20]% Gold from Barbarian encampments and pillaging Cities"

Applicable to: Global

</details>

<details>
<summary>When conquering an encampment, earn [amount] Gold and recruit a Barbarian unit</summary>

Example: "When conquering an encampment, earn [3] Gold and recruit a Barbarian unit"

Applicable to: Global

</details>

<details>
<summary>When defeating a [mapUnitFilter] unit, earn [amount] Gold and recruit it</summary>

Example: "When defeating a [Wounded] unit, earn [3] Gold and recruit it"

Applicable to: Global

</details>

<details>
<summary>May choose [amount] additional [beliefType] beliefs when [foundingOrEnhancing] a religion</summary>

Example: "May choose [3] additional [Follower] beliefs when [founding] a religion"

Applicable to: Global

</details>

<details>
<summary>May choose [amount] additional belief(s) of any type when [foundingOrEnhancing] a religion</summary>

Example: "May choose [3] additional belief(s) of any type when [founding] a religion"

Applicable to: Global

</details>

<details>
<summary>[stats] when a city adopts this religion for the first time</summary>

Example: "[+1 Gold, +2 Production] when a city adopts this religion for the first time"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Natural religion spread [cityFilter]</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Natural religion spread [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>Religion naturally spreads to cities [amount] tiles away</summary>

Example: "Religion naturally spreads to cities [3] tiles away"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May not generate great prophet equivalents naturally</summary>

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Faith cost of generating Great Prophet equivalents</summary>

Example: "[+20]% Faith cost of generating Great Prophet equivalents"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% spy effectiveness [cityFilter]</summary>

Example: "[+20]% spy effectiveness [in all cities]"

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% enemy spy effectiveness [cityFilter]</summary>

Example: "[+20]% enemy spy effectiveness [in all cities]"

Applicable to: Global

</details>

<details>
<summary>New spies start with [amount] level(s)</summary>

Example: "New spies start with [3] level(s)"

Applicable to: Global

</details>

<details>
<summary>Triggers victory</summary>

Applicable to: Global

</details>

<details>
<summary>Triggers a Cultural Victory upon completion</summary>

Applicable to: Global

</details>

<details>
<summary>May buy items in puppet cities</summary>

Applicable to: Global

</details>

<details>
<summary>May not annex cities</summary>

Applicable to: Global

</details>

<details>
<summary>Borrows" city names from other civilizations in the game</summary>

Applicable to: Global

</details>

<details>
<summary>Cities are razed [amount] times as fast</summary>

Example: "Cities are razed [3] times as fast"

Applicable to: Global

</details>

<details>
<summary>Receive a tech boost when scientific buildings/wonders are built in capital</summary>

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Golden Age length</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Golden Age length"

Applicable to: Global

</details>

<details>
<summary>Population loss from nuclear attacks [relativeAmount]% [cityFilter]</summary>

Example: "Population loss from nuclear attacks [+20]% [in all cities]"

Applicable to: Global

</details>

<details>
<summary>Damage to garrison from nuclear attacks [relativeAmount]% [cityFilter]</summary>

Example: "Damage to garrison from nuclear attacks [+20]% [in all cities]"

Applicable to: Global

</details>

<details>
<summary>Rebel units may spawn</summary>

Applicable to: Global

</details>

<details>
<summary>[relativeAmount]% Strength</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Strength"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount] Strength</summary>

Example: "[+20] Strength"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Strength decreasing with distance from the capital</summary>

Example: "[+20]% Strength decreasing with distance from the capital"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% to Flank Attack bonuses</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% to Flank Attack bonuses"

Applicable to: Global, Unit

</details>

<details>
<summary>[amount] additional attacks per turn</summary>

Example: "[3] additional attacks per turn"

Applicable to: Global, Unit

</details>

<details>
<summary>[amount] Movement</summary>

Example: "[3] Movement"

Applicable to: Global, Unit

</details>

<details>
<summary>[amount] Sight</summary>

Example: "[3] Sight"

Applicable to: Global, Unit, Terrain, Improvement

</details>

<details>
<summary>[amount] Range</summary>

Example: "[3] Range"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount] Air Interception Range</summary>

Example: "[+20] Air Interception Range"

Applicable to: Global, Unit

</details>

<details>
<summary>[amount] HP when healing</summary>

Example: "[3] HP when healing"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Spread Religion Strength</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Spread Religion Strength"

Applicable to: Global, Unit

</details>

<details>
<summary>When spreading religion to a city, gain [amount] times the amount of followers of other religions as [stat]</summary>

Example: "When spreading religion to a city, gain [3] times the amount of followers of other religions as [Culture]"

Applicable to: Global, Unit

</details>

<details>
<summary>Ranged attacks may be performed over obstacles</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>No defensive terrain bonus</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>No defensive terrain penalty</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>No damage penalty for wounded units</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Unable to capture cities</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Unable to pillage tiles</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>No movement cost to pillage</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>May heal outside of friendly territory</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>All healing effects doubled</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Heals [amount] damage if it kills a unit</summary>

Example: "Heals [3] damage if it kills a unit"

Applicable to: Global, Unit

</details>

<details>
<summary>Can only heal by pillaging</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% maintenance costs</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% maintenance costs"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Gold cost of upgrading</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Gold cost of upgrading"

Applicable to: Global, Unit

</details>

<details>
<summary>Earn [amount]% of the damage done to [combatantFilter] units as [stockpile]</summary>

Example: "Earn [3]% of the damage done to [City] units as [Mana]"

Applicable to: Global, Unit

</details>

<details>
<summary>Upon capturing a city, receive [amount] times its [stat] production as [stockpile] immediately</summary>

Example: "Upon capturing a city, receive [3] times its [Culture] production as [Mana] immediately"

Applicable to: Global, Unit

</details>

<details>
<summary>Earn [amount]% of killed [mapUnitFilter] unit's [costOrStrength] as [stockpile]</summary>

Example: "Earn [3]% of killed [Wounded] unit's [Cost] as [Mana]"

Applicable to: Global, Unit

</details>

<details>
<summary>[amount] XP gained from combat</summary>

Example: "[3] XP gained from combat"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% XP gained from combat</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% XP gained from combat"

Applicable to: Global, Unit

</details>

<details>
<summary>[greatPerson] is earned [relativeAmount]% faster</summary>

Example: "[Great General] is earned [+20]% faster"

Applicable to: Global, Unit

</details>

<details>
<summary>[nonNegativeAmount] Movement point cost to disembark</summary>

Example: "[3] Movement point cost to disembark"

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Global, Unit

</details>

<details>
<summary>[nonNegativeAmount] Movement point cost to embark</summary>

Example: "[3] Movement point cost to embark"

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Global, Unit

</details>

## 文明 Uniques
<details>
<summary>Starts with [tech]</summary>

Example: "Starts with [Agriculture]"

Applicable to: Nation

</details>

<details>
<summary>Starts with [policy] adopted</summary>

Example: "Starts with [Oligarchy] adopted"

Applicable to: Nation

</details>

<details>
<summary>All units move through Forest and Jungle Tiles in friendly territory as if they have roads. These tiles can be used to establish City Connections upon researching the Wheel.</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Nation

</details>

<details>
<summary>Units ignore terrain costs when moving into any tile with Hills</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Nation

</details>

<details>
<summary>Excluded from map editor</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Terrain, Improvement, Resource

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Will not be chosen for new games</summary>

Applicable to: Nation

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 性格 Uniques
<details>
<summary>Will not build [baseUnitFilter/buildingFilter]</summary>

Example: "Will not build [Melee]"

Applicable to: Personality

</details>

## 时代 Uniques
<details>
<summary>Starting in this era disables religion</summary>

Applicable to: Era

</details>

<details>
<summary>Every major Civilization gains a spy once a civilization enters this era</summary>

Applicable to: Era

</details>

## 科技 Uniques
<details>
<summary>Enables establishment of embassies</summary>

Applicable to: Tech

</details>

<details>
<summary>Starting tech</summary>

Applicable to: Tech

</details>

<details>
<summary>Can be continually researched</summary>

Applicable to: Tech

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

Applicable to: Tech, Policy, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Cannot be hurried</summary>

Applicable to: Tech, Building

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

Example: "[+20]% weight to this choice for AI decisions"

This unique is automatically hidden from users.

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Promotion, EventChoice

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 政策 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

Applicable to: Tech, Policy, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

Example: "[+20]% weight to this choice for AI decisions"

This unique is automatically hidden from users.

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Promotion, EventChoice

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 创立者信仰 Uniques

<details>
<summary>说明</summary>

Uniques for Founder and Enhancer type Beliefs, that will apply to the founder of this religion

</details>

<details>
<summary>[stats] for each global city following this religion</summary>

Example: "[+1 Gold, +2 Production] for each global city following this religion"

Applicable to: FounderBelief

</details>

<details>
<summary>[stats] from every [positiveAmount] global followers [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] from every [3] global followers [in all cities]"

Applicable to: FounderBelief

</details>

<details>
<summary>[relativeAmount]% [stat] from every follower, up to [relativeAmount]%</summary>

Example: "[+20]% [Culture] from every follower, up to [+20]%"

Applicable to: FounderBelief, FollowerBelief

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

Example: "[+20]% weight to this choice for AI decisions"

This unique is automatically hidden from users.

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Promotion, EventChoice

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 追随者信仰 Uniques

<details>
<summary>说明</summary>

Uniques for Pantheon and Follower type beliefs, that will apply to each city where the religion is the majority religion

</details>

<details>
<summary>[stats] [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from every specialist [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] from every specialist [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] per [positiveAmount] population [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] per [3] population [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] in cities on [terrainFilter] tiles</summary>

Example: "[+1 Gold, +2 Production] in cities on [Fresh Water] tiles"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from all [buildingFilter] buildings</summary>

Example: "[+1 Gold, +2 Production] from all [Culture] buildings"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from [tileFilter] tiles [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] from [Farm] tiles [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from [tileFilter] tiles without [tileFilter] [cityFilter]</summary>

Example: "[+1 Gold, +2 Production] from [Farm] tiles without [Farm] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from every [tileFilter/specialist/buildingFilter]</summary>

Example: "[+1 Gold, +2 Production] from every [Farm]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stats] from each Trade Route</summary>

Example: "[+1 Gold, +2 Production] from each Trade Route"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% [stat]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% [Culture]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% [stat] [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% [stat] from every [tileFilter/buildingFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% [Culture] from every [Farm]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Yield from every [tileFilter/buildingFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Yield from every [Farm]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% [stat] from every follower, up to [relativeAmount]%</summary>

Example: "[+20]% [Culture] from every follower, up to [+20]%"

Applicable to: FounderBelief, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Production when constructing [buildingFilter] buildings [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Production when constructing [Culture] buildings [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Production when constructing [baseUnitFilter] units [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Production when constructing [Melee] units [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Production when constructing [buildingFilter] wonders [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Production when constructing [Culture] wonders [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Production towards any buildings that already exist in the Capital</summary>

Example: "[+20]% Production towards any buildings that already exist in the Capital"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% growth [cityFilter]</summary>

Example: "[+20]% growth [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[amount]% Food is carried over after population increases [cityFilter]</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[3]% Food is carried over after population increases [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Food consumption by [populationFilter] [cityFilter]</summary>

Example: "[+20]% Food consumption by [Followers of this Religion] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Unhappiness from [populationFilter] [cityFilter]</summary>

Example: "[+20]% Unhappiness from [Followers of this Religion] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [baseUnitFilter] units for [nonNegativeAmount] [stat] [cityFilter] at an increasing price ([amount])</summary>

Example: "May buy [Melee] units for [3] [Culture] [in all cities] at an increasing price ([3])"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [buildingFilter] buildings for [nonNegativeAmount] [stat] [cityFilter] at an increasing price ([amount])</summary>

Example: "May buy [Culture] buildings for [3] [Culture] [in all cities] at an increasing price ([3])"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [baseUnitFilter] units for [nonNegativeAmount] [stat] [cityFilter]</summary>

Example: "May buy [Melee] units for [3] [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [buildingFilter] buildings for [nonNegativeAmount] [stat] [cityFilter]</summary>

Example: "May buy [Culture] buildings for [3] [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [baseUnitFilter] units with [stat] [cityFilter]</summary>

Example: "May buy [Melee] units with [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [buildingFilter] buildings with [stat] [cityFilter]</summary>

Example: "May buy [Culture] buildings with [Culture] [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [baseUnitFilter] units with [stat] for [nonNegativeAmount] times their normal Production cost</summary>

Example: "May buy [Melee] units with [Culture] for [3] times their normal Production cost"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>May buy [buildingFilter] buildings with [stat] for [nonNegativeAmount] times their normal Production cost</summary>

Example: "May buy [Culture] buildings with [Culture] for [3] times their normal Production cost"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stat] cost of purchasing items in cities [relativeAmount]%</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[Culture] cost of purchasing items in cities [+20]%"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stat] cost of purchasing [buildingFilter] buildings [relativeAmount]%</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[Culture] cost of purchasing [Culture] buildings [+20]%"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[stat] cost of purchasing [baseUnitFilter] units [relativeAmount]%</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[Culture] cost of purchasing [Melee] units [+20]%"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% maintenance cost for [buildingFilter] buildings [cityFilter]</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% maintenance cost for [Culture] buildings [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Culture cost of natural border growth [cityFilter]</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Culture cost of natural border growth [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Gold cost of acquiring tiles [cityFilter]</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Gold cost of acquiring tiles [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Great Person generation [cityFilter]</summary>

Example: "[+20]% Great Person generation [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>New [baseUnitFilter] units start with [amount] XP [cityFilter]</summary>

Example: "New [Melee] units start with [3] XP [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>All newly-trained [baseUnitFilter] units [cityFilter] receive the [promotion] promotion</summary>

Example: "All newly-trained [Melee] units [in all cities] receive the [Shock I] promotion"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[mapUnitFilter] Units adjacent to this city heal [amount] HP per turn when healing</summary>

Example: "[Wounded] Units adjacent to this city heal [3] HP per turn when healing"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>[relativeAmount]% Strength for cities</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Strength for cities"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>Provides [amount] [resource]</summary>

Example: "Provides [3] [Iron]"

Applicable to: Global, FollowerBelief, Improvement

</details>

<details>
<summary>[relativeAmount]% Natural religion spread [cityFilter]</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Natural religion spread [in all cities]"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>Religion naturally spreads to cities [amount] tiles away</summary>

Example: "Religion naturally spreads to cities [3] tiles away"

Applicable to: Global, FollowerBelief

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Earn [amount]% of [mapUnitFilter] unit's [costOrStrength] as [stockpile] when killed within 4 tiles of a city following this religion</summary>

Example: "Earn [3]% of [Wounded] unit's [Cost] as [Mana] when killed within 4 tiles of a city following this religion"

Applicable to: FollowerBelief

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

Example: "[+20]% weight to this choice for AI decisions"

This unique is automatically hidden from users.

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Promotion, EventChoice

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 建筑 Uniques
<details>
<summary>[positiveAmount]% of [stat] from every [improvementFilter/buildingFilter] in the city added to [resource]</summary>

Example: "[3]% of [Culture] from every [All Road] in the city added to [Iron]"

Applicable to: Building

</details>

<details>
<summary>Consumes [amount] [resource]</summary>

Example: "Consumes [3] [Iron]"

Applicable to: Building, Unit, Improvement

</details>

<details>
<summary>Costs [amount] [stockpiledResource]</summary>

These resources are removed *when work begins* on the construction. Do not confuse with "costs [amount] [stockpiledResource]" (lowercase 'c'), the Unit Action Modifier.

Example: "Costs [3] [Mana]"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Building, Unit, Improvement

</details>

<details>
<summary>Unbuildable</summary>

Blocks from being built, possibly by conditional. However it can still appear in the menu and be bought with other means such as Gold or Faith

Applicable to: Building, Unit, Improvement

</details>

<details>
<summary>Cannot be purchased</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Can be purchased with [stat] [cityFilter]</summary>

Example: "Can be purchased with [Culture] [in all cities]"

Applicable to: Building, Unit

</details>

<details>
<summary>Can be purchased for [amount] [stat] [cityFilter]</summary>

Example: "Can be purchased for [3] [Culture] [in all cities]"

Applicable to: Building, Unit

</details>

<details>
<summary>Limited to [amount] per Civilization</summary>

Example: "Limited to [3] per Civilization"

Applicable to: Building, Unit

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

Applicable to: Tech, Policy, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Excess Food converted to Production when under construction</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Requires at least [amount] population</summary>

Example: "Requires at least [3] population"

Applicable to: Building, Unit

</details>

<details>
<summary>Triggers a global alert upon build start</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Triggers a global alert upon completion</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Cost increases by [amount] per owned city</summary>

Example: "Cost increases by [3] per owned city"

Applicable to: Building, Unit

</details>

<details>
<summary>Cost increases by [amount] when built</summary>

Example: "Cost increases by [3] when built"

Applicable to: Building, Unit

</details>

<details>
<summary>[amount]% production cost</summary>

Intended to be used with conditionals to dynamically alter construction costs. Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[3]% production cost"

Applicable to: Building, Unit

</details>

<details>
<summary>Can only be built</summary>

Meant to be used together with conditionals, like "Can only be built &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also NOT block Upgrade and Transform actions. See also OnlyAvailable.

Applicable to: Building, Unit

</details>

<details>
<summary>Must have an owned [tileFilter] within [amount] tiles</summary>

Example: "Must have an owned [Farm] within [3] tiles"

Applicable to: Building

</details>

<details>
<summary>Enables nuclear weapon</summary>

Applicable to: Building

</details>

<details>
<summary>Must be on [tileFilter]</summary>

Example: "Must be on [Farm]"

Applicable to: Building

</details>

<details>
<summary>Must not be on [tileFilter]</summary>

Example: "Must not be on [Farm]"

Applicable to: Building

</details>

<details>
<summary>Must be next to [tileFilter]</summary>

Example: "Must be next to [Farm]"

Applicable to: Building, Improvement

</details>

<details>
<summary>Must not be next to [tileFilter]</summary>

Example: "Must not be next to [Farm]"

Applicable to: Building

</details>

<details>
<summary>Unsellable</summary>

Applicable to: Building

</details>

<details>
<summary>Obsolete with [tech]</summary>

Example: "Obsolete with [Agriculture]"

Applicable to: Building, Improvement, Resource

</details>

<details>
<summary>Indicates the capital city</summary>

Applicable to: Building

</details>

<details>
<summary>Moves to new capital when capital changes</summary>

Applicable to: Building

</details>

<details>
<summary>Provides 1 extra copy of each improved luxury resource near this City</summary>

Applicable to: Building

</details>

<details>
<summary>Destroyed when the city is captured</summary>

Applicable to: Building

</details>

<details>
<summary>Never destroyed when the city is captured</summary>

Applicable to: Building

</details>

<details>
<summary>[relativeAmount]% Gold given to enemy if city is captured</summary>

Example: "[+20]% Gold given to enemy if city is captured"

Applicable to: Building

</details>

<details>
<summary>Removes extra unhappiness from annexed cities</summary>

Applicable to: Building

</details>

<details>
<summary>Connects trade routes over water</summary>

Applicable to: Building

</details>

<details>
<summary>Automatically built in all cities where it is buildable</summary>

Applicable to: Building

</details>

<details>
<summary>Creates a [improvementName] improvement on a specific tile</summary>

When choosing to construct this building, the player must select a tile where the improvement can be built. Upon building completion, the tile will gain this improvement. Limited to one per building.

Example: "Creates a [Trading Post] improvement on a specific tile"

This unique does not support conditionals.

Applicable to: Building

</details>

<details>
<summary>Can carry [amount] extra [mapUnitFilter] units</summary>

For buildings, supports using `Air` for `mapUnitFilter` to increase city air unit capacity.

Example: "Can carry [3] extra [Wounded] units"

Applicable to: Building, Unit

</details>

<details>
<summary>Spaceship part</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Cannot be hurried</summary>

Applicable to: Tech, Building

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

Example: "[+20]% weight to this choice for AI decisions"

This unique is automatically hidden from users.

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Promotion, EventChoice

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Shown while unbuilable</summary>

This unique is automatically hidden from users.

Applicable to: Building, Unit

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 单位行动 Uniques

<details>
<summary>说明</summary>

Uniques that affect a unit's actions, and can be modified by UnitActionModifiers

</details>

<details>
<summary>Founds a new city</summary>

Applicable to: UnitAction

</details>

<details>
<summary>Founds a new puppet city</summary>

Applicable to: UnitAction

</details>

<details>
<summary>Can instantly construct a [improvementFilter] improvement</summary>

Example: "Can instantly construct a [All Road] improvement"

Applicable to: UnitAction

</details>

<details>
<summary>Can Spread Religion</summary>

Applicable to: UnitAction

</details>

<details>
<summary>Can remove other religions from cities</summary>

Applicable to: UnitAction

</details>

<details>
<summary>May found a religion</summary>

Applicable to: UnitAction

</details>

<details>
<summary>May enhance a religion</summary>

Applicable to: UnitAction

</details>

<details>
<summary>Can transform to [unit]</summary>

By default consumes all movement

Example: "Can transform to [Musketman]"

Applicable to: UnitAction

</details>

## 单位 Uniques

<details>
<summary>说明</summary>

Uniques that can be added to units, unit types, or promotions

</details>

<details>
<summary>[relativeAmount]% Yield from pillaging tiles</summary>

Example: "[+20]% Yield from pillaging tiles"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Health from pillaging tiles</summary>

Example: "[+20]% Health from pillaging tiles"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% construction time for [improvementFilter] improvements</summary>

Example: "[+20]% construction time for [All Road] improvements"

Applicable to: Global, Unit

</details>

<details>
<summary>Can build [improvementFilter] improvements at a [relativeAmount]% rate</summary>

Example: "Can build [All Road] improvements at a [+20]% rate"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Gold from Great Merchant trade missions</summary>

Example: "[+20]% Gold from Great Merchant trade missions"

Applicable to: Global, Unit

</details>

<details>
<summary>Great General provides double combat bonus</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Consumes [amount] [resource]</summary>

Example: "Consumes [3] [Iron]"

Applicable to: Building, Unit, Improvement

</details>

<details>
<summary>Costs [amount] [stockpiledResource]</summary>

These resources are removed *when work begins* on the construction. Do not confuse with "costs [amount] [stockpiledResource]" (lowercase 'c'), the Unit Action Modifier.

Example: "Costs [3] [Mana]"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Building, Unit, Improvement

</details>

<details>
<summary>Unbuildable</summary>

Blocks from being built, possibly by conditional. However it can still appear in the menu and be bought with other means such as Gold or Faith

Applicable to: Building, Unit, Improvement

</details>

<details>
<summary>Cannot be purchased</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Can be purchased with [stat] [cityFilter]</summary>

Example: "Can be purchased with [Culture] [in all cities]"

Applicable to: Building, Unit

</details>

<details>
<summary>Can be purchased for [amount] [stat] [cityFilter]</summary>

Example: "Can be purchased for [3] [Culture] [in all cities]"

Applicable to: Building, Unit

</details>

<details>
<summary>Limited to [amount] per Civilization</summary>

Example: "Limited to [3] per Civilization"

Applicable to: Building, Unit

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

Applicable to: Tech, Policy, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Excess Food converted to Production when under construction</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Requires at least [amount] population</summary>

Example: "Requires at least [3] population"

Applicable to: Building, Unit

</details>

<details>
<summary>Triggers a global alert upon build start</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Triggers a global alert upon completion</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Cost increases by [amount] per owned city</summary>

Example: "Cost increases by [3] per owned city"

Applicable to: Building, Unit

</details>

<details>
<summary>Cost increases by [amount] when built</summary>

Example: "Cost increases by [3] when built"

Applicable to: Building, Unit

</details>

<details>
<summary>[amount]% production cost</summary>

Intended to be used with conditionals to dynamically alter construction costs. Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[3]% production cost"

Applicable to: Building, Unit

</details>

<details>
<summary>Can only be built</summary>

Meant to be used together with conditionals, like "Can only be built &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also NOT block Upgrade and Transform actions. See also OnlyAvailable.

Applicable to: Building, Unit

</details>

<details>
<summary>May create improvements on water resources</summary>

Applicable to: Unit

</details>

<details>
<summary>Can build [improvementFilter/terrainFilter] improvements on tiles</summary>

Example: "Can build [All Road] improvements on tiles"

Applicable to: Unit

</details>

<details>
<summary>Can be added to [comment] in the Capital</summary>

Example: "Can be added to [comment] in the Capital"

Applicable to: Unit

</details>

<details>
<summary>Prevents spreading of religion to the city it is next to</summary>

Applicable to: Unit

</details>

<details>
<summary>Removes other religions when spreading religion</summary>

Applicable to: Unit

</details>

<details>
<summary>May Paradrop to [tileFilter] tiles up to [positiveAmount] tiles away</summary>

Example: "May Paradrop to [Farm] tiles up to [3] tiles away"

Applicable to: Unit

</details>

<details>
<summary>Can perform Air Sweep</summary>

Applicable to: Unit

</details>

<details>
<summary>Can speed up construction of a building</summary>

Applicable to: Unit

</details>

<details>
<summary>Can speed up the construction of a wonder</summary>

Applicable to: Unit

</details>

<details>
<summary>Can hurry technology research</summary>

Applicable to: Unit

</details>

<details>
<summary>Can generate a large amount of culture</summary>

Applicable to: Unit

</details>

<details>
<summary>Can undertake a trade mission with City-State, giving a large sum of gold and [amount] Influence</summary>

Example: "Can undertake a trade mission with City-State, giving a large sum of gold and [3] Influence"

Applicable to: Unit

</details>

<details>
<summary>Automation is a primary action</summary>

This unique is automatically hidden from users.

Applicable to: Unit

</details>

<details>
<summary>[relativeAmount]% Strength</summary>

Multiple bonuses stack additively: +50% + +50% = +100%

Example: "[+20]% Strength"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount] Strength</summary>

Example: "[+20] Strength"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Strength decreasing with distance from the capital</summary>

Example: "[+20]% Strength decreasing with distance from the capital"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% to Flank Attack bonuses</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% to Flank Attack bonuses"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Strength for enemy [mapUnitFilter] units in adjacent [tileFilter] tiles</summary>

Example: "[+20]% Strength for enemy [Wounded] units in adjacent [Farm] tiles"

Applicable to: Unit

</details>

<details>
<summary>[relativeAmount]% Strength bonus for [mapUnitFilter] units within [amount] tiles</summary>

Example: "[+20]% Strength bonus for [Wounded] units within [3] tiles"

Applicable to: Unit

</details>

<details>
<summary>[amount] additional attacks per turn</summary>

Example: "[3] additional attacks per turn"

Applicable to: Global, Unit

</details>

<details>
<summary>[amount] Movement</summary>

Example: "[3] Movement"

Applicable to: Global, Unit

</details>

<details>
<summary>[amount] Sight</summary>

Example: "[3] Sight"

Applicable to: Global, Unit, Terrain, Improvement

</details>

<details>
<summary>[amount] Range</summary>

Example: "[3] Range"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount] Air Interception Range</summary>

Example: "[+20] Air Interception Range"

Applicable to: Global, Unit

</details>

<details>
<summary>[amount] HP when healing</summary>

Example: "[3] HP when healing"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Spread Religion Strength</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Spread Religion Strength"

Applicable to: Global, Unit

</details>

<details>
<summary>When spreading religion to a city, gain [amount] times the amount of followers of other religions as [stat]</summary>

Example: "When spreading religion to a city, gain [3] times the amount of followers of other religions as [Culture]"

Applicable to: Global, Unit

</details>

<details>
<summary>Can only attack [combatantFilter] units</summary>

Example: "Can only attack [City] units"

Applicable to: Unit

</details>

<details>
<summary>Can only attack [tileFilter] tiles</summary>

Example: "Can only attack [Farm] tiles"

Applicable to: Unit

</details>

<details>
<summary>Cannot attack</summary>

Applicable to: Unit

</details>

<details>
<summary>Must set up to ranged attack</summary>

Applicable to: Unit

</details>

<details>
<summary>Self-destructs when attacking</summary>

Applicable to: Unit

</details>

<details>
<summary>Eliminates combat penalty for attacking across a coast</summary>

Applicable to: Unit

</details>

<details>
<summary>May attack when embarked</summary>

Applicable to: Unit

</details>

<details>
<summary>Eliminates combat penalty for attacking over a river</summary>

Applicable to: Unit

</details>

<details>
<summary>Blast radius [amount]</summary>

Example: "Blast radius [3]"

Applicable to: Unit

</details>

<details>
<summary>Ranged attacks may be performed over obstacles</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Nuclear weapon of Strength [amount]</summary>

Example: "Nuclear weapon of Strength [3]"

Applicable to: Unit

</details>

<details>
<summary>No defensive terrain bonus</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>No defensive terrain penalty</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>No damage penalty for wounded units</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Uncapturable</summary>

Applicable to: Unit

</details>

<details>
<summary>Withdraws before melee combat</summary>

Applicable to: Unit

</details>

<details>
<summary>Unable to capture cities</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Unable to pillage tiles</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Destroys [cityFilter] cities instead of capturing</summary>

The unit will destroy [cityFilter] cities instead of capturing them, also allows non-melee units to destroy cities.Capital cities (including city states) are immune to this effect.

Example: "Destroys [in all cities] cities instead of capturing"

Applicable to: Unit

</details>

<details>
<summary>No movement cost to pillage</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Can move after attacking</summary>

Applicable to: Unit

</details>

<details>
<summary>Transfer Movement to [mapUnitFilter]</summary>

Example: "Transfer Movement to [Wounded]"

Applicable to: Unit

</details>

<details>
<summary>Can move immediately once bought</summary>

Applicable to: Unit

</details>

<details>
<summary>May heal outside of friendly territory</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>All healing effects doubled</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Heals [amount] damage if it kills a unit</summary>

Example: "Heals [3] damage if it kills a unit"

Applicable to: Global, Unit

</details>

<details>
<summary>Can only heal by pillaging</summary>

Applicable to: Global, Unit

</details>

<details>
<summary>Unit will heal every turn, even if it performs an action</summary>

Applicable to: Unit

</details>

<details>
<summary>All adjacent units heal [amount] HP when healing</summary>

Example: "All adjacent units heal [3] HP when healing"

Applicable to: Unit

</details>

<details>
<summary>No Sight</summary>

Applicable to: Unit

</details>

<details>
<summary>Can see over obstacles</summary>

Applicable to: Unit

</details>

<details>
<summary>Can carry [amount] [mapUnitFilter] units</summary>

Example: "Can carry [3] [Wounded] units"

Applicable to: Unit

</details>

<details>
<summary>Can carry [amount] extra [mapUnitFilter] units</summary>

For buildings, supports using `Air` for `mapUnitFilter` to increase city air unit capacity.

Example: "Can carry [3] extra [Wounded] units"

Applicable to: Building, Unit

</details>

<details>
<summary>Cannot be carried by [mapUnitFilter] units</summary>

Example: "Cannot be carried by [Wounded] units"

Applicable to: Unit

</details>

<details>
<summary>[relativeAmount]% chance to intercept air attacks</summary>

Example: "[+20]% chance to intercept air attacks"

Applicable to: Unit

</details>

<details>
<summary>Damage taken from interception reduced by [relativeAmount]%</summary>

Example: "Damage taken from interception reduced by [+20]%"

Applicable to: Unit

</details>

<details>
<summary>[relativeAmount]% Damage when intercepting</summary>

Example: "[+20]% Damage when intercepting"

Applicable to: Unit

</details>

<details>
<summary>[amount] extra interceptions may be made per turn</summary>

Example: "[3] extra interceptions may be made per turn"

Applicable to: Unit

</details>

<details>
<summary>Cannot be intercepted</summary>

Applicable to: Unit

</details>

<details>
<summary>Cannot intercept [mapUnitFilter] units</summary>

Example: "Cannot intercept [Wounded] units"

Applicable to: Unit

</details>

<details>
<summary>[relativeAmount]% Strength when performing Air Sweep</summary>

Example: "[+20]% Strength when performing Air Sweep"

Applicable to: Unit

</details>

<details>
<summary>[relativeAmount]% maintenance costs</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% maintenance costs"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% Gold cost of upgrading</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% Gold cost of upgrading"

Applicable to: Global, Unit

</details>

<details>
<summary>Earn [amount]% of the damage done to [combatantFilter] units as [stockpile]</summary>

Example: "Earn [3]% of the damage done to [City] units as [Mana]"

Applicable to: Global, Unit

</details>

<details>
<summary>Upon capturing a city, receive [amount] times its [stat] production as [stockpile] immediately</summary>

Example: "Upon capturing a city, receive [3] times its [Culture] production as [Mana] immediately"

Applicable to: Global, Unit

</details>

<details>
<summary>Earn [amount]% of killed [mapUnitFilter] unit's [costOrStrength] as [stockpile]</summary>

Example: "Earn [3]% of killed [Wounded] unit's [Cost] as [Mana]"

Applicable to: Global, Unit

</details>

<details>
<summary>May capture killed [mapUnitFilter] units</summary>

Example: "May capture killed [Wounded] units"

Applicable to: Unit

</details>

<details>
<summary>[amount] XP gained from combat</summary>

Example: "[3] XP gained from combat"

Applicable to: Global, Unit

</details>

<details>
<summary>[relativeAmount]% XP gained from combat</summary>

Multiple bonuses stack multiplicatively: +50% + +50% = x1.5 * x1.5 = +125%

Example: "[+20]% XP gained from combat"

Applicable to: Global, Unit

</details>

<details>
<summary>Can be earned through combat</summary>

Applicable to: Unit

</details>

<details>
<summary>[greatPerson] is earned [relativeAmount]% faster</summary>

Example: "[Great General] is earned [+20]% faster"

Applicable to: Global, Unit

</details>

<details>
<summary>Invisible to others</summary>

Applicable to: Unit

</details>

<details>
<summary>Invisible to non-adjacent units</summary>

Applicable to: Unit

</details>

<details>
<summary>Can see invisible [mapUnitFilter] units</summary>

Example: "Can see invisible [Wounded] units"

Applicable to: Unit

</details>

<details>
<summary>May upgrade to [unit] through ruins-like effects</summary>

Example: "May upgrade to [Musketman] through ruins-like effects"

Applicable to: Unit

</details>

<details>
<summary>Can upgrade to [unit]</summary>

Example: "Can upgrade to [Musketman]"

Applicable to: Unit

</details>

<details>
<summary>Destroys tile improvements when attacking</summary>

Applicable to: Unit

</details>

<details>
<summary>Cannot move</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>Double movement in [terrainFilter]</summary>

Example: "Double movement in [Fresh Water]"

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>All tiles cost 1 movement</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>May travel on Water tiles without embarking</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>Can pass through impassable tiles</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>Ignores terrain cost</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>Ignores Zone of Control</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>Rough terrain penalty</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>Can enter ice tiles</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>Cannot embark</summary>

Applicable to: Unit

</details>

<details>
<summary>Cannot enter ocean tiles</summary>

Applicable to: Unit

</details>

<details>
<summary>May enter foreign tiles without open borders</summary>

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>May enter foreign tiles without open borders, but loses [amount] religious strength each turn it ends there</summary>

Example: "May enter foreign tiles without open borders, but loses [3] religious strength each turn it ends there"

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Unit

</details>

<details>
<summary>[nonNegativeAmount] Movement point cost to disembark</summary>

Example: "[3] Movement point cost to disembark"

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Global, Unit

</details>

<details>
<summary>[nonNegativeAmount] Movement point cost to embark</summary>

Example: "[3] Movement point cost to embark"

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

Applicable to: Global, Unit

</details>

<details>
<summary>Never appears as a Barbarian unit</summary>

This unique is automatically hidden from users.

Applicable to: Unit

</details>

<details>
<summary>Religious Unit</summary>

Applicable to: Unit

</details>

<details>
<summary>Spaceship part</summary>

Applicable to: Building, Unit

</details>

<details>
<summary>Takes your religion over the one in their birth city</summary>

Applicable to: Unit

</details>

<details>
<summary>Great Person - [comment]</summary>

Example: "Great Person - [comment]"

Applicable to: Unit

</details>

<details>
<summary>Is part of Great Person group [comment]</summary>

Great people in the same group increase teach other's costs when gained. Gaining one will make all others in the same group cost more GPP.

Example: "Is part of Great Person group [comment]"

Applicable to: Unit

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Shown while unbuilable</summary>

This unique is automatically hidden from users.

Applicable to: Building, Unit

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 单位类型 Uniques
<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 晋升 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

Applicable to: Tech, Policy, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Not shown on world screen</summary>

This unique is automatically hidden from users.

Applicable to: Promotion, Resource

</details>

<details>
<summary>Doing so will consume this opportunity to choose a Promotion</summary>

Applicable to: Promotion

</details>

<details>
<summary>This Promotion is free</summary>

Applicable to: Promotion

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

Example: "[+20]% weight to this choice for AI decisions"

This unique is automatically hidden from users.

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Promotion, EventChoice

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 地形 Uniques
<details>
<summary>[stats]</summary>

Example: "[+1 Gold, +2 Production]"

Applicable to: Global, Terrain, Improvement

</details>

<details>
<summary>[amount] Sight</summary>

Example: "[3] Sight"

Applicable to: Global, Unit, Terrain, Improvement

</details>

<details>
<summary>Must be adjacent to [amount] [simpleTerrain] tiles</summary>

Example: "Must be adjacent to [3] [Elevated] tiles"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Must be adjacent to [amount] to [amount] [simpleTerrain] tiles</summary>

Example: "Must be adjacent to [3] to [3] [Elevated] tiles"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Must not be on [amount] largest landmasses</summary>

Example: "Must not be on [3] largest landmasses"

This unique is automatically hidden from users.

Applicable to: Terrain, Resource

</details>

<details>
<summary>Must be on [amount] largest landmasses</summary>

Example: "Must be on [3] largest landmasses"

This unique is automatically hidden from users.

Applicable to: Terrain, Resource

</details>

<details>
<summary>Occurs on latitudes from [amount] to [amount] percent of distance equator to pole</summary>

Example: "Occurs on latitudes from [3] to [3] percent of distance equator to pole"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Occurs in groups of [amount] to [amount] tiles</summary>

Example: "Occurs in groups of [3] to [3] tiles"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Neighboring tiles will convert to [baseTerrain/terrainFeature]</summary>

Supports conditionals that need only a Tile as context and nothing else, like `<with [n]% chance>`, and applies them per neighbor.

If your mod renames Coast or Lakes, do not use this with one of these as parameter, as the code preventing artifacts won't work.

Example: "Neighboring tiles will convert to [Grassland]"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Grants [stats] to the first civilization to discover it</summary>

Example: "Grants [+1 Gold, +2 Production] to the first civilization to discover it"

Applicable to: Terrain

</details>

<details>
<summary>Units ending their turn on this terrain take [amount] damage</summary>

Example: "Units ending their turn on this terrain take [3] damage"

Due to performance considerations, this unique is cached, thus conditionals that may change within a turn may not work.

This unique does not support conditionals.

Applicable to: Terrain

</details>

<details>
<summary>Grants [promotion] ([comment]) to adjacent [mapUnitFilter] units for the rest of the game</summary>

Example: "Grants [Shock I] ([comment]) to adjacent [Wounded] units for the rest of the game"

Applicable to: Terrain

</details>

<details>
<summary>[amount] Strength for cities built on this terrain</summary>

Example: "[3] Strength for cities built on this terrain"

Applicable to: Terrain

</details>

<details>
<summary>Provides a one-time bonus of [stats] to the closest city when cut down</summary>

Example: "Provides a one-time bonus of [+1 Gold, +2 Production] to the closest city when cut down"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

This unique's effect can be modified with &lt;(modified by game progress up to [relativeAmount]%)&gt;

Applicable to: Terrain

</details>

<details>
<summary>Vegetation</summary>

This unique is automatically hidden from users.

Applicable to: Terrain, Improvement

</details>

<details>
<summary>Tile provides yield without assigned population</summary>

Applicable to: Terrain, Improvement

</details>

<details>
<summary>Nullifies all other stats this tile provides</summary>

Applicable to: Terrain

</details>

<details>
<summary>Only [improvementFilter] improvements may be built on this tile</summary>

Example: "Only [All Road] improvements may be built on this tile"

Applicable to: Terrain

</details>

<details>
<summary>Blocks line-of-sight from tiles at same elevation</summary>

Applicable to: Terrain

</details>

<details>
<summary>Has an elevation of [amount] for visibility calculations</summary>

Example: "Has an elevation of [3] for visibility calculations"

Applicable to: Terrain

</details>

<details>
<summary>Always Fertility [amount] for Map Generation</summary>

Example: "Always Fertility [3] for Map Generation"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>[amount] to Fertility for Map Generation</summary>

Example: "[3] to Fertility for Map Generation"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>A Region is formed with at least [amount]% [simpleTerrain] tiles, with priority [amount]</summary>

Example: "A Region is formed with at least [3]% [Elevated] tiles, with priority [3]"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>A Region is formed with at least [amount]% [simpleTerrain] tiles and [simpleTerrain] tiles, with priority [amount]</summary>

Example: "A Region is formed with at least [3]% [Elevated] tiles and [Elevated] tiles, with priority [3]"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>A Region can not contain more [simpleTerrain] tiles than [simpleTerrain] tiles</summary>

Example: "A Region can not contain more [Elevated] tiles than [Elevated] tiles"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Base Terrain on this tile is not counted for Region determination</summary>

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Starts in regions of this type receive an extra [resource]</summary>

Example: "Starts in regions of this type receive an extra [Iron]"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Never receives any resources</summary>

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Becomes [terrainName] when adjacent to [terrainFilter]</summary>

Example: "Becomes [Forest] when adjacent to [Fresh Water]"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Considered [terrainQuality] when determining start locations</summary>

Example: "Considered [Undesirable] when determining start locations"

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Doesn't generate naturally</summary>

This unique is automatically hidden from users.

Applicable to: Terrain, Resource

</details>

<details>
<summary>Occurs at temperature between [fraction] and [fraction] and humidity between [fraction] and [fraction]</summary>

Example: "Occurs at temperature between [0.5] and [0.5] and humidity between [0.5] and [0.5]"

This unique is automatically hidden from users.

Applicable to: Terrain, Resource

</details>

<details>
<summary>Occurs in chains at high elevations</summary>

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Occurs in groups around high elevations</summary>

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Every [amount] tiles with this terrain will receive a major deposit of a strategic resource.</summary>

Example: "Every [3] tiles with this terrain will receive a major deposit of a strategic resource."

This unique is automatically hidden from users.

Applicable to: Terrain

</details>

<details>
<summary>Rare feature</summary>

Applicable to: Terrain

</details>

<details>
<summary>[amount]% Chance to be destroyed by nukes</summary>

Example: "[3]% Chance to be destroyed by nukes"

Applicable to: Terrain

</details>

<details>
<summary>Fresh water</summary>

Applicable to: Terrain

</details>

<details>
<summary>Rough terrain</summary>

Applicable to: Terrain

</details>

<details>
<summary>Excluded from map editor</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Terrain, Improvement, Resource

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Suppress warning [validationWarning]</summary>

Allows suppressing specific validation warnings. Errors, deprecation warnings, or warnings about untyped and non-filtering uniques should be heeded, not suppressed, and are therefore not accepted. Note that this can be used in ModOptions, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. Even in the modifier case you will need to specify a sufficiently selective portion of the warning text as parameter.

Example: "Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

This unique does not support conditionals.

This unique is automatically hidden from users.

Applicable to: Triggerable, Terrain, Speed, ModOptions, MetaModifier

</details>

## 改良 Uniques
<details>
<summary>[stats]</summary>

Example: "[+1 Gold, +2 Production]"

Applicable to: Global, Terrain, Improvement

</details>

<details>
<summary>Consumes [amount] [resource]</summary>

Example: "Consumes [3] [Iron]"

Applicable to: Building, Unit, Improvement

</details>

<details>
<summary>Provides [amount] [resource]</summary>

Example: "Provides [3] [Iron]"

Applicable to: Global, FollowerBelief, Improvement

</details>

<details>
<summary>Costs [amount] [stockpiledResource]</summary>

These resources are removed *when work begins* on the construction. Do not confuse with "costs [amount] [stockpiledResource]" (lowercase 'c'), the Unit Action Modifier.

Example: "Costs [3] [Mana]"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Building, Unit, Improvement

</details>

<details>
<summary>Unbuildable</summary>

Blocks from being built, possibly by conditional. However it can still appear in the menu and be bought with other means such as Gold or Faith

Applicable to: Building, Unit, Improvement

</details>

<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

Applicable to: Tech, Policy, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Must be next to [tileFilter]</summary>

Example: "Must be next to [Farm]"

Applicable to: Building, Improvement

</details>

<details>
<summary>Obsolete with [tech]</summary>

Example: "Obsolete with [Agriculture]"

Applicable to: Building, Improvement, Resource

</details>

<details>
<summary>[amount] Sight</summary>

Example: "[3] Sight"

Applicable to: Global, Unit, Terrain, Improvement

</details>

<details>
<summary>Vegetation</summary>

This unique is automatically hidden from users.

Applicable to: Terrain, Improvement

</details>

<details>
<summary>Tile provides yield without assigned population</summary>

Applicable to: Terrain, Improvement

</details>

<details>
<summary>Excluded from map editor</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Terrain, Improvement, Resource

</details>

<details>
<summary>Can also be built on tiles adjacent to fresh water</summary>

Applicable to: Improvement

</details>

<details>
<summary>[stats] from [tileFilter] tiles</summary>

Example: "[+1 Gold, +2 Production] from [Farm] tiles"

Applicable to: Improvement

</details>

<details>
<summary>[stats] for each adjacent [tileFilter]</summary>

Example: "[+1 Gold, +2 Production] for each adjacent [Farm]"

Applicable to: Improvement

</details>

<details>
<summary>Ensures a minimum tile yield of [stats]</summary>

Example: "Ensures a minimum tile yield of [+1 Gold, +2 Production]"

Applicable to: Improvement

</details>

<details>
<summary>Can be built outside your borders</summary>

Applicable to: Improvement

</details>

<details>
<summary>Can be built just outside your borders</summary>

Applicable to: Improvement

</details>

<details>
<summary>Can only be built on [tileFilter] tiles</summary>

Example: "Can only be built on [Farm] tiles"

Applicable to: Improvement

</details>

<details>
<summary>Cannot be built on [tileFilter] tiles</summary>

Example: "Cannot be built on [Farm] tiles"

Applicable to: Improvement

</details>

<details>
<summary>Can only be built to improve a resource</summary>

Applicable to: Improvement

</details>

<details>
<summary>Does not need removal of [terrainFeature]</summary>

Example: "Does not need removal of [Hill]"

Applicable to: Improvement

</details>

<details>
<summary>Removes removable features when built</summary>

Applicable to: Improvement

</details>

<details>
<summary>Gives a defensive bonus of [relativeAmount]%</summary>

Does not accept unit-based conditionals

Example: "Gives a defensive bonus of [+20]%"

Applicable to: Improvement

</details>

<details>
<summary>Costs [amount] [stat] per turn when in your territory</summary>

Example: "Costs [3] [Culture] per turn when in your territory"

Applicable to: Improvement

</details>

<details>
<summary>Costs [amount] [stat] per turn</summary>

Example: "Costs [3] [Culture] per turn"

Applicable to: Improvement

</details>

<details>
<summary>Adjacent enemy units ending their turn take [amount] damage</summary>

Example: "Adjacent enemy units ending their turn take [3] damage"

Applicable to: Improvement

</details>

<details>
<summary>Great Improvement</summary>

Applicable to: Improvement

</details>

<details>
<summary>Provides a random bonus when entered</summary>

Applicable to: Improvement

</details>

<details>
<summary>Unpillagable</summary>

Applicable to: Improvement

</details>

<details>
<summary>Pillaging this improvement yields approximately [stats]</summary>

Example: "Pillaging this improvement yields approximately [+1 Gold, +2 Production]"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

This unique's effect can be modified with &lt;(modified by game progress up to [relativeAmount]%)&gt;

Applicable to: Improvement

</details>

<details>
<summary>Pillaging this improvement yields [stats]</summary>

Example: "Pillaging this improvement yields [+1 Gold, +2 Production]"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

This unique's effect can be modified with &lt;(modified by game progress up to [relativeAmount]%)&gt;

Applicable to: Improvement

</details>

<details>
<summary>Destroyed when pillaged</summary>

Applicable to: Improvement

</details>

<details>
<summary>Irremovable</summary>

Applicable to: Improvement

</details>

<details>
<summary>Will not be replaced by automated units</summary>

Applicable to: Improvement

</details>

<details>
<summary>Improves [resourceFilter] resource in this tile</summary>

This is offered as an alternative to the improvedBy field of a resource. The result will be cached within the resource definition when loading a game, without knowledge about terrain, cities, civs, units or time. Therefore, most conditionals will not work, only those **not** dependent on game state.

Example: "Improves [Strategic] resource in this tile"

This unique does not support conditionals.

Applicable to: Improvement

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 资源 Uniques
<details>
<summary>Obsolete with [tech]</summary>

Example: "Obsolete with [Agriculture]"

Applicable to: Building, Improvement, Resource

</details>

<details>
<summary>Must not be on [amount] largest landmasses</summary>

Example: "Must not be on [3] largest landmasses"

This unique is automatically hidden from users.

Applicable to: Terrain, Resource

</details>

<details>
<summary>Must be on [amount] largest landmasses</summary>

Example: "Must be on [3] largest landmasses"

This unique is automatically hidden from users.

Applicable to: Terrain, Resource

</details>

<details>
<summary>Doesn't generate naturally</summary>

This unique is automatically hidden from users.

Applicable to: Terrain, Resource

</details>

<details>
<summary>Occurs at temperature between [fraction] and [fraction] and humidity between [fraction] and [fraction]</summary>

Example: "Occurs at temperature between [0.5] and [0.5] and humidity between [0.5] and [0.5]"

This unique is automatically hidden from users.

Applicable to: Terrain, Resource

</details>

<details>
<summary>Excluded from map editor</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Terrain, Improvement, Resource

</details>

<details>
<summary>Deposits in [tileFilter] tiles always provide [amount] resources</summary>

Example: "Deposits in [Farm] tiles always provide [3] resources"

Applicable to: Resource

</details>

<details>
<summary>Can only be created by Mercantile City-States</summary>

Applicable to: Resource

</details>

<details>
<summary>Stockpiled</summary>

This resource is accumulated each turn, rather than having a set of producers and consumers at a given moment.The current stockpiled amount can be affected with trigger uniques.

Applicable to: Resource

</details>

<details>
<summary>City-level resource</summary>

This resource is calculated on a per-city level rather than a per-civ level

Applicable to: Resource

</details>

<details>
<summary>Cannot be traded</summary>

Applicable to: Resource

</details>

<details>
<summary>Not shown on world screen</summary>

This unique is automatically hidden from users.

Applicable to: Promotion, Resource

</details>

<details>
<summary>Generated with weight [amount]</summary>

The probability for this resource to be chosen is (this resource weight) / (sum weight of all eligible resources). Resources without a unique are given weight `1`

Example: "Generated with weight [3]"

This unique is automatically hidden from users.

Applicable to: Resource

</details>

<details>
<summary>Minor deposits generated with weight [amount]</summary>

The probability for this resource to be chosen is (this resource weight) / (sum weight of all eligible resources). Resources without a unique are not generated as minor deposits.

Example: "Minor deposits generated with weight [3]"

This unique is automatically hidden from users.

Applicable to: Resource

</details>

<details>
<summary>Generated near City States with weight [amount]</summary>

The probability for this resource to be chosen is (this resource weight) / (sum weight of all eligible resources). Only assignable to luxuries, resources without a unique are given weight `1`

Example: "Generated near City States with weight [3]"

This unique is automatically hidden from users.

Applicable to: Resource

</details>

<details>
<summary>Special placement during map generation</summary>

This unique is automatically hidden from users.

Applicable to: Resource

</details>

<details>
<summary>Generated on every [amount] tiles</summary>

Example: "Generated on every [3] tiles"

This unique is automatically hidden from users.

Applicable to: Resource

</details>

<details>
<summary>Guaranteed with Strategic Balance resource option</summary>

Applicable to: Resource

</details>

<details>
<summary>AI will sell at [amount] Gold</summary>

Example: "AI will sell at [3] Gold"

This unique is automatically hidden from users.

Applicable to: Resource

</details>

<details>
<summary>AI will buy at [amount] Gold</summary>

Example: "AI will buy at [3] Gold"

This unique is automatically hidden from users.

Applicable to: Resource

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 遗迹 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

Applicable to: Tech, Policy, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Free [unit] found in the ruins</summary>

Example: "Free [Musketman] found in the ruins"

Applicable to: Ruins

</details>

<details>
<summary>From a randomly chosen tile [positiveAmount] tiles away from the ruins, reveal tiles up to [positiveAmount] tiles away with [positiveAmount]% chance</summary>

Example: "From a randomly chosen tile [3] tiles away from the ruins, reveal tiles up to [3] tiles away with [3]% chance"

Applicable to: Ruins

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 游戏速度 Uniques

<details>
<summary>说明</summary>

Speed uniques will be treated as part of GlobalUniques for the Speed selected in a game

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Suppress warning [validationWarning]</summary>

Allows suppressing specific validation warnings. Errors, deprecation warnings, or warnings about untyped and non-filtering uniques should be heeded, not suppressed, and are therefore not accepted. Note that this can be used in ModOptions, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. Even in the modifier case you will need to specify a sufficiently selective portion of the warning text as parameter.

Example: "Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

This unique does not support conditionals.

This unique is automatically hidden from users.

Applicable to: Triggerable, Terrain, Speed, ModOptions, MetaModifier

</details>

## 难度 Uniques

<details>
<summary>说明</summary>

Difficulty uniques will be treated as part of GlobalUniques for the Difficulty selected in a game

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 教程 Uniques
## 城邦 Uniques
<details>
<summary>Provides military units every ≈[positiveAmount] turns</summary>

Example: "Provides military units every ≈[3] turns"

Applicable to: CityState

</details>

<details>
<summary>Provides a unique luxury</summary>

Applicable to: CityState

</details>

## 模组选项 Uniques
<details>
<summary>Diplomatic relationships cannot change</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Can convert gold to science with sliders</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Allow City States to spawn with additional units</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Can trade civilization introductions for [positiveAmount] Gold</summary>

Example: "Can trade civilization introductions for [3] Gold"

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Disable religion</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Can only start games from the starting era</summary>

In this case, 'starting era' means the first defined Era in the entire ruleset.

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Allow raze capital</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Allow raze holy city</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Allow cities to claim tiles</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Suppress warning [validationWarning]</summary>

Allows suppressing specific validation warnings. Errors, deprecation warnings, or warnings about untyped and non-filtering uniques should be heeded, not suppressed, and are therefore not accepted. Note that this can be used in ModOptions, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. Even in the modifier case you will need to specify a sufficiently selective portion of the warning text as parameter.

Example: "Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]"

This unique does not support conditionals.

This unique is automatically hidden from users.

Applicable to: Triggerable, Terrain, Speed, ModOptions, MetaModifier

</details>

<details>
<summary>Mod is incompatible with [modFilter]</summary>

Specifies that your Mod is incompatible with another. Always treated symmetrically, and cannot be overridden by the Mod you are declaring as incompatible.

Example: "Mod is incompatible with [DeCiv Redux]"

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Mod requires [modFilter]</summary>

Specifies that your Extension Mod is only available if any other Mod matching the filter is active.

Multiple copies of this Unique cannot be used to specify alternatives, they work as 'and' logic. If you need alternates and wildcards can't filter them well enough, please open an issue.

Example: "Mod requires [DeCiv Redux]"

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Should only be used as permanent audiovisual mod</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Can be used as permanent audiovisual mod</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Cannot be used as permanent audiovisual mod</summary>

This unique does not support conditionals.

Applicable to: ModOptions

</details>

<details>
<summary>Mod preselects map [comment]</summary>

Only meaningful for Mods containing several maps. When this mod is selected on the new game screen's custom maps mod dropdown, the named map will be selected on the map dropdown. Also disables selection by recently modified. Case insensitive.

Example: "Mod preselects map [comment]"

This unique does not support conditionals.

Applicable to: ModOptions

</details>

## 事件 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

Applicable to: Tech, Policy, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

## 事件选择 Uniques
<details>
<summary>Only available</summary>

Meant to be used together with conditionals, like "Only available &lt;after adopting [policy]&gt; &lt;while the empire is happy&gt;". Only allows Building when ALL conditionals are met. Will also block Upgrade and Transform actions. See also CanOnlyBeBuiltWhen

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>Unavailable</summary>

Meant to be used together with conditionals, like "Unavailable &lt;after generating a Great Prophet&gt;".

Applicable to: Tech, Policy, Building, Unit, Promotion, Improvement, Ruins, Event, EventChoice

</details>

<details>
<summary>[relativeAmount]% weight to this choice for AI decisions</summary>

Example: "[+20]% weight to this choice for AI decisions"

This unique is automatically hidden from users.

Applicable to: Tech, Policy, FounderBelief, FollowerBelief, Building, Promotion, EventChoice

</details>

<details>
<summary>Will not be displayed in Civilopedia</summary>

This unique is automatically hidden from users.

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

<details>
<summary>Comment [comment]</summary>

Allows displaying arbitrary text in a Unique listing. Only the text within the '[]' brackets will be displayed, the rest serves to allow Ruleset validation to recognize the intent.

Example: "Comment [comment]"

Applicable to: Nation, Tech, Policy, FounderBelief, FollowerBelief, Building, Unit, UnitType, Promotion, Terrain, Improvement, Resource, Ruins, Speed, Difficulty, EventChoice

</details>

## 条件 Uniques

<details>
<summary>说明</summary>

Modifiers that can be added to other uniques to limit when they will be active

</details>

<details>
<summary>&lt;every [positiveAmount] turns&gt;</summary>

Example: "&lt;every [3] turns&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;before turn number [nonNegativeAmount]&gt;</summary>

Example: "&lt;before turn number [3]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;after turn number [nonNegativeAmount]&gt;</summary>

Example: "&lt;after turn number [3]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;on [speed] game speed&gt;</summary>

Example: "&lt;on [Quick] game speed&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;on [difficulty] difficulty&gt;</summary>

Example: "&lt;on [Prince] difficulty&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;on [difficulty] difficulty or higher&gt;</summary>

Example: "&lt;on [Prince] difficulty or higher&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;on [difficulty] difficulty or lower&gt;</summary>

Example: "&lt;on [Prince] difficulty or lower&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when [victoryType] Victory is enabled&gt;</summary>

Example: "&lt;when [Domination] Victory is enabled&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when [victoryType] Victory is disabled&gt;</summary>

Example: "&lt;when [Domination] Victory is disabled&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when religion is enabled&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when religion is disabled&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when espionage is enabled&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when espionage is disabled&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when nuclear weapons are enabled&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when nuclear weapons are disabled&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;with [nonNegativeAmount]% chance&gt;</summary>

Example: "&lt;with [3]% chance&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if tutorials are enabled&gt;</summary>

This unique is automatically hidden from users.

Applicable to: Conditional

</details>

<details>
<summary>&lt;if tutorial [comment] is completed&gt;</summary>

Example: "&lt;if tutorial [comment] is completed&gt;"

This unique is automatically hidden from users.

Applicable to: Conditional

</details>

<details>
<summary>&lt;for [civFilter] Civilizations&gt;</summary>

Example: "&lt;for [City-States] Civilizations&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when at war&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when not at war&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;during a Golden Age&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when not in a Golden Age&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;during We Love The King Day&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;while the empire is happy&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;during the [era]&gt;</summary>

Example: "&lt;during the [Ancient era]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;before the [era]&gt;</summary>

Example: "&lt;before the [Ancient era]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;starting from the [era]&gt;</summary>

Example: "&lt;starting from the [Ancient era]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if starting in the [era]&gt;</summary>

Example: "&lt;if starting in the [Ancient era]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if no other Civilization has researched this&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;after discovering [techFilter]&gt;</summary>

Example: "&lt;after discovering [Agriculture]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;before discovering [techFilter]&gt;</summary>

Example: "&lt;before discovering [Agriculture]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;while researching [techFilter]&gt;</summary>

This condition is fulfilled while the technology is actively being researched (it is the one research points are added to)

Example: "&lt;while researching [Agriculture]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if no other Civilization has adopted this&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;if no Civilization has adopted [policy/belief]&gt;</summary>

Example: "&lt;if no Civilization has adopted [Oligarchy]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;after adopting [policy/belief]&gt;</summary>

Example: "&lt;after adopting [Oligarchy]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;before adopting [policy/belief]&gt;</summary>

Example: "&lt;before adopting [Oligarchy]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;before founding a Pantheon&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;after founding a Pantheon&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;before founding a religion&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;after founding a religion&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;before enhancing a religion&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;after enhancing a religion&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;after generating a Great Prophet&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;if [buildingFilter] is constructed&gt;</summary>

Example: "&lt;if [Culture] is constructed&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if [buildingFilter] is not constructed&gt;</summary>

Example: "&lt;if [Culture] is not constructed&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if [buildingFilter] is constructed in all [cityFilter] cities&gt;</summary>

Example: "&lt;if [Culture] is constructed in all [in all cities] cities&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if [buildingFilter] is constructed in at least [positiveAmount] of [cityFilter] cities&gt;</summary>

Example: "&lt;if [Culture] is constructed in at least [3] of [in all cities] cities&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if [buildingFilter] is constructed by anybody&gt;</summary>

Example: "&lt;if [Culture] is constructed by anybody&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if [buildingFilter] is not constructed by anybody&gt;</summary>

Example: "&lt;if [Culture] is not constructed by anybody&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;with [resource]&gt;</summary>

Example: "&lt;with [Iron]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;without [resource]&gt;</summary>

Example: "&lt;without [Iron]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when above [amount] [stat/resource]&gt;</summary>

Stats refers to the accumulated stat, not stat-per-turn. Therefore, does not support Happiness - for that use 'when above [amount] Happiness'

Example: "&lt;when above [3] [Culture]&gt;"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Conditional

</details>

<details>
<summary>&lt;when below [amount] [stat/resource]&gt;</summary>

Stats refers to the accumulated stat, not stat-per-turn. Therefore, does not support Happiness - for that use 'when below [amount] Happiness'

Example: "&lt;when below [3] [Culture]&gt;"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Conditional

</details>

<details>
<summary>&lt;when between [amount] and [amount] [stat/resource]&gt;</summary>

Stats refers to the accumulated stat, not stat-per-turn. Therefore, does not support Happiness. 'Between' is inclusive - so 'between 1 and 5' includes 1 and 5.

Example: "&lt;when between [3] and [3] [Culture]&gt;"

This unique's effect can be modified with &lt;(modified by game speed)&gt;

Applicable to: Conditional

</details>

<details>
<summary>&lt;in this city&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;in [cityFilter] cities&gt;</summary>

Example: "&lt;in [in all cities] cities&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities connected to the capital&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities with a [religionFilter] religion&gt;</summary>

Example: "&lt;in cities with a [major] religion&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities not following a [religionFilter] religion&gt;</summary>

Example: "&lt;in cities not following a [major] religion&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities with a major religion&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities with an enhanced religion&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities following our religion&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities with a [buildingFilter]&gt;</summary>

Example: "&lt;in cities with a [Culture]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities without a [buildingFilter]&gt;</summary>

Example: "&lt;in cities without a [Culture]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities with at least [positiveAmount] [populationFilter]&gt;</summary>

Example: "&lt;in cities with at least [3] [Followers of this Religion]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities with [positiveAmount] [populationFilter]&gt;</summary>

Example: "&lt;in cities with [3] [Followers of this Religion]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities with between [amount] and [amount] [populationFilter]&gt;</summary>

'Between' is inclusive - so 'between 1 and 5' includes 1 and 5.

Example: "&lt;in cities with between [3] and [3] [Followers of this Religion]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in cities with less than [amount] [populationFilter]&gt;</summary>

Example: "&lt;in cities with less than [3] [Followers of this Religion]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;with a garrison&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;for [mapUnitFilter] units&gt;</summary>

Example: "&lt;for [Wounded] units&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when [mapUnitFilter]&gt;</summary>

Example: "&lt;when [Wounded]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;for units with [promotion]&gt;</summary>

Also applies to units with temporary status

Example: "&lt;for units with [Shock I]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;for units without [promotion]&gt;</summary>

Also applies to units with temporary status

Example: "&lt;for units without [Shock I]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;vs cities&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;vs [mapUnitFilter] units&gt;</summary>

Example: "&lt;vs [Wounded] units&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;vs [combatantFilter]&gt;</summary>

Example: "&lt;vs [City]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when fighting units from a Civilization with more Cities than you&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when attacking&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when defending&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when fighting in [tileFilter] tiles&gt;</summary>

Example: "&lt;when fighting in [Farm] tiles&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;on foreign continents&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when adjacent to a [mapUnitFilter] unit&gt;</summary>

Example: "&lt;when adjacent to a [Wounded] unit&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when above [positiveAmount] HP&gt;</summary>

Example: "&lt;when above [3] HP&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when below [positiveAmount] HP&gt;</summary>

Example: "&lt;when below [3] HP&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if it hasn't used other actions yet&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;when stacked with a [mapUnitFilter] unit&gt;</summary>

Example: "&lt;when stacked with a [Wounded] unit&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when not stacked with a [mapUnitFilter] unit&gt;</summary>

Example: "&lt;when not stacked with a [Wounded] unit&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;with [nonNegativeAmount] to [nonNegativeAmount] neighboring [tileFilter] tiles&gt;</summary>

Example: "&lt;with [3] to [3] neighboring [Farm] tiles&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in [tileFilter] tiles&gt;</summary>

Example: "&lt;in [Farm] tiles&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in tiles without [tileFilter]&gt;</summary>

Example: "&lt;in tiles without [Farm]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;within [positiveAmount] tiles of a [tileFilter]&gt;</summary>

Example: "&lt;within [3] tiles of a [Farm]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in tiles adjacent to [tileFilter] tiles&gt;</summary>

Example: "&lt;in tiles adjacent to [Farm] tiles&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in tiles not adjacent to [tileFilter] tiles&gt;</summary>

Example: "&lt;in tiles not adjacent to [Farm] tiles&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;on water maps&gt;</summary>

Applicable to: Conditional

</details>

<details>
<summary>&lt;in [regionType] Regions&gt;</summary>

Example: "&lt;in [Hybrid] Regions&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;in all except [regionType] Regions&gt;</summary>

Example: "&lt;in all except [Hybrid] Regions&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when number of [countable] is equal to [countable]&gt;</summary>

Example: "&lt;when number of [1000] is equal to [1000]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when number of [countable] is different than [countable]&gt;</summary>

Example: "&lt;when number of [1000] is different than [1000]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when number of [countable] is more than [countable]&gt;</summary>

Example: "&lt;when number of [1000] is more than [1000]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when number of [countable] is less than [countable]&gt;</summary>

Example: "&lt;when number of [1000] is less than [1000]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when number of [countable] is between [countable] and [countable]&gt;</summary>

'Between' is inclusive - so 'between 1 and 5' includes 1 and 5.

Example: "&lt;when number of [1000] is between [1000] and [1000]&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;when carried by [mapUnitFilter] units&gt;</summary>

Example: "&lt;when carried by [Wounded] units&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if [modFilter] is enabled&gt;</summary>

Example: "&lt;if [DeCiv Redux] is enabled&gt;"

Applicable to: Conditional

</details>

<details>
<summary>&lt;if [modFilter] is not enabled&gt;</summary>

Example: "&lt;if [DeCiv Redux] is not enabled&gt;"

Applicable to: Conditional

</details>

## 触发条件 Uniques

<details>
<summary>说明</summary>

Special conditionals that can be added to Triggerable uniques, to make them activate upon specific actions.

</details>

<details>
<summary>&lt;upon discovering [techFilter] technology&gt;</summary>

Example: "&lt;upon discovering [Agriculture] technology&gt;"

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon entering the [era]&gt;</summary>

Example: "&lt;upon entering the [Ancient era]&gt;"

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon entering a new era&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon adopting [policy/belief]&gt;</summary>

Example: "&lt;upon adopting [Oligarchy]&gt;"

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon declaring war on [civFilter] Civilizations&gt;</summary>

Example: "&lt;upon declaring war on [City-States] Civilizations&gt;"

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon being declared war on by [civFilter] Civilizations&gt;</summary>

Example: "&lt;upon being declared war on by [City-States] Civilizations&gt;"

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon entering a war with [civFilter] Civilizations&gt;</summary>

Example: "&lt;upon entering a war with [City-States] Civilizations&gt;"

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon declaring friendship&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon declaring a defensive pact&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon entering a Golden Age&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon ending a Golden Age&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon conquering a city&gt;</summary>

Applicable to: TriggerCondition, UnitTriggerCondition

</details>

<details>
<summary>&lt;upon losing a city&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon founding a city&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon building a [improvementFilter] improvement&gt;</summary>

Example: "&lt;upon building a [All Road] improvement&gt;"

Applicable to: TriggerCondition, UnitTriggerCondition

</details>

<details>
<summary>&lt;upon discovering a Natural Wonder&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon constructing [buildingFilter]&gt;</summary>

Example: "&lt;upon constructing [Culture]&gt;"

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon constructing [buildingFilter] [cityFilter]&gt;</summary>

Example: "&lt;upon constructing [Culture] [in all cities]&gt;"

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon gaining a [baseUnitFilter] unit&gt;</summary>

Example: "&lt;upon gaining a [Melee] unit&gt;"

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon turn end&gt;</summary>

Applicable to: TriggerCondition, UnitTriggerCondition

</details>

<details>
<summary>&lt;upon turn start&gt;</summary>

Applicable to: TriggerCondition, UnitTriggerCondition

</details>

<details>
<summary>&lt;upon founding a Pantheon&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon founding a Religion&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon enhancing a Religion&gt;</summary>

Applicable to: TriggerCondition

</details>

<details>
<summary>&lt;upon expending a [mapUnitFilter] unit&gt;</summary>

Example: "&lt;upon expending a [Wounded] unit&gt;"

Applicable to: TriggerCondition

</details>

## 单位触发条件 Uniques

<details>
<summary>说明</summary>

Special conditionals that can be added to UnitTriggerable uniques, to make them activate upon specific actions.

</details>

<details>
<summary>&lt;upon conquering a city&gt;</summary>

Applicable to: TriggerCondition, UnitTriggerCondition

</details>

<details>
<summary>&lt;upon building a [improvementFilter] improvement&gt;</summary>

Example: "&lt;upon building a [All Road] improvement&gt;"

Applicable to: TriggerCondition, UnitTriggerCondition

</details>

<details>
<summary>&lt;upon turn end&gt;</summary>

Applicable to: TriggerCondition, UnitTriggerCondition

</details>

<details>
<summary>&lt;upon turn start&gt;</summary>

Applicable to: TriggerCondition, UnitTriggerCondition

</details>

<details>
<summary>&lt;upon entering combat&gt;</summary>

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon damaging a [mapUnitFilter] unit&gt;</summary>

Can apply triggers to to damaged unit by setting the first parameter to 'Target Unit'

Example: "&lt;upon damaging a [Wounded] unit&gt;"

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon defeating a [mapUnitFilter] unit&gt;</summary>

Example: "&lt;upon defeating a [Wounded] unit&gt;"

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon being defeated&gt;</summary>

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon being promoted&gt;</summary>

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon gaining the [promotion] promotion&gt;</summary>

Example: "&lt;upon gaining the [Shock I] promotion&gt;"

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon losing the [promotion] promotion&gt;</summary>

Example: "&lt;upon losing the [Shock I] promotion&gt;"

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon gaining the [promotion] status&gt;</summary>

Example: "&lt;upon gaining the [Shock I] status&gt;"

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon losing the [promotion] status&gt;</summary>

Example: "&lt;upon losing the [Shock I] status&gt;"

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon losing at least [positiveAmount] HP in a single attack&gt;</summary>

Example: "&lt;upon losing at least [3] HP in a single attack&gt;"

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon ending a turn in a [tileFilter] tile&gt;</summary>

Example: "&lt;upon ending a turn in a [Farm] tile&gt;"

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon discovering a [tileFilter] tile&gt;</summary>

Example: "&lt;upon discovering a [Farm] tile&gt;"

Applicable to: UnitTriggerCondition

</details>

<details>
<summary>&lt;upon entering a [tileFilter] tile&gt;</summary>

Example: "&lt;upon entering a [Farm] tile&gt;"

Applicable to: UnitTriggerCondition

</details>

## 单位行动修饰符 Uniques

<details>
<summary>说明</summary>

Modifiers that can be added to UnitAction uniques as conditionals

</details>

<details>
<summary>&lt;by consuming this unit&gt;</summary>

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;for [amount] movement&gt;</summary>

Will consume up to [amount] of Movement to execute

Example: "&lt;for [3] movement&gt;"

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;for all movement&gt;</summary>

Will consume all Movement to execute

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;requires [nonNegativeAmount] movement&gt;</summary>

Requires [nonNegativeAmount] of Movement to execute. Unit's Movement is rounded up

Example: "&lt;requires [3] movement&gt;"

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;costs [stats] stats&gt;</summary>

A positive Integer value will be subtracted from your stock. Food and Production will be removed from Closest City's current stock

Example: "&lt;costs [+1 Gold, +2 Production] stats&gt;"

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;costs [amount] [stockpiledResource]&gt;</summary>

A positive Integer value will be subtracted from your stock. Do not confuse with "Costs [amount] [stockpiledResource]" (uppercase 'C') for Improvements, Buildings, and Units.

Example: "&lt;costs [3] [Mana]&gt;"

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;removing the [promotion] promotion/status&gt;</summary>

Removes the promotion/status from the unit - this is not a cost, units will be able to activate the action even without the promotion/status. To limit, use &lt;with the [promotion] promotion&gt; conditional

Example: "&lt;removing the [Shock I] promotion/status&gt;"

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;once&gt;</summary>

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;[positiveAmount] times&gt;</summary>

Example: "&lt;[3] times&gt;"

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;[nonNegativeAmount] additional time(s)&gt;</summary>

Example: "&lt;[3] additional time(s)&gt;"

Applicable to: UnitActionModifier

</details>

<details>
<summary>&lt;after which this unit is consumed&gt;</summary>

Applicable to: UnitActionModifier

</details>

## 元修饰符 Uniques

<details>
<summary>说明</summary>

Modifiers that can be added to other uniques changing user experience, not their behavior

</details>

<details>
<summary>&lt;for [nonNegativeAmount] turns&gt;</summary>

Turns this unique into a trigger, activating this unique as a *global* unique for a number of turns

Example: "&lt;for [3] turns&gt;"

Applicable to: MetaModifier

</details>

<details>
<summary>&lt;hidden from users&gt;</summary>

Applicable to: MetaModifier

</details>

<details>
<summary>&lt;for every [countable]&gt;</summary>

Works for positive numbers only

Example: "&lt;for every [1000]&gt;"

Applicable to: MetaModifier

</details>

<details>
<summary>&lt;for every adjacent [tileFilter]&gt;</summary>

Works for positive numbers only

Example: "&lt;for every adjacent [Farm]&gt;"

Applicable to: MetaModifier

</details>

<details>
<summary>&lt;for every [positiveAmount] [countable]&gt;</summary>

Works for positive numbers only

Example: "&lt;for every [3] [1000]&gt;"

Applicable to: MetaModifier

</details>

<details>
<summary>&lt;(modified by game speed)&gt;</summary>

Can only be applied to certain uniques, see details of each unique for specifics

Applicable to: MetaModifier

</details>

<details>
<summary>&lt;(modified by game progress up to [relativeAmount]%)&gt;</summary>

Can only be applied to certain uniques, see details of each unique for specifics

Example: "&lt;(modified by game progress up to [+20]%)&gt;"

Applicable to: MetaModifier

</details>

<details>
<summary>&lt;Suppress warning [validationWarning]&gt;</summary>

Allows suppressing specific validation warnings. Errors, deprecation warnings, or warnings about untyped and non-filtering uniques should be heeded, not suppressed, and are therefore not accepted. Note that this can be used in ModOptions, in the uniques a warning is about, or as modifier on the unique triggering a warning - but you still need to be specific. Even in the modifier case you will need to specify a sufficiently selective portion of the warning text as parameter.

Example: "&lt;Suppress warning [Tinman is supposed to automatically upgrade at tech Clockwork, and therefore Servos for its upgrade Mecha may not yet be researched! -or- *is supposed to automatically upgrade*]&gt;"

This unique does not support conditionals.

This unique is automatically hidden from users.

Applicable to: Triggerable, Terrain, Speed, ModOptions, MetaModifier

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
Note that this must use the Mod name as Unciv displays it, not the Repository name.
There is a conversion affecting dashes and leading/trailing blanks. Please make sure not to get confused.
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
*[validationWarning]: Suppresses one specific Ruleset validation warning. This can specify the full text verbatim including correct upper/lower case, or it can be a wildcard case-insensitive simple pattern starting and ending in an asterisk ('*'). If the suppression unique is used within an object or as modifier (not ModOptions), the wildcard symbols can be omitted, as selectivity is better due to the limited scope.
*[victoryType]: The name of any victory type: 'Cultural', 'Diplomatic', 'Domination', 'Scientific', 'Time' or one of your mod's VictoryTypes.json names.

