// ==UserScript==
// @name         Modrinth-ChineseTranslated
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  一个汉化Modrinth网页的的脚本，将 Modrinth 网站的内容翻译成中文。
// @author       YlovexLN
// @match        https://modrinth.com/*
// @grant        none
// @license      GPL-3.0
// @downloadURL https://update.greasyfork.org/scripts/526366/Modrinth-ChineseTranslated.user.js
// @updateURL https://update.greasyfork.org/scripts/526366/Modrinth-ChineseTranslated.meta.js
// @supportURL https://github.com/YlovexLN/Modrinth-ChineseTranslated/issues
// ==/UserScript==

(function () {
  "use strict";

  // 翻译词典
  const translations = {
    "Discover content": "发现内容",
    "Host a server": "托管服务器",
    "Get Modrinth App": "获取 Modrinth 应用",
    "Modrinth App": "Modrinth 应用",
    "New project": "新建项目",
    "New collection": "新建收藏夹",
    "New organization": "新建组织",
    "The place for Minecraft mods plugins data packs shaders resource packs modpacks":
      "Minecraft 模组、插件、数据包、光影包、资源包和模组包的家园",
    mods: "模组",
    plugins: "插件",
    "data packs": "数据包",
    shaders: "光影包",
    "resource packs": "资源包",
    modpacks: "模组包",
    servers: "服务器",
    "Discover, play, and share Minecraft content through our open-source platform built for the community.":
      "通过我们为社区打造的开源平台发现、游玩和分享 Minecraft 内容。",
    "Discover mods": "发现模组",
    "Go to dashboard": "前往仪表盘",
    "For Players": "面向玩家",
    "Discover over 50,000 creations": "发现超过 50,000 个创作",
    "Find what you want, quickly and easily": "快速轻松地找到你想找的内容",
    Notifications: "通知",
    "Play with your favorite launcher": "使用你喜爱的启动器游玩",
    "Share your content with the world": "与世界分享你的内容",
    "Join the conversation": "加入讨论",
    "Loading...": "加载中...",
    "No results found": "未找到结果",
    Home: "首页",
    Login: "登录",
    Register: "注册",
    Profile: "个人资料",
    Settings: "设置",
    Logout: "登出",
    Dashboard: "仪表盘",
    "My Projects": "我的项目",
    "My Organizations": "我的组织",
    "My Collections": "我的收藏夹",
    "Create Project": "创建项目",
    "Create Collection": "创建收藏夹",
    "Create Organization": "创建组织",
    "Latest News": "最新新闻",
    Featured: "精选",
    "Support us": "支持我们",
    "Help & Support": "帮助和支持",
    Documentation: "文档",
    "Terms of Service": "服务条款",
    "Privacy Policy": "隐私政策",
    "Sort by": "排序方式",
    Categories: "分类",
    Trending: "趋势",
    "Featured Packs": "精选包",
    "Recent Activity": "最近活动",
    Community: "社区",
    Popular: "流行",
    "Search results for": "搜索结果",
    Submit: "提交",
    Apply: "应用",
    Cancel: "取消",
    Username: "用户名",
    Password: "密码",
    "Confirm Password": "确认密码",
    "Submit your mod": "提交你的模组",
    "Edit Project": "编辑项目",
    "Delete Project": "删除项目",
    "Project Settings": "项目设置",
    "Manage Organization": "管理组织",
    "Your Projects": "你的项目",
    "Your Collections": "你的收藏夹",
    "Your Organizations": "你的组织",
    "Add New Mod": "添加新模组",
    "Add New Collection": "添加新收藏夹",
    "Add New Organization": "添加新组织",
    "Minecraft Version": "Minecraft 版本",
    "Game Version": "游戏版本",
    "Choose File": "选择文件",
    Upload: "上传",
    Download: "下载",
    "Install Instructions": "安装说明",
    "Change Log": "更新日志",
    "Report an Issue": "报告问题",
    "View Project": "查看项目",
    "Version History": "版本历史",
    "Modrinth API": "Modrinth API",
    "About Us": "关于我们",
    Contact: "联系方式",
    Support: "支持",
    "API Documentation": "API 文档",
    "Privacy Settings": "隐私设置",
    "Invite a member": "邀请成员",
    "Manage Members": "管理成员",
    "Organization Settings": "组织设置",
    "Request Access": "请求访问",
    "Create New Project": "创建新项目",
    "Project Version": "项目版本",
    Resources: "资源",
    "Installation Instructions": "安装说明",
    "Review and Ratings": "评论与评分",
    "View Comments": "查看评论",
    "Add Comment": "添加评论",
    "Add Review": "添加评分",
    Approve: "批准",
    Reject: "拒绝",
    Draft: "草稿",
    Publish: "发布",
    Published: "已发布",
    Unpublished: "未发布",
    Starred: "收藏",
    Favorites: "收藏夹",
    "User Reviews": "用户评论",
    Developer: "开发者",
    Owner: "所有者",
    "Created by": "创建者",
    "Version Notes": "版本说明",
    "Mods and Add-ons": "模组和附加组件",
    Contribute: "贡献",
    Donate: "捐赠",
    "Download Now": "立即下载",
    "Latest Release": "最新版本",
    "Upcoming Updates": "即将更新",
    "Install Now": "立即安装",
    Required: "必需",
    Optional: "可选",
    "Add to Favorites": "加入收藏夹",
    "View Details": "查看详情",
    "Related Projects": "相关项目",
    "Related Mods": "相关模组",
    "View All": "查看所有",
    New: "新建",
    Version: "版本",
    "Link to this page": "链接到此页面",
    "Copy Link": "复制链接",
    Share: "分享",
    "View More": "查看更多",
    Back: "返回",
    "Go Back": "返回",
    Continue: "继续",
    Next: "下一步",
    Previous: "上一页",
    "Cancel Subscription": "取消订阅",
    "Manage Subscription": "管理订阅",
    "Subscribe Now": "立即订阅",
    "Notifications Settings": "通知设置",
    Activate: "激活",
    Deactivate: "停用",
    "Terms and Conditions": "条款与条件",
    "Cookies Policy": "Cookies 政策",
    "Privacy Preferences": "隐私偏好设置",
    "User Agreement": "用户协议",
    "Sign In": "登录",
    "Sign Up": "注册",
    "Forgot Password?": "忘记密码？",
    "Reset Password": "重置密码",
    "Change Email": "更改邮箱",
    "Change Username": "更改用户名",
    "Update Profile": "更新个人资料",
    "Account Settings": "账户设置",
    "Security Settings": "安全设置",
    "Two-factor Authentication": "两步验证",
    "Security Questions": "安全问题",
    "Session Expired": "会话过期",
    "Account Suspended": "账户被暂停",
    "Subscription Expired": "订阅已过期",
    "Confirm Email Address": "确认电子邮件地址",
    "Email Verified": "邮箱已验证",
    Error: "错误",
    Success: "成功",
    Warning: "警告",
    Information: "信息",
    Confirmation: "确认",
    "Action Required": "需要操作",
    Retry: "重试",
    Save: "保存",
    Edit: "编辑",
    Delete: "删除",
    Close: "关闭",
    Description: "描述",
    Tags: "标签",
    Comments: "评论",
    Reviews: "评价",
    Rating: "评分",
    Stars: "星标",
    Members: "成员",
    Projects: "项目",
    Collections: "收藏夹",
    Organizations: "组织",
    Followers: "关注者",
    Following: "正在关注",
    Follow: "关注",
    Unfollow: "取消关注",
    Joined: "加入日期",
    "Last Updated": "最后更新",
    License: "许可证",
    Permissions: "权限",
    Collaborators: "协作者",
    Admin: "管理员",
    Moderator: "版主",
    Member: "成员",
    Guest: "访客",
    Public: "公开",
    Private: "私有",
    Team: "团队",
    Role: "角色",
    Actions: "操作",
    Select: "选择",
    Filter: "筛选",
    Clear: "清除",
    All: "全部",
    Active: "活跃",
    Inactive: "不活跃",
    Online: "在线",
    Offline: "离线",
    Verified: "已验证",
    Pending: "待处理",
    Rejected: "已拒绝",
    Approved: "已批准",
    Blocked: "已阻止",
    Banned: "已封禁",
    Suspended: "已暂停",
    Disabled: "已禁用",
    Enabled: "已启用",
    Visible: "可见",
    Hidden: "隐藏",
    Open: "打开",
    Closed: "关闭",
    Locked: "锁定",
    Unlocked: "解锁",
    Allowed: "允许",
    Forbidden: "禁止",
    Granted: "授予",
    Revoked: "撤销",
    Assigned: "分配",
    Unassigned: "未分配",
    Available: "可用",
    Unavailable: "不可用",
    Installed: "已安装",
    "Not Installed": "未安装",
    Compatible: "兼容",
    Incompatible: "不兼容",
    Supported: "支持",
    Unsupported: "不支持",
    "Required Files": "必需文件",
    "Recommended Files": "推荐文件",
    "Optional Files": "可选文件",
    Dependencies: "依赖项",
    Conflict: "冲突",
    Changelog: "更新日志",
    "Read more": "阅读更多",
    "See all": "查看全部",
    "Load more": "加载更多",
  };

  // 遍历页面内容并替换为翻译
  const translateText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const originalText = node.textContent.trim();
      if (translations[originalText]) {
        node.textContent = translations[originalText];
      }
    } else {
      for (let child of node.childNodes) {
        translateText(child);
      }
    }
  };

  // 页面加载后开始翻译
  const observer = new MutationObserver(() => {
    translateText(document.body);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // 初次加载时立即翻译
  translateText(document.body);
})();
