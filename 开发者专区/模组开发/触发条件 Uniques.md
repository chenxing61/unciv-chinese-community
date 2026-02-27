---
title: 触发条件 Uniques
---

# 触发条件 Uniques

触发条件 Uniques 用于定义何时触发 Unique 效果。它们可以与任何 Unique 类型结合使用，特别是 Triggerable Uniques。

## 概述

触发条件使用 `on` 关键字，定义触发事件的时机。

**语法**：
```
Unique 文本 <on 事件>
```

## 常见触发事件

### 回合相关触发

#### on turn start

回合开始时触发。

**示例**：
- `[+5 Gold] <on turn start>` - 回合开始时获得 5 金币
- `Heal [3] HP <on turn start>` - 回合开始时治疗 3 点生命值

#### on turn end

回合结束时触发。

**示例**：
- `[+1 Culture] <on turn end>` - 回合结束时获得 1 文化

#### every [countable] turns

每 X 回合触发一次。

**示例**：
- `Gain [10] [Gold] <every [10] turns>` - 每 10 回合获得 10 金币
- `[MapUnitFilter] units heal [2] HP <every [turns]>` - 每回合单位治疗 2 点生命值

### 战斗相关触发

#### on attack

攻击时触发。

**示例**：
- `[This Unit] heals [3] HP <on attack>` - 攻击时此单位治疗 3 点生命值
- `Gain [5] [Culture] <on attack>` - 攻击时获得 5 文化

#### on defeated

被击败时触发。

**示例**：
- `[This Unit] damages [3] HP <on defeated>` - 被击败时此单位造成 3 点伤害
- `Gain [10] [Gold] <on defeated>` - 被击败时获得 10 金币

#### on kill

击杀敌人时触发。

**示例**：
- `[This Unit] heals [5] HP <on kill>` - 击杀敌人时此单位治疗 5 点生命值
- `Gain [10] [XP] <on kill>` - 击杀敌人时获得 10 经验值

#### on victory

战斗胜利时触发。

**示例**：
- `Gain [5] [Culture] <on victory>` - 战斗胜利时获得 5 文化

#### on defeat

战斗失败时触发。

**示例**：
- `Gain [2] [XP] <on defeat>` - 战斗失败时获得 2 经验值

### 建筑相关触发

#### on construction

建造时触发。

**示例**：
- `Gain [5] [Population] <on construction>` - 建造时获得 5 人口

#### on building constructed

建造特定建筑时触发。

**示例**：
- `Gain [10] [Gold] <on building [Library] constructed>` - 建造图书馆时获得 10 金币

#### on improvement built

建造改良时触发。

**示例**：
- `Gain [5] [Gold] <on improvement [Farm] built>` - 建造农田时获得 5 金币

### 科技相关触发

#### on research

研究科技时触发。

**示例**：
- `Gain [10] [Culture] <on research>` - 研究科技时获得 10 文化

#### on [tech] researched

研究特定科技时触发。

**示例**：
- `Free [Worker] appears <on [Pottery] researched>` - 研究陶艺时免费工人出现
- `Gain [50] [Gold] <on [Writing] researched>` - 研究书写时获得 50 金币

### 政策相关触发

#### on policy adopted

采用政策时触发。

**示例**：
- `Gain [5] [Culture] <on policy adopted>` - 采用政策时获得 5 文化

#### on [policy] adopted

采用特定政策时触发。

**示例**：
- `Gain [10] [Gold] <on [Tradition] adopted>` - 采用传统时获得 10 金币

### 宗教相关触发

#### on religion founded

宗教创立时触发。

**示例**：
- `Gain [10] [Faith] <on religion founded>` - 宗教创立时获得 10 信仰

#### on city converts

城市转换宗教时触发。

**示例**：
- `Gain [5] [Faith] <on city converts>` - 城市转换宗教时获得 5 信仰

### 城市相关触发

#### on city founded

城市建立时触发。

**示例**：
- `Gain [10] [Gold] <on city founded>` - 城市建立时获得 10 金币

#### on city conquered

城市被征服时触发。

**示例**：
- `Gain [50] [Gold] <on city conquered>` - 城市被征服时获得 50 金币

#### on city razed

城市被夷平时触发。

**示例**：
- `Gain [25] [Gold] <on city razed>` - 城市被夷平时获得 25 金币

#### on city annexed

城市被吞并时触发。

**示例**：
- `Gain [2] [Population] <on city annexed>` - 城市被吞并时获得 2 人口

#### on city puppeted

城市被傀儡化时触发。

**示例**：
- `Gain [5] [Gold] <on city puppeted>` - 城市被傀儡化时获得 5 金币

### 时代相关触发

#### on era change

时代改变时触发。

**示例**：
- `Gain [10] [Culture] <on era change>` - 时代改变时获得 10 文化

