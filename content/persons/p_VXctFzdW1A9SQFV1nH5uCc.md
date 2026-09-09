---
schema: wang-person/v1
id: p_VXctFzdW1A9SQFV1nH5uCc
status: active
merged_into: null
display_name: 王章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TgEhgL4qkHCZm2dBFS9WWa
        subject_person_id: p_VXctFzdW1A9SQFV1nH5uCc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H3JgkQGoEqPx33w4HziZ7C
          claim_id: c_TgEhgL4qkHCZm2dBFS9WWa
          source_id: s_3g1RHnG4UcS762GRpQthc6
          stance: supports
          locator: CBDB:263783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263783）
          source: &a1
            id: s_3g1RHnG4UcS762GRpQthc6
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 263783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263783&o=json
            external_identifier: CBDB:263783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WNngpyS8gwnxC9C5BM6V6i
        subject_person_id: p_VXctFzdW1A9SQFV1nH5uCc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_819qVFjgsnWuX959xCEWUo
          claim_id: c_WNngpyS8gwnxC9C5BM6V6i
          source_id: s_3g1RHnG4UcS762GRpQthc6
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

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 263783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263783&o=json)
