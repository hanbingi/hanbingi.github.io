const config = {
	//网页元数据
	metaData: {
		title: 'L.H-D的个人主页🎉',
		description: '欢迎来到L.H-D的奇妙世界！',
		keywords: 'L.H-D,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "https://q.qlogo.cn/g?b=qq&nk=167499304&s=640", // 头像
	welcometitle: "Hi, I'm L.H-D", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['乐观开朗', '热爱生活', '随和亲切', '冷静沉着', '才思敏捷', '风趣幽默', '刚正不阿', '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "夜晚星空",
				"preview": "/img/wallpaper/static/书房夜晚/image-pre.webp",
				"url": "/img/wallpaper/static/书房夜晚/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static/书房夜晚/image-pre.webp",
				"url": "/img/wallpaper/static/书房夜晚/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/hanbingi" },
		{ icon: "mdi-email", link: "mailto:167499304@qq.com" },
		{ icon: "mdi-qqchat", link: "https://wpa.qq.com/msgrd?v=3&amp;uin=167499304&amp;site=qq&amp;menu=yes" },
		{ icon: "mdi-youtube", link: "https://space.bilibili.com/3546818287766345" },
	],

	//打字机
	typeWriterStrings: [
		"顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
		"心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
		"生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '7079411923'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ6bmia_n0sauz9m6NbBhLX8dWtK3cqAAI_GQACFzTYVEQbyBbz1zZYNgQ.png", title: "寒冰做的一些东西", subtitle: "1,000 miles of wonder", text: "寒冰做的一些东西", url: "https://hanbingi.github.io/download", show: false },
		{ go: "🗂️ 前往", img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ6cWia_opb59Q_vgSZLQ6xk-PasZ7_AAJCGQACFzTYVE4wXprjs0ZUNgQ.png", title: "重力粒子", subtitle: "2,000 miles of wonder", text: "重力粒子", url: "https://hanbingi.github.io/particles", show: false },
		{ go: "📝 前往", img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ6b2ia_oJwN-ZK1c7rwlK8kPk7b43gAAJAGQACFzTYVPwZuIZL7e-DNgQ.png", title: "黑洞", subtitle: "3,000 miles of wonder", text: "黑洞", url: "https://hanbingi.github.io/block_hole", show: false },
		{ go: "👍 前往", img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ6cGia_odq4udPLS7ZEBlbi8wX-RtYAAJBGQACFzTYVEo1u5R5HD80NgQ.png", title: "猫里奥", subtitle: "4,000 miles of wonder", text: "猫里奥", url: "https://hanbingi.github.io/catmario", show: false },
		{ go: "🗃 前往", img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ6d2ia_vR2EkP5ho2YYd7e-1BBLBiNAAJLGQACFzTYVLgQxPjAU2JONgQ.png", title: "魔塔", subtitle: "5,000 miles of wonder", text: "魔塔", url: "https://hanbingi.github.io/magictower", show: false },
		{ go: "🎨 前往", img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ6eGia_va9ojReVhzTTWfHVVkZMaoyAAJMGQACFzTYVG9uWguHV-5KNgQ.png", title: "小黑屋", subtitle: "6,000 miles of wonder", text: "小黑屋", show: false },
		{ go: "💍 前往", img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ6dmia_vJicYTMPynM4SXibGHNbpOdAAJKGQACFzTYVB8stcnrvgRfNgQ.png", title: "2D版我的世界", subtitle: "7,000 miles of wonder", text: "2D版我的世界", url: "https://hanbingi.github.io/minecraft_2d", show: false },
		{ go: "🔍 前往", img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAJ6e2ia_3Hbx0mdeZtYQaUqByX64VxgAAJRGQACFzTYVG2hr3TZ8JfpNgQ.png", title: "更多", subtitle: "8,000 miles of wonder", text: "更多", url: "https://hanbingi.github.io/more", show: false },
	],

/*	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 Leleo"], */
}

export default config