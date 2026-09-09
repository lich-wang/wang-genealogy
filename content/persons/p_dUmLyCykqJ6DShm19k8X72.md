---
schema: wang-person/v1
id: p_dUmLyCykqJ6DShm19k8X72
status: active
merged_into: null
display_name: 王琳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rN21sV7iT32P9Ci6K7zhUz
        subject_person_id: p_dUmLyCykqJ6DShm19k8X72
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CGTsB8FD2f1TLMf3ZRy63u
          claim_id: c_rN21sV7iT32P9Ci6K7zhUz
          source_id: s_MjQpQjgLNzwQ7fr5h8rrRs
          stance: supports
          locator: CBDB:250458
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250458）
          source: &a1
            id: s_MjQpQjgLNzwQ7fr5h8rrRs
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 250458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250458&o=json
            external_identifier: CBDB:250458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zZYsUUoTYuFYjEnjYYNfKJ
        subject_person_id: p_dUmLyCykqJ6DShm19k8X72
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
        - id: cs_h2Jord9q35UNauqPiY8FmH
          claim_id: c_zZYsUUoTYuFYjEnjYYNfKJ
          source_id: s_MjQpQjgLNzwQ7fr5h8rrRs
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

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 250458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250458&o=json)
