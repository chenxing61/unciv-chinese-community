---
title: 条件 Uniques
---

# 条件 Uniques

条件 Uniques 用于控制 Unique 效果何时生效。它们可以与任何 Unique 类型（Triggerable、Global、UnitTriggerable 等）结合使用。

## 概述

条件 Uniques 使用 `<...>` 语法，放置在 Unique 字符串的末尾。可以同时使用多个条件，所有条件都必须满足才能生效。

**语法**：
```
Unique 文本 <条件 1> <条件 2>
```

## 常见条件类型

### 城市相关条件

#### with a garrison

有驻军时生效。

**示例**：
- `[+1 Gold] <with a garrison>` - 有驻军时 +1 金币
- `[+10]% Strength <with a garrison>` - 有驻军时 +10% 战斗力

#### in capital

在首都生效。

**示例**：
- `[+2 Science] <in capital>` - 在首都 +2 科学

#### on coastal cities

在沿海城市生效。

**示例**：
- `[+1 Production] <in coastal cities>` - 在沿海城市 +1 生产力

#### with a world wonder

有世界奇观时生效。

**示例**：
- `[+2 Happiness] <with a world wonder>` - 有世界奇观时 +2 幸福

#### connected to capital

连接到首都时生效。

**示例**：
- `[+1 Gold] <connected to capital>` - 连接到首都时 +1 金币

### 战斗相关条件

#### when defending

防御时生效。

**示例**：
- `[+20]% Strength <when defending>` - 防御时 +20% 战斗力

#### when attacking

攻击时生效。

**示例**：
- `[+15]% Strength <when attacking>` - 攻击时 +15% 战斗力

#### when fighting

战斗时生效（攻击或防御）。

**示例**：
- `[+10]% Strength <when fighting>` - 战斗时 +10% 战斗力

#### when wounded

受伤时生效。

**示例**：
- `[+30]% Strength <when wounded>` - 受伤时 +30% 战斗力

#### when full health

生命值全满时生效。

**示例**：
- `[+15]% Strength <when full health>` - 生命值全满时 +15% 战斗力

### 地形相关条件

#### on hills

在丘陵上生效。

**示例**：
- `[+25]% Strength <on hills>` - 在丘陵上 +25% 战斗力

#### on forest

在森林上生效。

**示例**：
- `[+25]% Strength <on forest>` - 在森林上 +25% 战斗力

#### on open terrain

在开阔地形上生效。

**示例**：
- `[+10]% Strength <on open terrain>` - 在开阔地形上 +10% 战斗力

#### on rough terrain

在崎岖地形上生效。

**示例**：
- `[+25]% Strength <on rough terrain>` - 在崎岖地形上 +25% 战斗力

#### across rivers

渡河时生效。

**示例**：
- `[-20]% Strength <across rivers>` - 渡河时 -20% 战斗力

#### attacking across rivers

攻击时渡河生效。

**示例**：
- `[-20]% Strength <attacking across rivers>` - 攻击时渡河 -20% 战斗力

#### attacking into rough terrain

攻击崎岖地形时生效。

**示例**：
- `[-20]% Strength <attacking into rough terrain>` - 攻击崎岖地形时 -20% 战斗力

#### defending across rivers

防御时渡河生效。

**示例**：
- `[+25]% Strength <defending across rivers>` - 防御时渡河 +25% 战斗力

#### defending in rough terrain

在崎岖地形上防御时生效。

**示例**：
- `[+25]% Strength <defending in rough terrain>` - 在崎岖地形上防御 +25% 战斗力

#### on flat terrain

在平坦地形上生效（丘陵和森林之外）。

**示例**：
- `[+10]% Strength <on flat terrain>` - 在平坦地形上 +10% 战斗力

### 文明相关条件

#### when at war

战争期间生效。

**示例**：
- `[+15]% [Gold] <when at war>` - 战争期间 +15% 金币

#### when not at war

非战争期间生效。

**示例**：
- `[+2 Happiness] <when not at war>` - 非战争期间 +2 幸福

#### when at peace

