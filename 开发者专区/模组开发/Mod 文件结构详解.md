---
title: Mod 文件结构详解
---

# Mod 文件结构详解

本文档详细说明 Unciv 模组的文件结构和每个 JSON 文件的字段。

## 文件组织

模组通常包含以下结构：

```
mod-name/
├── jsons/
│   ├── Nations.json
│   ├── Units.json
│   ├── Buildings.json
│   └── ...
├── Images/
│   ├── NationIcons/
│   ├── UnitIcons/
│   ├── BuildingIcons/
│   └── ...
├── maps/          # 可选
├── sounds/        # 可选
├── music/         # 可选
└── ModOptions.json
```

## 文明相关 JSON 文件

### Nations.json

定义文明和国家。

#### 示例

```json
[
    {
        "name": "Rome",
        "leaderName": "Julius Caesar",
        "adjective": "Roman",
        "cityNames": ["Rome", "Antium", "Cumae", "Ravenna"],
        "unique": "[+1 Gold] from every [Trade Route]",
        "uniques": [
            "May generate [Great General] [25]% faster",
            "[-50]% [Culture] cost of border expansion"
        ],
        "startBias": ["Plains"],
        "color": { "r": 0.96, "g": 0.84, "b": 0.38 },
        "leaderIcon": "Julius Caesar",
        "outerColor": { "r": 0.85, "g": 0.69, "b": 0.12 },
        "innerColor": { "r": 0.96, "g": 0.84, "b": 0.38 }
    }
]
```

#### 字段说明

- `name`: 文明名称
- `leaderName`: 领袖名称
- `adjective`: 形容词形式
- `cityNames`: 城市名称列表
- `unique`: 主要 unique（显示在文明选择器）
- `uniques`: unique 列表
- `startBias`: 起始偏好
- `color`: 主颜色
- `leaderIcon`: 领袖图标
- `outerColor`: 外部颜色
- `innerColor`: 内部颜色

### Buildings.json

定义建筑。

#### 示例

```json
[
    {
        "name": "Library",
        "cost": 80,
        "uniques": [
            "[+1 Science] per [2] population [in this city]",
            "Enables [Science] generation"
        ],
        "requiredTech": "Writing",
        "greatPersonPoints": { "Scientist": 1 },
        "width": 1,
        "height": 1,
        "strength": 0
    }
]
```

#### 字段说明

- `name`: 建筑名称
- `cost`: 生产力成本
- `uniques`: unique 列表
- `requiredTech`: 需要的科技
- `greatPersonPoints`: 大伟人点数
- `width`: 宽度（地块）
- `height`: 高度（地块）
- `strength`: 防御力量

### Units.json

定义单位。

#### 示例

```json
[
    {
        "name": "Warrior",
        "cost": 40,
        "movement": 2,
        "strength": 6,
        "uniques": [
            "[-10]% combat penalty attacking cities",
            "No defensive terrain bonus"
        ],
        "requiredTech": null,
        "promotions": ["Shock I"],
        "unitType": "Melee",
        "upgradesTo": "Swordsman",
        "civilian": false,
        "greatPeople": null
    }
]
```

#### 字段说明

- `name`: 单位名称
- `cost`: 生产力成本
- `movement`: 移动力
- `strength`: 战斗力
- `uniques`: unique 列表
- `requiredTech`: 需要的科技
- `promotions`: 初始晋升
- `unitType`: 单位类型
- `upgradesTo`: 升级为
- `civilian`: 是否为平民单位
- `greatPeople`: 大伟人类型

### Policies.json

定义社会政策。

#### 示例

```json
[
    {
        "name": "Tradition",
        "uniques": [
            "[+50]% growth [in capital]",
            "[+3] [Culture] [in capital]"
        ],
        "row": 0,
        "column": 0,
        "branch": "Tradition"
    }
]
```

#### 字段说明

- `name`: 政策名称
- `uniques`: unique 列表
- `row`: 行位置
- `column`: 列位置
- `branch`: 所属分支

### Techs.json

定义科技。

#### 示例

```json
[
    {
        "name": "Pottery",
        "cost": 17,
        "uniques": [
            "Enables [Granary] construction",
            "Enables [Shrine] construction"
        ],
        "prerequisites": [],
        "row": 0,
        "column": 0,
        "era": "Ancient era"
    }
]
```

#### 字段说明

- `name`: 科技名称
- `cost`: 科学成本
- `uniques`: unique 列表
- `prerequisites`: 前置科技
- `row`: 行位置
- `column`: 列位置
- `era`: 所属时代

### Beliefs.json

定义宗教信仰。

#### 示例

```json
[
    {
        "name": "Tithe",
        "type": "Follower",
        "uniques": [
            "[+1 Gold] for every 4 followers [in cities following this religion]"
        ]
    }
]
```

#### 字段说明

- `name`: 信仰名称
- `type`: 信仰类型（Follower、Founder、Reformer）
- `uniques`: unique 列表

### CityStateTypes.json

定义城邦类型。

#### 示例

```json
[
    {
        "name": "Militaristic",
        "uniques": [
            "Military units gifted from City-States start with [10] XP"
        ]
    }
]
```

#### 字段说明

- `name`: 城邦类型名称
- `uniques`: unique 列表

### Quests.json

定义城邦任务。

#### 示例

```json
[
    {
        "name": "Defeat Barbarians",
        "unique": "Defeat [3] Barbarian units [in the territory of this City-State]"
    }
]
```

