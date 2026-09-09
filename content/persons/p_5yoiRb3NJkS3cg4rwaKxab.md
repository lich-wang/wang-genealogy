---
schema: wang-person/v1
id: p_5yoiRb3NJkS3cg4rwaKxab
status: active
merged_into: null
display_name: 王之霦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WjbgyXfAbbkSxMDrxcxRie
        subject_person_id: p_5yoiRb3NJkS3cg4rwaKxab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之霦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gvM9QykfET5TJhEhbNCD9S
          claim_id: c_WjbgyXfAbbkSxMDrxcxRie
          source_id: s_i9xuYd6mNG1dPiU6WnR6WR
          stance: supports
          locator: CBDB:635824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635824）
          source: &a1
            id: s_i9xuYd6mNG1dPiU6WnR6WR
            source_type: api_record
            title: 中国历代人物传记资料库：王之霦（CBDB 635824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635824&o=json
            external_identifier: CBDB:635824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XRJUXP3PpkDNGXBHFmDv8k
        subject_person_id: p_5yoiRb3NJkS3cg4rwaKxab
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
        - id: cs_xhv7AZvVoKFhELm5QNzmDW
          claim_id: c_XRJUXP3PpkDNGXBHFmDv8k
          source_id: s_i9xuYd6mNG1dPiU6WnR6WR
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

# 王之霦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之霦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之霦（CBDB 635824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635824&o=json)
