---
schema: wang-person/v1
id: p_NSo35ZrtXKrC4qf4WqWAi8
status: active
merged_into: null
display_name: 王用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gvAgJL48A6sjuiXBmzwzEC
        subject_person_id: p_NSo35ZrtXKrC4qf4WqWAi8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gfxAt95jB8bq2FFDUoTNFL
          claim_id: c_gvAgJL48A6sjuiXBmzwzEC
          source_id: s_t949HeVRyhrFB99edJ735q
          stance: supports
          locator: CBDB:509604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509604）
          source: &a1
            id: s_t949HeVRyhrFB99edJ735q
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 509604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509604&o=json
            external_identifier: CBDB:509604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WvEM2U3tf3SMAXQX5EStQy
        subject_person_id: p_NSo35ZrtXKrC4qf4WqWAi8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用，明人物。曾任州判官。（中国历代人物传记资料库 CBDB 509604）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KMl7I4MCoTcowsXv0bMIfw
          claim_id: c_WvEM2U3tf3SMAXQX5EStQy
          source_id: s_t949HeVRyhrFB99edJ735q
          stance: supports
          locator: CBDB:509604
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用 | accepted |
| bio.summary | 王用，明人物。曾任州判官。（中国历代人物传记资料库 CBDB 509604） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 509604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509604&o=json)
