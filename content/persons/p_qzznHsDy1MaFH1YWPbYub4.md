---
schema: wang-person/v1
id: p_qzznHsDy1MaFH1YWPbYub4
status: active
merged_into: null
display_name: 王培龄
cbdb_id: 202447
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZyBjvnD37jb5op9H6xxHuX
        subject_person_id: p_qzznHsDy1MaFH1YWPbYub4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培龄（生于1506年），明人物。明清進士進士，籍贯鄉寧，入仕進士。（中国历代人物传记资料库 CBDB 202447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_oiSPCKYXDWaiFF6M7Ad9kq
          claim_id: c_ZyBjvnD37jb5op9H6xxHuX
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_qTrXfDWBFpFpZgrDZ9JGLL
            source_type: api_record
            title: 维基数据：王培龄（Q45690317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45690317
            external_identifier: Q45690317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.150Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%B9%E9%BD%A1
        - id: cs_V55noUCto-OGTE6SfVkZfj
          claim_id: c_ZyBjvnD37jb5op9H6xxHuX
          source_id: s_ts58X1Zaop75mBb14WiveM
          stance: supports
          locator: CBDB:202447
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ts58X1Zaop75mBb14WiveM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王培齡（202447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202447&o=json
            external_identifier: CBDB:202447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:50.339Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HuzbSm9rVC5o6QqrPhxpST
        subject_person_id: p_qzznHsDy1MaFH1YWPbYub4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1506-01-01
            latest: 1506-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AFJPWgnrbXGkH4um8habwq
          claim_id: c_HuzbSm9rVC5o6QqrPhxpST
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_qTrXfDWBFpFpZgrDZ9JGLL
            source_type: api_record
            title: 维基数据：王培龄（Q45690317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45690317
            external_identifier: Q45690317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.150Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%B9%E9%BD%A1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YpM3dGy55KB5gbCFERwq4B
        subject_person_id: p_qzznHsDy1MaFH1YWPbYub4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培龄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZDKbAhRVnL5Lx7qj5HviTi
          claim_id: c_YpM3dGy55KB5gbCFERwq4B
          source_id: s_ts58X1Zaop75mBb14WiveM
          stance: supports
          locator: Q45690317
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_e5dUYJDN9tZ2ey9mym9zih
          claim_id: c_YpM3dGy55KB5gbCFERwq4B
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: Q45690317
          quotation: null
          interpretation_note: null
          source:
            id: s_qTrXfDWBFpFpZgrDZ9JGLL
            source_type: api_record
            title: 维基数据：王培龄（Q45690317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45690317
            external_identifier: Q45690317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.150Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%B9%E9%BD%A1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JErb13NwKanyRCrk8HTQXg
        subject_person_id: p_KHASkzeAzAbrH4KC5REzz6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qzznHsDy1MaFH1YWPbYub4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2GhSyhg3hzUTNM1hHACgbs
          claim_id: c_JErb13NwKanyRCrk8HTQXg
          source_id: s_7uDJHF5B7XAk94UpqzckJt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7uDJHF5B7XAk94UpqzckJt
            source_type: api_record
            title: 维基数据：王爵（Q45449767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449767
            external_identifier: Q45449767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_hGZ3Wk1bhvpLcaJGnMNJtj
          claim_id: c_JErb13NwKanyRCrk8HTQXg
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_GEYCCnYM5BifuLFxfS77vG
          claim_id: c_JErb13NwKanyRCrk8HTQXg
          source_id: s_3U5kP6NchRmUxN1ysZp8Jt
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_3U5kP6NchRmUxN1ysZp8Jt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王爵（288334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288334&o=json
            external_identifier: CBDB:288334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:50.101Z
            metadata_json: null
      object_person:
        id: p_KHASkzeAzAbrH4KC5REzz6
        status: active
        display_name: 王爵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Lr6V1C1pwEawbgMgP4yGWa
        subject_person_id: p_NoAq9miu6kdHMYDNaGmzDr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qzznHsDy1MaFH1YWPbYub4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5QvEXZ9NxDsgqZz56k8Exs
          claim_id: c_Lr6V1C1pwEawbgMgP4yGWa
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_PnYFGZpE3tK1HgrTSRcitz
          claim_id: c_Lr6V1C1pwEawbgMgP4yGWa
          source_id: s_Exy2Giuho6h2p3V5NW5Bgi
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Exy2Giuho6h2p3V5NW5Bgi
            source_type: api_record
            title: 维基数据：崔氏（Q65812398）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65812398
            external_identifier: Q65812398
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_co2Xo3u5Cz5Q4kBqdG4qeA
          claim_id: c_Lr6V1C1pwEawbgMgP4yGWa
          source_id: s_ts58X1Zaop75mBb14WiveM
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source: *a1
      object_person:
        id: p_NoAq9miu6kdHMYDNaGmzDr
        status: active
        display_name: 崔氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_BtwXLyXqUW8072o1glSnMv
        subject_person_id: p_FxDnZ7tzsLrvZRviCHaK5y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qzznHsDy1MaFH1YWPbYub4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CNhe9nfZdeTRRZvUNVmZMl
          claim_id: c_BtwXLyXqUW8072o1glSnMv
          source_id: s_W4ZvUQHNuHnWpDzbwAvVrQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第九十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_W4ZvUQHNuHnWpDzbwAvVrQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王睿（288332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288332&o=json
            external_identifier: CBDB:288332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_FxDnZ7tzsLrvZRviCHaK5y
        status: active
        display_name: 王睿
        merged_into_person_id: null
    - claim:
        id: c_H20whXWxRIYGG2OS_2_RYR
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qzznHsDy1MaFH1YWPbYub4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1A4x89A3bPQ63v8HTGmsdb
          claim_id: c_H20whXWxRIYGG2OS_2_RYR
          source_id: s_ggPMxgP9MUw47QUWi5DSum
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第九十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ggPMxgP9MUw47QUWi5DSum
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文（288333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288333&o=json
            external_identifier: CBDB:288333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:57.641Z
            metadata_json: null
      object_person:
        id: p_qa4sYo9q4waHmECZyCZ8M3
        status: active
        display_name: 王文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王培龄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王培龄（生于1506年），明人物。明清進士進士，籍贯鄉寧，入仕進士。（中国历代人物传记资料库 CBDB 202447） | accepted |
| birth.date | 1506年 | accepted |
| name.primary | 王培龄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KHASkzeAzAbrH4KC5REzz6 | 王爵 | accepted |
| spouses | p_NoAq9miu6kdHMYDNaGmzDr | 崔氏 | accepted |
| ancestors | p_FxDnZ7tzsLrvZRviCHaK5y | 王睿 | accepted |
| ancestors | p_qa4sYo9q4waHmECZyCZ8M3 | 王文 | accepted |

## 外部来源

- [维基数据：崔氏（Q65812398）](https://www.wikidata.org/wiki/Q65812398)
- [维基数据：王爵（Q45449767）](https://www.wikidata.org/wiki/Q45449767)
- [维基数据：王培龄（Q45690317）](https://www.wikidata.org/wiki/Q45690317)
- [CBDB 中国历代人物传记资料库：王爵（288334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288334&o=json)
- [CBDB 中国历代人物传记资料库：王培齡（202447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202447&o=json)
- [CBDB 中国历代人物传记资料库：王睿（288332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288332&o=json)
- [CBDB 中国历代人物传记资料库：王文（288333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288333&o=json)