#### on entering [eraFilter] era

进入特定时代时触发。

**示例**：
- `Gain [50] [Gold] <on entering [Medieval era] era>` - 进入中世纪时获得 50 金币

### 黄金时代相关触发

#### on golden age start

黄金时代开始时触发。

**示例**：
- `Gain [10] [Culture] <on golden age start>` - 黄金时代开始时获得 10 文化

#### on golden age end

黄金时代结束时触发。

**示例**：
- `Gain [5] [Gold] <on golden age end>` - 黄金时代结束时获得 5 金币

### 资源相关触发

#### on resource discovered

发现资源时触发。

**示例**：
- `Gain [5] [Gold] <on resource discovered>` - 发现资源时获得 5 金币

#### on resource improved

资源被改良时触发。

**示例**：
- `Gain [10] [Gold] <on resource improved>` - 资源被改良时获得 10 金币

### 大伟人相关触发

#### on great person born

大伟人出生时触发。

**示例**：
- `Gain [10] [Culture] <on great person born>` - 大伟人出生时获得 10 文化

#### on [Great Person] born

特定大伟人出生时触发。

**示例**：
- `Gain [20] [Science] <on [Great Scientist] born>` - 大科学家出生时获得 20 科学

### 外交相关触发

#### on declare war

宣战时触发。

**示例**：
- `Gain [5] [Happiness] <on declare war>` - 宣战时获得 5 幸福

#### on peace declared

宣布和平时触发。

**示例**：
- `Gain [10] [Gold] <on peace declared>` - 宣布和平时获得 10 金币

#### on make peace

达成和平时触发。

**示例**：
- `Gain [5] [Happiness] <on make peace>` - 达成和平时获得 5 幸福

### 单位相关触发

#### on unit created

单位创建时触发。

**示例**：
- `Gain [5] [Gold] <on unit created>` - 单位创建时获得 5 金币

#### on [mapUnitFilter] unit created

特定单位创建时触发。

**示例**：
- `Gain [10] [Gold] <on [Settler] unit created>` - 创建移民时获得 10 金币

#### on unit upgraded

单位升级时触发。

**示例**：
- `[This Unit] heals [5] HP <on unit upgraded>` - 单位升级时此单位治疗 5 点生命值

#### on unit promoted

单位获得晋升时触发。

**示例**：
- `Gain [5] [XP] <on unit promoted>` - 单位获得晋升时获得 5 经验值

### 其他触发

#### on entering [tileFilter] tiles

进入特定地块时触发。

**示例**：
- `Gain [5] [Gold] <on entering [Natural Wonder] tiles>` - 进入自然奇观时获得 5 金币

#### on founding city

建立城市时触发。

**示例**：
- `Gain [10] [Population] <on founding city>` - 建立城市时获得 10 人口

#### on founding capital

建立首都时触发。

**示例**：
- `Gain [50] [Gold] <on founding capital>` - 建立首都时获得 50 金币

## 触发条件与 Uniques 类型

### Triggerable Uniques

触发条件定义何时触发效果。

**示例**：
- `Free [Warrior] appears <on turn [10]>` - 第 10 回合时免费战士出现
- `Gain [10] [Gold] <on city founded>` - 建立城市时获得 10 金币

### Global Uniques

触发条件定义全局效果的触发时机。

**示例**：
- `[+5 Gold] <on turn start>` - 回合开始时获得 5 金币
- `Gain [10] [Culture] <on golden age start>` - 黄金时代开始时获得 10 文化

### UnitTriggerable Uniques

触发条件定义单位行动的触发时机。

**示例**：
- `[This Unit] heals [3] HP <on attack>` - 攻击时此单位治疗 3 点生命值
- `[This Unit] gains [5] XP <on kill>` - 击杀敌人时此单位获得 5 经验值

## 组合触发条件

可以组合多个触发条件。

**示例**：
- `Gain [10] [Gold] <on attack> <on kill>` - 攻击并击杀时获得 10 金币

## 触发条件与条件

触发条件和条件可以一起使用。

**示例**：
- `Gain [10] [Gold] <on attack> <when at war>` - 战争期间攻击时获得 10 金币
- `[This Unit] heals [5] HP <on kill> <on [Ranged] units>` - 击杀远程单位时此单位治疗 5 点生命值

## 注意事项

1. **触发时机**：确保触发时机合理，避免重复触发
2. **参数验证**：使用 [JSON Schema](类型检查.md) 验证你的触发条件
3. **测试**：在游戏中测试触发条件是否按预期工作
4. **性能**：避免使用过于频繁的触发条件
5. **平衡性**：确保触发效果的奖励平衡

## 相关资源

- [Uniques 系统](Uniques 系统.md)
- [Unique 参数](Unique 参数.md)
- [条件 Uniques](条件 Uniques.md)
- [类型检查](类型检查.md)