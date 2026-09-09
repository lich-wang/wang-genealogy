---
schema: wang-person/v1
id: p_m1HeQreBCMt8ccwkceZi7v
status: active
merged_into: null
display_name: 王敬先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S286sffgmQjvJvdKB4GKoF
        subject_person_id: p_m1HeQreBCMt8ccwkceZi7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xjmD4wKpPTk4RFS3oJ3ZiF
          claim_id: c_S286sffgmQjvJvdKB4GKoF
          source_id: s_z3iQ2zpzDUFPUwFEdcNWAA
          stance: supports
          locator: CBDB:497222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497222）
          source: &a1
            id: s_z3iQ2zpzDUFPUwFEdcNWAA
            source_type: api_record
            title: 中国历代人物传记资料库：王敬先（CBDB 497222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497222&o=json
            external_identifier: CBDB:497222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G4F4G3oKC883j14yofGQZH
        subject_person_id: p_m1HeQreBCMt8ccwkceZi7v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋(劉)人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NXg9JPE3NDqG2fkCVpwz1N
          claim_id: c_G4F4G3oKC883j14yofGQZH
          source_id: s_z3iQ2zpzDUFPUwFEdcNWAA
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

# 王敬先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬先 | accepted |
| bio.summary | CBDB 记载为宋(劉)人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬先（CBDB 497222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497222&o=json)
