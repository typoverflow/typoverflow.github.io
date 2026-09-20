# 接入 Visitors 统计

本站地球仪已接好 `/hit`（POST，记录访问）和 `/stats`（GET，读取统计）。
参考站点使用独立 Cloudflare Worker；请部署自己的实例，不要填写参考站点的服务地址。

## Cloudflare 控制台部署

1. 登录 Cloudflare，在 **Storage & databases → D1** 创建数据库 `homepage-visitors`。
2. 打开数据库的 **Console**，粘贴并运行 `_tools/visitors/schema.sql` 的内容。
3. 在 **Workers & Pages → Create application → Create Worker** 创建基础 Worker，命名为 `homepage-visitors`，点击 **Deploy**。部分界面的入口名为 **Start with Hello World!**；无需在模板库搜索 Hello World。
4. 打开 **Edit code**，把默认代码全部替换为 `_tools/visitors/worker.js` 的内容，保存并部署。
5. 在 Worker 的 **Bindings → Add binding → D1 database** 中添加绑定：变量名称必须为 `DB`，数据库选择 `homepage-visitors`。保存并部署配置。
6. 默认允许 `https://about.gaocx.io` 和 `https://typoverflow.github.io`。如域名不同，在 Worker **Settings → Variables and Secrets** 添加普通文本变量 `ALLOWED_ORIGINS`，值为允许域名的 origin，以英文逗号分隔，不加末尾斜杠。
7. 复制 Worker 的 `https://homepage-visitors.<你的子域名>.workers.dev` 地址，填入站点 `_config.yml`：

   ```yaml
   visitor_stats_url: "https://homepage-visitors.<你的子域名>.workers.dev"
   ```

8. 按平时流程发布 GitHub Pages 网站。打开正式首页，地球仪下面应出现统计数字。

## 验证

- 直接打开 Worker 的 `/stats` 地址，应得到 `visits`、`countryCount`、`regions` 字段；初始为零。
- 打开正式首页后，再查看 `/stats`，应增加一次访问。刷新同一个标签页不会再次计数。
- 浏览器开发者工具 Network 中 `/hit` 和 `/stats` 应返回 200。
- 如果显示 Statistics unavailable，检查 `DB` 绑定、SQL 建表、允许域名和服务地址。
- 本地预览如需测试，请将预览 origin（例如 `http://localhost:4000`）临时加入允许列表；这些访问也会计数。

## 统计口径

按浏览器标签页 sessionStorage 去重，不是严格的独立访客人数。
数据库仅存国家/地区与累计访问次数，不存 IP、精确位置或访客标识。
蓝点是有访问的国家/地区的大致中心，不是访客的精确位置。
无法识别的地区仍计入总访问量，不计入国家/地区数量。
跨域限制用于限制普通浏览器来源，不是防刷机制；此轻量方案不做机器人过滤或强去重。
未配置服务或服务不可用时不显示虚构数字。

官方文档：https://developers.cloudflare.com/d1/get-started/
