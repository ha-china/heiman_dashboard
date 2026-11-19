# 发布与 HACS 审核

当前项目已准备为 HACS **Dashboard** 插件。版本发布、默认商店收录和实机验收需要在正式发布时完成；本地构建成功不等同于 HACS 审核通过。

## 仓库元信息

仓库名称使用 `heiman_dashboard`，与 `dist/heiman_dashboard.js` 和 `hacs.json.filename` 一致。公开地址为 `ha-china/heiman_dashboard`，若仓库所有者变化请同步更新。

在 GitHub 仓库中保持以下元信息：

- Description：`HEIMAN product cards for Home Assistant with Zigbee2MQTT and ZHA support.`
- Topics：`home-assistant`、`hacs`、`lovelace-custom-card`、`heiman`、`zigbee2mqtt`、`zha`。
- Issues 启用，许可证为 Apache-2.0，README 图片可从公开默认分支访问。

`hacs.json` 只使用官方支持的前端插件字段。发布目录包含可安装的同名 JS 文件，代码已将 Lit 和全部本地资源打包。工作流分类使用 `plugin`，不复制集成专用的 `hassfest` 或 Python `manifest.json`。

## 版本验证

1. 执行 `npm ci`、`npm run format:check`、`npm run check`。
2. 执行 `npx playwright install --with-deps chromium` 和 `npm run test:browser`。
3. 检查并提交重新构建的 `dist/heiman_dashboard.js`。更新版本时同步 `package.json`、lockfile、CHANGELOG 和演示页版本。
4. 在 HA 2025.10+ 和当前稳定版中实际安装。确认 HACS 下载、资源自动注册、浏览器刷新、卡片搜索、可视化配置、保存后重新打开和 sections/masonry 布局。
5. 使用实际 Z2M、ZHA 设备核对实体与型号别名；验证正常、报警、自检、不可用、低电量、多台相同型号和多路开关。记录设备固件、HA 与上游集成版本。
6. 将改动推送公开仓库，等待 **HACS Action** 与 **Validate** 全部通过。HACS Action 没有忽略项。需要实际公开仓库元信息，因此本地无法替代运行。

## Release

版本号与 Git 标签必须一致，如 `package.json` 的 `0.1.0` 对应 `v0.1.0`。推送该标签会触发 Release 工作流：重新校验、构建、运行浏览器测试并发布带 `heiman_dashboard.js` 附件的 GitHub Release。初期测试版本建议先在 GitHub 发布为 pre-release，正式实机验收后再创建稳定版本。

发布工作流不会自动提交到 HACS 默认商店。提交默认商店前应先验证 HACS 自定义仓库安装完整流程，并遵循[当前 HACS 收录要求](https://hacs.xyz/docs/publish/include/)，由仓库所有者或主要贡献者向 `hacs/default` 的 `plugin` 列表提交 PR。

参考：[通用发布要求](https://hacs.xyz/docs/publish/start/)、[Dashboard 文件结构](https://hacs.xyz/docs/publish/plugin/)、[HACS Action](https://hacs.xyz/docs/publish/action/)、[HA 卡片注册与编辑器](https://contributors.home-assistant.io/frontend/custom-ui/card-editor/)。
