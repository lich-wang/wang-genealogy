---
schema: wang-person/v1
id: p_zN6K9eNDdGSr2EakpS7qf6
status: active
merged_into: null
display_name: 王際會
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cBeQgvHTYvxQJJGAg9EX6N
        subject_person_id: p_zN6K9eNDdGSr2EakpS7qf6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NhbhQ9AnVfatdNxWN9v5Yk
          claim_id: c_cBeQgvHTYvxQJJGAg9EX6N
          source_id: s_7Q2ax75kHe6LVFPuzvmasQ
          stance: supports
          locator: CBDB:640789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640789）
          source: &a1
            id: s_7Q2ax75kHe6LVFPuzvmasQ
            source_type: api_record
            title: 中国历代人物传记资料库：王際會（CBDB 640789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640789&o=json
            external_identifier: CBDB:640789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zQio2FPHxMtTzs46yDDpLp
        subject_person_id: p_zN6K9eNDdGSr2EakpS7qf6
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
        - id: cs_jwUuSSexPo97nB1TSXorqQ
          claim_id: c_zQio2FPHxMtTzs46yDDpLp
          source_id: s_7Q2ax75kHe6LVFPuzvmasQ
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

# 王際會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王際會 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王際會（CBDB 640789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640789&o=json)
