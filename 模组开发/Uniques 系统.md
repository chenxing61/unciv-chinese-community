---
title: Uniques 系统
---

# Uniques 系统

Uniques 的概述可以在[这里](https://github.com/yairm210/Unciv/blob/master/docs/Developers/Uniques.md)找到

简单的 unique 参数通过鼠标悬停进行解释。复杂的参数在[Unique 参数类型](unique-parameters.md)中解释

## 概述

"Uniques"是 Unciv 用于可扩展和可定制效果的标签。几乎每个"规则集对象"都允许一组 Uniques，作为名称为"uniques"的列表。

每个 Unique 遵循一般结构：`Unique 类型定义名称 [占位符] 更多名称 [另一个占位符] <条件或触发> <条件或触发>...`

整个字符串（不包括所有由空格分隔的 `<>` 分隔符内的条件或触发）以及不包括占位符但包括它们的 `[]` 分隔符，用于查找 Unique 的实现。

可选的 `[占位符]`的内容取决于实现，它们是修改效果的参数，在[Unique 参数](unique-parameters.md)中描述。

所有 `<条件或触发>`都是可选的（但如果使用，分隔它们的空格是必需的），并且每个都依次遵循 Unique 结构规则，用于 `<>` 尖括号之间的部分，包括可能的占位符，但不包括嵌套条件。

## Unique 类型

### Triggerable Uniques（触发式 Uniques）

这些具有直接的、一次性的效果。它们可以添加到科技中以在研究时触发，添加到政策中以在采用时触发，添加到时代以在到达时触发，添加到建筑中以在建造时触发。或者，你可以为它们添加 TriggerCondition 以使它们成为在特定事件上激活的全局 Uniques。它们也可以添加到单位，以授予它们触发此效果作为行动的能力，这可以通过 UnitActionModifier 和 UnitTriggerCondition 条件进行修改。

**示例**：

- `Gain a free [Library] [in all cities]` - 在所有城市中获得免费图书馆
- `Free [Musketman] appears` - 免费的火枪手出现
- `Empire enters golden age` - 帝国进入黄金时代
- `Discover [Agriculture]` - 发现农业
- `Gain [3] [Culture]` - 获得 3 文化值

### UnitTriggerable Uniques（单位触发式 Uniques）

这些对单位具有直接的、一次性的效果。它们可以添加到单位（在单位、单位类型或晋升上）以授予它们触发此效果作为行动的能力，这可以通过 UnitActionModifier 和 UnitTriggerCondition 条件进行修改。

**示例**：

- `[This Unit] heals [3] HP` - 此单位治疗 3 点生命值
- `[This Unit] gains [3] XP` - 此单位获得 3 点经验值
- `[This Unit] upgrades for free` - 此单位免费升级
- `[This Unit] gains the [Shock I] promotion` - 此单位获得震撼 I 晋升

### Global Uniques（全局 Uniques）

这些全局应用。文明从国家 uniques、到达的时代、研究的科技、采用的政策、建造的建筑、宗教"创始人"uniques、拥有的资源和规则集范围的全局 uniques 中获得这些 Uniques 的能力。

**示例**：

- `[+1 Gold, +2 Production]` - +1 金币，+2 生产力
- `[+20]% [Culture] [in all cities]` - 所有城市 +20% 文化
- `[+20]% Production when constructing [Culture] buildings [in all cities]` - 建造文化建筑时 +20% 生产力
- `Cannot build [Melee] units` - 不能建造近战单位
- `May buy [Culture] buildings for [3] [Culture] [in all cities]` - 可以用 3 文化购买文化建筑

## Unique 参数

Unique 参数用于控制 Uniques 的行为和范围。每个参数都有特定的允许值。

### 主要参数类型

- `baseUnitFilter` - 单位过滤器（单位类型、名称等）
- `mapUnitFilter` - 地图单位过滤器（包括国家、地形、生命值等）
- `buildingFilter` - 建筑过滤器
- `cityFilter` - 城市过滤器（"in this city"、"in all cities"、"in capital"等）
- `eraFilter` - 时代过滤器
- `terrainFilter` - 地形过滤器
- `stats` - 属性值（生产、食物、金币、科学、文化、幸福、信仰）
- `countable` - 可计数的值（城市数量、单位数量、回合数等）

### 过滤器规则

所有过滤器（除了 `populationFilter` 和 `resourceFilter`）都接受多个值，格式为：`{A} {B} {C}` 等，意味着"对象必须匹配所有这些过滤器"。

**示例**：
- `[{Military} {Water}] units` - 军事水路单位
- `[{Wounded} {Armor}] units` - 受伤的装甲单位

所有过滤器都接受 `non-[filter]` 作为可能的值。

**示例**：
- `[non-[Wounded]] units` - 未受伤的单位

## 条件和触发

Uniques 可以包含条件和触发来控制它们何时生效。

### 条件示例

- `<with a garrison>` - 有驻军时
- `<when at war>` - 战争期间
- `<when defending>` - 防御时
- `<when attacking>` - 攻击时

### 触发示例

- `<on attack>` - 攻击时
- `<on defeated>` - 被击败时
- `<on turn start>` - 回合开始时

## 注意事项

1. **大小写敏感**：所有参数和值都是大小写敏感的
2. **空格要求**：占位符 `[...]` 之间、条件 `<...>` 之间需要正确的空格
3. **嵌套限制**：条件和触发不能嵌套
4. **类型检查**：使用 [JSON Schema](type-checking.md) 验证你的 Uniques

## 验证

Unciv 包含一个"规则集验证器"，可以检查你的 Uniques 是否正确。你可以在游戏中的"选项"标签找到"定位模组错误"，它也会在开始新游戏时运行。

如果出现"not found in Unciv's unique types"警告，但你确定你使用了正确的过滤 Unique，请检查所有地方是否完全相同的拼写，包括大小写。

## 更多信息

- [Unique 参数类型详细说明](unique-parameters.md)
- [Uniques 完整列表](https://github.com/yairm210/Unciv/blob/master/docs/Modders/uniques.md)（自动生成）
- [条件 Uniques](https://github.com/yairm210/Unciv/blob/master/docs/Modders/uniques.md#conditional-uniques)
- [触发条件 Uniques](https://github.com/yairm210/Unciv/blob/master/docs/Modders/uniques.md#triggercondition-uniques)