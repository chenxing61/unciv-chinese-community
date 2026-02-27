---
title: 创建新文明
---

# 创建新文明

通过本教程，你应该有一个可用的、公开可用的模组，可以向游戏添加一个新的文明。

## 创建你的仓库

- 创建一个 [GitHub 账户](https://github.com/join)，如果你还没有的话
- 进入[模组示例](https://github.com/yairm210/Unciv-mod-example)
- 点击绿色的 `Use this template` 按钮 - `Create a new repository`
- 选择你的仓库名称，然后点击 `Create repository from template`（保持设置为 'public'！）
- 你的新仓库现在可用了！

## 填写你的文明信息

每个文明都有一些基本信息——文明名称、领袖名称、颜色和城市名称。

此外，每个文明在宣战、介绍等时都有一些风味文本。

所有这些都需要在 `jsons/Nations.json` 文件中填写——更多示例参见[基础游戏文件](https://yairm210.github.io/Unciv/android/assets/jsons/Civ%20V%20-%20Gods%20&%20Kings/Nations.json)

## 获取你的文明图标

每个文明都有一个图标，如罗马的花环，用于快速识别。

所有这些图标都是白色背景透明，大小为 100x100 像素——详情参见[图标注意事项](#图标注意事项)

你需要将图标放在 `Images/NationIcons` 文件夹中——你可以导航到那里，点击 `Add file - Create a new file`（右上角）

## 测试它！

- 打开 Unciv
- 点击 'Mods' - '从 URL 下载模组'
- 将你的仓库 URL 复制粘贴到文本框中，然后点击 'Download'
- 退出模组屏幕，创建一个新游戏，选择你的模组——它会在左侧的 'Extension mods' 下

恭喜，你的文明现在完全可以玩了！

!!! 注意

    你目前不会看到这个模组的任何图像，因为它没有纹理集——详情参见[这里](../图像和音频.md#图像和纹理集)
    如果你在桌面端，可以重启 Unciv 来生成这个图集并查看图像

但这个文明的能力与基础模组完全相同。要使其真正独特，我们需要更改一些 Uniques ;)

## 添加独特单位

单位在 `jsons/Units.json` 中定义——对于基础游戏文件，参见[Units.json](https://yairm210.github.io/Unciv/android/assets/jsons/Civ%20V%20-%20Gods%20&%20Kings/Units.json)文件，图标在[UnitIcons](https://yairm210.github.io/Unciv/android/Images.Construction/UnitIcons)文件夹中。

图标必须是 200x200 像素，白色背景透明——详情参见[图标注意事项](#图标注意事项)——并放在 `Images/UnitIcons` 文件夹中

记住这些是独特单位，所以要搜索现有的独特单位，看看它们如何替换它们的常规对应物！

## 添加独特建筑

与单位相同——信息在 `jsons/Buildings.json` 中——对于基础游戏文件，参见[Buildings.json](https://yairm210.github.io/Unciv/android/assets/jsons/Civ%20V%20-%20Gods%20&%20Kings/Buildings.json)文件，图标在[BuildingIcons](https://yairm210.github.io/Unciv/android/Images.Construction/BuildingIcons)文件夹中，图标规则相同（200x200 像素，图标注意事项）

图标放在 `Images/BuildingIcons` 中

## 文明 Unique

查看我们的[uniques 列表](../Uniques 系统/)，看看你可以为你的文明添加哪些很酷的特殊效果！

## 让它可以被搜索！

要在 Unciv 模组屏幕中列出你的模组：

- 打开你的仓库
- 点击齿轮图标，位于 'About' 标签的右侧（右侧，顶部）
- 在 'Topics' 下，添加 'unciv-mod'
- 'Save changes'

恭喜，你的模组现在将显示在模组页面中！

你的仓库获得的星标越多，它出现在顶部的位置就越高，所以开始获得粉丝吧:D

## 图标注意事项

所有图标都必须是法律上可接受的，这意味着它们要么来自开源来源，要么你根据其许可证行事（例如，对于 Creative Commons，你必须指定来源和创作者）。

直接来自基础游戏的图标属于 Firaxis，所以我不确定我们在法律上是否可以使用它们——请使用其他来源！

我经常使用的一个来源是[The Noun Project](https://thenounproject.com)——那里的一切都是 Creative Commons 或开源的，所以都可以使用！

图标信用应该在 `Credits.md` 页面中。

## 下一步？

你有一个可用的模组，现在是时候发挥创意了！

- 添加[图集文件](../图像和音频.md#图像和纹理集)到你的仓库，以便你的用户获得图像
- 在本地安装 Git，以便你可以在设备上更改文件，并将这些更改反映到你的仓库中
- 通过添加新的[Uniques](../Uniques 系统/)来扩展你的文明能力
- 添加新的文明、建筑或单位
- 通过探索其余的[模组文件结构](../Mod 文件结构.md)扩展到其他游戏对象
- 尝试从[此模板](https://github.com/yairm210/Unciv-minimal-base-ruleset)创建基础规则集