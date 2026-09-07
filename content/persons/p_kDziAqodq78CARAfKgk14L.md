---
schema: wang-person/v1
id: p_kDziAqodq78CARAfKgk14L
status: active
merged_into: null
display_name: 王永泉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PuOPbPQMyM08-sZO6tGBay
        subject_person_id: p_kDziAqodq78CARAfKgk14L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永泉（1880年—1942年），字伯川，亦百川，人稱王伯川，直隶省天津府天津县人，祖籍江苏省，中华民国军事将领。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BDibFIPMotBcqHOlJ19W3E
          claim_id: c_PuOPbPQMyM08-sZO6tGBay
          source_id: s_lrPogcPgLTGt3aap6o2NBS
          stance: supports
          locator: 导言
          quotation: 王永泉（1880年—1942年），字伯川，亦百川，人稱王伯川，直
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_lrPogcPgLTGt3aap6o2NBS
            source_type: website
            title: 中文维基百科：王永泉
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B0%B8%E6%B3%89
            external_identifier: Q11573150
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vYDMppkAyBTgGPuaCZEKoz
        subject_person_id: p_kDziAqodq78CARAfKgk14L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1880年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1880-01-01
            latest: 1880-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nVvLd52NBSCgjd56F5P36b
          claim_id: c_vYDMppkAyBTgGPuaCZEKoz
          source_id: s_87ZAFtCdb2Ai5LEqW5NhQJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_87ZAFtCdb2Ai5LEqW5NhQJ
            source_type: api_record
            title: 维基数据：王永泉（Q11573150）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573150
            external_identifier: Q11573150
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:17.243Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_M34KeqKErF9BvCuXD56pNj
        subject_person_id: p_kDziAqodq78CARAfKgk14L
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1942年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1942-01-01
            latest: 1942-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xBt47MnaJjgk2t7CQQwUsx
          claim_id: c_M34KeqKErF9BvCuXD56pNj
          source_id: s_87ZAFtCdb2Ai5LEqW5NhQJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_87ZAFtCdb2Ai5LEqW5NhQJ
            source_type: api_record
            title: 维基数据：王永泉（Q11573150）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573150
            external_identifier: Q11573150
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:17.243Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y5PKK3KUWWJRPMtPR6XtKR
        subject_person_id: p_kDziAqodq78CARAfKgk14L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永泉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HUDY7BR4y2SbNZ1DQrT5zo
          claim_id: c_Y5PKK3KUWWJRPMtPR6XtKR
          source_id: s_87ZAFtCdb2Ai5LEqW5NhQJ
          stance: supports
          locator: Q11573150
          quotation: null
          interpretation_note: null
          source:
            id: s_87ZAFtCdb2Ai5LEqW5NhQJ
            source_type: api_record
            title: 维基数据：王永泉（Q11573150）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573150
            external_identifier: Q11573150
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:17.243Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王永泉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永泉（1880年—1942年），字伯川，亦百川，人稱王伯川，直隶省天津府天津县人，祖籍江苏省，中华民国军事将领。 | accepted |
| birth.date | 1880年 | accepted |
| death.date | 1942年 | accepted |
| name.primary | 王永泉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王永泉（Q11573150）](https://www.wikidata.org/wiki/Q11573150)
- [中文维基百科：王永泉](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B0%B8%E6%B3%89)
