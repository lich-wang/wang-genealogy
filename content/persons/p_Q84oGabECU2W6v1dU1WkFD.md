---
schema: wang-person/v1
id: p_Q84oGabECU2W6v1dU1WkFD
status: active
merged_into: null
display_name: 王蘭芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_28wH3Q9JKe47XQkxqaq2t1
        subject_person_id: p_Q84oGabECU2W6v1dU1WkFD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9Tz9tUzp5o9Xf371D3q4x
          claim_id: c_28wH3Q9JKe47XQkxqaq2t1
          source_id: s_FVCSj1b4eyM2fL26tdxKNd
          stance: supports
          locator: CBDB:467080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467080）
          source: &a1
            id: s_FVCSj1b4eyM2fL26tdxKNd
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭芳（CBDB 467080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467080&o=json
            external_identifier: CBDB:467080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dt44o7aqY24KV318T7Ctw6
        subject_person_id: p_Q84oGabECU2W6v1dU1WkFD
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
        - id: cs_5xTEEq4Em3JwHuF6QZWMFw
          claim_id: c_Dt44o7aqY24KV318T7Ctw6
          source_id: s_FVCSj1b4eyM2fL26tdxKNd
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

# 王蘭芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭芳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭芳（CBDB 467080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467080&o=json)
