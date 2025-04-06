import type { RamenShop } from "../types/ramen-shop";

const RAMEN_PATH = "/images/ramen";

export const RAMEN_SHOPS: RamenShop[] = [
  {
    name: "武蔵家 大山店",
    visitDate: "2025-03-20",
    imageUrl: `${RAMEN_PATH}/武蔵家 大山店_1.webp`,
    googleMapsUrl: "https://maps.app.goo.gl/fbDkqPahW4HAYEpMA",
    taberoguUrl: "https://tabelog.com/tokyo/A1322/A132203/13181073/",
    notes:
      "並で味玉とかのトッピングがついてくるのありがたい。ライスも無料でおかわりし放題でコスパいい。",
    tags: ["ラーメン", "家系"],
  },
  {
    name: "武蔵野アブラ学会 代々木店",
    visitDate: "2025-03-18",
    imageUrl: `${RAMEN_PATH}/武蔵野アブラ学会 代々木店_1.webp`,
    googleMapsUrl: "https://maps.app.goo.gl/DVRZAozVsTxC1iEp7",
    taberoguUrl: "https://tabelog.com/tokyo/A1304/A130403/13161763/",
    notes: "めちゃうまだった。しかも安い。",
    tags: ["油そば"],
  },
  {
    name: "油そば専門店 ぶらぶら 新宿店",
    visitDate: "2025-03-13",
    imageUrl: `${RAMEN_PATH}/油そば専門店 ぶらぶら 新宿店_1.webp`,
    googleMapsUrl: "https://maps.app.goo.gl/DVRZAozVsTxC1iEp7",
    taberoguUrl: "https://tabelog.com/tokyo/A1304/A130401/13200255/",
    notes:
      "トッピングいっぱいあった。並・大・特が無料だったが、大盛りくらいでちょうどよかった",
    tags: ["油そば"],
  },
  {
    name: "無敵家",
    visitDate: "2025-03-12",
    imageUrl: `${RAMEN_PATH}/無敵家_1.webp`,
    googleMapsUrl: "https://maps.app.goo.gl/wcUDVq2mRwqg4TDN6",
    taberoguUrl: "https://tabelog.com/tokyo/A1305/A130501/13003927/",
    notes:
      "チャーシューがすごかった。平日14時くらいの雨の日でも20分くらい並んだ。",
    tags: ["ラーメン", "家系"],
  },
  {
    name: "東京油組総本店 西新宿組",
    visitDate: "2025-03-11",
    imageUrl: `${RAMEN_PATH}/東京油組総本店 西新宿組_1.webp`,
    googleMapsUrl: "https://maps.app.goo.gl/Q24g1EoSNPB4rU7XA",
    taberoguUrl: "https://tabelog.com/tokyo/A1304/A130401/13167280/",
    notes: "大盛り無料で腹一杯食べれた。しかも安い。",
    tags: ["油そば"],
  },
  {
    name: "麺屋NOBUNAGA",
    visitDate: "2025-03-08",
    imageUrl: `${RAMEN_PATH}/麺屋NOBUNAGA_1.webp`,
    googleMapsUrl: "https://maps.app.goo.gl/2r4penh6WmT9FLG39",
    taberoguUrl: "https://tabelog.com/tokyo/A1302/A130202/13304145/",
    notes:
      "多分自分以外全員観光客だった。Googleマップの評価が見たことないレベルで高い。",
    tags: ["ラーメン"],
  },
  {
    name: "生パスタ専門店 麦と卵 新宿西口店",
    visitDate: "2025-02-25",
    imageUrl: `${RAMEN_PATH}/生パスタ専門店 麦と卵 新宿西口店_1.webp`,
    googleMapsUrl: "https://maps.app.goo.gl/6QJERVWtCexgE4fP9",
    taberoguUrl: "https://tabelog.com/tokyo/A1304/A130401/13264682/",
    notes: "お店が中がオシャレだった。大盛りにしてお腹いっぱい食べた。",
    tags: ["パスタ"],
  },
  {
    name: "十味や",
    visitDate: "2025-02-21",
    imageUrl: `${RAMEN_PATH}/十味や_1.webp`,
    googleMapsUrl: "https://maps.app.goo.gl/FUCPWjcwfDGSZPnG7",
    taberoguUrl: "https://tabelog.com/tokyo/A1304/A130401/13011949/",
    notes: "とおみやって読むらしい。",
    tags: ["ラーメン"],
  },
].map((shop, index) => ({ ...shop, id: (index + 1).toString() }));
