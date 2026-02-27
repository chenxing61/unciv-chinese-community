---
title: 创建 UI 皮肤
---

# 创建 UI 皮肤

**在继续之前，你应该先阅读[模组开发入门](模组开发入门/)页面**

UI 皮肤是模组的一种类型，用于更改游戏的外观和界面。UI 皮肤模组可以作为永久视听模组使用。

## UI 皮肤概述

UI 皮肤可以更改：

- 按钮和控件样式
- 颜色方案
- 图标和符号
- 字体
- 界面布局（有限）

## 基本结构

UI 皮肤模组的基本结构：

```
my-ui-skin/
├── Images/
│   ├── OtherIcons/
│   ├── StatIcons/
│   └── ...
├── fonts/          # 可选
└── ModOptions.json
```

## 图标替换

### 替换现有图标

要替换现有的图标，将你的图像放在与原游戏相同的路径结构中。

**示例**：
```
Images/OtherIcons/Link.png      # 替换链接图标
Images/StatIcons/Movement.png   # 替换移动图标
Images/StatIcons/Range.png      # 替换射程图标
```

### 图标规范

- **格式**：PNG
- **大小**：建议 100x100 像素
- **背景**：透明背景
- **颜色**：白色或浅色（游戏会自动着色）

### 可替换的图标类别

#### OtherIcons

通用的 UI 图标。

- Link.png - 链接
- Lock.png - 锁
- Unlock.png - 解锁
- Star.png - 星星
- X.png - X

#### StatIcons

属性图标。

- Production.png - 生产力
- Food.png - 食物
- Gold.png - 金币
- Science.png - 科学
- Culture.png - 文化
- Happiness.png - 幸福
- Faith.png - 信仰
- Movement.png - 移动
- Range.png - 射程
- Strength.png - 战斗力
- RangedStrength.png - 远程战斗力

#### 其他图标类别

- NotificationIcons - 通知图标
- UnitActionIcons - 单位行动图标
- NationIcons - 文明图标
- UnitIcons - 单位图标
- BuildingIcons - 建筑图标
- TechIcons - 科技图标
- ResourceIcons - 资源图标
- ImprovementIcons - 改良图标

## 颜色自定义

### 主题颜色

UI 皮肤可以通过 ModOptions.json 自定义主题颜色。

**示例**：
```json
{
    "themeColors": {
        "primary": { "r": 0.2, "g": 0.5, "b": 0.8 },
        "secondary": { "r": 0.8, "g": 0.2, "b": 0.2 },
        "background": { "r": 0.1, "g": 0.1, "b": 0.1 }
    }
}
```

### 颜色规范

- 使用 RGB 值，范围 0.0 到 1.0
- 颜色会影响按钮、文本和其他 UI 元素

## 字体自定义

### 添加自定义字体

将 `.ttf` 字体文件放在模组的 `/fonts/` 目录中。

**示例**：
```
fonts/
├── MyCustomFont.ttf
└── AnotherFont.ttf
```

### 字体使用

添加的字体会在游戏设置的"高级"选项卡中显示，可以选择为 `<fontname> (<modname>)`。

**注意事项**：

- 字体默认以 50 像素大小渲染
- 游戏会根据需要缩放字体
- 确保字体支持需要的字符集

## 按钮样式

### 按钮图像

UI 皮肤可以替换按钮的默认图像。

**示例**：
```
Images/Buttons/
├── ButtonNormal.png
├── ButtonPressed.png
└── ButtonDisabled.png
```

### 按钮规范

- **格式**：PNG
- **大小**：根据按钮类型调整
- **状态**：正常、按下、禁用

## 特殊字符和表情符号

### 替换特殊字符

可以替换游戏中使用的特殊字符。

**示例**：
```
Images/EmojiIcons/
├── Culture.png      # 文化符号 ♪
├── Food.png         # 食物符号 ⁂
├── Gold.png         # 金币符号 ¤
├── Production.png   # 生产力符号 ⚙
└── ...
```

### 支持的符号

参见[图像和音频](图像和音频.md)中的完整符号列表。

## 纹理集

### 打包纹理集

UI 皮肤也需要打包纹理集，就像其他模组一样。

**方法**：

1. 在桌面端启动 Unciv，加载你的 UI 皮肤模组
2. 游戏会自动生成纹理集
3. 将生成的 `game.png` 和 `game.atlas` 添加到你的模组

**详细说明**：参见[图像和音频](图像和音频.md)中的纹理集打包章节。

## ModOptions.json

### UI 皮肤配置

在 ModOptions.json 中配置 UI 皮肤。

**示例**：
```json
{
    "name": "My UI Skin",
    "permanentAudiovisual": true,
    "uiSkin": true,
    "description": "A custom UI skin for Unciv"
}
```

### 配置字段

- `name`: 皮肤名称
- `permanentAudiovisual`: 设置为 true 使其成为永久视听模组
- `uiSkin`: 标识为 UI 皮肤
- `description`: 皮肤描述

## 示例 UI 皮肤

### 简单 UI 皮肤

创建一个简单的 UI 皮肤，更改几个图标：

1. 创建模组文件夹
2. 添加替换的图标
3. 创建 ModOptions.json
4. 打包纹理集

**ModOptions.json**：
```json
{
    "name": "Simple UI Skin",
    "permanentAudiovisual": true,
    "uiSkin": true
}
```

### 完整 UI 皮肤

创建一个完整的 UI 皮肤，包括：

- 所有图标替换
- 自定义颜色主题
- 自定义字体
- 按钮样式

**ModOptions.json**：
```json
{
    "name": "Complete UI Skin",
    "permanentAudiovisual": true,
    "uiSkin": true,
    "themeColors": {
        "primary": { "r": 0.3, "g": 0.6, "b": 0.9 },
        "secondary": { "r": 0.9, "g": 0.3, "b": 0.3 },
        "background": { "r": 0.05, "g": 0.05, "b": 0.05 }
    },
    "description": "A complete UI skin with custom colors and icons"
}
```

## 测试 UI 皮肤

### 测试步骤

1. 将 UI 皮肤模组放置在 `/mods` 文件夹
2. 启动 Unciv
3. 进入模组管理器
4. 启用你的 UI 皮肤作为永久视听模组
5. 检查所有 UI 元素是否正确显示

### 常见问题

- **图标不显示**：检查纹理集是否正确打包
- **颜色不正确**：检查 RGB 值是否在 0.0 到 1.0 范围内
- **字体不显示**：检查字体文件是否在 `/fonts/` 目录中

## 发布 UI 皮肤

### 发布步骤

1. 在 GitHub 创建仓库
2. 添加 `unciv-mod` 主题
3. 添加 `unciv-mod-graphics` 主题
4. 在模组管理器中测试下载

### 主题标签

- `unciv-mod` - 必需
- `unciv-mod-graphics` - 图形模组

## 注意事项

1. **性能**：避免使用过大的图像
2. **兼容性**：确保在不同设备上正常显示
3. **可访问性**：保持足够的对比度
4. **更新**：及时更新以适配游戏版本

## 相关资源

- [模组开发入门](模组开发入门/)
- [图像和音频](图像和音频.md)
- [自定义地形集](自定义地形集.md)
- [类型检查](类型检查.md)