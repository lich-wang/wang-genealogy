---
schema: wang-person/v1
id: p_bBJ5zxzCR3cUhY3gE4sH6N
status: active
merged_into: null
display_name: 王體名
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WRd6CNFWknQsWBt7WedPHh
        subject_person_id: p_bBJ5zxzCR3cUhY3gE4sH6N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N2t5uMtarjeQaKmJFAjoXD
          claim_id: c_WRd6CNFWknQsWBt7WedPHh
          source_id: s_xJhoYewuMMC1QNJjCiRUoz
          stance: supports
          locator: CBDB:640906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640906）
          source: &a1
            id: s_xJhoYewuMMC1QNJjCiRUoz
            source_type: api_record
            title: 中国历代人物传记资料库：王體名（CBDB 640906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640906&o=json
            external_identifier: CBDB:640906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QP8eoKxrj1phaaeddNvmoT
        subject_person_id: p_bBJ5zxzCR3cUhY3gE4sH6N
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
        - id: cs_WK1QSsGxR6eJJB19hkfCGo
          claim_id: c_QP8eoKxrj1phaaeddNvmoT
          source_id: s_xJhoYewuMMC1QNJjCiRUoz
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

# 王體名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王體名 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王體名（CBDB 640906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640906&o=json)
