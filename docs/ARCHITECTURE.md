# 代码架构

本项目是纯前端 Home Assistant Lovelace 卡片，HACS 分类为 Dashboard，工作流中的分类为 `plugin`。参考 `heiman_home` 的仓库组织方式，保留根目录 README、中文文档、Apache-2.0 许可证、HACS 元信息与 GitHub 校验；运行时代码使用前端插件结构。

```text
heiman_dashboard/
├── hacs.json                      # HACS 名称、入口文件、最低 HA 版本
├── dist/heiman_dashboard.js        # 可直接安装的单文件产物，需提交
├── src/
│   ├── index.ts                   # 注册卡片、编辑器和卡片搜索元信息
│   ├── base.ts                    # HA 状态、注册表加载与异步生命周期
│   ├── card.ts                    # 卡片、实体详情事件及原生服务操作
│   ├── editor.ts                  # 型号搜索、设备选择、样式及实体覆盖
│   ├── catalog.ts                 # 型号与 Zigbee 别名查找
│   ├── config.ts                  # 配置校验及默认值
│   ├── entities.ts                # 设备归属、子设备及实体角色匹配
│   ├── state.ts                   # 状态优先级与 HA 数值格式化
│   ├── i18n.ts                    # 中英文文案
│   ├── card-styles.ts             # 家居、消防、简约和暗色主题
│   ├── icons.ts                   # 本地 SVG 图标与通用产品示意图
│   └── data/catalog.json          # 型号、别名与固定上游提交
├── scripts/                       # 打包、预览及目录更新
├── tests/                         # 匹配与状态单测、真实 Chromium 交互测试
├── demo/                          # 明确标记为模拟数据的交互预览
├── image/                         # 从预览页面生成的实际截图
├── readme/README_cn.md
└── .github/workflows/             # 本地检查、HACS 校验和 Release
```

## 用户添加流程

模块加载后定义 `heiman-device-card` 和编辑器，并向 `window.customCards` 注册 **HEIMAN Dashboard**。HA 通过 `getConfigElement()` 加载编辑器，通过 `getStubConfig()` 生成初始配置。编辑器使用 `config-changed` 事件保存完整配置，并保留 HA 的 `grid_options` 等布局选项。

选择型号后按 HA 设备注册表的 `model_id`、`model` 及已知 Zigbee 型号别名匹配。唯一匹配时可自动使用；在编辑器中选择型号时会保存唯一设备的 ID。多个实例必须选择具体设备。已经保存的设备若被删除或与型号不符，提示重新选择。

卡片的 `getCardSize()` 和 `getGridOptions()` 支持 masonry 与 sections 布局。未知型号会在 `setConfig()` 中报错，避免以错误设备模板显示。

## Z2M 和 ZHA 适配

两者统一通过 HA 设备、实体注册表和 `hass.states` 读取，不直接访问 MQTT 或 Zigbee 协议。优先使用 HA 已加载的 `hass.devices` 和 `hass.entities`；未加载时使用 HA WebSocket 的设备与实体列表接口。请求按 HA 连接共享，失败时可重试，组件断开后丢弃过期结果。

实体归属由 `device_id` 决定，逻辑子设备递归归集。角色匹配优先使用实体 domain、`device_class` 和 `translation_key`，然后匹配语义明确的实体 ID 后缀。禁用或隐藏实体不参与自动匹配。配置类开关不当作主电源控制，数值浓度不当作布尔报警。

自动匹配保留同一角色的全部实体。例如多路开关保留每个通道，多个探测通道任何一个激活即显示报警。界面主要测量只展示每个角色的第一个实体，完整实体列表在详细信息中可查看。手动 `entities` 配置优先于自动匹配。

产品设置统一打开 `hass-more-info` 原生对话框，兼容上游新增实体；普通开关、照明和窗帘由 HA `callService` 操作具体实体，窗帘按钮按 `supported_features` 显示。报警器的自检、消音和声响设置不套用统一的硬编码服务；即使上游未标注设置实体类别，探测器开关仍放在原生设置中。

## 状态与可靠性

报警优先于其他状态。安全探测器的主实体缺失、读数未知、不可用或数据类型不匹配时不显示正常。烟雾/CO 复合探测器需两个通道都可用才显示正常。低电量、防拆、故障作为维护提示。电池未知不转换为零，LQI 不转换为百分比，温度和浓度不推断厂商未定义的报警阈值。

Lit 对配置、实体标签和数值进行转义；没有 `unsafeHTML` 或远程脚本。运行时不加载额外资源，不上传数据，不向 HEIMAN 或型号目录源发请求。

## 后续扩展

执行 `npm run catalog:update` 获取 Z2M 和 ZHA 当前源码快照。脚本只使用 TypeScript AST 和文本提取元数据，不执行下载的代码；保存上游提交 SHA 和逐型号 ZHA 处理文件。未认识的新产品类别或未映射的 ZHA 型号会中止生成，需要人工审核。

更新时检查 `src/data/catalog.json`、`docs/SUPPORTED_DEVICES.md` 和源提交差异，再补充必要实体角色及匹配测试。新增样式集中修改 `card-styles.ts`、编辑器选项、配置校验和翻译。通用 SVG 仅用于示意，后续可在本地打包官方产品素材。

运行 `npm run check` 和 `npm run test:browser` 后重新生成并提交 `dist/heiman_dashboard.js`。最低 HA 版本是兼容目标，正式发布前仍需在对应 HA 版本和实际设备上验收。
