---
schema: wang-person/v1
id: p_zPbRkqGuDNx8wqWXtZCj9n
status: active
merged_into: null
display_name: 华氏
cbdb_id: 37823
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iuZ1W5lwO4XZj2yBVU6WHC
        subject_person_id: p_zPbRkqGuDNx8wqWXtZCj9n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 华氏，史料所见人物。本项目依据《华氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shMqJV25_Ce-Q4rONuH9W3
          claim_id: c_iuZ1W5lwO4XZj2yBVU6WHC
          source_id: s_9PGPgGT51GGgN7dAyjwbno
          stance: supports
          locator: Q45434003
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9PGPgGT51GGgN7dAyjwbno
            source_type: api_record
            title: 维基数据：华氏（Q45434003）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45434003
            external_identifier: Q45434003
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2sP45CXaUeqxH8fB3Jkdps
        subject_person_id: p_zPbRkqGuDNx8wqWXtZCj9n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 华氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ke6u4jHiWbR4mkQv1uysRq
          claim_id: c_2sP45CXaUeqxH8fB3Jkdps
          source_id: s_9PGPgGT51GGgN7dAyjwbno
          stance: supports
          locator: Q45434003
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
        - id: cs_KkBu3XBst4tDnY7pcU5Uy6
          claim_id: c_2sP45CXaUeqxH8fB3Jkdps
          source_id: s_EiurBYpV7mVedJPeqs25AR
          stance: supports
          locator: CBDB:37823
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_EiurBYpV7mVedJPeqs25AR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：華氏（37823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37823&o=json
            external_identifier: CBDB:37823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GqLwmCdkxwGWXmQ2yfXCVw
        subject_person_id: p_ro6G6j28vQb3THHmGL9bxo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zPbRkqGuDNx8wqWXtZCj9n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8GNaSXCTdDiE1p1dQFxLCs
          claim_id: c_GqLwmCdkxwGWXmQ2yfXCVw
          source_id: s_9PGPgGT51GGgN7dAyjwbno
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_y67837A3oTYQ8aws3fXpH2
          claim_id: c_GqLwmCdkxwGWXmQ2yfXCVw
          source_id: s_HJKcTcPnUSmSmFGwkGRuvk
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_HJKcTcPnUSmSmFGwkGRuvk
            source_type: api_record
            title: 维基数据：王冲（Q45381153）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381153
            external_identifier: Q45381153
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
        - id: cs_V4s9g3wpdMVNDRA4V4Fjdt
          claim_id: c_GqLwmCdkxwGWXmQ2yfXCVw
          source_id: s_23CwhfdKCNWQ6K5JjgxfBC
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_23CwhfdKCNWQ6K5JjgxfBC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沖（15752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15752&o=json
            external_identifier: CBDB:15752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:14.256Z
            metadata_json: null
      object_person:
        id: p_ro6G6j28vQb3THHmGL9bxo
        status: active
        display_name: 王冲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 华氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 华氏，史料所见人物。本项目依据《华氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 华氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ro6G6j28vQb3THHmGL9bxo | 王冲 | accepted |

## 外部来源

- [维基数据：华氏（Q45434003）](https://www.wikidata.org/wiki/Q45434003)
- [维基数据：王冲（Q45381153）](https://www.wikidata.org/wiki/Q45381153)
- [CBDB 中国历代人物传记资料库：華氏（37823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37823&o=json)
- [CBDB 中国历代人物传记资料库：王沖（15752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15752&o=json)
