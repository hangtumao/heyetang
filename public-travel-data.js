// Public-safe presentation data: representative-point distances only.
// Intentionally contains no geographic positions, road geometry or map imagery.
export const publicTravel = {
  asOf: '2026-11-05',
  destination: '富厚堂（家教圣地代表点）',
  straightMethod: '近似代表点之间、不计高差的地表大圆距离，保留一位小数；不是公路里程。',
  futureLabel: '桥白高速开通后 · 概念车行情景',
  futureNote: '假设桥白建成且接线可用；里程与速度为概念模型输入，非规划实测或官方预测。不是导航，实际可能超出范围。',
  sources: [{"label": "湖南省高速公路网规划（2024–2035年）", "url": "https://www.miluo.gov.cn/uploadfiles/202510/2025101416400848330.pdf#page=36"}, {"label": "省交通厅关于桥白高速规划的答复", "url": "https://jtt.hunan.gov.cn/jtt/jjzdgz/jytabl/zxta/202506/t20250617_33710897.html"}, {"label": "衡山白果至双峰工可报告咨询审查采购结果", "url": "https://jtt.hunan.gov.cn/jtt/xxgk/zdlyxxgk/zbzb/zbgs/202509/t20250917_33805954.html"}, {"label": "衡山县2026年政府工作报告", "url": "https://www.hengshan.gov.cn/xxgk/fdzdgknr/ghjh/20260312/i3872820.html"}, {"label": "省交通厅白南高速通车信息", "url": "https://jtt.hunan.gov.cn/jtt/xxgk/gzdt/szdt1/202409/t20240924_33461254.html"}, {"label": "南岳衡山环保车分时预约管理", "url": "https://www.nanyue.gov.cn/zwgk/nyyw/20260428/i3894827.html"}, {"label": "南岳中心景区车辆备案管理", "url": "https://www.nanyue.gov.cn/zwgk/bmdt/20260227/i3866127.html"}, {"label": "韶山核心景区交通管理", "url": "https://www.ssxww.net.cn/content/646042/69/16204128.html"}, {"label": "省交通质安局白南高速主线资料", "url": "https://jtt.hunan.gov.cn/hnjtza/zazt/jjzdxm/202304/t20230428_29326642.html"}],
  rows: [
    {id:'nanyue', label:'南岳圣地 → 家教圣地', origin:'衡山祝融峰代表点', km:'26.5', drive:'约 50–100 分钟', road:'假设公路里程 60–85 km', assumedRoad:'高速 50–65 km + 接线 10–20 km，共 60–85 km', speedAssumption:'高速平均 80–95 km/h，接线平均 30–40 km/h，另加 5–10 分钟进出停车缓冲。', driveOrigin:'南岳山下游客中心或合法停车点', endpointNote:'祝融峰不是私家车可直达的公路终点；上山换乘、索道与步行不计入纯车行时间。'},
    {id:'shaoshan', label:'红色圣地 → 家教圣地', origin:'韶山毛泽东同志故居代表点', km:'55.6', drive:'约 65–125 分钟', road:'假设公路里程 80–110 km', assumedRoad:'高速 65–85 km + 接线 15–25 km，共 80–110 km', speedAssumption:'高速平均 80–95 km/h，接线平均 30–40 km/h，另加 5–10 分钟进出停车缓冲。', driveOrigin:'韶山游客换乘中心或获准停车点', endpointNote:'故居代表点不等于可驾车抵达的停车点；须服从景区接驳与通行安排。'},
    {id:'jiufeng', label:'九峰山 → 家教核心四点', origin:'双峰九峰山公园近似 POI', km:'13.4', drive:'约 30–80 分钟', road:'假设地方道路 18–28 km', assumedRoad:'地方 / 山地道路 18–28 km，不假定走桥白高速', speedAssumption:'平均 25–35 km/h，另加 3–8 分钟进出停车缓冲。', driveOrigin:'九峰山可通行入口或停车点', endpointNote:'九峰山属于本案家教组团；公园 POI 不等于入口或峰顶，也不预设绕行高速更快。'}
  ]
};
