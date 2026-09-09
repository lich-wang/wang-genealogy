---
schema: wang-person/v1
id: p_DCs3QgdM1zdAeAa1gjm3q1
status: active
merged_into: null
display_name: 王步蟾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKQ213JQR7GHFeFzqg9gWJ
        subject_person_id: p_DCs3QgdM1zdAeAa1gjm3q1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王步蟾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QmMm69io1q7VLJWL1un9Y6
          claim_id: c_DKQ213JQR7GHFeFzqg9gWJ
          source_id: s_1PqmLPudE8BTTv1euBBtTH
          stance: supports
          locator: CBDB:638913
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638913）
          source: &a1
            id: s_1PqmLPudE8BTTv1euBBtTH
            source_type: api_record
            title: 中国历代人物传记资料库：王步蟾（CBDB 638913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638913&o=json
            external_identifier: CBDB:638913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EaQN98YU5hQe359bJM1113
        subject_person_id: p_DCs3QgdM1zdAeAa1gjm3q1
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
        - id: cs_wWZqjBGQVtXE3F3KM7QBhD
          claim_id: c_EaQN98YU5hQe359bJM1113
          source_id: s_1PqmLPudE8BTTv1euBBtTH
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

# 王步蟾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王步蟾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王步蟾（CBDB 638913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638913&o=json)
