---
schema: wang-person/v1
id: p_zR6Hy1pkvyq6WMKHN4uQJz
status: active
merged_into: null
display_name: 王梵志
cbdb_id: 92072
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zMXGor8E3tAi76MoKU7qi9
        subject_person_id: p_zR6Hy1pkvyq6WMKHN4uQJz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梵志（生于600年），史料所见人物。本项目依据《中国历代人物传记资料库：王梵志（CBDB 92072）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ZRvu8GmyHnbdo8S6C1K5Gb
          claim_id: c_zMXGor8E3tAi76MoKU7qi9
          source_id: s_gHJ2Le8LZqk2c5XuUoJ2AH
          stance: supports
          locator: CBDB:92072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gHJ2Le8LZqk2c5XuUoJ2AH
            source_type: api_record
            title: 中国历代人物传记资料库：王梵志（CBDB 92072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92072&o=json
            external_identifier: CBDB:92072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EGw6QmMp5u9E9PFWAhMN6u
        subject_person_id: p_zR6Hy1pkvyq6WMKHN4uQJz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 600年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 0600-01-01
            latest: 0600-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Mr1TU1TRBf6VC8YHkHch6
          claim_id: c_EGw6QmMp5u9E9PFWAhMN6u
          source_id: s_gHJ2Le8LZqk2c5XuUoJ2AH
          stance: supports
          locator: CBDB:92072
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 600
          source:
            id: s_gHJ2Le8LZqk2c5XuUoJ2AH
            source_type: api_record
            title: 中国历代人物传记资料库：王梵志（CBDB 92072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92072&o=json
            external_identifier: CBDB:92072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xNrxNShJsVmFAVaCgjeu8L
        subject_person_id: p_zR6Hy1pkvyq6WMKHN4uQJz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梵志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8yPURk5aWJ5HFZviLuyYFQ
          claim_id: c_xNrxNShJsVmFAVaCgjeu8L
          source_id: s_gHJ2Le8LZqk2c5XuUoJ2AH
          stance: supports
          locator: CBDB:92072
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 600
          source: *a1
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

# 王梵志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王梵志（生于600年），史料所见人物。本项目依据《中国历代人物传记资料库：王梵志（CBDB 92072）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 600年 | accepted |
| name.primary | 王梵志 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王梵志（CBDB 92072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92072&o=json)
