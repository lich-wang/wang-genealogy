---
schema: wang-person/v1
id: p_2JRR43piFcBKpoGfKJhFCE
status: active
merged_into: null
display_name: 王烝
cbdb_id: 309657
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vXwgBFDGy8E9RoahHTQXnd
        subject_person_id: p_2JRR43piFcBKpoGfKJhFCE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烝，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309657）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_N1m_8Tb1gcCg5Lrp3y986q
          claim_id: c_vXwgBFDGy8E9RoahHTQXnd
          source_id: s_9Aw2KyGDEFMnm51uWNHssL
          stance: supports
          locator: CBDB:309657
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9Aw2KyGDEFMnm51uWNHssL
            source_type: api_record
            title: 中国历代人物传记资料库：王烝（CBDB 309657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309657&o=json
            external_identifier: CBDB:309657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4eF2ZJW1y3c9VDaGy21ke2
        subject_person_id: p_2JRR43piFcBKpoGfKJhFCE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GCFXTUoBptD5VQS64ncYR8
          claim_id: c_4eF2ZJW1y3c9VDaGy21ke2
          source_id: s_9Aw2KyGDEFMnm51uWNHssL
          stance: supports
          locator: CBDB:309657
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
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

# 王烝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王烝，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309657） | accepted |
| name.primary | 王烝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烝（CBDB 309657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309657&o=json)
