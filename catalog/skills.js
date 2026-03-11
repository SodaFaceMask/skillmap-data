
// skills.js
// =====================================================
// スキルカタログ（編集しやすい形）
// - domains: タブ単位（tech / business）
// - levelScale: レベル尺度
// - business には評価観点（dimensions）を持たせる
// =====================================================
window.SKILL_CATALOG = {
    version: "2026-01-27",
    domains: [
        {
            key: "tech",
            label: "技術スキル",
            levelScale: {
                maxLevel: 3,
                labels: ["未学習", "知ってる", "使用あり", "解説可能"]
            },
            //dimensions: [
            //    { key: "knowledge", label: "メモ" },
            //],
            categories: [
                {
                    label: "C#",
                    subcategories: [
                        {
                            label: "型", skills: [
                                { name: "匿名型" },
                                { name: "列挙体" },
                                { name: "構造体" },
                                { name: "デリゲート" },
                                { name: "dynamic" },
                                { name: "null許容値型" },
                                { name: "StringBuilder型" },
                                { name: "Dictionary" },
                            ]
                        },
                        {
                            label: "クラス", skills: [
                                { name: "クラス" },
                                { name: "静的クラス" },
                                { name: "コンストラクタ" },
                                { name: "partial" },
                                { name: "名前空間" },
                                { name: "抽象クラス" },
                            ]
                        },
                        {
                            label: "メソッド", skills: [
                                { name: "静的メソッド" },
                                { name: "メソッドのオーバーロード" },
                                { name: "拡張メソッド" },
                                { name: "値渡し" },
                                { name: "参照渡し" },
                                { name: "抽象メソッド" },
                            ]
                        },
                        {
                            label: "メモリ", skills: [
                                { name: "値型" },
                                { name: "参照型" },
                                { name: "ガベージコレクション" },
                            ]
                        },
                        {
                            label: "演算子", skills: [
                                { name: "インクリメント" },
                                { name: "デクリメント" },
                                { name: "is演算子" },
                                { name: "as演算子" },
                            ]
                        },
                        {
                            label: "構文", skills: [
                                { name: "イテレーター" },
                                { name: "プロパティ" },
                                { name: "自動プロパティ" },
                                { name: "遅延実行" },
                                { name: "foreach" },
                                { name: "ラムダ式" },
                                { name: "インデクサー" },
                            ]
                        },
                        {
                            label: "型推論", skills: [
                                { name: "ジェネリック" },
                            ]
                        },
                        {
                            label: "インターフェース", skills: [
                                { name: "IDisposable" },
                                { name: "IEnumerable" },
                            ]
                        },
                        {
                            label: "列挙体", skills: [
                                { name: "Enum" },
                            ]
                        },
                        {
                            label: "アクセス修飾子", skills: [
                                { name: "private" },
                                { name: "public" },
                                { name: "protected" },
                                { name: "internal" },
                            ]
                        },
                        {
                            label: "デリゲート", skills: [
                                { name: "デリゲート" },
                                { name: "マルチキャストデリゲート" },
                                { name: "Action" },
                                { name: "Predicate" },
                                { name: "Func" },
                            ]
                        },
                        {
                            label: "値型/参照型", skills: [
                                { name: "ボクシング、アンボクシング" },
                                { name: "スタック" },
                                { name: "ヒープ" },
                            ]
                        },
                        {
                            label: "変数", skills: [
                                { name: "メンバ変数" },
                                { name: "ローカル変数" },
                            ]
                        },
                        {
                            label: "キーワード", skills: [
                                { name: "async" },
                                { name: "await" },
                                { name: "const" },
                                { name: "readonly" },
                            ]
                        },
                        {
                            label: "Linq", skills: [
                                { name: "Any" },
                                { name: "AsEnumerable" },
                                { name: "FirstOrDefault" },
                                { name: "OfType" },
                                { name: "OrderBy" },
                                { name: "Select" },
                                { name: "Sum" },
                                { name: "ThenBy" },
                                { name: "ToList" },
                                { name: "Where" },
                                { name: "クエリ式" },
                            ]
                        },
                        {
                            label: "オブジェクト指向", skills: [
                                { name: "多態性" },
                                { name: "カプセル化" },
                                { name: "継承" },
                            ]
                        },
                        {
                            label: "インターフェース（概念）", skills: [
                                { name: "インターフェース" },
                            ]
                        },
                    ]
                },

                {
                    label: "SqlServer",
                    subcategories: [
                        {
                            label: "文字列", skills: [
                                { name: "文字型　varchar・nvarchar・char・nchar" },
                                { name: "REPLACE" },
                                { name: "SUBSTRING" },
                                { name: "LEFT・RIGHT" },
                                { name: "LEN・DATALENGTH" },
                                { name: "RTRIM・LTRIM" },
                                { name: "LOWER・UPPER" },
                                { name: "INITCAP" },
                                { name: "FORMAT" },
                            ]
                        },
                        {
                            label: "数値", skills: [
                                { name: "数値型(整数・小数・金額) int・decimal・money" },
                                { name: "ROUND" },
                                { name: "FLOOR" },
                                { name: "ABS" },
                                { name: "SIGN" },
                                { name: "MOD" },
                                { name: "POWER" },
                            ]
                        },
                        {
                            label: "日付", skills: [
                                { name: "日付型 DATE・DATETIME" },
                                { name: "GETDATE" },
                                { name: "CURRENT_TIMESTAMP" },
                                { name: "DATEADD" },
                                { name: "DATEDIFF" },
                                { name: "DATEPART" },
                                { name: "DATEFROMPARTS" },
                            ]
                        },
                        {
                            label: "データ取得", skills: [
                                { name: "ASC・DESC" },
                                { name: "OFFSET・FETCH" },
                                { name: "DISTINCT" },
                                { name: "HAVING" },
                                { name: "INNER JOIN" },
                                { name: "LEFT JOIN・RIGHT JOIN" },
                                { name: "FULL JOIN" },
                                { name: "CROSS JOIN" },
                                { name: "UNION・UNION ALL" },
                                { name: "INTERSECT" },
                                { name: "EXCEPT" },
                                { name: "OUTER APPLY" },
                                { name: "CROSS APPLY" },
                                { name: "等価結合・非等価結合" },
                                { name: "外部結合・内部結合" },
                                { name: "副問い合わせ" },
                                { name: "相関副問い合わせ" },
                                { name: "再帰クエリ" },
                            ]
                        },
                        {
                            label: "条件句", skills: [
                                { name: "IN" },
                                { name: "LIKE" },
                            ]
                        },
                        {
                            label: "変換", skills: [
                                { name: "CAST・CONVERT" },
                                { name: "TRY_CAST・TRY_CONVERT" },
                            ]
                        },
                        {
                            label: "分岐", skills: [
                                { name: "CASE" },
                                { name: "IIF" },
                                { name: "ISNULL" },
                                { name: "NULLIF" },
                            ]
                        },
                        {
                            label: "関数", skills: [
                                { name: "MAX・MIN・AVG" },
                                { name: "COUNT" },
                                { name: "SUM" },
                                { name: "ROW_NUMBER" },
                                { name: "RANK" },
                                { name: "DENSE_RANK" },
                                { name: "LAG・LEAD" },
                                { name: "OVER(PARTITION BY)" },
                                { name: "OVER(ORDER BY)" },
                                { name: "OVER(ORDER BY ~ ROWS)" },
                            ]
                        },
                        {
                            label: "トランザクション", skills: [
                                { name: "WITH(NOLOCK)" },
                                { name: "BEGIN TRAN・ROLLBACK・COMMIT" },
                                { name: "デッドロック" },
                                { name: "ダーティリード" },
                                { name: "ノンリピータブルリード" },
                                { name: "ファントムリード" },
                                { name: "トランザクション分離レベル" },
                                { name: "TABLOCK" },
                                { name: "SERIALIZABLE" },
                                { name: "REPEATABLE READ" },
                                { name: "READ COMMITTED" },
                                { name: "READ UNCOMMITTED" },
                            ]
                        },
                        {
                            label: "構文", skills: [
                                { name: "MERGE" },
                                { name: "CURSOR" },
                                { name: "TRUNCATE" },
                                { name: "WHILE" },
                                { name: "PIVOT・UNPIVOT" },
                                { name: "ROLLUP" },
                                { name: "TRY CATCH" },
                                { name: "IF" },
                            ]
                        },
                        {
                            label: "その他", skills: [
                                { name: "IDENTITY" },
                                { name: "BULK INSERT" },
                                { name: "正規化" },
                                { name: "テーブル定義型" },
                                { name: "照合順序" },
                                { name: "動的クエリ" },
                            ]
                        },
                        {
                            label: "インデックス", skills: [
                                { name: "クラスタ化インデックス" },
                                { name: "非クラスタ化インデックス" },
                                { name: "断片化" },
                                { name: "再構築・再構成" },
                            ]
                        },
                        {
                            label: "レスポンス", skills: [
                                { name: "実行プラン" },
                                { name: "WITH RECOMPILE" },
                                { name: "OPTION(RECOMPILE)" },
                                { name: "スカラー値関数" },
                                { name: "テーブル値関数" },
                                { name: "インラインテーブル値関数" },
                                { name: "カーディナリティ推定" },
                                { name: "パフォーマンスログ" },
                                { name: "圧縮（データ圧縮、バックアップ圧縮）" },
                            ]
                        },
                        {
                            label: "実行プラン", skills: [
                                { name: "パラメータースニッフィング" },
                                { name: "ハッシュ結合" },
                                { name: "ネステッドループ結合" },
                                { name: "ソートマージ結合" },
                                { name: "Index Seek, Index Scan, Table Scan" },
                                { name: "統計情報" },
                            ]
                        },
                    ]
                },

                {
                    label: "アルゴリズム",
                    subcategories: [
                        {
                            label: "探索", skills: [
                                { name: "全探索" },
                                { name: "累積和" },
                                { name: "いもす法" },
                                { name: "二分探索" },
                                { name: "尺取り法" },
                                { name: "深さ優先探索 (DFS)" },
                                { name: "幅優先探索 (BFS)" },
                                { name: "動的計画法 (DP)" },
                                { name: "順列列挙" },
                                { name: "bit全探索" },
                            ]
                        },
                        {
                            label: "グラフ", skills: [
                                { name: "ダイクストラ法" },
                                { name: "ワーシャルフロイド法" },
                                { name: "クラスカル法" },
                                { name: "最小カット" },
                                { name: "二部グラフ判定" },
                                { name: "二部マッチング" },
                                { name: "ダブリング" },
                                { name: "最大流" },
                            ]
                        },
                        {
                            label: "数学系", skills: [
                                { name: "逆元を計算する手法" },
                                { name: "素数判定" },
                                { name: "べき乗" },
                                { name: "行列累乗" },
                            ]
                        },
                        {
                            label: "データ構造", skills: [
                                { name: "Binary Indexed Tree (BIT)" },
                                { name: "Union-Find" },
                                { name: "セグメント木" },
                                { name: "遅延セグメント木" },
                                { name: "優先度付キュー" },
                            ]
                        },
                        {
                            label: "その他", skills: [
                                { name: "座標圧縮" },
                                { name: "Grundy 数" },
                                { name: "半分全列挙" },
                                { name: "平方分割" },
                                { name: "Rolling Hash" },
                            ]
                        },
                    ]
                },

                {
                    label: "WEB",
                    subcategories: [
                        { label: "HTML", skills: [{ name: "HTMLの知識" }] },
                        { label: "CSS", skills: [{ name: "スタイル・デザイン知識" }] },
                    ]
                }
            ]
        },

        {
            key: "business",
            label: "社会人基礎スキル",
            levelScale: {
                maxLevel: 4,
                labels: ["未意識", "理解している", "実践し始めた", "安定して実践", "周囲にいい影響を与えている"]
            },
            dimensions: [
                { key: "memo", label: "" },
            ],
            categories: [
                {
                    label: "知能技能",
                    subcategories: [
                        {
                            label: "専門性・信頼",
                            skills: [
                                { name: "高い専門知識とスキルを持ち信頼されている" }
                            ]
                        },
                        {
                            label: "情報伝達",
                            skills: [
                                { name: "正確かつ鮮度の高い情報を伝達できる" }
                            ]
                        },
                        {
                            label: "自己研鑽",
                            skills: [
                                { name: "必要な知識・スキルを自ら習得している" },
                                { name: "学習できる環境やプロジェクトに挑戦している" }
                            ]
                        }
                    ]
                },
                {
                    label: "判断力",
                    subcategories: [
                        {
                            label: "冷静な対応",
                            skills: [
                                { name: "状況変化や苦境でも冷静に対応できる" }
                            ]
                        },
                        {
                            label: "主張と調整",
                            skills: [
                                { name: "意見の相違があっても言うべきことを言える" },
                                { name: "相手の主張に流されず提案に導ける" }
                            ]
                        },
                        {
                            label: "意思決定",
                            skills: [
                                { name: "受け身ではなく自ら起点となり判断できる" },
                                { name: "周囲の意見を踏まえて判断できる" }
                            ]
                        },
                        {
                            label: "リスク予測",
                            skills: [
                                { name: "将来の問題を想定し関係者と対策を講じられる" }
                            ]
                        }
                    ]
                },
                {
                    label: "企画立案・実行力",
                    subcategories: [
                        {
                            label: "課題設定",
                            skills: [
                                { name: "具体的な課題を設定し解決策を企画できる" }
                            ]
                        },
                        {
                            label: "仮説思考",
                            skills: [
                                { name: "改善策・解決策の見通しを仮説立て検討できる" }
                            ]
                        },
                        {
                            label: "やり切る力",
                            skills: [
                                { name: "企画で終わらせず実行に移し続けられる" }
                            ]
                        },
                        {
                            label: "巻き込み力",
                            skills: [
                                { name: "部門全体の問題に対し周囲を巻き込み対応できる" },
                                { name: "周囲の企画を応援・参画・実行できる" }
                            ]
                        }
                    ]
                },
                {
                    label: "指導・統率力",
                    subcategories: [
                        {
                            label: "関係構築",
                            skills: [
                                { name: "部下・後輩に関心を持ち温かく接することができる" }
                            ]
                        },
                        {
                            label: "育成支援",
                            skills: [
                                { name: "業務指導だけでなく人間的成長も支援している" },
                                { name: "成長のために厳しい指摘やフィードバックができる" }
                            ]
                        },
                        {
                            label: "信頼と雰囲気",
                            skills: [
                                { name: "部下・後輩から信頼を得ている" },
                                { name: "周囲の士気を高める働きかけができる" }
                            ]
                        }
                    ]
                },
                {
                    label: "上方影響力",
                    subcategories: [
                        {
                            label: "上司との関係",
                            skills: [
                                { name: "上司に配慮しつつ自分の意見を伝え動かせる" },
                                { name: "上位視座で業務遂行やチャレンジができる" },
                                { name: "上司に考えや課題を認識してもらい支援を引き出せる" }
                            ]
                        }
                    ]
                }
            ]
        },


    ]
};

// =====================================================
// 互換: tech から window.SKILLS を生成（旧HTML/旧ロジック向け）
// window.SKILLS = [ [cat, sub, name], ... ]
// =====================================================
(function buildLegacyWindowSkills() {
    try {
        const tech = window.SKILL_CATALOG.domains.find(d => d.key === "tech");
        if (!tech) return;

        const out = [];
        for (const c of (tech.categories || [])) {
            for (const s of (c.subcategories || [])) {
                for (const sk of (s.skills || [])) {
                    const obj = (typeof sk === 'string') ? { name: sk } : sk;
                    out.push([c.label, s.label, obj.name]);
                }
            }
        }
        window.SKILLS = out;
    } catch {
        // ignore
    }
})();