和平期间生效。

**示例**：
- `[+1 Happiness] <when at peace>` - 和平期间 +1 幸福

#### with [buildingFilter] buildings

有特定建筑时生效。

**示例**：
- `[+1 Science] <with [Library] buildings>` - 有图书馆时 +1 科学

#### for [civFilter] Civilizations

对特定文明生效。

**示例**：
- `[+50]% [Gold] from Trade Routes <for [City-States] Civilizations>` - 与城邦的贸易路线 +50% 金币

### 资源相关条件

#### with [resourceFilter] resource

有特定资源时生效。

**示例**：
- `[+1 Happiness] <with [Luxury] resource>` - 有奢侈资源时 +1 幸福

#### with [amount] [resourceFilter] resources

有特定数量的资源时生效。

**示例**：
- `[+2 Happiness] <with [2] [Luxury] resources>` - 有 2 种奢侈资源时 +2 幸福

### 单位相关条件

#### for [mapUnitFilter] units

对特定单位生效。

**示例**：
- `[+10]% Strength <for [Mounted] units>` - 骑兵单位 +10% 战斗力

#### with [promotion] promotion

有特定晋升时生效。

**示例**：
- `[+15]% Strength <with [Shock I] promotion>` - 有震撼 I 晋升时 +15% 战斗力

#### as [mapUnitFilter] units

作为特定单位时生效。

**示例**：
- `[+20]% Strength <as [Great General] units>` - 作为大将军单位时 +20% 战斗力

### 时代相关条件

#### in [eraFilter] era

在特定时代生效。

**示例**：
- `[+10]% [Science] <in [Modern era] era>` - 在现代时代 +10% 科学

#### pre-[eraFilter] era

在特定时代之前生效。

**示例**：
- `[+20]% [Gold] <pre-[Industrial era] era>` - 在工业时代之前 +20% 金币

#### post-[eraFilter] era

在特定时代之后生效。

**示例**：
- `[+10]% [Production] <post-[Medieval era] era>` - 在中世纪之后 +10% 生产力

### 其他条件

#### only available

仅在满足条件时可用。

**示例**：
- `[+5]% Strength <only available>` - 仅在满足条件时可用（通常与 countable 结合使用）

#### only visible

仅在可见时生效。

**示例**：
- `[+1 Gold] <only visible>` - 仅在可见时 +1 金币

## 组合条件

可以组合多个条件，所有条件都必须满足。

**示例**：
- `[+20]% Strength <when defending> <on hills> <in own territory>` - 在己方领土的丘陵上防御时 +20% 战斗力
- `[+2 Science] <with [Library] buildings> <in [Ancient era] era>` - 在古代时代有图书馆时 +2 科学

## 条件与 Uniques 类型

### Triggerable Uniques

条件控制触发效果的条件。

**示例**：
- `Gain a free [Library] <in all cities>` - 在所有城市中获得免费图书馆
- `Free [Warrior] appears <when at war>` - 战争时免费战士出现

### Global Uniques

条件控制全局效果的条件。

**示例**：
- `[+1 Gold] per [Farm] <in all cities>` - 所有城市每块农田 +1 金币
- `[+20]% [Culture] <when at war>` - 战争时 +20% 文化

### UnitTriggerable Uniques

条件控制单位行动的条件。

**示例**：
- `[This Unit] heals [3] HP <when not at war>` - 非战争时此单位治疗 3 点生命值
- `[This Unit] gains [5] XP <when defending>` - 防御时此单位获得 5 点经验值

## 注意事项

1. **条件顺序**：条件可以按任意顺序放置
2. **空格要求**：条件前后必须有空格
3. **大小写敏感**：所有条件和值都是大小写敏感的
4. **参数验证**：使用 [JSON Schema](类型检查.md) 验证你的条件
5. **测试**：在游戏中测试条件是否按预期工作

## 相关资源

- [Uniques 系统](Uniques 系统.md)
- [Unique 参数](Unique 参数.md)
- [触发条件 Uniques](触发条件 Uniques.md)
- [类型检查](类型检查.md)