#### 字段说明

- `name`: 任务名称
- `unique`: 任务条件

### Religions.json

定义宗教。

#### 示例

```json
[
    {
        "name": "Christianity",
        "founderBelief": "Tithe",
        "followerBeliefs": ["Pilgrimage", "Peace Loving"],
        "worshipBelief": "Cathedral"
    }
]
```

#### 字段说明

- `name`: 宗教名称
- `founderBelief`: 创始人信仰
- `followerBeliefs`: 信徒信仰列表
- `worshipBelief`: 崇拜建筑

### Specialists.json

定义专家。

#### 示例

```json
[
    {
        "name": "Scientist",
        "uniques": [
            "[+1 Science] per specialist",
            "Consumes [1] Food [in this city]"
        ]
    }
]
```

#### 字段说明

- `name`: 专家名称
- `uniques`: unique 列表

## 地图相关 JSON 文件

### Terrains.json

定义地形。

#### 示例

```json
[
    {
        "name": "Grassland",
        "uniques": [
            "[+2 Food]",
            "Costs [10] [Movement] to enter",
            "Impassable to [Water] units"
        ],
        "movementCost": 1,
        "defenseBonus": 0,
        "occursOn": [],
        "improvements": ["Farm", "Mine", "Pasture"],
        "resources": ["Wheat", "Horses", "Iron"]
    }
]
```

#### 字段说明

- `name`: 地形名称
- `uniques`: unique 列表
- `movementCost`: 移动成本
- `defenseBonus`: 防御奖励
- `occursOn`: 出现的地形特征
- `improvements`: 可建造的改良
- `resources`: 可出现的资源

### TileResources.json

定义地块资源。

#### 示例

```json
[
    {
        "name": "Iron",
        "uniques": [
            "[+1 Production]",
            "Revealed by [Bronze Working]"
        ],
        "resourceType": "Strategic",
        "improvement": "Mine",
        "terrainsCanBeFoundOn": ["Hills"],
        "civilization": null
    }
]
```

#### 字段说明

- `name`: 资源名称
- `uniques`: unique 列表
- `resourceType`: 资源类型（Strategic、Luxury、Bonus）
- `improvement`: 所需改良
- `terrainsCanBeFoundOn`: 可发现的地形
- `civilization`: 特定文明

### TileImprovements.json

定义地块改良。

#### 示例

```json
[
    {
        "name": "Farm",
        "uniques": [
            "[+1 Food]",
            "Can only be built on [Land]",
            "Requires [1] [Population] [in this city]"
        ],
        "turnsToBuild": 5,
        "tech": "Agriculture",
        "terrainsCanBeBuiltOn": ["Grassland", "Plains"]
    }
]
```

#### 字段说明

- `name`: 改良名称
- `uniques`: unique 列表
- `turnsToBuild`: 建造回合数
- `tech`: 所需科技
- `terrainsCanBeBuiltOn`: 可建造的地形

### Ruins.json

定义古代遗迹。

#### 示例

```json
[
    {
        "name": "Ancient Ruins",
        "unique": "Provides a random reward when entered",
        "rewards": [
            "Discover [tech]",
            "Gain [50] [Gold]",
            "Gain [3] population [in a random city]"
        ]
    }
]
```

#### 字段说明

- `name`: 遗迹名称
- `unique`: unique 描述
- `rewards`: 可能的奖励列表

## 单位相关 JSON 文件

### UnitPromotions.json

定义单位晋升。

#### 示例

```json
[
    {
        "name": "Shock I",
        "uniques": [
            "[+15]% Strength",
            "[-15]% Strength when defending"
        ],
        "unitTypes": ["Melee"],
        "prerequisites": []
    }
]
```

#### 字段说明

- `name`: 晋升名称
- `uniques`: unique 列表
- `unitTypes`: 适用单位类型
- `prerequisites`: 前置晋升

### UnitTypes.json

定义单位类型。

#### 示例

```json
[
    {
        "name": "Melee",
        "uniques": [
            "Can be stacked on [Land]",
            "Cannot enter [Water] tiles"
        ],
        "attackStrength": 100,
        "defenseStrength": 100
    }
]
```

#### 字段说明

- `name`: 单位类型名称
- `uniques`: unique 列表
- `attackStrength`: 攻击强度
- `defenseStrength`: 防御强度

### UnitNameGroups.json

定义单位名称组。

#### 示例

```json
[
    {
        "name": "Scientist",
        "unitNames": [
            "Isaac Newton",
            "Albert Einstein",
            "Stephen Hawking"
        ]
    }
]
```

#### 字段说明

- `name`: 名称组名称
- `unitNames`: 单位名称列表

## 杂项 JSON 文件

杂项 JSON 文件详细说明请参见[杂项 JSON 文件说明](杂项 JSON 文件说明.md)。

包括：

- Difficulties.json - 游戏难度
- Eras.json - 游戏时代
- ModOptions.json - 模组选项
- GlobalUniques.json - 全局 Uniques
- Speeds.json - 游戏速度
- Tutorials.json - 教程
- VictoryTypes.json - 胜利类型

## 相关资源

- [Mod 文件结构](Mod 文件结构.md)
- [Uniques 系统](Uniques 系统.md)
- [Unique 参数](Unique 参数.md)
- [杂项 JSON 文件说明](杂项 JSON 文件说明.md)