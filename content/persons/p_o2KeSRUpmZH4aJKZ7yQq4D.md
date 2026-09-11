---
schema: wang-person/v1
id: p_o2KeSRUpmZH4aJKZ7yQq4D
status: active
merged_into: null
display_name: 王夔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BFBqbBLjcPD9R2JPUjwfGP
        subject_person_id: p_o2KeSRUpmZH4aJKZ7yQq4D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EEQSffqF7PBwcDMTvbfQEB
          claim_id: c_BFBqbBLjcPD9R2JPUjwfGP
          source_id: s_SMToZwCcVZ1mfG8QGFjfrJ
          stance: supports
          locator: CBDB:454403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454403）
          source: &a1
            id: s_SMToZwCcVZ1mfG8QGFjfrJ
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 454403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454403&o=json
            external_identifier: CBDB:454403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yNETAttionXZas4yDkHLu1
        subject_person_id: p_o2KeSRUpmZH4aJKZ7yQq4D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夔，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 454403）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_38DsNjU3vF-jVmS1xusIRC
          claim_id: c_yNETAttionXZas4yDkHLu1
          source_id: s_SMToZwCcVZ1mfG8QGFjfrJ
          stance: supports
          locator: CBDB:454403
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

# 王夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夔 | accepted |
| bio.summary | 王夔，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 454403） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夔（CBDB 454403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454403&o=json)
