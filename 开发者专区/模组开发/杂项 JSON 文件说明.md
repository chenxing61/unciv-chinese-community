---
title: 杂项 JSON 文件说明
---

# 杂项 JSON 文件说明

本文档详细说明 Unciv 模组中的杂项 JSON 文件，包括 ModOptions.json、GlobalUniques.json、Speeds.json、Tutorials.json、VictoryTypes.json 等。

## ModOptions.json

ModOptions.json 文件用于定义模组的特定选项和配置。

### 基础规则集配置

```json
{
    "isBaseRuleset": true
}
```

设置 `isBaseRuleset` 为 true 会使该模组成为基础规则集模组，意味着它从零开始，不包含任何原版对象。

### 删除对象

```json
{
    "nationsToRemove": ["Rome", "Greece"],
    "unitsToRemove": ["Warrior", "Scout"],
    "buildingsToRemove": ["Monument"]
}
```

使用这些字段可以删除特定的对象。

### 模组选项

```json
{
    "modOptions": [
        {
            "name": "Option Name",
            "unique": "Option description",
            "default": false
        }
    ]
}
```

定义模组选项，玩家可以在模组管理器中启用或禁用。

### 永久视听模组

```json
{
    "permanentAudiovisual": true
}
```

设置为 true 时，该模组将作为永久视听模组出现在模组管理器中。

## GlobalUniques.json

GlobalUniques.json 文件定义全局适用的 Uniques，这些 Uniques 在整个游戏中生效。

### 示例

```json
[
    {
        "unique": "[+1 Gold, +1 Production] from every [Farm]",
        "type": "Global"
    }
]
```

### 常见用途

- 定义全局经济修正
- 设置游戏机制调整
- 创建全局效果

## Speeds.json

Speeds.json 文件定义游戏速度设置，影响游戏节奏。

### 字段说明

```json
[
    {
        "name": "Standard",
        "costModifier": 100,
        "productionModifier": 100,
        "goldGiftModifier": 100,
        "scienceCostModifier": 100,
        "cultureCostModifier": 100,
        "faithCostModifier": 100,
        "growthModifier": 100,
        "barbarianModifier": 100,
        "turns": 500,
        "years": [ -4000, 2050 ]
    }
]
```

- `name`: 速度名称
- `costModifier`: 成本修正（100 = 标准）
- `productionModifier`: 生产力修正
- `goldGiftModifier`: 金币礼物修正
- `scienceCostModifier`: 科学成本修正
- `cultureCostModifier`: 文化成本修正
- `faithCostModifier`: 信仰成本修正
- `growthModifier`: 成长修正
- `barbarianModifier`: 野蛮人修正
- `turns`: 游戏总回合数
- `years`: 游戏年份范围

## Tutorials.json

Tutorials.json 文件定义游戏教程。

### 示例

```json
[
    {
        "name": "Introduction",
        "highlight": "Welcome to Unciv!",
        "location": "MainMenu",
        "triggerTurn": 1
    }
]
```

### 字段说明

- `name`: 教程名称
- `highlight`: 高亮显示的文本
- `location`: 触发位置
- `triggerTurn`: 触发回合

## VictoryTypes.json

VictoryTypes.json 文件定义胜利类型。

### 字段说明

```json
[
    {
        "name": "Domination",
        "uniques": [
            "Capturing all enemy capitals wins the game"
        ],
        "milestones": [
            "Capturing [1] capital",
            "Capturing [2] capitals"
        ],
        "requiredSpaceshipParts": []
    }
]
```

- `name`: 胜利类型名称
- `uniques`: 胜利条件的 Uniques
- `milestones`: 里程碑
- `requiredSpaceshipParts`: 需要的太空船部件

## Difficulties.json

Difficulties.json 文件定义游戏难度级别。

### 字段说明

```json
[
    {
        "name": "Settler",
        "uniques": [
            "[-50]% Unit maintenance costs",
            "[-20]% unhappiness from the number of cities"
        ],
        "startingUnitTypes": ["Scout", "Warrior"],
        "startingMoney": 0,
        "startingCulture": 0
    }
]
```

- `name`: 难度名称
- `uniques`: 难度修正的 Uniques
- `startingUnitTypes`: 起始单位类型
- `startingMoney`: 起始金币
- `startingCulture`: 起始文化

## Eras.json

Eras.json 文件定义游戏时代。

### 字段说明

```json
[
    {
        "name": "Ancient era",
        "research": [
            "The Wheel",
            "Pottery"
        ],
        "startYear": -4000,
        "baseUnitCost": 10,
        "baseBuildingCost": 20,
        "baseWanderJoinProbability": 0
    }
]
```

- `name`: 时代名称
- `research`: 可研究的科技
- `startYear`: 起始年份
- `baseUnitCost`: 基础单位成本
- `baseBuildingCost`: 基础建筑成本
- `baseWanderJoinProbability`: 基础流浪单位加入概率

## 注意事项

1. **JSON 格式**：确保所有 JSON 文件格式正确，使用 UTF-8 编码
2. **Uniques 语法**：所有 Uniques 必须遵循正确的语法和参数
3. **引用关系**：某些文件之间有引用关系，确保引用的对象存在
4. **默认值**：如果不提供某些字段，游戏会使用默认值

## 相关资源

- [Mod 文件结构](Mod 文件结构.md)
- [Uniques 系统](Uniques 系统.md)
- [Unique 参数](Unique 参数.md)