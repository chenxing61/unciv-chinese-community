---
title: Mod 文件结构
---

# Mod 文件结构概述

这些页面正在进行中。其中包含的信息可能不完整。

组成模组的 JSON 文件可以有许多不同的字段，并且并非所有字段都在基础游戏中使用，因此此 wiki 页面将包含每个字段的完整信息。它还将给出 JSON 文件语法的简要说明。

## 目录

- [JSON 文件概述](#json-文件概述)
- [文明相关 JSON 文件](#文明相关-json-文件)
  - [Beliefs.json](#beliefsjson)
  - [Buildings.json](#buildingsjson)
  - [CityStateTypes.json](#citystatetypesjson)
  - [Nations.json](#nationsjson)
  - [Policies.json](#policiesjson)
  - [Quests.json](#questsjson)
  - [Religions.json](#religionsjson)
  - [Specialists.json](#specialistsjson)
  - [Techs.json](#techsjson)
- [地图相关 JSON 文件](#地图相关-json-文件)
  - [Terrains.json](#terrainsjson)
  - [TileResources.json](#tileresourcesjson)
  - [TileImprovements.json](#tileimprovementsjson)
  - [Ruins.json](#ruinsjson)
  - [地形集特定 json](#地形集特定-json)
- [单位相关 JSON 文件](#单位相关-json-文件)
  - [Units.json](#unitsjson)
  - [UnitPromotions.json](#unitpromotionsjson)
  - [UnitTypes.json](#unittypesjson)
  - [UnitNameGroups.json](#unitnamegroupsjson)
- [杂项 JSON 文件](#杂项-json-文件)
  - [Difficulties.json](#difficultiesjson)
  - [Eras.json](#erasjson)
  - [ModOptions.json](#modoptionsjson)
  - [GlobalUniques.json](#globaluniquesjson)
  - [Speeds.json](#speedsjson)
  - [Tutorials.json](#tutorialsjson)
  - [VictoryTypes.json](#victorytypesjson)
- [属性](#属性)
- [声音](图像和音频.md#声音)
- [Civilopedia 文本](#civilopedia-文本)

## JSON 文件概述

**推荐阅读**：[json.org](https://www.json.org/)，[ISO 标准](https://standards.iso.org/ittf/PubliclyAvailableStandards/c071616_ISO_IEC_21778_2017.zip)

几乎所有 Unciv JSON 文件都以"["开始，以"]"结束。在这两者之间是描述类型的不同对象，每个对象都包含在"{"和"}"之间。例如，一个非常简单的 units.json 可能看起来像这样：

```
[
    {
        "name": "Warrior",
        "cost": 16
    },
    {
        "name": "Spearman",
        "cost": 24,
        "promotions": ["Shock I", "Drill I"]
    }
]
```

这个文件包含两个单位对象，一个用于战士，一个用于长矛兵。这些对象具有不同的属性，在这种情况下是"name"、"cost"和"promotions"。所有这些属性都有一定的类型，"name"是 String（文本），"cost"是 Integer，"promotions"是 String List。

有不同的属性类型：

| 类型 | 说明 |
|------|------|
| String | 一个词或句子。应该在双引号（"）之间，并转义双引号作为文本的一部分：`\"` |
| Integer | 一个数字。可以是正数或负数。**不应该**在引号之间 |
| Float | 一个可以有小数位的数字。记住使用 `.` 作为 JSON 标准需要的，而不是你的本地文化的十进制符号。科学计数法可以工作，但是 |
| Boolean | 一个可以是'true'或'false'的值。**不应该**在引号之间 |
| List of [type] | 如果多个值可以应用（如上面的晋升），它们应该放在一个列表中。列表的每个元素应该像正常属性一样编写，用逗号分隔，并括在方括号之间。例如：["Shock I", "Shock II"] 或 [1, 2, 3]。 |
| Object | 最复杂的属性类型。对象由多个属性组成，每个属性又有一种类型。这些属性有一个键（":"之前的部分）和一个值（":"之后的部分）。对于示例，见下文。 |

 Buildings.json 添加一个新的"Cultural Library"建筑，提供 +50% 科学和 +50% 文化的 Object 示例：

```
[
    {
        "name": "Cultural Library"
        "percentStatBonus" : {"science": 50, "culture": 50}
    }
]
```

此示例中的键是"science"和"culture"，两者都有值"50"。

在某种意义上，你可以从这些类型中看到 JSON 文件实际上是一个对象列表，每个对象描述单个建筑、单位或其他东西。

## 基础规则集要求

基础规则集模组必须本身是"完整的"，但这并不意味着它们必须包含所有可能的 json 文件，也不需要在所有文件中定义内容。以下是细分（WIP，可能不准确）：

| 文件 | 允许为空？ | 默认/回退 |
|------|-----------|-----------|
| Beliefs | 是 | 无 |
| Buildings | 否 | 无 |
| CityStateTypes | 否 | 原版 |
| Difficulties | 否 | 原版 |
| Eras | 否 | 无 |
| GlobalUniques | 是 | 原版 |
| ModOptions | 是 | 下载时生成 |
| Nations | 否 | 无 |
| Policies | 是 | 无 |
| Quests | 是 | 无 |
| Religions | 是 | 无 |
| Ruins | 是 | 原版 |
| Specialists | 是 | 无 |
| Speeds | 否 | 原版 |
| Techs | 是 | 无 |
| Terrains | 否 | 无 |
| TileImprovements | 是 | 无 |
| TileResources | 是 | 无 |
| Tutorials | 是 | 内置始终显示 |
| UnitPromotions | 是 | 无 |
| Units | 否 | 无 |
| UnitTypes | 否 | 原版 |
| VictoryTypes | 否 | 原版 |

* 模组加载永远不会因为缺少文件而失败，它们首先默认为空。然后仅对基础规则集应用上述提到的回退。该步骤之后的不一致将由模组检查器报告。
* GlobalUniques 在文件缺失时有回退。因此，模组可以通过包含一个空内容（`{}`）来故意定义没有。
* Ruins 在文件缺失时有回退。因此，模组可以通过包含一个空内容（`[]`）来故意定义没有。

## Uniques

"Uniques"是 Unciv 用于可扩展和可定制效果的标签。几乎每个"规则集对象"都允许一组 Uniques，作为名称为"uniques"的列表。

每个 Unique 遵循一般结构：`Unique 类型定义名称 [占位符] 更多名称 [另一个占位符] <条件或触发> <条件或触发>...`

整个字符串（不包括所有 `<>` 分隔符内的条件或触发及其分隔空格，以及不包括占位符但包括它们的 `[]` 分隔符）用于查找 Unique 的实现。

可选的 `[占位符]`的内容取决于实现，它们是修改效果的参数，在[Unique 参数](Unique 参数.md)中描述。

所有 `<条件或触发>`都是可选的（但如果使用，分隔它们的空格是必需的），并且每个都依次遵循 Unique 结构规则，用于 `<>` 尖括号之间的部分，包括可能的占位符，但不包括嵌套条件。

示例：`"uniques":["[+1 Gold] <with a garrison>"]` 在建筑上——几乎与 `"gold":1` 属性做同样的事情，除了它只在城市有驻军时应用。在此示例中，`[]` 和"with a garrison"是 Unciv 用于查找两个 Uniques 的键，一个效果（类型 `Stats`）和一个条件（类型 `ConditionalWhenGarrisoned`）。

Unciv 中实现的所有 Unique"类型"都在 [Uniques 系统](Uniques 系统.md) 中自动记录。还要注意[条件](条件 Uniques.md)和[触发条件](触发条件 Uniques.md)的单独部分。

与这些条目之一（逐字包括大小写！）不对应的 Uniques 称为"无类型"，将没有**直接**效果，并可能导致"规则集验证器"显示警告（参见选项标签"定位模组错误"，它也在开始新游戏时运行）。

"无类型"Uniques 的合法用途是它们作为可以在其他地方被识别的**过滤器**中的标记（例如，原版规则集中使用的"Aircraft"作为[单位过滤器](Unique 参数.md#baseunitfilter)）。

这种用法被"规则集验证器"识别，并且不会标记为无效——但过滤 Unique 也必须使用**无占位符或条件**才能通过测试。

如果你得到"not found in Unciv's unique types"警告，但你确定你使用了正确的过滤 Unique，请在所有地方寻找完全相同的拼写，包括大小写。

注意：目前一些模组使用无类型 Uniques 不是为了过滤目的，而是作为纯粹的信息工具。团队将尝试为该用途找到一种方法，而不会触发验证警告且不会降低验证质量，但到目前为止，这些是不可避免的。

## 游戏中使用的 JSON 文件信息

Unciv 的许多部分都是可模组化的，每个都有单独的 json 文件。有建筑、单位、单位可以拥有的晋升、科技等的 json 文件。你可以定义的不同新建筑或单位可以有许多不同的属性，虽然并非所有都是必需的。下面是记录每个不同可以拥有的所有不同属性的表。只有标记为"必需"的属性才必须提供。所有其他属性都有在省略时将使用的默认值。

各个文件在[单独的页面](#目录)上描述。

## 文明相关 JSON 文件

### Beliefs.json

定义宗教信仰。包括信徒信仰、创始人信仰和改革者信仰。

### Buildings.json

定义游戏中的所有建筑，包括世界奇观和国宝。

### CityStateTypes.json

定义城邦类型（如军事型、文化型、贸易型等）及其特性。

### Nations.json

定义所有文明/国家，包括领袖、城市列表、起始单位、Uniques 等。

### Policies.json

定义社会政策树，包括传统、自由、荣誉、虔信等分支。

### Quests.json

定义城邦可能给玩家的任务。

### Religions.json

定义宗教和其相关属性。

### Specialists.json

定义专家类型及其效果。

### Techs.json

定义科技树，包括每个科技的先决条件、成本、Uniques 等。

## 地图相关 JSON 文件

### Terrains.json

定义所有地形类型（如平原、草原、沙漠、山脉、海洋等）及其属性。

### TileResources.json

定义地块资源（如小麦、铁矿、马匹、奢侈品等）。

### TileImprovements.json

定义地块改良（如农场、矿山、道路、要塞等）。

### Ruins.json

定义古代遗迹及其可能的奖励。

### 地形集特定 json

定义自定义地形集的配置和属性。

## 单位相关 JSON 文件

### Units.json

定义所有单位类型，包括战斗属性、升级路径、Uniques 等。

### UnitPromotions.json

定义单位晋升（如震撼 I、钻探 I、机动 I 等）。

### UnitTypes.json

定义单位类型类别（如近战、远程、攻城、骑兵等）。

### UnitNameGroups.json

定义单位名称组（如"Scientist"组、"Artist"组等）。

## 杂项 JSON 文件

### Difficulties.json

定义游戏难度级别及其属性。

### Eras.json

定义游戏时代（如远古、古典、中世纪、文艺复兴等）。

### ModOptions.json

定义模组特定的选项和配置。

### GlobalUniques.json

定义全局适用的 Uniques。

### Speeds.json

定义游戏速度（如标准、快速、史诗、马拉松）。

### Tutorials.json

定义教程。

### VictoryTypes.json

定义胜利类型（如科技胜利、文化胜利、外交胜利、统治胜利）。

## 属性

Unciv 使用七种主要属性：

- Production（生产力）
- Food（食物）
- Gold（金币）
- Science（科学）
- Culture（文化）
- Happiness（幸福）
- Faith（信仰）

## Civilopedia 文本

Civilopedia 文本通过翻译系统处理，使用 `.properties` 文件。

## 相关资源

- [类型检查](类型检查.md)
- [Uniques 系统](Uniques 系统.md)
- [Unique 参数](Unique 参数.md)