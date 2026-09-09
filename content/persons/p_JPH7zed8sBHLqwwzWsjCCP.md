---
schema: wang-person/v1
id: p_JPH7zed8sBHLqwwzWsjCCP
status: active
merged_into: null
display_name: 王用賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zA6xV8Pu1MoT44qDZoHyHi
        subject_person_id: p_JPH7zed8sBHLqwwzWsjCCP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PM6ikQoDDj6rkQmhWqJqbW
          claim_id: c_zA6xV8Pu1MoT44qDZoHyHi
          source_id: s_YqgYDiLPQoS2pwo9kShq7d
          stance: supports
          locator: CBDB:343617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343617）
          source: &a1
            id: s_YqgYDiLPQoS2pwo9kShq7d
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 343617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343617&o=json
            external_identifier: CBDB:343617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NzHkZUFFHB2GwrcjF7iYc3
        subject_person_id: p_JPH7zed8sBHLqwwzWsjCCP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xQU2uRGud23w9qQ14fYjPZ
          claim_id: c_NzHkZUFFHB2GwrcjF7iYc3
          source_id: s_YqgYDiLPQoS2pwo9kShq7d
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王用賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用賓（CBDB 343617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343617&o=json)
